<script lang="ts" setup>
import ImproList from '@/modules/shared/components/ImproList.vue';
import ImproEditor from '../shared/components/ImproEditor.vue';
import {useCreateStore} from './create.store';
import { ref } from 'vue';

const store = useCreateStore()
const closed = ref(false)
</script>

<template>
  <div class="page-wrapper">
    <div class="content-wrapper">
      <n-space align="center" justify="space-between">
        <n-h1>Création des impros</n-h1>
      </n-space>

      <n-card
        v-if="!closed"
        title="Création"
        class="raised content-no-padding"
        closable
        @close="closed = true"
      >
        <p>
          Cette page permet de créer et générer les impros pour l'arbitrage d'un match d'impro. Une fois la liste d'impro créée, il est possible de l'exporter pour l'arbitrage (ou pour le modifier
          plus tard en le réimportant).
        </p>
        <n-alert title="Sauvegardez" type="warning">
          La liste des impros est sauvegardée localement, mais dans le doute sauveragrdez entre vos sessions d'écriture en utilisant le fichier d'export/import.
        </n-alert>
      </n-card>
      <br>
      <n-grid
        cols="5"
        x-gap="12"
        y-gap="12"
        item-responsive
        responsive="screen"
      >
        <n-gi span="5 s:2">
          <n-card>
            <ImproEditor :edit="false" @added="(impro) => store.impros.push(impro)" />
          </n-card>
        </n-gi>
        <n-gi span="5 s:3">
          <n-card embedded>
            <ImproList v-model:impros="store.impros" />
          </n-card>
        </n-gi>
      </n-grid>
    </div>
  </div>
</template>

<style scoped lang="less">
.page-wrapper {
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5fb;
  padding: 60px 25px;
  box-sizing: border-box;

  .content-wrapper {
    max-width: 1300px;
    margin: 0 auto;
  }
}
</style>
