<template>
    <section class="hero is-fullheight is-bold">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="loader-wrapper">
                    <div class="loader"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "LoadingScreen",
};
</script>

<style scoped>
.loader-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.loader {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top: 4px solid currentColor;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>