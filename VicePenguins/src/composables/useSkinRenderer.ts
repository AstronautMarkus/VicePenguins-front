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
  let isPaused = false;
  let rotationSpeed = 0.01;

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

  const toggleModelType = (modelType: "wide" | "slim") => {
    currentModelType = modelType;
    updateModelVisibility();
  };

  const togglePause = () => {
    isPaused = !isPaused;
  };

  const setRotationSpeed = (speed: number) => {
    rotationSpeed = speed;
  };

  const enableMouseControl = () => {
    if (!sceneRef.value) return;

    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    sceneRef.value.addEventListener("mousedown", (event) => {
      isDragging = true;
      previousMousePosition = { x: event.clientX, y: event.clientY };
    });

    sceneRef.value.addEventListener("mousemove", (event) => {
      if (!isDragging) return;

      const deltaX = event.clientX - previousMousePosition.x;

      if (wideModel) wideModel.rotation.y += deltaX * 0.01;
      if (slimModel) slimModel.rotation.y += deltaX * 0.01;

      previousMousePosition = { x: event.clientX, y: event.clientY };
    });

    sceneRef.value.addEventListener("mouseup", () => {
      isDragging = false;
    });

    sceneRef.value.addEventListener("mouseleave", () => {
      isDragging = false;
    });
  };

  const enableSpeedControl = () => {
    if (!sceneRef.value) return;

    let isDragging = false;
    let previousMousePosition = { x: 0 };

    sceneRef.value.addEventListener("mousedown", (event) => {
      isDragging = true;
      previousMousePosition = { x: event.clientX };
    });

    sceneRef.value.addEventListener("mousemove", (event) => {
      if (!isDragging) return;

      const deltaX = event.clientX - previousMousePosition.x;
      rotationSpeed = Math.min(0.1, Math.max(0.01, rotationSpeed + deltaX * 0.0001));
      previousMousePosition = { x: event.clientX };
    });

    sceneRef.value.addEventListener("mouseup", () => {
      isDragging = false;
    });

    sceneRef.value.addEventListener("mouseleave", () => {
      isDragging = false;
    });
  };

  const initThree = () => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.set(0, 1.6, 3);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(300, 300);
    renderer.setClearColor(0x000000, 0);

    // Configuración para mejorar contraste y saturación
    renderer.toneMapping = THREE.ACESFilmicToneMapping; 
    renderer.toneMappingExposure = 0.05;

    if (sceneRef.value) {
      sceneRef.value.appendChild(renderer.domElement);
    }

    const ambientLight = new THREE.AmbientLight(0xffffff, 30);
    scene.add(ambientLight);

    loadModels(); // Load both models
    animate();
  };

  const animate = () => {
    requestAnimationFrame(animate);
    if (!isPaused) {
      if (wideModel) wideModel.rotation.y += rotationSpeed;
      if (slimModel) slimModel.rotation.y += rotationSpeed;
    }
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

  onMounted(() => {
    initThree();
    enableMouseControl();
    enableSpeedControl(); // Enable speed control
  });

  return {
    sceneRef,
    applySkin,
    toggleModelType,
    togglePause, // Expose pause/resume functionality
    isPaused, // Expose paused state
    setRotationSpeed, // Expose rotation speed control
  };
}
