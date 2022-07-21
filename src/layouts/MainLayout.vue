<template>
    <q-layout view="hHh LpR fff">
        <q-header elevated class="bg-dark text-white">
            <q-toolbar>
                <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

                <q-toolbar-title class="font-orbitron">
                    <q-avatar>
                        <img src="~assets/logo-white.png" />
                    </q-avatar>
                    MATADEWA
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-drawer v-model="leftDrawerOpen" side="left" bordered>
            <!-- drawer content -->
        </q-drawer>

        <q-page-container>
            <router-view class="q-mb-md" />
        </q-page-container>
        <q-footer class="bg-dark text-white">
            <div class="row justify-center">
                <div class="col-sm-12 col-md-8 font-orbitron text-center">
                    <q-avatar size="250px">
                        <img src="~assets/logo-white.png" />
                    </q-avatar>
                    <div class="text-h5">MATADEWA</div>
                    <div class="text-caption font-quicksand">
                        @Copyright 2020-2022 MATADEWA
                    </div>
                </div>
            </div>
        </q-footer>
    </q-layout>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap");
.font-orbitron {
    font-family: "Orbitron", sans-serif;
}
</style>

<script>
import { ref } from "vue";

export default {
    setup() {
        const leftDrawerOpen = ref(false);

        return {
            leftDrawerOpen,
            toggleLeftDrawer() {
                leftDrawerOpen.value = !leftDrawerOpen.value;
            },
        };
    },
};
</script>
