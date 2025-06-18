import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    img: "/assets/Formacion.png",
    alt: "Formación & Capacitaciones",
    title: "FORMACIÓN & CAPACITACIONES",
    description:
      "Diseño programas de formación que combinan coaching, liderazgo, neurociencia y pedagogía. Para empresas, universidades y organizaciones que quieren formar líderes reales.",
  },
  {
    img: "/assets/Consultorias.png",
    alt: "Consultoría Estratégica",
    title: "CONSULTORÍA ESTRATÉGICA",
    description:
      "Acompaño a organizaciones en procesos de cambio, rediseño de cultura interna, desarrollo de talento y liderazgo. Diagnóstico, planificación y acompañamiento personalizado.",
  },
  {
    img: "/assets/Mentorias.png",
    alt: "Mentorías & Academia",
    title: "MENTORÍAS & ACADEMIA",
    description:
      "Espacios 1:1 y grupales para el desarrollo profesional, la toma de decisiones, el crecimiento personal y la construcción de proyectos con propósito. También dirijo mi propia academia y próximamente lanzo una propuesta para adolescentes.",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-32 sm:py-38 lg:py-48 bg-brand-fondo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6 sm:mb-8">
            Formación y consultorías con propósito
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl lg:text-2xl font-montserrat text-gray-700 leading-relaxed">
              Ofrezco soluciones a medida para empresas, equipos e individuos
              que{" "}
              <span className="font-semibold text-gray-900">
                buscan crecer, liderar con impacto y construir el futuro que
                necesitan.
              </span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 px-4 sm:px-8 md:px-16 lg:px-6 xl:px-12 2xl:px-8">
          {" "}
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white rounded-3xl shadow-md py-12 px-6 sm:px-8 flex flex-col text-center "
            >
              <CardContent className="p-0 flex flex-col h-full">
                {/* Bloque fijo arriba */}
                <div className="flex flex-col items-center mb-4">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mb-2">
                    <img
                      src={service.img}
                      alt={service.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-poppins font-bold text-gray-900 uppercase tracking-wide">
                    {service.title}
                  </h3>
                </div>

                {/* Descripción centrada verticalmente */}
                <div className="flex-grow flex items-center">
                  <p className="text-base sm:text-lg sm:leading-none text-gray-700 font-montserrat w-full">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
