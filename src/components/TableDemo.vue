<template>
	<div class="p-grid">
		<div class="p-col-12">
			<div class="card">
				<h5>Filter Menu</h5>
				<DataTable :value="customer1" :paginator="true" class="p-datatable-gridlines" :rows="10" dataKey="id" :rowHover="true" 
							v-model:filters="filters1" filterDisplay="menu" :loading="loading1" :filters="filters1" responsiveLayout="scroll"
							:globalFilterFields="['name','country.name','representative.name','balance','status']" >
					
					<template #header>
                        <div class="p-d-flex p-jc-between p-flex-column p-flex-sm-row">
                            <Button type="button" icon="pi pi-filter-slash" label="Clear" class="p-button-outlined p-mb-2" @click="clearFilter1()"/>
                            <span class="p-input-icon-left p-mb-2">
                                <i class="pi pi-search" />
                                <InputText v-model="filters1['global'].value" placeholder="Keyword Search" style="width: 100%"/>
                            </span>
                        </div>
                    </template>
                    <template #empty>
                        No customers found.
                    </template>
                    <template #loading>
                        Loading customers data. Please wait.
                    </template>
                    <Column field="name" header="Name" style="min-width:12rem">
                        <template #body="{data}">
                            <span class="p-column-title">Name</span>
                            {{data.name}}
                        </template>
                        <template #filter="{filterModel}">
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by name"/>
                        </template>
                    </Column>
                    <Column header="Country" filterField="country.name" style="min-width:12rem">
                        <template #body="{data}">
                            <span class="p-column-title">Country</span>
                            <img src="assets/layout/flags/flag_placeholder.png" :alt="data.country.name" :class="'flag flag-' + data.country.code" width="30" />
                            <span style="margin-left: .5em; vertical-align: middle" class="image-text">{{data.country.name}}</span>
                        </template>
                        <template #filter="{filterModel}">
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by country"/>
                        </template>
                        <template #filterclear="{filterCallback}">
                            <Button type="button" icon="pi pi-times" @click="filterCallback()" class="p-button-secondary"></Button>
                        </template>
                        <template #filterapply="{filterCallback}">
                            <Button type="button" icon="pi pi-check" @click="filterCallback()" class="p-button-success"></Button>
                        </template>
                        <template #filterfooter>
                            <div class="p-px-3 p-pt-0 p-pb-3 p-text-center p-text-bold">Customized Buttons</div>
                        </template>
                    </Column>
                    <Column header="Agent" filterField="representative" :showFilterMatchModes="false" :filterMenuStyle="{'width':'14rem'}" style="min-width:14rem">
                        <template #body="{data}">
                            <span class="p-column-title">Agent</span>
                            <img :alt="data.representative.name" :src="'assets/layout/images/avatar/' + data.representative.image" width="32" style="vertical-align: middle" />
                            <span style="margin-left: .5em; vertical-align: middle" class="image-text">{{data.representative.name}}</span>
                        </template>
                        <template #filter="{filterModel}">
                            <div class="p-mb-3 p-text-bold">Agent Picker</div>
                            <MultiSelect v-model="filterModel.value" :options="representatives" optionLabel="name" placeholder="Any" class="p-column-filter">
                                <template #option="slotProps">
                                    <div class="p-multiselect-representative-option">
                                        <img :alt="slotProps.option.name" :src="'assets/layout/images/avatar/' + slotProps.option.image" width="32" style="vertical-align: middle" />
                                        <span style="margin-left: .5em; vertical-align: middle" class="image-text">{{slotProps.option.name}}</span>
                                    </div>
                                </template>
                            </MultiSelect>
                        </template>
                    </Column>
                    <Column header="Date" filterField="date" dataType="date" style="min-width:10rem">
                        <template #body="{data}">
                            <span class="p-column-title">Date</span>
                            {{formatDate(data.date)}}
                        </template>
                        <template #filter="{filterModel}">
                            <Calendar v-model="filterModel.value" dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" />
                        </template>
                    </Column>
                    <Column header="Balance" filterField="balance" dataType="numeric" style="min-width:10rem">
                        <template #body="{data}">
                            <span class="p-column-title">Balance</span>
                            {{formatCurrency(data.balance)}}
                        </template>
                        <template #filter="{filterModel}">
                            <InputNumber v-model="filterModel.value" mode="currency" currency="USD" locale="en-US" />
                        </template>
                    </Column>
                    <Column field="status" header="Status" :filterMenuStyle="{'width':'14rem'}" style="min-width:12rem">
                        <template #body="{data}">
                            <span class="p-column-title">Status</span>
                            <span :class="'customer-badge status-' + data.status">{{data.status}}</span>
                        </template>
                        <template #filter="{filterModel}">
                            <Dropdown v-model="filterModel.value" :options="statuses" placeholder="Any" class="p-column-filter" :showClear="true">
                                <template #value="slotProps">
                                    <span :class="'customer-badge status-' + slotProps.value" v-if="slotProps.value">{{slotProps.value}}</span>
                                    <span v-else>{{slotProps.placeholder}}</span>
                                </template>
                                <template #option="slotProps">
                                    <span :class="'customer-badge status-' + slotProps.option">{{slotProps.option}}</span>
                                </template>
                            </Dropdown>
                        </template>
                    </Column>
                    <Column field="activity" header="Activity" :showFilterMatchModes="false" style="min-width:12rem">
                        <template #body="{data}">
                            <span class="p-column-title">Activity</span>
                            <ProgressBar :value="data.activity" :showValue="false"></ProgressBar>
                        </template>
                        <template #filter={filterModel}>
                            <Slider v-model="filterModel.value" range class="p-m-3"></Slider>
                            <div class="p-d-flex p-ai-center p-jc-between p-px-2">
                                <span>{{filterModel.value ? filterModel.value[0] : 0}}</span>
                                <span>{{filterModel.value ? filterModel.value[1] : 100}}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="verified" header="Verified" dataType="boolean" bodyClass="p-text-center" style="min-width:8rem">
                        <template #body="{data}">
                            <span class="p-column-title">Verified</span>
                            <i class="pi" :class="{'true-icon pi-check-circle': data.verified, 'false-icon pi-times-circle': !data.verified}"></i>
                        </template>
                        <template #filter={filterModel}>
                            <TriStateCheckbox v-model="filterModel.value" />
                        </template>
                    </Column>
				</DataTable>
			</div>
		</div>

		<div class="p-col-12">
			<div class="card">
				<h5>Frozen Columns</h5>
                <ToggleButton v-model="idFrozen" onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Unfreeze Id" offLabel="Freeze Id" style="width: 10rem" />

                <DataTable :value="customer2" :scrollable="true" scrollHeight="400px" :loading="loading2" scrollDirection="both" class="p-mt-3">
                    <Column field="name" header="Name" :style="{width:'150px'}" frozen></Column>
                    <Column field="id" header="Id" :style="{width:'100px'}" :frozen="idFrozen"></Column>
                    <Column field="name" header="Name" :style="{width:'200px'}"></Column>
                    <Column field="country.name" header="Country" :style="{width:'200px'}">
						<template #body="{data}">
							<img src="assets/layout/flags/flag_placeholder.png" :class="'flag flag-' + data.country.code" width="30" />
							<span style="margin-left: .5em; vertical-align: middle" class="image-text">{{data.country.name}}</span>
						</template>
					</Column>
                    <Column field="date" header="Date" :style="{width:'200px'}"></Column>
                    <Column field="company" header="Company" :style="{width:'200px'}"></Column>
                    <Column field="status" header="Status" :style="{width:'200px'}">
						<template #body="{data}">
                            <span :class="'customer-badge status-' + data.status">{{data.status}}</span>
                        </template>
					</Column>
                    <Column field="activity" header="Activity" :style="{width:'200px'}"></Column>
                    <Column field="representative.name" header="Representative" :style="{width:'200px'}">
						<template #body="{data}">
                            <img :alt="data.representative.name" :src="'assets/layout/images/avatar/' + data.representative.image" width="32" style="vertical-align: middle" />
                            <span style="margin-left: .5em; vertical-align: middle" class="image-text">{{data.representative.name}}</span>
                        </template>
					</Column>
                    <Column field="balance" header="Balance" :style="{width:'150px'}" frozen alignFrozen="right">
                        <template #body="{data}">
                             <span class="p-text-bold">{{formatCurrency(data.balance)}}</span>
                        </template>
                    </Column>
                </DataTable>
			</div>
		</div>

		<div class="p-col-12">
			<div class="card">
				<h5>Row Expand</h5>

				<Toast />
				<DataTable :value="products" v-model:expandedRows="expandedRows" dataKey="id" responsiveLayout="scroll"
					@row-expand="onRowExpand" @row-collapse="onRowCollapse">
					<template #header>
						<div class="table-header-container">
							<Button icon="pi pi-plus" label="Expand All" @click="expandAll" class="p-mr-2 p-mb-2" />
							<Button icon="pi pi-minus" label="Collapse All" @click="collapseAll" class="p-mb-2" />
						</div>
					</template>
					<Column :expander="true" headerStyle="width: 3rem" />
					<Column field="name" header="Name" :sortable="true">
						<template #body="slotProps">
							<span class="p-column-title">Name</span>
							{{slotProps.data.name}}
						</template>
					</Column>
					<Column header="Image">
						<template #body="slotProps">
							<span class="p-column-title">Image</span>
							<img :src="'assets/layout/images/product/' + slotProps.data.image" :alt="slotProps.data.image" class="product-image" />
						</template>
					</Column>
					<Column field="price" header="Price" :sortable="true">
						<template #body="slotProps">
							<span class="p-column-title">Price</span>
							{{formatCurrency(slotProps.data.price)}}
						</template>
					</Column>
					<Column field="category" header="Category" :sortable="true">
					<template #body="slotProps">
							<span class="p-column-title">Category</span>
							{{formatCurrency(slotProps.data.category)}}
						</template></Column>
					<Column field="rating" header="Reviews" :sortable="true">
						<template #body="slotProps">
							<span class="p-column-title">Reviews</span>
							<Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false" />
						</template>
					</Column>
					<Column field="inventoryStatus" header="Status" :sortable="true">
						<template #body="slotProps">
							<span class="p-column-title">Status</span>
							<span :class="'product-badge status-' + (slotProps.data.inventoryStatus ? slotProps.data.inventoryStatus.toLowerCase() : '')">{{slotProps.data.inventoryStatus}}</span>
						</template>
					</Column>
					<template #expansion="slotProps">
						<div class="orders-subtable">
							<h5>Orders for {{slotProps.data.name}}</h5>
							<DataTable :value="slotProps.data.orders" responsiveLayout="scroll">
								<Column field="id" header="Id" :sortable="true">
									<template #body="slotProps">
										<span class="p-column-title">Id</span>
										{{slotProps.data.id}}
									</template>
								</Column>
								<Column field="customer" header="Customer" :sortable="true">
									<template #body="slotProps">
										<span class="p-column-title">Customer</span>
										{{slotProps.data.customer}}
									</template>
								</Column>
								<Column field="date" header="Date" :sortable="true">
									<template #body="slotProps">
										<span class="p-column-title">Date</span>
										{{slotProps.data.date}}
									</template>
								</Column>
								<Column field="amount" header="Amount" :sortable="true">
									<template #body="slotProps" :sortable="true">
										<span class="p-column-title">Amount</span>
										{{formatCurrency(slotProps.data.amount)}}
									</template>
								</Column>
								<Column field="status" header="Status" :sortable="true">
									<template #body="slotProps">
										<span class="p-column-title">Status</span>
										<span :class="'order-badge order-' + (slotProps.data.status ? slotProps.data.status.toLowerCase() : '')">{{slotProps.data.status}}</span>
									</template>
								</Column>
								<Column headerStyle="width:4rem">
									<template #body>
										<Button icon="pi pi-search" />
									</template>
								</Column>
							</DataTable>
						</div>
					</template>
				</DataTable>
			</div>
		</div>

		<div class="p-col-12">
			<div class="card">
				<h5>Subheader Grouping</h5>
				<DataTable :value="customer3" rowGroupMode="subheader" groupRowsBy="representative.name"
                    sortMode="single" sortField="representative.name" :sortOrder="1" scrollable scrollHeight="400px">
                    <Column field="representative.name" header="Representative"></Column>
                    <Column field="name" header="Name" style="min-width:200px"></Column>
                    <Column field="country" header="Country" style="min-width:200px">
                        <template #body="slotProps">
                            <img src="assets/layout/flags/flag_placeholder.png" :class="'flag flag-' + slotProps.data.country.code" width="30" />
                            <span class="image-text p-ml-2">{{slotProps.data.country.name}}</span>
                        </template>
                    </Column>
                    <Column field="company" header="Company" style="min-width:200px"></Column>
                    <Column field="status" header="Status" style="min-width:200px">
                        <template #body="slotProps">
                            <span :class="'customer-badge status-' + slotProps.data.status">{{slotProps.data.status}}</span>
                        </template>
                    </Column>
                    <Column field="date" header="Date" style="min-width:200px"></Column>
                    <template #groupheader="slotProps">
						<img :alt="slotProps.data.representative.name" :src="'assets/layout/images/avatar/' + slotProps.data.representative.image" width="32" style="vertical-align: middle" />
                        <span class="image-text">{{slotProps.data.representative.name}}</span>
                    </template>
                    <template #groupfooter="slotProps">
                        <td style="text-align: right" class="p-text-bold p-pr-6">Total Customers: {{calculateCustomerTotal(slotProps.data.representative.name)}}</td>
                    </template>
                </DataTable>
			</div>
		</div>
	</div>
