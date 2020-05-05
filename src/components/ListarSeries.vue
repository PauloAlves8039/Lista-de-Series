<template>
  <div class="row">
    <div class="col-md-12">
      <h3 id="titulo-lista" class="text-center">Lista de Séries</h3>

      <b-alert
          :show="dismissCountDown"
          dismissible
          :variant="message.color"
          @dismissed="dismissCountDown=0"
          @dismiss-count-down="countDownChanged"
        >
        {{message.texto}}
      </b-alert>

      <div id="campo-pesquisa" class="form-inline">
        <input type="text" placeholder="Pesquisar Séries" class="form-control col-md-4" v-model="pesquisa">
        <button class="badge-pill btn btn-outline-dark ml-2" @click="limparCampoPesquisa">Cancelar</button>
      </div>

      <table id="tabela-series" class="table table-light table-bordered table-hover">
        <thead>
          <tr class="thead-dark">
            <th>Título</th>
            <th>Gênero</th>
            <th>Temporadas</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody class="table-active">
          <tr v-for="(serie, index) in pesquisarSerie" :Series="index" :key="index.key">
            <td>{{ serie.titulo }}</td>
            <td>{{ serie.genero }}</td>
            <td>{{ serie.temporadas }}</td>
            <td>
              <router-link :to="{name: 'editar', params: { id: serie.key }}" class="badge-pill btn btn-primary">Editar</router-link>
              <button @click.prevent="excluirSerie(serie.key)" class="badge-pill btn btn-danger">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { db } from '../database/firebase'

export default {
  data () {
    return {
      Series: [],
      pesquisa: '',
      message: { color: 'danger', texto: '' },
      dismissSecs: 5,
      dismissCountDown: 0
    }
  },
  created () {
    /**
     * @description: Atuliza um registro da serie.
     */
    db.collection('series').onSnapshot(snapshotChange => {
      this.Series = []
      snapshotChange.forEach(doc => {
        this.Series.push({
          key: doc.id,
          titulo: doc.data().titulo,
          genero: doc.data().genero,
          temporadas: doc.data().temporadas
        })
      })
    })
  },

  computed: {
    /**
     * Realiza um filtro de pesquisa da série por título.
     * @function
     * @name pesquisarSerie
     */
    pesquisarSerie () {
      return this.Series.filter((s) => {
        return s.titulo.match(this.pesquisa)
      })
    }
  },

  methods: {
    excluirSerie (id) {
      if (window.confirm('Você deseja confirmar a exclusão?')) {
        db.collection('series')
          .doc(id)
          .delete()
          .then(() => {
            this.message.color = 'danger'
            this.message.texto = 'Série excluída com sucesso!'
            this.showAlert()
            this.limparCampoPesquisa()
          })
          .catch(e => {
            console.error(e)
          })
      }
    },

    /**
     * Realiza uma contagem de exibição do alerta na operação de exclusão de resgistro da série.
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
     * Limpa o campo de pesquisa.
     * @function
     * @name limparCampoPesquisa
     */
    limparCampoPesquisa () {
      this.pesquisa = ''
    }
  }
}
</script>

<style>
.btn-primary {
  margin-right: 12px;
}

#campo-pesquisa, #tabela-series {
  margin-top: 20px;
}

#titulo-lista {
  color: #42b983;
}
</style>
