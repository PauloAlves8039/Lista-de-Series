<template>
  <div class="row justify-content-center">
    <div class="col-md-12">
      <h2 id="titulo-sobre" class="text-center">Sobre</h2>
    </div>
    <div id="card-projeto">
      <b-card
        title="Catálogo de Séries"
        sub-title="Sobre o projeto"
        img-src="https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        img-alt="Projeto"
        img-top
        tag="article"
        style="max-width: 22rem;"
        class="mb-2"
      >
        <b-card-text>Aplicação web desenvolvida para fins didáticos, no qual tem como objetivo realizar a manipulação de uma lista de séries favoritas.</b-card-text>

        <b-button
          href="https://github.com/PauloAlves8039/Lista-de-Series"
          variant="outline-primary"
          target="_blank"
        >GitHub</b-button>
      </b-card>
    </div>

    <div id="card-autor">
      <b-card
        title="Autor"
        sub-title="Paulo Alves"
        img-src="https://images.pexels.com/photos/574080/pexels-photo-574080.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        img-alt="Autor"
        img-top
        tag="article"
        style="max-width: 22rem;"
        class="mb-2"
      >
        <b-card-text>Graduado em Análise e Desenvolvimento de Sistemas, possui conhecimentos em tecnologias de desenvolvimento web e mobile.</b-card-text>

        <b-button
          href="https://www.linkedin.com/in/paulo-alves3486"
          variant="outline-primary"
          target="_blank"
        >linkedin</b-button>
      </b-card>
    </div>

    <div id="card-tecnologias">
      <b-card
        title="Tecnologias"
        sub-title="Recursos Utilizados"
        img-src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        img-alt="Tecnologias"
        img-top
        tag="article"
        style="max-width: 22rem;"
        class="mb-2"
      >
        <b-list-group>
          <b-list-group-item>
            <b-link href="https://cli.vuejs.org/" class="card-link" target="_blank">Vue CLI</b-link>
          </b-list-group-item>
          <b-list-group-item>
            <b-link href="https://firebase.google.com/" class="card-link" target="_blank">Firebase</b-link>
          </b-list-group-item>
          <b-list-group-item>
            <b-link href="https://bootstrap-vue.org/" class="card-link" target="_blank">BootstrapVue</b-link>
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style>
#titulo-sobre {
  color: #42b983;
}

#card-projeto, #card-autor, #card-tecnologias {
  margin: 20px 0 0;
  padding: 2px;
  filter: grayscale(100%);
}

#card-projeto:hover, #card-autor:hover, #card-tecnologias:hover {
  filter: grayscale(0%);
  transition: filter 0.8s ease;
}
</style>
