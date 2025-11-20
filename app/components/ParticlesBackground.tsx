"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Stars } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.cjs";

export function ParticlesBackground() {
    return (
        <div className="fixed inset-0 z-[-1] bg-black">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <SpaceDust />
            </Canvas>
        </div>
    );
}

function SpaceDust(props: any) {
    const ref = useRef<any>();
    const sphere = useMemo(() => random.inSphere(new Float32Array(6000), { radius: 1.5 }), []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
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
                    transparent
                    color="#FAE500"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}
