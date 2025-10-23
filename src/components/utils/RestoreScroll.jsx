import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const RestoreScroll = ({ loading = false }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top only when loading is finished
    if (!loading) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [pathname, loading]);

  return null;
};

export default RestoreScroll;
