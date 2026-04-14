<template>
    <v-container >
        <h1>Kajian</h1>

        <v-card
        v-for="a in sortedAnnouncements"
        :key="a.slug"
        class="mx-auto mb-5"
        elevation="4"
        >
            <!-- <v-img
                v-if="a.image"
                :src="a.image"
                height="200px"
                cover
            /> -->
            <v-img
                src="https://picsum.photos/id/109/1200/200"
                height="200px"
                cover
            />
            <div style="background:#F4F7F2">
                <v-card-title>{{ a.title }}</v-card-title>

                <v-card-subtitle>
                    Tanggal {{ formatDate(a.date) }} oleh {{ a.speaker }}
                </v-card-subtitle>
                <v-card-actions class="justify-end">
                    <v-btn
                        :to="`/announcements/${a.slug}`"
                        color="primary"
                        text="Detail"
                    ></v-btn>
                </v-card-actions>
            </div>
            
        </v-card>

    </v-container>
</template>

<script setup>
import { computed, ref } from 'vue'
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
