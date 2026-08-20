import React, { useState, useEffect } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Intersection Observer for Scroll Animations (Slide from Left & Right)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setSubmitted(true);
    setFormData({ fullName: '', email: '', subject: '', message: '' });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="bg-white">
      {/* Contact Us Top Hero Header Banner */}
      <section className="bg-emerald-900 py-16 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="text-emerald-100 text-lg sm:text-xl">
            We'd love to hear from you. Get in touch with JAHAN Traders for any inquiries.
          </p>
        </div>
      </section>
{/* Main Contact Section */}
<section id="contact-page" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden space-y-16">
  
  {/* Top Grid: Left Side Contact Info & Right Side Form */}
  <div className="grid lg:grid-cols-2 gap-12 items-start">
    
{/* Right Side: Contact Form with Lighter Background Image (Slides in from Right) */}
    <div 
      className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 p-6 sm:p-10 bg-cover bg-center bg-no-repeat animate-on-scroll slide-from-right" 
      style={{ 
        backgroundImage: "linear-gradient(to bottom, rgba(11, 20, 38, 0.75), rgba(11, 20, 38, 0.75)), url('https://plus.unsplash.com/premium_photo-1675738774450-0831cf002f64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEp1dGUlMjBZYXJuJTIwJTI2JTIwVHdpbmV8ZW58MHx8MHx8fDA%3D')" 
      }}
    >
      <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-6 sm:mb-8 relative z-10">
        Send Us a Message
      </h3>

      {submitted && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-500 text-slate-950 font-bold text-center shadow-lg transition-all animate-bounce relative z-10 text-sm sm:text-base">
          <i className="fa-solid fa-circle-check mr-2"></i> Thank you! Your message has been sent successfully.
        </div>
      )}

      <form onSubmit={handleSubmit} className="relative z-10 space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-white mb-2">Full Name</label>
            <input 
              type="text" 
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your Name" 
              required
              className="w-full p-3 sm:p-4 rounded-xl bg-white/90 border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-emerald-400 outline-none transition-all text-sm sm:text-base" 
            />
          </div>
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-white mb-2">Email Address</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email" 
              required
              className="w-full p-3 sm:p-4 rounded-xl bg-white/90 border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-emerald-400 outline-none transition-all text-sm sm:text-base" 
            />
          </div>
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-semibold text-white mb-2">Phone Number</label>
          <input 
            type="text" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone" 
            className="w-full p-3 sm:p-4 rounded-xl bg-white/90 border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-emerald-400 outline-none transition-all text-sm sm:text-base" 
          />
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-semibold text-white mb-2">Subject</label>
          <input 
            type="text" 
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject" 
            required
            className="w-full p-3 sm:p-4 rounded-xl bg-white/90 border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-emerald-400 outline-none transition-all text-sm sm:text-base" 
          />
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-semibold text-white mb-2">Message</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..." 
            rows="4" 
            required
            className="w-full p-3 sm:p-4 rounded-xl bg-white/90 border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-emerald-400 outline-none transition-all resize-none text-sm sm:text-base"
          ></textarea>
        </div>

        <button 
            type="submit" 
            className="relative overflow-hidden group w-full bg-emerald-500 text-slate-950 py-3.5 sm:py-4 rounded-2xl font-bold text-sm sm:text-base shadow-lg hover:bg-emerald-400 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
        >
             <span className="absolute inset-x-0 top-0 h-0 bg-amber-400 transition-all duration-300 ease-in-out group-hover:h-full z-0"></span>
             <span className="relative z-10 text-slate-950 font-bold transition-colors duration-300 flex items-center justify-center gap-2">
                 Send Message <i className="fa-solid fa-paper-plane"></i>
             </span>
        </button>
      </form>
    </div>
  </div>

  {/* Bottom Section: Full Width Google Map */}
  <div className="w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white animate-on-scroll">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.889311654394!2d90.3912534!3d23.7509797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bd566cef75%3A0xcfe34440aa1192eb!2sDhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd" 
      width="100%" 
      height="100%" 
      style={{ border: 0 }} 
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
    >
    </iframe>
  </div>

</section>
    </div>
  );
}
