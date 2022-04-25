<script setup lang="ts">
import { computed } from "vue";
import Filter from "./components/Filter.vue";
import { nameRecords } from "./data";
import { useFilters, genderOptions, popularityOptions, lengthOptions } from "./filters";

const { state } = useFilters();

const selectedNames = computed(() =>
  nameRecords
    .filter((r) => r.gender === state.gender)
    .filter((r) => r.popularity === state.popularity)
    .filter((r) => (state.length === "all" ? true : r.length === state.length))
    .map((r) => r.name)
);
</script>

<template>
  <div class="container text-center py-5">
    <h1 class="display-5 mb-5">Baby Name Generator</h1>

    <div class="card bg-dark bg-opacity-50">
      <div class="card-body">
        <section class="mb-5">
          <h5>1) Choose a gender</h5>
          <Filter name="gender" :options="genderOptions" v-model="state.gender" />
        </section>

        <section class="mb-5">
          <h5>2) Choose the name's popularity</h5>
          <Filter
            name="popularity"
            :options="popularityOptions"
            v-model="state.popularity"
          />
        </section>

        <section class="mb-5">
          <h5>3) Choose name's length</h5>
          <Filter name="length" :options="lengthOptions" v-model="state.length" />
        </section>
      </div>
    </div>

    <br />

    {{ selectedNames }}
  </div>
</template>
