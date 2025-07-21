import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { sendToWebhookOnly } from '../utils/email';

interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  service: string;
  message: string;
}

const ContactWebhookTest = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [webhookStatus, setWebhookStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setWebhookStatus('idle');
    
    try {
      const success = await sendToWebhookOnly({
        name: data.name,
        email: data.email,
        phone: data.phone,
        city: data.city,
        service: data.service,
        message: data.message
      });
      
      if (success) {
        setWebhookStatus('success');
        setSubmitMessage('✅ Webhook successfully sent! Data received by GoHighLevel.');
        reset();
      } else {
        setWebhookStatus('error');
        setSubmitMessage('❌ Webhook failed. Check console for details.');
      }
    } catch (error) {
      setWebhookStatus('error');
      setSubmitMessage('❌ Error occurred while sending webhook.');
      console.error('Webhook test error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Webhook Test Page - Airco Bedrijf Limburg</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="container max-w-2xl">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <h1 className="text-lg font-semibold text-yellow-900 mb-2">
              ⚠️ Webhook Test Page
            </h1>
            <p className="text-yellow-800">
              This page is for testing GoHighLevel webhook integration only. 
              It does not send emails via EmailJS.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Test GoHighLevel Webhook
            </h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    className="input"
                    defaultValue="Test User"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    type="email"
                    className="input"
                    defaultValue="test@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone *
                  </label>
                  <input
                    {...register('phone', { required: 'Phone is required' })}
                    type="tel"
                    className="input"
                    defaultValue="0612345678"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City *
                  </label>
                  <input
                    {...register('city', { required: 'City is required' })}
                    type="text"
                    className="input"
                    defaultValue="Maastricht"
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service *
                </label>
                <select
                  {...register('service', { required: 'Select a service' })}
                  className="input"
                  defaultValue="installatie"
                >
                  <option value="">Select service</option>
                  <option value="installatie">Airco installation</option>
                  <option value="onderhoud">Airco maintenance</option>
                  <option value="reparatie">Airco repair</option>
                  <option value="advies">Custom advice</option>
                </select>
                {errors.service && (
                  <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="input"
                  defaultValue="This is a test message from the webhook test page."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-50"
              >
                {isSubmitting ? 'Sending to Webhook...' : 'Test Webhook'}
              </button>

              {submitMessage && (
                <div className={`p-4 rounded-lg text-center font-medium ${
                  webhookStatus === 'success' 
                    ? 'bg-green-50 text-green-800' 
                    : 'bg-red-50 text-red-800'
                }`}>
                  {submitMessage}
                </div>
              )}
            </form>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Webhook Details:</h3>
              <p className="text-sm text-gray-600 font-mono break-all">
                URL: https://services.leadconnectorhq.com/hooks/k90zUH3RgEQLfj7Yc55b/webhook-trigger/54670718-ea44-43a1-a81a-680ab3d5f67f
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Method: POST | Content-Type: application/json
              </p>
              <details className="mt-4">
                <summary className="cursor-pointer text-sm font-medium text-gray-700">
                  View expected payload structure
                </summary>
                <pre className="mt-2 p-2 bg-white rounded text-xs overflow-x-auto">
{`{
  "data": {
    "name": "Customer Name",
    "email": "customer@email.com",
    "phone": "0612345678",
    "city": "Maastricht",
    "message": "Message content"
  }
}`}
                </pre>
              </details>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactWebhookTest;