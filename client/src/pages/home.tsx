import { useEffect, useState } from "react";
import { Navigation } from "@/components/navigation";
import { EstuaryLogo, EstuaryLogoHeader } from "@/components/logo";
import { AnimatedBackground } from "@/components/animated-background";
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
  RectangleGoggles,
  Download as WindowsIcon
} from "lucide-react";

export default function Home() {
  // OS detection for download button
  const getOS = () => {
    const { userAgent, platform } = window.navigator;
    if (/Mac/i.test(platform)) return "mac";
    if (/Win/i.test(platform)) return "windows";
    return "other";
  };

  const [os, setOS] = useState<string>("other");

  useEffect(() => {
    setOS(getOS());
  }, []);

  const handleDownload = () => {
    if (os === "mac") {
      window.location.href = "https://example.com/estuary-mac.dmg"; // Replace with real macOS installer URL
    } else if (os === "windows") {
      window.location.href = "https://example.com/estuary-windows.exe"; // Replace with real Windows installer URL
    } else {
      alert("Installer is only available for macOS and Windows.");
    }
  };

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
    <div className="overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="relative section-cream min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Animated background only for hero */}
        <AnimatedBackground />
        <div className="text-center max-w-4xl mx-auto scroll-reveal relative z-10">
          {/* Logo Display */}
          <div className="flex justify-center">
            <EstuaryLogo/>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-medium text-estuary-text mb-6 leading-tight font-fredoka">
            Estuary
          </h1>
          <p className="text-xl md:text-2xl text-estuary-sage mb-8 font-light">
            Platform for building private, embodied AI agents
          </p>
          <p className="text-lg text-estuary-text mb-12 max-w-2xl mx-auto leading-relaxed">
            Build and run AI companions, chatbots, agents, and more on your own device!
            <br/> Total privacy. No rate limits. Get started now for free!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="relative">
              <Button 
                size="lg"
                className="text-lg bg-estuary-teal hover:bg-estuary-teal-dark text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg opacity-60 cursor-not-allowed"
                onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
                disabled
              >
                <Download className="mr-2 h-5 w-5" />
                Download Now
              </Button>
              <div className="absolute -top-2 -right-2 bg-estuary-sage text-white text-xs font-semibold px-2 py-1 rounded-full shadow-lg border border-white/20">
                Coming Soon
              </div>
            </div>
            <Button 
              variant="outline"
              size="lg"
              className="text-lg border-2 border-estuary-teal text-estuary-teal hover:bg-estuary-teal hover:text-white px-8 py-4 rounded-full font-semibold transition-all"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

     

      {/* Key Principles Section */}
      <section id="features" className="relative section-sage">
        {/* Wave divider */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          width="100%"
          height="120"
          style={{ transform: 'rotate(180deg)', display: 'block', marginTop: '-1px' }}
          preserveAspectRatio="none"
        >
          <path fill="#fef5e7" fillOpacity="1" d="M0,64L40,106.7C80,149,160,235,240,250.7C320,267,400,213,480,165.3C560,117,640,75,720,80C800,85,880,139,960,160C1040,181,1120,171,1200,154.7C1280,139,1360,117,1400,106.7L1440,96L1440,340L1400,340C1360,340,1280,340,1200,340C1120,340,1040,340,960,340C880,340,800,340,720,340C640,340,560,340,480,340C400,340,320,340,240,340C160,340,80,340,40,340L0,340Z" />
        </svg>
        <div className="max-w-6xl mx-auto py-20 px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-medium text-estuary-text mb-6 font-fredoka">
              {/* YOUR DATA. YOUR DEVICE. YOUR AI. */}
              Your Data. Your Device. Your AI.
            </h2>
            <p className="text-xl text-estuary-sage max-w-3xl mx-auto">
              Don't believe us?  Flip on Airplane Mode.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="scroll-reveal bg-white/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-estuary-teal rounded-xl flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-medium text-estuary-text mb-4 font-fredoka">Your Data</h3>
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
                <h3 className="text-2xl font-medium text-estuary-text mb-4 font-fredoka">Your Device</h3>
                <p className="text-estuary-sage leading-relaxed">
                  Run entirely offline with absolutely no rate limits. Fast, responsive AI that works anywhere, anytime.
                </p>
              </CardContent>
            </Card>
            
            <Card className="scroll-reveal bg-white/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-estuary-teal rounded-xl flex items-center justify-center mb-6">
                  <Bot className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-medium text-estuary-text mb-4 font-fredoka">Your AI</h3>
                <p className="text-estuary-sage leading-relaxed">
                  Customizable personas and skills. Embodied agents that understand space, context, and you.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="cross-platform" className="relative section-cream">
        {/* Wave divider */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          width="100%"
          height="120"
          style={{ transform: 'rotate(180deg)', display: 'block', marginTop: '-1px' }}
          preserveAspectRatio="none"
        >
          <path fill="#d9d4bb" fill-opacity="1" d="M0,96L18.5,133.3C36.9,171,74,245,111,240C147.7,235,185,149,222,149.3C258.5,149,295,235,332,229.3C369.2,224,406,128,443,117.3C480,107,517,181,554,213.3C590.8,245,628,235,665,197.3C701.5,160,738,96,775,85.3C812.3,75,849,117,886,133.3C923.1,149,960,139,997,133.3C1033.8,128,1071,128,1108,133.3C1144.6,139,1182,149,1218,170.7C1255.4,192,1292,224,1329,202.7C1366.2,181,1403,107,1422,69.3L1440,32L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path>
        </svg>
        <div className="max-w-6xl mx-auto py-20 px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-medium text-estuary-text mb-6 font-fredoka">
              Embodied AI Agents, Cross-Platform
            </h2>
            <p className="text-xl text-estuary-sage max-w-3xl mx-auto">
              Experience lifelike, spatially-aware interactions with long-term learning capabilities across all your devices.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-estuary-teal rounded-full flex items-center justify-center flex-shrink-0">
                    <RectangleGoggles className="h-6 w-6 text-white" />
              </div>
                  <div>
                    <h3 className="font-medium text-3xl text-estuary-text mb-2">XR & Smart Glasses</h3>
                    <p className="text-lg text-estuary-sage">Immersive experiences with spatial understanding and gesture recognition.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-estuary-teal rounded-full flex items-center justify-center flex-shrink-0">
                    <Smartphone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-3xl text-estuary-text mb-2">Mobile & Tablet</h3>
                    <p className="text-lg text-estuary-sage">Your AI on-the-go with camera, voice, and text.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-estuary-teal rounded-full flex items-center justify-center flex-shrink-0">
                    <Laptop className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-3xl text-estuary-text mb-2">Desktop & Laptop</h3>
                    <p className="text-lg text-estuary-sage">Powerful AI processing with full multimodal capabilities.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="scroll-reveal">
              <Card className="bg-gradient-to-br from-estuary-teal/20 to-estuary-sage/20 rounded-xl shadow-lg">
                <CardContent className="p-12 flex items-center justify-center min-h-[400px]">
                  <div className="text-center">
                    <div className="grid grid-cols-2 gap-16">
                      <div className="floating-character text-center">
                        <RectangleGoggles className="h-14 w-14 text-estuary-teal mb-2 mx-auto" />
                        <p className="text-lg text-estuary-text font-semibold">XR/AR</p>
                      </div>
                      <div className="floating-character text-center">
                        <Smartphone className="h-14 w-14 text-estuary-teal mb-2 mx-auto" />
                        <p className="text-lg text-estuary-text font-semibold">Mobile</p>
                      </div>
                      <div className="floating-character text-center">
                        <Laptop className="h-14 w-14 text-estuary-teal mb-2 mx-auto" />
                        <p className="text-lg text-estuary-text font-semibold">Laptop</p>
                      </div>
                      <div className="floating-character text-center">
                        <Glasses className="h-14 w-14 text-estuary-teal mb-2 mx-auto" />
                        <p className="text-lg text-estuary-text font-semibold">Smart Glasses</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="relative section-sage">
        {/* Wave divider */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          width="100%"
          height="120"
          style={{ transform: 'rotate(180deg)', display: 'block', marginTop: '-1px' }}
          preserveAspectRatio="none"
        >
          <path fill="#fef5e7" fill-opacity="1" d="M0,128L34.3,128C68.6,128,137,128,206,112C274.3,96,343,64,411,90.7C480,117,549,203,617,224C685.7,245,754,203,823,186.7C891.4,171,960,181,1029,208C1097.1,235,1166,277,1234,266.7C1302.9,256,1371,192,1406,160L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
        </svg>
        <div className="max-w-4xl mx-auto text-center py-20 px-4">
          <div className="scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-medium text-estuary-text mb-6 font-fredoka">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-estuary-sage mb-12 max-w-2xl mx-auto">
              Download Estuary today and start building your private AI. Available on Mac and PC.
            </p>
            
            <Card className="bg-white/50 backdrop-blur-sm rounded-xl shadow-xl">
              <CardContent className="p-8">
                <div className="flex flex-col gap-6 justify-center items-center">
                  <div className="relative">
                    <Button 
                      size="lg"
                      className="bg-estuary-teal hover:bg-estuary-teal-dark text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center group opacity-60 cursor-not-allowed"
                      disabled
                    >
                      <Download className="h-6 w-6 mr-3 group-hover:animate-bounce" />
                      <span className="text-lg font-semibold">
                        Download for {os === "mac" ? "macOS" : os === "windows" ? "Windows" : "your OS"}
                      </span>
                    </Button>
                    <div className="absolute -top-2 -right-2 bg-estuary-sage text-white text-xs font-semibold px-2 py-1 rounded-full shadow-lg border border-white/20">
                      Coming Soon
                    </div>
                  </div>
                </div>
                <div className="text-left mt-6 text-estuary-sage">
                  <p className="font-semibold mb-2">Recommended System Specs:</p>
                  <ul className="list-disc list-inside">
                    <li>OS: Windows 10+ or macOS 12+</li>
                    <li>VRAM: 8GB+ (Windows) or 16GB+ unified memory (macOS)</li>
                    <li>CPU: x64 (Intel/AMD) or Apple Silicon (M1+)</li>
                    <li>Disk Space: 10GB+</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative section-cream">
        {/* Wave divider */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          width="100%"
          height="120"
          style={{ transform: 'rotate(180deg)', display: 'block', marginTop: '-1px' }}
          preserveAspectRatio="none"
        >
          <path fill="#d9d4bb" fillOpacity="1" d="M0,64L40,106.7C80,149,160,235,240,250.7C320,267,400,213,480,165.3C560,117,640,75,720,80C800,85,880,139,960,160C1040,181,1120,171,1200,154.7C1280,139,1360,117,1400,106.7L1440,96L1440,340L1400,340C1360,340,1280,340,1200,340C1120,340,1040,340,960,340C880,340,800,340,720,340C640,340,560,340,480,340C400,340,320,340,240,340C160,340,80,340,40,340L0,340Z" />
        </svg>
        <div className="max-w-6xl mx-auto py-12 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <EstuaryLogoHeader />
              <span className="text-xl font-medium font-fredoka text-estuary-text">Estuary</span>
            </div>
            
            <div className="flex space-x-6 text-estuary-sage">
              <a href="#" className="hover:text-estuary-teal transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-estuary-teal transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-estuary-teal transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-estuary-sage/20">
            <p className="text-estuary-sage">
              © 2025 Estuary. You Data. Your Device. Your AI.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
