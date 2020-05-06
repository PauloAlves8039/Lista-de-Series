<template>
  <div class="row justify-content-center">
    <div class="col-md-5">
      <h3 class="text-center text-primary">Atualizar Série</h3>

      <b-alert
          :show="dismissCountDown"
          dismissible
          :variant="message.color"
          @dismissed="dismissCountDown=0"
          @dismiss-count-down="countDownChanged"
        >
        {{message.texto}}
      </b-alert>

      <form @submit.prevent="atualziarSerie">
        <div class="form-group">
          <label>título</label>
          <input type="text" class="form-control" v-model="serie.titulo" required />
        </div>

        <div class="form-group">
          <label>Gênero</label>
          <input type="text" class="form-control" v-model="serie.genero" required />
        </div>

        <div class="form-group">
          <label>Temporadas</label>
          <input type="text" class="form-control" v-model="serie.temporadas" required />
        </div>

        <div class="form-group">
          <b-button class="mt-2" pill variant="primary" block type="submit">Confirmar</b-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { db } from '../database/firebase'

export default {
  data () {
    return {
      serie: {},
      message: { color: 'primary', texto: '' },
      dismissSecs: 5,
      dismissCountDown: 0
    }
  },
  created () {
    /**
     * @description: Realiza uma pesquisa da série por id no carregamento da página.
     */
    const dbRef = db.collection('series').doc(this.$route.params.id)
    dbRef.get().then(doc => {
      this.serie = doc.data()
    }).catch(e => {
      console.error(e)
    })
  },
  methods: {
    /**
     * Atualiza a série por id.
     * @function
     * @name atualziarSerie
     */
    atualziarSerie (event) {
      event.preventDefault()
      db.collection('series').doc(this.$route.params.id)
        .update(this.serie)
        .then(() => {
          this.message.color = 'primary'
          this.message.texto = 'Série atualizada com sucesso!'
          this.showAlert()
          setTimeout(() => {
            this.$router.push('/listar')
          }, 5000)
        }).catch(e => {
          console.error(e)
        })
    },

    /**
     * Realiza uma contagem de exibição do alerta na operação de atualização de resgistro da série.
     * @function
     * @name countDownChanged
     */
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },

    /**
     * Efetua a exibição do alerta.
     * @function
     * @name showAlert
     */
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    }
  }
}
</script>
