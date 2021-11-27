<script lang="ts" setup>
import { Impro } from '@/types/Impro.model';
import { ref, defineEmits, defineProps } from 'vue';
import CategoryAutoComplete from '@/modules/shared/components/CategoryAutoComplete.vue';
import TypeAutoComplete from '@/modules/shared/components/TypeAutoComplete.vue';
import PlayerCountComplete from '@/modules/shared/components/PlayerCountComplete.vue';

const defaultImpro = {
  category: '',
  duration: 3 * 60 * 1000,
  playerCount: 'Illimité',
  theme: '',
  type: 'Mixte',
};

const emit = defineEmits<{ (e: 'added', i: Impro): void; (e: 'edited', i: Impro): void }>();
const props = defineProps<{ edit: boolean }>();

const impro = ref<Impro>(defaultImpro);
const formRef = ref(null);

const rules = Object.keys(defaultImpro).reduce((acc, key) => {
  acc[key] = {
    required: true,
    message: '',
    trigger: ['blur', 'input'],
  };

  return acc;
}, {} as { [key: string]: unknown });

function onButtonPressed(e: Event) {
  e.preventDefault();
  if (formRef?.value) {
    formRef.value.validate((errors: string[]) => {
      if (!errors) {
        emit('edited', impro.value);
        emit('added', impro.value);
      } else {
        console.log(errors);
      }
    });
  }
}
</script>

<template>
  <div>
    <n-space item-style="width: 100%" vertical>
      <n-card class="raised content-no-padding">
        <n-form ref="formRef" :model="impro" label-placement="top" size="large" :rules="rules" :show-require-mark="false">
          <div style="padding: 20px">
            <n-space item-style="flex-grow: 1; padding:0" :wrap="false">
              <n-form-item label="Type d'impro" path="type">
                <TypeAutoComplete v-model:value="impro.type" />
              </n-form-item>
              <n-form-item label="Nombre de personnes" path="playerCount">
                <PlayerCountComplete v-model:value="impro.playerCount" />
              </n-form-item>
            </n-space>

            <n-space item-style="flex-grow: 1; padding:0" :wrap="false">
              <n-form-item label="Catégorie" path="category">
                <CategoryAutoComplete v-model:value="impro.category" />
              </n-form-item>

              <n-form-item label="Durée" path="duration">
                <n-time-picker v-model:value="impro.duration" style="width: 100%" :actions="['confirm']" format="mm'm' ss's'" :seconds="Array.from(Array(4), (_, i) => i * 15)" />
              </n-form-item>
            </n-space>

            <n-form-item label="Thème" path="theme">
              <n-input v-model:value="impro.theme" type="textarea" :autosize="{ minRows: 1, maxRows: 5 }" placeholder="ex: Caucus sur le cactus" />
            </n-form-item>

            <n-button type="primary" @click="onButtonPressed">
              {{ props.edit ? 'Modifier' : 'Ajouter' }}
            </n-button>
          </div>
        </n-form>
      </n-card>
    </n-space>
  </div>
</template>
