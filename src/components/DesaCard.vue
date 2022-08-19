<template>
    <q-card class="font-quicksand" style="width: 100%; max-width: 350px">
        <q-card-section>
            <div class="text-overline">Desa</div>
            <div class="text-h6">{{ nama }}</div>
            <div class="text-caption text-grey">{{ penduduk }} Penduduk</div>
        </q-card-section>
        <q-card-actions align="right">
            <q-btn :to="'/desa/' + kode" color="dark">Lihat</q-btn>
        </q-card-actions>
    </q-card>
</template>

<script>
export default {
    name: "DesaCard",
    props: {
        nama: {
            type: String,
            required: true,
        },
        penduduk: {
            type: String,
            default: "-",
        },
        kode: {
            type: String,
            required: true,
        },
    },
    setup() {
        return {};
    },
};
</script>
