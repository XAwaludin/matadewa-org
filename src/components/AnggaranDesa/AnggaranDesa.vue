<template>
    <q-card>
        <q-banner inline-actions class="text-white bg-warning">
            Fitur ini sedang dalam pengembangan, data yang di tampilkan belum di
            validasi
        </q-banner>
        <q-card-section>
            <div class="row">
                <div class="col">
                    <div class="text-h6">Anggaran Dana Desa</div>
                    <div class="text-caption text-grey">
                        Diperbarui {{ currentdata_info.updated }}
                    </div>
                </div>
                <div class="col-auto" style="max-width: 300px">
                    <q-select
                        v-model="year"
                        :options="yearlist"
                        label="Tahun"
                        outlined
                        dense
                    />
                </div>
            </div>
        </q-card-section>
        <q-card-section>
            <div class="row justify-around">
                <div class="col-auto text-center">
                    <div>PAGU</div>
                    <div class="text-weight-bold text-primary">
                        {{ currentdata_info.pagu }}
                    </div>
                </div>
                <div class="col-auto text-center">
                    <div>PENYALURAN</div>
                    <div class="text-weight-bold text-secondary">
                        {{ currentdata_info.total_penyaluran }}
                    </div>
                </div>
            </div>
        </q-card-section>
        <q-tabs
            v-model="tab"
            align="justify"
            active-color="dark"
            class="text-grey"
            narrow-indicator
            dense
        >
            <q-tab name="1" label="Tahap 1" />
            <q-tab name="2" label="Tahap 2" />
            <q-tab name="3" label="Tahap 3" />
        </q-tabs>
        <q-separator />
        <q-tab-panels v-model="tab" animated>
            <q-tab-panel :name="tab">
                <div class="row">
                    <div class="col">
                        <div>Realisasi Penyaluran</div>
                        <div class="text-weight-bold">
                            {{ currentdata_info.realisasi }}
                        </div>
                    </div>
                    <div class="col-auto">
                        <div>Tanggal Diterima</div>
                        <div class="text-center text-weight-bold">
                            {{ currentdata_info.tanggal_realisasi }}
                        </div>
                    </div>
                </div>
            </q-tab-panel>
        </q-tab-panels>
        <q-separator />
        <AnggaranDesaTable :data="currentdata" />
    </q-card>
</template>

<script scoped>
import AnggaranDesaTable from "./AnggaranDesaTable.vue";

export default {
    name: "AnggaranDesa",
    components: {
        AnggaranDesaTable,
    },
    props: {
        data: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            tab: "1",
            maplist: new Map(),
            yearlist: [],
            year: "2018",
            currentdata: [],
            currentdata_info: {
                pagu: "Rp 0",
                total_penyaluran: "Rp 0",
                realisasi: "Rp 0",
                tanggal_realisasi: "-",
                updated: "-",
            },
        };
    },
    methods: {
        fetchData(data) {
            console.log(data);
        },
        setCurrentTable(tab = null, year = null) {
            if (!year) {
                year = this.year;
            }
            if (!tab) {
                tab = this.tab;
            }

            if (this.maplist.has(year)) {
                let tmp = this.maplist.get(year);
                this.currentdata = tmp.penyerapan[tab];
                this.currentdata_info.pagu = tmp.pagu;
                this.currentdata_info.total_penyaluran = tmp.total_penyaluran;
                this.currentdata_info.realisasi = this.toRupiah(
                    tmp.penyaluran[tab].realisasi
                );
                this.currentdata_info.tanggal_realisasi =
                    tmp.penyaluran[tab].tanggal_realisasi;
                this.currentdata_info.updated = new Date(tmp.updated)
                    .toISOString()
                    .slice(0, 19)
                    .replace("T", " ");
            } else {
                this.currentdata = [];
            }
        },
        toRupiah(number) {
            return new Intl.NumberFormat("id", {
                style: "currency",
                currency: "IDR",
            }).format(number);
        },
    },
    computed: {
        listdata() {
            return this.data;
        },
    },
    watch: {
        listdata: function (newVal, oldVal) {
            if (newVal) {
                this.yearlist = [];
                newVal.forEach((val) => {
                    this.maplist.set(val.tahun, {
                        desa_id: val.desaId,
                        kode: val.kode,
                        pagu: this.toRupiah(val.pagu),
                        total_penyaluran: this.toRupiah(val.totalPenyaluran),
                        penyaluran: JSON.parse(val.penyaluran),
                        penyerapan: JSON.parse(val.penyerapan),
                        tahun: val.tahun,
                        updated: val.updated,
                    });
                    if (val.tahun > this.year) {
                        this.year = val.tahun;
                    }
                    this.yearlist.push(val.tahun);
                });
                this.setCurrentTable(this.tab);
            }
        },
        tab: function (newVal, oldVal) {
            this.setCurrentTable(newVal);
        },
        year: function (newVal, oldVal) {
            this.setCurrentTable(null, newVal);
        },
    },
};
</script>
