<template>
  <div class="product-card">
    <div class="product-info" :class="statusClass">
      <h2>{{ additive.code }}</h2>
      <h3>{{ additive.name }}</h3>
      <p>
        {{ additive.purpose }}
      </p>
      <p>
        {{ additive.status }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    additive: Object,
  },
  computed: {},
  data(){
    return {
      statusClass:{
        "danger": this.additive.status.toUpperCase().includes("NOT APPROVED"),
        "safe": !this.additive.status.toUpperCase().includes("NOT APPROVED") && this.additive.status.toUpperCase().includes("APPROVED")
      }
    }
  }
};
</script>

<style scoped>
.danger{
  background: Red;
  text-decoration: underline;
}
.safe{
  background: greenyellow;
  text-decoration: underline;
}
.product-card {
  border-radius: 10px;
  display: flex;
  padding: 6px;
  column-gap: 16px;
  border: 2px solid #424242;
  width: 100%;
  background: white;
}

.product-card img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
}

.product-info {
  display: flex;
  row-gap: 8px;
  flex-direction: column;
  width: 100%;
}

.ingredients-list {
  display: flex;
  flex-direction: row;
  column-gap: 8px;
}
</style>