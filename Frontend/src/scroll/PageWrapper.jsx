import { motion as Motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const PageWrapper = ({ children }) => {
  const location = useLocation();

  return (
    <Motion.div
      key={location.pathname} // 🔥 important for route animation
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
    >
      {children}
    </Motion.div>
  );
};

export default PageWrapper;