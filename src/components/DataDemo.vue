<template>
	<div class="p-grid">
		<div class="p-col-12">
			<div class="card card-w-title">
				<DataView :value="cars" :layout="layout" paginatorPosition="both" :paginator="true" :rows="10" :sortOrder="sortOrder" :sortField="sortField">
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

export default {
	data() {
		return {
			cars: null,
			layout: 'list',
			sortKey: null,
			sortOrder: null,
			sortField: null,
			sortOptions: [
				{label: 'Newest First', value: '!year'},
				{label: 'Oldest First', value: 'year'},
				{label: 'Brand', value: 'brand'}
			],
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
	created() {
		this.carService = new CarService();
		this.eventService = new EventService();
	},
	mounted() {
		this.carService.getCarsLarge().then(data => this.cars = data);
		this.eventService.getEvents().then(data => this.events = data);
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