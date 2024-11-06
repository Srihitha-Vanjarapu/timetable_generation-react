import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  // Automatically navigate to the homepage when the component mounts
  useEffect(() => {
    navigate("/HomePage");
  }, [navigate]);

  return null; // Don't display anything
}

export default PageNotFound;