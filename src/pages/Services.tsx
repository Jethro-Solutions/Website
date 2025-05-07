import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesComponent from "../components/Services";
import { Breadcrumbs } from "../components/ui/breadcrumbs";

export default function Services() {
  const breadcrumbItems = [
    { label: "Services", href: "/services" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />
        <ServicesComponent />
      </main>
      <Footer />
    </div>
  );
} 