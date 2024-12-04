import React from 'react';
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa'; // Import voor sociale media iconen
import { storyblokEditable } from "@storyblok/react/rsc";

const Account = ({ blok }) => {
  return (
    <div
      className="flex justify-center items-center min-h-screen bg-white"
      {...storyblokEditable(blok)}
    >
      <div className="w-full max-w-md p-8">
        {/* Header */}
        <div className="flex items-center mb-6">
          <h1 className="pt-8 text-4xl sm:text-5xl font-light text-black text-left mr-4">
            Marketing
          </h1>
          <img
            src={blok.afbeelding.filename}
            alt={blok.afbeelding.alt}
            className="w-24 mt-2 sm:w-32 max-w-full object-cover"
          />
        </div>

        {/* Login Form */}
        <form className="w-full space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-paragraph text-black mb-2">
              Inloggen bij Marketing Loom
            </label>
            <input
              type="email"
              id="email"
              placeholder="E-mailadres"
              className="w-full px-4 py-3 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              id="password"
              placeholder="Wachtwoord"
              className="w-full px-4 py-3 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red text-white text-h3-desktop py-3 px-4 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Inloggen
          </button>
        </form>

        {/* Forgot Password Link */}
        <div className="text-center mt-6">
          <p className="text-sm text-silver">Wachtwoord vergeten?</p>
        </div>

        {/* Social Login */}
        <div className="mt-8 text-center">
          <p className="text-sm text-silver mb-4">──── of log in met ────</p>
          <div className="flex justify-center space-x-4">
            {/* Google */}
            <div className="flex justify-center items-center p-3 w-24 h-14 bg-standard_red">
              <FaGoogle className="w-6 h-6 text-white" />
            </div>
            {/* Facebook */}
            <div className="flex justify-center items-center p-3 w-24 h-14 bg-blue-600">
              <FaFacebook className="w-6 h-6 text-white" />
            </div>
            {/* Twitter */}
            <div className="flex justify-center items-center p-3 w-24 h-14 bg-black">
              <FaTwitter className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;