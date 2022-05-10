<script lang="ts" setup>
import BoardCard from './components/BoardCard.vue';
import { useBoardStore } from './board.store';
import { ref } from 'vue';
import ImportImproListButton from '../shared/components/ImportImproListButton.vue';
import { Impro } from '@/models/Impro.model';

const store = useBoardStore()
const showHelp = ref(false)

function onUpload(impros: Impro[]) {
  store.impros.push(...impros)
}
</script>

<template>
  <div class="page-wrapper">
    <div class="content-wrapper">
      <n-space align="center" justify="space-between">
        <n-h1>Mes cartons d'impros</n-h1>
      </n-space>

      <n-space>
        <import-impro-list-button @impro-uploaded="onUpload">
          <n-button tertiary>Importer une liste d'impro</n-button>
        </import-impro-list-button>


        <n-popconfirm
          v-if="store.impros.length > 0"
          positive-text="Supprimer"
          negative-text="Annuler"
          @positive-click="() => store.impros = []"
        >
          <template #trigger>
            <n-button tertiary>
              Supprimer les cartons
            </n-button>
          </template>
          Êtes-vous sûr·e·s de vouloir supprimer tout les cartons ?
        </n-popconfirm>
        <n-button tertiary @click="showHelp = !showHelp">
          {{ showHelp ? 'Masquer l\'aide' : 'Afficher l\'aide' }}
        </n-button>
      </n-space>

      <br>
      <n-space vertical>
        <board-card v-for="(impro, i) in store.impros" :key="i" :impro="impro" :show-help="showHelp" />
      </n-space>
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
    max-width: 550px;
    margin: 0 auto;
  }
}
</style>
