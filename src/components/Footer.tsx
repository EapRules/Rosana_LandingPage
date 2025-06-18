export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-fucsia text-white py-4 sm:py-6 lg:py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="font-montserrat text-xs sm:text-sm lg:text-base">
          © {currentYear} Rosana Hadad Salomón. Todos los derechos reservados.
          made by:{" "}
          <a
            href="https://www.nerds.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:opacity-80 transition-opacity duration-200"
          >
            <img
              src="/assets/nerds.png"
              alt="NERDs"
              className="inline-block h-16 w-auto"
            />
          </a>
        </p>
      </div>
    </footer>
  );
};
