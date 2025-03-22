import { ref, onMounted } from "vue";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function useSkinRenderer() {
  const sceneRef = ref<HTMLDivElement | null>(null);
  const skinTexture = ref<string | null>(null);
  let renderer: THREE.WebGLRenderer;
  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let wideModel: THREE.Object3D | null = null;
  let slimModel: THREE.Object3D | null = null;
  let currentModelType = "wide";

  const loadModels = () => {
    const loader = new GLTFLoader();

    loader.load(
      "/src/assets/models/minecraft_wide.gltf",
      (gltf) => {
        wideModel = gltf.scene;
        wideModel.scale.set(1.5, 1.5, 1.5);
        scene.add(wideModel);
        updateModelVisibility();
      },
      undefined,
      (error) => {
        console.error("Error loading wide model:", error);
      }
    );

    loader.load(
      "/src/assets/models/minecraft_slim.gltf",
      (gltf) => {
        slimModel = gltf.scene;
        slimModel.scale.set(1.5, 1.5, 1.5);
        scene.add(slimModel);
        updateModelVisibility();
      },
      undefined,
      (error) => {
        console.error("Error loading slim model:", error);
      }
    );
  };

  const updateModelVisibility = () => {
    if (wideModel) wideModel.visible = currentModelType === "wide";
    if (slimModel) slimModel.visible = currentModelType === "slim";
  };

  const toggleModelType = () => {
    currentModelType = currentModelType === "wide" ? "slim" : "wide";
    updateModelVisibility();
  };

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

    loadModels(); // Load both models
    animate();
  };

  const animate = () => {
    requestAnimationFrame(animate);
    if (wideModel) wideModel.rotation.y += 0.01;
    if (slimModel) slimModel.rotation.y += 0.01;
    renderer.render(scene, camera);
  };

  const applySkin = (textureUrl: string) => {
    skinTexture.value = textureUrl;

    const applyTextureToModel = (model: THREE.Object3D | null) => {
      if (!model) return;

      model.traverse((child) => {
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

    applyTextureToModel(wideModel);
    applyTextureToModel(slimModel);
  };

  onMounted(() => initThree());

  return {
    sceneRef,
    applySkin,
    toggleModelType, // Expose the toggle function
  };
}
