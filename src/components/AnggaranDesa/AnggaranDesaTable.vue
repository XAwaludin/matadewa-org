<template>
    <q-table
        :columns="columns"
        :rows="tableList"
        separator="cell"
        :dense="$q.screen.xs"
        no-data-label="Mohon maaf, data belum tersedia"
        :rows-per-page-options="[0]"
    >
        <template #no-data="{ message }">
            <div class="full-width row flex-center text-red q-gutter-sm">
                <span class="text-weight-bold">{{ message }}</span>
            </div>
        </template>
        <template #header="props">
            <q-tr :props="props">
                <q-th />
                <q-th />
                <q-th
                    v-for="col in props.cols"
                    :key="col.name"
                    :props="props"
                    >{{ col.label }}</q-th
                >
            </q-tr>
        </template>
        <template #body="props">
            <template v-for="table in props.row" :key="table">
                <q-tr :props="props" v-if="typeof table == 'string'">
                    <q-td colspan="100%" class="text-weight-bold">
                        {{ props.rowIndex + 1 }}. {{ table }}
                    </q-td>
                </q-tr>
                <template v-if="typeof table == 'object'">
                    <template v-for="(act, indexAct) in table" :key="act">
                        <q-tr v-if="typeof act.activityTitle == 'string'">
                            <q-td />
                            <q-td colspan="100%" class="text-weight-bold">
                                {{ props.rowIndex + 1 }}.{{ indexAct + 1 }}.{{
                                    act.activityTitle
                                }}
                            </q-td>
                        </q-tr>
                        <q-tr v-for="desc in act.desclist" :key="desc">
                            <q-td />
                            <q-td />
                            <q-td>{{ desc.nama }}</q-td>
                            <q-td align="right">{{ desc.anggaran }}</q-td>
                            <q-td align="right">{{ desc.realisasi }}</q-td>
                        </q-tr>
                    </template>
                </template>
            </template>
        </template>
    </q-table>
</template>

<script>
export default {
    name: "AnggaranDesaTable",
    props: {
        data: {
            type: Array,
            required: true,
        },
    },
    setup() {
        return {};
    },
    data() {
        return {
            columns: [
                { name: "nama", label: "Nama", field: "nama", align: "center" },
                {
                    name: "anggaran",
                    label: "Anggaran",
                    field: "anggaran",
                    align: "center",
                },
                {
                    name: "realisasi",
                    label: "Realisasi",
                    field: "realisasi",
                    align: "center",
                },
            ],
            tableList: [],
        };
    },
    methods: {
        toRupiah(number) {
            return new Intl.NumberFormat("id", {
                style: "currency",
                currency: "IDR",
            }).format(number);
        },
    },
    watch: {
        data: function (newVal, oldVal) {
            this.tableList = [];
            if (newVal) {
                newVal.forEach((table, indexTable) => {
                    this.tableList.push({
                        tableTitile: table.nama,
                        activity: [],
                    });
                    table.kegiatan.forEach((activity, indexActivity) => {
                        this.tableList[indexTable].activity.push({
                            activityTitle: activity.nama,
                            desclist: [],
                        });
                        activity.uraian.forEach((desc, indexDesc) => {
                            this.tableList[indexTable].activity[
                                indexActivity
                            ].desclist.push({
                                nama: desc.nama,
                                anggaran: this.toRupiah(
                                    desc.anggaran.toFixed()
                                ),
                                realisasi: this.toRupiah(
                                    desc.realisasi.toFixed()
                                ),
                            });
                        });
                    });
                });
            }
        },
    },
};
</script>
