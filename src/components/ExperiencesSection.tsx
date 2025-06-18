import { Button } from "@/components/ui/button";

export const ExperiencesSection = () => {
  return (
    <section className="relative py-8 sm:py-12 lg:py-20 bg-brand-fondo overflow-hidden">
      {/* Guarda superior */}
      <img
        src="/assets/guardaSuperior.png"
        alt="Decoración superior"
        className="absolute top-0 right-0 w-18 sm:w-16 lg:w-18"
      />
      {/* Guarda inferior */}
      <img
        src="/assets/guardaInferior.png"
        alt="Decoración inferior"
        className="absolute bottom-0 left-0 w-32 sm:w-26 lg:w-48"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
          {/* Título */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-gray-800 mb-2 sm:mb-3 lg:mb-4">
              EXPERIENCIAS
              <br />
              QUE DEJAN
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-meow-script text-brand-fucsia mb-4 sm:mb-6 lg:mb-8">
              huella
            </h3>
          </div>

          {/* Testimonios */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Testimonio 1 */}
            <div className="flex items-start space-x-3 sm:space-x-4 lg:space-x-6 bg-white p-4 sm:p-6 lg:p-8 rounded-3xl shadow-md">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
                alt="Pedro Fernandes"
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <p className="text-gray-600 font-montserrat mb-2 sm:mb-3 lg:mb-4 text-xs sm:text-sm lg:text-base">
                  Boost your product and service's credibility by adding
                  testimonials from your clients. People love recommendations so
                  feedback from others who've tried it is invaluable.
                </p>
                <p className="font-semibold text-gray-800 text-xs sm:text-sm lg:text-base">
                  Pedro Fernandes
                </p>
                <p className="text-brand-fucsia text-xs sm:text-sm">
                  Koa & Sons
                </p>
              </div>
            </div>

            {/* Testimonio 2 */}
            <div className="flex items-start space-x-3 sm:space-x-4 lg:space-x-6 bg-white p-4 sm:p-6 lg:p-8 rounded-3xl shadow-md">
              <img
                src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=80&h=80&fit=crop&crop=face"
                alt="Leon France"
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <p className="text-gray-600 font-montserrat mb-2 sm:mb-3 lg:mb-4 text-xs sm:text-sm lg:text-base">
                  Boost your product and service's credibility by adding
                  testimonials from your clients. People love recommendations so
                  feedback from others who've tried it is invaluable.
                </p>
                <p className="font-semibold text-gray-800 text-xs sm:text-sm lg:text-base">
                  Leon France
                </p>
                <p className="text-brand-fucsia text-xs sm:text-sm">
                  Wilderness Watchers Foundation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
