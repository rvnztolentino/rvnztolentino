import React, { useEffect } from 'react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {

  // Tally Embed Script Loading
  useEffect(() => {
    const scriptUrl = "https://tally.so/widgets/embed.js";
    const loadScript = () => {
      if (document.querySelector(`script[src="${scriptUrl}"]`)) return;
      const script = document.createElement("script");
      script.src = scriptUrl;
      script.async = true;
      document.body.appendChild(script);
    };
    loadScript();
  }, []);

  return (
    <section id="contact" className="min-h-screen w-full pt-24 pb-24 md:pb-4 px-8 md:px-32 flex items-center justify-center bg-background">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

        {/* Left Side Content */}
        <div className="flex flex-col justify-center space-y-12">
          <div>
            <h2 className="font-display font-bold text-5xl md:text-7xl mb-6 tracking-tighter">
              CONTACT
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md">
              I am currently open to select freelance opportunities and collaborations.
              I'll only respond to those proposals that are a good match for my schedule and interests.
              thank you.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-white font-bold tracking-widest text-sm mb-2 uppercase">Email</h3>
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-gray-400 font-light hover:text-white transition-colors">
                {SOCIAL_LINKS.email}
              </a>
            </div>

            <div>
              <h3 className="text-white font-bold tracking-widest text-sm mb-2 uppercase">LinkedIn</h3>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 font-light hover:text-white transition-colors">
                {SOCIAL_LINKS.linkedin}
              </a>
            </div>
          </div>
        </div>

        {/* Right Side Content - Tally Form */}
        <div className="w-full">
          <div className="p-8 border border-white/5 h-fit">
            <h3 className="text-white font-bold tracking-widest text-3xl mb-8 uppercase border-b border-white/10 pb-4">
              Contact Form
            </h3>

            <div className="w-full h-[280px] overflow-hidden">
              <iframe
                data-tally-src="https://tally.so/embed/obG7Le?alignLeft=1&hideTitle=1&transparentBackground=0&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="200"
                title="Contact Form"
                className="w-full h-full border-none"
              >
              </iframe>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;