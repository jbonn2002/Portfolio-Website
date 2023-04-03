import '/src/css/style.css'

import * as THREE from 'three';

let camera, scene, renderer;

let torus;

init();
animate();

function init(){
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#bg'),
      antialias: true
  });
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.outputEncoding = THREE.sRGBEncoding;

  const torusGeometry = new THREE.TorusKnotGeometry( 5, 3, 300, 20 );
  const torusMaterial = new THREE.PointsMaterial( { 
    color: 0xFF8552, 
    size: 0.02
  } );
  torus = new THREE.Points( torusGeometry, torusMaterial );
  scene.add( torus );

  camera.position.z = 5;

  window.addEventListener('resize', onWindowResize, false)
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
  
  
  }
  
  function animate() {
    requestAnimationFrame( animate );
  
    render();
  }
  
  function render() {
    
    torus.rotation.x += 0.001;
    torus.rotation.y += 0.001;
    
    renderer.render( scene, camera );
  }

