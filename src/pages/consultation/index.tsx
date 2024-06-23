import Image from "next/image";
import Partneship from "../Home/partnership";
import ConsultationHero from "./hero";
import Circle from "../../assets/img/img-blur-circle.svg";
import ConsultationProcesses from "./processes";
import ConsultationDuration from "./duration";

const Consultation = () => (
  <>
    <ConsultationHero />
    <div className="relative">
      <Image
        src={Circle}
        alt=""
        className="absolute -left-20 -top-56 w-[643px] h-[643px] object-none object-left"
      />
      <Partneship />
      <ConsultationProcesses />
      <ConsultationDuration />
    </div>
  </>
);

export default Consultation;
