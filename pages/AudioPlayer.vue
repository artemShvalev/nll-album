<template>
  <v-app app>
    <v-card
      app
    >
      <v-parallax
        :src="require('~/assets/img/nav.png')"
        height="200"
      />
    </v-card>
    <!-- Cами треки -->
    <v-card color="#1A237E" class="mt-1">
      <v-card-title class="d-flex justify-center">
        Intro
      </v-card-title>
      <v-card-actions class="d-flex justify-center">
        <v-btn icon @click.stop="playSound">
          <v-icon> mdi-play-circle-outline </v-icon>
        </v-btn>
        <v-btn icon @click.stop="playStop">
          <v-icon> mdi-stop-circle-outline </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-divider />
    <!-- /*Покинутый горрод*/ -->
    <v-card outlined color="#42A5F5">
      <v-card-title class="d-flex justify-center">
        Покинутый город
      </v-card-title>
      <v-card-actions class="d-flex justify-center position-x">
        <v-btn icon @click.stop="playSoundCity" @click="transition.expand2 = !transition.expand2">
          <v-icon> mdi-play-circle-outline </v-icon>
        </v-btn>
        <v-fab-transition>
          <v-card-text v-show="transition.expand2" class="text-center">
            Подожди, лишь обними меня <br>
            Подними свои глаза <br>
            Я слишком стар чтобы понять тебя <br>
            Так много сил тебе отдал <br>

            Буди нас всех<br>
            Кто в эту ночь уснул <br>
            И прогоняй<br>
            Из домов прочь<br>

            Город мой<br>
            Город мой<br>

            Мы разведем в последний раз мосты<br>
            Оставим свет<br>
            Оставим след<br>
            Надежду<br>
            В город мой<br>

            Все застыло<br>
            Что случилось<br>
            Ответь наш друг?<br>
            Покинутый однажды город мой<br>
          </v-card-text>
        </v-fab-transition>
        <v-btn icon @click.stop="playStopCity" @click="transition.expand2 = !transition.expand2">
          <v-icon> mdi-stop-circle-outline </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <!-- Контроль -->
    <v-card outlined color="#B71C1C">
      <v-card-title class="d-flex justify-center">
        Контроль
      </v-card-title>
      <v-card-actions class="d-flex justify-center">
        <v-btn icon @click.stop="playSoundControl" @click="transition.expand = !transition.expand">
          <v-icon> mdi-play-circle-outline </v-icon>
        </v-btn>
        <v-fab-transition>
          <v-card-text v-show="transition.expand" class="text-center">
            Сам не свой  я был, а дождь все лил<br>
            Приложил я ствол к виску<br>
            И застыл<br>

            Я хотел нажать курок<br>
            Но ты...ты<br>
            ооо...я потерял контроль<br>
            Я потерял контроль<br>
            С тобой<br>
            Сам не свой  я был, а дождь все лил<br>
            Мокрый палец у курка приложил<br>

            Я хотел нажать его<br>
            Но ты...ты<br>
            ооо...я потерял контроль<br>
            Я потерял контроль<br>
            С тобой<br>
          </v-card-text>
        </v-fab-transition>
        <v-btn icon @click.stop="playStopControl" @click="transition.expand = !transition.expand">
          <v-icon> mdi-stop-circle-outline </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <!-- Статистика -->
    <v-card outlined color="#C0CA33">
      <v-card-title class="d-flex justify-center">
        Статистика
      </v-card-title>
      <v-card-actions class="d-flex justify-center">
        <v-btn icon @click.stop="playSoundStatistics" @click="transition.expand3 = !transition.expand3">
          <v-icon> mdi-play-circle-outline </v-icon>
        </v-btn>
        <v-fab-transition>
          <v-card-text v-show="transition.expand3" class="text-center">
            По статистике бабочка живет всего один день<br>
            В полях умирая<br>
            По стастике человек живет всего 67 лет<br>
            А я уже умираю<br>

            По статистике каждый находит  кого то еще<br>
            Но я одинок<br>
            По статистике люди ищут способ остаться собой<br>
            Но я не ищу<br>
          </v-card-text>
        </v-fab-transition>
        <v-btn icon @click.stop="playStopStatistics" @click="transition.expand3 = !transition.expand3">
          <v-icon> mdi-stop-circle-outline </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <!-- Мелкий песок -->
    <v-card outlined color="#7CB342">
      <v-card-title class="d-flex justify-center">
        Меклкий Песок
      </v-card-title>
      <v-card-actions class="d-flex justify-center">
        <v-btn icon @click.stop="playSoundPesok" @click="transition.expand4 = !transition.expand4">
          <v-icon> mdi-play-circle-outline </v-icon>
        </v-btn>
        <v-fab-transition>
          <v-card-text v-show="transition.expand4" class="text-center">
            Мелкий песок<br>
            Пролетит сквозь нас<br>
            Оставив за собой<br>
            Осколки острых фраз<br>

            Мелкий песок<br>
            Ветром несет<br>
            По улицам домов<br>
            По улицам,вдоль трас<br>

            Мелкий песок<br>
            Чужд нашим краям<br>
            Гонят  с дорог<br>
            Подавляют огнем<br>
            Самолетами<br>

            Ревут огни<br>
            От тяжелых ран<br>
            Он не похож на вас<br>
            Истрибить его<br>
          </v-card-text>
        </v-fab-transition>
        <v-btn icon @click.stop="playStopPesok" @click="transition.expand4 = !transition.expand4">
          <v-icon> mdi-stop-circle-outline </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <!-- Trip -->
    <v-card outlined color="#FFA726">
      <v-card-title class="d-flex justify-center">
        Трип
      </v-card-title>
      <v-card-actions class="d-flex justify-center">
        <v-btn icon @click.stop="playSoundTrip" @click="transition.expand5 = !transition.expand5">
          <v-icon> mdi-play-circle-outline </v-icon>
        </v-btn>
        <v-fab-transition>
          <v-card-text v-show="transition.expand5" class="text-center">
            Мы немного устали<br>
            По сидели поспали<br>
            По курили пошли<br>

            Одинокие горы<br>
            Странные разговоры<br>
            Позади полпути<br>

            Но я слышу<br>
            Как дышат звезды<br>
            Для чего же я создан<br>
            Может быть для тебя<br>

            И мы<br>
            В этой темной вселенной<br>
            Доедаем консервы<br>
            И греемся у костра<br>
          </v-card-text>
        </v-fab-transition>
        <v-btn icon @click.stop="playStopTrip" @click="transition.expand5 = !transition.expand5">
          <v-icon> mdi-stop-circle-outline </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card
      app
    >
      <v-parallax
        :src="require('~/assets/img/footer.png')"
        height="250"
      />
    </v-card>
  </v-app>
