import Image from "next/image";

import testPic from "@/public/img/testPic.webp";
import testPic2 from "@/public/img/testPic2.webp";
import testPic3 from "@/public/img/testPic3.webp";
import testPic4 from "@/public/img/testPic4.webp";
import testPic5 from "@/public/img/testPic5.jpg";
import testPic6 from "@/public/img/testPic6.webp";
import { dataMock } from "./mockdata";
import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import PeopleIcon from "@mui/icons-material/People";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Face3Icon from "@mui/icons-material/Face3";
import Face4Icon from "@mui/icons-material/Face4";
import Face5Icon from "@mui/icons-material/Face5";
import Header from "@/components/header/View";
import Link from "next/link";
//#3b3b3b
export default function Home() {
  const tag = ["All", "Study", "Mixed", "Foods", "Sport", "Computer", "Funny"];

  function generateRandomNumber() {
    // Generate a random decimal between 0 (inclusive) and 1 (exclusive)
    const randomDecimal = Math.random();

    // Scale the random decimal to the range 1 to 6 (inclusive)
    const randomNumber = Math.floor(randomDecimal * 6) + 1;

    if (randomNumber === 1) {
      return testPic;
    } else if (randomNumber === 2) {
      return testPic2;
    } else if (randomNumber === 3) {
      return testPic3;
    } else if (randomNumber === 4) {
      return testPic4;
    } else if (randomNumber === 5) {
      return testPic5;
    } else if (randomNumber === 6) {
      return testPic6;
    }
  }

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className=" w-full flex mt-[80px] h-full">
        <div className="flex-col hidden md:flex w-1/4 md:w-1/5 xl:w-1/7 h-full gap-8 ">
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
        </div>
        <div className="p-4 md:p-0 w-full h-full">
          <div className="overflow-hidden">
            <ul className="flex gap-4 ">
              {tag.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`${
                      item === "All" && "bg-white text-black font-bold "
                    } cursor-pointer w-auto hover:bg-[#474747] h-[32px] pt-1 text-[14px] transition  font-normal flex justify-center items-center pb-1 pl-4 pr-4 border border-[#3b3b3b] rounded-md bg-[#3b3b3b]`}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 w-full mt-8">
            {dataMock.map((item, index) => {
              return (
                <Link href={`/Content/${item.title}`} key={index}>
                  <div className="w-auto cursor-pointer hover:bg-[#3b3b3b] hover:rounded-lg hover:transition ease-in-out duration-1000 ">
                    <Image
                      src={generateRandomNumber() || ""}
                      alt="test"
                      width={500}
                      height={200}
                      loading="lazy"
                      className="rounded-lg"
                    />
                    <div className="leading-5 mt-2 p-2">
                      <p className="text-[16px] font-medium">{item.title}</p>
                      <p className="text-[14px] font-normal text-[#a6a6a6]">
                        {item.creatore} create
                      </p>
                      <p className="text-[14px] font-normal text-[#a6a6a6]">
                        {item.date}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
