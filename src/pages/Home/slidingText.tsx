import { useEffect, useRef, useState } from "react";
import styles from "./sliding_text.module.css";
import { setInterval } from "timers";

const SlidingText = () => {
  const [text, setText] = useState("");

  const titles = [
    "Arahan Konsultasi Gizi yang Personal",
    "Diet Sehat Mu",
    "Perencanaan Menu Makan Mu",
    "Rutinitas Lama dengan Kebiasaan Baru",
  ];

  const maps = () => {
    titles.map((e, i) => setText(e));
  };

  const test = () => {
    setInterval(() => map(), 1000);
  };

  useEffect(() => {
    // test();
    // console.log(text);
  }, []);

  return (
    <div className={styles.slidingTextWrapper}>
      {titles.map((e, i) => (
        <div
          key={i}
          className={`text-5xl w-[540px] mt-6 align-middle h-[160px] leading-normal ${styles.slidingText}`}
        >
          {e}
        </div>
      ))}
    </div>
  );
};

export default SlidingText;
