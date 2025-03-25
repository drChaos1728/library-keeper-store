
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, Mail, Lock, ArrowRight, Check, Info } from "lucide-react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Password strength variables
  const [passwordFocus, setPasswordFocus] = useState(false);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Password validation checks
  const passwordHasMinLength = password.length >= 8;
  const passwordHasLetter = /[a-zA-Z]/.test(password);
  const passwordHasNumber = /[0-9]/.test(password);
  const passwordHasSpecial = /[!@#$%^&*]/.test(password);
  const passwordsMatch = password === confirmPassword;
  
  const passwordStrength = (() => {
    if (!password) return 0;
    let strength = 0;
    if (passwordHasMinLength) strength++;
    if (passwordHasLetter) strength++;
    if (passwordHasNumber) strength++;
    if (passwordHasSpecial) strength++;
    return strength;
  })();
  
  const getPasswordStrengthLabel = () => {
    if (!password) return "";
    if (passwordStrength === 4) return "Strong";
    if (passwordStrength >= 2) return "Medium";
    return "Weak";
  };
  
  const getPasswordStrengthColor = () => {
    if (!password) return "bg-muted";
    if (passwordStrength === 4) return "bg-green-500";
    if (passwordStrength >= 2) return "bg-amber-500";
    return "bg-red-500";
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!passwordsMatch) {
      alert("Passwords don't match!");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Registration attempt with:", { name, email, password, acceptTerms });
      setIsLoading(false);
      // Would redirect to login or dashboard in a real app
    }, 1500);
  };

  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="container px-4 py-16 mx-auto">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold">Create Your Account</h1>
              <p className="mt-2 text-muted-foreground">
                Join ReadVault to start exploring our library
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <User className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                {/* Password Field */}
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Lock className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onFocus={() => setPasswordFocus(true)}
                      onBlur={() => setPasswordFocus(false)}
                      className="pl-10"
                      required
                    />
                  </div>
                  
                  {/* Password Strength Indicator */}
                  {password && (
                    <div className="mt-2">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-muted-foreground">Password Strength</span>
                        <span className={`text-xs ${
                          passwordStrength === 4 ? "text-green-600" : 
                          passwordStrength >= 2 ? "text-amber-600" : 
                          "text-red-600"
                        }`}>
                          {getPasswordStrengthLabel()}
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${getPasswordStrengthColor()} transition-all duration-300 ease-out`}
                          style={{ width: `${(passwordStrength / 4) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  {/* Password Requirements */}
                  {passwordFocus && (
                    <div className="mt-2 p-3 bg-muted/50 border border-border rounded-lg text-xs space-y-1.5 animate-fade-in">
                      <div className="flex items-start">
                        <div className={`flex-shrink-0 mt-0.5 ${passwordHasMinLength ? "text-green-600" : "text-muted-foreground"}`}>
                          {passwordHasMinLength ? (
                            <Check className="h-3.5 w-3.5" />
                          ) : (
                            <Info className="h-3.5 w-3.5" />
                          )}
                        </div>
                        <span className="ml-2">At least 8 characters</span>
                      </div>
                      <div className="flex items-start">
                        <div className={`flex-shrink-0 mt-0.5 ${passwordHasLetter ? "text-green-600" : "text-muted-foreground"}`}>
                          {passwordHasLetter ? (
                            <Check className="h-3.5 w-3.5" />
                          ) : (
                            <Info className="h-3.5 w-3.5" />
                          )}
                        </div>
                        <span className="ml-2">Contains letters</span>
                      </div>
                      <div className="flex items-start">
                        <div className={`flex-shrink-0 mt-0.5 ${passwordHasNumber ? "text-green-600" : "text-muted-foreground"}`}>
                          {passwordHasNumber ? (
                            <Check className="h-3.5 w-3.5" />
                          ) : (
                            <Info className="h-3.5 w-3.5" />
                          )}
                        </div>
                        <span className="ml-2">Contains numbers</span>
                      </div>
                      <div className="flex items-start">
                        <div className={`flex-shrink-0 mt-0.5 ${passwordHasSpecial ? "text-green-600" : "text-muted-foreground"}`}>
                          {passwordHasSpecial ? (
                            <Check className="h-3.5 w-3.5" />
                          ) : (
                            <Info className="h-3.5 w-3.5" />
                          )}
                        </div>
                        <span className="ml-2">Contains special character (!@#$%^&*)</span>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Confirm Password Field */}
                <div className="space-y-2">
                  <label htmlFor="confirm-password" className="text-sm font-medium">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Lock className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className={`pl-10 ${
                        confirmPassword && !passwordsMatch 
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500/10" 
                          : ""
                      }`}
                      required
                    />
                  </div>
                  {confirmPassword && !passwordsMatch && (
                    <p className="text-xs text-red-600 mt-1">Passwords don't match</p>
                  )}
                </div>
                
                {/* Terms Checkbox */}
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      checked={acceptTerms}
                      onChange={() => setAcceptTerms(!acceptTerms)}
                      className="h-4 w-4 rounded border-border text-primary focus:ring-primary/25"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="text-muted-foreground">
                      I agree to the{" "}
                      <Link to="/terms" className="text-primary hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link to="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                </div>
                
                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full rounded-full"
                  disabled={isLoading || !passwordsMatch}
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating Account...
                    </span>
                  ) : (
                    <span>Create Account</span>
                  )}
                </Button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary hover:underline font-medium">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Register;
