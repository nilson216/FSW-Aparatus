import Header from "./_components/header";
import Image from "next/image";
import SearchInput from "./_components/search-input";
import banner from "../public/banner.png";
import BookingItem from "./_components/booking-item";


const Home = () => {
  return (
    <main className="space-y-4 px-5">
      <Header />
      <div className="px-5 space-y-4">
      <SearchInput />
      <Image src={banner} alt="Agende Agora" sizes="100vw" className="w-full h-auto" />
      <h2 className="text-xs text-foreground font-semibold uppercase">
        Agendamentos
      </h2>
      <BookingItem 
        serviceName="Corte de cabelo"
        barbershopName="Barbearia do João"
        barbershopImageUrl="https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png"
        date={new Date()}
      />
      </div>
    </main>
  );
};

export default Home;