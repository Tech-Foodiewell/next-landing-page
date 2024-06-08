import Image from "next/image";
import Hero from "../../assets/img/hero-homepage.svg";
import PlayButton from "../../assets/img/icon-play.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons/faCircleCheck";

import Nutritionist1 from "../../assets/img/img-nutritionist-fitri.png";
import Nutritionist2 from "../../assets/img/img-nutritionist-rien.png";
import Nutritionist3 from "../../assets/img/img-nutritionist-tri.png";
import SlidingText from "./slidingText";

const NutritionistCard = () => (
  <div className="">
    <div className="absolute right-[480px] bottom-0">
      <Image src={Nutritionist2} alt="" />
      <div className="p-[10px] text-sm w-min rounded-md bg-white text-text shadow-lg relative bottom-10 right-6">
        <p className="font-bold mb-3 w-max">
          Ririn Akmal Sari, SST., MKM{" "}
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="ml-4 text-lg text-success"
          />
        </p>
        <p>Dietsien</p>
      </div>
    </div>
    <div className="absolute right-12 bottom-48">
      <Image src={Nutritionist1} alt="" />
      <div className="p-[10px] text-sm w-min rounded-md bg-white text-text shadow-lg relative bottom-10 right-6">
        <p className="font-bold mb-3 w-max">
          Fitri Khoriyah, SKM., MKM.{" "}
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="ml-4 text-lg text-success"
          />
        </p>
        <p>Dietsien</p>
      </div>
    </div>
    <div className="absolute right-44 -bottom-28">
      <Image src={Nutritionist3} alt="" />
      <div className="p-[10px] text-sm w-min rounded-md bg-white text-text shadow-lg relative bottom-12 left-8">
        <p className="font-bold mb-2 w-max">
          Tri Rachmawati, S. Gz{" "}
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="ml-4 text-lg text-success"
          />
        </p>
        <p>Dietsien</p>
      </div>
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
        <div>
          <NutritionistCard />
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
