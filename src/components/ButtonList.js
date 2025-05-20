import React, { useRef } from 'react';
import Button from './Button';

const list = [
  "All", "Live", "Gaming", "Movies", "Soccer", "Songs", "Cricket",
  "Music", "Sports", "Health", "Data", "Current", "Uploads",
  "Information", "Peace", "Motivation", "Politics", "Engineering"
];

const ButtonList = () => {
  const scrollRef = useRef(null);

  const handleScroll = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto whitespace-nowrap no-scrollbar"
      >
        {list.map((buttonName, index) => (
          <Button key={index} name={buttonName} />
        ))}
      </div>

      <button
        onClick={handleScroll}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75"
      >
        {/* You can use an icon here like Lucide/FontAwesome, or raw SVG */}
       
      </button>
    </div>
  );
};

export default ButtonList;
