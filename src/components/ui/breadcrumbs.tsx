import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Add structured data for breadcrumbs
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://jethrosolutions.netlify.app${item.href}`
    }))
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <nav className="flex items-center space-x-1 text-sm text-muted-foreground" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-1">
          <li>
            <Link
              to="/"
              className="flex items-center hover:text-foreground transition-colors"
            >
              <Home className="h-4 w-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center">
              <ChevronRight className="h-4 w-4" />
              <Link
                to={item.href}
                className={`ml-1 hover:text-foreground transition-colors ${
                  index === items.length - 1 ? "text-foreground font-medium" : ""
                }`}
                aria-current={index === items.length - 1 ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
} 