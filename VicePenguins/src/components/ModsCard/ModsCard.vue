<template>
    <div class="card mod-card">
        <div class="card-image">
            <figure class="image is-4by3">
                <img :src="image" alt="Mod image">
                <div class="tags-container">
                    <span 
                        v-for="loader in modLoaders" 
                        :key="loader" 
                        :class="['tag', getTagColor(loader)]">
                        {{ loader }}
                    </span>
                </div>
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-4">{{ title }}</p>
                    <p class="subtitle is-6">{{ description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModsCard',
    props: {
        image: {
            type: String,
            required: true,
            default: "/img/exceptions/no-image.png"
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false,
            default: "Descripción no disponible."
        },
        modLoaders: {
            type: Array,
            required: false,
            default: () => ["No disponible"]
        }
    },
    methods: {
        getTagColor(loader) {
            switch (loader.toLowerCase()) {
                case "forge": return "is-info";
                case "fabric": return "is-primary";
                case "quilt": return "is-warning";
                case "neoforge": return "is-success";
                default: return "is-dark"; 
            }
        }
    }
}
</script>

<style scoped>
.mod-card {
    margin: 1rem;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.mod-card:hover {
    transform: scale(1.05);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
}

.image img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    transition: filter 0.3s ease;
}

.image:hover img {
    filter: brightness(1.1);
}

.tags-container {
    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    gap: 5px;
}

.tag {
    font-size: 0.8rem;
    padding: 5px 10px;
    border-radius: 5px;
}
</style>
