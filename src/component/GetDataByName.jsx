import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaAngleDown, FaStar } from "react-icons/fa";
import { SlCalender } from "react-icons/Sl";
import logo from "../assets/im.png";
import logo2 from "../assets/imwhite.png";
import Rectangle from "../assets/Rectangle.png";
import Rect_Cir from "../assets/rec-cir.svg";
import Ins from "../assets/ins.svg";
import Li from "../assets/li.svg";
import F from "../assets/f.svg";
import Wh from "../assets/wh.svg";
import { consData } from "../constant/Cdata";

const GetDataByName = () => {
  const [fetched, setFetched] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("name");

  const fetcheDataByName = async () => {
    try {
      const response = await fetch(
        `https://mkkkkkapi.onrender.com/user?name=${name}`
      );
      // console.log(response);
      if (response.ok) {
        const data = await response.json();
        // console.log("d: " + data[0].name);
        setFetched(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const removeQueryParams = () => {
    window.history.pushState({}, document.title, window.location.pathname);
  };

  // Use the `name` variable to fetch or display data

  // Remove query parameters when the component mounts
  useEffect(() => {
    fetcheDataByName();
    // removeQueryParams();
  });

  return (
    <div className="flex flex-col">
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

      <div className="flex justify-between flex-wrap">
        {/* comp 1 */}
        {fetched.map((ele) => {
          return (
            <div className="w-[500px] p-[15px] pl-[60px] pt-[30px]">
              <h1 className="text-[35px] font-bold leading-normal my-[20px]">
                {ele.name}
              </h1>
              <p className="font-Poppins leading-8 text-[20px] font-normal my-[20px]">
                I am here to provide my expertise in accounting and finance,
                which includes financial statements, economics, and auditing,
                all to assist you effectively
              </p>
              <div className="w-[100px] h-[30px] flex justify-between items-center my-[20px]">
                <FaStar
                  style={{ color: "#0076CE", width: "24px", height: "24px" }}
                />
                <p className="text-[#0076CE] text-[20px] font-bold leading-normal">
                  {ele.rating}
                </p>
                <p className="text-[20px] font-bold leading-normal">
                  {`(${ele.reviewCount})`}
                </p>
              </div>

              <div className="w-[100%] shadow-xl p-[15px] rounded-[20px]">
                <div className="flex justify-between my-[20px]">
                  <p>{ele.taskComplexity}</p>
                  <p>{ele.price}</p>
                </div>

                <div className="flex min-w-full items-center my-[20px]">
                  <SlCalender style={{ color: "#0076CE" }} />
                  <p className="ml-[10px]">{ele.deliveryTime}</p>
                </div>

                <div className="flex justify-between my-[20px]">
                  <button className="text-[#FFFFFF] bg-[#0076CE] rounded-[10px] w-[180px] py-[10px] px-[10px] flex justify-center items-center font-bold">
                    Request Proposal
                  </button>
                  <button className="text-[#0076CE] border-solid border-2 border-[#0076CE] rounded-[10px] w-[180px] py-[10px] px-[10px] flex justify-center items-center font-bold">
                    Chat with me
                  </button>
                </div>
              </div>

              <div className="shadow-xl rounded-[20px] p-[15px] my-[30px] flex flex-col">
                <h1 className="text-[35px] font-bold my-[20px]">
                  What people say?
                </h1>
                <p className="text-[20px] my-[20px]">
                  I cannot express enough gratitude for the support Micheal has
                  provided in managing my personal finances. Their attention to
                  detail and deep understanding of financial markets has ensured
                  that my investments are in safe hands. I highly recommend
                  their services to anyone seeking financial guidance.
                </p>
                <img className="m-auto" src={Rect_Cir} alt="Svg File" />
              </div>
            </div>
          );
        })}

        {/* comp 2 */}
        {fetched.map((ele) => {
          return (
            <div className="w-[700px] pr-[60px] pt-[30px]">
              <div>
                <img src={Rectangle} alt="Rectanlge image" />
              </div>

              <div className="text-[35px] font-bold leading-normal my-[20px] flex min-w-full">
                <h1>About</h1>
                <h1 className="ml-[10px]">{ele.name}</h1>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <p className="text-[#999] text-[16PX] font-bold">FROM</p>
                  <p className="mt-[15px] text-[20px]">{ele.about.from}</p>
                </div>

                <div className="flex flex-col">
                  <p className="text-[#999] text-[16PX] font-bold">
                    PARTNER SINCE
                  </p>
                  <p className="mt-[15px] text-[20px]">
                    {ele.about.partnerSince}
                  </p>
                </div>

                <div className="flex flex-col">
                  <p className="text-[#999] text-[16PX] font-bold">
                    AVERAGE RESPONSE TIME
                  </p>
                  <p className="mt-[15px] text-[20px]">
                    {ele.about.averageResponseTime}
                  </p>
                </div>
              </div>

              <div className="mt-[50px] flex flex-col">
                <p className="text-[#999] text-[16PX] font-bold">ABOUT</p>
                <p className="mt-[15px] text-[20px]">
                  I am a Professional Charted Accountant here to offer
                  professional services of accounting and finance, financial
                  statements, Bookkeeping in affordable price.
                </p>
              </div>

              <div className="flex justify-between mt-[30px]">
                <div className="flex flex-col">
                  <p className="text-[#999] text-[16PX] font-bold">
                    SERVICES | OFFER
                  </p>
                  <ul className="mt-[10px] text-[20px] list-disc flex flex-col pl-[30px]">
                    <li>Financial accounting</li>
                    <li>Financial statements</li>
                    <li>Bookkeeping</li>
                    <li>accounting and finance</li>
                    <li>Corporate Finance</li>
                    <li>Maintain Chats of Accounts</li>
                    <li>Profit and loss statements</li>
                    <li>Bank Reconcilitation</li>
                    <li>Balance Sheets</li>
                  </ul>
                </div>

                <div className="flex flex-col">
                  <p className="text-[#999] text-[16PX] font-bold">WHY ME?</p>
                  <ul className="mt-[10px] text-[20px] list-disc flex flex-col pl-[30px]">
                    <li>Financial accounting</li>
                    <li>Financial statements</li>
                    <li>Bookkeeping</li>
                    <li>accounting and finance</li>
                    <li>Corporate Finance</li>
                    <li>Maintain Chats of Accounts</li>
                    <li>Profit and loss statements</li>
                    <li>Bank Reconcilitation</li>
                    <li>Balance Sheets</li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-[90%] flex mt-[100px] m-auto justify-between">
        {consData.map((ele) => {
          return (
            <div className="w-[27%]">
              <h1 className="text-[30px] font-bold leading-normal my-[20px]">
                Recommended for you
              </h1>
              <div className="">
                <div className="shadow-xl pb-[15px] rounded-[20px]">
                  <img src={ele.image} alt="Reac_image" />
                  <div className="flex justify-between items-center px-[20px]">
                    <h1 className="text-[20px] font-bold mt-[10px]">
                      {ele.title}
                    </h1>
                    <p className="text-[20px] font-bold pr-[20px]">
                      {ele.price}
                    </p>
                  </div>
                  <p className="pl-[20px]">{ele.desc}</p>
                  <div className="flex items-center mt-[15px] pl-[20px]">
                    <FaStar
                      style={{
                        color: "#0076CE",
                        width: "20px",
                        height: "20px",
                      }}
                    />
                    <p className="pl-[6px] font-bold text-[#0076CE]">
                      {ele.rating}
                    </p>
                    <p className="pl-[6px]">{ele.reviewCount}</p>
                  </div>

                  <button className="m-auto w-[90%] bg-[#0076CE] text-white rounded-[10px] flex justify-center items-center py-[10px] px-[20px] mt-[30px]">
                    View Services
                  </button>
                </div>
              </div>
            </div>
          );
        })}
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

// display: flex;
// width: 100px;
// padding: 10px 20px;
// justify-content: center;
// align-items: center;
// gap: 8px;
// border-radius: 10px;
// background: ;

export default GetDataByName;
