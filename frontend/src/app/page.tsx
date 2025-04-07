import Link from "next/link";
import { HeroSection } from "@/components/features/hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection 
        title="Jethro Solutions"
        subtitle="Innovative technology and financial solutions for forward-thinking businesses"
        primaryButtonText="Explore Services"
        secondaryButtonText="Contact Us"
        demoLinks={[
          { label: "Design System", href: "/design-system" },
          { label: "Icon Animations", href: "/icon-animations" },
          { label: "Loading Animations", href: "/loading-demos" }
        ]}
      />
    </div>
  );
}
