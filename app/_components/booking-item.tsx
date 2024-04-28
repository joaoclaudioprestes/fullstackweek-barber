import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const BookingItem = () => {
  return (
    <Card>
      <CardContent className="p-5 flex items-center justify-between py-0">
        <div className="flex flex-col gap-2 py-5">
          <Badge className="bg-[#221C3D] text-primary hover:bg-[#221C3D] w-fit">
            Confirmado
          </Badge>

          <h2 className="font-bold">Corte de Cabelo</h2>

          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://utfs.io/f/5832df58-cfd7-4b3f-b102-42b7e150ced2-16r.png" />

              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <h3 className="text-sm">Vintage Bar</h3>
          </div>
        </div>

        <div className="p-3 flex flex-col items-center justify-center border-l border-secondary py-5">
          <p>Fevereiro</p>
          <p className="text-2xl">06</p>
          <p className="text-sm">09:45</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingItem;
