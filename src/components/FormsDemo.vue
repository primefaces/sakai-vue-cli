<template>

	<div class="p-grid p-fluid">
		<div class="p-col-12 p-lg-6">
			<div class="card card-w-title">
				<h1>InputText</h1>
				<div class="p-grid">
					<div class="p-col-12 p-md-4">
						<InputText placeholder="Name"/>
					</div>
					<div class="p-col-12 p-md-4">
						<InputText placeholder="Email"/>
					</div>
					<div class="p-col-12 p-md-4">
						<InputText placeholder="Phone"/>
					</div>
					<div class="p-col-12 p-md-4">
						<InputText placeholder="Address" />
					</div>
					<div class="p-col-12 p-md-4">
						<InputText placeholder="Disabled" disabled />
					</div>
					<div class="p-col-12 p-md-4">
						<InputText placeholder="Error" class="p-error"/>
					</div>
				</div>
			</div>

			<div class="card card-w-title">
				<h1>TextArea</h1>
				<Textarea placeholder="Your Message" :autoResize="true" rows="3" cols="30" />
			</div>

			<div class="card card-w-title">
				<h1>AutoComplete</h1>
				<div class="p-grid">
					<div class="p-col-12">
						<label htmlFor="acSimple">Simple</label>
					</div>
					<div class="p-col-12">
						<AutoComplete v-model="selectedCountry" :suggestions="filteredCountriesBasic" @complete="searchCountryBasic($event)" field="name" />
					</div>
					<div class="p-col-12">
						<label htmlFor="acAdvanced">Advanced</label>
					</div>
					<div class="p-col-12">
						<AutoComplete v-model="brand" :suggestions="filteredBrands" @complete="searchBrand($event)" placeholder="Hint: type 'v' or 'f'" :dropdown="true">
							<template #item="slotProps">
								<div class="p-clearfix p-autocomplete-brand-item">
									<img :alt="slotProps.item" :src="'assets/layout/images/car/' + slotProps.item + '.png'" width="32" style="display: inline-block; margin: 5px 0 2px 5px"/>
									<div style="font-size: 18px; float: right; margin: 10px 10px 0 0">{{slotProps.item}}</div>
								</div>
							</template>
						</AutoComplete>
					</div>
				</div>
			</div>

			<div class="card card-w-title">
				<h1>MultiSelect</h1>
				<MultiSelect v-model="multiselectedCars" :options="multiselectCars" optionLabel="brand" placeholder="Select Brands" />
			</div>

			<div class="card card-w-title">
				<h1>Calendar</h1>
				<Calendar v-model="date1" :inline="true"/>

				<div class="p-grid-m" style="margin-top: 20px">
					<div class="p-col-12">
						<Calendar placeholder="Popup" v-model="date2"/>
					</div>
					<div class="p-col-12">
						<Calendar placeholder="DateTime" v-model="date3" :showTime="true" dateFormat="dd/mm/yy" />
					</div>
					<div class="p-col-12">
						<Calendar placeholder="Time" v-model="date4" :timeOnly="true" :showTime="true" />
					</div>
					<div class="p-col-12">
						<Calendar placeholder="Button" v-model="date5" :showIcon="true" />
					</div>
					<div class="p-col-12">
						<Calendar placeholder="Multiple Months" v-model="date6" :numberOfMonths="3" />
					</div>
					<div class="p-col-12">
						<Calendar placeholder="Month Picker" v-model="date7" view="month" dateFormat="mm/yy"/>
					</div>
				</div>
			</div>
		</div>

		<div class="p-col-12 p-lg-6">
			<div class="card card-w-title">
				<h1>Checkboxes</h1>
				<div class="p-grid">
					<div class="p-col-12 p-md-4">
						<Checkbox id="theme1" name="theme" value="Ultima" v-model="themesCheckbox" />
						<label for="theme1" class="p-checkbox-label">Ultima</label>
					</div>
					<div class="p-col-12 p-md-4">
						<Checkbox id="theme2" name="theme" value="Avalon" v-model="themesCheckbox" />
						<label for="theme2" class="p-checkbox-label">Avalon</label>
					</div>
					<div class="p-col-12 p-md-4">
						<Checkbox id="theme3" name="theme" value="Serenity" v-model="themesCheckbox" />
						<label for="theme3" class="p-checkbox-label">Serenity</label>
					</div>
				</div>
			</div>

			<div class="card card-w-title">
				<h1>RadioButtons</h1>
				<div class="p-grid">
					<div class="p-col-12 p-md-4">
						<RadioButton id="themeR1" name="theme" value="Ultima" v-model="themesRadioButton" />
						<label for="themeR1" class="p-radiobutton-label">Ultima</label>
					</div>
					<div class="p-col-12 p-md-4">
						<RadioButton id="themeR2" name="theme" value="Avalon" v-model="themesRadioButton" />
						<label for="themeR2" class="p-radiobutton-label">Avalon</label>
					</div>
					<div class="p-col-12 p-md-4">
						<RadioButton id="themeR3" name="theme" value="Serenity" v-model="themesRadioButton" />
						<label for="themeR3" class="p-radiobutton-label">Serenity</label>
					</div>
				</div>
			</div>

			<div class="card card-w-title">
				<h1>InputSwitch</h1>
				<InputSwitch v-model="switchValue" />
			</div>

			<div class="card card-w-title">
				<h1>Dropdown</h1>
				<Dropdown v-model="dropdownCity" :options="dropdownCities" optionLabel="name" placeholder="Select a City" />
			</div>

			<div class="card card-w-title">
				<h1>Password</h1>
				<Password v-model="passwordValue" />
			</div>

			<div class="card card-w-title">
				<h1>Spinner</h1>
				<Spinner v-model="spinnerValue" />
			</div>

			<div class="card card-w-title">
				<h1>Slider</h1>
				<Slider v-model="sliderValue" :range="true" />
			</div>

			<div class="card card-w-title">
				<h1>ListBox</h1>
				<Listbox v-model="listboxCity" :options="listboxCities" optionLabel="name" :filter="true"/>
			</div>

			<div class="card card-w-title">
				<h1>Rating</h1>
				<Rating v-model="ratingValue" />
			</div>

			<div class="card card-w-title">
				<h1>Chips</h1>
				<Chips v-model="chipsValue" />
			</div>
		</div>

		<div class="p-col-12">
			<div class="card card-w-title">
				<h1>Input Groups</h1>
				<div class="p-grid">
					<div class="p-col-12 p-md-6">
						<div class="p-inputgroup">
							<span class="p-inputgroup-addon"><i class="pi pi-user" /></span>
							<InputText placeholder="Username"/>
						</div>
					</div>

					<div class="p-col-12 p-md-6">
						<div class="p-inputgroup">
							<span class="p-inputgroup-addon"><i class="pi pi-clock" /></span>
							<span class="p-inputgroup-addon"><i class="pi pi-star"></i></span>
							<InputText placeholder="Payment"/>
							<span class="p-inputgroup-addon">$</span>
							<span class="p-inputgroup-addon">.00</span>
						</div>
					</div>

					<div class="p-col-12 p-md-6">
						<div class="p-inputgroup">
							<InputText placeholder="Search"/>
							<Button icon="pi pi-search"/>
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

		<div class="p-col-12">
			<div class="card card-w-title">
				<h1>Editor</h1>
				<Editor v-model="editorValue" editorStyle="height: 320px"/>
			</div>
		</div>

		<div class="p-col-12 p-nogutter">
			<div class="p-grid">
				<div class="p-col-12 p-lg-6">
					<div class="card card-w-title">
						<h1>Buttons</h1>

						<div class="p-grid">
							<div class="p-col-12">ToggleButton</div>
							<div class="p-col-12">
								<ToggleButton v-model="toggleValue" onLabel="Yes" offLabel="No"/>
							</div>

							<div class="p-col-12">SelectButton</div>
							<div class="p-col-12">
								<SelectButton v-model="selectButtonValue" :options="selectButtonValues" optionLabel="name" class="p-buttonset-3" />
							</div>

							<div class="p-col-12">Button</div>
							<div class="p-col-12">
								<Button label="Bookmark"/>
							</div>

							<div class="p-col-12">Left Icon</div>
							<div class="p-col-12">
								<Button label="Clear" icon="pi pi-times" />
							</div>

							<div class="p-col-12">Right Icon</div>
							<div class="p-col-12">
								<Button label="Clear" icon="pi pi-times" iconPos="right"/>
							</div>

							<div class="p-col-12">Icon Only</div>
							<div class="p-col-12">
								<Button icon="pi pi-check"/>
							</div>

							<div class="p-col-12">Link</div>
							<div class="p-col-12"><a href="http://www.primefaces.org">Homepage</a></div>

							<div class="p-col-12">SplitButton</div>
							<div class="p-col-12">
								<SplitButton label="Save" icon="pi pi-plus" :model="splitItems"></SplitButton>
							</div>
						</div>
					</div>
				</div>
				<div class="p-col-12 p-lg-6">
					<div class="card card-w-title">
						<h1>Colored Buttons</h1>
						<p>Flat buttons with various color alternatives.</p>

						<div class="p-grid">
							<div class="p-col-12 p-md-4" style="text-align: center">
								<Button label="Primary" style="margin-bottom: 10px" />
								<Button label="Secondary" style="margin-bottom: 10px" class="p-button-secondary" />
								<Button label="Success" style="margin-bottom: 10px" class="p-button-success" />
								<Button label="Info" style="margin-bottom: 10px" class="p-button-info" />
								<Button label="Warning" style="margin-bottom: 10px" class="p-button-warning" />
								<Button label="Danger" style="margin-bottom: 10px" class="p-button-danger" />
							</div>
							<div class="p-col-12 p-md-4" style="text-align: center">
								<Button label="Primary" style="margin-bottom: 10px" class="p-button-raised"/>
								<Button label="Secondary" style="margin-bottom: 10px" class="p-button-secondary p-button-raised" />
								<Button label="Success" style="margin-bottom: 10px" class="p-button-success p-button-raised" />
								<Button label="Info" style="margin-bottom: 10px" class="p-button-info p-button-raised" />
								<Button label="Warning" style="margin-bottom: 10px" class="p-button-warning p-button-raised" />
								<Button label="Danger" style="margin-bottom: 10px" class="p-button-danger p-button-raised" />
							</div>
							<div class="p-col-12 p-md-4" style="text-align: center">
								<Button label="Primary" style="margin-bottom: 10px"  class="p-button-rounded"/>
								<Button label="Secondary" style="margin-bottom: 10px" class="p-button-secondary p-button-rounded" />
								<Button label="Success" style="margin-bottom: 10px" class="p-button-success p-button-rounded" />
								<Button label="Info" style="margin-bottom: 10px" class="p-button-info p-button-rounded" />
								<Button label="Warning" style="margin-bottom: 10px" class="p-button-warning p-button-rounded" />
								<Button label="Danger" style="margin-bottom: 10px" class="p-button-danger p-button-rounded" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