</template>

<script>
	import {FilterMatchMode,FilterOperator} from 'primevue/api';
	import CustomerService from "../service/CustomerService";
	import ProductService from '../service/ProductService';
	export default {
		data() {
			return {
				customer1: null,
				customer2: null,
				customer3: null,
				filters1: null,
				filters2: {},
				loading1: true,
				loading2: true,
				idFrozen: false,
				products: null,
				expandedRows: [],
				statuses: [
					'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
				],
				representatives: [
					{name: "Amy Elsner", image: 'amyelsner.png'},
					{name: "Anna Fali", image: 'annafali.png'},
					{name: "Asiya Javayant", image: 'asiyajavayant.png'},
					{name: "Bernardo Dominic", image: 'bernardodominic.png'},
					{name: "Elwin Sharvill", image: 'elwinsharvill.png'},
					{name: "Ioni Bowcher", image: 'ionibowcher.png'},
					{name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
					{name: "Onyama Limba", image: 'onyamalimba.png'},
					{name: "Stephen Shaw", image: 'stephenshaw.png'},
					{name: "XuXue Feng", image: 'xuxuefeng.png'}
				],
			}
		},
		customerService: null,
		productService: null,
		created() {
			this.customerService = new CustomerService();
			this.productService = new ProductService();
			this.initFilters1();
		},
		mounted() {
			this.productService.getProductsWithOrdersSmall().then(data => this.products = data);
			this.customerService.getCustomersLarge().then(data => {
				this.customer1 = data; 
				this.loading1 = false;
				this.customer1.forEach(customer => customer.date = new Date(customer.date));
			});
			this.customerService.getCustomersLarge().then(data => this.customer2 = data);
			this.customerService.getCustomersMedium().then(data => this.customer3 = data);
			this.loading2 = false;
		},
		methods: {
			initFilters1() {
				this.filters1 = {
					'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
					'name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
					'country.name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
					'representative': {value: null, matchMode: FilterMatchMode.IN},
					'date': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.DATE_IS}]},
					'balance': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
					'status': {operator: FilterOperator.OR, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
					'activity': {value: null, matchMode: FilterMatchMode.BETWEEN},
					'verified': {value: null, matchMode: FilterMatchMode.EQUALS}
				}
			},
			clearFilter1() {
				this.initFilters1();
			},
			onRowExpand(event) {
				this.$toast.add({severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000});
			},
			onRowCollapse(event) {
				this.$toast.add({severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000});
			},
			expandAll() {
				this.expandedRows = this.products.filter(p => p.id);
				this.$toast.add({severity: 'success', summary: 'All Rows Expanded', life: 3000});
			},
			collapseAll() {
				this.expandedRows = null;
				this.$toast.add({severity: 'success', summary: 'All Rows Collapsed', life: 3000});
			},
			formatCurrency(value) {
				return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
			},
			formatDate(value) {
				return value.toLocaleDateString('en-US', {
					day: '2-digit',
					month: '2-digit',
					year: 'numeric',
				});
			},
			calculateCustomerTotal(name) {
				let total = 0;
				if (this.customer3) {
					for (let customer of this.customer3) {
						if (customer.representative.name === name) {
							total++;
						}
					}
				}

				return total;
			}
		}
	}
