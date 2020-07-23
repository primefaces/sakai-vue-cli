<template>
	<div class="p-grid p-fluid">
		<div class="p-col-12 p-md-6">
			<div class="card">
				<h5>InputText</h5>
				<div class="p-grid p-formgrid">
					<div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
						<InputText type="text" placeholder="Default"></InputText>
					</div>
					<div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
						<InputText type="text" placeholder="Disabled" :disabled="true"></InputText>
					</div>
					<div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
						<InputText type="text" placeholder="Invalid" class="p-error" />
					</div>
				</div>

				<h5>Icons</h5>
				<div class="p-grid p-formgrid">
					<div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
						<span class="p-input-icon-left">
							<i class="pi pi-user" />
							<InputText type="text" placeholder="Username" />
						</span>
					</div>
					<div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
						<span class="p-input-icon-right">
							<InputText type="text" placeholder="Search" />
							<i class="pi pi-search" />
						</span>
					</div>
					<div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
						<span class="p-input-icon-left p-input-icon-right">
							<i class="pi pi-user" />
							<InputText type="text" placeholder="Search" />
							<i class="pi pi-search" />
						</span>
					</div>
				</div>

				<h5>Float Label</h5>
				<span class="p-float-label">
					<InputText id="username" type="text" v-model="floatValue"/>
					<label for="username">Username</label>
				</span>

				<h5>Textarea</h5>
				<Textarea placeholder="Your Message" :autoResize="true" rows="3" cols="30" />

				<h5>AutoComplete</h5>
				<AutoComplete placeholder="Search" id="dd" :dropdown="true" :multiple="true" v-model="selectedAutoValue" :suggestions="autoFilteredValue" @complete="searchCountry($event)" field="name"/>

				<h5>Calendar</h5>
				<Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue"></Calendar>

				<h5>Spinner</h5>
				<InputNumber v-model="inputNumberValue" showButtons mode="decimal"></InputNumber>

				<h5>Chips</h5>
				<Chips v-model="chipsValue"/>
			</div>

			<div class="card">
				<h5>Slider</h5>
				<InputText v-model.number="sliderValue" />
				<Slider v-model="sliderValue" />

				<h5>Rating</h5>
				<Rating v-model="ratingValue"/>

				<h5>ColorPicker</h5>
				<ColorPicker v-model="colorValue" />
			</div>
		</div>

		<div class="p-col-12 p-md-6">
			<div class="card">
				<h5>RadioButton</h5>
				<div class="p-grid">
					<div class="p-col-12 p-md-4">
						<div class="p-field-radiobutton">
							<RadioButton id="option1" name="option" value="Chicago" v-model="radioValue" />
							<label for="option1">Chicago</label>
						</div>
					</div>
					<div class="p-col-12 p-md-4">
						<div class="p-field-radiobutton">
							<RadioButton id="option2" name="option" value="Los Angeles" v-model="radioValue" />
							<label for="option2">Los Angeles</label>
						</div>
					</div>
					<div class="p-col-12 p-md-4">
						<div class="p-field-radiobutton">
							<RadioButton id="option3" name="option" value="New York" v-model="radioValue" />
							<label for="option3">New York</label>
						</div>
					</div>
				</div>

				<h5 style="margin-top: 0">Checkbox</h5>
				<div class="p-grid">
					<div class="p-col-12 p-md-4">
						<div class="p-field-checkbox">
							<Checkbox id="checkOption1" name="option" value="Chicago" v-model="checkboxValue" />
							<label for="checkOption1">Chicago</label>
						</div>
					</div>
					<div class="p-col-12 p-md-4">
						<div class="p-field-checkbox">
							<Checkbox id="checkOption2" name="option" value="Los Angeles" v-model="checkboxValue" />
							<label for="checkOption2">Los Angeles</label>
						</div>
					</div>
					<div class="p-col-12 p-md-4">
						<div class="p-field-checkbox">
							<Checkbox id="checkOption3" name="option" value="New York" v-model="checkboxValue" />
							<label for="checkOption3">New York</label>
						</div>
					</div>
				</div>

				<h5 style="margin-top: 0">Input Switch</h5>
				<InputSwitch v-model="switchValue" />
			</div>

			<div class="card">
				<h5>Listbox</h5>
				<Listbox v-model="listboxValue" :options="listboxValues" optionLabel="name" :filter="true"/>

				<h5>Dropdown</h5>
				<Dropdown v-model="dropdownValue" :options="dropdownValues" optionLabel="name" placeholder="Select" />

				<h5>MultiSelect</h5>
				<MultiSelect v-model="multiselectValue" :options="multiselectValues" optionLabel="name" placeholder="Select Countries" :filter="true" class="multiselect-custom">
					<template #value="slotProps">
						<div class="country-item country-item-value" v-for="option of slotProps.value" :key="option.code">
							<span :class="'flag flag-' + option.code.toLowerCase()" />
							<div>{{option.name}}</div>
						</div>
						<template v-if="!slotProps.value || slotProps.value.length === 0">
							Select Countries
						</template>
					</template>
					<template #option="slotProps">
						<div class="country-item">
							<span :class="'flag flag-' + slotProps.option.code.toLowerCase()" />
							<div>{{slotProps.option.name}}</div>
						</div>
					</template>
				</MultiSelect>
			</div>

			<div class="card">
				<h5>ToggleButton</h5>
				<ToggleButton v-model="toggleValue" onLabel="Yes" offLabel="No"/>

				<h5>SelectButton</h5>
				<SelectButton v-model="selectButtonValue1" :options="selectButtonValues1" optionLabel="name" />

				<h5>SelectButton - Multiple</h5>
				<SelectButton v-model="selectButtonValue2" :options="selectButtonValues2" optionLabel="name" :multiple="true"/>
			</div>
		</div>

		<div class="p-col-12">
			<div class="card">
				<h5>Input Groups</h5>
				<div class="p-grid p-fluid">
					<div class="p-col-12 p-md-6">
						<div class="p-inputgroup">
							<span class="p-inputgroup-addon">
								<i class="pi pi-user"></i>
							</span>
							<InputText placeholder="Username"/>
						</div>
					</div>

					<div class="p-col-12 p-md-6">
						<div class="p-inputgroup">
							<span class="p-inputgroup-addon"><i class="pi pi-shopping-cart"></i></span>
							<span class="p-inputgroup-addon"><i class="pi pi-globe"></i></span>
							<InputText placeholder="Price"/>
							<span class="p-inputgroup-addon">$</span>
							<span class="p-inputgroup-addon">.00</span>
						</div>
					</div>

					<div class="p-col-12 p-md-6">
						<div class="p-inputgroup">
							<Button label="Search"/>
							<InputText placeholder="Keyword"/>
						</div>
					</div>

					<div class="p-col-12 p-md-6">
						<div class="p-inputgroup">
							<span class="p-inputgroup-addon p-inputgroup-addon-checkbox">
								<Checkbox v-model="inputGroupValue" :binary="true"/>
							</span>
							<InputText placeholder="Confirm"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import CountryService from '../service/CountryService';
	export default {
		data() {
			return {
				floatValue: null,
				autoValue: null,
				selectedAutoValue: null,
				autoFilteredValue: [],
				calendarValue: null,
				inputNumberValue: null,
				chipsValue: null,
				sliderValue: null,
				ratingValue: null,
				colorValue: '1976D2',
				radioValue: null,
				checkboxValue: [],
				switchValue: false,
				listboxValues: [
					{name: 'New York', code: 'NY'},
					{name: 'Rome', code: 'RM'},
					{name: 'London', code: 'LDN'},
					{name: 'Istanbul', code: 'IST'},
					{name: 'Paris', code: 'PRS'}
				],
				listboxValue: null,
				dropdownValues: [
					{name: 'New York', code: 'NY'},
					{name: 'Rome', code: 'RM'},
					{name: 'London', code: 'LDN'},
					{name: 'Istanbul', code: 'IST'},
					{name: 'Paris', code: 'PRS'}
				],
				dropdownValue: null,
				multiselectValue: null,
				multiselectValues: [
					{name: 'Australia', code: 'AU'},
					{name: 'Brazil', code: 'BR'},
					{name: 'China', code: 'CN'},
					{name: 'Egypt', code: 'EG'},
					{name: 'France', code: 'FR'},
					{name: 'Germany', code: 'DE'},
					{name: 'India', code: 'IN'},
					{name: 'Japan', code: 'JP'},
					{name: 'Spain', code: 'ES'},
					{name: 'United States', code: 'US'}
				],
				toggleValue: false,
				selectButtonValues1: [
					{name: 'Option 1', code: 'O1'},
					{name: 'Option 2', code: 'O2'},
					{name: 'Option 3', code: 'O3'},
				],
				selectButtonValue1: null,
				selectButtonValues2: [
					{name: 'Option 1', code: 'O1'},
					{name: 'Option 2', code: 'O2'},
					{name: 'Option 3', code: 'O3'},
				],
				selectButtonValue2: null,
				inputGroupValue: false
			}
		},
		countryService: null,
		created() {
			this.countryService = new CountryService();
		},
		mounted() {
			this.countryService.getCountries().then(data => this.autoValue = data);
		},
		methods: {
			searchCountry(event) {
				setTimeout(() => {
					if (!event.query.trim().length) {
						this.autoFilteredValue = [...this.autoValue];
					}
					else {
						this.autoFilteredValue = this.autoValue.filter((country) => {
							return country.name.toLowerCase().startsWith(event.query.toLowerCase());
						});
					}
				}, 250);
			}
		}
	}
</script>

<style scoped lang="scss">
	.p-multiselect {
		min-width: 15rem;
	}

	.multiselect-custom {

		.p-multiselect-label:not(.p-placeholder) {
			padding-top: .25rem;
			padding-bottom: .25rem;
		}

		.country-item {
			display: flex;
			align-items: center;

			span.flag {
				width: 18px;
				height: 12px;
				margin-right: .5rem;
				margin-left: .5rem;
			}
		}

		.country-item-value {
			border-radius: 3px;
			display: inline-flex;
			margin-right: .5rem;
			background-color: #2196F3;
			color: #ffffff;
		}
	}
</style>
