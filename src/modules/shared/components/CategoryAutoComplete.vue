<script lang="ts" setup>
import { defineProps, defineEmits, computed } from 'vue';
const props = defineProps<{ value: string }>();
const emit = defineEmits<{ (e: 'update:value', id: string): void }>();

const normalyze = (s: string) =>
  s
    .trim()
    .toLowerCase()
    .replace(/\s/g, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

// TODO: externaliser
const categories = [
  'Accélérée',
  'Dégressive',
  'Accessoire',
  'Alfred Hitchcock',
  'Anton Tchekhov',
  'Aventure',
  'Bibliothèque',
  'Buzzer',
  'Changement de direction',
  'Cadavre exquis',
  'Chaises musicales',
  'Chantée',
  'Cinéma muet',
  "Commedia dell'Arte",
  'Contes & Légendes',
  'Croisée',
  'Dans le noir',
  'Dessin Animé',
  'Dictionnaire',
  'Doublage américain',
  'Double poursuite',
  'Dramatique',
  'DVD',
  'Eau de Rose',
  'Emile Zola',
  'Epopée médiévale',
  'Eugène Ionesco',
  'Exagération',
  'Feuilleton',
  'Franz Kafka',
  'Fusillade',
  'Fusillade mixte',
  'Fusillade solo',
  'Guignol',
  'Histoire du monde',
  'Horoscope',
  'Horreur',
  'Immobile',
  "Intervention de l'arbitre",
  "Intervention de l'arbitre avec Choix du public",
  'Jacques Tati',
  'Libre',
  'Mélodrame',
  'Michel Audiard',
  'Mille et Une Nuits',
  'Molière',
  'Muette',
  'Musicale',
  'Numéro de clowns',
  'Peplum',
  'Policier',
  'Poursuite',
  'Programme TV',
  'Quentin Tarentino',
  'Relais',
  'Rimée',
  'Roman photo',
  "Sans limite d'espace",
  'Sans paroles',
  'Sans thème ni caucus',
  'Science-fiction',
  'Silencieuse',
  'Sir Arthur Conan Doyle',
  'Sitcom',
  'Sous-titres',
  'Doublage étranger',
  'Spot de pub',
  'Suspens et grands frissons',
  'Téléphone Arabe',
  'Théâtre antique',
  'Théâtre de boulevard',
  'Théâtre de marionnettes',
  'Théâtre Nô',
  'Videoway',
  'Western',
  'William Shakespeare',
  "Zones d'humeur",
];
const options = computed(() => categories.filter((c) => normalyze(c).includes(normalyze(props.value))));
</script>

<template>
  <n-auto-complete :options="options" :value="props.value" :on-update:value="(value: string) => emit('update:value', value)" placeholder="ex: Western" />
</template>

<style lang="less" scoped>
.color-picker {
  display: flex;
  align-items: center;

  .color-item {
    margin-right: 10px;
  }
}
</style>
