import { useEffect } from "react";
import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import AboutUs from "@/pages/about-us";
import NotFound from "@/pages/not-found";
import { initGA } from "@/utils/analytics";
import { usePageTracking } from "@/hooks/usePageTracking";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutUs} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Track page views
  usePageTracking();

  useEffect(() => {
    // Initialize Google Analytics
    initGA();
  }, []);

  return (
    <TooltipProvider>
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

export default App;
