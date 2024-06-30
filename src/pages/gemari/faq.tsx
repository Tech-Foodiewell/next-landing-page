import Image from "next/image";
import { useState } from "react";
import Check from "../../assets/img/icon-badge-curly-check.svg";
import Circle from "../../assets/img/img-blur-circle.svg";

const desc = [
  <span key={1}>
    GEMARI adalah sebuah program unggulan Foodiewell dengan fokus untuk
    membangun peran ibu dalam merencanakan gizi dan kesehatan bayi dan anak.
    <br />
    <br />
    Program ini dilakukan dengan{" "}
    <strong>peer mentoring dan konsultasi gizi dalam kelompok kecil.</strong>
  </span>,
  <span key={2}>
    Mengingat pentingnya peran gizi dalam mencegah stunting, Foodiewell
    menginisiasi program GEMARI (Gerakan Mama Aktif Rencanakan Gizi) untuk
    memberdayakan para ibu dalam mewujudkan tumbuh kembang anak yang optimal.
    <br />
    <br />
    Program GEMARI berfokus pada{" "}
    <strong>
      peningkatan pengetahuan dan keterampilan ibu dalam pengolahan makanan
      bergizi bagi ibu hamil dan anak.
    </strong>
  </span>,
  <div key={3} className="text-text leading-10 px-2 text-left">
    <div className="mb-10 flex items-start">
      <Image src={Check} alt="" className="w-10 h-10 mr-7" />
      <p>
        Mencegah dan mengatasi risiko terjadinya <strong>stunting</strong> pada
        anak
      </p>
    </div>
    <div className="mb-10 flex items-start">
      <Image src={Check} alt="" className="w-10 h-10 mr-7" />
      <p>
        Membentuk pribadi yang terampil dalam{" "}
        <strong>mengelola gizi ibu dan anak</strong> dalam usaha membangun pola
        hidup yang sehat
      </p>
    </div>
    <div className="flex items-start">
      <Image src={Check} alt="" className="w-10 h-10 mr-7" />
      <p>
        <strong>Meningkatkan optimisme kesadaran</strong> para ibu terhadap
        generasi anak yang unggul dan sehat
      </p>
    </div>
  </div>,
];

const questionsList = ["Apa itu Gemari", "Kenapa Gemari", "Tujuan Gemari"];

const GemariFAQ = () => {
  const [selectedList, setSelectedList] = useState(1);

  return (
    <>
      <Image src={Circle} alt="" className="absolute top-[560px] -left-56" />
      <div className="w-[81%] mx-auto pb-32 pt-[134px]">
        <h1 className="text-text text-center font-bold text-4xl">
          Membangun Generasi Penerus yang Sehat dan Cerdas
        </h1>
        <div className="flex justify-between items-start mt-[70px]">
          <div className="">
            {questionsList.map((val, i) => (
              <div
                onClick={() => setSelectedList(i)}
                key={i}
                className={`${
                  selectedList == i ? "bg-surface shadow-md" : null
                } text-text font-bold cursor-pointer text-[28px] rounded-md px-5 py-4 border w-[511px] border-primary_green mb-8`}
              >
                {val}
              </div>
            ))}
          </div>
          <div className="text-text text-justify rounded-md px-8 py-8 border w-[680px] border-primary_green text-[28px] leading-9">
            {desc[selectedList]}
          </div>
        </div>
      </div>
    </>
  );
};

export default GemariFAQ;
