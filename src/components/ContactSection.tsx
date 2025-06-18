import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    consultation: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Aquí va tu integración real
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-brand-fondo text-black">
      <div className="container mx-auto px-4 lg:px-8 xl:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center max-w-7xl mx-auto">
          {/* Ilustración */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="w-full max-w-sm lg:max-w-md">
              <img
                src="/assets/IlustracionContactate.svg"
                alt="Ilustración de colaboración - dos personas trabajando juntas"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Contenido + Form */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-poppins font-bold mb-6 lg:mb-8 leading-tight">
              ¿QUERÉS QUE
              <br />
              TRABAJEMOS
              <br />
              JUNTOS?
            </h2>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-base sm:text-lg lg:text-xl font-montserrat mb-8 lg:mb-10 leading-relaxed">
                Si sos parte de una empresa, equipo o estás buscando crecer, me
                encantaría escucharte.{" "}
                <strong>
                  Escribime y diseñamos juntos una propuesta a tu medida.
                </strong>
              </p>

              <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-left font-montserrat">
                    Nombre y Apellido
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-white text-gray-800 border border-gray-300 h-12 lg:h-14 rounded-lg text-base lg:text-lg font-montserrat placeholder:text-gray-400 focus:ring-2 focus:ring-brand-fucsia focus:border-brand-fucsia transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-left font-montserrat">
                    Mail
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-white text-gray-800 border border-gray-300 h-12 lg:h-14 rounded-lg text-base lg:text-lg font-montserrat placeholder:text-gray-400 focus:ring-2 focus:ring-brand-fucsia focus:border-brand-fucsia transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-left font-montserrat">
                    Consulta
                  </label>
                  <Textarea
                    value={formData.consultation}
                    onChange={(e) =>
                      setFormData({ ...formData, consultation: e.target.value })
                    }
                    className="bg-white text-gray-800 border border-gray-300 min-h-[120px] lg:min-h-[140px] rounded-lg text-base lg:text-lg resize-none font-montserrat placeholder:text-gray-400 focus:ring-2 focus:ring-brand-fucsia focus:border-brand-fucsia transition"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="border-2 border-brand-fucsia text-brand-fucsia bg-transparent hover:bg-brand-fucsia hover:text-white font-bold px-8 py-2 rounded-full transition-all duration-300 text-sm sm:text-base font-poppins uppercase tracking-wide shadow-none hover:shadow-md text-left"
                >
                  ENVIAR
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
