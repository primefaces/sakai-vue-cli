<template>
	<div class="menu">
		<AppSubmenu :items="model" class="layout-main-menu" 
            :root="true" @menuitem-click="onMenuItemClick" />
	</div>
</template>

<script>
import AppSubmenu from './AppSubmenu';

export default {
	props: {
		model: Array
	},
    methods: {
        onMenuItemClick(event) {
            this.$emit('menuitem-click', event);
        }
    },
	components: {
		'AppSubmenu': AppSubmenu
	}
}
</script>

<style scoped>

</style>