<script setup lang="ts">
import { ref } from "vue";
import Filter from "./components/Filter.vue";
import { nameRecords } from "./data";
import { useFilters, genderOptions, popularityOptions, lengthOptions } from "./filters";

const { state } = useFilters();

const selectedNames = ref<string[]>([]);

function findNames() {
  selectedNames.value = nameRecords
    .filter((r) => r.gender === state.gender)
    .filter((r) => r.popularity === state.popularity)
    .filter((r) => (state.length === "all" ? true : r.length === state.length))
    .map((r) => r.name);
}

function removeName(index: number) {
  selectedNames.value.splice(index, 1);
}
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

        <section>
          <button class="btn btn-warning btn-lg" @click="findNames">Find Names</button>
        </section>
      </div>
    </div>

    <br />

    <!-- results -->
    <section v-if="selectedNames.length > 0">
      <h6>Click on the names you don't like, to remove them from the list.</h6>

      <div class="d-flex justify-content-center">
        <button
          class="btn btn-danger btn-lg m-2 p-3"
          v-for="(name, i) in selectedNames"
          :key="i"
          @click="removeName(i)"
        >
          {{ name }}
        </button>
      </div>
    </section>
  </div>
</template>
