import emailjs from '@emailjs/browser';

// Webhook configuration
const WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/k90zUH3RgEQLfj7Yc55b/webhook-trigger/54670718-ea44-43a1-a81a-680ab3d5f67f";
const DEBUG_MODE = false; // Enable for troubleshooting

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  city: string;
  service: string;
  message?: string;
}

// Send data to webhook
const sendToWebhook = async (data: EmailData): Promise<boolean> => {
  try {
    const webhookData = {
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        city: data.city,
        message: data.message || 'Geen aanvullende informatie'
      }
    };

    if (DEBUG_MODE) {
      console.log('Sending to webhook:', webhookData);
    }

    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(webhookData)
    });

    if (DEBUG_MODE) {
      console.log('Webhook response:', response.status);
    }

    if (!response.ok) {
      if (DEBUG_MODE) {
        console.error('Webhook error:', response.statusText);
      }
      return false;
    }
    
    return true;
  } catch (error) {
    if (DEBUG_MODE) {
      console.error('Webhook exception:', error);
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
  // Send to both services in parallel
  const [emailJSSuccess, webhookSuccess] = await Promise.all([
    sendViaEmailJS(data),
    sendToWebhook(data)
  ]);
  
  if (DEBUG_MODE) {
    console.log('Email send results:', { emailJSSuccess, webhookSuccess });
  }
  
  // Only throw error if BOTH methods fail
  if (!emailJSSuccess && !webhookSuccess) {
    throw new Error('Failed to send contact form data');
  }
};

// Test function for webhook only (used in test page)
export const sendToWebhookOnly = async (data: EmailData): Promise<boolean> => {
  return sendToWebhook(data);
};