<script lang="ts" setup>
import { defineProps, defineEmits, ref, withDefaults } from 'vue';
import { Impro } from '@/types/Impro.model';
import { DeleteFilled, FileUploadRound, EditFilled, FileDownloadRound } from '@vicons/material';
import { Menu } from '@vicons/tabler';
import { formatTime } from '@/utils/string';

import ImproEditor from './ImproEditor.vue';

const emit = defineEmits<{
  (e: 'remove', impro: Impro): void;
  (e: 'update:impro', impro: Impro): void;
  (e: 'load', impro: Impro): void;
  (e: 'sendLast', impro: Impro): void;
}>();
const props = withDefaults(defineProps<{ impro: Impro; first?: boolean, showLoad: boolean }>(), { first: false, showLoad: false })

const showEditModal = ref(false);
const loaded = ref(false)

function improEdited(impro: Impro) {
  showEditModal.value = false
  emit('update:impro', impro)
}

function load() {
  loaded.value = true
  emit('load', props.impro)
}
</script>
<template>
  <div class="impro-list-item">
    <n-card class="impro">
      <n-space align="center" justify="space-between" :wrap="false">
        <n-space
          align="center"
          justify="space-between"
          :wrap="false"
          style="width: 100%"
          item-style="flex-grow:1"
        >
          <n-space align="center" :wrap="false" size="large">
            <n-icon size="25" class="handle">
              <Menu />
            </n-icon>

            <div>
              <div class="info">
                <span>Type:</span>
                {{ props.impro.type }}
              </div>
              <div class="info">
                <span>Categorie:</span>
                {{ props.impro.category }}
              </div>
              <div class="info">
                <span>Nb. personnes:</span>
                {{ props.impro.playerCount }}
              </div>
              <div class="info">
                <span>Durée:</span>
                {{ formatTime(props.impro.duration) }}
              </div>
            </div>
          </n-space>
        </n-space>

        <n-space align="center" justify="center" size="large">
          <n-space align="end" justify="center" vertical :size="0">
            <div class="info">
              <span>Theme</span>
            </div>
            <div class="accent">{{ props.impro.theme }}</div>
          </n-space>

          <n-space class="actions" align="center" justify="center">
            <n-popconfirm
              positive-text="Supprimer"
              negative-text="Annuler"
              @positive-click="() => emit('remove', props.impro)"
            >
              <template #trigger>
                <n-button color="#a2a2a2cc" class="delete" text style="font-size: 24px">
                  <n-icon>
                    <DeleteFilled />
                  </n-icon>
                </n-button>
              </template>
              Êtes-vous sûr·e·s de vouloir supprimer cette impro ?
            </n-popconfirm>

            <n-button color="#a2a2a2cc" text style="font-size: 24px" @click="showEditModal = true">
              <n-icon>
                <EditFilled />
              </n-icon>
            </n-button>

            <template v-if="props.showLoad">
              <n-button
                color="#a2a2a2cc"
                text
                style="font-size: 24px"
                @click="emit('sendLast', props.impro)"
              >
                <n-icon>
                  <FileDownloadRound />
                </n-icon>
              </n-button>
              <!-- <n-button v-else color="#a2a2a2cc" text style="font-size: 24px" @click="archive">
                <n-icon>
                  <ArchiveRound />
                </n-icon>
              </n-button>-->

              <n-button
                text
                style="font-size: 50px"
                type="success"
                class="button-load"
                :class="{ 'first': props.first }"
                @click="load"
              >
                <n-icon>
                  <FileUploadRound />
                </n-icon>
              </n-button>
            </template>
          </n-space>
        </n-space>
      </n-space>
    </n-card>

    <n-modal v-model:show="showEditModal">
      <n-card style="width: 600px" title="Modal" size="huge">
        <template #header>
          <div>Modifier l'impro</div>
        </template>
        <ImproEditor edit :impro="props.impro" @edited="improEdited" />
      </n-card>
    </n-modal>
  </div>
</template>

<style lang="less" scoped>
.impro-list-item {
  .impro {
    // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.12);

    &.archived {
      background-color: #eee;
    }

    .button-load {
      &:not(.first) {
        opacity: 0.4;
      }
    }

    &.ghost {
      opacity: 0.5;
      background: #c8ebfb;
    }

    .handle {
      color: #a2a2a2cc;
      cursor: move;
    }

    &:not(:last-child) {
      margin-bottom: 10px;
    }

    .info {
      line-height: 1.1;
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
        &:hover {
          color: gray;
        }
        &.delete:hover {
          color: indianred;
        }
      }
    }
  }
}
</style>
