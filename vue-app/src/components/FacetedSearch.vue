<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">Product Search</h2>

    <div class="grid grid-cols-4 gap-4">
      <!-- Filters -->
      <aside class="col-span-1 space-y-4">
        <div v-for="(options, facet) in facets" :key="facet">
          <h3 class="text-lg font-semibold">{{ facet }}</h3>
          <div v-for="option in options" :key="option">
            <label class="inline-flex items-center">
              <input
                type="checkbox"
                :value="option"
                v-model="selectedFacets[facet]"
                class="form-checkbox"
              />
              <span class="ml-2">{{ option }}</span>
            </label>
          </div>
        </div>
      </aside>

      <!-- Products -->
      <section class="col-span-3">
        <div v-if="loading">Loading products...</div>
        <div class="grid grid-cols-3 gap-6" v-else>
          <div
            v-for="product in filteredProducts"
            :key="product.id"
            class="border p-4 rounded shadow"
          >
            <img
              :src="product.image"
              alt="Product image"
              class="w-full h-48 object-cover mb-2"
            />
            <h4 class="font-bold">{{ product.title }}</h4>
            <p class="text-sm">{{ product.category }}</p>
            <p class="text-lg font-semibold mt-2">${{ product.price }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

const products = ref([])
const loading = ref(true)
const facets = ref({ category: [], brand: [] })
const selectedFacets = ref({ category: [], brand: [] })

onMounted(async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/items/products`)
  products.value = res.data.data.map(p => ({
    id: p.id,
    title: p.attributes.name,
    category: p.attributes.category,
    brand: p.attributes.brand,
    price: p.attributes.price,
    image: p.attributes.image?.url || ''
  }))

  loading.value = false

  // extract facet options
  facets.value = {
    category: Array.from(new Set(products.value.map(p => p.category))),
    brand: Array.from(new Set(products.value.map(p => p.brand)))
  }
})

const filteredProducts = computed(() =>
  products.value.filter(product => {
    const okCat =
      !selectedFacets.value.category.length ||
      selectedFacets.value.category.includes(product.category)
    const okBrand =
      !selectedFacets.value.brand.length ||
      selectedFacets.value.brand.includes(product.brand)
    return okCat && okBrand
  })
)
</script>

<style scoped>
.form-checkbox {
  accent-color: #4f46e5;
}
</style>
