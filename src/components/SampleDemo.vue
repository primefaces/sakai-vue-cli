<template>
	<div class="p-fluid">
		<div class="p-grid">
			<div class="p-col-12">
				<div class="p-messages p-component p-messages-success" style="margin: 0 0 1em 0; display: block">
					<div class="p-messages-wrapper">
						<span class="p-messages-icon pi pi-fw pi-2x pi-check"></span>
						<span class="p-messages-detail">Designer API is a theme engine for the complete PrimeVue UI Suite and includes this demo application
                                        to test the commonly used components while designing your theme.
						</span>
					</div>
				</div>

				<div class="card card-w-title">
					<h1>Form Elements</h1>
					<div class="p-grid">
						<div class="p-col-12 p-md-2">
							<label htmlFor="input">Input</label>
						</div>
						<div class="p-col-12 p-md-4">
							<InputText id="input" />
						</div>
						<div class="p-col-12 p-md-2">
							<label htmlFor="textarea">Textarea</label>
						</div>
						<div class="p-col-12 p-md-4">
							<Textarea placeholder="Your Message" :autoResize="true" rows="3" cols="30" />
						</div>
						<div class="p-col-12 p-md-2">
							<label htmlFor="calendar">Calendar</label>
						</div>
						<div class="p-col-12 p-md-4">
							<Calendar placeholder="Popup" v-model="date" :showIcon="true"  />
						</div>
						<div class="p-col-12 p-md-2">
							<label htmlFor="autocomplete">AutoComplete</label>
						</div>
						<div class="p-col-12 p-md-4">
							<AutoComplete v-model="selectedCountry" placeholder="Countries" :suggestions="filteredCountriesBasic" @complete="searchCountryBasic($event)" field="name" />
						</div>
						<div class="p-col-12 p-md-2">
							<label htmlFor="dropdown">Dropdown</label>
						</div>
						<div class="p-col-12 p-md-4">
							<Dropdown v-model="dropdownCity" :options="dropdownCities" optionLabel="name" placeholder="Select a City" />
						</div>
						<div class="p-col-12 p-md-2">
							<label htmlFor="password">Password</label>
						</div>
						<div class="p-col-12 p-md-4">
							<Password v-model="passwordValue" id="password"/>
						</div>
						<div class="p-col-12 p-md-2">
							<label htmlFor="inputmask">InputMask</label>
						</div>
						<div class="p-col-12 p-md-4">
							<InputMask mask="99/99/9999" v-model="inputMaskValue" slotChar="dd/mm/yyyy" placeholder="Date" id="inputmask"/>
						</div>
						<div class="p-col-12 p-md-2">
							<label htmlFor="spinner">Spinner</label>
						</div>
						<div class="p-col-12 p-md-4">
							<Spinner v-model="spinnerValue" />
						</div>

						<div class="p-col-12 p-md-2">
							Checkbox
						</div>
						<div class="p-col-12 p-md-4">
							<div class="p-grid">
								<div class="p-col-12">
									<Checkbox id="theme1" name="theme" value="Ultima" v-model="themesCheckbox" />
									<label for="theme1" class="p-checkbox-label">Ultima</label>
								</div>
								<div class="p-col-12">
									<Checkbox id="theme2" name="theme" value="Avalon" v-model="themesCheckbox" />
									<label for="theme2" class="p-checkbox-label">Avalon</label>
								</div>
								<div class="p-col-12">
									<Checkbox id="theme3" name="theme" value="Serenity" v-model="themesCheckbox" />
									<label for="theme3" class="p-checkbox-label">Serenity</label>
								</div>
							</div>
						</div>
						<div class="p-col-12 p-md-2">
							RadioButton
						</div>
						<div class="p-col-12 p-md-4">
							<div class="p-grid">
								<div class="p-col-12">
									<RadioButton id="themeR1" name="theme" value="Ultima" v-model="themesRadioButton" />
									<label for="themeR1" class="p-radiobutton-label">Ultima</label>
								</div>
								<div class="p-col-12">
									<RadioButton id="themeR2" name="theme" value="Avalon" v-model="themesRadioButton" />
									<label for="themeR2" class="p-radiobutton-label">Avalon</label>
								</div>
								<div class="p-col-12">
									<RadioButton id="themeR3" name="theme" value="Serenity" v-model="themesRadioButton" />
									<label for="themeR3" class="p-radiobutton-label">Serenity</label>
								</div>
							</div>
						</div>
						<div class="p-col-12 p-md-2">
							<label htmlFor="slider">Slider</label>
						</div>
						<div class="p-col-12 p-md-4">
							<Slider v-model="sliderValue" :range="true" />
						</div>
						<div class="p-col-12 p-md-2">
							Button
						</div>
						<div class="p-col-12 p-md-4">
							<Button label="Edit" icon="pi pi-pencil" />
						</div>
						<div class="p-col-12 p-md-2">
							SplitButton
						</div>
						<div class="p-col-12 p-md-4">
							<SplitButton label="Save" icon="pi pi-plus" :model="splitItems"></SplitButton>
						</div>
						<div class="p-col-12 p-md-2">
							<label htmlFor="multiselect">MultiSelect</label>
						</div>
						<div class="p-col-12 p-md-4">
							<MultiSelect v-model="multiselectedCars" :options="multiselectCars" optionLabel="brand" placeholder="Select Brands" />
						</div>
						<div class="p-col-12 p-md-2">
							ToggleButton
						</div>
						<div class="p-col-12 p-md-4">
							<ToggleButton v-model="toggleValue" onLabel="Yes" offLabel="No"/>
						</div>
						<div class="p-col-12 p-md-2">
							SelectButton
						</div>
						<div class="p-col-12 p-md-4">
							<SelectButton v-model="selectButtonValue" :options="selectButtonValues" optionLabel="name" />
						</div>
						<div class="p-col-12 p-md-2">
							<label htmlFor="listbox">ListBox</label>
						</div>
						<div class="p-col-12 p-md-4">
							<Listbox v-model="listboxCity" :options="listboxCities" optionLabel="name" :filter="true"/>
						</div>
						<div class="p-col-12 p-md-2">
							Dialog
						</div>
						<div class="p-col-12 p-md-4">
							<Button label="Login" icon="pi pi-external-link" @click="open" />
						</div>
					</div>

					<Dialog header="Godfather I" :visible.sync="display" :modal="true">
						<div class="p-grid">
							<div class="p-col-12">
								<InputText placeholder="Username" />
							</div>
							<div class="p-col-12">
								<InputText placeholder="Password" />
							</div>
						</div>
					</Dialog>
				</div>
			</div>

			<div class="p-col-12">
				<div class="card card-w-title">
					<h1>DataTable</h1>
                    <DataTable :value="dataTableCars" class="p-datatable-responsive" :selection.sync="dataTableSelectedCar" selectionMode="single" dataKey="vin" :paginator="true" :rows="10" :filters="filters">
                        <template #header>
                            List of Cars
                        </template>
                        <Column field="vin" header="Vin" :sortable="true">
                            <template #body="slotProps">
                                <span class="p-column-title">Vin</span>
                                {{slotProps.data.vin}}
                            </template>
                            <template #filter>
                                <InputText type="text" v-model="filters['vin']" class="p-column-filter" placeholder="Starts with" />
                            </template>
                        </Column>
                        <Column field="year" header="Year" :sortable="true" filterMatchMode="contains">
                            <template #body="slotProps">
                                <span class="p-column-title">Year</span>
                                {{slotProps.data.year}}
                            </template>
                        <template #filter>
                                <InputText type="text" v-model="filters['year']" class="p-column-filter" placeholder="Contains" />
                            </template>
                        </Column>
                        <Column field="brand" header="Brand" :sortable="true">
                            <template #body="slotProps">
                                <span class="p-column-title">Brand</span>
                                {{slotProps.data.brand}}
                            </template>
                            <template #filter>
                                <Dropdown v-model="filters['brand']" :options="brands" optionLabel="brand" optionValue="value" placeholder="Select a Brand" class="p-column-filter" :showClear="true">
                                    <template #option="slotProps">
                                        <div class="p-clearfix p-dropdown-car-option">
                                            <img :alt="slotProps.option.brand" :src="'assets/demo/images/car/' + slotProps.option.brand + '.png'" />
                                            <span>{{slotProps.option.brand}}</span>
                                        </div>
                                    </template>
                                </Dropdown>
                            </template>
                        </Column>
                        <Column field="color" header="Color" :sortable="true" filterMatchMode="in">
                            <template #body="slotProps">
                                <span class="p-column-title">Color</span>
                                {{slotProps.data.color}}
                            </template>
                            <template #filter>
                                <MultiSelect v-model="filters['color']" :options="colors" optionLabel="name" optionValue="value" placeholder="Select a Color" class="p-column-filter" />
                            </template>
                        </Column>
                        <Column headerStyle="width: 8em; text-align: center" bodyStyle="text-align: center">
                            <template #body="slotProps">
                                <span class="p-column-title">Color</span>
                                {{slotProps.data.color}}
                            </template>
                            <template #header>
                                <Button type="button" icon="pi pi-cog"></Button>
                            </template>
                            <template #body="slotProps">
                                <Button type="button" icon="pi pi-search" class="p-button-success" style="margin-right: .5em"></Button>
                                <Button type="button" icon="pi pi-pencil" class="p-button-warning"></Button>
                            </template>
                        </Column>
                    </DataTable>
				</div>
			</div>

			<div class="p-col-12">
				<div class="card card-w-title">
					<h1>DataView</h1>
					<DataView :value="dataViewValue" :layout="layout" paginatorPosition="both" :paginator="true" :rows="10" :sortOrder="sortOrder" :sortField="sortField">
                        <template #header>
                            <div class="p-grid p-nogutter">
                                <div class="p-col-6" style="text-align: left">
                                    <Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By" @change="onSortChange($event)" />
                                </div>
                                <div class="p-col-6" style="text-align: right">
                                    <DataViewLayoutOptions v-model="layout" />
                                </div>
                            </div>
                        </template>
                        <template #list="slotProps" >
                            <div class="p-col-12">
                                <div class="car-details">
                                    <div>
                                        <img :src="'assets/layout/images/car/' + slotProps.data.brand + '.png'" :alt="slotProps.data.brand"/>
                                        <div class="p-grid">
                                            <div class="p-col-12">Vin: <b>{{slotProps.data.vin}}</b></div>
                                            <div class="p-col-12">Year: <b>{{slotProps.data.year}}</b></div>
                                            <div class="p-col-12">Brand: <b>{{slotProps.data.brand}}</b></div>
                                            <div class="p-col-12">Color: <b>{{slotProps.data.color}}</b></div>
                                        </div>
                                    </div>
                                    <Button icon="pi pi-search"></Button>
                                </div>
                            </div>
                        </template>
                        <template #grid="slotProps">
                            <div style="padding: .5em" class="p-col-12 p-md-3">
                                <Panel :header="slotProps.data.vin" style="text-align: center">
                                    <img :src="'assets/demo/images/car/' + slotProps.data.brand + '.png'" :alt="slotProps.data.brand"/>
                                    <div class="car-detail">{{slotProps.data.year}} - {{slotProps.data.color}}</div>
                                    <Button icon="pi pi-search"></Button>
                                </Panel>
                            </div>
                        </template>
                    </DataView>
				</div>
			</div>

			<div class="p-col-12 p-lg-6">
				<div class="card card-w-title">
					<div class="card-title">PickList</div>
					<PickList v-model="picklistCars" dataKey="vin">
						<template #sourceHeader>
							Available
						</template>
						<template #targetHeader>
							Selected
						</template>
						<template #item="slotProps">
							<span>{{slotProps.item.brand}}</span>
						</template>
					</PickList>
				</div>

				<div class="card card-w-title">
					<div class="card-title">OrderList</div>
					<OrderList v-model="orderlistCars" listStyle="height:250px" dataKey="vin">
						<template #header>
							OrderList
						</template>
						<template #item="slotProps">
							<div class="p-clearfix">
								<img :src="'assets/layout/images/car/' + slotProps.item.brand + '.png'" style="display:inline-block; margin:2px 0 2px 2px; width: 50px">
								<div style="font-size:14px; float:right; margin:15px 5px 0 0}}">{{slotProps.item.brand}} - {{slotProps.item.year}} - {{slotProps.item.color}}</div>
							</div>
						</template>
					</OrderList>
				</div>

				<div class="card card-w-title">
					<h1>ProgressBar</h1>
					<ProgressBar :value="50" />
				</div>

				<div class="card card-w-title">
					<h1>Menu</h1>
					<Menu :model="menuItems"></Menu>
				</div>
			</div>

			<div class="p-col-12 p-lg-6">
				<div class="card card-w-title">
					<h1>Accordion Panel</h1>
					<Accordion>
						<AccordionTab header="Godfather I">
							The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughters wedding.
							His beloved son Michael has just come home from the war, but does not intend to become part of his fathers business.
							Through Michaels life the nature of the family business becomes clear. The business of the family is just like the head
							of the family, kind and benevolent to those who give respect,
							but given to ruthless violence whenever anything stands against the good of the family.
						</AccordionTab>
						<AccordionTab header="Godfather II">
							Francis Ford Coppolas legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young
							Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfathers depiction of the dark side of
							the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family.
							Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand
							Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.
						</AccordionTab>
						<AccordionTab header="Godfather III">
							After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this
							third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone,
							now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.
						</AccordionTab>
					</Accordion>

					<h1>TabView</h1>
					<TabView>
                        <TabPanel header="Godfather I">
                            The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                        </TabPanel>
                        <TabPanel header="Godfather II">
                            Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy.
                        </TabPanel>
                        <TabPanel header="Godfather III">
                            The Godfather Part III is set in 1979 and 1980. Michael has moved back to New York and taken great strides to remove the family from crime. He turns over his New York criminal interests to longtime enforcer Joey Zasa. He uses his wealth in an attempt to rehabilitate his reputation through numerous philanthropic acts, administered by a foundation named after his father. A decade earlier, he gave custody of his two children to Kay, who has since remarried.
                        </TabPanel>
                    </TabView>
				</div>

				<div class="card card-w-title">
					<h1>Panel</h1>
					<Panel header="Godfather I" :toggleable="true">
						The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
						His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
						Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
						kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
					</Panel>
				</div>

				<div class="card card-w-title">
					<h1>Tree</h1>
                    <Tree :value="nodes" selectionMode="checkbox" :selectionKeys.sync="selectedTreeValue"></Tree>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CountryService from '../service/CountryService'
