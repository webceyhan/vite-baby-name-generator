<script setup lang="ts">
import { reactive } from "vue";
import Filter from "./components/Filter.vue";

type Gender = "boy" | "girl" | "unisex";
type Popularity = "trendy" | "unique";
type Length = "short" | "long" | "all";

const genderOptions: Gender[] = ["boy", "girl", "unisex"];
const popularityOptions: Popularity[] = ["trendy", "unique"];
const lengthOptions: Length[] = ["short", "long", "all"];

type FilterState = {
  gender: Gender;
  popularity: Popularity;
  length: Length;
};

const filterState = reactive<FilterState>({
  gender: "boy",
  popularity: "trendy",
  length: "all",
});
</script>

<template>
  <div class="container text-center py-5">
    <h1 class="display-5 mb-5">Baby Name Generator</h1>

    <div class="card bg-dark bg-opacity-50">
      <div class="card-body">
        <section class="mb-5">
          <h5>1) Choose a gender</h5>
          <Filter name="gender" :options="genderOptions" v-model="filterState.gender" />
        </section>

        <section class="mb-5">
          <h5>2) Choose the name's popularity</h5>
          <Filter
            name="popularity"
            :options="popularityOptions"
            v-model="filterState.popularity"
          />
        </section>

        <section class="mb-5">
          <h5>3) Choose name's length</h5>
          <Filter name="length" :options="lengthOptions" v-model="filterState.length" />
        </section>
      </div>
    </div>

    <br />

    {{ filterState }}
  </div>
</template>