</script>

<style scoped lang="scss">
	::v-deep(.p-datatable-frozen-tbody) {
		font-weight: bold;
	}

	::v-deep(.p-datatable-scrollable .p-frozen-column) {
		font-weight: bold;
	}

	::v-deep(.p-progressbar) {
		height: .5rem;
		background-color: #D8DADC;

		.p-progressbar-value {
			background-color: #607D8B;
		}
	}

	.p-datatable .p-column-filter {
		display: none;
	}

	.table-header {
		display: flex;
		justify-content: space-between;
	}

	::v-deep(.p-datatable.p-datatable-customers) {
		.p-datatable-header {
			padding: 1rem;
			text-align: left;
			font-size: 1.5rem;
		}

		.p-paginator {
			padding: 1rem;
		}

		.p-datatable-thead > tr > th {
			text-align: left;
		}

		.p-datatable-tbody > tr > td {
			cursor: auto;
		}

		.p-dropdown-label:not(.p-placeholder) {
			text-transform: uppercase;
		}
	}

	/* Responsive */
	.p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {
		display: none;
	}

	.customer-badge {
		border-radius: 2px;
		padding: .25em .5rem;
		text-transform: uppercase;
		font-weight: 700;
		font-size: 12px;
		letter-spacing: .3px;

		&.status-qualified {
			background: #C8E6C9;
			color: #256029;
		}

		&.status-unqualified {
			background: #FFCDD2;
			color: #C63737;
		}

		&.status-negotiation {
			background: #FEEDAF;
			color: #8A5340;
		}

		&.status-new {
			background: #B3E5FC;
			color: #23547B;
		}

		&.status-renewal {
			background: #ECCFFF;
			color: #694382;
		}

		&.status-proposal {
			background: #FFD8B2;
			color: #805B36;
		}
	}

	.p-progressbar-value.ui-widget-header {
		background: #607d8b;
	}

	@media (max-width: 640px) {
		.p-progressbar {
			margin-top: .5rem;
		}
	}

	.product-image {
		width: 100px;
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
	}

	.orders-subtable {
		padding: 1rem;
	}

	.product-badge {
		border-radius: 2px;
		padding: .25em .5rem;
		text-transform: uppercase;
		font-weight: 700;
		font-size: 12px;
		letter-spacing: .3px;

		&.status-instock {
			background: #C8E6C9;
			color: #256029;
		}

		&.status-outofstock {
			background: #FFCDD2;
			color: #C63737;
		}

		&.status-lowstock {
			background: #FEEDAF;
			color: #8A5340;
		}
	}

	.order-badge {
		border-radius: 2px;
		padding: .25em .5rem;
		text-transform: uppercase;
		font-weight: 700;
		font-size: 12px;
		letter-spacing: .3px;

		&.order-delivered {
			background: #C8E6C9;
			color: #256029;
		}

		&.order-cancelled {
			background: #FFCDD2;
			color: #C63737;
		}

		&.order-pending {
			background: #FEEDAF;
			color: #8A5340;
		}

		&.order-returned {
			background: #ECCFFF;
			color: #694382;
		}
	}

	@media screen and (max-width: 960px) {
		::v-deep(.p-datatable) {
			&.p-datatable-customers {
				.p-datatable-thead > tr > th,
				.p-datatable-tfoot > tr > td {
					display: none !important;
				}

				.p-datatable-tbody > tr {
					border-bottom: 1px solid var(--surface-d);

					> td {
						text-align: left !important;
						display: block;
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
							display: inline-block;
							width: 60%;
						}

						.p-rating {
							display: inline-block;
						}
					}
				}

				.p-datatable-tbody > tr.p-rowgroup-footer{
					display: flex;
				}
			}
		}
	}

	.true-icon {
		color: #256029;
	}

	.false-icon {
		color: #C63737;
	}
</style>
