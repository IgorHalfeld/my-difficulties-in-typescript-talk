<template>
  <div>
    <h1>Hello, {{ name }}</h1>
    <ul>
      <li v-for="organizer in typescriptBrOrganizers" :key="organizer.name">
        {{ organizer.name }}
      </li>
    </ul>
    <button @click="greetings('TypescriptBR')">Say hello!</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

interface Organizer {
  name: string,
}

export default Vue.extend({
  name: 'App',
  data() {
    return {
      name: 'Igor Halfeld',
      typescriptBrOrganizers: [
        { name: 'Lucas' },
        { name: 'Vitor' },
        { name: 'Roz' },
      ] as Organizer[],
    };
  },
  methods: {
    greetings(name: string) {
      this.name = name;
    },
  },
});
</script>
