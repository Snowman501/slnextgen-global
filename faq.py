with open('app/page.tsx', 'r') as f:
    content = f.read()

faq = '''        <div className="space-y-4">
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
        </div>'''

content = content.replace('      </section>\n      <section id="contact"', faq + '\n      </section>\n      <section id="contact"')

with open('app/page.tsx', 'w') as f:
    f.write(content)
print("done")
