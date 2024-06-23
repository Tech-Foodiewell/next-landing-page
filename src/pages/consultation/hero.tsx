import CTAButton from "@/components/Button/CTA";
import BG from "@/assets/img/img-bg-plain.png";
import Image from "next/image";
import styles from "./styles.module.css";
import PlayButton from "../../assets/img/icon-play.svg";
import HeroShapes from "../../assets/img/img-hero-shapes.svg";

import Nutritionist1 from "../../assets/img/img-nutritionist-fitri.png";
import Nutritionist2 from "../../assets/img/img-nutritionist-rien.png";
import Nutritionist3 from "../../assets/img/img-nutritionist-tri.png";
import NutritionistCard, { CardType } from "@/components/Card/NutritionistCard";

const nutritionistData: CardType[] = [
  {
    img: Nutritionist1,
    name: "Fitri Khoriyah, SKM., MKM.",
    position: "-right-3 top-16",
    name_position: "bottom-11 right-4 text-xs",
    img_size: "w-[183px] h-52",
  },
  {
    img: Nutritionist2,
    name: "Ririn Akmal Sari, SST., MKM",
    position: "right-[350px] top-52",
    name_position: "bottom-12 right-8 text-xs",
    img_size: "w-[242px] h-[286px]",
  },
  {
    img: Nutritionist3,
    name: "Tri Rachmawati, S. Gz",
    position: "right-[75px] top-[330px]",
    name_position: "bottom-12 left-6 text-xs",
    img_size: "w-44 h-48",
  },
];

const ConsultationHero = () => (
  <div className={styles.ConsultationWrapper}>
    <div className="mx-[90px] ml-16 mr-20 xl-custom:mr-24 xl-custom:ml-24">
      <h1 className="text-5xl text-text font-bold w-[460px] mt-6 align-middle h-[160px] leading-normal">
        Konsultasi Gizi One-on-One
      </h1>
      <p className="text-text w-[460px] mt-6 mb-10">
        Raih kesehatan dan kebugaran optimal dengan panduan personal dari ahli
        gizi profesional
      </p>
      <div className="w-[682px] flex flex-col gap-y-8">
        <div className="bg-gradient-to-r from-[#fadebd] to-[#e3b381] px-6 py-4 rounded-lg flex justify-between items-center">
          <CTAButton className="px-9 py-4">Konsultasi Paket 1</CTAButton>
          2x Konsultasi intensive bersama ahli gizi professional
        </div>
        <div className="bg-gradient-to-r from-[#fadebd] to-[#e3b381] px-6 py-4 rounded-lg flex justify-between items-center">
          <CTAButton className="px-9 py-4">Konsultasi Paket 2</CTAButton>
          3x Konsultasi intensive bersama ahli gizi professional
        </div>
      </div>
    </div>
    <div className="relative w-[616px] h-[548px] right-6">
      <div className="relative z-10">
        {nutritionistData.map((nutritionist, index) => (
          <NutritionistCard
            key={index}
            img={nutritionist.img}
            name={nutritionist.name}
            name_position={nutritionist.name_position}
            position={nutritionist.position}
            img_size={nutritionist.img_size}
          />
        ))}
      </div>
      <Image
        alt=""
        src={HeroShapes}
        className="relative top-5 left-14 w-[90%]"
      />
      <button className="absolute bottom-[200px] right-[195px]">
        <Image alt="" src={PlayButton} />
      </button>
    </div>
  </div>
);

export default ConsultationHero;
