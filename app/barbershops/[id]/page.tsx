import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";

interface BarbershopDetailsPageProps {
  params: any;
}

const BarbershopDetailsPage = async ({
  params,
}: BarbershopDetailsPageProps) => {
  if (!params.id) {
    //TODO: Redirect to home page
    return null;
  }

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!barbershop) {
    //TODO: Redirect to home page
    return null;
  }

  return (
    <div>
      <div className="h-[250px] w-full relative">
        <Button
          size="icon"
          variant="outline"
          className="z-50 absolute top-4 right-4"
        >
          <ChevronLeftIcon />
        </Button>
        <Button
          size="icon"
          variant="outline"
          className="z-50 absolute top-4 right-4"
        >
          <MenuIcon />
        </Button>
        <Image
          src={barbershop.imageUrl}
          layout="fill"
          objectFit="cover"
          alt={barbershop.name}
          className="opacity-75"
        />
      
      </div>

      <div className="px-5 py-3">
        <h1 className="text-xl font-bold">{barbershop.name}</h1>

        <div className="flex items-center gap-1">
          <MapPinIcon className="text-primary" size={18} />
          <p>{barbershop.address}</p>
        </div>

        <div className="flex items-center gap-1">
          <StarIcon className="text-primary" size={18} />
          <p>5,0 (899 avaliações)</p>
        </div>
      </div>

      

    </div>
  );
};

export default BarbershopDetailsPage;
