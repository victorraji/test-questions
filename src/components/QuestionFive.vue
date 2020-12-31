<template>
  <div class="bg-white mx-1 px-4 h-full">
    <div class="font-bold text-lg pt-6 pb-2">Question 5</div>
    <div class="pl-10">
      A researcher is attempting to understand the temporal trend observed in
      p-STAT5 or p-ERK1/2 phosphorylation. RT-qPCR might show upregulation of
      which type of enzyme?
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
          option: "Transferase",
        },
        {
          value: "B",
          id: "two",
          option: "Phosphatase",
        },
        {
          value: "C",
          id: "three",
          option: "Oxidoreductase",
        },
        {
          value: "D",
          id: "four",
          option: "Ligase",
        },
      ],
    };
  },
};
</script>

<style>
</style>