<template>
  <div class="bg-white mx-1 px-4 h-full">
    <div class="font-bold text-lg pt-6 pb-2">Question 1</div>
    <div class="pl-10">
      One researcher hypothesizes that G-CSFRs activate the MAP kinase pathway.
      Which of the following protein residues is most likely to be altered by
      this pathway?
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
          option: "Tryptophan",
        },
        {
          value: "B",
          id: "two",
          option: "Arginine",
        },
        {
          value: "C",
          id: "three",
          option: "Glutamate",
        },
        {
          value: "D",
          id: "four",
          option: "Serine",
        },
      ],
    };
  },
};
</script>

<style>
</style>