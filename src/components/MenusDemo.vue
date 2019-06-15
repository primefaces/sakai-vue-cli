<template>
	<div class="p-grid p-fluid">
		<div class="p-col-12 p-lg-6">
			<div class="card card-w-title">
				<h1>Menu</h1>
				<Menu :model="menuItems"></Menu>
                
				<Menu ref="menu" :model="menuItems" :popup="true"></Menu>
				<Button type="button" label="Overlay" @click="toggle" style="margin-top: 20px; width: auto"/>
			</div>
		</div>
		
	</div>
</template>

<script>
export default {
	data() {
		return {
			menuItems: [
				{
					label: 'Options',
					items: [{
						label: 'Update',
						icon: 'pi pi-refresh'
					},
						{
							label: 'Delete',
							icon: 'pi pi-times'
						}
					]
				},
				{
					label: 'Navigate',
					items: [{
						label: 'Vue Website',
						icon: 'pi pi-external-link'
					},
						{
							label: 'Upload',
							icon: 'pi pi-upload'
						}
					]
				}
			]
		}
	},
	methods: {
		toggle(event) {
			this.$refs.menu.toggle(event);
		}
	}
}
</script>

<style scoped>

</style>