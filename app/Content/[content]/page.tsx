"use client";
import Header from "@/components/header/View";
import React from "react";
import testPic from "@/public/img/testPic.webp";
import testPic2 from "@/public/img/testPic2.webp";
import testPic3 from "@/public/img/testPic3.webp";
import testPic4 from "@/public/img/testPic4.webp";
import testPic5 from "@/public/img/testPic5.jpg";
import testPic6 from "@/public/img/testPic6.webp";
import Image from "next/image";
import generateRandomNumber from "@/public/utils/random";
import Face6Icon from "@mui/icons-material/Face6";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { log } from "console";
import styled from "styled-components";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
function page() {
  const tag = ["All", "Study", "Mixed", "Foods", "Sport", "Computer", "Funny"];

  return (
    <div>
      <Header />
      <div className="p-4 flex flex-col lg:flex-row w-full">
        <div className="w-full h-auto">
          <Image
            src={testPic2}
            alt="test"
            width={2000}
            height={200}
            loading="lazy"
            className="rounded-lg"
          />
          <div className="pt-4">
            <h1 className="line-clamp-2">
              [Ghibli Music Collection 2023] 🌈 Best Ghibli Piano Collection 🍉
              BGM for work/relax/study
            </h1>
            <div className="flex-col flex lg:flex-row justify-between mt-4 gap-2">
              <div className="flex  gap-2">
                <Image
                  src={testPic5}
                  alt="test"
                  loading="lazy"
                  className="rounded-full w-[35px] h-[35px] object-cover"
                />
                <label className="flex-col gap-2 ">
                  <p className="text-[12px] font-normal">Nausicaa Requiem </p>
                  <p className="text-[11px] font-normal text-[#a6a6a6]">
                    ผู้ติดตาม 2.74 หมื่น คน
                  </p>
                </label>
                <button className=" ml-2 border rounded-2xl  transition pr-4 pl-4 text-[14px] hover:bg-white flex justify-center text-center items-center gap-2 hover:text-[#a6a6a6]">
                  Follow <AddCircleIcon />
                </button>{" "}
              </div>
              <div className="mt-4 md:mt-0 gap-4 bg-[#3b3b3b] justify-between rounded-2xl pl-2 pr-2 flex">
                <div className="flex justify-center items-center text-center m-auto gap-2">
                  <button className="">
                    <ThumbUpAltIcon />
                  </button>
                  <span>500</span>
                </div>
                <div className="border-l-[1px] mt-1 mb-1  border-[#a6a6a6]" />
                <div className="flex justify-center items-center text-center m-auto gap-2">
                  <button>
                    <ThumbDownOffAltIcon />
                  </button>
                  <span>2</span>
                </div>
              </div>
            </div>
            <div className="shadow-lg  rounded-lg h-full p-2 mt-4 bg-[rgba(255,255,255,0.1)]">
              <span className="text-[14px] font-normal text-[#a6a6a6]">
                เรื่องนิทาน: `&quot;`The Enchanted Garden`&quot;` 🌺🐢✨
                <br />
                <br />
                Once upon a time, in a small village nestled between rolling
                hills and meandering streams, there was a magical garden known
                as the Enchanted Garden. This garden was hidden from the eyes of
                ordinary people, accessible only to those with pure hearts and a
                sense of wonder. In this mystical garden, vibrant flowers
                bloomed year-round, <br />
                each petal carrying a unique color that seemed to glow with a
                soft, ethereal light. The air was filled with the sweet scent of
                blossoms, and the melody of songbirds echoed through the trees.
                But the true enchantment lay in the magical creatures that
                called the garden home. At the heart of the Enchanted Garden
                lived a wise old turtle named Terrance. Terrance had been the
                guardian of the garden for centuries,
                <br />
                <br /> and his ancient eyes held the secrets of countless
                stories. One day,
                <br />
                <br /> he decided it was time to share the magic of the garden
                with a worthy visitor from the outside world. On the outskirts
                of the village,
                <br /> <br /> there lived a young girl named Lily. Lily was
                known for her kindness,
                <br />
                <br />
                compassion,
                <br />
                <br /> and a heart full of dreams. One sunny afternoon,
                <br /> <br /> as she strolled through the meadow,
                <br />
                <br /> a gentle breeze whispered through the air,
                <br />
                <br /> guiding her towards the hidden entrance of the Enchanted
                Garden. 🌳💫 As Lily stepped through the mystical gateway,
                <br />
                <br /> she was greeted by a chorus of delighted whispers from
                the flowers and the cheerful trill of a hummingbird. Terrance
                emerged from his hiding spot and greeted Lily with a knowing
                smile. `&quot;`Lily,
                <br />
                <br /> welcome to the Enchanted Garden. You have been chosen to
                witness the magic within and carry its spirit back to your
                world,
                <br />
                <br />
                `&quot;` Terrance said in a voice as soothing as a babbling
                brook. Lily`&#39;`s eyes widened with awe as she explored the
                magical wonders around her. She befriended a mischievous sprite
                who could paint the sky with dazzling colors and danced with
                graceful fairies under the luminescent moonlight. Each step
                brought a new discovery,
                <br />
                <br /> and every creature she met shared tales of love,
                <br />
                <br /> courage,
                <br />
                <br /> and the importance of protecting the wonders of the
                natural world. 🌈🧚‍♂️ However,
                <br />
                <br /> the Enchanted Garden faced a looming threat. A shadowy
                figure known as the Sorcerer of Despair sought to drain the
                magic from the garden,
                <br /> <br /> casting a dark cloud over the once-vibrant
                paradise. Lily,
                <br /> <br /> filled with newfound courage,
                <br />
                <br /> decided to confront the sorcerer and protect the magic
                that had touched her heart. With the guidance of her enchanted
                friends,
                <br />
                <br /> Lily embarked on a quest to find the Sorcerer of
                Despair`&#39;`s lair. Along the way,
                <br />
                <br /> she encountered challenges that tested her resolve and
                friendships that strengthened her spirit. As she reached the
                heart of the darkened forest where the sorcerer dwelled,
                <br />
                <br /> Lily faced the ultimate test of her bravery. ⚔️🌑 In a
                climactic battle of light against darkness,
                <br />
                <br />
                Lily harnessed the magic of the Enchanted Garden and confronted
                the Sorcerer of Despair. With a burst of radiant energy,
                <br /> <br /> the dark clouds lifted,
                <br />
                <br /> and the garden`&#39;`s magic was restored. The
                once-hidden paradise now shone brighter than ever,
                <br /> <br /> its beauty spreading beyond its borders and
                touching the hearts of all who embraced its enchantment. As a
                token of gratitude,
                <br />
                <br /> the magical beings of the Enchanted Garden bestowed a
                single,
                <br />
                <br /> glowing flower upon Lily. With a heart full of gratitude
                and a newfound sense of responsibility,
                <br />
                <br /> Lily returned to her village,
                <br />
                <br /> carrying the magic of the Enchanted Garden within her.
                From that day forward,
                <br />
                <br />
                Lily shared the enchanting tales of the garden,
                <br />
                <br /> inspiring others to cherish and protect the wonders of
                the natural world. The magic of the Enchanted Garden lived on,
                <br />
                <br /> not only in the hidden paradise but also in the hearts of
                those who believed in its transformative power. And so,
                <br />
                <br /> the tale of `&quot;`The Enchanted Garden`&quot;` became a
                cherished story,
                <br />
                <br /> passed down through generations,
                <br />
                <br />
                reminding everyone that magic exists for those who dare to
                believe. 📖✨
              </span>
            </div>
          </div>
        </div>

        <div className="min-w-[250px] p-4  ">
          <div className="rounded-lg overflow-hidden shadow-lg">
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
          <div className="w-full  flex mt-4">
            <Image
              src={testPic6}
              alt="test"
              width={180}
              height={200}
              loading="lazy"
              className="rounded-lg shadow-md"
            />
            <div className="pl-2 ">
              <span className="line-clamp-2 text-[14px]">
                Nausicaa Requiem [Nausicaa of the Valley of the Wind]
              </span>
              <p className="text-[14px] font-normal text-[#a6a6a6]">
                The name of life
              </p>
              <div className="bg-[#3b3b3b] w-[30px] text-center rounded-md ">
                <p className="text-[9px] font-normal text-[#a6a6a6]">new</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
