<template>
	<div class="layout-footer">
		<img alt="Logo" :src="darkTheme ? 'assets//images/logo-dark.svg' : 'assets//images/logo-white.svg'" height="20" class="mr-2" />
		by
		<span class="font-medium ml-2">PrimeVue</span>
	</div>
</template>

<script>
	export default {
		name: "AppFooter",
		computed: {
			darkTheme() {
				return this.$appState.theme.startsWith('saga');
			}
		}
	}
</script>

<style scoped>

</style>