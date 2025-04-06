import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Career = () => {
  return (
    <div className='bg-gradient-to-l from-black to-blue-900'>
      <Navbar hideServices={true} />

      {/* Hero Section */}
      <div className="bg-gradient-to-l from-black to-blue-900 min-h-[50vh] flex items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold">Career</h1>
      </div>

      {/* Vacancies Section */}
      <div className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Vacancies</h2>

          <div className="space-y-8">
            {/* Job 1 */}
            <div className="border-b pb-6 flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <img
                src="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="CTO Position"
                className="w-full md:w-32 h-32 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold">
                  CTO <span className="text-gray-600 text-lg">12-15 years experience</span>
                </h3>
                <p className="font-medium">Bachelor's degree in aerospace / mechanical / computer science, Electrical Engineering</p>
                <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base">
                  <li>Drone Expertise, Aerodynamics, Design, Sensors, Computer Vision, Autonomous Navigation, and Related Software</li>
                  <li>Rotor Craft, Fixed Wing UAVs from Scratch</li>
                </ul>
              </div>
            </div>

            {/* Job 2 */}
            <div className="border-b pb-6 flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <img
                src="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Graphic Designer Position"
                className="w-full md:w-32 h-32 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold">
                  Graphic Designer <span className="text-gray-600 text-lg">7-9 years experience</span>
                </h3>
                <p className="font-medium">Master/Bachelor's degree in designing or graphics</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Career;
