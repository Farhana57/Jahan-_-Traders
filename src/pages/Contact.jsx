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
    
    {/* Left Side: Contact Information (Slides in from Left) */}
    <div className="bg-white p-10 sm:p-12 rounded-3xl shadow-2xl border border-slate-200 animate-on-scroll slide-from-left h-full">
      <h3 className="text-3xl font-extrabold text-slate-900 mb-8">
        Contact Information
      </h3>

      <div className="space-y-8">
        
        {/* Office Address */}
        <div className="flex items-start gap-5 p-5 rounded-2xl transition-all duration-300 hover:bg-slate-100 group">
          <div className="w-16 h-16 rounded-2xl bg-emerald-300 text-emerald-700 flex items-center justify-center text-2xl shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white mt-1">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-lg">Office Address</h4>
            <p className="text-slate-800 text-base mt-1.5 leading-relaxed">
              JAHAN Traders.<br />
              3 R K mission road, Motijheel C/A, Dhaka 1203, Bangladesh.
            </p>
          </div>
        </div>

        {/* Phone Number */}
        <div className="flex items-start gap-5 p-5 rounded-2xl transition-all duration-300 hover:bg-slate-100 group">
          <div className="w-16 h-16 rounded-2xl bg-emerald-300 text-emerald-900 flex items-center justify-center text-2xl shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white mt-1">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-lg">Phone</h4>
            <a href="tel:+8801711523825" className="text-emerald-700 hover:underline text-base font-semibold mt-1.5 inline-block">
              +880 1711 523825
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-5 p-5 rounded-2xl transition-all duration-300 hover:bg-slate-100 group">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-900 flex items-center justify-center text-2xl shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white mt-1">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-lg">Email</h4>
            <a href="mailto:Jahantraders86@gmail.com" className="text-emerald-900 hover:underline text-base font-semibold mt-1.5 inline-block">
              Jahantraders86@gmail.com
            </a>
          </div>
        </div>

        {/* Website */}
        <div className="flex items-start gap-5 p-5 rounded-2xl transition-all duration-300 hover:bg-slate-100 group">
          <div className="w-16 h-16 rounded-2xl bg-emerald-300 text-emerald-900 flex items-center justify-center text-2xl shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white mt-1">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-lg">Website</h4>
            <span className="text-slate-900 text-base font-medium mt-1.5 inline-block">jahantradersbd.com</span>
          </div>
        </div>

      </div>
    </div>

    {/* Right Side: Contact Form with Lighter Background Image (Slides in from Right) */}
    <div 
      className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 p-8 sm:p-10 bg-cover bg-center bg-no-repeat animate-on-scroll slide-from-right" 
      style={{ 
        backgroundImage: "linear-gradient(to bottom, rgba(11, 20, 38, 0.4), rgba(11, 20, 38, 0.4)), url('https://plus.unsplash.com/premium_photo-1675738774450-0831cf002f64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEp1dGUlMjBZYXJuJTIwJTI2JTIwVHdpbmV8ZW58MHx8MHx8fDA%3D')" 
      }}
    >
      <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-8 relative z-10">
        Send Us a Message
      </h3>

      {submitted && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-500 text-slate-950 font-bold text-center shadow-lg transition-all animate-bounce relative z-10">
          <i className="fa-solid fa-circle-check mr-2"></i> Thank you! Your message has been sent successfully.
        </div>
      )}

      <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-white mb-2">Full Name</label>
            <input 
              type="text" 
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your Name" 
              required
              className="w-full p-4 rounded-xl bg-white/90 border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-emerald-400 outline-none transition-all" 
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-white mb-2">Email Address</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email" 
              required
              className="w-full p-4 rounded-xl bg-white/90 border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-emerald-400 outline-none transition-all" 
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-white mb-2">Phone Number</label>
          <input 
            type="text" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone" 
            className="w-full p-4 rounded-xl bg-white/90 border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-emerald-400 outline-none transition-all" 
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-white mb-2">Subject</label>
          <input 
            type="text" 
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject" 
            required
            className="w-full p-4 rounded-xl bg-white/90 border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-emerald-400 outline-none transition-all" 
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-white mb-2">Message</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..." 
            rows="4" 
            required
            className="w-full p-4 rounded-xl bg-white/90 border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-emerald-400 outline-none transition-all resize-none"
          ></textarea>
        </div>

        <button 
                        type="submit" 
                        className="relative overflow-hidden group w-full bg-emerald-500 text-slate-950 py-4 rounded-2xl font-bold text-base shadow-lg hover:bg-emerald-400 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
                    >
                         <span className="absolute inset-x-0 top-0 h-0 bg-amber-400 transition-all duration-300 ease-in-out group-hover:h-full z-0"></span>
                         <span className="relative z-10 text-slate-950 font-bold transition-colors duration-300 flex items-center justify-center gap-2">
                             Send Messege <i className="fa-solid fa-paper-plane"></i>
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