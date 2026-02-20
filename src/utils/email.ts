import emailjs from '@emailjs/browser';

const DEBUG_MODE = false; // Enable for troubleshooting

// LeadFlow CRM configuration
const LEADFLOW_URL = "https://wetryleadflow.com/api/webhooks/leads";
const LEADFLOW_API_KEY = "lf_lRyHo1ENukt9VsG9gYT8EKeDA_nKuoQ1";

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  city: string;
  service: string;
  message?: string;
}

// Send data to LeadFlow CRM
const sendToLeadflow = async (data: EmailData): Promise<boolean> => {
  try {
    const nameParts = data.name.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    const leadflowData = {
      firstName,
      lastName,
      email: data.email,
      phone: data.phone,
      message: data.message,
      source: 'website-contact',
      customFields: {
        city: data.city,
        woonplaats: data.city
      }
    };

    if (DEBUG_MODE) {
      console.log('Sending data to Leadflow CRM:', leadflowData);
    }

    const response = await fetch(LEADFLOW_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": LEADFLOW_API_KEY
      },
      body: JSON.stringify(leadflowData)
    });

    if (!response.ok) {
      const errorText = await response.text();
      if (DEBUG_MODE) {
        console.error(`Leadflow error (${response.status}):`, errorText);
      }
      return false;
    }

    if (DEBUG_MODE) {
      console.log('Leadflow submission successful');
    }
    return true;
  } catch (error) {
    if (DEBUG_MODE) {
      console.error('Leadflow submission failed:', error);
    }
    return false;
  }
};

// Send via EmailJS
const sendViaEmailJS = async (data: EmailData): Promise<boolean> => {
  try {
    const serviceMapping: Record<string, string> = {
      'installatie': 'Nieuwe airco installeren',
      'onderhoud': 'Airco onderhoud',
      'reparatie': 'Airco reparatie',
      'advies': 'Advies op maat'
    };

    const emailData = {
      to_name: 'Airco Bedrijf Limburg',
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      service: `Dienst: ${serviceMapping[data.service] || data.service}`,
      city: data.city,
      message: data.message || 'Geen aanvullende informatie',
      to_email: 'info@aircobedrijflimburg.nl'
    };

    if (DEBUG_MODE) {
      console.log('Sending via EmailJS:', emailData);
    }

    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      emailData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    return true;
  } catch (error) {
    if (DEBUG_MODE) {
      console.error('EmailJS error:', error);
    }
    return false;
  }
};

// Main send function that tries both methods
export const sendEmail = async (data: EmailData): Promise<void> => {
  // Send to all services in parallel
  const [emailJSSuccess, leadflowSuccess] = await Promise.all([
    sendViaEmailJS(data),
    sendToLeadflow(data)
  ]);

  if (DEBUG_MODE) {
    console.log('Email send results:', { emailJSSuccess, leadflowSuccess });
  }

  // Only throw error if ALL methods fail
  if (!emailJSSuccess && !leadflowSuccess) {
    throw new Error('Failed to send contact form data');
  }
};
