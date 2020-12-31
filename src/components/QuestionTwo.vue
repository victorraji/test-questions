<template>
  <div class="bg-white mx-1 px-4 h-full">
    <div class="font-bold text-lg pt-6 pb-2">Question 2</div>
    <div class="pl-10">
      What is the effect of the T618I mutation on p-STAT5 activation based on
      the results from Figure 1?
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
        class="pb-4"
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
          option:
            "The T618I mutant shows less phosphorylation at both time points when compared to WT.",
        },
        {
          value: "B",
          id: "two",
          option:
            "he T618I mutant shows less phosphorylation at only the early time point when compared to WT.",
        },
        {
          value: "C",
          id: "three",
          option:
            "The T618I mutant decreases the binding affinity of G-CSF to p-STAT5 at the early time point when compared to WT.",
        },
        {
          value: "D",
          id: "four",
          option:
            "The T618I mutant shows no decrease in binding affinity between time points.",
        },
      ],
    };
  },
};
</script>

<style>
</style>