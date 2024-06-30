import Image from "next/image";
import DISTP from "../../../assets/img/img-distp.png";
import Feelsbox from "../../../assets/img/img-feelsbox.png";
import styles from "./styles.module.css";
import { useEffect, useRef, useState } from "react";

const Ciki =
  "https://img.okezone.com/content/2021/07/14/620/2440705/citra-kirana-ungkap-suka-duka-pakai-hijab-KhmdM0y3Qb.jpg";

const Partneship = () => {
  const cardsRef = useRef([]); // Array ref to store card elements
  const stackAreaRef = useRef(null); // Ref to the stack area element
  const [activeCardIndex, setActiveCardIndex] = useState(0); // State for active card index
  const [scrollDirection, setScrollDirection] = useState(""); // Initial state

  useEffect(() => {
    // Store the initial scroll position (optional)
    const initialScrollY = window.scrollY;
    // console.log(initialScrollY);

    const card = document.getElementById("card");
    const container = document.getElementById("partnership-container");

    const handleScroll = () => {
      const currentScrollY = window.scrollY; // Get the current scroll position

      card?.classList.add("border-2");
      card?.classList.add("border-red-500");
      if (currentScrollY > 300) {
        container?.classList.add("sticky");
        container?.classList.add("-top-56");
        // card.style.transform = `rotate(${currentScrollY / 50}deg)`;
        // card.style.transform = `translateX(${currentScrollY / 10}px)`;
        card.style.transform = `translate3d(${currentScrollY / 10}px, ${
          currentScrollY / 10
        }px, -500px)`;
      }

      console.log(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array to run only once

  return (
    // <div className={styles.body}>
    //   <div className={styles.center}>
    //     <div className={styles.top}>Scroll Down</div>
    //     <div id="stackArea" className={styles.stackArea}>
    //       <div className={styles.left}>
    //         <div className={styles.title}>Our Features</div>
    //         <div className={styles.subTitle}>
    //           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
    //           qui quis, facere, cupiditate, doloremque natus ex perspiciatis
    //           ratione hic corrupti adipisci ea doloribus!
    //           <br />
    //           <button>See More Details</button>
    //         </div>
    //       </div>
    //       <div className={styles.right}>
    //         <div className={styles.cards}>
    //           <div id="card" className={styles.card}>
    //             <div className={styles.sub}>Simplified</div>
    //             <div className={styles.content}>
    //               Complex tasks are now simple
    //             </div>
    //           </div>
    //           <div className={styles.card}>
    //             <div className={styles.sub}>Boost Productivity</div>
    //             <div className={styles.content}>Perform Tasks in less time</div>
    //           </div>
    //           <div className={styles.card}>
    //             <div className={styles.sub}>Facilitated learning</div>
    //             <div className={styles.content}>train anyone from anywhere</div>
    //           </div>
    //           <div className={styles.card}>
    //             <div className={styles.sub}>Support</div>
    //             <div className={styles.content}>Now its 24/7 support</div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className={styles.bottom}>Other Content...</div>
    //   </div>
    // </div>
    <div
      id="partnership-container"
      className="py-[120px] h-[1800px] w-[60%] mx-auto"
    >
      <div>
        <h1 className="text-text text-4xl text-center font-bold">
          Partnership
        </h1>
        <div className="flex justify-evenly items-center mt-12">
          <Image className="w-1/4" alt="" src={DISTP} />
          <Image className="w-1/5 h-auto" alt="" src={Feelsbox} />
        </div>
      </div>
      <div className="relative px-12 leading-10 mb-10 mt-56">
        <div
          id="card"
          className="absolute w-[765px] h-[356px] origin-right -top-14 right-[11.6%] -z-10 bg-[#E3D3FF] text-primary py-8 px-[87px] text-center rounded-[20px]"
        ></div>
        {/* <div
          id="card"
          className="absolute w-[765px] h-[356px] origin-right -top-[7%] right-[11.7%] -z-10 rotate-[4.8deg] bg-[#D5F3FF] text-primary py-8 px-[87px] text-center rounded-[20px]"
        ></div>
        <div
          id="card"
          className="absolute w-[765px] h-[356px] origin-right -top-[3%] right-[13%] -z-10 rotate-[4.3deg] bg-[#F0F3FF] text-primary py-8 px-[87px] text-center rounded-[20px]"
        ></div>
        <div
          id="card"
          className="absolute w-[765px] h-[356px] origin-right right-[14.7%] top-1 -z-10 rotate-[3.5deg] bg-[#E1FDF5] text-primary py-8 px-[87px] text-center rounded-[20px]"
        ></div>
        <div
          id="card"
          className="bg-primary_surface relative w-[765px] text-primary py-8 px-[87px] text-center rounded-[20px]"
        >
          <p className="font-bold text-[28px]">
            “Dari yang asalnya abai sama diri sendiri, tapi karena konsul di
            Foodiewell, jadi punya teman untuk janjian olahraga bareng, atur jam
            tidur, plus pola makan supaya lebih sehat”
          </p>
          <p className="mt-16 text-xl">Desi Damayanti</p>
          <div className="absolute -ml-28 -mt-20 w-36 h-36 bg-white rounded-full flex justify-center items-center object-bottom">
            <Image
              loader={() => Ciki}
              src={Ciki}
              width={400}
              height={400}
              alt=""
              className="w-[124px] h-[124px] object-cover rounded-full object-center"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Partneship;
