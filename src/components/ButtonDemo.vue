<template>
	<div class="p-grid button-demo">
		<div class="p-col-12 p-md-6">
			<div class="card">
				<h5>Default</h5>
				<Button label="Submit" class="p-mr-2 p-mb-2"></Button>
				<Button label="Disabled" class="p-mr-2 p-mb-2" :disabled="true"></Button>
			</div>

			<div class="card">
				<h5>Severities</h5>
				<Button label="Primary" class="p-mr-2 p-mb-2"/>
				<Button label="Secondary" class="p-button-secondary p-mr-2 p-mb-2" />
				<Button label="Success" class="p-button-success p-mr-2 p-mb-2" />
				<Button label="Info" class="p-button-info p-mr-2 p-mb-2" />
				<Button label="Warning" class="p-button-warning p-mr-2 p-mb-2" />
				<Button label="Danger" class="p-button-danger p-mr-2 p-mb-2" />
			</div>

			<div class="card">
				<h5>Text</h5>
				<Button label="Primary" class="p-button-text p-mr-2 p-mb-2" />
				<Button label="Secondary" class="p-button-secondary p-button-text p-mr-2 p-mb-2" />
				<Button label="Success" class="p-button-success p-button-text p-mr-2 p-mb-2" />
				<Button label="Info" class="p-button-info p-button-text p-mr-2 p-mb-2" />
				<Button label="Warning" class="p-button-warning p-button-text p-mr-2 p-mb-2" />
				<Button label="Help" class="p-button-help p-button-text p-mr-2 p-mb-2" />
				<Button label="Danger" class="p-button-danger p-button-text p-mr-2 p-mb-2" />
				<Button label="Plain" class="p-button-plain p-button-text p-mr-2 p-mb-2" />
			</div>

			<div class="card">
				<h5>Outlined</h5>
				<Button label="Primary" class="p-button-outlined p-mr-2 p-mb-2" />
				<Button label="Secondary" class="p-button-outlined p-button-secondary p-mr-2 p-mb-2" />
				<Button label="Success" class="p-button-outlined p-button-success p-mr-2 p-mb-2" />
				<Button label="Info" class="p-button-outlined p-button-info p-mr-2 p-mb-2" />
				<Button label="Warning" class="p-button-outlined p-button-warning p-mr-2 p-mb-2" />
				<Button label="Help" class="p-button-outlined p-button-help p-mr-2 p-mb-2" />
				<Button label="Danger" class="p-button-outlined p-button-danger p-mr-2 p-mb-2" />
			</div>

			<div class="card">
				<h5>Button Group</h5>
				<span class="p-buttonset">
					<Button label="Save" icon="pi pi-check" />
					<Button label="Delete" icon="pi pi-trash" />
					<Button label="Cancel" icon="pi pi-times" />
				</span>
			</div>

			<div class="card">
				<h5>SplitButton</h5>
				<SplitButton label="Save" icon="pi pi-check" :model="items" class="p-button-secondary p-mr-2 p-mb-2"></SplitButton>
				<SplitButton label="Save" icon="pi pi-check" :model="items" class="p-button-success p-mr-2 p-mb-2"></SplitButton>
				<SplitButton label="Save" icon="pi pi-check" :model="items" class="p-button-info p-mr-2 p-mb-2"></SplitButton>
				<SplitButton label="Save" icon="pi pi-check" :model="items" class="p-button-warning p-mr-2 p-mb-2"></SplitButton>
				<SplitButton label="Save" icon="pi pi-check" :model="items" class="p-button-danger p-mr-2 p-mb-2"></SplitButton>
			</div>
		</div>

		<div class="p-col-12 p-md-6">
			<div class="card">
				<h5>Icons</h5>
				<Button icon="pi pi-star" class="p-mr-2 p-mb-2"></Button>
				<Button label="Bookmark" icon="pi pi-bookmark" class="p-mr-2 p-mb-2"></Button>
				<Button label="Bookmark" icon="pi pi-bookmark" iconPos="right" class="p-mr-2 p-mb-2"></Button>
			</div>

			<div class="card">
				<h5>Raised</h5>
				<Button label="Primary" class="p-button-raised p-mr-2 p-mb-2" />
				<Button label="Secondary" class="p-button-raised p-button-secondary p-mr-2 p-mb-2" />
				<Button label="Success" class="p-button-raised p-button-success p-mr-2 p-mb-2" />
				<Button label="Info" class="p-button-raised p-button-info p-mr-2 p-mb-2" />
				<Button label="Warning" class="p-button-raised p-button-warning p-mr-2 p-mb-2" />
				<Button label="Danger" class="p-button-raised p-button-danger p-mr-2 p-mb-2" />
			</div>

			<div class="card">
				<h5>Rounded</h5>
				<Button label="Primary" class="p-button-rounded p-mr-2 p-mb-2" />
				<Button label="Secondary" class="p-button-rounded p-button-secondary p-mr-2 p-mb-2" />
				<Button label="Success" class="p-button-rounded p-button-success p-mr-2 p-mb-2" />
				<Button label="Info" class="p-button-rounded p-button-info p-mr-2 p-mb-2" />
				<Button label="Warning" class="p-button-rounded p-button-warning p-mr-2 p-mb-2" />
				<Button label="Danger" class="p-button-rounded p-button-danger p-mr-2 p-mb-2" />
			</div>

			<div class="card">
				<h5>Rounded Icons</h5>
				<Button icon="pi pi-star" class="p-button-rounded p-mr-2 p-mb-2" />
				<Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary p-mr-2 p-mb-2" />
				<Button icon="pi pi-check" class="p-button-rounded p-button-success p-mr-2 p-mb-2" />
				<Button icon="pi pi-search" class="p-button-rounded p-button-info p-mr-2 p-mb-2" />
				<Button icon="pi pi-user" class="p-button-rounded p-button-warning p-mr-2 p-mb-2" />
				<Button icon="pi pi-sign-out" class="p-button-rounded p-button-danger p-mr-2 p-mb-2" />
			</div>

			<div class="card">
				<h5>Rounded Text</h5>
				<Button icon="pi pi-check" class="p-button-rounded p-button-text p-mr-2 p-mb-2" />
				<Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary p-button-text p-mr-2 p-mb-2" />
				<Button icon="pi pi-search" class="p-button-rounded p-button-success p-button-text p-mr-2 p-mb-2" />
				<Button icon="pi pi-user" class="p-button-rounded p-button-info p-button-text p-mr-2 p-mb-2" />
				<Button icon="pi pi-bell" class="p-button-rounded p-button-warning p-button-text p-mr-2 p-mb-2" />
				<Button icon="pi pi-heart" class="p-button-rounded p-button-help p-button-text p-mr-2 p-mb-2" />
				<Button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-text p-mr-2 p-mb-2" />
				<Button icon="pi pi-filter" class="p-button-rounded p-button-plain p-button-text p-mr-2 p-mb-2" />
			</div>

			<div class="card">
				<h5>Rounded Outlined</h5>
				<Button icon="pi pi-check" class="p-button-rounded p-button-outlined p-mr-2 p-mb-2" />
				<Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
				<Button icon="pi pi-search" class="p-button-rounded p-button-success p-button-outlined p-mr-2 p-mb-2" />
				<Button icon="pi pi-user" class="p-button-rounded p-button-info p-button-outlined p-mr-2 p-mb-2" />
				<Button icon="pi pi-bell" class="p-button-rounded p-button-warning p-button-outlined p-mr-2 p-mb-2" />
				<Button icon="pi pi-heart" class="p-button-rounded p-button-help p-button-outlined p-mr-2 p-mb-2" />
				<Button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-outlined p-mr-2 p-mb-2" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				items: [
					{
						label: 'Update',
						icon: 'pi pi-refresh'
					},
					{
						label: 'Delete',
						icon: 'pi pi-times'
					},
					{
						separator:true
					},
					{
						label: 'Home',
						icon: 'pi pi-home'
					},
				]
			}
		}
	}
</script>

<style scoped>

</style>
