import { Navigation } from "@/components/navigation";
import { AnimatedBackground } from "@/components/animated-background";
import { EstuaryLogoSimple } from "@/components/logo";
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

export default function Team() {
  return (
    <div className="nature-bg min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />
      
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-estuary-text mb-6">
              Meet the Team
            </h1>
            <p className="text-xl text-estuary-sage mb-12 max-w-2xl mx-auto">
              Coming soon - learn about the passionate team building the future of private AI.
            </p>
            
            <Card className="bg-gradient-to-br from-estuary-teal/10 to-estuary-sage/10 rounded-3xl organic-blob shadow-lg">
              <CardContent className="p-16">
                <div className="text-center">
                  <Users className="h-24 w-24 text-estuary-teal mb-6 mx-auto" />
                  <h2 className="text-2xl font-bold text-estuary-text mb-4">Team Profiles Coming Soon</h2>
                  <p className="text-estuary-sage text-lg">
                    We're working on introducing our amazing team. Check back soon to learn about the brilliant minds behind Estuary!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-4 border-t border-estuary-sage/20 mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <EstuaryLogoSimple />
              <span className="text-xl font-bold text-estuary-text">Estuary</span>
            </div>
            
            <div className="flex space-x-6 text-estuary-sage">
              <a href="#" className="hover:text-estuary-teal transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-estuary-teal transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-estuary-teal transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-estuary-sage/20">
            <p className="text-estuary-sage">
              © 2024 Estuary. Building the future of private, embodied AI.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