import CarService from '../service/CarService'
import NodeService from '../service/NodeService'

export default {
	data(){
		return {
			countries: null,
			selectedCountry: null,
			filteredCountriesBasic: null,
            multiselectedCars: null,
            filters: {},
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
			date: null,
			themesCheckbox: [],
			themesRadioButton: null,
			dropdownCities: [
				{name: 'New York', code: 'NY'},
				{name: 'Rome', code: 'RM'},
				{name: 'London', code: 'LDN'},
				{name: 'Istanbul', code: 'IST'},
				{name: 'Paris', code: 'PRS'}
			],
			dropdownCity: null,
			passwordValue: '',
			inputMaskValue: null,
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
			],
			display: false,
			dataTableCars: null,
			dataTableSelectedCar: null,
			dataViewValue: null,
			layout: 'list',
			sortKey: null,
			sortOrder: null,
			sortField: null,
			sortOptions: [
				{label: 'Newest First', value: '!year'},
				{label: 'Oldest First', value: 'year'},
				{label: 'Brand', value: 'brand'}
			],
			picklistCars: null,
			orderlistCars: null,
			nodes: null,
			selectedTreeValue: null,
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
            ],
            brands: [
                {brand: 'Audi', value: 'Audi'},
                {brand: 'BMW', value: 'BMW'},
                {brand: 'Fiat', value: 'Fiat'},
                {brand: 'Honda', value: 'Honda'},
                {brand: 'Jaguar', value: 'Jaguar'},
                {brand: 'Mercedes', value: 'Mercedes'},
                {brand: 'Renault', value: 'Renault'},
                {brand: 'Volkswagen', value: 'Volkswagen'},
                {brand: 'Volvo', value: 'Volvo'}
            ],
            colors: [
                {name: 'White', value: 'White'},
                {name: 'Green', value: 'Green'},
                {name: 'Silver', value: 'Silver'},
                {name: 'Black', value: 'Black'},
                {name: 'Red', value: 'Red'},
                {name: 'Maroon', value: 'Maroon'},
                {name: 'Brown', value: 'Brown'},
                {name: 'Orange', value: 'Orange'},
                {name: 'Blue', value: 'Blue'}
            ]
		}
	},
	countryService: null,
	carService: null,
	nodeService: null,
	created() {
		this.carService = new CarService();
		this.countryService = new CountryService();
		this.nodeService = new NodeService();
	},
	mounted() {
		this.carService.getCarsLarge().then(data => this.dataViewValue = data);
		this.carService.getCarsSmall().then(data => this.dataTableCars = data);
		this.countryService.getCountries().then(data => this.countries = data);
		this.carService.getCarsSmall().then(data => this.picklistCars = [data,[]]);
		this.carService.getCarsSmall().then(data => this.orderlistCars = data);
		this.nodeService.getTreeNodes().then(data => this.nodes = data);
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
		open() {
			this.display = true;
		},
		onSortChange(event){
			const value = event.value.value;
			const sortValue = event.value;

			if (value.indexOf('!') === 0) {
				this.sortOrder = -1;
				this.sortField = value.substring(1, value.length);
				this.sortKey = sortValue;
			}
			else {
				this.sortOrder = 1;
				this.sortField = value;
				this.sortKey = sortValue;
			}
		}
	}
}
</script>

<style scoped lang="scss">
.p-column-filter {
    margin-top: .5em;
}

/deep/ .p-dataview {
    .car-details {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2em;

        & > div {
            display: flex;
            align-items: center;

            img {
                margin-right: 14px;
            }
        }
    }

    .car-detail {
        padding: 0 1em 1em 1em;
        margin: 1em;
    }

    .p-dropdown {
        width: 12em;
    }
}
</style>