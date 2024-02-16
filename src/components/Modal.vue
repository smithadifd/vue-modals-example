<template>
  <div class="modal">
    <div class="modal-title">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="modal-content">
      <slot></slot>
    </div>

    <div class="modal-backdrop"></div>
  </div>
</template>
<script>
export default {
  name: 'Modal',
  props: {
    activator: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      default: null,
    },
  },
};
</script>
<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.modal-title {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
}

.modal-content {
  z-index: 1000;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 26%);
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 900;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 50%);
}
</style>
