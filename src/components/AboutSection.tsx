
import { Heart } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className=" bg-brand-fucsia ">
      
            <img 
              src="/assets/CurvaSeccion.svg" 
              alt="Rosana working" 
              className="mt-0 b-0" 
            />
     <div className="py-8 sm:py-12 lg:py-20  text-white  relative">
    
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-10">
          <div className="flex-1">
            <div className="flex items-center mb-4 sm:mb-6 lg:mb-8 justify-center lg:justify-start">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center mr-2 sm:mr-3 lg:mr-4">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-brand-fucsia" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-poppins font-bold">¿QUIÉN SOY?</h2>
            </div>
            <div className="space-y-3 sm:space-y-4 lg:space-y-6 text-sm sm:text-base lg:text-lg font-montserrat leading-relaxed text-center lg:text-left">
              <p>
                <strong>Ingeniera, educadora y coach especializada en desarrollo profesional y liderazgo.</strong> Desde hace más de dos décadas acompaño procesos de transformación en organizaciones, universidades y equipos de trabajo. Mi compromiso es claro: <span className="font-semibold">llevar a cada persona a su mejor versión, con una mirada tecnológica, humana y estratégica.</span>
              </p>
              <p>
                Hoy dirijo mi propia academia y coordino un equipo de investigación con más de 40 especialistas. Mi propósito es formar líderes con conciencia, visión y herramientas reales para generar impacto en sus entornos.
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img 
              src="/assets/quienSoy.jpg" 
              alt="Rosana working" 
              className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-auto rounded-2xl shadow-2xl" 
            />
          </div>
        </div>
      </div>
               </div>
    </section>
  );
};
