import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Flame } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number format";
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API storage / server-side email send
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", phone: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 bg-brand-black overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-semibold tracking-widest uppercase text-brand-red font-mono">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bebas tracking-wide text-brand-text">
            VISIT THE ZONE OR ENQUIRE
          </h2>
          <div className="h-1 w-16 bg-brand-red mx-auto" />
          <p className="text-brand-muted text-lg font-light">
            Have questions about our routines, pricing tiers, or scheduling? Walk in or send a direct query.
          </p>
        </div>

        {/* Contact Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch max-w-6xl mx-auto">
          
          {/* Left Side: Map & Direct Info */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-2xl font-bebas tracking-wider text-brand-text">
                FITNESSTAAN HEADQUARTERS
              </h3>
              
              <div className="space-y-5">
                {/* Location Block */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-brand-red/10 border border-brand-red/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-brand-muted block">Location Address</span>
                    <p className="text-brand-text text-sm sm:text-base leading-relaxed font-medium">
                      Al-Badar Road, Shamsi Society, Rafah-e-Aam Society, Shah Faisal Colony, Karachi, Pakistan
                    </p>
                  </div>
                </div>

                {/* Phone Block */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-brand-red/10 border border-brand-red/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-brand-muted block">Direct Call Line</span>
                    <a href="tel:+923333156396" className="text-brand-text text-lg font-bebas tracking-wider hover:text-brand-red transition-colors block mt-0.5">
                      +92 333 3156396
                    </a>
                  </div>
                </div>

                {/* Hours Block */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-brand-red/10 border border-brand-red/20 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-brand-muted block">Business Hours</span>
                    <p className="text-brand-text text-sm sm:text-base font-semibold">
                      Open Daily (Closing: 12:00 AM midnight)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed styled with a dark filter overlay */}
            <div className="relative w-full h-[250px] rounded-sm overflow-hidden border border-white/5 shadow-xl bg-brand-charcoal">
              <iframe
                title="Fitnesstaan Gym Location Map"
                src="https://maps.google.com/maps?q=Fitnesstaan%20Gym%20Shah%20Faisal%20Colony%20Karachi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 grayscale invert opacity-80"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-3 left-3 bg-brand-black/90 px-3 py-1.5 rounded-sm border border-brand-red/20 flex items-center gap-1.5">
                <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-mono uppercase tracking-wider text-brand-text font-bold">Directions Active</span>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-sm bg-brand-charcoal border border-white/5 shadow-2xl h-full flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate
                  >
                    <div className="border-b border-white/5 pb-4 mb-4">
                      <h3 className="text-2xl font-bebas tracking-wider text-brand-text">SEND AN INQUIRY</h3>
                      <p className="text-xs text-brand-muted font-light mt-1">Fields marked with * are necessary.</p>
                    </div>

                    {/* Name input */}
                    <div className="space-y-1.5">
                      <label htmlFor="name-field" className="text-xs font-mono uppercase tracking-widest text-brand-muted font-bold">
                        Full Name *
                      </label>
                      <input
                        id="name-field"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full bg-brand-black border rounded-sm px-4 py-3 text-sm text-brand-text focus:outline-none focus:border-brand-red transition-all ${
                          errors.name ? "border-brand-red" : "border-white/10"
                        }`}
                        placeholder="e.g. Muhammad Ali"
                      />
                      {errors.name && <p className="text-brand-red text-xs font-mono">{errors.name}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Phone input */}
                      <div className="space-y-1.5">
                        <label htmlFor="phone-field" className="text-xs font-mono uppercase tracking-widest text-brand-muted font-bold">
                          Phone Number *
                        </label>
                        <input
                          id="phone-field"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full bg-brand-black border rounded-sm px-4 py-3 text-sm text-brand-text focus:outline-none focus:border-brand-red transition-all ${
                            errors.phone ? "border-brand-red" : "border-white/10"
                          }`}
                          placeholder="e.g. +92 333 3156396"
                        />
                        {errors.phone && <p className="text-brand-red text-xs font-mono">{errors.phone}</p>}
                      </div>

                      {/* Email input */}
                      <div className="space-y-1.5">
                        <label htmlFor="email-field" className="text-xs font-mono uppercase tracking-widest text-brand-muted font-bold">
                          Email Address (Optional)
                        </label>
                        <input
                          id="email-field"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full bg-brand-black border rounded-sm px-4 py-3 text-sm text-brand-text focus:outline-none focus:border-brand-red transition-all ${
                            errors.email ? "border-brand-red" : "border-white/10"
                          }`}
                          placeholder="e.g. custom@mail.com"
                        />
                        {errors.email && <p className="text-brand-red text-xs font-mono">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Message input */}
                    <div className="space-y-1.5">
                      <label htmlFor="message-field" className="text-xs font-mono uppercase tracking-widest text-brand-muted font-bold">
                        Your Message *
                      </label>
                      <textarea
                        id="message-field"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`w-full bg-brand-black border rounded-sm px-4 py-3 text-sm text-brand-text focus:outline-none focus:border-brand-red transition-all resize-none ${
                          errors.message ? "border-brand-red" : "border-white/10"
                        }`}
                        placeholder="Tell us about your fitness goals..."
                      />
                      {errors.message && <p className="text-brand-red text-xs font-mono">{errors.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-brand-red hover:bg-brand-red-hover text-brand-text rounded-sm text-sm font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 red-glow red-glow-hover cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-brand-text border-t-transparent rounded-full animate-spin" />
                          <span>Sending Enquiries...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 space-y-6"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 mb-2">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-3xl font-bebas tracking-wider text-brand-text">INQUIRY SENT SECURELY!</h4>
                      <p className="text-sm text-brand-muted max-w-sm mx-auto leading-relaxed">
                        Thank you for reaching out to Fitnesstaan Gym, Shah Faisal Colony. One of our head coaches will contact you shortly via call or WhatsApp.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2 bg-brand-charcoal hover:bg-white/5 border border-white/10 text-brand-text text-xs font-mono uppercase tracking-widest rounded-sm transition-colors cursor-pointer"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
