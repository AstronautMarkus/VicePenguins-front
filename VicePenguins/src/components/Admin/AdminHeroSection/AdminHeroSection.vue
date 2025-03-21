<template>
    <section class="hero is-primary">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    Saludos, {{ user.username }}
                </h1>
                <h2 class="subtitle is-5">
                    {{ user.email }}
                </h2>
            </div>
        </div>
    </section>
</template>

<script>
import jwtDecode from "jwt-decode";

export default {
    name: "AdminHeroSection",
    data() {
        return {
            user: {
                username: "",
                email: "",
            },
        };
    },
    created() {
        const token = localStorage.getItem("token");
        if (token) {
            const decoded = jwtDecode(token);
            this.user.username = decoded.username;
            this.user.email = decoded.email;
        }
    },
};
</script>

<style scoped>
.hero {
    margin-bottom: 2rem;
    background: linear-gradient(135deg, #6e7dff, #a8c0ff);
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
