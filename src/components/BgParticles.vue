<template>
    <Particles
        id="tsparticles"
        :options="options"
        :particles-init="particlesInit"
    ></Particles>
</template>

<style lang="scss">
#tsparticles {
    height: 100%;
}
</style>

<script>
import { defineComponent } from "vue";
// import { Engine } from "tsparticles-engine"
import { loadFull } from "tsparticles";

export default defineComponent({
    // name: 'ComponentName'
    name: "BgParticles",
    data() {
        return {
            options: {
                background: {
                    color: "#000",
                },
                backgroundMode: {
                    enable: true,
                    zIndex: -1,
                },
                fpsLimit: 60,
                particles: {
                    color: {
                        value: "#fff",
                    },
                    move: {
                        enable: true,
                    },
                    links: {
                        enable: true,
                        color: "#fff",
                    },
                },
                fullScreen: {
                    enable: false,
                    zIndex: 0,
                },
            },
        };
    },
    methods: {
        async particlesInit(engine) {
            await loadFull(engine);
        },
    },
});
</script>
