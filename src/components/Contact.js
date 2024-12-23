import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const maxChars = 500;
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('contact');
      if (element) {
        const rect = element.getBoundingClientRect();
        setInView(rect.top <= window.innerHeight && rect.bottom >= 0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setStatus({
        type: 'success',
        message: '✨ Message sent successfully! We\'ll get back to you soon.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsLoading(false);
      setCharCount(0);
    }, 1500);
  };

  const handleMessageChange = (e) => {
    const text = e.target.value;
    if (text.length <= maxChars) {
      setFormData({ ...formData, message: text });
      setCharCount(text.length);
    }
  };

  return (
    <section 
      id="contact" 
      className={`py-20 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } bg-gray-900 text-white transition-all duration-700`}
    >
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <h3 className="text-5xl font-mono text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Get in Touch
          </span>
        </h3>

        <div className="bg-gray-800 rounded-lg shadow-lg p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-200"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-200"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full p-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-200"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                required
                value={formData.message}
                onChange={handleMessageChange}
                rows={6}
                className="w-full p-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-200 resize-none"
                placeholder="Your message here..."
              />
              <div className="mt-2 text-sm text-cyan-400 text-right">
                {charCount}/{maxChars} characters
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center px-8 py-3 bg-gray-800 text-cyan-400 rounded-md hover:bg-cyan-400 hover:text-gray-900 border-2 border-cyan-400 focus:outline-none font-mono transition-all duration-300"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </>
              )}
            </button>
          </form>

          {status.message && (
            <div className={`mt-4 p-4 rounded-lg flex items-center space-x-2 ${
              status.type === 'success' ? 'bg-cyan-900/50 text-cyan-400' : 'bg-red-900/50 text-red-400'
            }`}>
              {status.type === 'success' ? (
                <CheckCircle className="h-5 w-5" />
              ) : (
                <AlertCircle className="h-5 w-5" />
              )}
              <p>{status.message}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;