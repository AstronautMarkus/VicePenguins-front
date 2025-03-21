<script setup>
import { ref, onMounted } from 'vue';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import AdminLayout from '../../../layouts/AdminLayout.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const modName = ref('');
const authorName = ref('');
const editorContainer = ref(null);
let quillInstance = null;


const images = ref([]);


const modVersions = ref([{ version: '', url: '' }]);

const addVersion = () => {
    modVersions.value.push({ version: '', url: '' });
};

const removeVersion = (index) => {
    modVersions.value.splice(index, 1);
};


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

const tagsInput = ref('');
const tags = ref([]);

const handleTagsInput = () => {
    tags.value = tagsInput.value.split(',').map(tag => tag.trim()).filter(tag => tag);
};

const dependencies = ref([{ name: '', link: '' }]);

const addDependency = () => {
    dependencies.value.push({ name: '', link: '' });
};

const removeDependency = (index) => {
    dependencies.value.splice(index, 1);
};
</script>

<template>
    <AdminLayout>
        <div class="form-container">
            <h1>Crear un Mod</h1>

            
            <div class="form-group">
                <label for="modName">1. Nombre del mod:</label>
                <input v-model="modName" type="text" id="modName" class="form-input" placeholder="Ej. Jenny MOD" required />
            </div>


            <div class="form-group">
                <label for="modDescription">2. Descripción del mod:</label>
                <div ref="editorContainer" class="quill-editor"></div>
            </div>


            <div class="form-group">
                <label for="authorName">3. Autor del mod:</label>
                <input v-model="authorName" type="text" id="authorName" class="form-input" placeholder="Ej. AstronautMarkus" required />
            </div>

            <div class="form-group">
                <label for="modImages">4. Imágenes del mod:</label>
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
                <label>5. Versiones del mod:</label>
                <table class="versions-table">
                    <thead>
                        <tr>
                            <th>Version Minecraft</th>
                            <th>URL mod (link directo)</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(version, index) in modVersions" :key="index">
                            <td>
                                <input
                                    v-model="version.version"
                                    type="text"
                                    placeholder="Ej. 1.19.2"
                                    class="form-input"
                                />
                            </td>
                            <td>
                                <input
                                    v-model="version.url"
                                    type="text"
                                    placeholder="Ej. https://example.com/mod"
                                    class="form-input"
                                />
                            </td>
                            <td>
                                <button @click="removeVersion(index)" class="remove-btn">
                                    <font-awesome-icon :icon="faXmark" />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button @click="addVersion" class="button is-info">Añadir Versión</button>
            </div>

            <div class="form-group">
                <label for="tagsInput">6. Etiquetas:</label>
                <input
                    v-model="tagsInput"
                    @input="handleTagsInput"
                    type="text"
                    id="tagsInput"
                    class="form-input"
                    placeholder="Ej. Aventura, Misterio, Acción"
                />
                <div class="tags-display">
                    <span v-for="(tag, index) in tags" :key="index" class="tag-item">{{ tag }}</span>
                </div>
            </div>

            <div class="form-group">
                <label>7. Dependencias:</label>
                <table class="dependencies-table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Link</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(dependency, index) in dependencies" :key="index">
                            <td>
                                <input
                                    v-model="dependency.name"
                                    type="text"
                                    placeholder="Ej. Forge"
                                    class="form-input"
                                />
                            </td>
                            <td>
                                <input
                                    v-model="dependency.link"
                                    type="text"
                                    placeholder="Ej. https://example.com/forge"
                                    class="form-input"
                                />
                            </td>
                            <td>
                                <button @click="removeDependency(index)" class="remove-btn">
                                    <font-awesome-icon :icon="faXmark" />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button @click="addDependency" class="button is-info">Añadir Dependencia</button>
            </div>

            <div class="form-group">
                <button @click="submitForm" class="button is-success">Crear Mod</button>
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

.versions-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
}

.versions-table th,
.versions-table td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
}

.tags-display {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}

.tag-item {
    background-color: #007BFF;
    color: white;
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 14px;
}

.dependencies-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
}

.dependencies-table th,
.dependencies-table td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
}

</style>
