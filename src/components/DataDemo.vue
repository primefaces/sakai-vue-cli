<template>
	<div class="p-grid">
		<div class="p-col-12">
			<div class="card card-w-title">
				<h1>DataTable</h1>
				<DataTable :value="dataTableCars" class="p-datatable-responsive" :selection.sync="dataTableSelectedCar1" selectionMode="single" dataKey="vin" :paginator="true" :rows="10" :filters="filters">
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
				<DataTable :value="dataTableCars" class="p-datatable-responsive p-datatable-borderless" :selection.sync="dataTableSelectedCar2" selectionMode="single" dataKey="vin" :paginator="true" :rows="10">
                    <template #header>Borderless DataTable</template>
					<Column field="vin" header="Vin" :sortable="true">
                        <template #body="slotProps">
                            <span class="p-column-title">Vin</span>
                            {{slotProps.data.vin}}
                        </template>
                    </Column>
					<Column field="year" header="Year" :sortable="true">
                        <template #body="slotProps">
                            <span class="p-column-title">Year</span>
                            {{slotProps.data.year}}
                        </template>
                    </Column>
					<Column field="brand" header="Brand" :sortable="true">
                        <template #body="slotProps">
                            <span class="p-column-title">Brand</span>
                            {{slotProps.data.brand}}
                        </template>
                    </Column>
					<Column field="color" header="Color" :sortable="true">
                        <template #body="slotProps">
                            <span class="p-column-title">Color</span>
                            {{slotProps.data.color}}
                        </template>
                    </Column>
				</DataTable>
			</div>
		</div>

		<div class="p-col-12">
			<div class="card card-w-title">
                <h1>DataView</h1>
				<DataView :value="dataViewCars" :layout="layout" paginatorPosition="both" :paginator="true" :rows="10" :sortOrder="sortOrder" :sortField="sortField">
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

		<div class="p-col-12 p-md-8">
			<div class="card card-w-title">
				<h1>PickList</h1>
				<PickList v-model="picklistCars" listStyle="height:250px" dataKey="vin">
					<template #sourceHeader>
						Available
					</template>
					<template #targetHeader>
						Selected
					</template>
					<template #item="slotProps">
                        <div class="p-clearfix">
							<img :src="'assets/layout/images/car/' + slotProps.item.brand + '.png'" style="display:inline-block; margin:2px 0 2px 2px; width: 50px">
							<div style="font-size:14px; float:right; margin:15px 5px 0 0">{{slotProps.item.brand}}</div>
						</div>
					</template>
				</PickList>
			</div>
		</div>

		<div class="p-col-12 p-md-4">
			<div class="card card-w-title">
				<h1>OrderList</h1>
				<OrderList v-model="orderlistCars" listStyle="height:250px" dataKey="vin" class="p-orderlist-responsive">
					<template #header>
						OrderList
					</template>
					<template #item="slotProps">
						<div class="p-clearfix">
							<img :src="'assets/layout/images/car/' + slotProps.item.brand + '.png'" style="display:inline-block; margin:2px 0 2px 2px; width: 50px">
							<div style="font-size:14px; float:right; margin:15px 5px 0 0">{{slotProps.item.year}} - {{slotProps.item.color}}</div>
						</div>
					</template>
				</OrderList>
			</div>
		</div>

		<div class="p-col-12">
			<div class="card card-w-title">
				<div class="p-grid p-fluid">
					<div class="p-col-12 p-md-6">
						<h1>Tree</h1>
						<Tree :value="treeValue1" selectionMode="single" :selectionKeys.sync="selectedTreeValue1"></Tree>
					</div>
					<div class="p-col-12 p-md-6">
						<h1>Checkbox Tree</h1>
						<Tree :value="treeValue2" selectionMode="checkbox" :selectionKeys.sync="selectedTreeValue2"></Tree>
					</div>
				</div>
			</div>
		</div>

        <div class="p-col-12">
			<div class="card card-w-title">
                <h1>TreeTable</h1>
				<TreeTable :value="ttNodes" selectionMode="checkbox" :selectionKeys.sync="selectedTTNodes">
                    <template #header>
                        FileSystem
                    </template>
                    <Column field="name" header="Name" :expander="true"></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                    <Column headerStyle="width: 8em; text-align: center" bodyStyle="text-align: center">
                        <template #header>
                            <Button type="button" icon="pi pi-cog"></Button>
                        </template>
                        <template #body="slotProps">
                            <Button type="button" icon="pi pi-search" class="p-button-success" style="margin-right: .5em"></Button>
                            <Button type="button" icon="pi pi-pencil" class="p-button-warning"></Button>
                        </template>
                    </Column>
                    <template #footer>
                        <div style="text-align:left">
                            <Button icon="pi pi-refresh" class="p-button-success" />
                        </div>
                    </template>
                </TreeTable>
			</div>
		</div>

		<div class="p-col-12">
			<div class="card card-w-title" style="overflow: auto">
				<h1>Organization Chart</h1>
				<OrganizationChart :value="organizationChartValue">
					<template #default="slotProps">
						<span>{{slotProps.node.data.label}}</span>
					</template>
				</OrganizationChart>
			</div>
		</div>

        <div class="p-col-12">
			<div class="card card-w-title">
                <h1>Carousel</h1>
                <Carousel :value="carouselCars" :numVisible="4" :numScroll="3" :responsiveOptions="carouselResponsiveOptions">
                    <template #item="slotProps">
                        <div class="car-details">
                            <div class="p-grid p-nogutter">
                                <div class="p-col-12">
                                    <img :src="'assets/layout/images/car/' + slotProps.data.brand + '.png'" :alt="slotProps.data.brand" />
                                </div>
                                <div class="p-col-12 car-data">
                                    <div class="car-title">{{slotProps.data.brand}}</div>
                                    <div class="car-subtitle">{{slotProps.data.year}} | {{slotProps.data.color}}</div>

                                    <div class="car-buttons">
                                        <Button icon="pi pi-search" class="p-button-secondary" />
                                        <Button icon="pi pi-star" class="p-button-secondary" />
                                        <Button icon="pi pi-cog" class="p-button-secondary" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </Carousel>
			</div>
		</div>
		
		<div class="p-col-12">
			<div class="card card-w-title">
				<FullCalendar :events="events" :options="options" />
			</div>
		</div>
	</div>

