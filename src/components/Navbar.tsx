import { useScrollPosition } from "@/hooks/useScrollPosition";

export const Navbar = () => {
  const scrollY = useScrollPosition();
  
  // Calcular la opacidad del fondo basada en el scroll
  const backgroundOpacity = Math.min(scrollY / 200, 0.95);
  
  // Estilo simple: transparente sin scroll, fucsia con scroll
  const getNavbarStyle = () => {
    if (scrollY < 50) {
      // Completamente transparente al inicio
      return {
        backgroundColor: 'transparent',
        backdropFilter: 'none'
      };
    } else {
      // Fucsia con blur al hacer scroll
      return {
        backgroundColor: `rgba(255, 0, 145, ${Math.max(backgroundOpacity, 0.85)})`,
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
            <span className="text-white drop-shadow-lg">S/></span>
          </div>
        </div>
      </div>
    </nav>
  );
};