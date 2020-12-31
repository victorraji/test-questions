<template>
  <div class="bg-white mx-1 px-4 h-full">
    <div class="font-bold text-lg pt-6 pb-2">Question 3</div>
    <div class="pl-10">
  What amino acid residue is most likely to be found in the transmembrane region of T618I G-CSFR?

    </div>
    <div class="text-xs">
      <div class="flex-col flex">
        <i class="fas fa-question-circle"></i>
        <div>Solution</div>
      </div>
    </div>
    <div class="pl-10">
      <div
        v-for="(solution,index) in solutions"
        :key="index"
        class="flex pb-4 items-center"
      >
        <input
          class="mr-2"
          type="radio"
          :id="solution.id"
          :value="solution.value"
          v-model="picked"
        />
        <label :for="solution.id"
          ><span class="font-bold pr-2">{{solution.value}}.</span>
          <span class="font-semibold">{{solution.option}}</span></label
        >
      </div>
      <br />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      picked: "",
      solutions: [
        {
          value: "A",
          id: "one",
          option: "Alanine",
        },
        {
          value: "B",
          id: "two",
          option: "Threonine",
        },
        {
          value: "C",
          id: "three",
          option: "Aspartate",
        },
        {
          value: "D",
          id: "four",
          option: "Lysine",
        },
      ],
    };
  },
};
</script>

<style>
</style>