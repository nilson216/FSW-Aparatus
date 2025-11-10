import { Barbershop } from "@/app/generated/prisma/client";
import Image from "next/image";
import Link from "next/link";

interface BarbershopItemProps {
  barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  return (
    <Link href={`/barbershops/${barbershop.id}`}>
      <div className="relative min-h-[200px] min-w-[290px] rounded-xl">
        <div className="absolute top-0 left-0 z-10 h-full w-full rounded-xl bg-gradient-to-t from-black/75 to-transparent"></div>
        <Image
          src={barbershop.imageUrl}
          alt={barbershop.name}
          fill
          className="rounded-xl object-cover"
        />
        <div className="absolute right-0 bottom-0 left-0 z-20 p-4">
          <h3 className="text-background text-lg font-bold">
            {barbershop.name}
          </h3>
          <p className="text-background text-xs">{barbershop.address}</p>
        </div>
      </div>
    </Link>
  );
};

export default BarbershopItem;
