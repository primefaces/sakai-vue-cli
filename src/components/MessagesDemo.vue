<template>
	<div class="p-grid">
		<div class="p-col-12">
			<div class="card">
				<h1>Messages and Toast</h1>
				<Toast />
				<Button @click="showInfo()" label="Info" class="p-button-info" style="width: 10em; margin-right: .25em" />
				<Button @click="showSuccess()" label="Success" class="p-button-success" style="width: 10em; margin-right: .25em" />
				<Button @click="showWarn()" label="Warn" class="p-button-warning" style="width: 10em; margin-right: .25em" />
				<Button @click="showError()" label="Error" class="p-button-danger" style="width: 10em; margin-right: .25em" />

				<h1>Messages</h1>
				<div class="p-grid">
					<div class="p-col-12 p-md-3">
						<Message severity="info" :closable="false">PrimeReact Rocks</Message>
					</div>
					<div class="p-col-12 p-md-3">
						<Message severity="success" :closable="false">Record Saved</Message>
					</div>
					<div class="p-col-12 p-md-3">
						<Message severity="warn" :closable="false">Are you sure?</Message>
					</div>
					<div class="p-col-12 p-md-3">
						<Message severity="error" :closable="false">Field is required</Message>
					</div>
				</div>

                <h1>Validation Message</h1>
                <div class="p-grid validation-grid">
                    <div class="p-col-12">
                        <InputText placeholder="Username" class="p-error" style="margin-right: .25em" />
                        <ValidationMessage>Field is required</ValidationMessage>
                    </div>
                    <div class="p-col-12">
                        <InputText placeholder="Email" class="p-error" style="margin-right: .25em" />
                        <ValidationMessage />
                    </div>
                </div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			messages: []
		}
	},
	methods: {
		showInfo() {
			this.messages = [{severity: 'info', content: 'Info Message', life: 3000, sticky: false}];
			this.$toast.add({severity:'info', summary: 'Info Message', detail:'PrimeVue rocks', life: 3000});
		},
		showSuccess() {
			this.messages = [{severity: 'success', content: 'Success Message', life: 3000, sticky: false}];
			this.$toast.add({severity:'success', summary: 'Success Message', detail:'Order submitted', life: 3000});
		},
		showWarn() {
			this.messages = [{severity: 'warn', content: 'Warning Message', life: 3000, sticky: false}];
			this.$toast.add({severity:'warn', summary: 'Warn Message', detail:'There are unsaved changes', life: 3000});
		},
		showError() {
			this.messages = [{severity: 'error', content: 'Error Message', life: 3000, sticky: false}];
			this.$toast.add({severity:'error', summary: 'Error Message', detail:'Validation failed', life: 3000});
		}
	}
}
</script>

<style scoped>
.validation-grid > .p-col-12 {
    padding: 1em .5em;
}
</style>