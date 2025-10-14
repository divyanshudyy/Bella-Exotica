import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoadingScreen from "./components/ui/LoadingScreen";

const RouteLoader = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show loading immediately on route change
    setLoading(true);

    // Give React.lazy a chance to load the chunk
    const timer = setTimeout(() => setLoading(false), 300); // tweak duration if needed

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return loading ? <LoadingScreen /> : children;
};

export default RouteLoader;
