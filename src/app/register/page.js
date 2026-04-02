"use client";
import { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    country: 'Honduras',
    sex: 'male',
    type: 'volunteer',
    months: 6
  });

  // NGO Rules: Auto-calculate for Contract Workers
  const handleTypeChange = (type) => {
    let months = formData.months;
    if (type === 'contract') {
      months = formData.sex === 'female' ? 18 : 24;
    }
    setFormData({...formData, type, months});
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex flex-col items-center">
      <header className="mb-8 text-center">
        <h1 className="text-2xl font-bold text-blue-600">NGO Global Onboarding</h1>
        <p className="text-gray-500 text-sm">Select your destination and service type</p>
      </header>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 space-y-4">
        {/* Full Name */}
        <input 
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="Full Name"
          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
        />

        {/* Country Selection */}
        <select 
          className="w-full p-3 border rounded-lg"
          onChange={(e) => setFormData({...formData, country: e.target.value})}
        >
          <option>Cayman Islands</option>
          <option>Spain</option>
          <option>Honduras</option>
          <option>USA</option>
          <option>Canada</option>
          <option>England</option>
        </select>

        {/* Worker Type Toggle */}
        <div className="flex gap-2">
          <button 
            onClick={() => handleTypeChange('volunteer')}
            className={`flex-1 p-2 rounded-md ${formData.type === 'volunteer' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
          >
            Volunteer
          </button>
          <button 
            onClick={() => handleTypeChange('contract')}
            className={`flex-1 p-2 rounded-md ${formData.type === 'contract' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
          >
            Contract
          </button>
        </div>

        {/* Dynamic Summary - The "Survival" Preview */}
        <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-800">
          <strong>Service Summary:</strong>
          <p>Location: {formData.country}</p>
          <p>Duration: {formData.months} Months</p>
          <p className="mt-2 italic font-light text-xs">
            *You will receive your individual budget in local currency upon arrival.
          </p>
        </div>

        <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition">
          Complete Registration
        </button>
      </div>
    </div>
  );
}