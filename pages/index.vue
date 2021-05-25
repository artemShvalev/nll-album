<template>
  <v-app app>
    <v-main app>
      <AudioPlayer />
    </v-main>
  </v-app>
</template>

<script>
import AudioPlayer from './AudioPlayer.vue'
export default {
  components: {
    AudioPlayer
  }
}
</script>
