<script lang="ts" setup>
import ImproPreview from '@/modules/shared/components/ImproList.vue';
import { Impro } from '@/types/Impro.model';
import { ref } from 'vue';
import ImproEditor from '../shared/components/ImproEditor.vue';

const impros = ref<Impro[]>([]);

const onRemove = (i: number) => {
  impros.value.splice(i, 1);
  console.log({ impros, i });
};
</script>

<template>
  <div class="page-wrapper">
    <div class="content-wrapper">
      <n-space align="center" justify="space-between">
        <n-h1>Création des impro</n-h1>
      </n-space>

      <n-card title="Création" class="raised content-no-padding">
        Cette page permet de créer et générer les impros pour l'arbitrage d'un match d'impro. Une fois la liste d'impro créée, il est possible de l'exporter pour l'arbitrage (ou pour le modifier plus
        tard en le réimportant).
      </n-card>
      <br />
      <n-grid cols="5" x-gap="12">
        <n-gi span="2">
          <n-card>
            <ImproEditor :edit="false" @added="(impro) => impros.push(impro)" />
          </n-card>
        </n-gi>
        <n-gi span="3">
          <n-card embedded>
            <ImproPreview v-model:impros="impros" />
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
  padding: 60px;
  box-sizing: border-box;

  .content-wrapper {
    max-width: 1300px;
    margin: 0 auto;
  }
}
</style>
