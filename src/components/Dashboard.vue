 <template>
<div class="grid p-fluid dashboard">
	<div class="col-12 lg:col-4">
		<div class="card flex justify-content-between align-items-start mb-0">
			<div>
				<span class="text-2xl">Users</span>
				<span class="p-text-secondary block mt-2">Number of visitors</span>
			</div>
			<span class="bg-green-500 text-white py-2 px-3 text-2xl border-round">12</span>
		</div>
	</div>
	<div class="col-12 lg:col-4">
		<div class="card flex justify-content-between align-items-start mb-0">
			<div>
				<span class="text-2xl">Sales</span>
				<span class="p-text-secondary block mt-2">Number of purchases</span>
			</div>
			<span class="bg-purple-500 text-white py-2 px-3 text-2xl border-round">534</span>
		</div>
	</div>
	<div class="col-12 lg:col-4">
		<div class="card flex justify-content-between align-items-start mb-0">
			<div>
				<span class="text-2xl">Revenue</span>
				<span class="p-text-secondary block mt-2">Income for today</span>
			</div>
			<span class="bg-blue-500 text-white py-2 px-3 text-2xl border-round">$320</span>
		</div>
	</div>

	<div class="col-12 md:col-6 xl:col-3">
		<div class="flex">
			<div class="flex-1 bg-indigo-500 text-white p-3 text-7xl flex align-items-center justify-content-center"><span>TQ</span></div>
			<div class="flex-1 bg-white p-3">
				<div class="flex flex align-items-center">
					<i class="pi pi-search text-lg mr-2"></i>
					<span>Total Queries</span>
				</div>
				<span class="block mt-2 p-text-secondary text-5xl">523</span>
			</div>
		</div>
	</div>
	<div class="col-12 md:col-6 xl:col-3">
		<div class="flex">
			<div class="flex-1 bg-purple-500 text-white p-3 text-7xl flex align-items-center justify-content-center"><span>TI</span></div>
			<div class="flex-1 bg-white p-3">
				<div class="flex flex align-items-center">
					<i class="pi pi-search text-lg mr-2"></i>
					<span>Total Issues</span>
				</div>
				<span class="block mt-2 p-text-secondary text-5xl">81</span>
			</div>
		</div>
	</div>
	<div class="col-12 md:col-6 xl:col-3">
		<div class="flex">
			<div class="flex-1 bg-orange-500 text-white p-3 text-7xl flex align-items-center justify-content-center"><span>OI</span></div>
			<div class="flex-1 bg-white p-3">
				<div class="flex flex align-items-center">
					<i class="pi pi-search text-lg mr-2"></i>
					<span>Open Issues</span>
				</div>
				<span class="block mt-2 p-text-secondary text-5xl">21</span>
			</div>
		</div>
	</div>
	<div class="col-12 md:col-6 xl:col-3">
		<div class="flex">
			<div class="flex-1 bg-bluegray-500 text-white p-3 text-7xl flex align-items-center justify-content-center"><span>CI</span></div>
			<div class="flex-1 bg-white p-3">
				<div class="flex flex align-items-center">
					<i class="pi pi-search text-lg mr-2"></i>
					<span>Closed Issues</span>
				</div>
				<span class="block mt-2 p-text-secondary text-5xl">60</span>
			</div>
		</div>
	</div>

	<div class="col-12 md:col-6 lg:col-4">
		<Panel header="Tasks">
			<ul class="list-none m-0 p-0">
				<li class="py-2 px-1 border-bottom-1 surface-border flex align-items-center">
					<Checkbox name="task" value="reports" v-model="tasksCheckbox" />
					<span class="ml-2">Sales Reports</span>
					<i class="pi pi-chart-bar ml-auto" />
				</li>
				<li class="py-2 px-1 border-bottom-1 surface-border flex align-items-center">
					<Checkbox name="task" value="invoices" v-model="tasksCheckbox" />
					<span class="ml-2">Pay Invoices</span>
					<i class="pi pi-dollar ml-auto" />
				</li>
				<li class="py-2 px-1 border-bottom-1 surface-border flex align-items-center">
					<Checkbox name="task" value="dinner" v-model="tasksCheckbox" />
					<span class="ml-2">Dinner with Tony</span>
					<i class="pi pi-user ml-auto" />
				</li>
				<li class="py-2 px-1 border-bottom-1 surface-border flex align-items-center">
					<Checkbox name="task" value="meeting" v-model="tasksCheckbox" />
					<span class="ml-2">Client Meeting</span>
					<i class="pi pi-users ml-auto" />
				</li>
				<li class="py-2 px-1 border-bottom-1 surface-border flex align-items-center">
					<Checkbox name="task" value="theme" v-model="tasksCheckbox" />
					<span class="ml-2">New Theme</span>
					<i class="pi pi-globe ml-auto" />
				</li>
				<li class="py-2 px-1 flex align-items-center">
					<Checkbox name="task" value="flight" v-model="tasksCheckbox" />
					<span class="ml-2">Flight Ticket</span>
					<i class="pi pi-briefcase ml-auto" />
				</li>
			</ul>
		</Panel>
	</div>

	<div class="col-12 md:col-6 lg:col-4 p-fluid contact-form">
		<Panel header="Contact Us">
			<div class="grid">
				<div class="col-12">
					<Dropdown v-model="dropdownCity" :options="dropdownCities" optionLabel="name" placeholder="Select a City" />
				</div>
				<div class="col-12">
					<InputText type="text" placeholder="Name" />
				</div>
				<div class="col-12">
					<InputText type="text" placeholder="Age" />
				</div>
				<div class="col-12">
					<InputText type="text" placeholder="Message" />
				</div>
				<div class="col-12">
					<Button type="button" label="Send" icon="pi pi-envelope"/>
				</div>
			</div>
		</Panel>
	</div>

	<div class="col-12 lg:col-4 contacts">
		<Panel header="Contacts">
			<ul class="list-none p-0 m-0">
				<li class="py-2 border-bottom-1 surface-border flex align-items-center">
					<img src="assets/layout/images/avatar_1.png" width="35" alt="avatar1"/>
					<div class="ml-auto text-righ">
						<span class="text-xl">Claire Williams</span>
						<span class="p-text-secondary block">clare@primevue.com</span>
					</div>
				</li>
				<li class="py-2 border-bottom-1 surface-border flex align-items-center">
					<img src="assets/layout/images/avatar_2.png" width="35" alt="avatar2"/>
					<div class="ml-auto text-righ">
						<span class="text-xl">Jason Dourne</span>
						<span class="p-text-secondary block">jason@primevue.com</span>
					</div>
				</li>
				<li class="py-2 border-bottom-1 surface-border flex align-items-center">
					<img src="assets/layout/images/avatar_3.png" width="35" alt="avatar3"/>
					<div class="ml-auto text-righ">
						<span class="text-xl">Jane Davidson</span>
						<span class="ep-text-secondary block">jane@primevue.com</span>
					</div>
				</li>
				<li class="py-2 border-bottom-1 surface-border flex align-items-center">
					<img src="assets/layout/images/avatar_4.png" width="35" alt="avatar4"/>
					<div class="ml-auto text-right">
						<span class="text-xl">Tony Corleone</span>
						<span class="p-text-secondary block">tony@primevue.com</span>
					</div>
				</li>
			</ul>
		</Panel>
	</div>

	<div class="col-12 lg:col-6">
		<div class="card">
			<h1 style="font-size:16px">Recent Sales</h1>
			<DataTable :value="products" class="p-datatable-customers" :rows="5" style="margin-bottom: 20px" :paginator="true">
				<Column>
					<template #header>
						Logo
					</template>
					<template #body="slotProps">
						<img :src="'assets/layout/images/product/' + slotProps.data.image" :alt="slotProps.data.image" width="50" />
					</template>
				</Column>
				<Column field="name" header="Name" :sortable="true"></Column>
				<Column field="category" header="Category" :sortable="true"></Column>
				<Column field="price" header="Price" :sortable="true">
					<template #body="slotProps">
						{{formatCurrency(slotProps.data.price)}}
					</template>
				</Column>
				<Column>
					<template #header>
						View
					</template>
					<template #body>
                        <Button icon="pi pi-search" type="button" class="p-button-success mr-2 mb-1"></Button>
                        <Button icon="pi pi-times" type="button" class="p-button-danger mb-1"></Button>
					</template>
				</Column>
			</DataTable>
		</div>
	</div>
	<div class="col-12 lg:col-6">
		<div class="card">
			<Chart type="line" :data="lineData" />
		</div>
	</div>

	<div class="col-12 lg:col-8">
		<Panel header="Calendar" style="height: 100%">
			<FullCalendar :events="events" :options="options" />
		</Panel>
	</div>

	<div class="col-12 lg:col-4">
		<Panel header="Activity" style="height: 100%">
			<div class="flex align-items-start mb-3 pb-2 border-bottom-1 surface-border">
				<div>
					<span style="font-weight:bold">Last Activity</span>
					<p>Updated 1 minute ago</p>
				</div>
				<Button label="Refresh" icon="pi pi-refresh" class="ml-auto w-auto" />
			</div>

			<ul class="list-none p-0 m-0">
				<li class="py-3 px-2 border-bottom-1 surface-border">
                    <div class="flex justify-content-between align-items-center mb-3">
                        <span class="text-2xl">Income</span>
                        <div class="font-bold bg-cyan-500 text-white p-2 border-round text-2xl">$900</div>
                    </div>
                    <ProgressBar :value="95" :showValue="false" />
				</li>
				<li class="py-3 px-2 border-bottom-1 surface-border">
					<div class="flex justify-content-between align-items-center mb-3">
						<h5 class="text-2xl">Tax</h5>
						<div class="font-bold bg-purple-500 text-white p-2 border-round text-2xl" style="background-color:#f9c851">$250</div>
					</div>
					<ProgressBar :value="24" :showValue="false" />
				</li>
				<li class="py-3 px-2 border-bottom-1 surface-border">
					<div class="flex justify-content-between align-items-center mb-3">
						<h5 class="text-2xl">Invoices</h5>
						<div class="font-bold bg-indigo-500 text-white p-2 border-round text-2xl" style="background-color:#20d077">$125</div>
					</div>
					<ProgressBar :value="55" :showValue="false" />
				</li>
				<li class="py-3 px-2 border-bottom-1 surface-border">
					<div class="flex justify-content-between align-items-center mb-3">
						<h5 class="text-2xl">Expenses</h5>
						<div class="font-bold bg-orange-500 text-white p-2 border-round text-2xl" style="background-color:#f9c851">$250</div>
					</div>
					<ProgressBar :value="15" :showValue="false" />
				</li>
				<li class="py-3 px-2 border-bottom-1 surface-border">
					<div class="flex justify-content-between align-items-center mb-3">
						<h5 class="text-2xl">Bonus</h5>
						<div class="font-bold bg-red-500 text-white p-2 border-round text-2xl" style="background-color:#007be5">$350</div>
					</div>
					<ProgressBar :value="5" :showValue="false" />
				</li>
				<li class="py-3 px-2">
					<div class="flex justify-content-between align-items-center mb-3">
						<h5 class="text-2xl">Revenue</h5>
						<div class="font-bold bg-green-500 text-white p-2 border-round text-2xl" style="background-color:#ef6262">$500</div>
					</div>
					<ProgressBar :value="25" :showValue="false" />
				</li>
			</ul>
		</Panel>
	</div>
