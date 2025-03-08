
import React from 'react';
import ModelViewer from '../3d/ModelViewer';

const ModelViewerSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-vitruve-cyan to-vitruve-purple bg-clip-text text-transparent">
              Explore Our Device
            </span>
          </h2>
          <p className="text-xl text-white/70">
            Take a closer look at the Vitruve velocity-based training encoder. 
            Rotate, zoom, and inspect the device that's revolutionizing strength and conditioning.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto bg-black/30 backdrop-blur-sm rounded-[2rem] p-2 overflow-hidden shadow-2xl border border-white/10">
          <ModelViewer 
            modelUrl="https://vitruve-models.s3.amazonaws.com/vitruve-encoder-3d.glb" 
            height="500px"
            className="rounded-[2rem]"
          />
        </div>
        
        <div className="max-w-4xl mx-auto mt-12 grid md:grid-cols-3 gap-8">
          <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-vitruve-purple/20 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-vitruve-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Durable Design</h3>
            <p className="text-white/70">Built to withstand intense training environments with high-quality materials.</p>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-vitruve-cyan/20 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-vitruve-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Real-time Tracking</h3>
            <p className="text-white/70">Measures velocity with ultra-precise sensors for immediate performance feedback.</p>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-vitruve-yellow/20 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-vitruve-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Wireless Connectivity</h3>
            <p className="text-white/70">Seamlessly connects to our platform for synchronized data analysis.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelViewerSection;
