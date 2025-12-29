import React, { useRef, useEffect, useCallback } from 'react';
import * as THREE from 'three';

const ThreeDBg = React.memo(({ animationState }) => {
    const mountRef = useRef(null);
    const mousePosition = useRef({ x: 0, y: 0 });

    // Refs for optimization
    const sceneReq = useRef(null);
    const rendererRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        // Scene Setup
        const scene = new THREE.Scene();
        // Fog for depth
        scene.fog = new THREE.FogExp2(0x000000, 0.02);

        const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
        camera.position.z = 20;

        const renderer = new THREE.WebGLRenderer({
            antialias: false,
            alpha: true,
            powerPreference: "high-performance"
        });
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        renderer.setPixelRatio(1); // Force 1x pixel ratio for maximum performance
        mount.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // --- PARTICLE SYSTEM ---
        const particleCount = 200; // Further optimized count
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);

        const color1 = new THREE.Color(0x00ffff); // Aqua
        const color2 = new THREE.Color(0xff00ff); // Purple

        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 50;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 50;

            // Mix colors
            const mixedColor = i % 2 === 0 ? color1 : color2;
            colors[i * 3] = mixedColor.r;
            colors[i * 3 + 1] = mixedColor.g;
            colors[i * 3 + 2] = mixedColor.b;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: 0.3, // Slightly larger particles
            vertexColors: true,
            blending: THREE.AdditiveBlending,
            transparent: true,
            opacity: 0.8,
        });

        const particlesMesh = new THREE.Points(geometry, material);
        scene.add(particlesMesh);

        // --- MESH GRID FLOOR ---
        const gridHelper = new THREE.GridHelper(100, 50, 0xff00ff, 0x111111);
        gridHelper.position.y = -10;
        gridHelper.material.transparent = true;
        gridHelper.material.opacity = 0.2;
        scene.add(gridHelper);

        // --- ANIMATION LOOP ---
        let frameId;
        const animate = () => {
            if (animationState !== 'idle') {
                // Speed up rotation on takeoff
                particlesMesh.rotation.y += 0.02;
            } else {
                particlesMesh.rotation.y += 0.001;
                particlesMesh.rotation.x += 0.0005;
            }

            // Mouse Influence
            const targetX = mousePosition.current.x * 2;
            const targetY = mousePosition.current.y * 2;

            camera.position.x += (targetX - camera.position.x) * 0.05;
            camera.position.y += (targetY - camera.position.y) * 0.05;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
            frameId = requestAnimationFrame(animate);
        };

        animate();

        // Handle Resize
        const handleResize = () => {
            const width = mount.clientWidth;
            const height = mount.clientHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener('resize', handleResize);
            mount.removeChild(renderer.domElement);
            geometry.dispose();
            material.dispose();
        };
    }, [animationState]);

    const handleMouseMove = (e) => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        mousePosition.current = {
            x: (e.clientX / width) * 2 - 1,
            y: -(e.clientY / height) * 2 + 1
        };
    };

    return (
        <div
            ref={mountRef}
            className="absolute inset-0 z-0"
            onMouseMove={handleMouseMove}
        />
    );
});

export default ThreeDBg;
