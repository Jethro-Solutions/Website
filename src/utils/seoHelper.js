const cdnConfig = require('./cdnConfig');

class SEOHelper {
  generateProductStructuredData(product) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      description: product.description,
      image: cdnConfig.getImageUrl(product.imagePath, { width: 1200 }),
      brand: {
        '@type': 'Brand',
        name: product.brand || 'Your Brand'
      },
      offers: {
        '@type': 'Offer',
        price: product.price,
        priceCurrency: product.currency || 'USD',
        availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock'
      }
    };
  }

  generateMetaTags(product) {
    return {
      title: `${product.name} | Your Brand`,
      description: product.description,
      og: {
        title: product.name,
        description: product.description,
        image: cdnConfig.getImageUrl(product.imagePath, { width: 1200 }),
        type: 'product'
      },
      twitter: {
        card: 'summary_large_image',
        title: product.name,
        description: product.description,
        image: cdnConfig.getImageUrl(product.imagePath, { width: 1200 })
      }
    };
  }

  generateCanonicalUrl(product) {
    return `${process.env.BASE_URL}/products/${product.slug}`;
  }

  generateBreadcrumbs(product) {
    return [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: process.env.BASE_URL
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Products',
        item: `${process.env.BASE_URL}/products`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.name,
        item: this.generateCanonicalUrl(product)
      }
    ];
  }
}

module.exports = new SEOHelper(); 