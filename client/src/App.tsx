import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PasswordProtection } from "@/components/password-protection";
import Home from "@/pages/home";
import Team from "@/pages/team";
import Vision from "@/pages/our-vision";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/team" component={Team} />
      <Route path="/vision" component={Vision} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if user is already authenticated
    const authenticated = localStorage.getItem("estuary-authenticated") === "true";
    setIsAuthenticated(authenticated);
  }, []);

  const handlePasswordCorrect = () => {
    setIsAuthenticated(true);
  };

  // Show loading state while checking authentication
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-estuary-cream to-estuary-sage flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-estuary-teal"></div>
      </div>
    );
  }

  // Show password protection if not authenticated
  if (!isAuthenticated) {
    return <PasswordProtection onPasswordCorrect={handlePasswordCorrect} />;
  }

  // Show main app if authenticated
  return (
    <TooltipProvider>
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

export default App;
