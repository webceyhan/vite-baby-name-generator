<script setup lang="ts"></script>

<template>
  <div class="container text-center p-5">
    <h1 class="display-5 mb-5">Baby Name Generator</h1>

    <div class="card">
      <div class="card-body">
        <h4>1) Choose a gender</h4>

        <div class="btn-group">
          <input type="radio" class="btn-check" name="btnradio-gender" id="btnradio-gender1" autocomplete="off"
            checked />
          <label class="btn btn-outline-primary" for="btnradio-gender1">Boy</label>

          <input type="radio" class="btn-check" name="btnradio-gender" id="btnradio-gender2" autocomplete="off" />
          <label class="btn btn-outline-primary" for="btnradio-gender2">Girl</label>

          <input type="radio" class="btn-check" name="btnradio-gender" id="btnradio-gender3" autocomplete="off" />
          <label class="btn btn-outline-primary" for="btnradio-gender3">Unisex</label>
        </div>
      </div>

      <div class="card-body">
        <h4>2) Choose the name's popularity</h4>

        <div class="btn-group">
          <input type="radio" class="btn-check" name="btnradio-popularity" id="btnradio-popularity1" autocomplete="off"
            checked />
          <label class="btn btn-outline-primary" for="btnradio-popularity1">Trendy</label>

          <input type="radio" class="btn-check" name="btnradio-popularity" id="btnradio-popularity2"
            autocomplete="off" />
          <label class="btn btn-outline-primary" for="btnradio-popularity2">Unique</label>
        </div>
      </div>

      <div class="card-body">
        <h4>3) Choose name's length</h4>

        <div class="btn-group">
          <input type="radio" class="btn-check" name="btnradio-length" id="btnradio-length1" autocomplete="off"
            checked />
          <label class="btn btn-outline-primary" for="btnradio-length1">Short</label>

          <input type="radio" class="btn-check" name="btnradio-length" id="btnradio-length2" autocomplete="off" />
          <label class="btn btn-outline-primary" for="btnradio-length2">Long</label>

          <input type="radio" class="btn-check" name="btnradio-length" id="btnradio-length3" autocomplete="off" />
          <label class="btn btn-outline-primary" for="btnradio-length3">All</label>
        </div>
      </div>
    </div>
  </div>
</template>
