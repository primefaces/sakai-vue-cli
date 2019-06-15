<template>
	<div class="layout-topbar clearfix">
		<button class="p-link layout-menu-button" @click="onToggleMenu">
			<span class="pi pi-bars"></span>
		</button>
		<div class="layout-topbar-icons">
			<span class="layout-topbar-search">
				<InputText type="text" placeholder="Search" />
				<span class="layout-topbar-search-icon pi pi-search"></span>
			</span>
			<button class="p-link">
				<span class="layout-topbar-item-text">Events</span>
				<span class="layout-topbar-icon pi pi-calendar"></span>
				<span class="layout-topbar-badge">5</span>
			</button>
			<button class="p-link">
				<span class="layout-topbar-item-text">Settings</span>
				<span class="layout-topbar-icon pi pi-cog"></span>
			</button>
			<button class="p-link">
				<span class="layout-topbar-item-text">User</span>
				<span class="layout-topbar-icon pi pi-user"></span>
			</button>
		</div>
	</div>
</template>

<script>
export default {
    methods: {
        onToggleMenu(event) {
            this.$emit('toggle-menu',event);
        }
    }
}
</script>