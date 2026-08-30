import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useState, useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "leaflet/dist/leaflet.css";
import LoadingScreen from "./components/ui/LoadingScreen";
import RestoreScroll from "./components/utils/RestoreScroll";
import MaintenanceOverlay from "./components/ui/MaintenanceOverlay";
import { UNDER_MAINTENANCE } from "./data/globalConstants";

// Lazy imports
const HomePage = lazy(() => import("./components/pages/HomePage"));
const ProductsPage = lazy(() => import("./components/pages/ProductsPage"));
const TechnologyPage = lazy(() => import("./components/pages/TechnologyPage"));
const AboutPage = lazy(() => import("./components/pages/AboutPage"));
const ContactPage = lazy(() => import("./components/pages/ContactPage"));
const B2BPage = lazy(() => import("./components/pages/B2BPage"));
const NotFound = lazy(() => import("./components/ui/NotFound"));

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Reset loading state on route change
  useEffect(() => {
    setLoading(true);
    const minDuration = 500; // minimum time to show loader
    const timer = setTimeout(() => setLoading(false), minDuration);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (UNDER_MAINTENANCE) {
    return <MaintenanceOverlay />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow w-full">
        {/* Scroll to top after loading finishes */}
        <RestoreScroll loading={loading} />

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
            </Routes>
          )}
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default App;
