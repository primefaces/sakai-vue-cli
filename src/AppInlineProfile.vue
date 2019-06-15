<template>
	<div class="profile">
		<div>
			<img src="assets/layout/images/profile.png" alt="" />
		</div>
		<button class="p-link profile-link" @click="onClick">
			<span class="username">Claire Williams</span>
			<i class="pi pi-fw pi-cog"></i>
		</button>
		<ul :class="[{'profile-expanded': this.expanded}]">
			<li><button class="p-link"><i class="pi pi-fw pi-user"></i><span>Account</span></button></li>
			<li><button class="p-link"><i class="pi pi-fw pi-inbox"></i><span>Notifications</span><span class="menuitem-badge">2</span></button></li>
			<li><button class="p-link"><i class="pi pi-fw pi-power-off"></i><span>Logout</span></button></li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				expanded: false
			}
		},
		methods: {
			onClick(event){
				this.expanded = !this.expanded;
				event.preventDefault();
			}
		}
	}
</script>

<style scoped>

</style>