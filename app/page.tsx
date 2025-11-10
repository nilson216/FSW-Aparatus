import Header from "./_components/header";
import Image from "next/image";
import SearchInput from "./_components/search-input";
import banner from "../public/banner.png";
import BookingItem from "./_components/booking-item";
import { prisma } from "@/lib/prisma";
import BarbershopItem from "./_components/barbershop-item";

const Home = async () => {
  const recommendedBarbershops = await prisma.barbershop.findMany({
    orderBy: {
      name: "asc",

    }
  });
  const popularBarbershops = await prisma.barbershop.findMany({
    orderBy: {
      name: "desc",

    }
  });
  return (
    <main>
      <Header />
      <div className="space-y-4 px-5">
        <SearchInput />
        <Image
          src={banner}
          alt="Agende Agora"
          sizes="100vw"
          className="h-auto w-full"
        />
        <h2 className="text-foreground text-xs font-semibold uppercase">
          Recomendados
        </h2>
        <BookingItem
          serviceName="Corte de cabelo"
          barbershopName="Barbearia do João"
          barbershopImageUrl="https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png"
          date={new Date()}
        />
        <h2 className="text-foreground text-xs font-semibold uppercase">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {recommendedBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
        <h2 className="text-foreground text-xs font-semibold uppercase">
          Populares
        </h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
