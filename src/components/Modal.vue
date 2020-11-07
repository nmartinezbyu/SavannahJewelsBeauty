<template>
  <Transition name="fade">
    <div
      v-if="showing"
      class="modal-container"
      @click.self="close"
    >
      <div class="modal-content">
        <button type="button" class="modal-close close" aria-label="Close" @click.prevent="close">
          <span aria-hidden="true">&times;</span>
        </button>
        <slot />
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  props: {
    showing: {
      required: true,
      type: Boolean
    }
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* fixed inset-0 flex items-center justify-center w-full h-screen bg-semi-75 */
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, .25);
}

/* relative w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg */
.modal-content {
  position: relative;
  width: 100%;
  max-width: 42rem;
  max-height: 75vh;
  padding: 2rem;
  background-color: white;
  border-radius: .5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  overflow-y: scroll;
}

/* absolute top-0 right-0 mx-4 my-2 text-xl text-gray-500 */
.modal-close {
  position: absolute;
  top: 0;
  right: 0;
  margin: .75rem 1rem;
}
</style>
