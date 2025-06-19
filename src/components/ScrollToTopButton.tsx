import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const halfPage = documentHeight / 2;
      setIsVisible(scrollPosition > halfPage);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-36 inset-x-0 mx-auto z-50 animate-fade-in flex items-center justify-center">
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="lg"
            className="border-2 border-brand-fucsia text-brand-fucsia hover:bg-brand-fucsia hover:text-white bg-white px-6 lg:px-8 py-2 lg:py-3 rounded-full text-sm sm:text-base font-poppins font-semibold shadow-md"
            aria-label="Volver arriba"
          >
            <ChevronUp className="w-6 h-6 mr-2" />
            VOLVER ARRIBA
          </Button>
        </div>
      )}
    </>
  );
};
