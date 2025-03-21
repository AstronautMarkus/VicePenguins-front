<script setup>
import AdminLayout from '../../../layouts/AdminLayout.vue';

const mods = [
    {
        id: 1,
        titulo: 'Mod 1',
        autor: 'Autor 1',
        vistas: 100,
        estado: 'Activo',
        creado: '2023-01-01',
        actualizado: '2023-01-10',
    }
];
</script>

<template>
    <AdminLayout>

        <h1 class="title has-text-centered mt-4">Lista de Mods</h1>

        <table class="table is-striped is-hoverable is-fullwidth">
            <thead>
                <tr class="is-success">
                    <th>ID</th>
                    <th>Título</th>
                    <th>Autor</th>
                    <th>Vistas</th>
                    <th>Estado</th>
                    <th>Creado a las</th>
                    <th>Actualizado a las</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="mod in mods" :key="mod.id">
                    <td>{{ mod.id }}</td>
                    <td>{{ mod.titulo }}</td>
                    <td>{{ mod.autor }}</td>
                    <td>{{ mod.vistas }}</td>
                    <td>{{ mod.estado }}</td>
                    <td>{{ mod.creado }}</td>
                    <td>{{ mod.actualizado }}</td>
                </tr>
            </tbody>
        </table>
    </AdminLayout>
</template>

<style>

table{
    border: 2px solid #ccc;
}

</style>