import { faBriefcaseMedical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Nutritionist3 from "../../assets/img/img-nutritionist-tri.png";
import Circle from "../../assets/img/img-blur-circle.svg";
import CTAButton from "@/components/Button/CTA";
import { useState } from "react";

const NutritionistCard = () => (
  <div className="w-max hover:shadow-md rounded-lg">
    <div>
      <img
        className="w-72 h-80 object-cover rounded-t-lg"
        src="https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2022/09/22/982389143.jpg"
        alt=""
      />
    </div>
    <div className="px-4 py-5 border-2 border-t-0 rounded-b-lg">
      <p className="font-bold text-xl text-text">Tri Rachmawati, S. Gz </p>
      <p className="mt-5 align-middle">
        <FontAwesomeIcon
          icon={faBriefcaseMedical}
          className="text-2xl text-primary mr-4"
        />
        Dietisien
      </p>
    </div>
  </div>
);

const NutritionistList = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      {/* RENDER BLURRED CIRCLE */}
      <Image
        src={Circle}
        alt=""
        className="absolute left-0 -bottom-[520px] w-[300px] h-[532px] object-none object-right"
      />
      <div className="pt-8 px-24 mt-16 mb-11">
        <div>
          <p className="text-text text-4xl w-1/2 mx-auto text-center leading-snug font-bold">
            Pendampingmu dalam Menjalani Program Diet dan Nutrisi
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-12 mt-28">
            <NutritionistCard />
            <NutritionistCard />
            <NutritionistCard />
            <NutritionistCard />
            {expanded ? <NutritionistCard /> : null}
          </div>
          <div className="text-center">
            <CTAButton
              className="px-8 py-4 mt-24 hover:drop-shadow-md"
              isOutlined={true}
              onClick={() => setExpanded(!expanded)}
            >
              Lihat Lebih Banyak
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionistList;
