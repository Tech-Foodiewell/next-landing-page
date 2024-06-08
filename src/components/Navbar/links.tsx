import Image from "next/image";
import Chat from "../../assets/img/icon-chat.svg";
import Person from "../../assets/img/icon.person-star.svg";
import Message from "../../assets/img/icon-message.svg";
import Building from "../../assets/img/icon-building.svg";
import Shapes from "../../assets/img/icon-shapes.svg";
import Graphic from "../../assets/img/icon-graphic.svg";

const IndividualMenu = (props) => {
  const { logo, title, icon, iconText, desc } = props;
  return (
    <a
      className="bg-white rounded-md border px-5 py-4 flex items-start w-[330px] gap-x-4 hover:bg-surface hover:shadow-2 transition-colors"
      href=""
    >
      <Image src={logo} alt="" />
      <div className="">
        <p className="text-text font-bold">{title}</p>
        <p className="text-primary text-sm my-[6px] flex">
          <Image src={icon} alt="" className="mr-[6px]" />
          {iconText}
        </p>
        <p className="text-sm">{desc}</p>
      </div>
    </a>
  );
};

export const nabvarLinks = [
  {
    label: "Untuk Individu",
    url: "",
    children: {
      type: "rich",
      menus: (
        <IndividualMenu
          logo={Chat}
          title="Konsultasi Gizi One-on-One"
          icon={Person}
          iconText="Individual"
          desc="Raih Pola Makan Sehat dengan Konsultasi Gizi Personal"
        />
      ),
    },
  },
  {
    label: "Untuk Institusi",
    children: {
      type: "rich",
      menus: (
        <div className="flex gap-x-4">
          <IndividualMenu
            logo={Graphic}
            title="Nutrimind"
            icon={Building}
            iconText="Institusi"
            desc="Dapatkan Solusi Tepat untuk Kesehatan Mental dan Fisik Anda"
          />
          <IndividualMenu
            logo={Message}
            title="Gemari (Gerakan Mamah Aktif Rencakan Gizi)"
            icon={Shapes}
            iconText="Individu & Institusi"
            desc="Peran Ibu dalam Menciptakan Keluarga Sehat"
          />
        </div>
      ),
    },
    url: "",
  },
  { label: "Ahli Gizi", url: "" },
  {
    label: "Tentang",
    children: {
      type: "text",
      menus: [
        { label: "Tentang Foodiewell", link: "/" },
        { label: "Artikel", link: "/" },
        { label: "FAQ", link: "/" },
      ],
    },
  },
];
