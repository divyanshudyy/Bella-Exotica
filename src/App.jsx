import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ReactLenis } from "lenis/react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "leaflet/dist/leaflet.css";
import {
  HomeSkeleton,
  ProductsSkeleton,
  TechnologySkeleton,
  AboutSkeleton,
  ContactSkeleton,
} from "./components/ui/Skeleton";

const HomePage = lazy(() => import("./components/pages/HomePage"));
const ProductsPage = lazy(() => import("./components/pages/ProductsPage"));
const TechnologyPage = lazy(() => import("./components/pages/TechnologyPage"));
const AboutPage = lazy(() => import("./components/pages/AboutPage"));
const ContactPage = lazy(() => import("./components/pages/ContactPage"));
const NotFound = lazy(() => import("./components/pages/NotFound"));

const App = () => {
  return (
    // 1. Wrap your entire app with ReactLenis and use the 'root' prop
    <ReactLenis root>
      {/* 2. Use a flex layout for robust footer placement */}
      <div className=" flex flex-col">
        <Header />

        {/* The main content area grows to fill available space */}
        <main className="w-full flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<HomeSkeleton />}>
                  <HomePage />
                </Suspense>
              }
            />
            <Route
              path="/products"
              element={
                <Suspense fallback={<ProductsSkeleton />}>
                  <ProductsPage />
                </Suspense>
              }
            />
            <Route
              path="/technology"
              element={
                <Suspense fallback={<TechnologySkeleton />}>
                  <TechnologyPage />
                </Suspense>
              }
            />
            <Route
              path="/about"
              element={
                <Suspense fallback={<AboutSkeleton />}>
                  <AboutPage />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<ContactSkeleton />}>
                  <ContactPage />
                </Suspense>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default App;
