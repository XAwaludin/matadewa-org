<template>
    <q-layout view="hHh LpR fff">
        <q-header elevated class="bg-dark text-white">
            <q-toolbar>
                <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

                <q-btn to="/" flat>
                    <q-toolbar-title class="font-orbitron">
                        <q-avatar>
                            <img src="~assets/logo-white.png" />
                        </q-avatar>
                        MATADEWA
                    </q-toolbar-title>
                </q-btn>
            </q-toolbar>
        </q-header>

        <q-drawer v-model="leftDrawerOpen" side="left" bordered>
            <!-- drawer content -->
            <q-list>
                <q-item clicable to="/" active-class="bg-dark text-white">
                    <q-item-section avatar>
                        <q-icon name="mdi-home" />
                    </q-item-section>
                    <q-item-section>Home</q-item-section>
                </q-item>
                <q-expansion-item icon="mdi-city" label="Desa" default-opened>
                    <q-item
                        :inset-level="1"
                        clickable
                        v-for="desa in desas"
                        :key="desa.id"
                        active-class="bg-dark text-white"
                        :to="`/desa/${desa.kode}`"
                    >
                        <q-item-section>{{ desa.nama }}</q-item-section>
                    </q-item>
                </q-expansion-item>
            </q-list>
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
import { api } from "src/boot/axios";

export default {
    data() {
        return {
            leftDrawerOpen: false,
            desas: [],
        };
    },

    mounted() {
        this.fetchDesa();
    },

    methods: {
        fetchDesa() {
            this.desas = [];
            api.get("/desa").then((response) => {
                let res = response.data;
                this.desas = res.results;
            });
        },
        toggleLeftDrawer() {
            this.leftDrawerOpen = !this.leftDrawerOpen;
        },
    },
};
</script>
