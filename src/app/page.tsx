import BaseLayout from "./components/layout/base-layout";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ui/service-card";
import { Testimonial } from "@/components/ui/testimonial";
import { BarChart3, Shield, Cpu, Code, ArrowRight, Zap, Lock, Brain, MessagesSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import { GlowBorder } from "@/components/animations/hover-effects";
import HeroAnimation from "@/components/hero/hero-animation";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { 
  FadeInSection, 
  ParallaxSection, 
  ScaleFade, 
  ScrollOpacity, 
  RevealText, 
  Rotate3D, 
  StaggeredChildren 
} from "@/components/animations";

export default function Home() {
  return (
    <BaseLayout>
      {/* Hero Section */}
      <section className="relative bg-black text-soft-white overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <HeroAnimation />
        </div>
        <div className="relative z-10 py-24 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <ScaleFade delay={0.3} duration={0.7} initialScale={0.9}>
            <TextShimmer as="h1" className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-6" duration={3} spread={3}>
              Jethro Solutions
            </TextShimmer>
            <RevealText 
              text="Empowering forward-facing financial institutions with cutting-edge technology and data-driven insights"
              className="text-xl md:text-2xl font-mono text-muted-foreground mb-12 max-w-3xl"
            />
            
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 mb-16">
              <GlowBorder glowColor="rgba(37, 99, 235, 0.7)" hoverScale={1.03}>
                <Button 
                  variant="solid-blue" 
                  size="lg" 
                  className="w-full sm:w-auto min-w-[180px] justify-center font-medium"
                  icon={<ArrowRight className="size-4" />}
                  iconPosition="right"
                >
                  Explore Solutions
                </Button>
              </GlowBorder>
              
              <GlowBorder glowColor="rgba(37, 99, 235, 0.6)" hoverScale={1.03}>
                <Button 
                  variant="glass" 
                  size="lg"
                  className="w-full sm:w-auto min-w-[180px] justify-center font-medium"
                  icon={<MessagesSquare className="size-4" />}
                  iconPosition="right"
                >
                  Request a Demo
                </Button>
              </GlowBorder>
            </div>
          </ScaleFade>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 px-4 md:px-8 lg:px-12 bg-soft-white">
        <div className="max-w-7xl mx-auto">
          <FadeInSection direction="up" threshold={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <RevealText 
                  text="About Jethro Solutions"
                  className="text-3xl md:text-4xl font-serif font-bold mb-6"
                />
                <ScrollOpacity className="text-lg mb-6">
                  <p>
                    Jethro Solutions is a pioneering financial technology provider specializing in advanced data analytics, 
                    AI-powered trading platforms, and comprehensive risk management systems.
                  </p>
                </ScrollOpacity>
                <ScrollOpacity className="text-lg mb-8" startPercentage={0.3} endPercentage={0.8}>
                  <p>
                    With a team of expert engineers and financial analysts, we develop tailored solutions that help 
                    financial institutions navigate complex markets, make data-driven decisions, and stay ahead 
                    of technological innovation.
                  </p>
                </ScrollOpacity>
                <GlowBorder glowColor="rgba(37, 99, 235, 0.6)" hoverScale={1.03}>
                  <Button 
                    variant="glass" 
                    size="lg" 
                    className="justify-center font-medium text-slate-800"
                    icon={<ArrowRight className="size-4" />}
                    iconPosition="right"
                  >
                    Our Story
                  </Button>
                </GlowBorder>
              </div>
              <Rotate3D className="bg-soft-tan p-8 rounded-lg" maxRotation={5}>
                <h3 className="text-2xl font-serif font-bold mb-4">Our Mission</h3>
                <p className="text-lg font-medium italic mb-8">
                  &quot;To empower financial institutions with technology that transforms data into strategic advantage and 
                  enables confident decision-making in a rapidly evolving landscape.&quot;
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="size-2 rounded-full bg-soft-black"></div>
                    <p className="font-medium">Innovation-driven solutions</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="size-2 rounded-full bg-soft-black"></div>
                    <p className="font-medium">Expert financial analysis</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="size-2 rounded-full bg-soft-black"></div>
                    <p className="font-medium">Secure and reliable technology</p>
                  </div>
                </div>
              </Rotate3D>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-24 px-4 md:px-8 lg:px-12 bg-soft-black text-soft-white">
        <div className="max-w-7xl mx-auto">
          <ParallaxSection direction="up" speed={0.3} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-center">Our Solutions</h2>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Comprehensive financial technology solutions tailored to your specific business needs and challenges
            </p>
          </ParallaxSection>
          
          <StaggeredChildren staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Financial Data Analysis"
              description="Advanced data analysis solutions powered by AI to extract actionable insights from complex financial datasets."
              icon={<BarChart3 className="size-12" />}
              ctaHref="/services/financial-data-analysis"
            />
            <ServiceCard
              title="Risk Management Systems"
              description="Comprehensive risk assessment and management tools to protect investments and ensure regulatory compliance."
              icon={<Shield className="size-12" />}
              ctaHref="/services/risk-management"
            />
            <ServiceCard
              title="AI Trading Solutions"
              description="Next-generation trading platforms enhanced with artificial intelligence for optimized decision-making."
              icon={<Cpu className="size-12" />}
              ctaHref="/services/ai-trading"
            />
            <ServiceCard
              title="Custom Financial Software"
              description="Bespoke software development for financial institutions with specific requirements and unique challenges."
              icon={<Code className="size-12" />}
              ctaHref="/services/custom-software"
            />
          </StaggeredChildren>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 md:px-8 lg:px-12 bg-soft-tan">
        <div className="max-w-7xl mx-auto">
          <ScrollOpacity className="mb-16" startPercentage={0.1} endPercentage={0.4}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-center">Why Choose Jethro Solutions</h2>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Our unique approach combines financial expertise with cutting-edge technology to deliver exceptional results
            </p>
          </ScrollOpacity>
          
          <ScaleFade staggerChildren={true} staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-8 border-none shadow-lg">
                <Zap className="size-12 mb-4 text-soft-black" />
                <h3 className="text-xl font-serif font-bold mb-3">Rapid Implementation</h3>
                <p>Our solutions are designed for quick deployment with minimal disruption to your existing systems.</p>
              </Card>
              
              <Card className="p-8 border-none shadow-lg">
                <Lock className="size-12 mb-4 text-soft-black" />
                <h3 className="text-xl font-serif font-bold mb-3">Enterprise Security</h3>
                <p>Bank-grade security protocols and compliance with industry regulations to protect sensitive financial data.</p>
              </Card>
              
              <Card className="p-8 border-none shadow-lg">
                <Brain className="size-12 mb-4 text-soft-black" />
                <h3 className="text-xl font-serif font-bold mb-3">Advanced AI Integration</h3>
                <p>Cutting-edge artificial intelligence technologies that adapt to market changes and improve over time.</p>
              </Card>
              
              <Card className="p-8 border-none shadow-lg">
                <BarChart3 className="size-12 mb-4 text-soft-black" />
                <h3 className="text-xl font-serif font-bold mb-3">Data-Driven Insights</h3>
                <p>Transform complex financial data into clear, actionable insights that drive strategic decision-making.</p>
              </Card>
              
              <Card className="p-8 border-none shadow-lg col-span-1 md:col-span-2 lg:col-span-2">
                <h3 className="text-xl font-serif font-bold mb-3">Industry Expertise</h3>
                <p className="mb-4">Our team combines decades of experience in both finance and technology.</p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-soft-black"></div>
                    <p>Investment Banking</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-soft-black"></div>
                    <p>Asset Management</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-soft-black"></div>
                    <p>Hedge Funds</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-soft-black"></div>
                    <p>Fintech Innovation</p>
                  </div>
                </div>
              </Card>
            </div>
          </ScaleFade>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 md:px-8 lg:px-12 bg-soft-white">
        <div className="max-w-7xl mx-auto">
          <ParallaxSection direction="up" speed={0.2}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-center">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Testimonial
                quote="Jethro Solutions transformed our financial analytics capabilities. Their expertise in AI and finance is unmatched in the industry."
                author="Sarah Johnson"
                role="CTO"
                company="Global Finance Partners"
                variant="featured"
              />
              <Testimonial
                quote="The risk management system developed by Jethro has been instrumental in navigating volatile markets with confidence."
                author="Michael Chen"
                role="Investment Director"
                company="Eastwood Capital"
              />
            </div>
            <div className="mt-8">
              <Testimonial
                quote="Working with Jethro Solutions has given us a competitive edge. Their custom trading platform has increased our efficiency by 40% while reducing operational costs."
                author="Elena Rodriguez"
                role="Head of Trading Operations"
                company="Meridian Securities"
              />
            </div>
          </ParallaxSection>
        </div>
      </section>

      {/* Contact/Demo Request Section */}
      <section className="py-24 px-4 md:px-8 lg:px-12 bg-soft-black text-soft-white">
        <div className="max-w-7xl mx-auto">
          <ScaleFade delay={0.2} initialScale={0.95}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <RevealText 
                  text="Ready to Transform Your Financial Technology?"
                  className="text-3xl md:text-4xl font-serif font-bold mb-6"
                />
                <p className="text-lg mb-6">
                  Schedule a personalized demonstration to see how our solutions can address your specific challenges and opportunities.
                </p>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="size-2 rounded-full bg-soft-tan"></div>
                    <p>Customized demonstration of relevant solutions</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="size-2 rounded-full bg-soft-tan"></div>
                    <p>Assessment of your current technology setup</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="size-2 rounded-full bg-soft-tan"></div>
                    <p>Clear pricing and implementation roadmap</p>
                  </li>
                </ul>
                <GlowBorder glowColor="rgba(37, 99, 235, 0.7)" hoverScale={1.03}>
                  <Button 
                    variant="glass" 
                    size="lg"
                    className="min-w-[180px] justify-center font-medium"
                    icon={<MessagesSquare className="size-4" />}
                    iconPosition="right"
                  >
                    Request Demo
                  </Button>
                </GlowBorder>
              </div>
              
              <div className="bg-soft-white bg-opacity-10 p-8 rounded-lg">
                <h3 className="text-2xl font-serif font-bold mb-6">Contact Us</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block mb-2 font-medium">Name</label>
                    <input 
                      type="text" 
                      className="w-full p-3 bg-transparent border border-soft-tan/30 rounded-md focus:outline-none focus:ring-1 focus:ring-soft-tan/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-3 bg-transparent border border-soft-tan/30 rounded-md focus:outline-none focus:ring-1 focus:ring-soft-tan/50"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Message</label>
                    <textarea 
                      className="w-full p-3 bg-transparent border border-soft-tan/30 rounded-md focus:outline-none focus:ring-1 focus:ring-soft-tan/50 min-h-24"
                      placeholder="Tell us about your needs"
                    ></textarea>
                  </div>
                  <GlowBorder glowColor="rgba(37, 99, 235, 0.7)" hoverScale={1.03}>
                    <Button 
                      variant="glass" 
                      size="lg"
                      className="w-full justify-center font-medium"
                      icon={<ArrowRight className="size-4" />}
                      iconPosition="right"
                    >
                      Send Message
                    </Button>
                  </GlowBorder>
                </div>
              </div>
            </div>
          </ScaleFade>
        </div>
      </section>
    </BaseLayout>
  );
}
