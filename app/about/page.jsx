import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const teamMembers = [
  {
    name: "Jerry Gates",
    role: "Founder",
    bio: "Passionate about tech innovation.",
    image: "/photo-jerrygate.jpg",
  },
  {
    name: "Daniel Isaac",
    role: "Editor",
    bio: "Curating the best tech content.",
    image: "/photo-edan.jpg",
  },
];

const About = () => {
  return (
    <>
      <div className="bg-white min-h-screen">
        <section className="shadow bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              About TechTrove
            </h1>
            <p className="text-lg md:text-xl text-blue-500 max-w-3xl mx-auto">
              We're passionate about technology and sharing knowledge with the
              world.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Mission
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                To inspire and empower the tech community through insightful
                content and collaboration.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    priority="true"
                    className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-indigo-600 font-medium">{member.role}</p>
                  <p className="text-gray-600 mt-2">{member.bio}</p>
                  <div className="flex items-center justify-center space-x-10 mt-4">
                    <FaFacebookF className="h-7 w-7 text-blue-500 rounded-full cursor-pointer hover:text-gray-700" />
                    <FaInstagramSquare className="h-7 w-7 text-blue-500 rounded-full cursor-pointer hover:text-gray-700" />
                    <FaWhatsappSquare className="h-7 w-7 text-blue-500 rounded-full cursor-pointer hover:text-gray-700" />
                    <FaTwitterSquare className="h-7 w-7 text-blue-500 rounded-full cursor-pointer hover:text-gray-700" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
