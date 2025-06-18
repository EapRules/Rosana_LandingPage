import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative bg-brand-home overflow-hidden min-h-screen flex flex-col-reverse lg:flex-row-reverse">
      {/* Texto */}
      <div className="flex-1 order-2 lg:order-1 z-10 flex flex-col justify-center items-center lg:items-start px-4 py-12 sm:py-18 lg:py-40 pt-24">
        <div className="relative w-full max-w-lg text-center lg:text-left">
          {/* Soy flotante */}
          <p
            className="
  absolute 
  top-8 
  xs:top-8 
  sm:top-8 
  md:top-6 
  lg:top-4 
  xl:top-4 
  left-44 
  xs:left-24 
  sm:left-36 
  md:left-28 
  lg:-left-4 
  xl:-left-2 
  text-4xl 
  sm:text-5xl 
  md:text-6xl 
  lg:text-7xl 
  xl:text-8xl 
  font-meow-script 
  text-white 
  -translate-y-1/3 
  z-10
"
          >
            Soy
          </p>

          {/* Nombre */}
          <div className="pt-12 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-brand-fucsia uppercase font-poppins font-bold flex flex-col leading-none space-y-[-0.5rem] md:space-y-[-0.75rem]">
            <div>ROSANA</div>
            <div className="font-normal">HADAD</div>
            <div className="font-normal">SALOMÓN</div>
          </div>

          {/* Descripción */}
          <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-montserrat text-gray-900 font-medium leading-tight px-2 lg:px-0">
            Más de 20 años brindando <br />
            formación de alto impacto <br />
            para líderes del futuro
          </p>

          {/* Botón */}
          <div className="mt-6 w-full flex justify-center lg:justify-start">
            <Button
              variant="default"
              className="border-2 border-brand-fucsia text-brand-fucsia hover:bg-brand-fucsia hover:text-white"
            >
              CONOCÉ NUESTROS PROGRAMAS
            </Button>
          </div>
        </div>
      </div>

      {/* Imagen modo Desktop */}
      <div className="hidden lg:flex flex-1 order-1 lg:order-2 h-full relative items-end justify-start">
        <img
          src="/assets/FotoHomeWhitoutWall.png"
          alt="Rosana Hadad Salomón"
          className="h-[95vh] xl:h-[120vh] w-auto object-cover object-top"
        />
      </div>

      {/* Imagen modo Mobile */}
      <div className="lg:hidden relative w-full h-[60vh] sm:h-[65vh] md:h-[70vh]">
        <img
          src="/assets/FotoHomeWhitoutWall.png"
          alt="Rosana Hadad Salomón"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-auto object-contain"
        />
      </div>
    </section>
  );
};
