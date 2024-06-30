import Image from "next/image";
import FoodiewellLogo from "../../../assets/img/logo-foodiewell.svg";
import FoodiewellIcon from "../../../assets/img/logo-foodiewell-notext.svg";
import Circle from "../../../assets/img/img-blur-circle.svg";
import InstagramIcon from "../../../assets/img/icon-instagram.svg";
import LinkedinIcon from "../../../assets/img/icon-linkedin.svg";
import SpotifyIcon from "../../../assets/img/icon-spotify.svg";
import YoutubeIcon from "../../../assets/img/icon-youtube.svg";
import TiktokIcon from "../../../assets/img/icon-tiktok.svg";
import WhatsAppIcon from "../../../assets/img/icon-whatsapp.svg";
import CTAButton from "../../Button/CTA";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  const renderFooterText = () => {
    let text = "";

    switch (router.pathname) {
      case "/":
        text = "Siap tingkatkan kualitas hidupmu dengan Foodiewell?";
        break;
      default:
        text = "Ada Pertanyaan? Hubungi Kami";
    }

    return text;
  };

  return (
    <>
      <div className="mb-20 relative w-auto">
        {/* render blurred circle */}
        <Image
          src={Circle}
          alt=""
          className="absolute -right-0 -top-28 w-[300px] h-[532px] object-none object-left"
        />
        <div className="mt-14 mb-10 w-2/3 mx-auto h-[1px] opacity-30 bg-text"></div>
        <div className="flex flex-col items-center">
          <Image src={FoodiewellIcon} alt="" className="w-10 mb-8" />
          <p className="text-5xl text-center text-text font-bold w-[785px] leading-normal">
            {renderFooterText()}
          </p>
        </div>
        <div className="w-auto text-center mt-12">
          <CTAButton isOutlined={false}>
            <p className="flex">
              <Image src={WhatsAppIcon} alt="" className="mr-1" /> WhatsApp Kami
            </p>
          </CTAButton>
        </div>
      </div>
      <div className="bg-[#f5f5f5] py-8 px-12 gap-y-12 flex flex-col text-text">
        <div className="flex justify-between">
          <div className="flex items-center">
            <Image src={FoodiewellLogo} alt="logo" className="w-28" />
            <p className="ml-6">Hadirkan momen sehat mu bersama Foodiewell</p>
          </div>
          <div className="flex gap-x-2">
            <Image src={YoutubeIcon} alt="" />
            <Image src={LinkedinIcon} alt="" />
            <Image src={InstagramIcon} alt="" />
            <Image src={TiktokIcon} alt="" />
            <Image src={SpotifyIcon} alt="" />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-x-5 font-bold text-sm">
            <a href="#" className="px-4 py-2">
              Konsultasi Gizi 1-1
            </a>
            <div className="flex flex-col gap-y-3">
              <a href="#" className="px-4 py-2">
                Nutrimind
              </a>
              <a href="#" className="px-4 py-2">
                Gemari untuk Institusi
              </a>
            </div>
            <a href="#" className="px-4 py-2">
              Ahli Gizi
            </a>
            <div className="flex flex-col gap-y-3">
              <a href="#" className="px-4 py-2">
                Tentang Kami
              </a>
              <a href="#" className="px-4 py-2">
                Artikel
              </a>
              <a href="#" className="px-4 py-2">
                FAQ
              </a>
            </div>
          </div>
          <div className="flex justify-between gap-x-3 text-sm underline">
            <a href="#">Tanya CS</a>
            <a href="#">Partnership</a>
          </div>
        </div>
        <div className="h-14 flex items-end justify-center">
          <p>
            © Copyright <strong>Foodiewell 2024.</strong> All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
