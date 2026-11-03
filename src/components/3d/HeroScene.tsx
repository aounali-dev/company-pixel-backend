"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { MutableRefObject } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, Lightformer, PerformanceMonitor, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

type Mouse = MutableRefObject<{ x: number; y: number }>;
type Kind = "torus" | "cube" | "sphere";
type MatKey = "chrome" | "black" | "white";

type Spec = {
    kind: Kind;
    mat: MatKey;
    d: [number, number]; // desktop position (viewport ka fraction)
    m: [number, number]; // mobile position
    z: number;
    size: number;
    depth: number; // mouse parallax strength
    spin: number;
};

const SHAPES: Spec[] = [
    { kind: "torus", mat: "chrome", d: [-0.74, 0.28], m: [-0.62, 0.62], z: -0.5, size: 1.5, depth: 0.5, spin: 0.25 },
    { kind: "cube", mat: "black", d: [0.72, 0.38], m: [0.6, 0.78], z: 0, size: 1.25, depth: 0.35, spin: 0.2 },
    { kind: "sphere", mat: "chrome", d: [0.6, -0.42], m: [0.55, -0.7], z: 1, size: 1.0, depth: 0.8, spin: 0.1 },
    { kind: "sphere", mat: "black", d: [-0.58, -0.42], m: [-0.55, -0.78], z: 0.6, size: 0.8, depth: 0.65, spin: 0.1 },
    { kind: "cube", mat: "white", d: [-0.34, 0.66], m: [-0.2, 0.88], z: -1.2, size: 0.55, depth: 0.25, spin: 0.35 },
    { kind: "torus", mat: "black", d: [0.88, -0.05], m: [0.82, 0.1], z: -1.5, size: 0.8, depth: 0.3, spin: 0.3 },
    { kind: "sphere", mat: "white", d: [-0.93, 0.04], m: [-0.85, -0.1], z: -1, size: 0.45, depth: 0.4, spin: 0.1 },
    { kind: "torus", mat: "white", d: [0.36, 0.7], m: [0.3, 0.9], z: -0.8, size: 0.5, depth: 0.25, spin: 0.3 },
];

type Geos = { torus: THREE.TorusGeometry; sphere: THREE.SphereGeometry };
type Mats = Record<MatKey, THREE.MeshStandardMaterial>;

/* ---------- Single shape ---------- */
function Shape({ spec, geos, mats, mouse }: { spec: Spec; geos: Geos; mats: Mats; mouse: Mouse }) {
    const outer = useRef<THREE.Group>(null);
    const spin = useRef<THREE.Group>(null);
    const { viewport } = useThree();

    const narrow = viewport.width < 6;
    const s = Math.min(1, Math.max(0.5, viewport.width / 11));
    const [fx, fy] = narrow ? spec.m : spec.d;
    const bx = (fx * viewport.width) / 2;
    const by = (fy * viewport.height) / 2;
    const mat = mats[spec.mat];

    useFrame((_, delta) => {
        const o = outer.current;
        const sp = spin.current;
        if (!o || !sp) return;

        // mouse parallax: paas wale zyada, door wale kam
        o.position.x = THREE.MathUtils.damp(o.position.x, bx + mouse.current.x * spec.depth * s, 2.5, delta);
        o.position.y = THREE.MathUtils.damp(o.position.y, by + mouse.current.y * spec.depth * 0.7 * s, 2.5, delta);

        // cursor ki taraf jhukna
        o.rotation.y = THREE.MathUtils.damp(o.rotation.y, mouse.current.x * 0.5, 3, delta);
        o.rotation.x = THREE.MathUtils.damp(o.rotation.x, -mouse.current.y * 0.5, 3, delta);

        // apni dhimi ghoomti hui spin
        sp.rotation.x += delta * spec.spin;
        sp.rotation.y += delta * spec.spin * 1.3;
    });

    return (
        <group ref={outer} position={[bx, by, spec.z]} scale={spec.size * s}>
            <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.8}>
                <group ref={spin} rotation={[spec.kind === "torus" ? 1.1 : 0.5, 0.6, 0]}>
                    {spec.kind === "torus" && <mesh geometry={geos.torus} material={mat} />}
                    {spec.kind === "sphere" && <mesh geometry={geos.sphere} material={mat} />}
                    {spec.kind === "cube" && (
                        <RoundedBox args={[1, 1, 1]} radius={0.14} smoothness={4}>
                            <primitive object={mat} attach="material" />
                        </RoundedBox>
                    )}
                </group>
            </Float>
        </group>
    );
}

