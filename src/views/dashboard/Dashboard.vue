<template>
  <v-container id="dashboard" fluid tag="section">
    <v-row>
      <code-snippet-scan></code-snippet-scan>
    </v-row>
  </v-container>
</template>

<script>
import CodeSnippetScan from './components/core/CodeSnippetScan.vue';
export default {
  components: { CodeSnippetScan },
  name: "DashboardDashboard",

  data() {
    return {};
  },
};
</script>
