import { Button } from "@/components/ui/button";

export const ExperiencesSection = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-20 bg-brand-fondo">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-gray-800 mb-2 sm:mb-3 lg:mb-4">
              EXPERIENCIAS<br />QUE DEJAN
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-meow-script text-brand-fucsia mb-4 sm:mb-6 lg:mb-8">huella</h3>
          </div>
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="flex items-start space-x-3 sm:space-x-4 lg:space-x-6">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" 
                alt="Pedro Fernandes" 
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full object-cover flex-shrink-0" 
              />
              <div>
                <p className="text-gray-600 font-montserrat mb-2 sm:mb-3 lg:mb-4 text-xs sm:text-sm lg:text-base">
                  "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable."
                </p>
                <div>
                  <p className="font-semibold text-gray-800 text-xs sm:text-sm lg:text-base">Pedro Fernandes</p>
                  <p className="text-brand-fucsia text-xs sm:text-sm">Koa & Sons</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 sm:space-x-4 lg:space-x-6">
              <img 
                src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=80&h=80&fit=crop&crop=face" 
                alt="Leon France" 
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full object-cover flex-shrink-0" 
              />
              <div>
                <p className="text-gray-600 font-montserrat mb-2 sm:mb-3 lg:mb-4 text-xs sm:text-sm lg:text-base">
                  "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable."
                </p>
                <div>
                  <p className="font-semibold text-gray-800 text-xs sm:text-sm lg:text-base">Leon France</p>
                  <p className="text-brand-fucsia text-xs sm:text-sm">Wilderness Watchers Foundation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-6 sm:mt-8 lg:mt-12">
          <Button 
            variant="outline" 
            className="border-brand-fucsia text-brand-fucsia hover:bg-brand-fucsia hover:text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-2 lg:py-3 rounded-full text-sm sm:text-base"
          >
            VOLVER ARRIBA
          </Button>
        </div>
      </div>
    </section>
  );
};