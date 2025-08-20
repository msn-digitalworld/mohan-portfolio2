"use client"; // 👈 Important: mark this file as a Client Component

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = async (main: any) => {
    await loadSlim(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "#090040" }, // dark slate
        particles: {
          number: { value: 80 },
          size: { value: 2 },
          move: { speed: 1 },
          links: { enable: true, color: "#38bdf8" },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
