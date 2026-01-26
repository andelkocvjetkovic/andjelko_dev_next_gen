"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Stars } from "@react-three/drei";
import * as THREE from "three";
import * as random from "maath/random/dist/maath-random.cjs";

export function ParticlesBackground() {
    return (
        <div className="fixed inset-0 z-[-1] bg-black">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <fog attach="fog" args={["#06060d", 1.6, 4.2]} />
                <Stars radius={100} depth={50} count={2200} factor={2.2} saturation={0} fade speed={0.35} />
                <SpaceDust />
            </Canvas>
        </div>
    );
}

function SpaceDust(props: React.ComponentProps<typeof Points>) {
    const ref = useRef<THREE.Points>(null!);
    const refFar = useRef<THREE.Points>(null!);
    const matNear = useRef<THREE.PointsMaterial>(null!);
    const matFar = useRef<THREE.PointsMaterial>(null!);
    const sphere = useMemo(() => random.inSphere(new Float32Array(6000), { radius: 1.5 }) as Float32Array, []);
    const sphereFar = useMemo(() => random.inSphere(new Float32Array(9000), { radius: 2.6 }) as Float32Array, []);
    const nearWarm = useMemo(() => new THREE.Color("#f6e27a"), []);
    const nearCool = useMemo(() => new THREE.Color("#7ad7ff"), []);
    const farWarm = useMemo(() => new THREE.Color("#8fb9ff"), []);
    const farCool = useMemo(() => new THREE.Color("#f39ad6"), []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 18;
            ref.current.rotation.y -= delta / 24;
        }
        if (refFar.current) {
            refFar.current.rotation.x += delta / 60;
            refFar.current.rotation.y -= delta / 80;
        }
        const t = state.clock.getElapsedTime();
        if (matNear.current) {
            const pulse = 0.0015 + Math.sin(t * 0.9) * 0.0003;
            matNear.current.size = pulse;
            matNear.current.color.lerpColors(nearWarm, nearCool, (Math.sin(t * 0.45) + 1) / 2);
            matNear.current.opacity = 0.35 + Math.sin(t * 1.2) * 0.08;
        }
        if (matFar.current) {
            const pulse = 0.001 + Math.sin(t * 0.7 + 1.2) * 0.0002;
            matFar.current.size = pulse;
            matFar.current.color.lerpColors(farWarm, farCool, (Math.sin(t * 0.35 + 1) + 1) / 2);
            matFar.current.opacity = 0.24 + Math.sin(t * 1.0 + 0.6) * 0.06;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref}
                positions={sphere}
                stride={3}
                frustumCulled={false}
                {...props}
            >
                <PointMaterial
                    ref={matNear}
                    transparent
                    color="#b7b58a"
                    size={0.0015}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
            <Points
                ref={refFar}
                positions={sphereFar}
                stride={3}
                frustumCulled={false}
                {...props}
            >
                <PointMaterial
                    ref={matFar}
                    transparent
                    color="#8a9ab3"
                    size={0.001}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}
