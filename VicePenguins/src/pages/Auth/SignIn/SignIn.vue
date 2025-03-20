<script setup>
import { ref } from 'vue';
import AuthUtils from '../../../components/AuthUtils/AuthUtils.vue';



const username = ref('');
const email = ref('');
const password = ref('');
const profilePicture = ref(null);

const handleRegister = () => {

    console.log('Registering:', { 
        username: username.value, 
        email: email.value, 
        password: password.value, 
        profile_picture: profilePicture.value 
    });
};
</script>

<template>
    <section class="section">
        <div class="background"></div>
        <AuthUtils />
        <div class="container">
            <div class="columns is-centered">
                <div class="column is-4 register-box card">
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
                            <label class="label">Profile Picture (Optional)</label>
                            <div class="control">
                                <input
                                    class="input"
                                    type="file"
                                    accept="image/*"
                                    @change="e => profilePicture.value = e.target.files[0]"
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

.register-box {
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

</style>