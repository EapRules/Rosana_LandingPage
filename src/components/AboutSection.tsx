import { Heart } from "lucide-react";
export const AboutSection = () => {
  return (
    <section className="relative h-auto min-h-[60vh] md:min-h-[50vh] lg:min-h-[60vh] xl:min-h-[60vh] 2xl:min-h-[70vh] bg-brand-fucsia flex items-center justify-center">
      {/* Curva superior */}
      <div className="absolute -top-10 xs:-top-18 sm:-top-18 md:-top-26 lg:-top-28 xl:-top-32 2xl:-top-40 left-0 w-full z-0">
        <img
          src="/assets/guardaAboutMe.png"
          alt="Curva decorativa superior"
          className="w-full h-auto block"
        />
      </div>

      {/* Contenido: ahora con flex para centrar */}
      <div className="w-full text-white relative z-10 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10 lg:gap-16">
            {/* Texto principal */}
            <div className="flex-1 lg:w-1/2">
              <div className="flex items-center mb-4 sm:mb-6 lg:mb-8 justify-center lg:justify-start">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center mr-2 sm:mr-3 lg:mr-4">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-brand-fucsia" />
                </div>
                <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-6xl font-poppins font-bold">
                  ¿QUIÉN SOY?
                </h2>
              </div>

              <div className="relative overflow-hidden rounded-[2rem] [clip-path:polygon(0%_0%,90%_0%,100%_15%,100%_100%,10%_100%,0%_85%)] bg-white p-8">
                <div className="bg-white text-gray-900 p-6 sm:p-8 lg:p-10 mb-6 sm:mb-8 lg:mb-10 rounded-[50px] font-poppins text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] leading-[1.6] text-left space-y-6 shadow-none">
                  <p>
                    <strong>
                      Ingeniera, educadora y coach especializada en desarrollo
                      profesional y liderazgo.
                    </strong>{" "}
                    Desde hace más de dos décadas acompaño procesos de
                    transformación en organizaciones, universidades y equipos de
                    trabajo. Mi compromiso es claro:
                    <span className="font-bold text-brand-fucsia">
                      llevar a cada persona a su mejor versión, con una mirada
                      tecnológica, humana y estratégica.
                    </span>
                  </p>
                  <p>
                    Hoy dirijo mi propia academia y coordino un equipo de
                    investigación con más de 40 especialistas. Mi propósito es
                    formar líderes con conciencia, visión y herramientas reales
                    para generar impacto en sus entornos.
                  </p>
                </div>
              </div>
            </div>

            {/* Imagen */}
            <div className="flex-none lg:w-auto flex justify-center lg:justify-end">
              <img
                src="/assets/quienSoy.jpg"
                alt="Rosana Hadad Salomón trabajando"
                className="w-64 sm:w-72 md:w-80 lg:w-[22rem] xl:w-[20rem] 2xl:w-[20rem] h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Curva inferior */}
      <div className="absolute -bottom-8 xs:-bottom-12 sm:-bottom-16 md:-bottom-18 lg:-bottom-24 xl:-bottom-28 2xl:-bottom-32 left-0 w-full transform rotate-180 z-0">
        <img
          src="/assets/guardaAboutMe.png"
          alt="Curva decorativa inferior"
          className="w-full h-auto block"
        />
      </div>
    </section>
  );
};
