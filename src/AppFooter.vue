<template>
	<div class="layout-footer">
		<img alt="Logo" :src="darkTheme ? 'assets/layout/images/logo-dark.svg' : 'assets/layout/images/logo-white.svg'" height="20" class="mr-2" />
		by
		<span class="font-medium ml-2">PrimeVue</span>
	</div>
</template>

<script>
	export default {
		name: "AppFooter"
	}
</script>

<style scoped>

</style>