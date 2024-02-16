<template>
  <div>
    <p>The following button toggles the local modal.</p>
    <button @click="toggleLocalModal">Toggle Local Modal</button>
    <LocalModal v-if="showLocalModal" :activator="showLocalModal" />

    <p>The following button toggles the global modal.</p>
    <button @click="toggleGlobalModal">Toggle Global Modal</button>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

const LocalModal = () => import('./LocalModal.vue');

export default {
  name: 'TheWelcome',

  components: {
    LocalModal,
  },

  data() {
    return {
      showLocalModal: false,
    };
  },

  computed: {
    ...mapGetters(['modals/globalModalActivator']),
  },

  methods: {
    toggleLocalModal() {
      this.showLocalModal = !this.showLocalModal;
    },

    toggleGlobalModal() {
      this.$store.dispatch('modals/setGlobalModal', !this.globalModalActivator);
    },
  },
};
</script>
