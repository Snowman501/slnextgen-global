"use client";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F172A]">
      <nav className="p-6 flex justify-between items-center">
        <div className="text-xl font-bold text-white">SL NextGen Digital</div>
        <a href="#contact" className="bg-[#F97316] text-white px-4 py-2 rounded-md font-bold">Get Started</a>
      </nav>



      <section className="pt-16 pb-24 px-6 text-center">
        <h1 className="text-4xl font-black text-white mb-6">We Build AI Systems That Grow Small Businesses</h1>
        <p className="text-lg text-blue-200 max-w-2xl mx-auto mb-10">From automated lead generation to done-for-you content engines.</p>
        <a href="#contact" className="bg-[#F97316] text-white px-10 py-4 rounded-full font-bold inline-block">Book a Free Strategy Call</a>
      </section>



      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-black text-white mb-6">Our Story</h2>
        <p className="text-blue-200 text-lg mb-6">Loren spent over a decade diagnosing electrical faults in cars — chasing shorts, reading wiring diagrams, fixing what others could not. When disability forced him off the shop floor, he brought that same precision to the digital world. Together with Stacy — his partner of 27 years — they built SL NextGen Digital from scratch. No investors. No agency. Just mechanical thinking applied to digital systems.</p>
      </section>
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-white text-center mb-12">What We Build For You</h2>
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white p-8 rounded-2xl border-t-4 border-[#1E3A8A]">
            <h3 className="font-bold text-[#1E3A8A] text-xl mb-2">AI Lead Machine</h3>
            <p className="text-gray-500 mb-4">Automated system that finds local business leads while you sleep.</p>
            <p className="text-2xl font-black text-[#F97316]">$297 one-time</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border-t-4 border-[#F97316]">
            <h3 className="font-bold text-[#1E3A8A] text-xl mb-2">Content Engine</h3>
            <p className="text-gray-500 mb-4">30 days of AI-powered social content delivered automatically.</p>
            <p className="text-2xl font-black text-[#F97316]">$497/month</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border-t-4 border-[#1E3A8A]">
            <h3 className="font-bold text-[#1E3A8A] text-xl mb-2">Full AI System</h3>
            <p className="text-gray-500 mb-4">Complete digital presence — leads, content, web design and automation.</p>
            <p className="text-2xl font-black text-[#F97316]">$997 full build</p>
          </div>
        </div>
      </section>



      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-white text-center mb-12">Why SL NextGen?</h2>
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white p-6 rounded-2xl border-l-4 border-[#F97316]">
            <h3 className="font-bold text-[#1E3A8A] mb-2">We Actually Build It</h3>
            <p className="text-gray-500">No outsourcing. No templates. We build your system from scratch the same way a mechanic builds an engine.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border-l-4 border-[#F97316]">
            <h3 className="font-bold text-[#1E3A8A] mb-2">Zero Fluff Guarantee</h3>
            <p className="text-gray-500">Every dollar you spend goes into the system — not into sales calls, account managers, or fancy offices.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border-l-4 border-[#F97316]">
            <h3 className="font-bold text-[#1E3A8A] mb-2">Built By People Who Get It</h3>
            <p className="text-gray-500">We started with nothing and built this with free tools and hard work. We know exactly what small businesses need.</p>
          </div>
        </div>
      </section>
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-black text-white text-center mb-12">Common Questions</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-2xl">
            <h3 className="font-bold text-[#1E3A8A] mb-2">Do I need to know anything about AI?</h3>
            <p className="text-gray-500">Not at all. We handle everything. You tell us your goals and we build the system.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl">
            <h3 className="font-bold text-[#1E3A8A] mb-2">How fast can you start?</h3>
            <p className="text-gray-500">Within 48 hours of your first email.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl">
            <h3 className="font-bold text-[#1E3A8A] mb-2">What if I am not happy?</h3>
            <p className="text-gray-500">We fix it. We do not stop until your system works.</p>
          </div>
        </div>
      </section>
      <section id="contact" className="bg-[#F97316] py-16 px-6 text-center">
        <h2 className="text-3xl font-black text-white mb-4">Ready to Compete With the Big Players?</h2>
        <p className="text-white opacity-90 mb-8">Built by a mechanic and a writer — 27 years of synergy, zero fluff.</p>
        <a href="mailto:Lb.designstudio.2024@gmail.com" className="bg-white text-[#F97316] px-10 py-4 rounded-full font-bold inline-block">Email Us Today</a>
        <p className="mt-8 text-xs text-white opacity-60">2026 SL NextGen Digital | Hot Springs Village, AR</p>
      </section>
    </main>
  );
}
