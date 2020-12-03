<template>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" :height="height" :width="width">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
  </svg>
</template>

<script>
export default {
  name: 'ChevronRight',
  props: {
    height: {
      type: String,
      default: "24px",
    },
    width: {
      type: String,
      default: "24px",
    },
  },
}
</script>