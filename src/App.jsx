import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useState, useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "leaflet/dist/leaflet.css";
import LoadingScreen from "./components/ui/LoadingScreen";

// Lazy imports
const HomePage = lazy(() => import("./components/pages/HomePage"));
const ProductsPage = lazy(() => import("./components/pages/ProductsPage"));
const TechnologyPage = lazy(() => import("./components/pages/TechnologyPage"));
const AboutPage = lazy(() => import("./components/pages/AboutPage"));
const ContactPage = lazy(() => import("./components/pages/ContactPage"));
const B2BPage = lazy(() => import("./components/pages/B2BPage"));
const NotFound = lazy(() => import("./components/pages/NotFound"));

// Scroll restoration
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
};

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Reset loading state on route change
  useEffect(() => {
    setLoading(true);

    // Hide loader once page is ready
    const minDuration = 500; // minimum time to show loader
    const timer = setTimeout(() => setLoading(false), minDuration);

    return () => clearTimeout(timer);
  }, [location.pathname]);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow w-full">
        <ScrollToTop />

        <Suspense fallback={<LoadingScreen />}>
          {loading ? (
            <LoadingScreen onAnimationComplete={() => setLoading(false)} />
          ) : (
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/technology" element={<TechnologyPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/b2b" element={<B2BPage />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/loading" element={<LoadingScreen />} />
            </Routes>
          )}
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default App;
