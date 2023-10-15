import React, { useRef, useState } from "react";
import "tailwindcss/tailwind.css";
import { useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import logo from "../assets/im.png";
import First from "../assets/1st.png";
import Second from "../assets/2nd.png";
import Third from "../assets/3rd.png";
import { cardData } from "../constant/Cdata";
import Ins from "../assets/ins.svg";
import Li from "../assets/li.svg";
import F from "../assets/f.svg";
import Wh from "../assets/wh.svg";
import logo2 from "../assets/imwhite.png";

const SearchByName = () => {
  const inputRef = useRef();
  const [searchTerm, setSearchTerm] = useState("");
  const [nameList, setNameList] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://mkkkkkapi.onrender.com/user?name=${searchTerm}`
      );
      // console.log(response);
      if (response.ok) {
        const data = await response.json();
        // console.log("d: " + data.map);
        setNameList((prevList) => [...prevList, data[0].name]);
      }
      setSearchTerm("");
      inputRef.current.focus();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleLiClick = (liName) => {
    navigate(`/detail-page?name=${liName}`);
  };

  return (
    <div className="w-[100%]">
      {/* nav */}
      <nav className="flex-wrap border h-[85px] flex justify-between item-center">
        <div className="flex justify-between items-center w-[45%] pl-[30px]">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="h-[45px] w-[138px]" />
          </div>
          <div className="flex items-center relative group font-bold text-[18px]">
            <p className="group-hover:bg-blue-600">Solutions</p>
            <span className="text-[#0076CE]">
              <FaAngleDown />
            </span>
          </div>

          <div className="flex items-center relative group font-bold text-[18px]">
            <p className="group-hover:bg-blue-600">Features</p>
            <span className="text-[#0076CE]">
              <FaAngleDown />
            </span>
          </div>

          <div className="flex items-center relative group font-bold text-[18px]">
            <p className="group-hover:bg-blue-600">Blogs</p>
          </div>

          <div className="flex items-center relative group font-bold text-[18px]">
            <p className="group-hover:bg-blue-600">About</p>
            <span className="text-[#0076CE]">
              <FaAngleDown />
            </span>
          </div>
        </div>
        <div className="flex items-center relative group font-bold text-[18px] w-[17.5%] justify-between mr-[60px]">
          <p className="text-[#0076CE] w-[100px] text-center py-[10px] px-[10px] cursor-pointer border-solid border-2 border-[#0076CE] gap-x-2 rounded-[10px]">
            Login
          </p>
          <p className="text-white w-[100px] text-center py-[10px] px-[10px] cursor-pointer border-none gap-x-8 rounded-[10px] bg-[#0076CE]">
            Register
          </p>
        </div>
      </nav>
      {/* nav */}

      <div className="flex justify-between mt-[100px] items-center">
        <div className="w-[45%] ml-[80px]">
          <h1 className="font-bold text-[50px] leading-[70px]">
            Find
            <span className="text-[red] bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Partners
            </span>
            (CAs) available online
          </h1>

          <p className="text-[20px] text-[#616161] mt-[15px]">
            <span className="font-bold">CONNECT</span> with us where your
            services are listed and visible to a myriad of businesses seeking
            CA's for compliance support
          </p>

          {/* search input */}
          <div className="flex flex-col items-center rounded-md overflow-hidden mt-[50px]">
            <div className="w-[100%]">
              <input
                type="text"
                ref={inputRef}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-[80%] py-[10px] px-[20px] text-gray-700 border rounded-l-md"
                placeholder="Search by name"
              />
              <button
                className="bg-[#0076CE] w-[20%] hover:bg-red-600 text-white py-[11px] px-4 rounded-r-md"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
            <ul className="max-h-[200px] w-[100%] overflow-y-scroll shadow-md">
              {nameList.map((name, index) => (
                <li
                  className="bg-[#0076CE] text-white py-[10px] px-[20px] min-w-fit hover:bg-[#999] hover:text-[#0076CE] rounded-[10px] mt-[20px] cursor-pointer"
                  key={index}
                  onClick={() => handleLiClick(name)}
                >
                  {name}
                </li>
              ))}
            </ul>
            {/* {select && <GetDataByName fetchedNameData={searchTerm} />} */}
          </div>
        </div>

        {/* 2nd component */}
        <div className="flex w-[40%] justify-between mr-[30px]">
          <img className="pt-[60px] h-[400px]" src={First} />
          <img className="h-[400px]" src={Second} />
          <img className="pt-[40px] h-[400px]" src={Third} />
        </div>
      </div>

      <div className="flex flex-col items-center text-center mt-[70px]">
        <div>
          <h1 className="font-bold text-[50px]">
            Want to
            <span className="text-[red] bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Join
            </span>
            Us?
          </h1>
          <p className="text-[24px]">
            To remain with us, it is essential that you diligently follow the
            steps provided
          </p>
        </div>
        <div className="flex flex-wrap w-[90%] mt-[25px] justify-center">
          {cardData.map((ele) => {
            return (
              <div className="relative shadow-md w-[28%] rounded-[10px] p-[20px] flex flex-col items-center m-[15px]">
                <p className="text-[20px] font-bold">{ele.title}</p>
                <p className="text-[16px] text-center mt-[10px]">{ele.desc}</p>

                <div className="py-[15px] px-[30px] bg-slate-100 w-[95%] rounded-[10px] mt-[20px] leading-[30px]">
                  <div className="flex font-bold">
                    <p className="text-[#0076CE]">Due Date</p>
                    <p className="text-[red] ml-[35px]">Penalty fees</p>
                  </div>

                  <div className="flex justify-between">
                    <p>Within 180</p>
                    <p className="pl-[40px]">{ele.Within180}</p>
                  </div>

                  <div className="flex justify-between">
                    <p>Days</p>
                    <p className="pl-[60px]">{ele.days}</p>
                  </div>
                </div>
                <div className="w-[46px] h-[46px] rounded-[10px] text-white bg-gradient-to-r from-blue-600 to-purple-600 flex justify-center items-center font-bold absolute left-[-8px] top-[-8px]">
                  {ele.num}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* footer */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-[100%] h-[100%] mt-[120px]">
        <div className="flex justify-between flex-wrap px-[100px] py-[25px]">
          <div className="w-[20%] text-white">
            <img src={logo2} alt="logo2" />
            <p className="text-[14px]">
              India's first platform dedicated to simplifying partner search
            </p>
          </div>

          <div className="text-[14px] leading-7 text-white">
            <p className="font-bold">COMPANY</p>
            <ul className="flex flex-col">
              <li>About</li>
              <li>Pricing</li>
              <li>Careers</li>
            </ul>
          </div>

          <div className="text-[14px] leading-7 text-white">
            <p className="font-bold">SOLUTIONS</p>
            <ul className="flex flex-col">
              <li>Search</li>
              <li>Connect</li>
              <li>Research</li>
              <li>Academy</li>
            </ul>
          </div>

          <div className="text-[14px] leading-7 text-white">
            <p className="font-bold">RESOURCES</p>
            <ul className="flex flex-col">
              <li>Blogs</li>
              <li>Forms</li>
            </ul>
          </div>

          <div className="text-[14px] leading-7 text-white">
            <p className="font-bold">SUPPORT</p>
            <ul className="flex flex-col">
              <li>Help</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="text-[14px] leading-7 text-white">
            <p className="font-bold">LEGAL</p>
            <ul className="flex flex-col">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Accessibility</li>
            </ul>
          </div>
        </div>
        <div className="border-b border-white mb-[30px] w-[90%] m-auto"></div>
        <div className="text-white w-[90%] m-auto flex justify-between pb-[20px]">
          <p>
            Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071,
            Maharashtra
          </p>
          <div className="flex w-[12%] justify-between">
            <img src={F} alt="facebook" />
            <img src={Ins} alt="facebook" />
            <img src={Li} alt="facebook" />
            <img src={Wh} alt="facebook" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchByName;
