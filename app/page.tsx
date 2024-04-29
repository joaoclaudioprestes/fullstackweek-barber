import { format } from "date-fns";
import Header from "./_components/header";
import { ptBR } from "date-fns/locale";
import Search from "./(home)/_components/search";
import BookingItem from "./_components/booking-item";
import BarbershopItem from "./(home)/_components/barbershop-item";
import { db } from "./_lib/prisma";

export default async function Home() {
  // chamar o prisma e pegar os dados
  const barbershops = await db.barbershop.findMany({});
  return (
    <div>
      <Header />

      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Miguel</h2>
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE',' dd ' de ' MMMM'", {
            locale: ptBR,
          })}
        </p>
      </div>

      <div className="px-5 mt-6">
        <Search />
      </div>

      <div className="px-5 mt-6">
        <h2 className="text-xs uppercase mb-3 text-gray-400">Agendamentos</h2>
        <BookingItem />
      </div>

      <div className="px-5 mt-6">
        <h2 className="text-xs uppercase mb-3 text-gray-400">Recomendados</h2>
        <div className="flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  );
}
