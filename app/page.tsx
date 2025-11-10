import Header from "./_components/header";
import Image from "next/image";
import SearchInput from "./_components/search-input";
import banner from "../public/banner.png";

const Home = () => {
  return (
    <div className="space-y-4 px-5">
      <Header />
      <div className="px-5">
      <SearchInput />
      <Image src={banner} alt="Agende Agora" sizes="100vw" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Home;