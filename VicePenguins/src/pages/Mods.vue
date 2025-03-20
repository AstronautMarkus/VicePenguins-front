<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue';
import ModsCard from '../components/ModsCard/ModsCard.vue';


const mods = [
    { title: 'Mod 1', modLoaders: "Forge, Fabric" },
    { image: '/img/exceptions/not-found.png', title: 'Mod 2', modLoaders: "Quilt" },
    { image: '/img/exceptions/not-found.png', title: 'Mod 3', modLoaders: "NeoForge" },
    { image: '/img/exceptions/not-found.png', title: 'Mod 4' },
    { image: '/img/exceptions/not-found.png', title: 'Mod 5', modLoaders: "Forge, Fabric, Quilt, NeoForge" }
];

const formattedMods = mods.map(mod => ({
    ...mod,
    modLoaders: mod.modLoaders ? mod.modLoaders.split(', ') : ["No disponible"]
}));

</script>

<template>
    <DefaultLayout>
        <div class="mods-grid">
            <ModsCard 
                v-for="mod in formattedMods" 
                :key="mod.title" 
                :title="mod.title" 
                :image="mod.image"
                :modLoaders="mod.modLoaders" />
        </div>
    </DefaultLayout>
</template>

<style scoped>
.mods-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
    padding: 1rem;
}
</style>
