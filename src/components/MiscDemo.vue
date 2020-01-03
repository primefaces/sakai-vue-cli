<template>
	<div class="p-grid">
		<div class="p-col-12">
			<div class="card">
				<h1>Upload</h1>

				<FileUpload name="demo[]" url="./upload.php" @upload="onUpload" :multiple="true" accept="image/*" :maxFileSize="1000000" />
			</div>
		</div>

		<div class="p-col-12">
			<div class="card">
				<h1>ProgressBar</h1>
				<ProgressBar :value="value" />
			</div>
		</div>

        <div class="p-col-12">
			<div class="card">
				<h1>Inplace</h1>
				<Inplace :closable="true">
                    <template #display>
                        {{text || 'Click to Edit'}}
                    </template>
                    <template #content>
                        <InputText v-model="text" autoFocus />
                    </template>
                </Inplace>
			</div>
		</div>

        
	</div>
</template>

<script>
export default {
	data() {
		return {
            value: 0,
            text: null
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
		},
		onUpload() {
			this.$toast.add({severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000});
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

<style scoped>

</style>