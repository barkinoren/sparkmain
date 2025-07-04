import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const Index = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    hearAboutUs: "",
    newsletter: true,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLogosVisible, setIsLogosVisible] = useState(false);
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLogosVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (logosRef.current) {
      observer.observe(logosRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Demo request submitted:", formData);
    toast.success("Thank you! We'll be in touch within 24 hours.");
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
        <div className="max-w-lg mx-auto text-center text-white space-y-6">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto">
            <img
              src="/lovable-uploads/6599fa57-966c-4934-8890-aad65967a43f.png"
              alt="Playable Factory"
              className="w-8 h-8"
            />
          </div>
          <h1 className="text-3xl font-bold">Thank You!</h1>
          <p className="text-slate-300 text-lg">
            We've received your request and will be in touch within 24 hours to
            schedule your demo.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-8 py-12 lg:py-16 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start max-w-6xl mx-auto">
          {/* Left Column - Hero */}
          <div className="space-y-12 text-white lg:pr-6">
           

            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Create Playables That Perform
              </h1>
              <p className="text-2xl lg:text-3xl text-white leading-relaxed">
                Generate stunning, high-impact interactive ads.
              </p>
            </div>

            <div className="space-y-12">
              <div className="text-lg text-white">
                Trusted by 400+ companies worldwide
              </div>
              <div 
                ref={logosRef}
                className={`space-y-12 transition-all duration-1000 ease-out ${
                  isLogosVisible 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-8'
                }`}
              >
              <div className={`grid grid-cols-3 gap-6 items-center pt-8 transition-all duration-1000 ease-out ${
                isLogosVisible 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-12'
              }`} style={{ transitionDelay: isLogosVisible ? '200ms' : '0ms' }}>
                <div className="flex items-center justify-center h-12">
                  <img
                    src="/lovable-uploads/85635f9e-929a-4117-9ef9-2ce5b1507d88.png"
                    alt="McDonald's"
                    className="h-5 w-auto filter brightness-0 invert"
                  />
                </div>
                <div className="flex items-center justify-center h-12">
                  <img
                    src="/lovable-uploads/miniclip1.png"
                    alt="MiniClip"
                    className="h-5 w-auto filter brightness-0 invert mx-2"
                    


                  />
                </div>
                <div className="flex items-center justify-center h-12">
                  <img
                    src="/lovable-uploads/a78883a7-a800-469e-87a7-95ffa64d1dc4.png"
                    alt="Rovio"
                    className="h-8 w-auto filter brightness-0 invert"
                  />
                </div>
              </div>
              <div className={`grid grid-cols-2 gap-1 items-center max-w-xs ml-0 mt-12 transition-all duration-1000 ease-out ${
                isLogosVisible 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-12'
              }`} style={{ transitionDelay: isLogosVisible ? '400ms' : '0ms' }}>
                <div className="flex items-center justify-center h-12">
                  <img
                    src="/lovable-uploads/087297e8-61a8-4f13-bc9f-790f74bcd530.png"
                    alt="Supercell"
                    className="h-20 w-auto filter brightness-0 invert"
                  />
                </div>
                <div className="flex items-center justify-center h-12">
                  <img
                    src="/lovable-uploads/70cfa843-1b7b-4764-815f-206f0430617f.png"
                    alt="Zynga"
                    className="h-8 w-auto filter brightness-0 invert"
                  />
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:pl-12">
            <Card className="shadow-2xl border-0 bg-white">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center space-y-3">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Request a Demo
                    </h2>
                    <p className="text-gray-600 text-base">
                      Get started with interactive ads today
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700"
                      >
                        Email <span className="text-orange-600">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="yourname@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        required
                        className="h-11 border-gray-200 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="message"
                        className="text-sm font-medium text-gray-700"
                      >
                        Your Message (optional)
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project or any specific requirements"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            message: e.target.value,
                          }))
                        }
                        className="min-h-[80px] border-gray-200 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="hearAboutUs"
                        className="text-sm font-medium text-gray-700"
                      >
                        How did you hear about us?{" "}
                        <span className="text-orange-600">*</span>
                      </Label>
                      <Textarea
                        id="hearAboutUs"
                        placeholder="Let us know how you discovered Playable Factory"
                        value={formData.hearAboutUs}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            hearAboutUs: e.target.value,
                          }))
                        }
                        className="min-h-[80px] border-gray-200 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>

                    <div className="flex items-center space-x-2.5">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) =>
                          setFormData((prev) => ({
                            ...prev,
                            newsletter: checked as boolean,
                          }))
                        }
                        className="data-[state=checked]:bg-orange-600 data-[state=checked]:border-orange-600"
                      />
                      <Label
                        htmlFor="newsletter"
                        className="text-sm text-gray-700"
                      >
                        Keep me updated with newsletter and product updates
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 text-base transition-all duration-200 transform hover:scale-[1.02] h-12"
                    >
                      Submit Now
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
