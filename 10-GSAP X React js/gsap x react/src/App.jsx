import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const App = () => {
  const boxRef = useRef();
  const cirRef = useRef();
  //Setting GSAP TimeLine
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.to(boxRef.current, {
      x:1000,
      rotate:360,
      duration:2,
      delay:1,
      borderRadius:"50%"
    })
    tl.to(cirRef.current, {
      x: 1000,
      rotate: 360,
      duration: 2,
      borderRadius: "0%",
    });
  });
  return (
    <>
      <div ref={boxRef} className="box"></div>
      <div ref={cirRef} className="circle"></div>
    </>
  );
};

export default App;
