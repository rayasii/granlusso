import { Directus } from '@directus/sdk'

const directus = new Directus(import.meta.env.VITE_DIRECTUS_URL, {
  auth: { staticToken: import.meta.env.VITE_DIRECTUS_TOKEN }
})

export default directus
