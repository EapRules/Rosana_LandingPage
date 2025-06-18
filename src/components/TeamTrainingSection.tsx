
export const TeamTrainingSection = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('/assets/FondoSecciónEmpresas.svg')"
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
          <div className="text-white text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight">
              IMPULSÁ A TU EQUIPO<br />
              CON FORMACIÓN <span className="text-brand-rosa-claro">DE<br />CALIDAD</span>
            </h2>
          </div>
          <div className="space-y-3 sm:space-y-4 lg:space-y-6 text-white">
            <div className="flex items-start space-x-2 sm:space-x-3 lg:space-x-4">
              <div className="w-2 h-2 bg-brand-amarillo rounded-full mt-1 sm:mt-2 lg:mt-3 flex-shrink-0"></div>
              <p className="text-sm sm:text-base lg:text-lg font-montserrat">
                <strong>Programas adaptados</strong> a tus objetivos de negocio
              </p>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3 lg:space-x-4">
              <div className="w-2 h-2 bg-brand-amarillo rounded-full mt-1 sm:mt-2 lg:mt-3 flex-shrink-0"></div>
              <p className="text-sm sm:text-base lg:text-lg font-montserrat">
                <strong>Entrenamiento para líderes,</strong> equipos y mandos medios
              </p>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3 lg:space-x-4">
              <div className="w-2 h-2 bg-brand-amarillo rounded-full mt-1 sm:mt-2 lg:mt-3 flex-shrink-0"></div>
              <p className="text-sm sm:text-base lg:text-lg font-montserrat">
                <strong>Metodología propia</strong> con resultados comprobados
              </p>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3 lg:space-x-4">
              <div className="w-2 h-2 bg-brand-amarillo rounded-full mt-1 sm:mt-2 lg:mt-3 flex-shrink-0"></div>
              <p className="text-sm sm:text-base lg:text-lg font-montserrat">
                <strong>+10 años de experiencia</strong> formando profesionales
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
