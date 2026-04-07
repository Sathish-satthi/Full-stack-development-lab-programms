import * as THREE from "https://unpkg.com/three@0.150.1/build/three.module.js";

// 🎭 Step 4: Create a Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0a0a0a); // Dark, sleek background

// 📸 Step 5: Add a Camera
const camera = new THREE.PerspectiveCamera(
  75,                     // field of view
  window.innerWidth / window.innerHeight, // aspect ratio
  0.1,                    // near clipping
  1000                    // far clipping
);

camera.position.z = 5;

// 🖥️ Step 6: Create a Renderer
// Added antialias: true for extra visual quality (Premium touch)
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio); // Sharper on high-res displays
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 🧊 Step 7: Create a 3D Cube
// Geometry (Shape)
const geometry = new THREE.BoxGeometry();
// Material (Appearance) - Using a more vibrant neon green for better aesthetics
const material = new THREE.MeshBasicMaterial({
  color: 0x00ff88, // Vibrant Mint Green
  wireframe: false // Change to true for wireframe effect
});

// Mesh (Object) = Geometry + Material
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 🔄 Step 9: Animate the Cube (Very Important)
// requestAnimationFrame creates smooth animation at 60fps
function animate() {
  requestAnimationFrame(animate);

  // Rotation logic
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

// 🎨 Step 8: Render the Scene
animate();

// Added: Handle window resizing to keep the scene fullscreen and responsive
// This is a must-have for modern web apps
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

