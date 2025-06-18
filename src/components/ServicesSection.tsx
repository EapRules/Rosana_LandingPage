import { Card, CardContent } from "@/components/ui/card";

export const ServicesSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-38 bg-brand-fondo">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6 sm:mb-8">
            Formación y consultorías con propósito
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl lg:text-2xl font-montserrat text-gray-700 leading-relaxed">
              Ofrezco soluciones a medida para empresas, equipos e individuos que{' '}
              <span className="font-semibold text-gray-900">buscan crecer, liderar con impacto y construir el futuro que necesitan.</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
          {/* Formación & Capacitaciones */}
          <div className="text-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto mb-6 sm:mb-8">
              <img 
                src="/assets/Formacion.png" 
                alt="Formación & Capacitaciones" 
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-poppins font-bold text-gray-900 mb-4 sm:mb-6 uppercase tracking-wide">
              FORMACIÓN &<br />CAPACITACIONES
            </h3>
            <p className="text-base sm:text-lg text-gray-700 font-montserrat leading-relaxed">
              Diseño programas de formación que combinan coaching, liderazgo, neurociencia y pedagogía. Para empresas, universidades y organizaciones que quieren formar líderes reales.
            </p>
          </div>

          {/* Consultoría Estratégica */}
          <div className="text-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto mb-6 sm:mb-8">
              <img 
                src="/assets/Consultorias.png" 
                alt="Consultoría Estratégica" 
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-poppins font-bold text-gray-900 mb-4 sm:mb-6 uppercase tracking-wide">
              CONSULTORÍA ESTRATÉGICA
            </h3>
            <p className="text-base sm:text-lg text-gray-700 font-montserrat leading-relaxed">
              Acompaño a organizaciones en procesos de cambio, rediseño de cultura interna, desarrollo de talento y liderazgo. Diagnóstico, planificación y acompañamiento personalizado.
            </p>
          </div>

          {/* Mentorías & Academia */}
          <div className="text-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto mb-6 sm:mb-8">
              <img 
                src="/assets/Mentorias.png" 
                alt="Mentorías & Academia" 
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-poppins font-bold text-gray-900 mb-4 sm:mb-6 uppercase tracking-wide">
              MENTORÍAS & ACADEMIA
            </h3>
            <p className="text-base sm:text-lg text-gray-700 font-montserrat leading-relaxed">
              Espacios 1:1 y grupales para el desarrollo profesional, la toma de decisiones, el crecimiento personal y la construcción de proyectos con propósito. También dirijo mi propia academia y próximamente lanzo una propuesta para adolescentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};