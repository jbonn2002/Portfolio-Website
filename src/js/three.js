import '/src/css/style.css'

import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
    antialias: true
});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.outputEncoding = THREE.sRGBEncoding;

const boxGeometry = new THREE.SphereGeometry( 3, 30, 30 );
const boxMaterial = new THREE.MeshBasicMaterial( { color: 0xFF8552, wireframe: true} );
const cube = new THREE.Mesh( boxGeometry, boxMaterial );
scene.add( cube );

camera.position.z = 5;


function animate() {
	requestAnimationFrame( animate );


	cube.rotation.x += 0.001;
	cube.rotation.y += 0.005;

	renderer.render( scene, camera );
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
  
  
  }
  
  
window.addEventListener('resize', onWindowResize, false)

animate();