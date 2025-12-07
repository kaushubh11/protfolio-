import React, { useRef, useEffect, useCallback } from 'react';
import * as THREE from 'three';

const ThreeDBg = React.memo(({ animationState }) => {
    const mountRef = useRef(null);
    const mousePosition = useRef({ x: 0, y: 0 });
    const isInitialized = useRef(false);

    const scene = useRef(null);
    const camera = useRef(null);
    const renderer = useRef(null);
    const mesh = useRef(null);
    const animationFrameId = useRef(null);

    const initThree = useCallback(() => {
        if (mountRef.current && !isInitialized.current) {
            const currentMount = mountRef.current;
            const width = currentMount.clientWidth;
            const height = currentMount.clientHeight;

            scene.current = new THREE.Scene();
            camera.current = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
            camera.current.position.z = 5;

            renderer.current = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.current.setSize(width, height);
            renderer.current.setPixelRatio(window.devicePixelRatio);
            currentMount.appendChild(renderer.current.domElement);

            const geometry = new THREE.IcosahedronGeometry(2.5, 1);
            const material = new THREE.MeshBasicMaterial({
                color: 0x00ffff, // NEON AQUA color
                wireframe: true,
                transparent: true,
                opacity: 0.1
            });

            mesh.current = new THREE.Mesh(geometry, material);
            scene.current.add(mesh.current);

            renderer.current.render(scene.current, camera.current);
            isInitialized.current = true;

            const handleResize = () => {
                const newWidth = currentMount.clientWidth;
                const newHeight = currentMount.clientHeight;
                if (camera.current) {
                    camera.current.aspect = newWidth / newHeight;
                    camera.current.updateProjectionMatrix();
                }
                if (renderer.current) {
                    renderer.current.setSize(newWidth, newHeight);
                }
            };
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    const animate = useCallback(() => {
        if (!mesh.current || animationState !== 'idle' || !renderer.current || !camera.current) {
            animationFrameId.current = requestAnimationFrame(animate);
            return;
        }

        mesh.current.rotation.x += 0.0005;
        mesh.current.rotation.y += 0.001;

        const targetX = mousePosition.current.x * 0.001;
        const targetY = mousePosition.current.y * 0.001;

        camera.current.position.x += (targetX - camera.current.position.x) * 0.02;
        camera.current.position.y += (targetY - camera.current.position.y) * 0.02;
        scene.current.rotation.y += 0.0002;
        camera.current.lookAt(scene.current.position);

        renderer.current.render(scene.current, camera.current);
        animationFrameId.current = requestAnimationFrame(animate);
    }, [animationState]);

    const handleMouseMove = useCallback((e) => {
        if (mountRef.current && animationState === 'idle') {
            const rect = mountRef.current.getBoundingClientRect();
            // Normalize mouse position to [-1, 1] range
            mousePosition.current.x = (e.clientX - rect.left) / rect.width * 2 - 1;
            mousePosition.current.y = -((e.clientY - rect.top) / rect.height * 2 - 1);
        }
    }, [animationState]);

    useEffect(() => {
        initThree();
        return () => {
            if (mountRef.current && renderer.current) {
                mountRef.current.removeChild(renderer.current.domElement);
                // Clean up Three.js resources
                scene.current.traverse(object => {
                    if (object.isMesh) {
                        object.geometry.dispose();
                        object.material.dispose();
                    }
                });
                renderer.current.dispose();
                isInitialized.current = false;
            }
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [initThree]);

    useEffect(() => {
        if (isInitialized.current) {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
            animationFrameId.current = requestAnimationFrame(animate);
        }
        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [animate]);

    return (
        <div
            ref={mountRef}
            className="absolute inset-0 z-0 opacity-80"
            onMouseMove={handleMouseMove}
        >
            {/* Three.js canvas will be injected here */}
        </div>
    );
});

export default ThreeDBg;
