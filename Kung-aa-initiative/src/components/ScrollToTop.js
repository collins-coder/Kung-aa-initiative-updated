import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls the window to the top every time the route changes.
 * This fixes the common SPA issue where navigating to a new page
 * (e.g. clicking a footer link) leaves the scroll position wherever
 * it was on the previous page instead of starting at the top.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

export default ScrollToTop;