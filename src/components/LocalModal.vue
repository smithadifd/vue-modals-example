<template>
  <Modal :activator="activator">
    <template #title>
      <h2>Local Modal</h2>
    </template>
    <p>This is a local modal to some component.</p>
  </Modal>
</template>
<script>
import Modal from './Modal.vue';

export default {
  name: 'LocalModal',

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
