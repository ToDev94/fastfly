import React, { useEffect, useRef, useState } from "react";

const useElementOnScreen = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);
  }, []);
  return <div>useElementOnScreen</div>;
};

export default useElementOnScreen;
