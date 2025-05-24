// components/About.tsx
export default function About() {
    return (
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold mb-4 font-header">Who are we?</h2>
              <p className="text-gray-600 font-text">
                The UBC Supermileage team is a group of 50 dedicated engineering students working to design and build ultra-efficient gasoline-powered vehicles for the Shell Eco-marathon and SAE competitions. We bring together talent from a wide array of engineering disciplines and beyond.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">What do we do?</h2>
              <p className="text-gray-600">
                We design and build three cars — a <strong>gasoline prototype</strong>, a <strong>hydrogen prototype</strong>, and an <strong>electric urban concept</strong> — to push boundaries in fuel efficiency and sustainability. We aim to set world records and inspire innovation in green transportation.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500">
            Learn more about our history <a href="/sections/about" className="text-blue-600 hover:underline">here</a>.
          </div>
        </div>
      </section>
    );
  }
  