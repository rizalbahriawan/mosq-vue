<template>
  <v-container v-if="announcement">
    <v-btn color="secondary" density="compact" @click="$router.back()" class="mb-4"><v-icon size="small">mdi-arrow-left</v-icon></v-btn>

    <v-card class="mx-auto" elevation="4">
        <v-card-title>{{ announcement.title }}</v-card-title>
        <v-card-subtitle class="my-2">
            {{ formatDate(announcement.date) }}
        </v-card-subtitle>
        <v-divider></v-divider>
        <v-card-text v-html="announcement.body">
        </v-card-text>
        <v-img
            v-if="announcement.image"
            :src="announcement.image"
            height="600"
            class="mb-4"
            />
    </v-card>
  </v-container>

  <v-container v-else>
    <h2>Not Found</h2>
  </v-container>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useAnnouncements } from '@/composables/useAnnouncements'

const route = useRoute()
const { announcements } = useAnnouncements()

const announcement = computed(() =>
  announcements.find(a => a.slug === route.params.slug)
)

function formatDate(date) {
  return new Date(date).toLocaleDateString()
}
</script>