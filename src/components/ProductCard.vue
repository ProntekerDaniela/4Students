<template>
  <div class="product-card">
      <img :src="product.image"/>
      <div class="product-info">
          <h2>{{product.name}}</h2>
          <p>
              {{ product.description}}
          </p>
          <b-alert variant="warning" show v-if="allergicIngredientsCount > 0">
              Warning! This product contains {{allergicIngredientsCount}} ingredients that you are allergic to.
          </b-alert>
          <div class="ingredients-list">
              <b-badge :variant="ingredient.allergic ? 'danger' : 'success'" v-for="ingredient in ingredients" :key="ingredient.name">
                  {{ ingredient.name }}
              </b-badge>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        product: Object
    },
    computed: {
        ingredients() {
            return this.product.ingredients.map(ing => {
                return {
                    name: ing,
                    allergic: this.$store.getters.isUserAllergicTo(ing)
                }
            });
        },
        allergicIngredientsCount() {
            return this.ingredients.filter(ing => ing.allergic).length;
        },
        user() {
            return this.$store.state.user;
        }
    }
}
</script>

<style scoped>
.product-card {
    border-radius: 4px;
    display: flex;
    padding: 8px;
    column-gap: 16px;
    border: 1px solid #424242;
    width: 100%;
    background: white;
}

.product-card img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 4px;
}

.product-info{
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