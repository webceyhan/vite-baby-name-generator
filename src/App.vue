<script setup lang="ts">
import { reactive } from "vue";

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
        <h4>1) Choose a gender</h4>

        <div class="btn-group">
          <template v-for="(opt, i) in genderOptions" :key="i">
            <input
              type="radio"
              class="btn-check"
              name="btnradio-gender"
              :id="`btnradio-gender-${i}`"
              autocomplete="off"
              v-model="filters.gender"
              :value="opt"
            />
            <label
              class="btn btn-outline-primary text-capitalize"
              :for="`btnradio-gender-${i}`"
              >{{ opt }}</label
            >
          </template>
        </div>
      </div>

      <div class="card-body">
        <h4>2) Choose the name's popularity</h4>

        <div class="btn-group">
          <template v-for="(opt, i) in popularityOptions" :key="i">
            <input
              type="radio"
              class="btn-check"
              name="btnradio-popularity"
              :id="`btnradio-popularity-${i}`"
              autocomplete="off"
              v-model="filters.popularity"
              :value="opt"
            />
            <label
              class="btn btn-outline-primary text-capitalize"
              :for="`btnradio-popularity-${i}`"
              >{{ opt }}</label
            >
          </template>
        </div>
      </div>

      <div class="card-body">
        <h4>3) Choose name's length</h4>

        <div class="btn-group">
          <template v-for="(opt, i) in lengthOptions" :key="i">
            <input
              type="radio"
              class="btn-check"
              name="btnradio-length"
              :id="`btnradio-length-${i}`"
              autocomplete="off"
              v-model="filters.length"
              :value="opt"
            />
            <label
              class="btn btn-outline-primary text-capitalize"
              :for="`btnradio-length-${i}`"
              >{{ opt }}</label
            >
          </template>
        </div>
      </div>
    </div>

    <br />

    {{ filters }}
  </div>
</template>
