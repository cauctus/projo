<script lang="ts" setup>
import { DeviceTv } from '@vicons/tabler';
import { darkTheme } from 'naive-ui';

</script>

<template>
  <div>
    <n-config-provider>
      <!-- <n-config-provider :theme="darkTheme"> -->
      <n-card class="navbar">
        <n-space align="center" justify="center" item-style="flex-grow: 1">
          <n-space class="content-wrapper" align="center" justify="space-between">
            <router-link to="/">
              <n-space align="center">
                <n-icon size="35" color="#fc466b" style="line-height: 1;">
                  <DeviceTv />
                </n-icon>
                <n-text class="title">Projo</n-text>
              </n-space>
            </router-link>

            <n-space align="center" :size="25">
              <router-link to="/about" #="{ navigate, href }" custom>
                <n-button text tag="a" :href="href" @click="navigate">A propos</n-button>
              </router-link>

              <router-link to="/create" #="{ navigate, href }" custom>
                <n-button text tag="a" :href="href" @click="navigate">Créer des impros</n-button>
              </router-link>

              <n-button
                tag="a"
                target="_blank"
                secondary
                href="https://github.com/sponsors/CorentinTh"
              >Faire un don</n-button>
            </n-space>
          </n-space>
        </n-space>
      </n-card>
    </n-config-provider>

    <slot />
  </div>
</template>        

<style scoped lang="less">
.navbar {
  border-radius: 0;
  border: none;
  border-bottom: 2px solid var(--border-color);
  ::v-deep(.n-card__content) {
    padding: 10px 0;
  }

  .content-wrapper {
    margin: auto;
    max-width: 1300px;
    padding: 0 60px;

    .title {
      font-size: 25px;
    }

    a:not(.n-button) {
      color: inherit;
      text-decoration: none;
    }
  }
}
</style>