</div>
</template>

<script>
import ProductService from '../service/ProductService';
import EventService from '../service/EventService';
import '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

export default {
	data() {
		return {
			tasksCheckbox: [],
			dropdownCities: [
				{name: 'New York', code: 'NY'},
				{name: 'Rome', code: 'RM'},
				{name: 'London', code: 'LDN'},
				{name: 'Istanbul', code: 'IST'},
				{name: 'Paris', code: 'PRS'}
			],
			dropdownCity: null,
			options: {
				plugins:[dayGridPlugin, timeGridPlugin, interactionPlugin],
				initialDate: '2023-01-01',
				headerToolbar: {
					left: 'prev,next',
					center: 'title',
					right: 'dayGridMonth,timeGridWeek,timeGridDay'
				},
				editable: true,
                selectable:true, 
                selectMirror: true, 
                dayMaxEvents: true,
			},
			events: null,
			products: null,
			selectedProducts: null,
			lineData: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [
					{
						label: 'First Dataset',
						data: [65, 59, 80, 81, 56, 55, 40],
						fill: false,
						backgroundColor: '#2f4860',
						borderColor: '#2f4860',
						tension: 0.4
					},
					{
						label: 'Second Dataset',
						data: [28, 48, 40, 19, 86, 27, 90],
						fill: false,
						backgroundColor: '#00bb7e',
						borderColor: '#00bb7e',
						tension: 0.4
					}
				]
			},
		}
	},
	productService: null,
	eventService: null,
	created() {
		this.productService = new ProductService();
		this.eventService = new EventService();
	},
	mounted() {
		this.productService.getProductsSmall().then(data => this.products = data);
		this.eventService.getEvents().then(data => this.events = data);

		let afId = this.$route.query['af_id'];
        if (afId) {
            let today = new Date();
            let expire = new Date();
            expire.setTime(today.getTime() + 3600000*24*7);
            document.cookie = 'primeaffiliateid=' + afId + ';expires=' + expire.toUTCString() + ';path=/; domain:primefaces.org';
        }
	},
	methods: {
		formatCurrency(value) {
			return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
		}
	}
}
</script>