<template>
    <v-container>
        <!-- <h1>on Progress</h1> -->

        <!-- <v-card
        v-for="p in products"
        :key="p.id"
        class="mb-4"
        >
            

            <v-card-title>{{ p.speaker }}</v-card-title>

            <v-card-subtitle>
                {{ formatDate(p.date) }}
            </v-card-subtitle>

            <v-card-text v-html="p.content"></v-card-text>
        </v-card> -->

    </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// import { supabase } from '@/lib/supabaseClient'

const products = ref([])

async function getProducts() {
  const { data } = await supabase.from('announcements').select()
  products.value = data
}

onMounted(() => {
//    getProducts()
})

function formatDate(date) {
  return new Date(date).toLocaleDateString()
}
</script>