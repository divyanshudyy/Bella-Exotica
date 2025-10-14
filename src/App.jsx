import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect, useState } from "react";
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

// Route loader for showing loading screen on every route change
const RouteLoader = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300); // fade duration
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return loading ? <LoadingScreen /> : children;
};

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow w-full">
        <ScrollToTop />
        <RouteLoader>
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/technology" element={<TechnologyPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/b2b" element={<B2BPage />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/loading" element={<LoadingScreen />} />
            </Routes>
          </Suspense>
        </RouteLoader>
      </main>

      <Footer />
    </div>
  );
};

export default App;