import CountryService from '../service/CountryService'

export default {
	data(){
		return {
			countries: null,
			selectedCountry: null,
			filteredCountriesBasic: null,
			brands: null,
			brand: null,
			filteredBrands: null,
			multiselectedCars: null,
			multiselectCars: [
				{brand: 'Audi', value: 'Audi'},
				{brand: 'Bmw', value: 'Bmw'},
				{brand: 'Fiat', value: 'Fiat'},
				{brand: 'Honda', value: 'Honda'},
				{brand: 'Jaguar', value: 'Jaguar'},
				{brand: 'Mercedes', value: 'Mercedes'},
				{brand: 'Renault', value: 'Renault'},
				{brand: 'Volkswagen', value: 'Volkswagen'},
				{brand: 'Volvo', value: 'Volvo'}
			],
			date1: null,
			date2: null,
			date3: null,
			date4: null,
			date5: null,
			date6: null,
			date7: null,
			chipsValue: null,
			themesCheckbox: [],
			themesRadioButton: null,
			switchValue: false,
			dropdownCities: [
				{name: 'New York', code: 'NY'},
				{name: 'Rome', code: 'RM'},
				{name: 'London', code: 'LDN'},
				{name: 'Istanbul', code: 'IST'},
				{name: 'Paris', code: 'PRS'}
			],
			dropdownCity: null,
			passwordValue: '',
			spinnerValue: null,
			sliderValue: [20,80],
			listboxCities: [
				{name: 'New York', code: 'NY'},
				{name: 'Rome', code: 'RM'},
				{name: 'London', code: 'LDN'},
				{name: 'Istanbul', code: 'IST'},
				{name: 'Paris', code: 'PRS'}
			],
			listboxCity: null,
			ratingValue: null,
			inputGroupValue: false,
			editorValue: '<div>Welcome to PrimeVue <b>Editor</b></div><div><br></div>',
			toggleValue: false,
			selectButtonValues: [
				{name: 'Apartment', code: 'Apartment'},
				{name: 'House', code: 'House'},
				{name: 'Studio', code: 'Studio'}
			],
			selectButtonValue: null,
			splitItems: [
				{
					label: 'Update',
					icon: 'pi pi-refresh'
				},
				{
					label: 'Delete',
					icon: 'pi pi-times'
				},
				{
					label: 'Vue Website',
					icon: 'pi pi-external-link'
				},
				{
					label: 'Upload',
					icon: 'pi pi-upload'
				}
			]
		}
	},
	countryService: null,
	created() {
		this.countryService = new CountryService();
	},
	mounted() {
		this.countryService.getCountries().then(data => this.countries = data);
		this.brands = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo'];
	},
	methods: {
		searchCountry(query) {
			return this.countries.filter((country) => {
				return country.name.toLowerCase().startsWith(query.toLowerCase());
			});
		},
		searchCountryBasic(event) {
			setTimeout(() => {
				this.filteredCountriesBasic = this.searchCountry(event.query);
			}, 250);
		},
		searchBrand(event) {
			setTimeout(() => {
				let results;

				if (event.query.length === 0) {
					results = [...this.brands];
				}
				else {
					results = this.brands.filter((brand) => {
						return brand.toLowerCase().startsWith(event.query.toLowerCase());
					});
				}

				this.filteredBrands = results;
			}, 250);
		}
	}
}
</script>

<style scoped>

</style>