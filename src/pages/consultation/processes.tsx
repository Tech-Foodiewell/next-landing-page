import Image from "next/image";
import Process1 from "../../assets/img/img-process-1.svg";
import Process2 from "../../assets/img/img-process-2.svg";
import Process3 from "../../assets/img/img-process-3.svg";

import CTAButton from "@/components/Button/CTA";

type ProcessType = {
  image: string;
  step: string;
  title: string;
  desc: string;
};

const RenderProcess = ({ image, step, title, desc }: ProcessType) => (
  <div className="flex justify-between items-center">
    <Image src={image} alt="" />
    <div className="w-[450px] h-[328px]">
      <div className="flex flex-col gap-y-6">
        <span className="w-min text-sm text-nowrap py-[10px] px-6 bg-primary_surface text-primary rounded-full">
          {step}
        </span>
        <p className="text-text text-4xl font-bold head leading-tight w-[457px]">
          {title}
        </p>
        <p className="text-text">{desc}</p>
      </div>
      <div className="flex mt-12">
        <CTAButton className="py-4 px-8 mr-6">Konsultasi Paket 1</CTAButton>
        <CTAButton className="py-4 px-8">Konsultasi Paket 2</CTAButton>
      </div>
    </div>
  </div>
);

const ConsultationProcesses = () => (
  <div className="bg-surface px-44 py-16">
    <p className="text-text text-4xl font-bold text-center mb-[100px]">
      Seperti Apa Proses Konsultasi Gizi Kami
    </p>
    <div className="flex flex-col gap-y-[105px]">
      <RenderProcess
        image={Process1}
        step="Langkah 01"
        title="Cerita Keluhan dan Target yang Ingin Dicapai"
        desc="Kamu bisa cerita keluhan dan target yang ingin dicapai bersama
              ahli gizi berpengalaman"
      />
      <RenderProcess
        image={Process2}
        step="Langkah 02"
        title="Mendapat Arahan untuk Perencanaan Diet Makanan Sehat"
        desc="Ahli gizi akan menyusun program gizi personal yang sesuai dengan
              kebutuhan dan tujuan Anda"
      />
      <RenderProcess
        image={Process3}
        step="Langkah 03"
        title="Monitoring Hasil Konsultasi Gizi"
        desc="Ahli gizi akan memantau kemajuan Anda secara berkala"
      />
    </div>
  </div>
);

export default ConsultationProcesses;
