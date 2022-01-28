<template>
  <div class="fullpage-centered">
    <n-grid cols="10" item-responsive>
      <n-grid-item span="10 600:8 1024:6 1280:4 2000:2" offset="0 600:1 1024:2 1280:3 2000:4" class="card-wrapper">
        <n-card class="main-card">
          <n-h1>A propos</n-h1>
          <n-p>
            Projo est une application web simple d'utilisation pour la gestion des scores pour le théatre d'improvisation. Pas besoin de compte ou d'installation pour utiliser cette apllication, tout
            se passe dans le navigateur.
          </n-p>

          <n-p>
            Application opensource codée avec <n-text type="error">♥</n-text> par <a href="https://github.com/CorentinTh" target="_blank">Corentin Thomasset</a>.
          </n-p>

          <n-p>
            Fait avec <a href="https://v3.vuejs.org/" target="_blank">Vue 3</a> avec les composants <a href="https://www.naiveui.com/" target="_blank">naive-ui</a>.
          </n-p>

          <n-h2>Support</n-h2>
          <n-p>
            Pour supporter ce projet gratuit et open-source vous pouvez me soutenir           
            <a
              tag="a"
              target="_blank"
              href="https://github.com/sponsors/CorentinTh"
            >en faisant un don</a>.
          </n-p>


          <n-space>
            <router-link to="/" #="{ navigate, href }" custom>
              <n-button
                tag="a"
                :href="href"
                secondary
                @click="navigate"
              >
                Retour
              </n-button>
            </router-link>
            <n-button
              tag="a"
              target="_blank"
              type="success"
              href="https://github.com/sponsors/CorentinTh"
            >
              Faire un don
            </n-button>
          </n-space>
        </n-card>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<style scoped lang="less">
.fullpage-centered {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: #f5f5fb;
  padding: 15px;
  overflow-x: hidden;
}

.n-h1 {
  font-size: 40px;
  line-height: 1;
  opacity: 0.8;
}

.main-card {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: 20px;
  padding: 40px;
}

.n-p {
  a {
    color: #3f5efb;
    text-decoration: none;
    opacity: 0.8;
    transition: all 0.3s linear;

    &:hover {
      color: #fc466b;
    }
  }
}
</style>
