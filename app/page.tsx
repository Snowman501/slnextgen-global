"use client";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F172A]">
      <nav className="p-6 flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-white">SL NextGen Digital</a>
        <div className="flex flex-wrap items-center justify-end gap-4"><a href="https://my-portfolio-rho-lovat.vercel.app" className="text-blue-100 hover:text-white underline-offset-4 hover:underline">Meet Loren</a><a href="https://lorenbarnhart.vercel.app" className="text-blue-100 hover:text-white underline-offset-4 hover:underline">His Books</a><a href="#contact" className="bg-[#F97316] text-white px-4 py-2 rounded-md font-bold">Contact</a></div>
      </nav>



      <section className="pt-16 pb-24 px-6 text-center">
        <h1 className="text-4xl font-black text-white mb-6">Practical Digital Tools. Built With People in Mind.</h1>
        <p className="text-lg text-blue-200 max-w-2xl mx-auto mb-10">Explore our public work, free tools, and developing software. Paid services are temporarily paused while we review delivery and payment arrangements.</p>
        <a href="https://my-portfolio-rho-lovat.vercel.app" className="bg-[#F97316] text-white px-10 py-4 rounded-full font-bold inline-block">Explore our work</a>
      </section>



      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-black text-white mb-6">Our Story</h2>
        <p className="text-blue-200 text-lg mb-6">Loren spent over a decade diagnosing electrical faults in cars — chasing shorts, reading wiring diagrams, fixing what others could not. When disability forced him off the shop floor, he brought that same precision to the digital world. Together with Stacy — his partner of 27 years — they built SL NextGen Digital from scratch. No investors. No agency. Just mechanical thinking applied to digital systems.</p>
      </section>
      <section aria-labelledby="people" className="px-6 pb-16 max-w-4xl mx-auto text-center"><h2 id="people" className="text-3xl font-black text-white mb-4">The people behind the products</h2><p className="text-blue-200 text-lg mb-6">SL NextGen is the technology side of Loren and Stacy’s story. Want to see the creator’s work—or discover Loren’s books? Explore the connected sites below.</p><div className="flex flex-wrap justify-center gap-4"><a className="border border-blue-300 text-white rounded-lg px-6 py-3 font-bold hover:bg-white/10" href="https://my-portfolio-rho-lovat.vercel.app">Loren’s portfolio ↗</a><a className="border border-blue-300 text-white rounded-lg px-6 py-3 font-bold hover:bg-white/10" href="https://lorenbarnhart.vercel.app">Loren’s author site ↗</a></div></section>
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-white text-center mb-4">Projects and capabilities</h2><p className="text-blue-200 text-center mb-10">Examples of work and areas of development—not services currently available to purchase.</p>
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white p-8 rounded-2xl border-t-4 border-[#1E3A8A]">
            <h3 className="font-bold text-[#1E3A8A] text-xl mb-2">AI Lead Machine</h3>
            <p className="text-gray-500 mb-4">Experimental lead-research and website-evidence tools. Availability and automation vary by project.</p>
            <p className="text-2xl font-black text-[#F97316]">Development concept · Not for sale</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border-t-4 border-[#F97316]">
            <h3 className="font-bold text-[#1E3A8A] text-xl mb-2">Content Engine</h3>
            <p className="text-gray-500 mb-4">Content workflow concepts for clearer, more consistent publishing. Not an active subscription service.</p>
            <p className="text-2xl font-black text-[#F97316]">Development concept · Not for sale</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border-t-4 border-[#1E3A8A]">
            <h3 className="font-bold text-[#1E3A8A] text-xl mb-2">Full AI System</h3>
            <p className="text-gray-500 mb-4">Exploring web design, useful automation, and human-centered software. Project scope is reviewed individually.</p>
            <p className="text-2xl font-black text-[#F97316]">Development concept · Not for sale</p>
          </div>
        </div>
      </section>



      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-white text-center mb-12">Why SL NextGen?</h2>
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white p-6 rounded-2xl border-l-4 border-[#F97316]">
            <h3 className="font-bold text-[#1E3A8A] mb-2">Real projects, honest status</h3>
            <p className="text-gray-500">Visit the portfolio to see selected projects and what is in development. We do not claim untested features are finished.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border-l-4 border-[#F97316]">
            <h3 className="font-bold text-[#1E3A8A] mb-2">No surprise checkout</h3>
            <p className="text-gray-500">Paid services are paused. You can explore public tools and contact us by email without creating an account.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border-l-4 border-[#F97316]">
            <h3 className="font-bold text-[#1E3A8A] mb-2">Built By People Who Get It</h3>
            <p className="text-gray-500">We started with nothing and built this with free tools and hard work. We listen, test, and keep improving our understanding of what people need.</p>
          </div>
        </div>
      </section>
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-black text-white text-center mb-12">Common Questions</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-2xl">
            <h3 className="font-bold text-[#1E3A8A] mb-2">Can I try anything for free?</h3>
            <p className="text-gray-500">Yes. Explore our free website checker and public projects. The checker provides limited, evidence-based observations—not a complete professional audit.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl">
            <h3 className="font-bold text-[#1E3A8A] mb-2">Are paid services available?</h3>
            <p className="text-gray-500">Not currently. Paid reviews, subscriptions, and custom builds are temporarily paused. Please do not purchase through older checkout links.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl">
            <h3 className="font-bold text-[#1E3A8A] mb-2">How can I get in touch?</h3>
            <p className="text-gray-500">Email us with a question or project idea. Sending an inquiry does not create an order, subscription, or delivery commitment.</p>
          </div>
        </div>
      </section>
      <section id="contact" className="bg-[#F97316] py-16 px-6 text-center">
        <h2 className="text-3xl font-black text-white mb-4">Explore the Work. Ask a Question.</h2>
        <p className="text-white opacity-90 mb-8">Loren and Stacy believe useful technology should be clear, respectful, and honest about its limits.</p>
        <a href="mailto:Lb.designstudio.2024@gmail.com" className="bg-white text-[#F97316] px-10 py-4 rounded-full font-bold inline-block">Email a Question</a>
        <p className="mt-8 text-xs text-white opacity-60">2026 SL NextGen Digital | Hot Springs Village, AR</p>
      </section>
    </main>
  );
}
