 <template>
<div class="p-grid p-fluid dashboard">
	<div class="p-col-12 p-lg-4">
		<div class="card summary">
			<span class="title">Users</span>
			<span class="detail">Number of visitors</span>
			<span class="count visitors">12</span>
		</div>
	</div>
	<div class="p-col-12 p-lg-4">
		<div class="card summary">
			<span class="title">Sales</span>
			<span class="detail">Number of purchases</span>
			<span class="count purchases">534</span>
		</div>
	</div>
	<div class="p-col-12 p-lg-4">
		<div class="card summary">
			<span class="title">Revenue</span>
			<span class="detail">Income for today</span>
			<span class="count revenue">$3,200</span>
		</div>
	</div>

	<div class="p-col-12 p-md-6 p-xl-3">
		<div class="highlight-box">
			<div class="initials" style="background-color: #007be5; color: #00448f"><span>TV</span></div>
			<div class="highlight-details ">
				<i class="pi pi-search"></i>
				<span>Total Queries</span>
				<span class="count">523</span>
			</div>
		</div>
	</div>
	<div class="p-col-12 p-md-6 p-xl-3">
		<div class="highlight-box">
			<div class="initials" style="background-color: #ef6262; color: #a83d3b"><span>TI</span></div>
			<div class="highlight-details ">
				<i class="pi pi-question-circle"></i>
				<span>Total Issues</span>
				<span class="count">81</span>
			</div>
		</div>
	</div>
	<div class="p-col-12 p-md-6 p-xl-3">
		<div class="highlight-box">
			<div class="initials" style="background-color: #20d077; color: #038d4a"><span>OI</span></div>
			<div class="highlight-details ">
				<i class="pi pi-filter"></i>
				<span>Open Issues</span>
				<span class="count">21</span>
			</div>
		</div>
	</div>
	<div class="p-col-12 p-md-6 p-xl-3">
		<div class="highlight-box">
			<div class="initials" style="background-color: #f9c851; color: #b58c2b"><span>CI</span></div>
			<div class="highlight-details ">
				<i class="pi pi-check"></i>
				<span>Closed Issues</span>
				<span class="count">60</span>
			</div>
		</div>
	</div>

	<div class="p-col-12 p-md-6 p-lg-4">
		<Panel header="Tasks" style="height: 100%">
			<ul class='task-list'>
				<li>
					<Checkbox name="task" value="reports" v-model="tasksCheckbox" />
					<span class="task-name">Sales Reports</span>
					<i class="pi pi-chart-bar" />
				</li>
				<li>
					<Checkbox name="task" value="invoices" v-model="tasksCheckbox" />
					<span class="task-name">Pay Invoices</span>
					<i class="pi pi-dollar" />
				</li>
				<li>
					<Checkbox name="task" value="dinner" v-model="tasksCheckbox" />
					<span class="task-name">Dinner with Tony</span>
					<i class="pi pi-user" />
				</li>
				<li>
					<Checkbox name="task" value="meeting" v-model="tasksCheckbox" />
					<span class="task-name">Client Meeting</span>
					<i class="pi pi-users" />
				</li>
				<li>
					<Checkbox name="task" value="theme" v-model="tasksCheckbox" />
					<span class="task-name">New Theme</span>
					<i class="pi pi-globe" />
				</li>
				<li>
					<Checkbox name="task" value="flight" v-model="tasksCheckbox" />
					<span class="task-name">Flight Ticket</span>
					<i class="pi pi-briefcase" />
				</li>
			</ul>
		</Panel>
	</div>

	<div class="p-col-12 p-md-6 p-lg-4 p-fluid contact-form">
		<Panel header="Contact Us">
			<div class="p-grid">
				<div class="p-col-12">
					<Dropdown v-model="dropdownCity" :options="dropdownCities" optionLabel="name" placeholder="Select a City" />
				</div>
				<div class="p-col-12">
					<InputText type="text" placeholder="Name" />
				</div>
				<div class="p-col-12">
					<InputText type="text" placeholder="Age" />
				</div>
				<div class="p-col-12">
					<InputText type="text" placeholder="Message" />
				</div>
				<div class="p-col-12">
					<Button type="button" label="Send" icon="pi pi-envelope"/>
				</div>
			</div>
		</Panel>
	</div>

	<div class="p-col-12 p-lg-4 contacts">
		<Panel header="Contacts">
			<ul>
				<li>
					<button class="p-link">
						<img src="assets/layout/images/avatar_1.png" width="35" alt="avatar1"/>
						<span class="name">Claire Williams</span>
						<span class="email">clare@primevue.com</span>
					</button>
				</li>
				<li>
					<button class="p-link">
						<img src="assets/layout/images/avatar_2.png" width="35" alt="avatar2"/>
						<span class="name">Jason Dourne</span>
						<span class="email">jason@primevue.com</span>
					</button>
				</li>
				<li>
					<button class="p-link">
						<img src="assets/layout/images/avatar_3.png" width="35" alt="avatar3"/>
						<span class="name">Jane Davidson</span>
						<span class="email">jane@primevue.com</span>
					</button>
				</li>
				<li>
					<button class="p-link">
						<img src="assets/layout/images/avatar_4.png" width="35" alt="avatar4"/>
						<span class="name">Tony Corleone</span>
						<span class="email">tony@primevue.com</span>
					</button>
				</li>
			</ul>
		</Panel>
	</div>

	<div class="p-col-12 p-lg-6">
		<div class="card">
			<h1 style="font-size:16px">Recent Sales</h1>
			<DataTable :value="products" class="p-datatable-customers" :rows="5" style="margin-bottom: 20px" :paginator="true">
				<Column>
					<template #header>
						Logo
					</template>
					<template #body="slotProps">
						<img :src="'assets/layout/images/product/' + slotProps.data.image" :alt="slotProps.data.image" width="50px" />
					</template>
				</Column>
				<Column field="name" header="Name" sortable></Column>
				<Column field="category" header="Category" sortable></Column>
				<Column field="price" header="Price" sortable>
					<template #body="slotProps">
						{{formatCurrency(slotProps.data.price)}}
					</template>
				</Column>
				<Column>
					<template #header>
						View
					</template>
					<template #body>
                        <Button icon="pi pi-search" type="button" class="p-button-success p-mr-2 p-mb-1"></Button>
                        <Button icon="pi pi-times" type="button" class="p-button-danger p-mb-1"></Button>
					</template>
				</Column>
			</DataTable>
		</div>
	</div>
	<div class="p-col-12 p-lg-6">
		<div class="card">
			<Chart type="line" :data="lineData" />
		</div>
	</div>

	<div class="p-col-12 p-lg-8">
		<Panel header="Calendar" style="height: 100%">
			<FullCalendar :events="events" :options="options" />
		</Panel>
	</div>

	<div class="p-col-12 p-lg-4">
		<Panel header="Activity" style="height: 100%">
			<div class="activity-header">
				<div class="p-grid">
					<div class="p-col-6">
						<span style="font-weight:bold">Last Activity</span>
						<p>Updated 1 minute ago</p>
					</div>
					<div class="p-col-6" style="text-align: right">
						<Button label="Refresh" icon="pi pi-refresh" />
					</div>
				</div>
			</div>

			<ul class="activity-list">
				<li>
                    <div class="p-d-flex p-jc-between p-ai-center p-mb-3">
                        <h5 class="activity p-m-0">Income</h5>
                        <div class="count">$900</div>
                    </div>
                    <ProgressBar :value="95" :showValue="false" />
				</li>
				<li>
					<div class="p-d-flex p-jc-between p-ai-center p-mb-3">
						<h5 class="activity p-m-0">Tax</h5>
						<div class="count" style="background-color:#f9c851">$250</div>
					</div>
					<ProgressBar :value="24" :showValue="false" />
				</li>
				<li>
					<div class="p-d-flex p-jc-between p-ai-center p-mb-3">
						<h5 class="activity p-m-0">Invoices</h5>
						<div class="count" style="background-color:#20d077">$125</div>
					</div>
					<ProgressBar :value="55" :showValue="false" />
				</li>
				<li>
					<div class="p-d-flex p-jc-between p-ai-center p-mb-3">
						<h5 class="activity p-m-0">Expenses</h5>
						<div class="count" style="background-color:#f9c851">$250</div>
					</div>
					<ProgressBar :value="15" :showValue="false" />
				</li>
				<li>
					<div class="p-d-flex p-jc-between p-ai-center p-mb-3">
						<h5 class="activity p-m-0">Bonus</h5>
						<div class="count" style="background-color:#007be5">$350</div>
					</div>
					<ProgressBar :value="5" :showValue="false" />
				</li>
				<li>
					<div class="p-d-flex p-jc-between p-ai-center p-mb-3">
						<h5 class="activity p-m-0">Revenue</h5>
						<div class="count" style="background-color:#ef6262">$500</div>
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
				defaultDate: '2019-01-01',
				header: {
					left: 'prev,next',
					center: 'title',
					right: 'dayGridMonth,timeGridWeek,timeGridDay'
				},
				editable: true
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
						borderColor: '#2f4860'
					},
					{
						label: 'Second Dataset',
						data: [28, 48, 40, 19, 86, 27, 90],
						fill: false,
						backgroundColor: '#00bb7e',
						borderColor: '#00bb7e'
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

<style lang="scss" scoped>
	@media screen and (max-width: 960px) {
		/deep/ .p-datatable {
			&.p-datatable-customers {
				.p-datatable-thead > tr > th,
				.p-datatable-tfoot > tr > td {
					display: none !important;
				}

				.p-datatable-tbody > tr {
					border-bottom: 1px solid #dee2e6;
					> td {
						text-align: left;
						display: flex;
						align-items: center;
						justify-content: center;
						border: 0 none !important;
						width: 100% !important;
						float: left;
						clear: left;
						border: 0 none;

						.p-column-title {
							padding: .4rem;
							min-width: 30%;
							display: inline-block;
							margin: -.4rem 1rem -.4rem -.4rem;
							font-weight: bold;
						}

						.p-progressbar {
							margin-top: .5rem;
						}
					}
				}
			}
		}
	}
</style>
