import React from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',     // ← replace
        'YOUR_TEMPLATE_ID',    // ← replace
        e.currentTarget,
        'YOUR_PUBLIC_KEY'      // ← replace
      )
      .then(
        () => {
          alert('Message sent successfully!');
          e.currentTarget.reset();
        },
        () => {
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 scroll-mt-navbar">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">

          {/* LEFT */}
          <div className="lg:w-1/2 p-12 lg:p-20 bg-slate-900 text-white">
            <h2 className="text-4xl font-bold mb-8">
              Contact Pacific Pumps & Motors
            </h2>

            <div className="space-y-8 mb-12">
              <div>
                <h4 className="text-green-400 text-xs font-bold uppercase mb-2">
                  Office Address
                </h4>
                <p className="text-slate-300 text-lg">
                  18-3-6/79, Hashamabad, Chandrayangutta,
                  Hyderabad T.S - 500005
                </p>
              </div>

              <div>
                <h4 className="text-green-400 text-xs font-bold uppercase mb-2">
                  Phone Support
                </h4>
                <a
                  href="tel:04064643311"
                  className="text-white hover:text-green-300 block mb-1"
                >
                  040 6464 3311
                </a>
              </div>

              <div>
                <h4 className="text-green-400 text-xs font-bold uppercase mb-2">
                  Email Address
                </h4>
                <a
                  href="mailto:pacifichyd1@gmail.com"
                  className="text-white hover:text-green-300"
                >
                  pacifichyd1@gmail.com
                </a>
              </div>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-xl italic text-slate-400">
              "Experience world-class quality pumps backed by over 30 years of expertise."
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:w-1/2 p-12 lg:p-20">
            <h3 className="text-2xl font-bold mb-8 text-slate-900">
              Request a Quote
            </h3>

            <form className="space-y-6" onSubmit={sendEmail}>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-green-600"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-green-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-green-600"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition shadow-lg"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
