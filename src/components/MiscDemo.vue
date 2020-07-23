<template>
	<div class="p-grid">
		<div class="p-col-12">
			<div class="card">
				<h5>ProgressBar</h5>
				<div class="p-grid">
					<div class="p-col">
						<ProgressBar :value="value" />
					</div>
					<div class="p-col">
						<ProgressBar :value="50" :showValue="false"/>
					</div>
				</div>
			</div>
		</div>

		<div class="p-col-12">
			<div class="card">
				<h4>Badge</h4>
				<h5>Numbers</h5>
				<div class="badges">
					<span class="p-badge">2</span>
					<span class="p-badge p-badge-success">8</span>
					<span class="p-badge p-badge-info">4</span>
					<span class="p-badge p-badge-warning">12</span>
					<span class="p-badge p-badge-danger">3</span>
				</div>

				<h5>Tags</h5>
				<div class="badges">
					<span class="p-tag">Primary</span>
					<span class="p-tag p-tag-success">Success</span>
					<span class="p-tag p-tag-info">Info</span>
					<span class="p-tag p-tag-warning">Warning</span>
					<span class="p-tag p-tag-danger">Danger</span>
				</div>

				<h5>Pills</h5>
				<div class="badges">
					<span class="p-tag p-tag-rounded">Primary</span>
					<span class="p-tag p-tag-rounded p-tag-success">Success</span>
					<span class="p-tag p-tag-rounded p-tag-info">Info</span>
					<span class="p-tag p-tag-rounded p-tag-warning">Warning</span>
					<span class="p-tag p-tag-rounded p-tag-danger">Danger</span>
				</div>

				<h5>Icon Badge</h5>
				<span class="p-overlay-badge p-mr-5">
					<i class="pi pi-bell" style="font-size: 2em"></i>
					<span class="p-badge">2</span>
				</span>

				<h5>Button Badge</h5>
				<span class="p-overlay-badge">
					<Button type="button" label="New" />
					<span class="p-badge p-badge-warning">5</span>
				</span>

				<h5>Inline Button Badge</h5>
				<Button type="button" label="Emails" badge="8" class="p-mr-2" />
				<Button type="button" label="Messages" icon="pi pi-users" class="p-button-warning" badge="8" badgeClass="p-badge-danger" />


				<h5>Sizes</h5>
				<div class="badges">
					<span class="p-badge">2</span>
					<span class="p-badge p-badge-lg p-badge-sucess">4</span>
					<span class="p-badge p-badge-xl p-badge-warning">6</span>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value: 0
			}
		},
		interval: null,
		methods: {
			startProgress() {
				this.interval = setInterval(() => {
					let newValue = this.value + Math.floor(Math.random() * 10) + 1;
					if (newValue >= 100) {
						newValue = 100;
					}
					this.value = newValue;
				}, 2000);
			},
			endProgress() {
				clearInterval(this.interval);
				this.interval = null;
			}
		},
		mounted() {
			this.startProgress();
		},
		beforeDestroy() {
			this.endProgress();
		}
	}
</script>

<style lang="scss" scoped>
.badges {
	.p-badge, .p-tag {
		margin-right: .5rem;
	}
}

.p-button {
	margin-right: .5rem;
}

.p-overlay-badge {
	margin-right: 2rem;
}
</style>
