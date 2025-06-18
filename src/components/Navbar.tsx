export const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mt-4 sm:mt-6 md:mt-8 mb-4 sm:mb-6 md:mb-8">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-semibold pointer-events-auto">
            <span className="text-white drop-shadow-lg">RH</span>
            <span className="drop-shadow-lg text-brand-fucsia">S/{">"}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};
