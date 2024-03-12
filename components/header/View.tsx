"use client";
import React, { useState } from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import PeopleIcon from "@mui/icons-material/People";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Face3Icon from "@mui/icons-material/Face3";
import Face4Icon from "@mui/icons-material/Face4";
import Face5Icon from "@mui/icons-material/Face5";
import CloseIcon from "@mui/icons-material/Close";
function Header() {
  const [toggle, toggleNav] = useState<boolean>(false);
  return (
    <>
      <div className="fixed w-full h-[80px]">
        <div className=" w-full bg-black flex p-4 justify-between items-center">
          <div className="flex gap-4 ">
            <div className="items-center text-center justify-center rounded-full hover:bg-[#3b3b3b] w-[30px] h-[30px]">
              <MenuBookIcon
                className="cursor-pointer  "
                onClick={() => toggleNav(!toggle)}
              />
            </div>

            <h1 className="hidden md:flex">Memorise</h1>
          </div>
          <div className="ml-2 flex gap-4">
            <div className="border-[#3b3b3b] border-r-0 border w-auto md:w-[420px] h-[40px] rounded-3xl flex">
              <input
                type="text"
                placeholder="Search..."
                className="bg-black pl-4 focus:border-[#3b3b3b] focus:border  rounded-l-3xl  border-[#3b3b3b] text-white w-full"
              />
              <button className="bg-[#3b3b3b]  border-[#3b3b3b] bordr w-auto md:w-[70px] rounded-r-3xl ">
                <SearchIcon />
              </button>
            </div>{" "}
            <button className="bg-[#3b3b3b] hidden md:block border-[#3b3b3b] rounded-full w-[40px]">
              <MicIcon />
            </button>
          </div>
          <div className="flex gap-4">
            <div className="flex justify-center">
              <NotificationsNoneIcon />
              <span className="bg-[#e14f4f] text-[14px] w-[17px] ml-[-7px] mt-[-10px] h-[17px] flex justify-center items-center text-center rounded-full">
                3
              </span>
            </div>
            <AccountCircleIcon />
          </div>
        </div>
      </div>
      <Overlay open={toggle}>
        <div
          className={`${
            !toggle && "hidden "
          } w-ful flex  pr-[50px] mt-10 cursor-pointer justify-end`}
        >
          <CloseIcon onClick={() => toggleNav(!toggle)} />
        </div>
        <OverlayMenu open={toggle}>
          <div className=" pl-2 pr-2 ">
            <div>
              <div className="flex mt-4 justify-start cursor-pointer hover:bg-[#3b3b3b] hover:border-[#3b3b3b] hover:border pl-4 gap-4  rounded-lg p-2  w-full">
                <HomeIcon />
                <span className="text-[14px] font-medium">Home</span>
              </div>
              <div className="flex mt-4 justify-start cursor-pointer hover:bg-[#3b3b3b] hover:border-[#3b3b3b] hover:border pl-4 gap-4 w-full rounded-lg p-2">
                <AutoStoriesIcon />
                <span className="text-[14px] font-medium">Contents</span>
              </div>
              <div className="flex mt-4 justify-start cursor-pointer hover:bg-[#3b3b3b] hover:border-[#3b3b3b] hover:border pl-4 gap-4 w-full rounded-lg p-2">
                <StarHalfIcon />
                <span className="text-[14px] font-medium">Favorite</span>
              </div>
              <div className="flex mt-4 justify-start cursor-pointer hover:bg-[#3b3b3b] hover:border-[#3b3b3b] hover:border pl-4 gap-4 w-full rounded-lg p-2">
                <PeopleIcon />
                <span className="text-[14px] font-medium">Comunity</span>
              </div>
              <div className="flex mt-4 justify-start cursor-pointer hover:bg-[#3b3b3b] hover:border-[#3b3b3b] hover:border pl-4 gap-4 w-full rounded-lg p-2">
                <BookmarkBorderIcon />
                <span className="text-[14px] font-medium">Bookmark</span>
              </div>
            </div>
            <hr className="m-4 border-[#3b3b3b]" />
            <div>
              <span className="text-[16px]cursor-pointer hover:bg-[#3b3b3b] hover:border-[#3b3b3b] hover:border pl-4 font-semibold">
                Follwer{" "}
              </span>
              <div className="flex mt-4 justify-start cursor-pointer hover:bg-[#3b3b3b] hover:border-[#3b3b3b] hover:border pl-4 gap-4 w-full rounded-lg p-2">
                <Face3Icon />
                <span className="text-[14px] font-medium">Kite black</span>
              </div>
              <div className="flex mt-4 justify-start cursor-pointer hover:bg-[#3b3b3b] hover:border-[#3b3b3b] hover:border pl-4 gap-4 w-full rounded-lg p-2">
                <Face4Icon />
                <span className="text-[14px] font-medium">Cockatoo</span>
              </div>
              <div className="flex mt-4 justify-start cursor-pointer hover:bg-[#3b3b3b] hover:border-[#3b3b3b] hover:border pl-4 gap-4 w-full rounded-lg p-2">
                <Face5Icon />
                <span className="text-[14px] font-medium">dark-winged</span>
              </div>
            </div>
          </div>
        </OverlayMenu>
      </Overlay>
    </>
  );
}
interface prop {
  open: boolean;
}
const Overlay = styled.div<prop>`
  position: fixed;
  height: ${(props) => (props.open ? "100vh" : 0)};
  width: 100vw;
  background: #1c2022;
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.div<prop>`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  div {
    opacity: ${(props) => (props.open ? 1 : 0)};
    font-size: 25px;
    transition: opacity 0.4s ease-in-out;
  }
`;

export default Header;
