import { Card, CardContent } from "@/components/ui/card";
import { Gift } from "lucide-react";

export function GiftRegistrySection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 relative overflow-hidden">
      {/* Imagen decorativa fondo */}

      <div className="absolute inset-0 z-[-1] opacity-20">
        <img
          src="/florescolaboracion.png"
          alt="Flores en acuarela decorativas"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-8">
          Colaboración
        </h2>
        <Card className="bg-white/70 backdrop-blur-sm border-stone-200">
          <CardContent className="p-8">
            <Gift className="h-12 w-12 mx-auto text-stone-600 mb-6" />
            <p className="text-lg text-stone-700 mb-6">
              Gracias por acompañarnos en este momento tan especial. Si querés
              hacernos un regalo, lo que más deseamos es sumar a nuestra luna de
              miel. Podés hacerlo a través de este CBU.
            </p>
            <div className="bg-stone-100 rounded-lg p-6 mb-6">
              {/*               <p className="font-semibold text-stone-800">Banco: [Nombre del Banco]</p>
               */}{" "}
              <p className="text-stone-700">CBU: 000000XXXXXXXXXXXXX</p>
              <p className="text-stone-700">Alias: OMEGON.INFO</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
