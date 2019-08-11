<template>
	<div class="p-grid">
		<div class="p-col-12">
			<div class="card card-w-title">
				<h1>DataTable</h1>
				<DataTable :value="dataTableCars" class="p-datatable-responsive" :selection.sync="dataTableSelectedCar" selectionMode="single" dataKey="vin" :paginator="true" paginatorPosition="both" :rows="10">
					<template #header>
						List of Cars
					</template>
					<Column field="vin" header="Vin" :sortable="true"></Column>
					<Column field="year" header="Year" :sortable="true"></Column>
					<Column field="brand" header="Brand" :sortable="true"></Column>
					<Column field="color" header="Color" :sortable="true"></Column>
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
								<Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By" @change="onSortChange($event)"/>
							</div>
							<div class="p-col-6" style="text-align: right">
								<DataViewLayoutOptions v-model="layout" />
							</div>
						</div>
					</template>
					<template #list="slotProps" >
						<div class="p-col-12 car-details" style="padding: 2em; border-bottom: 1px solid #d9d9d9">
							<div class="p-grid">
								<div class="p-col-12 p-md-3">
									<img :src="'assets/layout/images/car/' + slotProps.data.brand + '.png'" :alt="slotProps.data.brand"/>
								</div>
								<div class="p-col-12 p-md-8 car-details">
									<div class="p-grid">
										<div class="p-col-12">Vin: <b>{{slotProps.data.vin}}</b></div>

										<div class="p-col-12">Year: <b>{{slotProps.data.year}}</b></div>

										<div class="p-col-12">Brand: <b>{{slotProps.data.brand}}</b></div>

										<div class="p-col-12">Color: <b>{{slotProps.data.color}}</b></div>
									</div>
								</div>
								<div class="p-col-12 p-md-1 search-icon" style="margin-top: 40px">
									<Button icon="pi pi-search"></Button>
								</div>
							</div>
						</div>
					</template>
					<template #grid="slotProps">
						<div style="padding: .5em" class="p-col-12 p-md-3">
							<Panel :header="slotProps.data.vin" style="text-align: center">
								<img :src="'assets/layout/images/car/' + slotProps.data.brand + '.png'" :alt="slotProps.data.brand"/>
								<div class="car-detail">{{slotProps.data.year}} - {{slotProps.data.color}}</div>
								<hr class="ui-widget-content" style="border-top: 0" />
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
							<div style="font-size:14px; float:right; margin:15px 5px 0 0}}">{{slotProps.item.brand}}</div>
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
							<div style="font-size:14px; float:right; margin:15px 5px 0 0}}">{{slotProps.item.year}} - {{slotProps.item.color}}</div>
						</div>
					</template>
				</OrderList>
			</div>
		</div>

		<div class="p-col-12">
			<div class="card card-w-title">
				<div class="p-grid">
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
				<h1>Organization Chart</h1>
				<OrganizationChart :value="organizationChartValue" :collapsible="true">
					<template #default="slotProps">
						<span>{{slotProps.node.data.label}}</span>
					</template>
				</OrganizationChart>
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
			dataTableCars: null,
			dataTableSelectedCar: null,
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
				plugins:[dayGridPlugin, timeGridPlugin, interactionPlugin],
				defaultDate: '2019-01-01',
				header: {
					left: 'prev,next',
					center: 'title',
					right: 'dayGridMonth,timeGridWeek,timeGridDay'
				},
				editable: true
			},
			events: null
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
		this.carService.getCarsMedium().then(data => this.picklistCars = [data,[]]);
		this.carService.getCarsSmall().then(data => this.orderlistCars = data);
		this.eventService.getEvents().then(data => this.events = data);
		this.nodeService.getTreeNodes().then(data => this.treeValue1 = data);
		this.nodeService.getTreeNodes().then(data => this.treeValue2 = data);
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

<style>
@media (max-width: 1024px) {
	.p-dataview-list .p-dataview-content {
		text-align: center
	}
}
</style>