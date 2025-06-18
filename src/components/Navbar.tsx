
import { useScrollPosition } from "@/hooks/useScrollPosition";

export const Navbar = () => {
  const scrollY = useScrollPosition();
  
  // Calcular la opacidad del fondo basada en el scroll
  const backgroundOpacity = Math.min(scrollY / 300, 0.95);
  
  // Determinar qué sección está visible para ajustar colores
  const getNavbarStyle = () => {
    if (scrollY < 100) {
      // Transparente al inicio
      return {
        backgroundColor: `rgba(247, 46, 145, ${backgroundOpacity * 0.2})`,
        backdropFilter: scrollY > 50 ? 'blur(10px)' : 'none'
      };
    } else if (scrollY < 1600) {
      // Sobre las primeras secciones - usar fucsia
      return {
        backgroundColor: `rgba(247, 46, 145, ${Math.max(backgroundOpacity * 0.8, 0.6)})`,
        backdropFilter: 'blur(10px)'
      };
    } else {
      // Resto de secciones - usar rosa claro
      return {
        backgroundColor: `rgba(246, 215, 255, ${Math.max(backgroundOpacity * 0.9, 0.7)})`,
        backdropFilter: 'blur(10px)'
      };
    }
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none transition-all duration-300 ease-in-out"
      style={getNavbarStyle()}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center mt-4 sm:mt-6 md:mt-8">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-semibold pointer-events-auto">
            <span className="text-white drop-shadow-lg">RH</span>
            <span className="text-brand-fucsia drop-shadow-lg">S/&gt;</span>
          </div>
        </div>
      </div>
    </nav>
  );
};