</template>

<script>
import song from '@/assets/01.ogg'
import city from '@/assets/02.ogg'
import control from '@/assets/03.ogg'
import statistics from '@/assets/04.ogg'
import pesok from '@/assets/05.ogg'
import trip from '@/assets/06.ogg'

export default {
  data () {
    return {
      audio: new Audio(song),
      audioCity: new Audio(city),
      audioControl: new Audio(control),
      audioStatistics: new Audio(statistics),
      audioPesok: new Audio(pesok),
      audioTrip: new Audio(trip),
      transition: {
        expand: false,
        expand2: false,
        expand3: false,
        expand4: false,
        expand5: false

      },
      testsSongs: {
        textCity: false,
        textControl: false
      }

    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },
  methods: {
    playSound () {
      // eslint-disable-next-line no-use-before-define
      const { audio } = 'audio/ogg'
      const playPromise = this.audio.play()
      playPromise.data = audio

      if (playPromise !== undefined) {
        playPromise
          .then((_) => {
          })
          .catch((error) => {
            alert(`ошибка: ${error}`)
          })
        // eslint-disable-next-line no-unused-expressions
      }
    },
    playStop () {
      this.audio.pause()
    },
    playSoundCity () {
      const { audioCity } = 'audio/ogg'
      const playPromise = this.audioCity.play()
      playPromise.data = audioCity
      if (playPromise !== undefined) {
        playPromise
          .then((_) => {
          })
          .catch((error) => {
            alert(`ошибка вот она: ${error}`)
          })
      }
    },
    playStopCity () {
      this.audioCity.pause()
    },
    playSoundControl () {
      const { audioControl } = 'audio/ogg'
      const playPromise = this.audioControl.play()
      playPromise.data = audioControl
      if (playPromise !== undefined) {
        playPromise
          .then((_) => {
          })
          .catch((error) => {
            alert(`ошибка вот она: ${error}`)
          })
      }
    },
    playStopControl () {
      this.audioControl.pause()
    },
    playSoundStatistics () {
      const { audioStatistics } = 'audio/ogg'
      const playPromise = this.audioStatistics.play()
      playPromise.data = audioStatistics
      if (playPromise !== undefined) {
        playPromise
          .then((_) => {
          })
          .catch((error) => {
            alert(`ошибка вот она: ${error}`)
          })
      }
    },
    playStopStatistics () {
      this.audioStatistics.pause()
    },
    playSoundPesok () {
      const { audioPesok } = 'audio/ogg'
      const playPromise = this.audioPesok.play()
      playPromise.data = audioPesok
      if (playPromise !== undefined) {
        playPromise
          .then((_) => {
          })
          .catch((error) => {
            alert(`ошибка вот она: ${error}`)
          })
      }
    },
    playStopPesok () {
      this.audioPesok.pause()
    },
    playSoundTrip () {
      const { audioTrip } = 'audio/ogg'
      const playPromise = this.audioTrip.play()
      playPromise.data = audioTrip
      if (playPromise !== undefined) {
        playPromise
          .then((_) => {
          })
          .catch((error) => {
            alert(`ошибка вот она: ${error}`)
          })
      }
    },
    playStopTrip () {
      this.audioTrip.pause()
    }
  }
}
</script>
