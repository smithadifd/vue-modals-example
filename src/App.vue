<script setup></script>

<template>
  <div id="app">
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
        </nav>
      </div>
    </header>

    <router-view />
    <global-modal v-if="globalModalActivator" :activator="globalModalActivator" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

const GlobalModal = () => import('./components/GlobalModal.vue');

export default {
  components: {
    GlobalModal,
  },

  computed: {
    ...mapGetters({
      globalModalActivator: 'modals/globalModalActivator',
    }),
  },

  created() {
    window.vuex = this.$store;
  },
};
</script>
