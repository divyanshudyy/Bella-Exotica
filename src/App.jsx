import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ReactLenis } from "lenis/react";
import Header from "./components/layout/Header";
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
    <ReactLenis root>
      <main className="relative z-0 h-auto w-auto bg-[#F2F2F2]">
        <Header />
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
    </ReactLenis>
  );
};

export default App;
