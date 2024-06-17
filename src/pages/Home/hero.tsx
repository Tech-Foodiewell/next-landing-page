import Image, { StaticImageData } from "next/image";
import Hero from "../../assets/img/hero-homepage.svg";
import PlayButton from "../../assets/img/icon-play.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons/faCircleCheck";

import Nutritionist1 from "../../assets/img/img-nutritionist-fitri.png";
import Nutritionist2 from "../../assets/img/img-nutritionist-rien.png";
import Nutritionist3 from "../../assets/img/img-nutritionist-tri.png";
import SlidingText from "./slidingText";
import React, { HTMLProps } from "react";

type CardType = {
  name: string;
  img: StaticImageData;
  position: string;
  name_position: string;
  img_size?: string;
};

const nutritionistData: CardType[] = [
  {
    img: Nutritionist1,
    name: "Fitri Khoriyah, SKM., MKM.",
    position: "right-12 top-[31%]",
    name_position: "bottom-14 right-8",
    img_size: "w-56 h-[250px]",
    // position: "right-12 bottom-40",
  },
  {
    img: Nutritionist2,
    name: "Ririn Akmal Sari, SST., MKM",
    position: "right-[480px] -bottom-10",
    name_position: "bottom-10 right-6",
    img_size: "w-[294px] h-[345px]",
  },
  {
    img: Nutritionist3,
    name: "Tri Rachmawati, S. Gz",
    position: "right-44 -bottom-24",
    name_position: "bottom-12 left-8",
    img_size: "w-52 h-[235px]",
  },
];

const NutritionistCard = ({
  name,
  img,
  position,
  name_position,
  img_size,
}: CardType) => (
  <div className={`${position} absolute`}>
    <Image src={img} alt={name} className={img_size} />
    <div
      className={`${name_position} p-[10px] text-sm w-min rounded-md bg-white text-text shadow-lg relative`}
    >
      <p className="font-bold mb-2 w-max">
        {name}
        <FontAwesomeIcon
          icon={faCircleCheck}
          className="ml-4 text-lg text-success"
        />
      </p>
      <p>Dietsien</p>
    </div>
  </div>
);

const PageHero = () => (
  <>
    <div>
      <div className="flex justify-between px-16">
        <div className="relative top-48 text-text font-bold">
          <p className="text-[28px] bg-white bg-opacity-75 p-[10px] w-min rounded-md">
            Temukan..
          </p>
          <SlidingText />
          <button className="text-white bg-[#085235] px-9 py-4 rounded-md flex mt-16 font-normal">
            Daftar Konsultasi
          </button>
        </div>
        <div className="">
          {nutritionistData.map((nutritionist, index) => (
            <NutritionistCard
              key={index}
              img={nutritionist.img}
              name={nutritionist.name}
              position={nutritionist.position}
              name_position={nutritionist.name_position}
              img_size={nutritionist.img_size}
            />
          ))}
        </div>
      </div>
      <div>
        <Image className="object-fill w-full -mt-[483px]" src={Hero} alt="" />
        <button className="absolute bottom-56 right-80">
          <Image alt="" src={PlayButton} />
        </button>
      </div>
    </div>
  </>
);

export default PageHero;
