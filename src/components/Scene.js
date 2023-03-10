// import { render } from '@testing-library/react';
import {useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


function Scene() {

  const myRef = useRef();

  useEffect(() => {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
  
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(
      window.innerWidth, 
      window.innerHeight
    );
    myRef.current.appendChild(renderer.domElement);
  
    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
  
    camera.position.z = 5;

    const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
    scene.add(ambientLight);
    const controls = new OrbitControls(camera, renderer.domElement);
  
    var animate = function () {
      requestAnimationFrame(animate);
  
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
  
      renderer.render(scene, camera);
    };
  
    animate();
  }, []);



  return(
    <>
      <h1>Bending Light</h1>
      <div 
        ref={myRef}
      ></div>
    </>
  );
}

export default Scene;