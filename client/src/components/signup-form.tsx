import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle } from "lucide-react";

interface SignupFormProps {
  variant?: "default" | "footer";
  className?: string;
}

export function SignupForm({ variant = "default", className = "" }: SignupFormProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwOw2vV8wAIyu8-R_PwziyUgY_ZQLp2lxKk6AbPLMB5IOZlz6cSyFhj9AKZwmWPzrnBTg/exec', {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          email: email,
          source: 'website'
        })
      });

      // Since we're using no-cors mode, we can't read the response
      // But the request will still be sent to your Google Apps Script
      setIsSubmitted(true);
      setEmail("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`text-center ${className}`}>
        <div className="flex items-center justify-center mb-4">
          <CheckCircle className="h-8 w-8 text-estuary-teal" />
        </div>
        <p className="text-md text-estuary-text">
          Thanks for signing up! Stay tuned for updates!
        </p>
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <div className={`${className}`}>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 border-estuary-sage/30 focus:border-estuary-teal focus:ring-estuary-teal/20"
            required
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-estuary-teal hover:bg-estuary-teal-dark text-white px-6 py-2 rounded-lg font-medium transition-all"
          >
            {isSubmitting ? "..." : "Sign Up"}
          </Button>
        </form>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
    );
  }

  return (
    <>  
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 border-estuary-sage/30 focus:border-estuary-teal focus:ring-estuary-teal/20 md:!text-lg"
            required
            />
            <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-estuary-teal hover:bg-estuary-teal-dark text-white px-6 py-3 rounded-lg font-medium transition-all text-md"
            >
            {isSubmitting ? "Signing up..." : "Join the Waitlist!"}
            </Button>
        </form>
        {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
    </>
  );
}
