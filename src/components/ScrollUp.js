import React, { useEffect, useState } from "react";
import up from "../images/upload.png";

export default function ScrollUp() {
  const [showIcon, setShowIcon] = useState({ display: "none" });
  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setShowIcon({ display: "block" });
    } else {
      setShowIcon({ display: "none" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a className="p-4 rounded-lg bg-blue-600" href="#up" style={showIcon}>
      <img src={up} alt="" />
    </a>
  );
}
