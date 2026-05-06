f = open('app
/page.tsx', 'w')
f.write("""\"use client\";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F9FC]">
      <nav className="p-4 flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-xl font-bold text-[#1E3A8A]">SL NextGen Digital</div>
        <a href="#contact" className="bg-[#F97316] text-white px-4 py-2 rounded-md font-bold">Get Started</a>
      </nav>
      <section className="pt-16 pb-24 px-6 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-black text-[#1E3A8A] mt-3 mb-6">We Build AI Systems That Grow Small Businesses</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">From automated lead generation to done-for-you content engines.</p>
        <a href="#contact" className="bg-[#F97316] text-white px-10 py-4 rounded-full font-bold inline-block">Book a Free Call</a>
      </section>
    </main>
  );
}
""")
f.close()
print("done")
