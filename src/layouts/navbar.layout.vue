<script lang="ts" setup>
import { DeviceTv } from '@vicons/tabler';
import { useMediaQuery } from '@vueuse/core'
import { MenuRound } from '@vicons/material'
import { useRouter } from 'vue-router';

const isMobile = useMediaQuery('(max-width: 700px)')
const router = useRouter()

const options = [
  {
    label: 'A propos',
    to: '/about'
  },
  {
    label: 'Créer des impros',
    to: '/create'
  },
  {
    label: 'Les cartons',
    to: '/boards'
  },
  {
    label: 'Controls',
    to: '/controls'
  },
  {
    label: 'Faire un don',
    to: 'https://github.com/sponsors/CorentinTh'
  }
]

function handleSelect(key: string, { to }: { to: string }) {
  if (to.startsWith('http')) {
    window.open(to)
  } else {
    router.push(to)

  }
}
</script>

<template>
  <div>
    <n-config-provider>
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

            <n-space v-if="isMobile" align="center">
              <n-dropdown trigger="hover" :options="options" @select="handleSelect">
                <n-button text style="font-size: 24px;">
                  <n-icon>
                    <MenuRound />
                  </n-icon>
                </n-button>
              </n-dropdown>
            </n-space>

            <n-space v-else align="center" :size="25">
              <router-link to="/about" #="{ navigate, href }" custom>
                <n-button text tag="a" :href="href" @click="navigate">A propos</n-button>
              </router-link>

              <router-link to="/create" #="{ navigate, href }" custom>
                <n-button text tag="a" :href="href" @click="navigate">Créer des impros</n-button>
              </router-link>

              <router-link to="/controls" #="{ navigate, href }" custom>
                <n-button text tag="a" :href="href" @click="navigate">Controls</n-button>
              </router-link>

              <n-button tag="a" target="_blank" secondary href="https://github.com/sponsors/CorentinTh">
                Faire un don
              </n-button>
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
