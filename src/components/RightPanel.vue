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
    <div>
      <RightPanelWeek />
    </div>

    <!-- Cards Today -->
    <div>
      <RightPanelToday />
    </div>
  </div>
</template>

<style scoped></style>
