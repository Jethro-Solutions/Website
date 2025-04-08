import { GeometricBackground } from '@/components/background';

export default function GeometricBackgroundDemo() {
  return (
    <main className="flex flex-col min-h-screen">
      <h1 className="text-3xl font-serif text-center py-8">Geometric Background Demo</h1>
      
      {/* Default height */}
      <section className="py-4">
        <h2 className="text-xl font-mono mb-4 px-4">Default Height (40vh)</h2>
        <GeometricBackground />
      </section>
      
      {/* Full screen version */}
      <section className="py-4">
        <h2 className="text-xl font-mono mb-4 px-4">Full Height (80vh)</h2>
        <GeometricBackground className="w-full h-[80vh]" />
      </section>
    </main>
  );
} 