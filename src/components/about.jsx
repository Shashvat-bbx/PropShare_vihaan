
import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';

export default function About() {
    return (
    <>
       <Header />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-purple-100 to-indigo-200">
        <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-200 max-w-2xl text-center">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-4">About PropShare</h1>
          <p className="text-lg text-gray-600">
            PropShare is revolutionizing real estate investment by making it accessible, transparent, and secure for everyone. Buy fractional shares of premium properties and grow your wealth with ease.
          </p>
        </div>
      </div>
      </>
    );
  }
  