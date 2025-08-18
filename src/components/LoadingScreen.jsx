import { useEffect, useState } from "react";
import "../styles/loadingScreen.css";
// import loadingImage from "../images/logo-loading.jpg";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="loading-screen">
      <div className="loading-content">
        {/* <img src={loadingImage} alt="Loading" className="loading-logo" /> */}
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
