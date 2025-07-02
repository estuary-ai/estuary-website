import { useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { EstuaryLogo, EstuaryLogoSimple } from "@/components/logo";
import { AnimatedBackground } from "@/components/animated-background";
import { SimpleWave } from "@/components/wave-separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Laptop, 
  Bot, 
  Smartphone, 
  Glasses, 
  Monitor,
  Download,
  Apple,
  Download as WindowsIcon
} from "lucide-react";

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="nature-bg overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto scroll-reveal">
          {/* Logo Display */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 bg-white/50 rounded-2xl shadow-xl flex items-center justify-center backdrop-blur-sm">
              <EstuaryLogo className="w-24 h-24" variant="square" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-estuary-text mb-6 leading-tight">
            Private AI Agents
          </h1>
          <p className="text-xl md:text-2xl text-estuary-sage mb-8 font-light">
            Squarespace for private, embodied AI agents
          </p>
          <p className="text-lg text-estuary-text mb-12 max-w-2xl mx-auto leading-relaxed">
            Build, download, and run personal AI agents with user-definable skills and personas on your own device. Privacy-first, offline-capable, spatially-aware companionship AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-estuary-teal hover:bg-estuary-teal-dark text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
              onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Now
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-estuary-teal text-estuary-teal hover:bg-estuary-teal hover:text-white px-8 py-4 rounded-full font-semibold transition-all"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Wave Separator */}
      <SimpleWave direction="down" />

      {/* Key Principles Section */}
      <section className="relative z-10 py-20 px-4 bg-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-estuary-text mb-6">
              YOUR DATA. YOUR DEVICE. YOUR AI.
            </h2>
            <p className="text-xl text-estuary-sage max-w-3xl mx-auto">
              Demand for spatially-aware companionship AI is growing, and so are data privacy concerns. 
              Take control with Estuary's private, embodied AI platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="scroll-reveal bg-white/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-estuary-teal rounded-xl flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-estuary-text mb-4">Your Data</h3>
                <p className="text-estuary-sage leading-relaxed">
                  Complete data privacy with local processing. Your conversations, memories, and interactions stay on your device.
                </p>
              </CardContent>
            </Card>
            
            <Card className="scroll-reveal bg-white/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-estuary-teal rounded-xl flex items-center justify-center mb-6">
                  <Laptop className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-estuary-text mb-4">Your Device</h3>
                <p className="text-estuary-sage leading-relaxed">
                  Run entirely offline with no rate limits. Fast, responsive AI that works anywhere, anytime.
                </p>
              </CardContent>
            </Card>
            
            <Card className="scroll-reveal bg-white/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-estuary-teal rounded-xl flex items-center justify-center mb-6">
                  <Bot className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-estuary-text mb-4">Your AI</h3>
                <p className="text-estuary-sage leading-relaxed">
                  Customizable personas and skills. Embodied agents that understand space, context, and you.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Wave Separator */}
      <SimpleWave direction="up" />

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20 px-4 bg-white/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-estuary-text mb-6">
              Embodied AI, Reimagined
            </h2>
            <p className="text-xl text-estuary-sage max-w-3xl mx-auto">
              Experience lifelike, spatially-aware interactions with long-term learning capabilities across all your devices.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal">
              <h3 className="text-3xl font-bold text-estuary-text mb-6">Multi-Platform Integration</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-estuary-teal rounded-full flex items-center justify-center flex-shrink-0">
                    <Glasses className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-estuary-text mb-2">XR & Smart Glasses</h4>
                    <p className="text-estuary-sage">Immersive experiences with spatial awareness and gesture recognition.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-estuary-teal rounded-full flex items-center justify-center flex-shrink-0">
                    <Smartphone className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-estuary-text mb-2">Mobile & Tablet</h4>
                    <p className="text-estuary-sage">On-the-go AI companionship with camera and sensor integration.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-estuary-teal rounded-full flex items-center justify-center flex-shrink-0">
                    <Monitor className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-estuary-text mb-2">Desktop & Laptop</h4>
                    <p className="text-estuary-sage">Powerful AI processing with full multimodal capabilities.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="scroll-reveal">
              <Card className="bg-gradient-to-br from-estuary-teal/20 to-estuary-sage/20 rounded-xl shadow-lg">
                <CardContent className="p-12 flex items-center justify-center min-h-[400px]">
                  <div className="text-center">
                    <div className="grid grid-cols-2 gap-8">
                      <div className="floating-character text-center">
                        <Glasses className="h-12 w-12 text-estuary-teal mb-2 mx-auto" />
                        <p className="text-sm text-estuary-text font-semibold">XR/AR</p>
                      </div>
                      <div className="floating-character text-center">
                        <Smartphone className="h-12 w-12 text-estuary-teal mb-2 mx-auto" />
                        <p className="text-sm text-estuary-text font-semibold">Mobile</p>
                      </div>
                      <div className="floating-character text-center">
                        <Laptop className="h-12 w-12 text-estuary-teal mb-2 mx-auto" />
                        <p className="text-sm text-estuary-text font-semibold">Laptop</p>
                      </div>
                      <div className="floating-character text-center">
                        <Monitor className="h-12 w-12 text-estuary-teal mb-2 mx-auto" />
                        <p className="text-sm text-estuary-text font-semibold">Smart Glasses</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Separator */}
      <SimpleWave direction="down" />

      {/* Download Section */}
      <section id="download" className="relative z-10 py-20 px-4 bg-gradient-to-b from-white/5 to-white/15">
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-estuary-text mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-estuary-sage mb-12 max-w-2xl mx-auto">
              Download Estuary today and start building your private AI agent. Available for Mac and PC with easy setup.
            </p>
            
            <Card className="bg-white/50 backdrop-blur-sm rounded-xl shadow-xl">
              <CardContent className="p-8">
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Button 
                    size="lg"
                    className="bg-estuary-teal hover:bg-estuary-teal-dark text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center group"
                  >
                    <Apple className="h-6 w-6 mr-3 group-hover:animate-bounce" />
                    <div className="text-left">
                      <div className="text-sm opacity-90">Download for</div>
                      <div className="text-lg font-bold">macOS</div>
                    </div>
                  </Button>
                  
                  <Button 
                    size="lg"
                    className="bg-estuary-teal hover:bg-estuary-teal-dark text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center group"
                  >
                    <WindowsIcon className="h-6 w-6 mr-3 group-hover:animate-bounce" />
                    <div className="text-left">
                      <div className="text-sm opacity-90">Download for</div>
                      <div className="text-lg font-bold">Windows</div>
                    </div>
                  </Button>
                </div>
                
                <div className="mt-6 text-sm text-estuary-sage">
                  System requirements: macOS 11+ or Windows 10+, 8GB RAM recommended
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Wave Separator */}
      <SimpleWave direction="up" />

      {/* Footer */}
      <footer className="relative z-10 py-12 px-4 border-t border-estuary-sage/20 bg-white/10">
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
