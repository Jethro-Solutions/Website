import Header from './Header';
import Footer from './Footer';
import PageTransition from './PageTransition';
import { pageTransitionVariants } from './PageTransition';

interface MainLayoutProps {
  children: React.ReactNode;
  transitionType?: keyof typeof pageTransitionVariants;
}

const MainLayout = ({ 
  children,
  transitionType = 'fade' 
}: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">
        <PageTransition transitionType={transitionType}>
          {children}
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout; 