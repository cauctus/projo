<template>
  <div class="fullpage-centered">
    <n-grid cols="10" item-responsive>
      <n-grid-item span="10 600:8 1024:6 1280:4 2000:2" offset="0 600:1 1024:2 1280:3 2000:4" class="card-wrapper">
        <n-card class="main-card">
          <n-h1><n-text type="primary">404</n-text></n-h1>
          <div class="content">
            <div>Oops. Cette page n'existe pas.</div>
            <div>Vous avez surrement fait une faute de frape, ou bien cette page a récemment été déplacée.</div>
          </div>
          <n-button tag="a" href="/" type="success"> Accueil </n-button>
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
  font-size: 60px;
  line-height: 1;
}
.main-card {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: 20px;
  padding: 40px;
}
.content {
  color: rgb(96, 114, 151);
  font-size: 18px;
  margin: 30px 0;

  div {
    margin-bottom: 10px;
  }
}
</style>
