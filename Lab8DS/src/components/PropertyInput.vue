<template>
  <v-form ref="form" v-model="valid">
    <v-select
      label="City"
      v-model="property.city"
      :items="cities"
      :rules="rules.required"
    ></v-select>
    <v-text-field
      label="Area (m²)"
      v-model="property.area"
      :rules="rules.required"
      type="number"
    ></v-text-field>
    <v-text-field
      label="Number of Rooms"
      v-model="property.rooms"
      :rules="rules.required"
      type="number"
    ></v-text-field>
    <v-text-field
      label="Number of Bathrooms"
      v-model="property.bathroom"
      :rules="rules.required"
      type="number"
    ></v-text-field>
    <v-text-field
      label="Parking Spaces"
      v-model="property.parkingSpaces"
      :rules="rules.required"
      type="number"
    ></v-text-field>
    <v-text-field
      label="Floor"
      v-model="property.floor"
      :rules="rules.required"
      type="number"
    ></v-text-field>
    <v-select
      label="Animals Allowed"
      v-model="property.animal"
      :items="['acept', 'not acept']"
    ></v-select>
    <v-select
      label="Furnished"
      v-model="property.furniture"
      :items="['furnished', 'not furnished']"
    ></v-select>
    <v-text-field
      label="HOA (R$)"
      v-model="property.hoa"
      :rules="rules.required"
      type="number"
    ></v-text-field>
    <v-text-field
      label="Rent Amount (R$)"
      v-model="property.rentAmount"
      :rules="rules.required"
      type="number"
    ></v-text-field>
    <v-text-field
      label="Property Tax (R$)"
      v-model="property.propertyTax"
      :rules="rules.required"
      type="number"
    ></v-text-field>
    <v-text-field
      label="Fire Insurance (R$)"
      v-model="property.fireInsurance"
      :rules="rules.required"
      type="number"
    ></v-text-field>
    <v-text-field
      label="Total (R$)"
      v-model="property.total"
      :rules="rules.required"
      type="number"
    ></v-text-field>

    <v-btn @click="submitData">Submit</v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      cities: [
        "São Paulo",
        "Rio de Janeiro",
        "Brasília",
        "Salvador",
        "Fortaleza",
      ], // you can extend this list
      property: {
        city: "",
        area: "",
        rooms: "",
        bathroom: "",
        parkingSpaces: "",
        floor: "",
        animal: "",
        furniture: "",
        hoa: "",
        rentAmount: "",
        propertyTax: "",
        fireInsurance: "",
        total: "",
      },
      rules: {
        required: (value) => !!value || "Required.",
      },
    };
  },
  methods: {
    submitData() {
      if (this.$refs.form.validate()) {
        this.$emit("propertyDataSubmitted", this.property);
      }
    },
  },
};
</script>
