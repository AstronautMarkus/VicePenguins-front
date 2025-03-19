<script setup>
import { ref } from 'vue';

const username = ref('');
const email = ref('');
const password = ref('');

const handleRegister = () => {
    // Add registration logic here
    console.log('Registering:', { username: username.value, email: email.value, password: password.value });
};
</script>

<template>
    <section class="section">
        <div class="container">
            <div class="columns is-centered">
                <div class="column is-4">
                    <h1 class="title has-text-centered">Register</h1>
                    <form @submit.prevent="handleRegister">
                        <div class="field">
                            <label class="label">Username</label>
                            <div class="control">
                                <input
                                    class="input"
                                    type="text"
                                    placeholder="Enter your username"
                                    v-model="username"
                                    required
                                />
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control">
                                <input
                                    class="input"
                                    type="email"
                                    placeholder="Enter your email"
                                    v-model="email"
                                    required
                                />
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Password</label>
                            <div class="control">
                                <input
                                    class="input"
                                    type="password"
                                    placeholder="Enter your password"
                                    v-model="password"
                                    required
                                />
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <button class="button is-primary is-fullwidth" type="submit">
                                    Register
                                </button>
                            </div>
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
}
</style>