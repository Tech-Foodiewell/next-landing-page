import Image from "next/image";
import Check from "../../assets/img/icon-badge-curly-check.svg";
import Affordable from "../../assets/img/icon-price-affordable.svg";
import Foods from "../../assets/img/icon-foods.svg";
import Parenting from "../../assets/img/icon-parenting.svg";
import Easy from "../../assets/img/icon-easy.svg";

import CTAButton from "@/components/Button/CTA";
import { title } from "process";
import React from "react";

const GemariBenefits = () => {
  type CardBenefitsType = {
    image: string;
    title: string;
    desc: React.ReactNode;
  };

  const checkedBenefits = [
    "Private peer mentoring bersama ahli gizi",
    "Mentoring “Human Life Cycle”",
    "Private peer konsultasi gizi bersama ahli gizi",
    "Support Group GEMARI (Lifetime Full Access)",
  ];

  const cardBenefits: CardBenefitsType[] = [
    {
      image: Affordable,
      title: "Harga Terjangkau",
      desc: (
        <span>
          Program GEMARI menawarkan harga yang terjangkau, yaitu Rp 500.000 per
          bulan per anak (minimal 100 anak)
          <br />
          <br />
          Harga ini sudah termasuk biaya pengantaran makanan untuk wilayah
          Depok.
        </span>
      ),
    },
    {
      image: Foods,
      title: "Makanan Bergizi Seimbang dan Praktis",
      desc: "Makanan yang diberikan dalam program GEMARI telah diolah secara matang, sehingga mudah dikonsumsi dan praktis untuk ibu hamil dan anak yang sibuk.",
    },
    {
      image: Parenting,
      title: "Gratis Konseling dan Parenting",
      desc: "Ibu hamil dan anak yang mengikuti program GEMARI akan mendapatkan konseling gizi dan parenting anak secara berkala dari ahli gizi. Konseling ini akan membantu ibu hamil dan anak untuk memahami pentingnya gizi bagi pertumbuhan dan perkembangan anak.",
    },
    {
      image: Easy,
      title: "Kemudahan Akses Program",
      desc: "Program GEMARI dapat diakses dengan mudah melalui situs web Foodiewell, sehingga ibu hamil dan anak dapat segera mendapatkan makanan yang dibutuhkan.",
    },
  ];

  const RenderTopBenefits = () => {
    return (
      <div className="border-b-2 border-b-primary flex py-16 px-14 justify-between">
        {checkedBenefits.map((val, i) => (
          <>
            <div className="text-xl font-light flex">
              <Image src={Check} alt="" className="size-8 mr-4" />
              <p className={`${i == 3 ? "w-[235px]" : "w-[220px]"}`}>{val}</p>
            </div>
            {i == 3 ? null : <hr className="w-0.5 h-12 bg-primary" />}
          </>
        ))}
      </div>
    );
  };

  const RenderCardBenefits = ({ image, title, desc }: CardBenefitsType) => (
    <div className="rounded-lg p-6 flex items-start gap-x-8 bg-white mb-8">
      <Image src={image} alt="" className="size-[70px]" />
      <div className="text-text">
        <p className="font-bold text-[28px] mb-4">{title}</p>
        <p className="text-xl text-justify">{desc}</p>
      </div>
    </div>
  );

  return (
    <div className="bg-primary_surface">
      <RenderTopBenefits />
      <div className="py-28 pl-[90px] pr-[78px] flex justify-between">
        <div className="text-text w-[550px] h-96 sticky top-56">
          <p className="text-4xl font-bold leading-snug">
            Apa yang akan Anda dapatkan dengan berlangganan program dari GEMARI
          </p>
          <p className="text-xl mt-8 mb-[70px]">
            Berlangganan program GEMARI adalah investasi terbaik untuk masa
            depan Anda
          </p>
          <CTAButton className="py-4 px-[40px]">Daftar Sekarang!</CTAButton>
        </div>
        <div className="w-[663px]">
          {cardBenefits.map((val, i) => (
            <RenderCardBenefits
              key={i}
              image={val.image}
              title={val.title}
              desc={val.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GemariBenefits;
