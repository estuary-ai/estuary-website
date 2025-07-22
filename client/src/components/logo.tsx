import estuaryLogoCurved from "@images/Estuary_Logo_Curved.png";
import estuaryLogoSquare from "@images/Estuary_Logo_Square.png";
import estuaryLogoCircle from "@images/Estuary_Logo_Circle.png";
import estuaryLogoTransparent from "@images/Estuary_Logo_Transparent.png";

export function EstuaryLogo({ className = "w-64 h-64" }: { className?: string }) {
  const logoSrc = estuaryLogoTransparent;
  return (
    <div className={`${className}`}>
      <img 
        src={logoSrc} 
        alt="Estuary Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
}

export function EstuaryLogoHeader({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <div className={`${className}`}>
      <img 
        src={estuaryLogoTransparent} 
        alt="Estuary Logo" 
        className="w-full h-full object-contain rounded-full"
      />
    </div>
  );
}
