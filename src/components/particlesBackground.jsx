import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import options from "./config/particleConfig";
import { useEffect, useMemo, useState } from "react";

export default function ParticleBackground() {

	const [init, setInit] = useState(false);

// this should be run only once per application lifetime
useEffect(() => {
  initParticlesEngine(async (engine) => {
    await loadSlim(engine);
  }).then(() => {
    setInit(true);
  });
}, []);



const particlesLoaded = (container) => {
  console.log(container);
};

	return (

    <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      /> 
		
	);
}


