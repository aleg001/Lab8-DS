<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Welcome to Brazilian Rental Predictor</h1>
        <PropertyInput></PropertyInput>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <prediction></prediction>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <visualization></visualization>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UploadData from "@/components/UploadData.vue";
import Prediction from "@/components/Prediction.vue";
import Visualization from "@/components/Visualization.vue";
import PropertyInput from "@/components/PropertyInput.vue";

export default {
  components: {
    UploadData,
    Prediction,
    Visualization,
    PropertyInput,
  },
};
</script>
