"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BarbershopItemProps {
  barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  const router = useRouter();

  const handleBookingClick = () => {
    router.push(`/barbershops/${barbershop.id}`);
  };

  return (
    <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
      <CardContent className="p-1 py-1">
        <div className="px-1 relative h-[159px] w-full">
          <div className="absolute top-3 left-3 z-50">
            <Badge
              variant="secondary"
              className="flex items-center gap-1 top-3 left-3"
            >
              <StarIcon size={12} className="fill-primary text-primary" />
              <span>5,0</span>
            </Badge>
          </div>
          <Image
            src={barbershop.imageUrl}
            alt={barbershop.name}
            height={0}
            width={0}
            sizes="100vw"
            fill
            className="h-[159px] w-full rounded-2xl"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="px-2 pb-3">
          <h2 className="mt-2 font-bold overflow-hidden text-ellipsis text-nowrap">
            {barbershop.name}
          </h2>
          <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap mt-2">
            {barbershop.address}
          </p>
          <Button variant="secondary" className="w-full mt-3" onClick={handleBookingClick}>
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarbershopItem;
