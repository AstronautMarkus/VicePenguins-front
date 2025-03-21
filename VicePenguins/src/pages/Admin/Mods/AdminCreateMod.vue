<script setup>
import { ref, onMounted } from 'vue';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import AdminLayout from '../../../layouts/AdminLayout.vue';

const modName = ref('');
const authorName = ref('');
const editorContainer = ref(null);
let quillInstance = null;


const images = ref([]);


onMounted(() => {
    quillInstance = new Quill(editorContainer.value, {
        theme: 'snow',
    });
});


const handleFileChange = (event) => {
    const files = event.target.files;
    Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
            images.value.push({
                src: reader.result, 
                name: file.name,
            });
        };
        reader.readAsDataURL(file);
    });
};


const removeImage = (index) => {
    images.value.splice(index, 1);
};

const submitForm = () => {
    const modDescription = quillInstance.root.innerHTML;

    console.log("Nombre del mod:", modName.value);
    console.log("Descripción del mod:", modDescription);
    console.log("Autor del mod:", authorName.value);
    console.log("Imágenes del mod:", images.value);  

    
};
</script>

<template>
    <AdminLayout>
        <div class="form-container">
            <h1>Crear un Mod</h1>

            
            <div class="form-group">
                <label for="modName">Nombre del mod:</label>
                <input v-model="modName" type="text" id="modName" class="form-input" placeholder="Ej. Jenny MOD" required />
            </div>


            <div class="form-group">
                <label for="modDescription">Descripción del mod:</label>
                <div ref="editorContainer" class="quill-editor"></div>
            </div>


            <div class="form-group">
                <label for="authorName">Autor del mod:</label>
                <input v-model="authorName" type="text" id="authorName" class="form-input" placeholder="Ej. AstronautMarkus" required />
            </div>

            <div class="form-group">
                <label for="modImages">Imágenes del mod:</label>
                <input
                    type="file"
                    id="modImages"
                    multiple
                    accept="image/*"
                    @change="handleFileChange"
                    class="form-input"
                />
            </div>


            <div class="image-gallery">
                <div v-for="(image, index) in images" :key="index" class="image-item">
                    <img :src="image.src" alt="Mod Image" class="image-thumbnail" />
                    <button @click="removeImage(index)" class="remove-btn">Eliminar</button>
                </div>
            </div>


            <div class="form-group">
                <button @click="submitForm" class="submit-btn">Crear Mod</button>
            </div>
        </div>
    </AdminLayout>
</template>

<style scoped>
.form-container {
    margin: 0 auto;
    padding: 20px;
}

.form-group {
    margin-bottom: 20px;
}

.form-input {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

.quill-editor {
    height: 400px;
}

.submit-btn {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.submit-btn:hover {
    background-color: #45a049;
}

.image-gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
}

.image-item {
    position: relative;
}

.image-thumbnail {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
}

.remove-btn {
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: rgba(255, 0, 0, 0.7);
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
}

.remove-btn:hover {
    background-color: red;
}
</style>
