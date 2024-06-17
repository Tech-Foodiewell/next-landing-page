import styles from "./sliding_text.module.css";

const SlidingText = () => {
  const titles = [
    "Arahan Konsultasi Gizi yang Personal",
    "Diet Sehat Mu",
    "Perencanaan Menu Makan Mu",
    "Rutinitas Lama dengan Kebiasaan Baru",
    "Arahan Konsultasi Gizi yang Personal",
  ];

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
