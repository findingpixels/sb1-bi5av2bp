import React from 'react';
import { Calendar, Clock, MapPin, Users, ChevronDown, Mail } from 'lucide-react';

function App() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div className="relative aspect-square">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
            alt="Event background"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Tech<span className="text-orange-500">Summit</span> 2024
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Join us for the most innovative technology conference of the year
          </p>
          <ChevronDown className="animate-bounce w-8 h-8 text-orange-500" />
        </div>
      </div>

      {/* Key Facts */}
      <div className="bg-gray-800 py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors">
            <Calendar className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Date</h3>
            <p>September 15-17, 2024</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors">
            <MapPin className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p>Silicon Valley Convention Center</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors">
            <Users className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Attendees</h3>
            <p>5000+ Tech Enthusiasts</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors">
            <Clock className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Duration</h3>
            <p>3 Days of Innovation</p>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Event <span className="text-orange-500">Highlights</span>
          </h2>
          <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
            <iframe
              className="w-full h-[500px] rounded-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Event Preview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Photo <span className="text-orange-500">Gallery</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <img
              src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2"
              alt="Event photo 1"
              className="w-full h-72 object-cover rounded-lg hover:opacity-75 transition-opacity"
            />
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87"
              alt="Event photo 2"
              className="w-full h-72 object-cover rounded-lg hover:opacity-75 transition-opacity"
            />
            <img
              src="https://images.unsplash.com/photo-1511578314322-379afb476865"
              alt="Event photo 3"
              className="w-full h-72 object-cover rounded-lg hover:opacity-75 transition-opacity"
            />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Get in <span className="text-orange-500">Touch</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <a
                href="mailto:contact@techsummit2024.com"
                className="flex items-center text-orange-500 hover:text-orange-400 transition-colors"
              >
                <Mail className="w-6 h-6 mr-2" />
                contact@techsummit2024.com
              </a>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;