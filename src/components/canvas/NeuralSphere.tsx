/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";
import { useTheme } from "next-themes";

function Sphere({ isDark, ...props }: any) {
  const ref = useRef<THREE.Points>(null);
  
  // Generate random points in a sphere
  const sphere = useMemo(() => {
    const data = new Float32Array(2000 * 3);
    random.inSphere(data, { radius: 1.5 });
    // Filter out NaN values that maath might produce
    for (let i = 0; i < data.length; i++) {
        if (isNaN(data[i])) data[i] = 0;
    }
    return data;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color={isDark ? "#38BDF8" : "#0f172a"}
          size={isDark ? 0.015 : 0.02}
          sizeAttenuation={true}
          depthWrite={false}
          blending={isDark ? THREE.AdditiveBlending : THREE.NormalBlending}
          opacity={isDark ? 1 : 0.6}
        />
      </Points>
    </group>
  );
}

export function NeuralSphere() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <div className="w-full h-full absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <Sphere isDark={isDark} />
      </Canvas>
    </div>
  );
}
