<template>
  <v-app >
    <v-app-bar density="comfortable" elevation="0" class="px-6" style="background:#f1e8e3;">
      <!-- <v-app-bar-nav-icon variant="text"></v-app-bar-nav-icon> -->
       <v-app-bar-title class="font-weight-bold">
            MBM VBI 5
        </v-app-bar-title>
      
      <v-spacer></v-spacer>

      <!-- Desktop Menu Items -->
      <v-btn variant="text" @click="$router.push('/')">Home</v-btn>
      <v-btn variant="text" @click="$router.push('/announcements')">Kajian</v-btn>
      <v-btn variant="text" @click="$router.push('/informations')">Informasi</v-btn>
    </v-app-bar>

    <v-main style="background:#f1e8e3;">
      <!-- Page Content Goes Here -->
       <router-view  />
    </v-main>
  </v-app>
</template>