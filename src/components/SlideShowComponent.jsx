import React, { useState, useEffect } from 'react';



const SlideshowComponent = () => {

    const images = [
        'src/assets/images/ard.jpg',
        'src/assets/raspberri.svg',
        'src/assets/images/drone.svg',
        'src/assets/images/breadbord.svg' 
      ];

      const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);
    
        return () => clearInterval(interval);
      }, [images.length]);

    let src=images[currentImageIndex]
  

  return (
    <>
    <div className={`max-w-[1200px] m-auto h-[324px] tablets:block tablets:h-[324px] mobile-screen:h-[200px] bg-[url('src/assets/images/ard.jpg')] mt-5 bg-cover shadow-lg`}>
        <div style={{ backgroundImage: `url(${src})` }} className={`max-w-[1200px] m-auto h-[324px] tablets:block mobile-screen:hidden  mt-5 bg-cover shadow-lg`}>
                <div className="max-w-[1200px]  h-full">
                    <div className="bg-slate-900 h-full w-full bg-gradient-radial from-black to-neutral-100 bg-opacity-35  flex justify-between">
                        <div>
                            {/* this div serves as a dummy element */}
                        </div>
                        <div className="h-full w-[550px] flex items-center">
                            <div>
                                <h3 className="text-white font-semibold font-roboto text-[30px] ">WELCOME TO CHEAPER </h3>
                                <p className="text-white w-[300px] h-[46px] font-roboto font-medium">Get your <span className="font-bold">DIY</span>  electronic components at affordable prices</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </>
  );
};

export default SlideshowComponent;
