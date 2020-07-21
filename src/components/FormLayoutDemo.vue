<template>
	<div class="p-grid">
		<div class="p-col-12 p-md-6">
			<div class="card p-fluid">
				<h5>Vertical</h5>
				<div class="p-field">
					<label for="name1">Name</label>
					<InputText id="name1" type="text" />
				</div>
				<div class="p-field">
					<label for="email1">Email</label>
					<InputText id="email1" type="text" />
				</div>
				<div class="p-field">
					<label for="age1">Age</label>
					<InputText id="age1" type="text" />
				</div>
			</div>

			<div class="card p-fluid">
				<h5>Vertical Grid</h5>
				<div class="p-formgrid p-grid">
					<div class="p-field p-col">
						<label for="name2">Name</label>
						<InputText id="name2" type="text" />
					</div>
					<div class="p-field p-col">
						<label for="email2">Email</label>
						<InputText id="email2" type="text" />
					</div>
				</div>
			</div>
		</div>

		<div class="p-col-12 p-md-6">
			<div class="card p-fluid">
				<h5>Horizontal</h5>
				<div class="p-field p-grid">
					<label for="name3" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Name</label>
					<div class="p-col-12 p-md-10">
						<InputText id="name3" type="text" />
					</div>
				</div>
				<div class="p-field p-grid">
					<label for="email3" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Email</label>
					<div class="p-col-12 p-md-10">
						<InputText id="email3" type="text" />
					</div>
				</div>
			</div>

			<div class="card">
				<h5>Inline</h5>
				<div class="p-formgroup-inline">
					<div class="p-field">
						<label for="firstname1" class="p-sr-only">Firstname</label>
						<InputText id="firstname1" type="text" placeholder="Firstname"/>
					</div>
					<div class="p-field">
						<label for="lastname1" class="p-sr-only">Lastname</label>
						<InputText id="lastname1" type="text" placeholder="Lastname"/>
					</div>
					<Button label="Submit"></Button>
				</div>
			</div>

			<div class="card">
				<h5>Help Text</h5>
				<div class="p-field p-fluid">
					<label for="username">Username</label>
					<InputText id="username" type="text" />
					<small>Enter your username to reset your password.</small>
				</div>
			</div>
		</div>

		<div class="p-col-12">
			<div class="card">
				<h5>Advanced</h5>
				<div class="p-fluid p-formgrid p-grid">
					<div class="p-field p-col-12 p-md-6">
						<label for="firstname2">Firstname</label>
						<InputText id="firstname2" type="text"/>
					</div>
					<div class="p-field p-col-12 p-md-6">
						<label for="lastname2">Lastname</label>
						<InputText id="lastname2" type="text"/>
					</div>
					<div class="p-field p-col-12">
						<label for="address">Address</label>
						<Textarea id="address" type="text" rows="4"/>
					</div>
					<div class="p-field p-col-12 p-md-6">
						<label for="city">City</label>
						<InputText id="city" type="text" />
					</div>
					<div class="p-field p-col-12 p-md-3">
						<label for="state">State</label>
						<Dropdown id="state" v-model="dropdownItem" :options="dropdownItems" optionLabel="name" placeholder="Select One"></Dropdown>
					</div>
					<div class="p-field p-col-12 p-md-3">
						<label for="zip">Zip</label>
						<InputText id="zip" type="text"/>
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
				dropdownItems: [
					{name: 'Option 1', code: 'Option 1'},
					{name: 'Option 2', code: 'Option 2'},
					{name: 'Option 3', code: 'Option 3'}
				],
				dropdownItem: null,
			}
		}
	}
</script>
