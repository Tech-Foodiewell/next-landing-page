import Image from "next/image";
import DISTP from "../../assets/img/img-distp.png";
import Feelsbox from "../../assets/img/img-feelsbox.png";

const Ciki =
  "https://img.okezone.com/content/2021/07/14/620/2440705/citra-kirana-ungkap-suka-duka-pakai-hijab-KhmdM0y3Qb.jpg";

const Partneship = () => (
  <div className="py-[120px] w-[60%] mx-auto">
    <div>
      <h1 className="text-text text-4xl text-center font-bold">Partnership</h1>
      <div className="flex justify-evenly items-center mt-12">
        <Image className="w-1/4" alt="" src={DISTP} />
        <Image className="w-1/5 h-auto" alt="" src={Feelsbox} />
      </div>
    </div>
    <div className="px-12 relative mx-auto leading-10 mb-10">
      <div className="relative w-[678px] h-[408px] origin-right -bottom-[380px] left-4 -z-10 bg-[#E3D3FF] text-primary py-8 px-[87px] text-center rounded-[20px]"></div>
      <div className="absolute w-[678px] h-[408px] origin-right right-[23%] -z-10 rotate-[7.8deg] bg-[#D5F3FF] text-primary py-8 px-[87px] text-center rounded-[20px]"></div>
      <div className="absolute w-[678px] h-[408px] origin-right right-[23.3%] -z-10 rotate-[5deg] bg-[#F0F3FF] text-primary py-8 px-[87px] text-center rounded-[20px]"></div>
      <div className="absolute w-[678px] h-[408px] origin-right right-[24%] -z-10 rotate-[2.8deg] bg-[#E1FDF5] text-primary py-8 px-[87px] text-center rounded-[20px]"></div>
      <div className="bg-primary_surface relative w-[678px] h-[408px] text-primary py-8 px-[87px] text-center rounded-[20px]">
        <p className="font-bold text-[28px]">
          “Dari yang asalnya abai sama diri sendiri, tapi karena konsul di
          Foodiewell, jadi punya teman untuk janjian olahraga bareng, atur jam
          tidur, plus pola makan supaya lebih sehat”
        </p>
        <p className="mt-16">Desi Damayanti</p>
        <div className="absolute -ml-28 -mt-16 w-36 h-36 bg-white rounded-full flex justify-center items-center object-bottom">
          <Image
            loader={() => Ciki}
            src={Ciki}
            width={400}
            height={400}
            alt=""
            className="w-[124px] h-[124px] object-cover rounded-full object-center hover:object-top"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Partneship;
