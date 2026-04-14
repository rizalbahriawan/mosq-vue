<template>
    <v-container >
        <h1>Informasi</h1>

        <v-card
        v-for="a in sortedInformations"
        :key="a.slug"
        class="mx-auto mb-5"
        elevation="4"
        >
            
            <v-card-title>{{ a.title }}</v-card-title>

            <v-card-subtitle>
                {{ formatDate(a.date) }}
            </v-card-subtitle>
            <v-card-actions class="justify-end">
                <v-btn
                    :to="`/informations/${a.slug}`"
                    color="primary"
                    text="Detail"
                ></v-btn>
            </v-card-actions>
        </v-card>

    </v-container>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useInformations } from '@/composables/useInformations'

const { informations } = useInformations()

// sort newest first
const sortedInformations = computed(() =>
  [...informations].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )
)

function formatDate(date) {
  return new Date(date).toLocaleDateString()
}
</script>
