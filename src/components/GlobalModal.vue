<template>
  <Modal :activator="activator">
    <template #title>
      <h2>Global Modal</h2>
    </template>
    <p>This is a global modal to the app triggered from anywhere.</p>
  </Modal>
</template>
<script>
import Modal from './Modal.vue';

export default {
  name: 'GlobalModal',

  components: {
    Modal,
  },

  props: {
    activator: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
<style scoped>
h2,
p {
  margin: 0;
  color: #333;
}
</style>
