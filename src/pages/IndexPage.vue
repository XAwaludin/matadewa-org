<template>
    <q-page class="fit row wrap justify-center items-start content-start">
        <div
            class="col-12 bg-dark text-white text-center row reverse"
            style="height: 95vh"
        >
            <Particles
                id="tsparticles"
                :options="options"
                :particles-init="particlesInit"
            />
            <div class="col-md-12 col-sm-12 self-center text-center">
                <img
                    alt="Matadewa Logo"
                    src="~assets/logo-white.png"
                    style="width: 100%; max-width: 400px; height: auto"
                />
                <div class="font-quicksand q-px-md text-weight-bold text-h5">
                    "Jika pengabdian menjadi dasar perjuangan, maka dengan
                    segera, pergerakan akan berbuah perubahan"
                </div>
            </div>
        </div>
        <div class="col-12 q-pa-lg">
            <div class="row justify-center items-center">
                <div
                    class="col-12 self-center text-center font-quicksand text-weight-bold text-h5"
                >
                    <div>Mahasiswa Taktis Demokratis Wanasalam</div>
                </div>
                <div class="col-md-8 col-sm-12">
                    <div class="font-quicksand text-body1 text-center">
                        MATADEWA merupakan wadah bagi para Mahasiswa kecamatan
                        Wanasalam untuk mengamalkan pengetahuannya kepada
                        Masyarakat, yang berfokus pada Pendidikan dan Sosial.
                        Berdiri pada 21 September 2020 atas dasar keinginan yang
                        kuat untuk berkontribusi pada tanah kelahiran.
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="row wrap justify-center q-pa-md q-gutter-sm">
                <div class="col-sm-12 col-md-4">
                    <q-card>
                        <q-card-section class="text-center">
                            <q-avatar
                                size="100px"
                                font-size="52px"
                                color="dark"
                                text-color="white"
                                icon="fas fa-graduation-cap"
                            />
                            <div
                                class="font-quicksand text-h6 text-weight-medium"
                            >
                                MATADEWA Class
                            </div>
                            <q-separator />
                        </q-card-section>
                        <q-card-section>
                            MATADEWA Class merupakan wadah remaja dan pelajar
                            SMP-SMA untuk berbagi pengetahuan serta mempelajari
                            hal baru di luar sekolah.
                        </q-card-section>
                    </q-card>
                </div>
                <div class="col-sm-12 col-md-4">
                    <q-card>
                        <q-card-section class="text-center">
                            <q-avatar
                                size="100px"
                                font-size="52px"
                                color="teal"
                                text-color="white"
                                icon="directions"
                            />
                            <div
                                class="font-quicksand text-h6 text-weight-medium"
                            >
                                CAKRADEWA
                            </div>
                        </q-card-section>
                    </q-card>
                </div>
            </div>
            <q-separator />
        </div>
        <div class="col-12 q-pa-lg">
            <div class="row justify-center items-center">
                <div
                    class="col-12 self-center text-center font-quicksand text-weight-bold text-h5"
                >
                    <div>Kecamatan Wanasalam</div>
                </div>
                <div class="col-md-8 col-sm-12">
                    <div class="font-quicksand text-body1 text-center">
                        MATADEWA merupakan wadah bagi para Mahasiswa kecamatan
                        Wanasalam untuk mengamalkan pengetahuannya kepada
                        Masyarakat, yang berfokus pada Pendidikan dan Sosial.
                        Berdiri pada 21 September 2020 atas dasar keinginan yang
                        kuat untuk berkontribusi pada tanah kelahiran.
                    </div>
                </div>
            </div>
        </div>
    </q-page>
</template>

<style lang="scss">
#tsparticles {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 0;
    margin: 0;
    z-index: 0;
    height: 95vh;
}
</style>

<script>
import { defineComponent } from "vue";
import { loadFull } from "tsparticles";
import particlesConfig from "assets/particlesjs-config.json";
// import { tsParticles } from "tsparticles-engine";

export default defineComponent({
    name: "IndexPage",
    setup() {},
    data() {
        return {
            options: particlesConfig,
        };
    },
    methods: {
        async particlesInit(engine) {
            await loadFull(engine);
        },
    },
});
</script>
