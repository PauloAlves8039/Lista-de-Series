<template>
  <div class="row justify-content-center">
    <div class="col-md-5">
      <h3 id="titulo-adicionar" class="text-center">Adicionar Série</h3>

      <b-alert
        :show="dismissCountDown"
        dismissible
        :variant="message.color"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
      >
      {{message.texto}}
    </b-alert>

      <form @submit.prevent="adicionarNovaSerie">
        <div class="form-group">
          <label>Título</label>
          <input type="text" class="form-control" required v-model="serie.titulo">
        </div>
        <div class="form-group">
          <label>Gênero</label>
          <input type="text" class="form-control" required v-model="serie.genero">
        </div>
        <div class="form-group">
          <label>Temporadas</label>
          <input type="number" class="form-control" required v-model="serie.temporadas">
        </div>
        <div class="form-group">
          <b-button class="mt-2" pill variant="success" block type="submit">Salvar</b-button>
          <b-button class="mt-2" pill variant="outline-dark" block @click="limparCampos">Cancelar</b-button>
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
      serie: {
        titulo: '',
        genero: '',
        temporadas: 0
      },
      message: { color: 'success', texto: '' },
      dismissSecs: 5,
      dismissCountDown: 0
    }
  },
  methods: {
    /**
     * Adiciona um novo registro da serie.
     * @function
     * @name adicionarNovaSerie
     */
    adicionarNovaSerie (event) {
      event.preventDefault()
      db.collection('series')
        .add(this.serie)
        .then(() => {
          this.message.color = 'success'
          this.message.texto = 'Série adicionada com sucesso!'
          this.showAlert()
          this.limparCampos()
        })
        .catch(e => {
          console.log(e.response)
          if (e.response.data.error.errors.titulo.message) {
            this.message.texto = e.response.data.error.errors.titulo.message
          } else {
            this.message.texto = 'Não foi posivel adicionar a série!'
          }
          this.message.color = 'danger'
          this.showAlert()
        })
    },

    /**
     * Realiza uma contagem de exibição do alerta nas operações de manipulação de resgistros das séries.
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
    },

    /**
     * Limpa o campo dos campos.
     * @function
     * @name limparCampos
     */
    limparCampos () {
      this.serie.titulo = ''
      this.serie.genero = ''
      this.serie.temporadas = ''
    }
  }
}
</script>

<style>
#titulo-adicionar {
  color: #42b983;
}
</style>
