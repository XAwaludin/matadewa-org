<template>
    <q-page padding>
        <!-- content -->
        <div class="fit row wrap justify-center items-start content-start">
            <div class="col-xs-12 col-md-4">
                <q-card class="q-ma-sm text-center">
                    <q-img
                        src="~assets/no-image.png"
                        style="width: 100%; max-width: 350px; height: auto"
                    />
                    <div class="row text-left">
                        <q-card-section>
                            <div class="text-h6">Desa {{ desaInfo.nama }}</div>
                            <div class="text-subtitle2 text-grey">
                                Kode PUM: {{ desaInfo.kode }}
                            </div>
                        </q-card-section>
                        <q-space />
                        <q-card-actions align="right">
                            <q-btn
                                flat
                                round
                                color="dark"
                                icon="fas fa-share-nodes"
                            />
                            <q-btn
                                flat
                                round
                                color="dark"
                                icon="fas fa-map-location"
                            />
                        </q-card-actions>
                    </div>
                    <q-separator />
                    <q-card-section class="text-left">
                        <div>{{ desaInfo.imgCarousel }}</div>
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-xs-12 col-md-8">
                <q-card class="q-ma-sm">
                    <q-img
                        src="https://cdn.quasar.dev/img/chicken-salad.jpg"
                        style="width: 100%; max-width: 400px; height: auto"
                    />
                    <q-card-section>
                        <div class="text-h6">Profil Desa</div>
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </q-page>
</template>

<script scoped>
import { api } from "boot/axios";
export default {
    name: "DesaProfilePage",
    data() {
        return {
            desaInfo: {},
        };
    },
    methods: {
        getDesaInfo(kode) {
            api.get(`/desa/${kode}`).then((res) => {
                let response = res.data;
                this.desaInfo = response.results[0];
            });
        },
    },
    mounted() {
        this.getDesaInfo(this.$route.params.kode);
    },
};
</script>
