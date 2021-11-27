<script lang="ts" setup>
import ImproPreview from '@/modules/shared/components/ImproList.vue';
import { Impro } from '@/types/Impro.model';
import { ref } from 'vue';
import ImproEditor from '../shared/components/ImproEditor.vue';

const impros = ref<Impro[]>([
  {
    category: 'category',
    duration: 3 * 60 * 1000,
    playerCount: '2 par équipe',
    theme: 'Caucus sur le cactus',
    type: 'libre',
  },
  {
    category: 'category',
    duration: 3 * 60 * 1000,
    playerCount: '2 par équipe',
    theme: 'Caucus sur le cactus',
    type: 'libre',
  },
  {
    category: 'category',
    duration: 3 * 60 * 1000,
    playerCount: '2 par équipe',
    theme: 'Caucus sur le cactus',
    type: 'libre',
  },
]);

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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sit, vero ullam deleniti cupiditate neque nesciunt dolores, dolore illo tempora voluptatibus consequatur itaque velit. Iste
        quaerat nobis animi consequatur voluptas!
      </n-card>
      <br />
      <n-grid cols="2" x-gap="12">
        <n-gi>
          <n-card embedded>
            <ImproPreview v-model:impros="impros" />
          </n-card>
        </n-gi>
        <n-gi>
          <ImproEditor :edit="false" @added="(impro) => impros.push(impro)" />
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