/* ---------- All shapes ---------- */
function Shapes({ mouse }: { mouse: Mouse }) {
    const geos = useMemo<Geos>(
        () => ({
            torus: new THREE.TorusGeometry(0.5, 0.19, 48, 96),
            sphere: new THREE.SphereGeometry(0.5, 48, 48),
        }),
        []
    );

    const mats = useMemo<Mats>(
        () => ({
            chrome: new THREE.MeshStandardMaterial({ color: "#ffffff", metalness: 1, roughness: 0.06, envMapIntensity: 1.4 }),
            black: new THREE.MeshStandardMaterial({ color: "#0b0b0c", metalness: 0.85, roughness: 0.18, envMapIntensity: 1.3 }),
            white: new THREE.MeshStandardMaterial({ color: "#f2f2f2", metalness: 0.15, roughness: 0.35, envMapIntensity: 0.9 }),
        }),
        []
    );

    useEffect(
        () => () => {
            Object.values(geos).forEach((g) => g.dispose());
            Object.values(mats).forEach((m) => m.dispose());
        },
        [geos, mats]
    );

    return (
        <>
            {SHAPES.map((spec, i) => (
                <Shape key={i} spec={spec} geos={geos} mats={mats} mouse={mouse} />
            ))}
        </>
    );
}

/* ---------- Scene ---------- */
export default function HeroScene() {
    const mouse = useRef({ x: 0, y: 0 });
    const wrap = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(true);
    const [dpr, setDpr] = useState(() => Math.min(window.devicePixelRatio || 1, 1.5));

    useEffect(() => {
        // canvas ke upar overlay hain, isliye pointer window se track karte hain
        const onMove = (e: PointerEvent) => {
            mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
        };
        window.addEventListener("pointermove", onMove, { passive: true });

        // screen se bahar ho to rendering band
        const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
        if (wrap.current) io.observe(wrap.current);

        return () => {
            window.removeEventListener("pointermove", onMove);
            io.disconnect();
        };
    }, []);

    return (
        <div ref={wrap} style={{ width: "100%", height: "100%" }}>
            <Canvas
                frameloop={visible ? "always" : "never"}
                dpr={dpr}
                camera={{ position: [0, 0, 8], fov: 40 }}
                gl={{ antialias: true, alpha: true, powerPreference: "high-performance", stencil: false }}
            >
                {/* PC slow ho to resolution khud kam */}
                <PerformanceMonitor
                    onDecline={() => setDpr(1)}
                    onIncline={() => setDpr(Math.min(window.devicePixelRatio || 1, 1.5))}
                />

                <ambientLight intensity={0.25} />
                <directionalLight position={[4, 5, 6]} intensity={1.2} />

                {/* studio softboxes: ek baar render hote hain, koi HDR download nahi */}
                <Environment resolution={256} frames={1}>
                    <Lightformer form="rect" intensity={4} position={[0, 6, 3]} scale={[10, 2.5, 1]} onUpdate={(l) => l.lookAt(0, 0, 0)} />
                    <Lightformer form="rect" intensity={2.5} position={[-6, 1, 2]} scale={[1.5, 6, 1]} onUpdate={(l) => l.lookAt(0, 0, 0)} />
                    <Lightformer form="rect" intensity={2.5} position={[6, 1, 2]} scale={[1.5, 6, 1]} onUpdate={(l) => l.lookAt(0, 0, 0)} />
                    <Lightformer form="rect" intensity={1.5} position={[0, 0, 8]} scale={[8, 4, 1]} onUpdate={(l) => l.lookAt(0, 0, 0)} />
                </Environment>

                <Shapes mouse={mouse} />
            </Canvas>
        </div>
    );
}