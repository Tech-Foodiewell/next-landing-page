import Footer from "@/components/Footer";
import PageHero from "./hero";
import NutritionistList from "./nutritionist";
import Programs from "./programs";
import Partneship from "./partnership";

const Homepage = () => {
  return (
    <div>
      <PageHero />
      <Partneship />
      <Programs />
      <NutritionistList />
      <Footer />
    </div>
  );
};

export default Homepage;
