import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

import { HomeInfo, Loader } from "../components";
import { Bird, Island, Plane, Sky } from "../models";

import sakura from "../assets/sakura.mp3";
import { soundoff, soundon } from "../assets/icons";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(true);
  const [isFirstClicked, setIsFirstClicked] = useState(false);

  useEffect(() => {
    document.addEventListener("click", () => {
      setIsFirstClicked(true);
    });

    if (isFirstClicked) {
      audioRef.current.play();
    }
  }, [isFirstClicked]);

  useEffect(() => {
    const audioCurr = audioRef.current;
    if (isPlayingMusic) {
      audioCurr.play();
    }

    return () => {
      audioCurr.pause();
    };
  }, [isPlayingMusic]);

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">{currentStage && <HomeInfo currentStage={currentStage} />}</div>

      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`} camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island isRotating={isRotating} setIsRotating={setIsRotating} setCurrentStage={setCurrentStage} position={islandPosition} rotation={[0.1, 4.7077, 0]} scale={islandScale} />
          <Plane isRotating={isRotating} position={biplanePosition} rotation={[0, 20.1, 0]} scale={biplaneScale} />
        </Suspense>
      </Canvas>
      <div className="flex">
        <div className="absolute bottom-2 left-2">
          <img src={!isPlayingMusic ? soundoff : soundon} alt="jukebox" onClick={() => setIsPlayingMusic(!isPlayingMusic)} className="w-10 h-10 cursor-pointer object-contain" />
        </div>

        <div className="mx-10 px-5 absolute bottom-2 left-0 right-0 flex items-center justify-center text-center">Hold mouse or press arrow keys left and right to navigate</div>
      </div>
    </section>
  );
};

export default Home;
