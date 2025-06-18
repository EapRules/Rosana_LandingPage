import { Heart } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="relative">
      {/* Curva decorativa superior - sobresale hacia arriba */}
      <div className="absolute -top-26 sm:-top-24 lg:-top-32 left-0 w-full">
        <img 
           src="/assets/guardaAboutMe.png" 
          alt="Curva decorativa superior" 
          className="w-full h-auto"
        />
      </div>
      
      {/* Contenido principal con fondo fucsia */}
      <div className="bg-brand-fucsia text-white pt-6 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24 relative z-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-10">
            {/* Texto principal */}
            <div className="flex-1">
              <div className="flex items-center mb-4 sm:mb-6 lg:mb-8 justify-center lg:justify-start">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center mr-2 sm:mr-3 lg:mr-4">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-brand-fucsia" />
                </div>
                <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-6xl font-poppins font-bold">¿QUIÉN SOY?</h2>
              </div>
              
              {/* Contenedor de texto con bordes específicos */}
              <div className="bg-white text-gray-900 p-6 sm:p-8 lg:p-10 mb-6 sm:mb-8 lg:mb-10 rounded-tl-3xl rounded-br-3xl shadow-lg">
                <p className="text-sm sm:text-base lg:text-lg font-montserrat leading-relaxed mb-4 sm:mb-6">
                  <strong>Ingeniera, educadora y coach especializada en desarrollo profesional y liderazgo.</strong> Desde hace más de dos décadas acompaño procesos de transformación en organizaciones, universidades y equipos de trabajo. Mi compromiso es claro: <span className="font-semibold text-brand-fucsia">llevar a cada persona a su mejor versión, con una mirada tecnológica, humana y estratégica.</span>
                </p>
                <div className="space-y-3 sm:space-y-4 lg:space-y-6 text-sm sm:text-base lg:text-lg font-montserrat leading-relaxed text-center lg:text-left">
                <p>
                  Hoy dirijo mi propia academia y coordino un equipo de investigación con más de 40 especialistas. Mi propósito es formar líderes con conciencia, visión y herramientas reales para generar impacto en sus entornos.
                </p>
              </div>
            </div>
              </div>
            {/* Imagen */}
            <div className="flex-1 flex justify-center">
              <img 
                src="/assets/quienSoy.jpg" 
                alt="Rosana Hadad Salomón trabajando" 
                className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-auto rounded-2xl" 
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Curva decorativa inferior - sobresale hacia abajo */}
      <div className="absolute -bottom-16 sm:-bottom-12 lg:-bottom-32 left-0 w-full transform rotate-180">
        <img 
          src="/assets/guardaAboutMe.png" 
          alt="Curva decorativa inferior" 
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};