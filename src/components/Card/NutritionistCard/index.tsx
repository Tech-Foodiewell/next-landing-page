import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image, { StaticImageData } from "next/image";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons/faCircleCheck";

export type CardType = {
  name: string;
  img: StaticImageData;
  position: string;
  name_position: string;
  img_size?: string;
};

const NutritionistCard = ({
  name,
  img,
  position,
  name_position,
  img_size,
}: CardType) => (
  <div className={`${position} absolute`}>
    <Image src={img} alt={name} className={img_size} />
    <div
      className={`${name_position} p-[10px] text-sm w-min rounded-md bg-white text-text shadow-lg relative`}
    >
      <p className="font-bold mb-2 w-max">
        {name}
        <FontAwesomeIcon
          icon={faCircleCheck}
          className="ml-4 text-lg text-success"
        />
      </p>
      <p>Dietsien</p>
    </div>
  </div>
);

export default NutritionistCard;
