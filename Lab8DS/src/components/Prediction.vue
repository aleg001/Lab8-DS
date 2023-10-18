<template>
  <div>
    <h2>Predicted Rental Price</h2>
    <p>{{ predictedPrice }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      predictedPrice: null, // Fetch this data from backend
    };
  },
};
</script>
