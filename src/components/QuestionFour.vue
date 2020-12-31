<template>
  <div class="bg-white mx-1 px-4 h-full">
    <div class="font-bold text-lg pt-6 pb-2">Question 4</div>
    <div class="pl-10">
      Figure 1 demonstrates that in the absence of G-CSF, WT G-CSFR cannot:
    </div>
    <div class="text-xs">
      <div class="flex-col flex">
        <i class="fas fa-question-circle"></i>
        <div>Solution</div>
      </div>
    </div>
    <div class="pl-10">
      <div
        v-for="(solution, index) in solutions"
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
          ><span class="font-bold pr-2">{{ solution.value }}.</span>
          <span class="font-semibold">{{ solution.option }}</span></label
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
          option: "Directly phosphorylate its targets",
        },
        {
          value: "B",
          id: "two",
          option: "Activate downstream signaling to phosphorylate its targets",
        },
        {
          value: "C",
          id: "three",
          option: "Produce neutrophil granulocytes",
        },
        {
          value: "D",
          id: "four",
          option: "Suppress p-STAT5 or p-ERK1/2 transcription",
        },
      ],
    };
  },
};
</script>

<style>
</style>