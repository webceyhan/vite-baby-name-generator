<script setup lang="ts">
import { reactive } from "vue";
import Filter from './components/Filter.vue';

type Gender = "boy" | "girl" | "unisex";
type Popularity = "trendy" | "unique";
type Length = "short" | "long" | "all";

const genderOptions: Gender[] = ["boy", "girl", "unisex"];
const popularityOptions: Popularity[] = ["trendy", "unique"];
const lengthOptions: Length[] = ["short", "long", "all"];

type Filters = {
  gender: Gender;
  popularity: Popularity;
  length: Length;
};

const filters = reactive<Filters>({
  gender: "boy",
  popularity: "trendy",
  length: "all",
});
</script>

<template>
  <div class="container text-center p-5">
    <h1 class="display-5 mb-5">Baby Name Generator</h1>

    <div class="card">
      <div class="card-body">


        <section class="mb-4">
          <h4> 1) Choose a gender</h4>
          <Filter name="gender" :options="genderOptions" v-model="filters.gender" />
        </section>

        <section class="mb-4">
          <h4>2) Choose the name's popularity</h4>
          <Filter name="popularity" :options="popularityOptions" v-model="filters.popularity" />
        </section>

        <section class="mb-4">
          <h4>3) Choose name's length</h4>
          <Filter name="length" :options="lengthOptions" v-model="filters.length" />
        </section>

      </div>
    </div>

    <br />

    {{ filters }}
  </div>
</template>
