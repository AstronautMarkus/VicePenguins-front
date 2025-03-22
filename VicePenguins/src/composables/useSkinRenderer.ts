import { ref, onMounted } from "vue";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function useSkinRenderer() {
  const sceneRef = ref<HTMLDivElement | null>(null);
  const skinTexture = ref<string | null>(null);
  let renderer: THREE.WebGLRenderer;
  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let model: THREE.Object3D | null = null;

  const initThree = () => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.set(0, 1.6, 3);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(300, 300);
    renderer.setClearColor(0x000000, 0);

    if (sceneRef.value) {
      sceneRef.value.appendChild(renderer.domElement);
    }


    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambientLight);

    const loader = new GLTFLoader();
    loader.load(
      "/src/assets/models/minecraft_wide.gltf",
      (gltf) => {
        model = gltf.scene;

        model.scale.set(1.5, 1.5, 1.5);

        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            if (mesh.material instanceof THREE.MeshStandardMaterial) {
              mesh.material.map = new THREE.Texture();
              mesh.material.needsUpdate = true;
            }
          }
        });

        scene.add(model);
        animate();
      },
      undefined,
      (error) => {
        console.error("Error loading GLTF model:", error);
      }
    );
  };

  const animate = () => {
    requestAnimationFrame(animate);
    if (model) model.rotation.y += 0.01;
    renderer.render(scene, camera);
  };

  const applySkin = (textureUrl: string) => {
    skinTexture.value = textureUrl;
    if (!model) return;

    model?.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material instanceof THREE.MeshStandardMaterial) {
          const texture = new THREE.Texture();
          texture.image = new Image();
          texture.image.src = textureUrl;
          texture.image.onload = () => {
            texture.needsUpdate = true;
          };
          texture.flipY = false;
          texture.minFilter = THREE.NearestFilter;
          texture.magFilter = THREE.NearestFilter;

          mesh.material.map = texture;
          mesh.material.transparent = true;
          mesh.material.needsUpdate = true;
        }
      }
    });
  };

  onMounted(() => initThree());

  return {
    sceneRef,
    applySkin,
  };
}
