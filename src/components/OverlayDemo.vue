<template>
	<div class="grid">
		<div class="col-12 lg:col-6">
			<div class="card p-fluid">
				<h5>Dialog</h5>
				<Dialog header="Dialog" v-model:visible="display" :breakpoints="{'960px': '75vw'}" :style="{width: '30vw'}" :modal="true">
					<p class="line-height-3 m-0">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
						in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
					<template #footer>
						<Button label="Ok" @click="close" icon="pi pi-check" class="p-button-outlined"/>
					</template>
				</Dialog>
				<Button label="Show" icon="pi pi-external-link" style="width: auto" @click="open"/>
			</div>
			<div class="card p-fluid">
				<h5>Overlay Panel</h5>
				<div class="grid formgrid">
					<div class="col-6">
						<Button type="button" label="Image" @click="toggle" class="p-button-success"/>
						<OverlayPanel ref="op" appendTo="body" :showCloseIcon="true">
							<img src="images/nature/nature9.jpg" alt="Nature 9" />
						</OverlayPanel>
					</div>
					<div class="col-6">
						<Button type="button" label="DataTable" @click="toggleDataTable" class="p-button-success"/>
						<OverlayPanel ref="op2" appendTo="body" :showCloseIcon="true" id="overlay_panel" style="width: 450px">
							<DataTable :value="products" v-model:selection="selectedProduct" selectionMode="single" :paginator="true" :rows="5" @row-select="onProductSelect" responsiveLayout="scroll">
								<Column field="name" header="Name" :sortable="true" headerStyle="min-width:10rem;"></Column>
								<Column header="Image" headerStyle="min-width:10rem;">
									<template #body="slotProps">
										<img :src="'images/product/' + slotProps.data.image" :alt="slotProps.data.image" width="100" class="shadow-2" />
									</template>
								</Column>
								<Column field="price" header="Price" :sortable="true" headerStyle="min-width:8rem;">
									<template #body="slotProps">
										{{formatCurrency(slotProps.data.price)}}
									</template>
								</Column>
							</DataTable>
						</OverlayPanel>

					</div>
				</div>
			</div>
		</div>
		<div class="col-12 lg:col-6">
			<div class="card p-fluid">
				<h5>Confirmation</h5>
				<Button label="Delete" icon="pi pi-trash" class="p-button-danger" style="width: auto" @click="openConfirmation" />
				<Dialog header="Confirmation" v-model:visible="displayConfirmation" :style="{width: '350px'}" :modal="true">
					<div class="flex align-items-center justify-content-center">
						<i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
						<span>Are you sure you want to proceed?</span>
					</div>
					<template #footer>
						<Button label="No" icon="pi pi-times" @click="closeConfirmation" class="p-button-text"/>
						<Button label="Yes" icon="pi pi-check" @click="closeConfirmation" class="p-button-text" autofocus />
					</template>
				</Dialog>
			</div>
			<div class="card">
				<h5>Sidebar</h5>
				<Sidebar v-model:visible="visibleLeft" :baseZIndex="1000">
					<h1 style="font-weight:normal">Left Sidebar</h1>
				</Sidebar>

				<Sidebar v-model:visible="visibleRight" :baseZIndex="1000" position="right">
					<h1 style="font-weight:normal">Right Sidebar</h1>
				</Sidebar>

				<Sidebar v-model:visible="visibleTop" :baseZIndex="1000" position="top">
					<h1 style="font-weight:normal">Top Sidebar</h1>
				</Sidebar>

				<Sidebar v-model:visible="visibleBottom" :baseZIndex="1000" position="bottom">
					<h1 style="font-weight:normal">Bottom Sidebar</h1>
				</Sidebar>

				<Sidebar v-model:visible="visibleFull" :baseZIndex="1000" position="full">
					<h1 style="font-weight:normal">Full Screen</h1>
				</Sidebar>

				<Button icon="pi pi-arrow-right" class="p-button-warning" @click="visibleLeft = true" style="margin-right:.25em" />
				<Button icon="pi pi-arrow-left" class="p-button-warning" @click="visibleRight = true" style="margin-right:.25em" />
				<Button icon="pi pi-arrow-down" class="p-button-warning" @click="visibleTop = true" style="margin-right:.25em" />
				<Button icon="pi pi-arrow-up" class="p-button-warning" @click="visibleBottom = true" style="margin-right:.25em" />
				<Button icon="pi pi-external-link" class="p-button-warning" @click="visibleFull = true"  />
			</div>
		</div>
		<div class="col-12 lg:col-6">
			<div class="card">
				<h5>Tooltip</h5>
				<div class="formgroup-inline">
					<div class="field">
						<InputText type="text" placeholder="Username" v-tooltip="'Your username'" />
					</div>

					<Button type="button" label="Save" icon="pi pi-check" v-tooltip="'Click to proceed'" />
				</div>
			</div>
		</div>
		<div class="col-12 lg:col-6">
			<div class="card">
				<h5>ConfirmPopup</h5>
				<ConfirmPopup></ConfirmPopup>
				<Button ref="popup" @click="confirm($event)" icon="pi pi-check" label="Confirm" class="mr-2"></Button>
			</div>
		</div>
	</div>
</template>

<script>
	import ProductService from '../service/ProductService'

	export default {
		data() {
			return {
				display: false,
				displayConfirmation: false,
				visibleLeft: false,
				visibleRight: false,
				visibleTop: false,
				visibleBottom: false,
				visibleFull: false,
				products: null,
				selectedProduct: null
			}
		},
		productService: null,
		created() {
			this.productService = new ProductService();
		},
		mounted() {
			this.productService.getProductsSmall().then(data => this.products = data);
		},
		methods: {
			open() {
				this.display = true;
			},
			close() {
				this.display = false;
			},
			openConfirmation() {
				this.displayConfirmation = true;
			},
			closeConfirmation() {
				this.displayConfirmation = false;
			},
			toggle(event) {
				this.$refs.op.toggle(event);
			},
			toggleDataTable(event) {
				this.$refs.op2.toggle(event);
			},
			formatCurrency(value) {
				return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
			},
			onProductSelect(event) {
				this.$refs.op.hide();
				this.$toast.add({severity:'info', summary: 'Product Selected', detail: event.data.name, life: 3000});
			},
			confirm(event) {
				this.$confirm.require({
					target: event.currentTarget,
					message: 'Are you sure you want to proceed?',
					icon: 'pi pi-exclamation-triangle',
					accept: () => {
						this.$toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});
					},
					reject: () => {
						this.$toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});
					}
				});
			}
		}
	}
</script>
