import { Span } from "next/dist/trace";
import Image from "next/image";
import Fire from "../../assets/img/icon-fire.svg";
import Check from "../../assets/img/icon-badge-curly-check.svg";
import CardBG from "../../assets/img/img-card-bg.svg";

import CTAButton from "@/components/Button/CTA";
import styles from "./styles.module.css";

const List = ({ text }: { text: string }) => (
  <li className="flex items-center">
    <Image alt="" src={Check} className="mr-4" />
    {text}
  </li>
);

const RenderDuration = ({ isRecommended }: { isRecommended: boolean }) => {
  return (
    <>
      <div
        className={`${
          !isRecommended ? "pt-8 border-2" : `border-[3px] ${styles.Card}`
        } w-[490px] h-min border-primary_green shadow-md px-8 pb-8 rounded-lg`}
      >
        {isRecommended && (
          <span className="w-[484px] -ml-8 bg-[#EBFAF6] flex items-center justify-center py-4 rounded-ss-md rounded-se-md text-xl font-medium mb-8">
            Paling Banyak Dipilih <Image src={Fire} alt="" className="ml-5" />
          </span>
        )}
        <div className="text-center">
          {/* render number x circle */}
          <div className="bg-primary_surface w-[77px] h-[77px] rounded-full content-center mx-auto">
            <div className="text-center text-4xl text-primary font-bold">
              {isRecommended ? "3x" : "2x"}
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <span className="text-text text-xl">Konsultasi Gizi</span>
          <div className="flex w-4/5 justify-evenly items-center mx-auto mt-6">
            <span className="text-text text-[28px] font-bold">
              Rp {isRecommended ? "179.000" : "129.000"}
            </span>
            <span className="text-xl text-neutral-400 line-through">
              Rp {isRecommended ? "300.000" : "260.000"}
            </span>
          </div>
        </div>
        {/* <div> */}
        <div className="text-text my-10">
          <p className="mb-6">Kamu Mendapatkan:</p>
          <ul className="flex flex-col gap-y-6 list-image-">
            <List
              text="konsultasi dengan ahli gizi
                profesional"
            />
            <List
              text={
                isRecommended
                  ? "2x konsultasi dengan ahli gizi profesional"
                  : "3x konsultasi dengan ahli gizi profesional"
              }
            />
            <List text="Durasi konsultasi selama 30 menit tiap sesinya" />
            <List text="Feedback harian dari ahli gizi" />
            <List text="Menu diet selama satu bulan" />
            <List text="Progress report certificate" />
          </ul>
        </div>
        <CTAButton className="w-full py-4">
          Konsultasi Paket {isRecommended ? "2" : "1"}
        </CTAButton>
        {/* </div> */}
      </div>
    </>
  );
};

const ConsultationDuration = () => (
  <div className="pt-[200px] pb-40">
    <p className="text-text text-4xl font-bold head leading-tight text-center mb-24">
      Pilih Durasi Program
    </p>
    <div className="flex gap-x-12 justify-center align-top">
      <RenderDuration isRecommended={false} />
      <RenderDuration isRecommended />
    </div>
  </div>
);

export default ConsultationDuration;
