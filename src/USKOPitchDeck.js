import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ClientBadge from './components/ClientBadge';
// import { track } from '@vercel/analytics';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      aria-label="Next Slide"
      className={className}
      style={{
        ...style,
        display: 'flex',
        right: 40,
        zIndex: 10,
        width: 80,
        height: 80,
        background: '#0b5dda',
        borderRadius: '50%',
        color: 'white',
        border: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
      }}
      onClick={onClick}
      onMouseOver={e => {
        e.currentTarget.style.background = '#0a52c7';
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseOut={e => {
        e.currentTarget.style.background = '#0b5dda';
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="16" fill="none"/>
        <path d="M12 8l8 8-8 8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      aria-label="Previous Slide"
      className={className}
      style={{
        ...style,
        display: 'flex',
        left: 40,
        zIndex: 10,
        width: 80,
        height: 80,
        background: '#0b5dda',
        borderRadius: '50%',
        color: 'white',
        border: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
      }}
      onClick={onClick}
      onMouseOver={e => {
        e.currentTarget.style.background = '#0a52c7';
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseOut={e => {
        e.currentTarget.style.background = '#0b5dda';
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="16" fill="none"/>
        <path d="M20 8l-8 8 8 8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

const slides = [
  // Title Slide
  <section className="flex flex-col justify-center items-center min-h-screen bg-white px-3 py-4 md:px-4 md:py-8">
    <div className="max-w-6xl mx-auto w-full flex flex-col items-center justify-center">
      {/* Partnership Logos */}
      <div className="flex items-center justify-center gap-6 md:gap-12 mb-4 md:mb-8">
        <img 
          src="https://i.imgur.com/J2ME1ji.png" 
          alt="USKO Logo" 
          className="w-24 md:w-48 drop-shadow-xl" 
          style={{
            maxWidth: '35vw',
            filter: 'drop-shadow(0 10px 15px rgba(0, 118, 206, 0.15))'
          }}
        />
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-[#0b5dda] to-[#0a52c7] flex items-center justify-center mb-2 shadow-lg transform hover:scale-105 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <p className="text-xs md:text-sm font-semibold text-[#0b5dda] text-center">Strategic Partnership</p>
        </div>
                  <img 
            src="https://i.imgur.com/XZWgmfd.png" 
            alt="The Clorox Company Logo" 
            className="w-20 md:w-40 drop-shadow-xl" 
            style={{
              maxWidth: '30vw',
              filter: 'drop-shadow(0 10px 15px rgba(11, 93, 218, 0.15))'
            }}
          />
      </div>
      
      {/* Main Title */}
      <div className="text-center mb-4 md:mb-8">
        <h1 className="text-xl md:text-5xl font-extrabold tracking-tight mb-2 md:mb-4 leading-tight">
          <div className="flex flex-col md:flex-row md:gap-2 justify-center items-center">
            <span className="text-[#0b5dda] whitespace-nowrap">End-to-End.</span>
            <span className="text-[#0b5dda] whitespace-nowrap">Full-Service.</span>
            <span className="text-black whitespace-nowrap">Logistics.</span>
          </div>
        </h1>
        
        <h2 className="text-xs md:text-xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed px-2">
          <span className="block mb-2">USKO provides comprehensive logistics solutions for The Clorox Company—Full Truckload, Less-Than-Truckload, Warehousing, Cross-Border, Import/Export, and White Glove services.</span>
          <span className="block">One partner. Complete supply chain. Seamless consumer product delivery.</span>
        </h2>
      </div>

      {/* CTA Button */}
      <a 
        href="#contact" 
        className="bg-[#0b5dda] text-white px-5 py-2.5 md:px-6 md:py-3 rounded-full font-bold text-sm md:text-base shadow-lg hover:bg-[#0a52c7] transition-all duration-300 mb-4 md:mb-8 transform hover:scale-105 whitespace-nowrap"
      >
        Let's Move Forward Together
      </a>

      {/* Client Badge */}
      <ClientBadge clientName="The Clorox Company" />
    </div>
  </section>,

  // About USKO
  <section className="flex flex-col justify-center items-center px-3 py-4 md:p-6 bg-white min-h-screen">
    <div className="max-w-6xl mx-auto w-full">
      <h1 className="text-3xl md:text-5xl font-extrabold text-[#0b5dda] mb-2 md:mb-3 text-center tracking-tight">About <span className="text-black">USKO</span></h1>
      <h2 className="text-lg md:text-2xl text-gray-700 mb-4 md:mb-5 text-center max-w-2xl mx-auto font-semibold">Excellence in Transportation and Logistics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4">
        <div className="flex justify-center items-center order-2 md:order-1">
          <img src="https://i.imgur.com/H7F2rk9.png" alt="USKO Logistics Truck" className="max-w-full h-auto md:h-80 rounded-lg shadow-lg object-cover" style={{maxHeight: '280px'}} />
        </div>
        <div className="space-y-3 md:space-y-4 order-1 md:order-2">
          <div className="bg-gray-50 rounded-xl p-3 md:p-4 shadow-lg">
            <h3 className="text-lg md:text-xl font-semibold text-[#0b5dda] mb-3">Company Highlights</h3>
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              <div className="text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0b5dda] flex items-center justify-center text-white font-bold text-sm md:text-base mx-auto shadow-md">
                  18
                </div>
                <div className="text-gray-700 text-xs md:text-sm mt-1">Years Active</div>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0b5dda] flex items-center justify-center text-white font-bold text-sm md:text-base mx-auto shadow-md">
                  65M+
                </div>
                <div className="text-gray-700 text-xs md:text-sm mt-1">Miles</div>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0b5dda] flex items-center justify-center text-white font-bold text-sm md:text-base mx-auto shadow-md">
                  500+
                </div>
                <div className="text-gray-700 text-xs md:text-sm mt-1">Team</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-3 md:p-4 shadow-lg">
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
              From full truckload and LTL shipments to cross-border transportation and warehousing, USKO stands as a trusted partner in comprehensive logistics and supply chain management across North America and Europe.
            </p>
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed mt-2">
              Our end-to-end logistics solutions include import/export services, customs clearance, warehousing, distribution, and specialized white-glove delivery when your products require extra care and precision.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>,

  // Transportation Assets
  <section className="flex flex-col justify-center items-center px-3 py-4 md:p-8 bg-white min-h-screen">
    <div className="max-w-6xl mx-auto w-full">
      <div className="bg-[#0b5dda]/10 p-3 md:p-4 rounded-lg border border-[#0b5dda]/30 mb-4 md:mb-6 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#0b5dda] mb-2 text-center tracking-tight">Our <span className="text-black">Logistics Solutions</span></h1>
        <h2 className="text-lg md:text-2xl text-gray-700 text-center max-w-3xl mx-auto font-semibold">Full-Service Transportation & Supply Chain Management</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6">
        <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-[#0b5dda] flex items-center justify-center text-white mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#0b5dda]">Full Truckload & Less-Than-Truckload</h3>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0b5dda] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Professional drivers trained in secure transportation protocols</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0b5dda] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Specialized 53' trailers with air-ride suspension</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0b5dda] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Temperature-controlled solutions for sensitive shipments</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0b5dda] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>24/7 tracking via satellite GPS monitoring</span>
            </li>
          </ul>
          
          {/* Slide 3: Original truck image */}
          <div className="mt-4">
            <img src="https://imgur.com/5MNmizZ.jpg" alt="USKO Truck" className="w-full h-48 object-cover rounded-lg shadow-md" />
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-6 shadow-lg relative">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-[#0b5dda] flex items-center justify-center text-white mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#0b5dda]">Cross-Border & Import/Export Services</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <img src="https://imgur.com/WyZyHpc.jpg" alt="USKO Lift Gate Services" className="w-full h-40 object-cover rounded-lg shadow-md" />
              <p className="text-sm text-gray-500 text-center italic mt-2">USKO specialized lift gate service</p>
            </div>
            <div>
              <img src="https://imgur.com/TptDEQk.jpg" alt="USKO Sprinter Van Fleet" className="w-full h-40 object-cover rounded-lg shadow-md" />
              <p className="text-sm text-gray-500 text-center italic mt-2">Part of our 700+ sprinter van fleet</p>
            </div>
          </div>
          
                      <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0b5dda] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Daily cross-border operations between US, Mexico, and Canada</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0b5dda] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Complete import/export documentation and customs clearance</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0b5dda] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Freight consolidation and deconsolidation services</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0b5dda] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Multi-modal transportation coordination (ocean, air, rail, truck)</span>
              </li>
            </ul>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-4 shadow-lg md:col-span-2">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 rounded-full bg-[#0b5dda] flex items-center justify-center text-white mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#0b5dda]">Why Choose USKO for The Clorox Company?</h3>
          </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="border-l-4 border-[#0b5dda] pl-3">
                <h4 className="font-semibold text-gray-800 mb-1 text-sm">Consumer Products Focus</h4>
                <p className="text-gray-700 text-xs">Specialized in handling The Clorox Company's consumer products with comprehensive logistics and safety protocols for household goods.</p>
              </div>
              <div className="border-l-4 border-[#0b5dda] pl-3">
                <h4 className="font-semibold text-gray-800 mb-1 text-sm">Complete Supply Chain</h4>
                <p className="text-gray-700 text-xs">Full-service logistics from import/export and warehousing to cross-border transportation and final mile delivery.</p>
              </div>
              <div className="border-l-4 border-[#0b5dda] pl-3">
                <h4 className="font-semibold text-gray-800 mb-1 text-sm">Multi-Modal Capacity</h4>
                <p className="text-gray-700 text-xs">FTL, LTL, cross-border, warehousing, and specialized services to meet The Clorox Company's diverse logistics requirements.</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>,

  // Network Coverage
  <section className="flex flex-col justify-center items-center px-8 md:px-24 py-4 md:py-8 bg-white min-h-screen">
    <div className="max-w-6xl mx-auto w-full">
      <div className="bg-[#0b5dda]/10 p-3 md:p-4 rounded-lg border border-[#0b5dda]/30 mb-4 md:mb-6 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#0b5dda] mb-2 text-center tracking-tight">Our <span className="text-black">Network</span></h1>
        <h2 className="text-lg md:text-2xl text-gray-700 text-center max-w-3xl mx-auto font-semibold">Strategic Locations Across North America and Europe</h2>
      </div>
      
      <div className="mt-4 md:mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          <div className="bg-gray-50 p-3 md:p-4 rounded-xl shadow-lg flex flex-col items-center">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0b5dda] flex items-center justify-center text-white mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">United States</h3>
            <ul className="space-y-2 w-full">
              <li className="flex justify-between bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                <span className="text-gray-700 font-medium text-sm">Roseville, CA (HQ)</span>
                <span className="font-medium text-sm">Branch</span>
              </li>
              <li className="flex justify-between bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                <span className="text-gray-700 font-medium text-sm">Houston, TX (HQ2)</span>
                <span className="font-medium text-sm">Branch</span>
              </li>
              <li className="flex justify-between bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                <span className="text-gray-700 font-medium text-sm">Chicago, IL</span>
                <span className="font-medium text-sm">Branch</span>
              </li>
              <li className="flex justify-between bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                <span className="text-gray-700 font-medium text-sm">St Marys, GA</span>
                <span className="font-medium text-sm">Branch</span>
              </li>
              <li className="flex justify-between bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                <span className="text-gray-700 font-medium text-sm">Sacramento, CA</span>
                <span className="font-medium text-sm">Warehouse</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-3 md:p-4 rounded-xl shadow-lg flex flex-col items-center">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0b5dda] flex items-center justify-center text-white mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Europe</h3>
            <ul className="space-y-2 w-full">
              <li className="flex justify-between bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                <span className="text-gray-700 font-medium text-sm">Warsaw, Poland</span>
                <span className="font-medium text-sm">Branch</span>
              </li>
              <li className="flex justify-between bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                <span className="text-gray-700 font-medium text-sm">Kyiv, Ukraine</span>
                <span className="font-medium text-sm">Branch</span>
              </li>
              <li className="flex justify-between bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                <span className="text-gray-700 font-medium text-sm">Odesa, Ukraine</span>
                <span className="font-medium text-sm">Branch</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-3 md:p-4 rounded-xl shadow-lg flex flex-col items-center">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0b5dda] flex items-center justify-center text-white mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Latin America</h3>
            <ul className="space-y-2 w-full">
              <li className="flex justify-between bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                <span className="text-gray-700 font-medium text-sm">Monterrey, Mexico</span>
                <span className="font-medium text-sm">Branch</span>
              </li>
              <li className="flex items-center bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                <span className="text-gray-700 text-sm">Daily cross-border operations with the US</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-4 bg-[#0b5dda]/5 p-4 rounded-xl border border-[#0b5dda]/20 shadow-lg text-center">
          <p className="text-gray-700 text-sm">
            All USKO branches are strategically positioned to provide optimal coverage for The Clorox Company shipments across North America and Europe.
          </p>
        </div>
      </div>
    </div>
  </section>,

  // Sacramento Warehouse Capacity - New Slide
  <section className="flex flex-col justify-center items-center p-6 bg-white min-h-screen">
    <div className="max-w-6xl mx-auto w-full">
      <div className="bg-gradient-to-r from-[#0b5dda] to-[#0a52c7] p-6 rounded-2xl shadow-2xl mb-8 transform hover:scale-[1.02] transition-all duration-300">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 text-center tracking-tight">Sacramento <span className="text-gray-100">Warehouse Capacity</span></h1>
        <h2 className="text-xl md:text-2xl text-gray-100 text-center max-w-3xl mx-auto font-semibold">Our Flexible Storage & Distribution Solutions</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Core Services Card */}
        <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(235,0,40,0.1)] hover:shadow-[0_4px_25px_rgba(235,0,40,0.15)] transition-all duration-300 border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0b5dda] to-[#0a52c7] flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 ml-4">Core Services</h3>
          </div>
          <div className="space-y-3">
            {[
              'Short-Term & Long-Term Storage',
              'Cross-Docking & Transloading',
              'Container Drayage (Port to Warehouse)',
              'Container Unloading & Palletization',
              'Repacking & Restacking Damaged Goods',
              'Local & Regional Deliveries'
            ].map((service, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                <div className="w-2 h-2 rounded-full bg-[#0b5dda] mr-3"></div>
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services Card */}
        <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(235,0,40,0.1)] hover:shadow-[0_4px_25px_rgba(235,0,40,0.15)] transition-all duration-300 border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0b5dda] to-[#0a52c7] flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-gray-800">Additional Services</h3>
              <p className="text-sm text-gray-500">INCLUDE:</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              'Freight consolidation',
              'Container unloading',
              'Product repacking',
              'Inventory management',
              'Pick and pack services',
              'Palletizing and wrapping',
              'Labeling and barcoding',
              'Order fulfillment',
              'Climate-controlled storage',
              'Seasonal storage options'
            ].map((service, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                <div className="w-2 h-2 rounded-full bg-[#0b5dda] mr-2"></div>
                <span className="text-gray-700 text-sm">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Specialized Capabilities Card */}
        <div className="bg-gradient-to-br from-[#0b5dda] to-[#0a52c7] rounded-2xl p-6 shadow-xl md:col-span-2 transform hover:scale-[1.01] transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-4">Specialized Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
                  </svg>
                ),
                title: 'LTL Refrigerated Storage',
                description: 'Temperature-controlled storage solutions for sensitive goods'
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Refrigerated Local Deliveries',
                description: '100+ mile radius coverage area'
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                ),
                title: 'Climate-Controlled Storage',
                description: 'Specialized storage for temperature-sensitive items'
              }
            ].map((capability, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors duration-200">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#0b5dda] mb-3">
                  {capability.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{capability.title}</h4>
                <p className="text-gray-100 text-sm">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Statement Card */}
        <div className="bg-gray-50 rounded-2xl p-6 shadow-lg md:col-span-2 border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0b5dda] to-[#0a52c7] flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 ml-4">Statement</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Our warehouse, centrally located in the Sacramento, CA area, provides flexible short-term and long-term storage solutions tailored to your logistics needs. We offer a full range of services including cross-docking, transloading, repacking, and local deliveries within a 350-mile radius. We also specialize in LTL refrigerated product storage and refrigerated deliveries within a 100+ mile radius across California.
          </p>
        </div>
      </div>
    </div>
  </section>,

  // The Clorox Company Custom Slide
  <section className="flex flex-col justify-center items-center p-6 bg-white">
    <div className="max-w-6xl mx-auto w-full">
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#0b5dda] mb-2 text-center tracking-tight">Partnering with <span className="text-black">The Clorox Company</span></h1>
      <h2 className="text-xl md:text-2xl text-gray-700 mb-5 text-center max-w-2xl mx-auto font-semibold">Custom Logistics Solutions for Your Business</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-gray-50 p-4 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold text-[#0b5dda] mb-3">Our Value Proposition</h3>
          <ul className="space-y-3">
            <li className="flex">
              <div className="w-8 h-8 rounded-full bg-[#0b5dda] flex-shrink-0 flex items-center justify-center text-white mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-0.5 text-sm">Secure Transportation</h4>
                <p className="text-gray-700 text-xs">Our professional drivers and comprehensive security protocols ensure your valuable IT assets are protected throughout transit.</p>
              </div>
            </li>
            <li className="flex">
              <div className="w-8 h-8 rounded-full bg-[#0b5dda] flex-shrink-0 flex items-center justify-center text-white mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-0.5 text-sm">White Glove Service</h4>
                <p className="text-gray-700 text-xs">Specialized lift gate equipment, inside delivery, unpacking, and debris removal for precision deliveries.</p>
              </div>
            </li>
            <li className="flex">
              <div className="w-8 h-8 rounded-full bg-[#0b5dda] flex-shrink-0 flex items-center justify-center text-white mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-0.5 text-sm">Transparent Documentation</h4>
                <p className="text-gray-700 text-xs">Comprehensive chain of custody records, detailed proof of delivery, and real-time tracking for all shipments.</p>
              </div>
            </li>
          </ul>
          
          {/* Box Truck Image for Slide 6 */}
          <div className="mt-4">
            <img 
              src="https://i.imgur.com/525TT5b.jpg" 
              alt="USKO Box Truck" 
              className="w-full h-auto rounded-lg shadow-md object-cover"
              style={{ maxHeight: '200px' }}
            />
            <p className="text-sm text-gray-500 text-center italic mt-2">USKO's dedicated box truck fleet</p>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-[#0b5dda] mb-4">Key Benefits for The Clorox Company</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#0b5dda]/10 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0b5dda]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Import/Export Services</h4>
                <p className="text-gray-700 text-sm">Complete customs clearance, documentation, and cross-border transportation solutions</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#0b5dda]/10 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0b5dda]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Full Truckload & LTL</h4>
                <p className="text-gray-700 text-sm">Complete freight solutions from full truck capacity to less-than-truckload shipments</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#0b5dda]/10 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0b5dda]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Warehousing Solutions</h4>
                <p className="text-gray-700 text-sm">Comprehensive storage, cross-docking, and distribution services across multiple locations</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#0b5dda]/10 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0b5dda]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Complete Supply Chain</h4>
                <p className="text-gray-700 text-sm">Single provider solution from sourcing to delivery, including white glove services when needed</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#0b5dda]/5 p-6 rounded-xl border border-[#0b5dda]/20">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-[#0b5dda] flex items-center justify-center text-white mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0b5dda]">Did You Know?</h3>
            </div>
            <p className="text-gray-700">USKO's comprehensive logistics network spans North America and Europe, providing The Clorox Company with seamless supply chain solutions from manufacturing to final delivery—eliminating the complexity of managing multiple logistics vendors.</p>
          </div>
        </div>
      </div>
    </div>
  </section>,

  // Closing Slide
  <section className="flex flex-col justify-center items-center px-3 py-4 md:p-8 pb-16 bg-white min-h-screen">
    <div className="max-w-6xl mx-auto w-full">
      <div className="text-center mb-6 md:mb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#0b5dda] mb-3 md:mb-4">Ready to Transform Your <span className="text-black">Logistics Experience?</span></h1>
      </div>

      {/* USKO Family of Companies Section */}
      <div className="bg-[#0b5dda]/5 p-4 md:p-6 rounded-xl border border-[#0b5dda]/20 shadow-lg mx-auto max-w-3xl mb-6 md:mb-8">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0b5dda] flex items-center justify-center text-white mr-3 md:mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-[#0b5dda]">USKO Family of Companies</h3>
        </div>
        <div className="space-y-4">
          {/* Tree/Org Chart Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {/* USKO Logistics Inc - Top Center */}
            <div className="bg-white p-3 md:p-4 rounded-lg border border-gray-100 shadow-sm col-span-1 md:col-span-2 mx-auto w-full md:w-[338.89px]">
              <p className="font-bold text-gray-800 text-center text-sm md:text-base">USKO LOGISTICS INC</p>
              <div className="flex justify-between mt-1 text-xs md:text-sm">
                <span className="text-gray-600">MC Number:</span>
                <span className="font-semibold text-gray-800">728260</span>
              </div>
              <div className="flex justify-between text-xs md:text-sm">
                <span className="text-gray-600">US DOT Number:</span>
                <span className="font-semibold text-gray-800">2337754</span>
              </div>
            </div>
            
            {/* Vertical Line Connector */}
            <div className="col-span-1 md:col-span-2 h-4 md:h-8 flex justify-center">
              <div className="w-px h-full bg-[#0b5dda]/20"></div>
            </div>
            
            {/* USKO Expedite and Express - Side by Side */}
            <div className="bg-white p-3 md:p-4 rounded-lg border border-gray-100 shadow-sm">
              <p className="font-bold text-gray-800 text-center text-sm md:text-base">USKO EXPEDITE INC</p>
              <div className="flex justify-between mt-1 text-xs md:text-sm">
                <span className="text-gray-600">MC Number:</span>
                <span className="font-semibold text-gray-800">746242</span>
              </div>
              <div className="flex justify-between text-xs md:text-sm">
                <span className="text-gray-600">US DOT Number:</span>
                <span className="font-semibold text-gray-800">307593</span>
              </div>
            </div>
            <div className="bg-white p-3 md:p-4 rounded-lg border border-gray-100 shadow-sm">
              <p className="font-bold text-gray-800 text-center text-sm md:text-base">USKO EXPRESS INC</p>
              <div className="flex justify-between mt-1 text-xs md:text-sm">
                <span className="text-gray-600">MC Number:</span>
                <span className="font-semibold text-gray-800">563453</span>
              </div>
              <div className="flex justify-between text-xs md:text-sm">
                <span className="text-gray-600">US DOT Number:</span>
                <span className="font-semibold text-gray-800">1499885</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
        <div className="bg-gray-50 rounded-xl p-4 md:p-6 shadow-lg text-center">
          <div className="mx-auto w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#0b5dda] flex items-center justify-center text-white mb-3 md:mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Contact Us</h3>
          <p className="text-sm md:text-base text-gray-700 mb-3">Speak with our sales team member</p>
          <p className="font-bold text-[#0b5dda] text-base md:text-lg">+1 (916) 849-2156</p>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-4 md:p-6 shadow-lg text-center">
          <div className="mx-auto w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#0b5dda] flex items-center justify-center text-white mb-3 md:mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Email</h3>
          <p className="text-sm md:text-base text-gray-700 mb-3">For RFQ and RFI opportunities email:</p>
          <p className="font-bold text-[#0b5dda] text-base md:text-lg">ron@uskoinc.com</p>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-4 md:p-6 shadow-lg text-center">
          <div className="mx-auto w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#0b5dda] flex items-center justify-center text-white mb-3 md:mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">California Office</h3>
          <p className="text-sm md:text-base text-gray-700 mb-3">Our main West Coast facility</p>
          <div className="flex flex-col items-center">
            <p className="font-bold text-[#0b5dda] text-base">1101 CREEKSIDE RIDGE DR STE&nbsp;270</p>
            <p className="font-bold text-[#0b5dda] text-base">ROSEVILLE, CA 95678</p>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-4 md:mt-6 mb-8 md:mb-12">
        <img src="https://i.imgur.com/J2ME1ji.png" alt="USKO Logo" className="w-48 md:w-64 mx-auto mb-4" />
        <h4 className="text-xl md:text-2xl font-bold text-[#0b5dda]">Logistics. Delivered. <span className="text-black">Exceptionally.</span></h4>
      </div>
    </div>
  </section>,
];

const USKOPitchDeck = () => {
  const handleSlideChange = (oldIndex, newIndex) => {
    console.log('Slide changed:', { from: oldIndex, to: newIndex });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: false,
    pauseOnHover: true,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
    dotsClass: "slick-dots custom-dots",
    beforeChange: handleSlideChange,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          adaptiveHeight: true,
          swipe: true,
          touchMove: true,
          speed: 600
        }
      }
    ],
    lazyLoad: true,
    fade: false,
    swipe: true,
    touchMove: true
  };

  return (
    <div className="bg-white w-full min-h-screen">
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <div key={idx} className="relative min-h-screen">
            {slide}
            <div className="page-indicator absolute bottom-2 right-2 bg-white/80 px-2 py-1 rounded-full text-sm">
              <span className="text-[#0b5dda] font-bold">{idx + 1}</span>
              <span className="mx-1 text-gray-400">/</span>
              <span className="text-gray-500">{slides.length}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default USKOPitchDeck; 

