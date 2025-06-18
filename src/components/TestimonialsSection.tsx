import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const TestimonialsSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-brand-fondo">
      <div className="container px-4">
        {/* TÍTULO */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="max-w-6xl  text-left font-poppins text-gray-900 text-2xl sm:text-2xl md:text-4xl lg:text-5xl leading-tight font-semibold">
            <span className="font-normal">MI NOMBRE ES</span>
            <span className="font-meow-script text-brand-fucsia text-5xl sm:text-5xl md:text-6xl lg:text-7xl ">
              garantía de calidad,
            </span>
            <span className="font-bold">COMPROMISO Y TRANSFORMACIÓN.</span>
            <span className="font-normal">
              QUIENES CONFÍAN EN MÍ, BUSCAN RESULTADOS REALES.
            </span>
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 ">
          {[1, 2, 3].map((item) => (
            <Card
              key={item}
              className="p-6 lg:p-8 border-2 border-gray-800 rounded-3xl shadow-none bg-brand-fondo"
            >
              <CardContent className="p-0">
                <h3 className="font-poppins font-bold text-gray-900 mb-4 text-lg sm:text-xl lg:text-2xl leading-tight">
                  Rosana Hadad Salomón: "La transformación digital es una
                  obligación"
                </h3>
                <p className="text-gray-900 font-montserrat mb-6 text-normal sm:text-lg leading-relaxed">
                  This space is for an excerpt or preview of your main article.
                  You can opt to simply add the first paragraph directly, or
                  create a summary or teaser for it.
                </p>
                <Button
                  variant="outline"
                  className="border-2 border-brand-amarillo text-gray-900 hover:bg-brand-amarillo hover:text-gray-900 font-bold px-6 py-2 rounded-lg bg-transparent text-sm sm:text-base uppercase tracking-wide"
                >
                  LEER MÁS
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
