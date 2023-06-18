import React from 'react'
import { FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';
const Profile = () => {
  return (
    <div className="w-full md:w-3/5 px-4 py-8">
      <div className="container mx-auto max-w-md bg-white rounded-lg shadow-lg shadow-gray-900">
        <div className="px-6 py-4">
          <div className="text-center">
            <img
              className="w-24 h-24 rounded-full mx-auto"
              src="https://avatars.githubusercontent.com/u/75154257?v=4"
              alt="Profile Picture"
            />
            <h2 className="text-2xl font-bold mt-4">John Doe</h2>
            <p className="text-gray-600">Front-end Developer</p>
          </div>

          <div className="mt-4">
            <p className="text-gray-700 flex items-center">
              <FaEnvelope className="mr-2" />
              Email: john@example.com
            </p>
            <p className="text-gray-700 flex items-center">
              <FaPhone className="mr-2" />
              Phone: 123-456-7890
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
