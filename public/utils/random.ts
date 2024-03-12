/** @type {import('next').NextConfig} */
import testPic from "@/public/img/testPic.webp";
import testPic2 from "@/public/img/testPic2.webp";
import testPic3 from "@/public/img/testPic3.webp";
import testPic4 from "@/public/img/testPic4.webp";
import testPic5 from "@/public/img/testPic5.jpg";
import testPic6 from "@/public/img/testPic6.webp";
export default function generateRandomNumber() {
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
 



