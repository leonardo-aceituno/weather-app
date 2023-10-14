<script setup>
import RightPanelButtons from "./RightPanelButtons.vue";
import RightPanelWeek from "./RightPanelWeek.vue";
import RightPanelToday from "./RightPanelToday.vue";
</script>

<template>
  <!-- Buttons -->
  <div class="mx-5 px-1 px-lg-5 mt-5 mt-lg-0">
    <div
      class="d-none d-lg-flex justify-content-end align-items-center"
      style="height: 10vh"
    >
      <RightPanelButtons />
    </div>

    <!-- Cards week -->
    <div class="container-week">
      <RightPanelWeek />
    </div>

    <!-- Cards Today -->
    <div class="container-today">
      <RightPanelToday />
    </div>

    <!-- Autor -->
    <div class="my-5 pt-5 text-center">
      <span class="txt-footer"
        >created by <b>leonardo-aceituno</b> - devChallenges.io</span
      >
    </div>
  </div>
</template>

<style scoped>
.container-week {
  height: 30vh;
}
.container-today {
  height: 45vh;
}

@media (max-width: 992px) {
  .container-week {
    height: auto;
  }
  .container-today {
    height: auto;
  }
}
</style>
