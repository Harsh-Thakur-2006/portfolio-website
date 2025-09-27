import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Contact Me</h2>
        <div className="max-w-3xl mx-auto text-lg text-gray-600">
          <p className="mb-4">
            I’d love to hear from you! Whether you have a question, a project idea, or just want to say hi, feel free to reach out.
          </p>
          <p>
            You can contact me via email at <a href="mailto:harsh06072006@gmail.com" className="text-blue-600 underline">harsh06072006@gmail.com</a> or connect with me on social media.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;