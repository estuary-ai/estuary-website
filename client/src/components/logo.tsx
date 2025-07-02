import estuaryLogoSquare from "@assets/Estuary_Logo_Square_1751484396675.png";
import estuaryLogoCircle from "@assets/Estuary_Logo_Circle_1751484396675.png";

export function EstuaryLogo({ className = "w-20 h-20", variant = "square" }: { className?: string; variant?: "square" | "circle" }) {
  const logoSrc = variant === "circle" ? estuaryLogoCircle : estuaryLogoSquare;
  
  return (
    <div className={`relative ${className}`}>
      <img 
        src={logoSrc} 
        alt="Estuary Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
}

export function EstuaryLogoSimple({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div className={`${className}`}>
      <img 
        src={estuaryLogoCircle} 
        alt="Estuary Logo" 
        className="w-full h-full object-contain rounded-full"
      />
    </div>
  );
}
