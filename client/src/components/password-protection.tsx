import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { EstuaryLogo } from "@/components/logo";

interface PasswordProtectionProps {
  onPasswordCorrect: () => void;
}

export function PasswordProtection({ onPasswordCorrect }: PasswordProtectionProps) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // You can change this password to whatever you want
  const correctPassword = "Axiom";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate a small delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));

    if (password === correctPassword) {
      // Store authentication in localStorage so user doesn't have to re-enter password
      localStorage.setItem("estuary-authenticated", "true");
      onPasswordCorrect();
    } else {
      setError("Incorrect password. Please try again.");
      setPassword("");
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-estuary-cream to-estuary-sage flex items-start justify-center p-4 relative overflow-hidden pt-36">
      {/* Swaying Reeds */}
      <div className="reed" style={{ left: '5%', bottom: 0, height: '120px', animationDelay: '0s' }} />
      <div className="reed" style={{ left: '8%', bottom: 0, height: '100px', animationDelay: '-1s' }} />
      <div className="reed" style={{ left: '92%', bottom: 0, height: '140px', animationDelay: '-2s' }} />
      <div className="reed" style={{ left: '95%', bottom: 0, height: '110px', animationDelay: '-0.5s' }} />
      <div className="reed" style={{ left: '15%', bottom: 0, height: '90px', animationDelay: '-1.5s' }} />
      <div className="reed" style={{ left: '85%', bottom: 0, height: '130px', animationDelay: '-0.8s' }} />
      <div className="reed" style={{ left: '25%', bottom: 0, height: '105px', animationDelay: '-1.2s' }} />
      <div className="reed" style={{ left: '75%', bottom: 0, height: '115px', animationDelay: '-0.3s' }} />
      
      <div className="w-full max-w-md relative z-10">
        <Card className="bg-transparent backdrop-blur-sm shadow-none border-0">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center">
              <EstuaryLogo />
            </div>
            <CardTitle className="text-2xl font-medium text-estuary-text font-fredoka">
              Welcome to Estuary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-16 text-lg py-3 border-2 border-estuary-sage/30 focus:border-estuary-teal bg-white/20 backdrop-blur-sm rounded-lg"
                  disabled={isLoading}
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-estuary-sage hover:text-estuary-teal transition-colors p-1"
                    disabled={isLoading}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading || !password.trim()}
                    className="bg-estuary-teal hover:bg-estuary-teal-dark text-white p-2 rounded-md transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isLoading ? (
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    ) : (
                      <ArrowRight className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
              
              {error && (
                <div className="text-red-500 text-sm text-center bg-red-50/50 p-3 rounded-lg border border-red-200/50">
                  {error}
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 