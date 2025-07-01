import Footer from "tsx/Footer";
import Title from "tsx/Title";
import Image from 'next/image';

const Join = () => {
    return(
      <>
        <section>
          <header
            className="relative h-screen flex flex-col items-center justify-center text-center bg-cover bg-center"
            style={{ backgroundImage: "url('/media/images/join.jpg')" }}
          >
            <div className="absolute inset-0  bg-gradient-to-b from-black/100 via-black/50 to-transparent"></div>
            <h1 className="relative z-10 text-6xl font-bold text-white drop-shadow-lg">
              JOIN
            </h1>
            <a className="relative z-10 btn btn-primary mt-4 js-scroll-trigger" href="#join-section">Join Our Team</a>
          </header>
        </section>
        
        <section id="join-section" className="py-15 px-4 bg-gradient-to-b from-blue-200 to-bg-light">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-black">
                  Be Part of Something <span className="text-primary">Extraordinary</span>
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Join a team of innovators, engineers, and visionaries pushing the boundaries of fuel efficiency. 
                  We're not just building cars – we're shaping the future of sustainable transportation.
                </p>
                <ul className="space-y-4 text-lg items-center space-x-3 list-inside list-disc text-primary [&>li>p]:inline [&>li>p]:text-gray-700">
                  <li> <p>Gain hands-on experience in engineering and design</p> </li>
                  <li> <p>Collaborate with like-minded individuals</p> </li>
                  <li> <p>Make a real impact on the environment</p> </li>
                </ul>
                <div className="pt-6">
                  <a href="mailto:info@supermileage.ca" className="btn btn-primary btn-lg">
                    Get in Touch
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <Image
                    src="/media/images/team.jpg"
                    alt="Supermileage Team"
                    className="w-full h-full object-cover"
                    width={600}
                    height={600}
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        <Footer/>
      </>
    )
}

export default Join;