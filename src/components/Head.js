import React, { useState, useEffect } from 'react';
import { toggleMenu } from '../utils/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { YOUTUBE_SEARCH_API  } from '../utils/constants';
//import store from '../utils/store';
import { cacheResults } from '../utils/searchSlice';


const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
   const searchCache = useSelector((store)=> store.search);
const dispatch = useDispatch();


  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache && searchCache[searchQuery]){
      setSuggestions(searchCache[searchQuery]);
      }else{
  getSearchSuggestions();
      }
      },200);
  
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  console.log(searchQuery);

  const getSearchSuggestions = async () => {
   console.log(searchQuery);
    //const data = await fetch(youtube_search_API + searchQuery);
    const proxy = "https://corsproxy.io/?";
const data = await fetch(`${proxy}${YOUTUBE_SEARCH_API}${searchQuery}`);

    //const data = await fetch(`${YOUTUBE_SEARCH_API }${searchQuery}`);

    const json = await data.json();
    if (json && json[1]) {
  setSuggestions(json[1]);
} 
    dispatch(cacheResults(
      {
        [searchQuery] : json[1],
      }
    ));
  };

  

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="h-8 cursor-pointer"
          alt='menu'
          src="https://previews.123rf.com/images/fokaspokas/fokaspokas1809/fokaspokas180900059/108562274-hamburger-men%C3%BC-web-symbol-auf-transparentem-hintergrund.jpg"
        />
        <a href="/">
          <img
            className="h-8 mx-3"
            alt='youtube-logo'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10 px-12">
        <div>
          <input
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            Search
          </button>
          <div className='fixed bg-white py-2 px-5 w-[37 rem] rounded-lg'>
           <ul>
            {suggestions.map((item)=> (
              <li key={item}
           className='px-5'>{item}</li>
            ))}
            </ul>  
          </div>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
            {/* Search suggestions will be rendered here */}
          </div>
        )}
      </div>
      <div>
        <img
          className='h-8'
          alt='user'
          src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
        />
      </div>
    </div>
  );
};

export default Head;