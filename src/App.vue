<script setup lang="ts">
import {
  useFilters,
  genderOptions,
  popularityOptions,
  lengthOptions,
} from "./store/filters";
import { useNames } from "./store/names";
import Filter from "./components/Filter.vue";

const { filters } = useFilters();
const { names, findNames, removeName } = useNames();
</script>

<template>
  <div class="container text-center py-5">
    <h1 class="display-5 mb-5">Baby Name Generator</h1>

    <div class="card bg-dark bg-opacity-50">
      <div class="card-body">
        <section class="mb-5">
          <h5>1) Choose a gender</h5>
          <Filter name="gender" :options="genderOptions" v-model="filters.gender" />
        </section>

        <section class="mb-5">
          <h5>2) Choose the name's popularity</h5>
          <Filter
            name="popularity"
            :options="popularityOptions"
            v-model="filters.popularity"
          />
        </section>

        <section class="mb-5">
          <h5>3) Choose name's length</h5>
          <Filter name="length" :options="lengthOptions" v-model="filters.length" />
        </section>

        <section>
          <button class="btn btn-warning btn-lg" @click="findNames">Find Names</button>
        </section>
      </div>
    </div>

    <br />

    <!-- results -->
    <section v-if="names.length > 0">
      <h6>Click on the names you don't like, to remove them from the list.</h6>

      <div class="d-flex justify-content-center">
        <button
          class="btn btn-danger btn-lg m-2 p-3"
          v-for="(name, i) in names"
          :key="i"
          @click="removeName(i)"
        >
          {{ name }}
        </button>
      </div>
    </section>
  </div>
</template>
