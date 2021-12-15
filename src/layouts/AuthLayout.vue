<template>
	<div class="container">
		<AuthTopbar />
		<main class="main__content">
			<slot />
		</main>
	</div>
    
</template>

<script>
import AuthTopbar from '../components/Auth Components/AuthTopbar.vue'
export default {
  components: { AuthTopbar },
    name: 'AuthLayout'
}
</script>
    
<style scoped>
main {
	margin: 0 1rem;
}
</style>