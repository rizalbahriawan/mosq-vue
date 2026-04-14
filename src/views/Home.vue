<template>
  <v-container fluid class="pa-0">
    <v-row class="fill-height align-center px-10" style="min-height: 80vh;">
      
      <!-- LEFT CONTENT -->
      <v-col cols="12" md="6">
        <h1 class="text-h3 font-weight-bold text-green-darken-2 mb-4 title-font">
          Masjid Baitul Maqdis <br />
          Villa Bogor Indah 5
        </h1>

        <p class="text-body-1 text-grey-darken-1 mb-6">
          Assalamualaikum warahmatullahi wabarakatuh<br>
          Ahlan wa Sahlan, selamat datang di Masjid Baitul Maqdis Villa Bogor Indah 5 <br>
          Temukan informasi kajian dan pengumuman terbaru
        </p>

        <v-btn @click="$router.push('/announcements')" color="green-darken-2" size="large" rounded="xl">
          Kajian
        </v-btn>
      </v-col>

      <!-- RIGHT IMAGE -->
      <v-col cols="12" md="6" class="text-center">
        <v-img
          src="/5144956.jpg"
          max-width="800"
          class="mx-auto"
          contain
        />
      </v-col>

    </v-row>
  </v-container>
</template>

<style>
.title-font {
  font-family: 'Playfair Display', serif;
}
</style>