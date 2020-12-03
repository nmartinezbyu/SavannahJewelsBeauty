<template>
  <svg :height="height" :width="width" data-darkreader-inline-fill="" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" style="--darkreader-inline-fill:none; --darkreader-inline-stroke:currentColor;" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z">
    </path>
  </svg>
</template>

<script>
export default {
  name: 'PencilIcon',
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