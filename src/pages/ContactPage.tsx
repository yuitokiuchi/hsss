import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-center">CONTACT</h1>
        <p className="text-gray-500 text-center mb-16 font-light">
          Interested in our activities? Get in touch.
        </p>

        <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-gray-500">Name</label>
                  <input type="text" id="name" name="name" className="block w-full border-b border-gray-300 py-2 focus:border-black focus:outline-none transition-colors bg-transparent" placeholder="John Doe" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-gray-500">Email</label>
                  <input type="email" id="email" name="email" className="block w-full border-b border-gray-300 py-2 focus:border-black focus:outline-none transition-colors bg-transparent" placeholder="john@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
                <textarea id="message" name="message" rows={4} className="block w-full border-b border-gray-300 py-2 focus:border-black focus:outline-none transition-colors bg-transparent resize-none" placeholder="Your message here..."></textarea>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full md:w-auto bg-black text-white px-12 py-4 text-sm font-bold tracking-widest uppercase hover:bg-gray-800 transition-colors">
                  Send Message
                </button>
              </div>
            </form>

            <div className="mt-24 pt-12 border-t border-gray-100 text-center">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8">Follow Us</h3>
              <div className="flex justify-center space-x-8">
                <a href="https://twitter.com/Hss_Science" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
                  <span className="sr-only">Twitter (X)</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/hss_scienceclub/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.067-.06-1.407-.06-4.123v-.08c0-2.643.013-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.407-.06 4.123-.06h.08zm-1.634 5.392a4.422 4.422 0 100 8.844 4.422 4.422 0 000-8.844zm0 7.227a2.805 2.805 0 110-5.61 2.805 2.805 0 010 5.61zm5.838-7.535a1.078 1.078 0 100 2.156 1.078 1.078 0 000-2.156z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/@HSS_ScienceClub_PR" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
                  <span className="sr-only">YouTube</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 01-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 01-1.768-1.768C2 15.255 2 12 2 12s0-3.254.417-4.814a2.507 2.507 0 011.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418zM15.194 12 10 15V9l5.194 3z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

  );
};

export default ContactPage;
