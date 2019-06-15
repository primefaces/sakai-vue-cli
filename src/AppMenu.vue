<template>
	<div class="menu">
		<AppSubmenu :items="model" class="layout-main-menu" :root="true" @menuitem-click="$emit('menuitem-click',$event.originalEvent)"></AppSubmenu>
	</div>
</template>

<script>
import AppSubmenu from './AppSubmenu';

export default {
	props: {
		model: Array
	},
	components: {
		'AppSubmenu': AppSubmenu
	}
}
</script>

<style scoped>

</style>