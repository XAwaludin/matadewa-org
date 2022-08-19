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
            <div class="row reverse justify-center q-pa-md q-gutter-sm">
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
                            Matadewa Class adalah program dari komunitas
                            mahasiswa taktis demokratis wanasalam atau matadewa.
                            Matadewa Class merupakan kelas yang menjadi taman
                            Siswa bagi generasi muda di kecamatan wanasalam,
                            matadewa Class terdiri dari beberapa kelas yang
                            disesuaikan dengan kebutuhan generasi muda saat ini
                            dan kedepannya Matadewa Class di isi dengan beberapa
                            class diantaranya adalah perpustakaan digital yang
                            di lengkapi dengan kajian tokoh bedah buku dan lain
                            lain juga terdapat kelas digital seperti penguasaan
                            Microsoft Office word Excel, Power Point dan kelas
                            programer, di Matadewa Class juga terdapat kelas
                            bahasa seperti bahasa Inggris , jepang, Korea dan
                            Arab Dan masih banyak lagi kelas-kelas yang
                            disediakan, seperti kelas sosial, kesenian dan
                            keagamaan juga kelas Advokat.
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
                            >
                                <q-img src="~assets/cakradewa.jpeg" />
                            </q-avatar>
                            <div
                                class="font-quicksand text-h6 text-weight-medium"
                            >
                                CAKRADEWA
                            </div>
                            <q-separator />
                        </q-card-section>
                        <q-card-section>
                            Cendikia Remaja Demokratis Wanasalam atau yang
                            disebut dengan cakradewa adalah salah satu komunitas
                            remaja yang ada di kecamatan wanasalam kabupaten
                            Lebak provinsi Banten, cakradewa juga merupakan
                            sayap juang dari komunitas mahasiswa taktis
                            demokratis wanasalam, Cakradewa mewadahi remaja
                            remaja yang ada di kecamatan wanasalam yang memiliki
                            visi dan tujuan yang sama yakni remaja-remaja yang
                            peduli terhadap masa depan, dirinya, orang lain dan
                            lingkungan sekitarnya.
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
                        Wanasalam adalah sebuah kecamatan di Kabupaten Lebak,
                        Provinsi Banten, Indonesia. Sebagian besar mata
                        pencaharian warganya adalah di sektor perikanan dan
                        pertanian.
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="row justify-center q-gutter-md">
                <div class="col-5">
                    <q-card>
                        <q-card-section class="text-center">
                            <q-avatar
                                color="dark"
                                text-color="white"
                                icon="fas fa-city"
                            />
                            <div class="text-h6">
                                {{ dataKecamatan.listDesa.length }} Desa /
                                Kelurahan
                            </div>
                        </q-card-section>
                    </q-card>
                </div>
                <div class="col-5">
                    <q-card>
                        <q-card-section class="text-center">
                            <q-avatar
                                color="dark"
                                text-color="white"
                                icon="fas fa-person-arrow-up-from-line"
                            />
                            <div class="text-h6">
                                {{ dataKecamatan.totalPenduduk }} Penduduk
                            </div>
                        </q-card-section>
                    </q-card>
                </div>
            </div>
        </div>
        <div class="col-12 q-mt-md">
            <div class="row justify-center q-gutter-md">
                <desa-card
                    v-for="desa in dataKecamatan.listDesa"
                    :key="desa.id"
                    :nama="desa.nama"
                    :penduduk="desa.penduduk_desa.total.toString()"
                    :kode="desa.kode"
                ></desa-card>
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
import { api } from "boot/axios";
import particlesConfig from "assets/particlesjs-config.json";
import DesaCard from "components/DesaCard.vue";

export default defineComponent({
    name: "IndexPage",
    components: {
        DesaCard,
    },
    data() {
        return {
            options: particlesConfig,
            dataKecamatan: {
                totalPenduduk: 0,
                listDesa: [],
            },
        };
    },
    methods: {
        async particlesInit(engine) {
            await loadFull(engine);
        },

        fetchDataKecamatan() {
            api.get("/desa").then((res1) => {
                const response = res1.data;
                if (response.success) {
                    response.results.forEach((desa) => {
                        let tmpDesa = {
                            id: desa.id,
                            nama: desa.nama,
                            kode: desa.kode,
                            penduduk_desa: {
                                total:
                                    desa.penduduk_desa[0].lakiLaki +
                                    desa.penduduk_desa[0].perempuan,
                                laki_laki: desa.penduduk_desa[0].lakiLaki,
                                perempuan: desa.penduduk_desa[0].perempuan,
                            },
                            profil_desa: desa.profile_desa[0],
                        };
                        this.dataKecamatan.totalPenduduk +=
                            tmpDesa.penduduk_desa.total;

                        this.dataKecamatan.listDesa.push(tmpDesa);
                    });
                }
            });
        },
    },
    mounted() {
        this.fetchDataKecamatan();
    },
});
</script>
