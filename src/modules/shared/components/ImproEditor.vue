<script lang="ts" setup>
import { Impro } from '@/types/Impro.model';
import { ref, defineEmits, defineProps, withDefaults } from 'vue';
import CategoryAutoComplete from '@/modules/shared/components/CategoryAutoComplete.vue';
import TypeAutoComplete from '@/modules/shared/components/TypeAutoComplete.vue';
import PlayerCountComplete from '@/modules/shared/components/PlayerCountComplete.vue';
import { FormItemRule } from 'naive-ui';

const defaultImpro = {
  category: 'Libre',
  duration: 3 * 60 * 1000,
  playerCount: 'Illimité',
  theme: '',
  type: 'Mixte',
};

const emit = defineEmits<{ (e: 'added', i: Impro): void; (e: 'edited', i: Impro): void }>();
const props = withDefaults(defineProps<{ edit?: boolean; impro?: Impro }>(), { edit: false, impro: undefined });

const impro = ref<Impro>(props.impro ?? defaultImpro);
const formRef = ref<{ validate: (cb: (errors: string[]) => void) => void }>();

const trigger = ['blur', 'input'];

const rules: { [k in keyof Impro]: FormItemRule } = {
  category: {
    required: true,
    message: '',
    trigger,
  },
  duration: {
    type: 'number',
    required: true,
    message: '',
    trigger,
  },
  playerCount: {
    required: true,
    message: '',
    trigger,
  },
  theme: {
    required: true,
    message: '',
    trigger,
  },
  type: {
    required: true,
    message: '',
    trigger,
  },
};

function onButtonPressed(e: Event) {
  e.preventDefault();
  if (formRef?.value) {
    formRef.value.validate((errors: string[]) => {
      if (!errors) {
        const improCopy = { ...impro.value };
        emit('edited', improCopy);
        emit('added', improCopy);
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
      <n-form
        ref="formRef"
        :model="impro"
        label-placement="top"
        size="large"
        :rules="rules"
        :show-require-mark="false"
      >
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
            <CategoryAutoComplete v-model:value="impro.category" :get-show="() => true" clearable />
          </n-form-item>

          <n-form-item label="Durée" path="duration">
            <n-time-picker
              v-model:value="impro.duration"
              style="width: 100%"
              :actions="['confirm']"
              format="mm'm' ss's'"
            />
          </n-form-item>
        </n-space>

        <n-form-item label="Thème" path="theme">
          <n-input
            v-model:value="impro.theme"
            clearable
            type="textarea"
            :autosize="{ minRows: 1, maxRows: 5 }"
            placeholder="ex: Caucus sur le cactus"
          />
        </n-form-item>

        <n-button type="primary" @click="onButtonPressed">
          {{ props.edit ? 'Modifier' : 'Ajouter' }}
        </n-button>
      </n-form>
    </n-space>
  </div>
</template>
