<template>
  <div class="fullpage-centered">
    <n-grid cols="10" item-responsive>
      <n-grid-item span="10 600:8 1024:6 1280:4 2000:2" offset="0 600:1 1024:2 1280:3 2000:4" class="card-wrapper">
        <n-card class="main-card">
          <n-h1>A propos</n-h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aspernatur adipisci iste quis similique cupiditate at esse eveniet, ea recusandae fuga, totam, mollitia consequatur sed sequi
          magni necessitatibus quas quam.
          <br>
          <br>
          <router-link to="/" #="{ navigate, href }" custom>
            <n-button
              tag="a"
              :href="href"
              type="success"
              ghost
              @click="navigate"
            >
              Back Home
            </n-button>
          </router-link>
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
</style>
