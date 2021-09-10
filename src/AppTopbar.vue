<template>
	<div class="layout-topbar">
		<div class="layout-topbar-left">
			<div class="layout-topbar-logo-container">
				<router-link to="/" class="layout-topbar-logo">
					<img alt="Logo" :src="darkTheme ? 'assets/layout/images/logo-dark.svg' : 'assets/layout/images/logo-white.svg'" />
					<span>SAKAI</span>
				</router-link>
				<button class="p-link layout-topbar-button" @click="onMenuToggle">
					<span class="pi pi-bars layout-topbar-icon"></span>
				</button>
			</div>
		</div>
		<div class="layout-topbar-right">
			<button class="p-link layout-topbar-button">
				<span class="layout-topbar-item-text">Events</span>
				<span class="layout-topbar-icon pi pi-calendar" v-badge="'4'"></span>
			</button>
			<button class="p-link layout-topbar-button">
				<span class="layout-topbar-item-text">Settings</span>
				<span class="layout-topbar-icon pi pi-cog"></span>
			</button>
			<button class="p-link layout-topbar-button">
				<span class="layout-topbar-item-text">User</span>
				<span class="layout-topbar-icon pi pi-user"></span>
			</button>
		</div>
	</div>
</template>

<script>
export default {
    methods: {
        onMenuToggle(event) {
            this.$emit('menu-toggle', event);
        }
    },
	computed: {
		darkTheme() {
			return this.$appState.theme.startsWith('saga');
		}
	}
}
</script>