import { AgencyData } from '../data/content';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F9FC]">
      {/* Fixed Mobile Nav */}
      <nav className="p-4 flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto gap-4">
        <div className="text-xl font-bold text-[#1E3A8A]">SL <span className="text-[#F97316]">NextGen</span> Digital</div>
        <a href={`mailto:${AgencyData.email}`} className="bg-[#F97316] text-white px-4 py-2 rounded-md text-sm font-bold shadow-md">Work With Us</a>
      </nav>

      {/* Hero Section */}
      <section className="pt-12 pb-20 px-6 max-w-6xl mx-auto text-center">
        <span className="text-[#F97316] font-bold text-xs tracking-tighter uppercase">27 Years of Synergy</span>
        <h1 className="text-4xl md:text-7xl font-black text-[#1E3A8A] leading-tight mt-2 mb-6">
          High-Performance Content Architecture
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-10">
          Built by a mechanic with a writer's soul. We engineer 30-day social media systems that don't misfire.
        </p>
      </section>

      {/* The Diagnostic Cards */}
      <section className="px-6 pb-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#1E3A8A]">
          <h3 className="font-bold text-[#1E3A8A] mb-2">Systems Audit</h3>
          <p className="text-sm text-gray-500">We diagnose where your brand voice is leaking engagement.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#F97316]">
          <h3 className="font-bold text-[#F97316] mb-2">Precision Tuning</h3>
          <p className="text-sm text-gray-500">Custom content calendars built from scratch—no templates.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#1E3A8A]">
          <h3 className="font-bold text-[#1E3A8A] mb-2">Full Throttle</h3>
          <p className="text-sm text-gray-500">Automated delivery systems via n8n to keep you visible 24/7.</p>
        </div>
      </section>
    </main>
  );
}

      {/* Final Call to Action */}
      <section className="bg-[#1E3A8A] py-16 px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready for a Tune-Up?</h2>
        <p className="mb-8 opacity-90">Get your 7-day sample content engine diagnostic today.</p>
        <a href="mailto:Lb.designstudio.2024@gmail.com" 
           className="bg-[#F97316] hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold transition-all inline-block">
          Email the Lab
        </a>
        <p className="mt-6 text-xs opacity-60">© 2026 SL NextGen Digital | Hot Springs Village, AR</p>
      </section>
    </main>
  );
}
