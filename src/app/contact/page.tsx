import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <main className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600">
            Have a question or want to work together? Send us a message!
          </p>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
