<template>
  <div class="fullpage-centered">
    <n-grid cols="10" item-responsive>
      <n-grid-item span="10 600:8 1024:6 1280:4 2000:2" offset="0 600:1 1024:2 1280:3 2000:4" class="card-wrapper">
        <div class="skweded-background" />
        <n-card class="main-card">
          <n-space align="baseline" justify="space-between">
            <n-h1>Projo</n-h1>
            <n-space vertical :size="0" align="end">
              <div class="subtitle">une solution <a href="https://cauctus.net" target="_blank">cauctus.net</a></div>
            </n-space>
          </n-space>

          <div class="content">
            Projo est une application web simple d'utilisation pour la gestion des scores pour le théatre d'improvisation. Pas besoin de compte ou d'installation pour utiliser cette apllication, tout
            se passe dans le navigateur.
            <br />
            <br />
            Application opensource codée avec <n-text type="error">♥</n-text> par <a href="https://github.com/CorentinTh" target="_blank">Corentin Thomasset</a>.
          </div>

          <n-space class="footer" align="center" justify="space-between">
            <div>
              <n-button text style="font-size: 30px; margin-right: 10px" tag="a" href="https://github.com/cauctus/projo" target="_blank" class="muted">
                <n-icon>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 496 512">
                    <path
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6c-3.3.3-5.6-1.3-5.6-3.6c0-2 2.3-3.6 5.2-3.6c3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9c2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9c.3 2 2.9 3.3 5.9 2.6c2.9-.7 4.9-2.6 4.6-4.6c-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2c12.8 2.3 17.3-5.6 17.3-12.1c0-6.2-.3-40.4-.3-61.4c0 0-70 15-84.7-29.8c0 0-11.4-29.1-27.8-36.6c0 0-22.9-15.7 1.6-15.4c0 0 24.9 2 38.6 25.8c21.9 38.6 58.6 27.5 72.9 20.9c2.3-16 8.8-27.1 16-33.7c-55.9-6.2-112.3-14.3-112.3-110.5c0-27.5 7.6-41.3 23.6-58.9c-2.6-6.5-11.1-33.3 2.6-67.9c20.9-6.5 69 27 69 27c20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27c13.7 34.7 5.2 61.4 2.6 67.9c16 17.7 25.8 31.5 25.8 58.9c0 96.5-58.9 104.2-114.8 110.5c9.2 7.9 17 22.9 17 46.4c0 33.7-.3 75.4-.3 83.6c0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252C496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2c1.6 1.6 3.9 2.3 5.2 1c1.3-1 1-3.3-.7-5.2c-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9c1.6 1 3.6.7 4.3-.7c.7-1.3-.3-2.9-2.3-3.9c-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2c2.3 2.3 5.2 2.6 6.5 1c1.3-1.3.7-4.3-1.3-6.2c-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9c1.6 2.3 4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2c-1.4-2.3-4-3.3-5.6-2z"
                      fill="currentColor"
                    />
                  </svg>
                </n-icon>
              </n-button>
              <n-button text style="font-size: 30px" tag="a" href="mailto:projo@cauctus.net" class="muted">
                <n-icon>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z" fill="currentColor" />
                  </svg>
                </n-icon>
              </n-button>
            </div>
            <n-button color="#f34772" style="color: white" tag="a" href="/controls">
              Commencer &nbsp;
              <n-icon>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M268 112l144 144l-144 144" />
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M392 256H100" />
                </svg>
              </n-icon>
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
