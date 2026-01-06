import { useEffect, useRef } from "react";
import gsap from "gsap";

const GsapBasics = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    if (!boxRef.current) return; // Safety check

    gsap.to(boxRef.current, {
      x: 300,
      rotation: 360,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <div
        ref={boxRef}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "red",
          borderRadius: "16px",
        }}
      />
    </div>
  );
};

export default GsapBasics;

