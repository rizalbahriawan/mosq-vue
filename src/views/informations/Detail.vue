<template>
  <v-container v-if="information">
    <v-btn color="secondary" density="compact" @click="$router.back()" class="mb-4"><v-icon size="small">mdi-arrow-left</v-icon></v-btn>

    <v-card class="mx-auto" elevation="4">
        <v-card-title>{{ information.title }}</v-card-title>
        <v-card-subtitle class="my-2">
            {{ formatDate(information.date) }}
        </v-card-subtitle>
        <v-divider></v-divider>
        <v-card-text v-html="information.body">
        </v-card-text>
        <v-row v-if="information.gallery?.length" class="my-4 mx-2">
            <v-col
                v-for="(img, i) in information.gallery"
                :key="i"
                cols="12"
                sm="6"
                md="4"
            >
                <v-img
                :src="img"
                height="200"
                cover
                class="rounded-lg"
                @click="openImage(img)"
                style="cursor: pointer"
                />
            </v-col>
        </v-row>
        <v-dialog v-model="dialog" max-width="800">
            <v-img :src="activeImage" />
        </v-dialog>
    </v-card>
  </v-container>

  <v-container v-else>
    <h2>Not Found</h2>
  </v-container>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'
import { useInformations } from '@/composables/useInformations'

const route = useRoute()
const { informations } = useInformations()

const information = computed(() =>
  informations.find(a => a.slug === route.params.slug)
)

function formatDate(date) {
  return new Date(date).toLocaleDateString()
}

const dialog = ref(false)
const activeImage = ref('')
function openImage(img) {
  activeImage.value = img
  dialog.value = true
}
</script>