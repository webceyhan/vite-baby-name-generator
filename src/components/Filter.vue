<script setup lang="ts">
const emit = defineEmits(["update:modelValue"]);

defineProps<{
  name: string;
  options: string[];
  modelValue: any;
}>();
</script>

<template>
  <div class="btn-group btn-group-lg">
    <template v-for="(opt, i) in options" :key="i">
      <input
        type="radio"
        class="btn-check"
        :name="name"
        :id="`${name}-${i}`"
        autocomplete="off"
        @change="emit('update:modelValue', opt)"
        :checked="modelValue === opt"
        :value="opt"
      />
      <label class="btn btn-outline-info text-capitalize px-5" :for="`${name}-${i}`">{{
        opt
      }}</label>
    </template>
  </div>
</template>
