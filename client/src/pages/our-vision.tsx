import { useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Lightbulb, 
  Telescope, 
  History,
  Sparkles,
  Globe,
  Users
} from "lucide-react";


export default function Vision() {
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

      {/* What's in a Name Section */}
      <section className="relative section-cream min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto py-8 px-4 -mt-40 scroll-reveal">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-estuary-teal rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-estuary-text mb-6 font-fredoka">
              What's in a Name?
            </h2>
          </div>
          
          <Card className="bg-white/50 backdrop-blur-sm rounded-xl shadow-lg">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-medium text-estuary-text mb-6 font-fredoka">
                    Where Rivers Meet the Ocean
                  </h3>
                  <p className="text-lg text-estuary-sage leading-relaxed mb-6">
                    An estuary is where rivers meet the vast ocean - a place of convergence
                    and new possibilities. It is also the nursery for nearly four-fifths
                    of the world's oceanic fish and shellfish.
                  </p>
                  <p className="text-lg text-estuary-sage leading-relaxed mb-6">
                    Just as an estuary is a place of convergence, Estuary seeks to combine the
                    most cutting-edge streams of AI research and innovations into creating a
                    platform for building and running lifelike AI agents and companions.
                  </p>
                  <p className="text-lg text-estuary-sage leading-relaxed">
                    Similar to how estuaries are nursuries for the ocean's young, our mission 
                    is to cultivate advanced AI agents that continually grow with you and with
                    each advancement in AI technology. Estuary is a safe harbor - a protected 
                    space where your data and privacy are preserved.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Vision for the Future Section */}
      <section className="relative section-sage">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          width="100%"
          height="120"
          style={{ transform: 'rotate(180deg)', display: 'block', marginTop: '-1px' }}
          preserveAspectRatio="none"
        >
          <path fill="#fef5e7" fillOpacity="1" d="M0,96L18.5,133.3C36.9,171,74,245,111,240C147.7,235,185,149,222,149.3C258.5,149,295,235,332,229.3C369.2,224,406,128,443,117.3C480,107,517,181,554,213.3C590.8,245,628,235,665,197.3C701.5,160,738,96,775,85.3C812.3,75,849,117,886,133.3C923.1,149,960,139,997,133.3C1033.8,128,1071,128,1108,133.3C1144.6,139,1182,149,1218,170.7C1255.4,192,1292,224,1329,202.7C1366.2,181,1403,107,1422,69.3L1440,32L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z" />
        </svg>
        <div className="max-w-6xl mx-auto py-20 px-4">
          <div className="text-center mb-16 scroll-reveal">
            <div className="w-20 h-20 bg-estuary-teal rounded-full flex items-center justify-center mx-auto mb-6">
              <Telescope className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-estuary-text mb-6 font-fredoka">
              Our Vision for the Future
            </h2>
            <p className="text-xl text-estuary-sage max-w-3xl mx-auto">
              Envisioning a world where AI enhances human potential without compromising privacy
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="scroll-reveal bg-white/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-estuary-teal rounded-xl flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-medium text-estuary-text mb-4 font-fredoka">Democratized AI</h3>
                <p className="text-estuary-sage leading-relaxed">
                  We envision a future where powerful AI technology is accessible to everyone, not just 
                  large corporations. Every individual should have the ability to create and customize 
                  their own AI companions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="scroll-reveal bg-white/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-estuary-teal rounded-xl flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-medium text-estuary-text mb-4 font-fredoka">Privacy-First</h3>
                <p className="text-estuary-sage leading-relaxed">
                  A world where AI can understand and assist without surveillance. Your conversations, 
                  memories, and personal data remain yours alone, processed locally on your own devices.
                </p>
              </CardContent>
            </Card>
            
            <Card className="scroll-reveal bg-white/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-estuary-teal rounded-xl flex items-center justify-center mb-6">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-medium text-estuary-text mb-4 font-fredoka">Embodied Intelligence</h3>
                <p className="text-estuary-sage leading-relaxed">
                  AI that understands context, space, and human experience. Agents that can see, hear, 
                  and interact with the world around them, making technology feel more natural and intuitive.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company History Section */}
      <section className="relative section-cream">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          width="100%"
          height="120"
          style={{ transform: 'rotate(180deg)', display: 'block', marginTop: '-1px' }}
          preserveAspectRatio="none"
        >
          <path fill="#d9d4bb" fillOpacity="1" d="M0,128L34.3,128C68.6,128,137,128,206,112C274.3,96,343,64,411,90.7C480,117,549,203,617,224C685.7,245,754,203,823,186.7C891.4,171,960,181,1029,208C1097.1,235,1166,277,1234,266.7C1302.9,256,1371,192,1406,160L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
        </svg>
        <div className="max-w-6xl mx-auto py-20 px-4">
          <div className="text-center mb-16 scroll-reveal">
            <div className="w-20 h-20 bg-estuary-teal rounded-full flex items-center justify-center mx-auto mb-6">
              <History className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-estuary-text mb-6 font-fredoka">
              Our History
            </h2>
            <p className="text-xl text-estuary-sage max-w-3xl mx-auto">
              From humble beginnings to pioneering the future of private, embodied AI.
            </p>
          </div>
          
          <div className="space-y-12">
            <Card className="scroll-reveal bg-white/50 backdrop-blur-sm rounded-xl shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-estuary-teal rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-white">2023</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-estuary-text mb-4 font-fredoka">The Beginning</h3>
                    <p className="text-lg text-estuary-sage leading-relaxed">
                      Estuary was founded with a simple yet powerful vision: to make AI technology 
                      accessible to everyone while preserving the fundamental right to privacy. 
                      Our founders recognized that the future of AI shouldn't come at the cost of 
                      personal autonomy.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="scroll-reveal bg-white/50 backdrop-blur-sm rounded-xl shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-estuary-teal rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-white">2024</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-estuary-text mb-4 font-fredoka">Building the Foundation</h3>
                    <p className="text-lg text-estuary-sage leading-relaxed">
                      We assembled a team of passionate engineers, researchers, and designers who 
                      shared our vision. Together, we began developing the core technology that 
                      would power private, embodied AI agents capable of running entirely on 
                      personal devices.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="scroll-reveal bg-white/50 backdrop-blur-sm rounded-xl shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-estuary-teal rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-white">2025</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-estuary-text mb-4 font-fredoka">Looking Forward</h3>
                    <p className="text-lg text-estuary-sage leading-relaxed">
                      As we prepare to launch our platform, we're excited to bring our vision to life. 
                      We're building not just a product, but a movement towards a more private, 
                      more personal, and more human-centered future of AI technology.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative section-cream">
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
        <div className="max-w-6xl mx-auto py-12 px-4">
          <div className="text-center">
            <p className="text-estuary-sage">
              © 2025 Estuary - Your Data. Your Device. Your AI.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 