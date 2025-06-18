import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative bg-brand-home overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center min-h-screen">
        {/* Imagen de Rosana - Lado izquierdo */}
        <div className="flex-1 order-2 lg:order-1 h-full">
          <div className="relative h-full flex items-end justify-center lg:justify-start">
            <img 
              src="/assets/FotoHome.jpg" 
              alt="Rosana Hadad Salomón" 
              className="h-[100vh] sm:h-[55vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] w-auto object-cover object-top" 
            />
          </div>
        </div>

        {/* Contenido de texto - Lado derecho */}
        <div className="flex-1 order-1 lg:order-2 py-6 sm:py-8 lg:py-20 flex flex-col justify-center items-center px-4 lg:pr-8 min-h-[50vh] lg:min-h-[80vh] leading-tight">
          <div className="text-center lg:text-left w-full max-w-lg lg:max-w-none leading-tight">
            {/* Texto "Soy" en cursiva */}
            <div className="mb-4 sm:mb-6 lg:mb-8">
              <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-meow-script text-white mb-2 ">
                Soy
              </p>
              
              {/* Nombre en fucsia */}
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-brand-fucsia leading-none  leading-tight uppercase tracking-tight font-poppins font-bold">
               <div className="font-bold">
                <div>ROSANA</div>
                   </div>
                     <div className="font-normal">
            <div className="font-normal leading-tight">HADAD</div>
  <div className="font-normal leading-tight">SALOMÓN</div>
                          </div>
              </div>
            </div>
            
            {/* Descripción */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-montserrat text-gray-900 mb-6 sm:mb-8 lg:mb-10 leading-relaxed font-medium text-center lg:text-left px-2 lg:px-0">
              Más de 20 años brindando<br />
              formación de alto impacto<br />
              para líderes del futuro
            </p>
            
            {/* Botón */}
            <div className="w-full flex justify-center lg:justify-start">
              <Button 
                variant="outline" 
                className="border-2 border-brand-fucsia text-brand-fucsia hover:bg-brand-fucsia hover:text-white bg-transparent font-bold px-6 sm:px-8 lg:px-10 py-4 sm:py-5 text-sm sm:text-base lg:text-lg uppercase tracking-wide rounded-full transition-all duration-300 w-full sm:w-auto max-w-sm sm:max-w-none"
              >
                CONOCÉ NUESTROS PROGRAMAS
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Borde decorativo de semicírculos en la parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-brand-fucsia">
        <svg 
          viewBox="0 0 1200 48" 
          className="w-full h-full" 
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="scallops" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
              <circle cx="24" cy="0" r="24" fill="#FF0091"/>
            </pattern>
          </defs>
          <rect width="100%" height="48" fill="url(#scallops)"/>
        </svg>
      </div>
    </section>
  );
};