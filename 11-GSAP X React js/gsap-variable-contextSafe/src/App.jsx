import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";

const App = () => {
  const [xMove, setxMove] = useState(0);
  const boxRef = useRef(null);

  const random = gsap.utils.random(-500,500,100)

  function animate(){
    setxMove(xMove + 100);    
  }

  useGSAP(() => {
    gsap.to(boxRef.current, { x: random, duration: 1 });
  },[xMove]);
  return (
    <main>
      <button onClick={animate}>Animate Box</button>
      <div ref={boxRef} className="box"></div>
    </main>
  );
};

export default App;
