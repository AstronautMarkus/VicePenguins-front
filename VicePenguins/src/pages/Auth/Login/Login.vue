<script setup>
import AuthUtils from '../../../components/AuthUtils/AuthUtils.vue';
</script>

<template>
    <section class="section">
        <div class="background"></div>
        <AuthUtils />
        <div class="container">
            <div class="columns is-centered">
                <div class="column is-4 login-box card">
                    <h1 class="title has-text-centered">Iniciar sesión</h1>
                    <form @submit.prevent="handleLogin">
                        <div class="field">
                            <label class="label">Correo electrónico</label>
                            <div class="control">
                                <input
                                    class="input"
                                    type="email"
                                    placeholder="Ingresa tu correo electrónico"
                                    v-model="email"
                                    required
                                />
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Contraseña</label>
                            <div class="control">
                                <input
                                    class="input"
                                    type="password"
                                    placeholder="Ingresa tu contraseña"
                                    v-model="password"
                                    required
                                />
                            </div>
                        </div>
                        <div class="field">

                            <div class="control">
                                <button class="button is-primary is-fullwidth" type="submit">
                                    Iniciar sesión
                                </button>
                            </div>

                            <p class="has-text-centered mt-4">
                                <a href="/register" class="has-text-link">
                                    ¿No tienes una cuenta? Regístrate aquí
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
}

.background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/img/backgrounds/snow_night.webp') no-repeat center center/cover;
    filter: blur(8px);
    transform: scale(1.1);
    z-index: -1;
}

.login-box {
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>