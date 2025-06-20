"use client";
import { useState } from "react";
import Footer from "tsx/Footer";
import Navbar from "tsx/Navbar";
import Title from "tsx/Title";

const Teams = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalId: string) => {
    setActiveModal(modalId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div>
      <Navbar/>
      <Title imageSrcPath="/media/images/team.jpg" name="TEAMS"/>
      
      {/* Our Teams Section */}
      <section className="bg-gray-100 py-20" id="modal">
        <div className="container mx-auto px-4 py-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase mb-4">Our Teams</h2>
            <h3 className="text-xl text-gray-600">
              Learn more about the teams at Supermileage.
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vehicle Mechanics */}
            <div className="modal-item group">
              <a 
                className="modal-link block relative overflow-hidden rounded-lg shadow-lg cursor-pointer" 
                onClick={() => openModal('vmech')}
              >
                <div className="modal-hover">
                  <div className="modal-hover-content">
                    Learn More
                  </div>
                </div>
                <img className="w-full h-64 object-cover" src="/media/images/vehicle mechanics photo.jpg" alt="" />
              </a>
              <div className="text-center mt-4">
                <h4 className="text-xl font-semibold text-gray-800">Vehicle Mechanics</h4>
              </div>
            </div>

            {/* Electrical */}
            <div className="modal-item group">
              <a 
                className="modal-link block relative overflow-hidden rounded-lg shadow-lg cursor-pointer" 
                onClick={() => openModal('electrical')}
              >
                <div className="modal-hover">
                  <div className="modal-hover-content">
                    Learn More
                  </div>
                </div>
                <img className="w-full h-64 object-cover" src="/media/images/electrical division photo.jpg" alt="" />
              </a>
              <div className="text-center mt-4">
                <h4 className="text-xl font-semibold text-gray-800">Electrical</h4>
              </div>
            </div>

            {/* Powertrain */}
            <div className="modal-item group">
              <a 
                className="modal-link block relative overflow-hidden rounded-lg shadow-lg cursor-pointer" 
                onClick={() => openModal('powertrain')}
              >
                <div className="modal-hover">
                  <div className="modal-hover-content">
                    Learn More
                  </div>
                </div>
                <img className="w-full h-64 object-cover" src="/media/images/powertrain division photo.jpg" alt="" />
              </a>
              <div className="text-center mt-4">
                <h4 className="text-xl font-semibold text-gray-800">Powertrain</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {activeModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-1000 flex items-center justify-center p-4" 
          onClick={closeModal}
        >
          {/* Modal Content */}
          <div 
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative z-50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close X Button */}
            <button 
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center z-10"
              onClick={closeModal}
            >
              <div className="relative w-6 h-6">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-600 transform -translate-y-1/2 rotate-45"></div>
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-600 transform -translate-y-1/2 -rotate-45"></div>
              </div>
            </button>

            {/* Modal 1 - Vehicle Mechanics */}
            {activeModal === 'vmech' && (
              <div className="p-8">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl font-bold text-gray-800 uppercase mb-6">Vehicle Mechanics</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Vehicle Mechanics in charge of the aerodynamics, structure, handling, and safety of our vehicles.
                    Consequently, the division works with many different components and systems such as aerodynamic
                    shells, chassis, steering, braking, and roll bars.
                    With ample opportunity to tackle hands-on design, testing, and manufacturing
                    challenges, some goals for the division this year include:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                    <li>Improving the aerodynamics of our Urban Concept vehicle</li>
                    <li>Investigating new chassis designs, including monocoque vehicles</li>
                    <li>Reducing mass by using composite materials for more components such as roll bars</li>
                    <li>Optimizing vehicle steering to reduce losses</li>
                  </ul>
                  
                  <h3 className="text-2xl font-bold text-gray-800 uppercase mb-6 mt-8">Projects</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-lg font-semibold text-gray-700 mb-2">Urban Shell Design</h5>
                      <p className="text-gray-600">
                        Designing a new Urban vehicle aerodynamic shell that has very low drag and is structurally rigid.
                        Incorporates vehicle aerodynamics, rapid prototyping and verification tests. Prototyping and
                        verification tests include wind tunnel model testing and fluid dynamics simulations using STAR-CCM.
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="text-lg font-semibold text-gray-700 mb-2">Steering Redesign</h5>
                      <p className="text-gray-600">
                        Comprehensive, ground up steering system redesign. Must account for wheel alignment, driver
                        accommodation, and geometry constraints imposed by the shell and chassis.
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="text-lg font-semibold text-gray-700 mb-2">Foot-Actuated Brakes</h5>
                      <p className="text-gray-600">
                        Due to a new rule for the Shell Eco-Marathon competition, a new foot-actuated brake system must be
                        implemented for our Prototype vehicle. The project will focus on creating a system that complies with
                        competition rules, is lightweight, and the driver can easily use.
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="text-lg font-semibold text-gray-700 mb-2">Composite Roll Bar</h5>
                      <p className="text-gray-600">
                        This year we will be designing a new rollbar for our Prototype vehicle that will be made from composite
                        material. If a feasible design is developed, then the rollbar will be manufactured. If not found
                        feasible, the rollbar will instead be made from another type of material (eg. aluminum) with a different
                        design.
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="text-lg font-semibold text-gray-700 mb-2">New Honeycomb Chassis</h5>
                      <p className="text-gray-600">
                        Designing a new lightweight chassis for a Prototype vehicle using composite material such as carbon
                        fiber and Nomex honeycomb. Includes physical and virtual testing such as destructive stress tests and
                        ANSYS ACP.
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 pt-6">
                    <button 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition-colors inline-flex items-center"
                      onClick={closeModal}
                    >
                      <span className="mr-2">✕</span>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Modal 2 - Electrical */}
            {activeModal === 'electrical' && (
              <div className="p-8">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl font-bold text-gray-800 uppercase mb-6">Electrical</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Electrical is responsible for designing the electrical components of the vehicles
                    and validation testing of all required electrical systems. These systems include
                    telemetry, motor control, fuel cell control, and battery systems. Some divisional
                    goals for this year include:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                    <li>Completing the development of a custom brushless DC motor controller for the Urban Concept vehicle</li>
                    <li>Improving fuel cell monitoring and control systems</li>
                    <li>Continuing to improve the team's telemetry capabilities so more data can be collected from all three vehicles</li>
                  </ul>
                  
                  <h3 className="text-2xl font-bold text-gray-800 uppercase mb-6 mt-8">Projects</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-lg font-semibold text-gray-700 mb-2">PCB Design</h5>
                      <p className="text-gray-600">
                        Our internal components are mounted on custom PCBs, thus we're always looking to improve and refactor.
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="text-lg font-semibold text-gray-700 mb-2">Starter Motor</h5>
                      <p className="text-gray-600">
                        To improve the efficiency of the car, we are always looking to reduce its weight. One of the ways we are
                        looking to achieve this is to replace the current starter motor on the Prototype Vehicle with a smaller
                        (lighter) one. Members completing this project will need to work closely with the Powertrain team. If
                        you have experience testing, characterizing, or designing motors, this project is for you.
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="text-lg font-semibold text-gray-700 mb-2">Telemetry</h5>
                      <p className="text-gray-600">
                        Designing a robust telemetry system in order to know the state of the car by publishing real time data
                        from all the sensors within the vehicle to the cloud to be viewed from anywhere. This will allow data
                        driven decisions to be made for tuning, and increase performance and reliability.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6">
                    <button 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition-colors inline-flex items-center"
                      onClick={closeModal}
                    >
                      <span className="mr-2">✕</span>
                      Close
                    </button>
                  </div>
              </div>
            )}

            {/* Modal 3 - Powertrain */}
            {activeModal === 'powertrain' && (
              <div className="p-8">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl font-bold text-gray-800 uppercase mb-6">Powertrain</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Powertrain is responsible for the creation and transmission of
                    power to propel of our vehicles. This includes the design and
                    optimization of internal combustion engines and fuel cells,
                    motor specification and optimization, and the construction of
                    efficient drivetrains. The division's main goals for this year
                    include:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                    <li>Improving the combustion efficiency of our ICE engine through new camshafts and refined tuning</li>
                    <li>Increasing the running efficiency of our fuel cell stack and achieving our highest mileage ever recorded</li>
                    <li>Building a new dynamometer to allow for improved testing and data collection for all three vehicles</li>
                  </ul>
                  
                  <h3 className="text-2xl font-bold text-gray-800 uppercase mb-6 mt-8">Projects</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-lg font-semibold text-gray-700 mb-2">Custom Camshafts</h5>
                      <p className="text-gray-600">
                        We are planning to design and manufacture four different cam shafts to optimize valve timing and engine
                        performance.
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="text-lg font-semibold text-gray-700 mb-2">Wideband O2 Sensor</h5>
                      <p className="text-gray-600">
                        Integrating a wideband O2 sensor into our engine control unit. Be able to precisely control our air to
                        fuel ratio.
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="text-lg font-semibold text-gray-700 mb-2">Drivetrain Weight Savings</h5>
                      <p className="text-gray-600">
                        Looking into component structures to reduce weight where possible.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6">
                    <button 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition-colors inline-flex items-center"
                      onClick={closeModal}
                    >
                      <span className="mr-2">✕</span>
                      Close
                    </button>
                  </div>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer/>
    </div>
  );
}

export default Teams;