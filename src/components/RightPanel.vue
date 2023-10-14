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
    <div class="container-author d-flex justify-content-center align-items-end mt-5 mt-lg-0 pb-lg-3 pb-0">
      <span class="txt-footer text-center">
        created by <b>leonardo-aceituno</b> - devChallenges.io
      </span>
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
.container-author {
  height: 15vh;
}
.text-footer {
  font-size: 14px;
  color: #a09fb1;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: center;
  font-weight: 600;
}

@media (max-width: 992px) {
  .container-week,
  .container-today,
  .container-author {
    height: auto;
  }
}
</style>
