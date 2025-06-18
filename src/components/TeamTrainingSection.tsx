export const TeamTrainingSection = () => {
  return (
    <section className="relative py-24 sm:py-28 lg:py-32 lg:px-28 overflow-hidden">
      {/* Fondo con overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/FondoSecciónEmpresas.svg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center">
          {/* Título */}
          <div className="text-white text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-bold leading-tight">
              IMPULSÁ A TU EQUIPO <br />
              CON FORMACIÓN{" "}
              <span className="text-brand-rosa-claro">DE CALIDAD</span>
            </h2>
          </div>

          {/* Lista con línea separadora */}
          <div className="relative lg:pl-10 border-t lg:border-t-0 lg:border-l border-brand-rosa-claro pt-8 lg:pt-0">
            <ul className="list-disc list-inside pl-4 lg:pl-8 text-white space-y-4 text-base sm:text-lg lg:text-xl font-montserrat">
              <li>
                <strong>Programas adaptados</strong> a tus objetivos de negocio
              </li>
              <li>
                <strong>Entrenamiento para líderes,</strong> equipos y mandos
                medios
              </li>
              <li>
                <strong>Metodología propia</strong> con resultados comprobados
              </li>
              <li>
                <strong>+10 años de experiencia</strong> formando profesionales
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
