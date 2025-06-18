import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const TestimonialsSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-brand-fondo">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-poppins font-bold text-gray-900 leading-tight max-w-6xl mx-auto">
            MI NOMBRE ES <span className="font-handelson text-brand-fucsia italic">garantía de calidad</span>, COMPROMISO Y TRANSFORMACIÓN. QUIENES CONFÍAN EN MÍ, BUSCAN RESULTADOS REALES.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {[1, 2, 3].map(item => (
            <Card key={item} className="p-6 lg:p-8 border-2 border-gray-800 rounded-3xl bg-white shadow-none">
              <CardContent className="p-0">
                <h3 className="font-poppins font-bold text-gray-900 mb-4 text-lg sm:text-xl lg:text-2xl leading-tight">
                  Rosana Hadad Salomón: "La transformación digital es una obligación"
                </h3>
                <p className="text-gray-700 font-montserrat mb-6 text-base sm:text-lg leading-relaxed">
                  This space is for an excerpt or preview of your main article. You can opt to simply add the first paragraph directly, or create a summary or teaser for it.
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