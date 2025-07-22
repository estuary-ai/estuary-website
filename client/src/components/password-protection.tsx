import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Eye, EyeOff } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-estuary-cream to-estuary-sage flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="bg-white/80 backdrop-blur-sm shadow-2xl border-0">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center">
              <EstuaryLogo />
            </div>
            <CardTitle className="text-2xl font-medium text-estuary-text font-fredoka">
              Welcome to Estuary
            </CardTitle>
            <p className="text-estuary-sage mt-2">
              Amazing things in progress! <br/> Password please for a peak!
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-10 text-lg py-3 border-2 border-estuary-sage/20 focus:border-estuary-teal"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-estuary-sage hover:text-estuary-teal transition-colors"
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              
              {error && (
                <div className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-lg border border-red-200">
                  {error}
                </div>
              )}
              
              <Button
                type="submit"
                className="w-full bg-estuary-teal hover:bg-estuary-teal-dark text-white py-3 text-lg font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg"
                disabled={isLoading || !password.trim()}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Verifying...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Lock className="mr-2 h-5 w-5" />
                    Access Site
                  </div>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 