<template>
	<div class="card">
		<h5>Float Label</h5>
		<div class="grid p-fluid mt-3">
			<div class="field col-12 md:col-4">	
				<span class="p-float-label">
					<InputText type="text" id="inputtext" v-model="value1" />
					<label for="inputtext">InputText</label>
				</span>
			</div>
			<div class="field col-12 md:col-4">
				<span class="p-float-label">
					<AutoComplete id="autocomplete" v-model="value2" :suggestions="filteredCountries" @complete="searchCountry($event)" field="name"></AutoComplete>
					<label for="autocomplete">AutoComplete</label>
				</span>
			</div>
			<div class="field col-12 md:col-4">
				<span class="p-float-label">
					<Calendar inputId="calendar" v-model="value3"></Calendar>
					<label for="calendar">Calendar</label>
				</span>
			</div>
			<div class="field col-12 md:col-4">
				<span class="p-float-label">
					<Chips inputId="chips" v-model="value4"></Chips>
					<label for="chips">Chips</label>
				</span>
			</div>
			<div class="field col-12 md:col-4">
				<span class="p-float-label">
					<InputMask id="inputmask" mask="99/99/9999" v-model="value5"></InputMask>
					<label for="inputmask">InputMask</label>
				</span>
			</div>
			<div class="field col-12 md:col-4">
				<span class="p-float-label">
					<InputNumber id="inputnumber" v-model="value6"></InputNumber>
					<label for="inputnumber">InputNumber</label>
				</span>
			</div>
			<div class="field col-12 md:col-4">
				<div class="p-inputgroup">
					<span class="p-inputgroup-addon">
						<i class="pi pi-user"></i>
					</span>
					<span class="p-float-label">
						<InputText type="text" id="inputgroup" v-model="value7" />
						<label for="inputgroup">InputGroup</label>
					</span>
				</div>
			</div>
			<div class="field col-12 md:col-4">
				<span class="p-float-label">
					<Dropdown id="dropdown" :options="cities" v-model="value8" optionLabel="name"></Dropdown>
					<label for="dropdown">Dropdown</label>
				</span>
			</div>
			<div class="field col-12 md:col-4">
				<span class="p-float-label">
					<MultiSelect id="multiselect" :options="cities" v-model="value9" optionLabel="name" :filter="false"></MultiSelect>
					<label for="multiselect">MultiSelect</label>
				</span>
			</div>
			<div class="field col-12 md:col-4">
				<span class="p-float-label">
					<Textarea inputId="textarea" rows="3" cols="30" v-model="value10"></Textarea>
					<label for="textarea">Textarea</label>
				</span>
			</div>				
		</div>
	</div>
</template>

<script>
import CountryService from '../service/CountryService';
export default {
	data() {
		return {
			countries: [],
			filteredCountries: null,
			cities: [
				{ name: 'New York', code: 'NY' },
				{ name: 'Rome', code: 'RM' },
				{ name: 'London', code: 'LDN' },
				{ name: 'Istanbul', code: 'IST' },
				{ name: 'Paris', code: 'PRS' },
			],
			value1: null,
			value2: null,
			value3: null,
			value4: null,
			value5: null,
			value6: null,
			value7: null,
			value8: null,
			value9: null,
			value10: null,
		};
	},
	created() {
		this.countryService = new CountryService();
	},
	mounted() {
		this.countryService.getCountries().then((countries) => {
			this.countries = countries;
		});
	},
	methods: {
		searchCountry(event) {
			// in a real application, make a request to a remote url with the query and
			// return filtered results, for demo we filter at client side
			const filtered = [];
			const query = event.query;
			for (let i = 0; i < this.countries.length; i++) {
				const country = this.countries[i];
				if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
					filtered.push(country);
				}
			}
			this.filteredCountries = filtered;
		},
	},
};
</script>
