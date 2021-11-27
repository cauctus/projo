<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';
import { Impro } from '@/types/Impro.model';
import { DeleteOutlineFilled } from '@vicons/material';

const emit = defineEmits<{ (e: 'remove', index: number): void; (e: 'update:impros', impros: Impro[]): void }>();
const props = defineProps<{ impros: Impro[] }>();
import { formatTime } from '@/utils/string';

function remove(i: number) {
  const a = [...props.impros];
  a.splice(i, 1);
  emit('update:impros', a);
}
</script>
<template>
  <div class="list-wrapper">
    <n-card v-for="(impro, i) in props.impros" :key="i" class="impro">
      <n-space align="center" justify="space-between" :wrap="false">
        <n-space align="center">
          <div class="accent" style="margin-right: 10px">{{ i + 1 }}</div>

          <div>
            <div class="info"><span>Type:</span> {{ impro.type }}</div>
            <div class="info"><span>Categorie:</span> {{ impro.category }}</div>
          </div>
        </n-space>

        <div>
          <div class="info"><span>Nb. personnes:</span> {{ impro.playerCount }}</div>
          <div class="info"><span>Durée: </span> {{ formatTime(impro.duration) }}</div>
        </div>

        <n-space align="center" justify="center" vertical :size="0">
          <div class="info"><span>Theme</span></div>
          <div class="accent">{{ impro.theme }}</div>
        </n-space>

        <n-space class="actions" vertical align="center" justify="center">
          <n-popconfirm positive-text="Supprimer" negative-text="Annuler" @positive-click="() => remove(i)">
            <template #trigger>
              <n-button text style="font-size: 24px">
                <n-icon><DeleteOutlineFilled /></n-icon>
              </n-button>
            </template>
            Êtes-vous sûr·e·s de vouloir supprimer cette impro ?
          </n-popconfirm>
        </n-space>
      </n-space>

      <!-- <n-button @click="remove(i)">X</n-button> -->
    </n-card>
  </div>
</template>

<style lang="less" scoped>
.list-wrapper {
  .impro {
    // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.12);

    &:not(:last-child) {
      margin-bottom: 10px;
    }

    .info {
      span {
        color: #a2a2a2cc;
        line-height: 1;
      }
    }
    .accent {
      font-size: 22px;
      line-height: 1;
    }
    .actions {
      border-left: 2px solid #a2a2a277;
      height: 100%;
      padding-left: 10px;

      .n-button {
        color: #a2a2a2cc;

        &:hover {
          color: indianred;
        }
      }
    }
  }
}
</style>
