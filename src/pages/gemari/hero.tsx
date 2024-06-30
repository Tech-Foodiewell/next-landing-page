import Image from "next/image";
import styles from "./styles.module.css";
import IbuAnak from "../../assets/img/img-ibu-anak.png";
import PlayButton from "../../assets/img/icon-play.svg";
import CTAButton from "@/components/Button/CTA";

const GemariHero = () => (
  <>
    {/* <div className={`${styles.GemariNavbarBG} h-[140px] w-auto`}></div> */}
    <div className={`${styles.GemariHeroWrapper} pl-[90px] pr-11`}>
      <div className="mr-52 w-[600px] self-start -mt-12">
        <span className="text-text font-bold text-5xl leading-normal tracking-tight">
          Gerakan Mamah Aktif Rencanakan Gizi
        </span>
        <br />
        <p className="text-text text-wrap w-[605px] text-xl mt-6 mb-[75px]">
          Tingkatkan kesadaran dan pengetahuan ibu tentang pentingnya
          perencanaan gizi dan kesehatan yang baik bagi diri sendiri, bayi dan
          anak
        </p>
        <CTAButton className="px-[40px] py-4">Daftar Sekarang!</CTAButton>
      </div>
      {/* <div className={`${styles.IbuAnakWrapper} relative top-[180px]`}>
      <Image src={IbuAnak} alt="" className="w-[429px] h-[568px] -mt-28" />
      <button>
        <Image src={PlayButton} alt="" className="relative bottom-80 left-56" />
      </button>
    </div> */}
      <div className={`${styles.IbuAnakWrapper} flex justify-center`}>
        <Image src={IbuAnak} alt="" className="w-[429px] -mt-28" />
        <button>
          <Image
            src={PlayButton}
            alt=""
            className="relative bottom-6 right-52"
          />
        </button>
      </div>
    </div>
  </>
);

export default GemariHero;
