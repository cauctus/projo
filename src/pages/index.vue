<script lang="ts" setup>
import { BrandGithub, ArrowRight, Mail, DeviceTv, InfoSquare } from '@vicons/tabler';

const version = import.meta.env.PACKAGE_VERSION;
</script>

<template>
  <div class="fullpage-centered">
    <n-grid cols="10" item-responsive>
      <n-grid-item span="10 600:8 1024:6 1280:4 2000:2" offset="0 600:1 1024:2 1280:3 2000:4" class="card-wrapper">
        <div class="skweded-background" />
        <n-card class="main-card">
          <n-space align="center" justify="space-between">
            <n-space align="center">
              <n-icon size="60" color="#fc466b"><DeviceTv /></n-icon>
              <n-h1>Projo</n-h1>
            </n-space>
            <n-space class="subtitle" vertical align="end" :size="0">
              <div>
                version <a href="https://github.com/cauctus/projo" target="_blank">v{{ version }}</a>
              </div>
              <div>une solution <a href="https://cauctus.net" target="_blank">cauctus.net</a></div>
            </n-space>
          </n-space>

          <div class="content">
            Projo est une application web simple d'utilisation pour la gestion des scores pour le théatre d'improvisation. Pas besoin de compte ou d'installation pour utiliser cette apllication, tout
            se passe dans le navigateur.
            <br>
            <br>
            Application opensource codée avec <n-text type="error">♥</n-text> par <a href="https://github.com/CorentinTh" target="_blank">Corentin Thomasset</a>.
          </div>

          <n-space class="footer" align="center" justify="space-between">
            <n-space align="center" :size="10">
              <router-link to="/about" #="{ navigate, href }" custom>
                <n-button
                  text
                  style="font-size: 30px"
                  tag="a"
                  :href="href"
                  ghost
                  class="muted"
                  @click="navigate"
                >
                  <n-icon><InfoSquare /></n-icon>
                </n-button>
              </router-link>
              <!-- <n-button text style="font-size: 30px; margin-right: 10px" tag="a" href="/about" class="muted">
                <n-icon><InfoSquare /></n-icon>
              </n-button> -->
              <n-button
                text
                style="font-size: 30px"
                tag="a"
                href="mailto:projo@cauctus.net"
                class="muted"
              >
                <n-icon><Mail /></n-icon>
              </n-button>
              <n-button
                text
                style="font-size: 30px"
                tag="a"
                href="https://github.com/cauctus/projo"
                target="_blank"
                class="muted"
              >
                <n-icon><BrandGithub /></n-icon>
              </n-button>
            </n-space>

            <n-space>
              <router-link to="/create" #="{ navigate, href }" custom>
                <n-button
                  secondary
                  style="color: #333"
                  tag="a"
                  :href="href"
                  @click="navigate"
                >
                  Créer des impros
                </n-button>
              </router-link>

              <router-link to="/controls" #="{ navigate, href }" custom>
                <n-button
                  color="#fc466b"
                  style="color: white"
                  tag="a"
                  :href="href"
                  type="success"
                  @click="navigate"
                >
                  Commencer &nbsp;
                  <n-icon><ArrowRight /></n-icon>
                </n-button>
              </router-link>
            </n-space>
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

.card-wrapper {
  position: relative;
  .main-card {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    border: none;
    border-radius: 20px;
    padding: 40px;

    a {
      color: #3f5efb;
      text-decoration: none;
      opacity: 0.8;
      transition: all 0.3s linear;

      &:hover {
        color: #fc466b;
      }
    }
    .n-h1 {
      margin: 0;
      color: #374151e8;
      font-size: 40px;
    }

    .muted {
      color: #a2a2a2cc;

      a:hover {
        color: #fc466b;
      }
    }

    .subtitle {
      .muted;
      font-size: 18px;
      margin: 0;
      line-height: 1.3;
    }

    .content {
      margin: 20px 0;
      padding: 30px 0;
      border-top: 2px solid rgba(229, 231, 235, 0.63);
      border-bottom: 2px solid rgba(229, 231, 235, 0.63);
      font-size: 16px;
      text-align: justify;
      color: #374151e8;
    }
  }

  .skweded-background {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    position: absolute;
    height: 100%;
    width: 100%;
    transform: rotate(-6deg);
    background: linear-gradient(90deg, #fc466b 0%, #3f5efb 100%);
  }
}
</style>