</template>

<script>
import CarService from '../service/CarService';
import EventService from '../service/EventService';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import NodeService from '../service/NodeService'

export default {
	data() {
		return {
            filters: {},
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
            ],
			dataTableCars: null,
			dataTableSelectedCar1: null,
            dataTableSelectedCar2: null,
			dataViewCars: null,
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
			treeValue1: null,
			selectedTreeValue1: null,
			treeValue2: null,
			selectedTreeValue2: null,
			organizationChartValue: {
				key: '0',
				data: {label: 'F.C. Barcelona'},
				children: [
					{
						key: '0_0',
						data: {label: 'F.C. Barcelona'},
						children: [
							{
								key: '0_0_0',
								data: {label: 'Chelsea F.C.'}
							},
							{
								key: '0_0_1',
								data: {label: 'F.C. Barcelona'}
							}
						]
					},
					{
						key: '0_1',
						data: {label: 'Real Madrid'},
						children: [
							{
								key: '0_1_0',
								data: {label: 'Bayern Munich'}
							},
							{
								key: '0_1_1',
								data: {label: 'Real Madrid'}
							}
						]
					}
				]
			},
			options: {
				plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
				defaultView: 'dayGridMonth',
				defaultDate: '2016-01-12',
				header: {
					left: 'prev,next',
					center: 'title',
					right: 'dayGridMonth,timeGridWeek,timeGridDay'
				},
				editable: true
			},
            events: null,
            ttNodes: null,
            selectedTTNodes: null,
            carouselCars: null,
            carouselResponsiveOptions: [
				{
					breakpoint: '1024px',
					numVisible: 3,
					numScroll: 3
				},
				{
					breakpoint: '600px',
					numVisible: 2,
					numScroll: 2
				},
				{
					breakpoint: '480px',
					numVisible: 1,
					numScroll: 1
				}
			]
		}
	},
	carService: null,
	eventService: null,
	nodeService: null,
	created() {
		this.carService = new CarService();
		this.eventService = new EventService();
		this.nodeService = new NodeService();
	},
	mounted() {
		this.carService.getCarsLarge().then(data => this.dataViewCars = data);
		this.carService.getCarsMedium().then(data => this.dataTableCars = data);
		this.carService.getCarsMedium().then(data => this.picklistCars = [data.slice(0,50),[]]);
        this.carService.getCarsSmall().then(data => this.orderlistCars = data);
        this.carService.getCarsSmall().then(data => this.carouselCars = data);
		this.eventService.getEvents().then(data => this.events = data);
		this.nodeService.getTreeNodes().then(data => this.treeValue1 = data);
		this.nodeService.getTreeNodes().then(data => this.treeValue2 = data);
        this.nodeService.getTreeTableNodes().then(data => this.ttNodes = data);
	},
	methods: {
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

<style lang="scss" scoped>
.p-column-filter {
    margin-top: .5em;
}

/deep/ .p-dropdown {
    width: 12em;
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
}

.p-carousel {
	.p-carousel-content {
		.p-carousel-item {
			.car-details {
				> .p-grid {
                    border: 1px solid #b3c2ca;
					border-radius: 3px;
					margin: .3em;
					text-align: center;
					padding: 2em 0 2.25em 0;
				}
			}

			.car-data {
				.car-title {
					font-weight: 700;
					font-size: 20px;
					margin-top: 24px;
				}

				.car-subtitle {
					margin: .25em 0 2em 0;
				}

				button {
					margin-left: .5em;

					&:first-child {
						margin-left: 0;
					}
				}
			}
		}
    }
}

@media (max-width: 1024px) {
	.p-dataview {
        .car-details {
            img {
                width: 75px;
            }
        }
    }
}

.p-dropdown-car-option {
    img {
        vertical-align: middle;
        margin-right: .5em;
        width: 24px;
    }

    span {
        float: right;
        margin-top: .125em;
    }
}
</style>