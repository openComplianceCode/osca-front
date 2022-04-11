<template>
  <router-view />
  <base-item-group></base-item-group>
</template>
<script>
import BaseCard from "./components/base/Card.vue";
import BaseItem from "./components/base/Item.vue";
import BaseItemGroup from "./components/base/ItemGroup.vue";
import BaseItemSubGroup from "./components/base/ItemSubGroup.vue";
import BaseMaterialAlert from "./components/base/MaterialAlert.vue";
import BaseMaterialCard from "./components/base/MaterialCard.vue";
import BaseMaterialChartCard from "./components/base/MaterialChartCard.vue";
import BaseMaterialSnackbar from "./components/base/MaterialSnackbar.vue";
import BaseMaterialStatsCard from "./components/base/MaterialStatsCard.vue";
import BaseMaterialTabs from "./components/base/MaterialTabs.vue";
import BaseMaterialTestimony from "./components/base/MaterialTestimony.vue";
import BaseSubheading from "./components/base/Subheading.vue";
import BaseVComponent from "./components/base/VComponent.vue";

export default {
  name: "App"
};
</script>
