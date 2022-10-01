<template>
    <q-page padding>
        <!-- content -->
        <div class="fit row wrap justify-center items-start content-start">
            <div class="col-xs-12 col-md-4">
                <q-card class="q-ma-sm text-center">
                    <q-carousel
                        animated
                        v-model="slide"
                        navigation
                        infinite
                        :autoplay="true"
                        arrows
                        transition-prev="slide-right"
                        transition-next="slide-left"
                        @mouseenter="autoplay = false"
                        @mouseleave="autoplay = true"
                    >
                        <q-carousel-slide
                            v-for="image in desaInfo.imgCarousel"
                            :key="image"
                            :name="image"
                            :img-src="getImage(image)"
                        />
                    </q-carousel>

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
                                @click="maintenance"
                            />
                            <q-btn
                                flat
                                round
                                color="dark"
                                icon="fas fa-map-location"
                                @click="maintenance"
                            />
                        </q-card-actions>
                    </div>
                    <q-separator />

                    <q-list class="text-left">
                        <q-item-label header>Penduduk</q-item-label>
                        <q-item>
                            <q-item-section>
                                <q-item-label caption>
                                    Jumlah Laki-laki
                                </q-item-label>
                                <q-item-label>
                                    -+
                                    {{ penduduk_desa.laki_laki || 0 }}
                                </q-item-label>
                            </q-item-section>
                            <q-item-section>
                                <q-item-label caption>
                                    Jumlah Perempuan
                                </q-item-label>
                                <q-item-label>
                                    -+
                                    {{ penduduk_desa.perempuan || 0 }}
                                </q-item-label>
                            </q-item-section>
                        </q-item>
                        <q-item>
                            <q-item-section>
                                <q-item-label caption>
                                    Jumlah Penduduk
                                </q-item-label>
                                <q-item-label>
                                    -+
                                    {{
                                        (penduduk_desa.perempuan || 0) +
                                        (penduduk_desa.laki_laki || 0)
                                    }}
                                </q-item-label>
                            </q-item-section>
                            <q-item-section>
                                <q-item-label caption> Jumlah KK </q-item-label>
                                <q-item-label>
                                    -+
                                    {{
                                        profile_desa.kesejahteraan.jumlah_kk ||
                                        0
                                    }}
                                </q-item-label>
                            </q-item-section>
                        </q-item>
                        <q-item-label header>
                            Diperbarui {{ profile_desa.updated }}
                        </q-item-label>
                    </q-list>
                </q-card>
            </div>
            <div class="col-xs-12 col-md-8">
                <anggaran-desa-vue :data="anggaran_desa" class="q-ma-sm" />
            </div>
        </div>
    </q-page>
</template>

<script scoped>
import { api } from "boot/axios";
import { useQuasar } from "quasar";
import AnggaranDesaVue from "components/AnggaranDesa";

export default {
    name: "DesaProfilePage",
    components: {
        AnggaranDesaVue,
    },
    setup() {
        const $q = useQuasar();
        return {
            maintenance() {
                $q.notify({
                    message: "Sedang dalam pengembangan",
                    color: "dark",
                    timeout: 500,
                    actions: [
                        { label: "OK", color: "white", handler: () => {} },
                    ],
                });
            },
        };
    },
    data() {
        return {
            desaInfo: {
                kode: null,
                nama: null,
                imgCarousel: [],
            },
            profile_desa: {
                jumlah_penduduk: 0,
                sarana: {},
                kesejahteraan: {},
                luas: 0,
                koordinat: {},
                updated: null,
            },
            penduduk_desa: {
                laki_laki: 0,
                perempuan: 0,
                total: 0,
            },
            anggaran_desa: [],
            slide: null,
        };
    },
    methods: {
        getDesaInfo(kode) {
            api.get(`/desa/${kode}`).then((res) => {
                if (res.data.results.length !== 0) {
                    let response = res.data.results[0];
                    this.desaInfo.kode = response.kode;
                    this.desaInfo.nama = response.nama;
                    this.desaInfo.imgCarousel = response.imgCarousel.split("|");
                    this.slide = this.desaInfo.imgCarousel[0];

                    let profileDesa = response.profile_desa[0];
                    this.profile_desa.jumlah_penduduk =
                        profileDesa.jumlahPenduduk;
                    this.profile_desa.sarana = JSON.parse(profileDesa.sarana);
                    this.profile_desa.kesejahteraan = JSON.parse(
                        profileDesa.kesejahteraan
                    );
                    this.profile_desa.luas = profileDesa.luas;
                    this.profile_desa.koordinat = JSON.parse(
                        profileDesa.koordinat
                    );
                    this.profile_desa.updated = new Date(profileDesa.updated)
                        .toISOString()
                        .slice(0, 19)
                        .replace("T", " ");

                    let pendudukDesa = response.penduduk_desa[0];
                    this.penduduk_desa.laki_laki = pendudukDesa.lakiLaki;
                    this.penduduk_desa.perempuan = pendudukDesa.perempuan;
                    this.penduduk_desa.total =
                        pendudukDesa.lakiLaki + pendudukDesa.perempuan;
                    this.anggaran_desa = response.anggaran_desa;
                }
            });
        },

        getImage(img) {
            if (img.includes("https://") || img.includes("http://")) {
                return img;
            }

            return `${api.defaults.baseURL}/data/image/${img}`;
        },
    },
    created() {
        this.getDesaInfo(this.$route.params.kode);
    },
    watch: {
        "$route.params.kode"() {
            this.getDesaInfo(this.$route.params.kode);
        },
    },
};
</script>
