<template>
    <v-container>
        <h1>Announcements</h1>

        <v-card
        v-for="a in sortedAnnouncements"
        :key="a.slug"
        class="mb-4"
        >
            <v-img
                v-if="a.image"
                :src="a.image"
                height="200"
                class="my-4"
            />

            <v-card-title>{{ a.title }}</v-card-title>

            <v-card-subtitle>
                {{ formatDate(a.date) }}
            </v-card-subtitle>

            <v-card-text v-html="a.body"></v-card-text>
        </v-card>

    </v-container>
</template>

<script setup>
import { computed } from 'vue'
import { useAnnouncements } from '@/composables/useAnnouncements'

const { announcements } = useAnnouncements()

// sort newest first
const sortedAnnouncements = computed(() =>
  [...announcements].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )
)

function formatDate(date) {
  return new Date(date).toLocaleDateString()
}
</script>
