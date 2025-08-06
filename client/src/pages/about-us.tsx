import { useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Lightbulb, 
  Telescope, 
  History,
  Sparkles,
  Globe,
  Users,
  Rocket,
  Microscope,
  PlaneTakeoff,
  MapPin,
  Shield
} from "lucide-react";


export default function AboutUs() {
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
        <div className="max-w-6xl mx-auto px-4 -mt-40 scroll-reveal">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-estuary-teal rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-estuary-text mb-6 font-fredoka">
              What's in a Name?
            </h2>
            {/* <p className="text-xl text-estuary-sage max-w-3xl mx-auto">
            </p> */}
          </div>
          
          <Card className="bg-white/50 backdrop-blur-sm rounded-xl shadow-lg">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-medium text-estuary-text mb-6 font-fredoka">
                    Where Rivers Meet the Ocean
                  </h3>
                  <p className="text-lg text-estuary-sage leading-relaxed mb-6">
                    Just as an estuary is a place where rivers meet the sea, Estuary brings together the most advanced streams of AI research and innovations. Our platform is designed to build and power lifelike AI agents and companions, blending the latest breakthroughs into something truly alive.
                  </p>
                  <p className="text-lg text-estuary-sage leading-relaxed">
                    Estuaries are the cradle of life for nearly four-fifths of the ocean's fish and shellfish. At Estuary, we’re building advanced AI agents that evolve alongside you, keeping pace with every leap in AI technology. Just like the natural estuary, this is a protected refuge where your data and privacy are carefully safeguarded.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Company History Section */}
      <section className="relative section-sage">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          width="100%"
          height="120"
          style={{ transform: 'rotate(180deg)', display: 'block', marginTop: '-1px' }}
          preserveAspectRatio="none"
        >
          <path fill="#fef5e7" fillOpacity="1" d="M0,128L34.3,128C68.6,128,137,128,206,112C274.3,96,343,64,411,90.7C480,117,549,203,617,224C685.7,245,754,203,823,186.7C891.4,171,960,181,1029,208C1097.1,235,1166,277,1234,266.7C1302.9,256,1371,192,1406,160L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
        </svg>
        <div className="max-w-6xl mx-auto px-4 pb-20">
          <div className="text-center mb-16 scroll-reveal">
            <div className="w-20 h-20 bg-estuary-teal rounded-full flex items-center justify-center mx-auto mb-6">
              <History className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-estuary-text mb-6 font-fredoka">
              Our Journey
            </h2>
            <p className="text-xl text-estuary-sage max-w-3xl mx-auto">
              From humble streams to a thriving estuary.
            </p>
          </div>
          
          <div className="space-y-12">
            <Card className="scroll-reveal bg-white/50 backdrop-blur-sm rounded-xl shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-estuary-teal rounded-full flex items-center justify-center flex-shrink-0">
                    <Rocket className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-estuary-text mb-4 font-fredoka">NASA SUITS Challenge • 2022-2023</h3>
                    <p className="text-lg text-estuary-sage leading-relaxed">
                      Estuary has its roots in the <a href="https://www.youtube.com/watch?v=d4mOWeIuvMI&ab_channel=StanleyLin" target="_blank" rel="noopener noreferrer" className="text-estuary-teal hover:text-estuary-teal-dark underline">
                      NASA SUITS Challenge</a>, collaborating with NASA engineers and
                      astronauts to build conversational AI agents integrated with AR heads-up-displays for 
                      astronauts exploring martian and lunar terrain. Our early agents were able to ingest spatial
                      information and verbally respond in real-time to astronauts to boost safety, lessen cognitive
                      load, and improve situational awareness. Through building our system to work in the vacuum of 
                      space with zero-internet, we developed the foundations of our off-cloud spatially-aware 
                      conversational AI agent infrastructure.  
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="scroll-reveal bg-white/50 backdrop-blur-sm rounded-xl shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-estuary-teal rounded-full flex items-center justify-center flex-shrink-0">
                    <Microscope className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-estuary-text mb-4 font-fredoka">Academic Research • 2023-2025</h3>
                    <p className="text-lg text-estuary-sage leading-relaxed">
                      As AI became ubiquitous in everyday life, we realized people would inevitably reveal 
                      their private information when interacting with AI. Undoubtedly, corporations would 
                      collect, sell, and train on our data. Hence, we decided to apply our learnings from 
                      NASA SUITS to develop Estuary as an open-source research platform to run off-cloud 
                                                                    AI agents. We published at <a href="https://arxiv.org/abs/2504.14427" target="_blank" rel="noopener noreferrer" className="text-estuary-teal hover:text-estuary-teal-dark underline">Conference on Human Factors in Computing Systems (CHI'25)</a> and <a href="https://arxiv.org/abs/2410.20116" target="_blank" rel="noopener noreferrer" className="text-estuary-teal hover:text-estuary-teal-dark underline">Intelligent Virtual Agents (IVA'24)</a>, top conferences in the agents field. We also
                                             won the <a href="https://devpost.com/software/paw-pals-connect" target="_blank" rel="noopener noreferrer" className="text-estuary-teal hover:text-estuary-teal-dark underline">Best Use of Apple Vision Pro Award</a> at MIT Reality Hack 2025.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="scroll-reveal bg-white/50 backdrop-blur-sm rounded-xl shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-estuary-teal rounded-full flex items-center justify-center flex-shrink-0">
                    <PlaneTakeoff className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-estuary-text mb-4 font-fredoka">Looking Forward • 2025-present</h3>
                    <p className="text-lg text-estuary-sage leading-relaxed">
                      As we prepare to launch Estuary, we're excited to bring not only our vision 
                      to life, but a movement towards private, embodied AI agents and companions that
                      we truly own.
                      We are currently seeking investment to help us build this future, please reach out
                      if you interested in working with us.
                      Similar to how the mainframe gave way to the personal computer, Estuary is 
                      bringing AI from the cloud and into our devices. You own your data, your device,
                      your AI. Always.
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
          <path fill="#d9d4bb" fillOpacity="1" d="M0,64L40,106.7C80,149,160,235,240,250.7C320,267,400,213,480,165.3C560,117,640,75,720,80C800,85,880,139,960,160C1040,181,1120,171,1200,154.7C1280,139,1360,117,1400,106.7L1440,96L1440,340L1400,340C1360,340,1280,340,1200,340C1120,340,1040,340,960,340C880,340,800,340,720,340C640,340,560,340,480,340C400,340,320,340,240,340C160,340,80,340,40,340L0,340Z" />
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