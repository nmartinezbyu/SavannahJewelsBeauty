<template>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" :height="height" :width="width">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
  </svg>
</template>

<script>
export default {
  name: 'ChevronDown',
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