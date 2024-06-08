import Image from "next/image";
import OneonOne from "../../assets/img/img-program-1on1.png";
import Nutrimind from "../../assets/img/img-program-nutrimind.png";
import Gemari from "../../assets/img/img-program-gemari.png";

import Badge from "../../assets/img/icon-badge-check.svg";

import Person from "../../assets/img/icon.person-star.svg";
import Shapes from "../../assets/img/icon-shapes-green.svg";

import Building from "../../assets/img/icon-building.svg";
import CTAButton from "@/components/Button/CTA";
import Button from "@/components/Button";

const Programs = () => {
  const programsMap = [
    {
      category: "Untuk Individu",
      categogyIcon: Person,
      title: "Konsultasi Gizi One-on-One",
      benefits: [
        "Konsultasi Diet Sehat",
        "Menu Diet Sehat Sesuai Kebutuhan",
        "Program dengan Komunitas",
        "Feedback Diet dengan Ahli Gizi",
      ],
      buttonText: "Daftar Konsultasi",
      image: OneonOne,
    },
    {
      category: "Untuk Institusi",
      categogyIcon: Building,
      title: "Nutrimind",
      benefits: [
        "Gratis Konsultasi",
        "Gratis Biaya antar Makan",
        "Management Report",
        "Gratis Voucher Gym",
      ],
      buttonText: "Atur Jadwal Nutrimind",
      image: Nutrimind,
    },
  ];

  const benefits = [
    "Gratis Konsultasi",
    "Gratis Biaya antar Makan",
    "Management Report",
    "Gratis Voucher Gym",
  ];

  const RenderProgram = ({ programProps }) => {
    return programProps ? (
      <div className="flex justify-between bg-surface rounded-[20px] h-[500px] shadow-md">
        <div className="px-[70px] py-10 w-7/12 flex flex-col justify-between">
          <div>
            <p className="text-primary text-sm my-[6px] flex font-bold mb-5">
              <Image
                src={programProps.categogyIcon}
                alt=""
                className="mr-[6px]"
              />
              {programProps.category}
            </p>
            <h1 className="text-5xl w-2/3 text-primary_green leading-normal font-bold mb-8">
              {programProps.title}
            </h1>
            <div className="flex flex-wrap w-[90%]">
              {programProps.benefits.map((val, i) => (
                <div key={i} className="flex items-center mr-4 mb-4">
                  <Image alt="" src={Badge} className="mr-5" />
                  <p className="text-primary_green font-bold text-base">
                    {val}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-x-8">
            <CTAButton className="px-10 py-4 w-52">
              {programProps.buttonText}
            </CTAButton>
            <CTAButton
              isOutlined
              className="bg-surface px-10 py-4 border-[1.3px] font-normal w-52"
            >
              Pelajari lebih lanjut
            </CTAButton>
          </div>
        </div>
        <div className="rounded-lg">
          <Image
            alt=""
            src={programProps.image}
            className="w-[684px] h-[500px] object-fill"
          />
        </div>
      </div>
    ) : (
      <div className="flex justify-between bg-primary_surface rounded-[20px] h-[500px] shadow-md">
        <div className="rounded-lg">
          <Image
            alt=""
            src={Gemari}
            className="w-[684px] h-[500px] object-fill"
          />
        </div>
        <div className="px-[70px] py-10 w-6/12 flex flex-col justify-between">
          <div>
            <p className="text-primary_green text-sm my-[6px] flex font-bold mb-5">
              <Image src={Shapes} alt="" className="mr-[6px]" />
              Untuk Individu dan Institusi
            </p>
            <h1 className="text-5xl text-primary_green leading-normal font-bold mb-8">
              Gemari (Gerakan Mamah Aktif Rencanakan Gizi)
            </h1>
            <div className="flex flex-wrap w-[90%]">
              {benefits.map((val, i) => (
                <div key={i} className="flex items-center mr-4 mb-4">
                  <Image alt="" src={Badge} className="mr-5" />
                  <p className="text-primary_green font-bold text-base">
                    {val}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-x-8">
            <Button className="py-4 w-52">Atur Jadwal Gemari</Button>
            <button
              // isOutlined
              className="bg-primary_surface text-primary border border-primary w-52 py-4 rounded-md"
            >
              Pelajari lebih lanjut
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="px-12 py-8">
      <p className="text-text text-4xl mx-auto text-center leading-snug font-bold mb-20">
        Temukan Solusi yang Paling Tepat untuk Anda
      </p>
      <div className="flex flex-col gap-y-12">
        <RenderProgram programProps={programsMap[0]} />
        <RenderProgram programProps={false} />
        <RenderProgram programProps={programsMap[1]} />
      </div>
    </div>
  );
};

export default Programs;
