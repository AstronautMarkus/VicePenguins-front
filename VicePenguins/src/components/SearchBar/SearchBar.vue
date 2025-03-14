<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
</script>

<template>
        <div class="container has-text-centered mt-4 mb-5">
          <div class="field has-addons has-addons-centered">
            <div class="control is-expanded" style="max-width: 100vh;">
              <input class="input is-medium" type="text" placeholder="Buscar mods...">
            </div>
            <div class="control">
              <button class="button is-info is-medium">
                <span class="icon">
                  <MagnifyingGlassIcon class="w-6 h-6" />
                </span>
              </button>
            </div>
          </div>
        </div>
</template>

<style></style>