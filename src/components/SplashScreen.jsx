import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../App.css";  // updated path

function SplashScreen() {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);

  // Animation delay
  useEffect(() => {
    setTimeout(() => setShowButton(true), 2000); // 2 sec delay
  }, []);

  return (
    <div className="splash-container">
      <h1 className="splash-title">🎓 University App</h1>
      <p className="splash-subtitle">Welcome to Student Registration Portal</p>
      
      {showButton && (
        <button className="splash-btn" onClick={() => navigate("/register")}>
          Register Now
        </button>
      )}
    </div>
  );
}

export default SplashScreen;
