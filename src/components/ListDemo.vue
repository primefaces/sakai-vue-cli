<template>
	<div class="grid">
		<div class="col-12">
			<div class="card">
				<h5>DataView</h5>
				<DataView :value="dataviewValue" :layout="layout" :paginator="true" :rows="9" :sortOrder="sortOrder" :sortField="sortField">
					<template #header>
						<div class="grid nogutter">
							<div class="col-6 text-left">
								<Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By Price" @change="onSortChange($event)"/>
							</div>
							<div class="col-6 text-right">
								<DataViewLayoutOptions v-model="layout" />
							</div>
						</div>
					</template>

					<template #list="slotProps">
						<div class="col-12">
							<div class="product-list-item">
								<img :src="'images/product/' + slotProps.data.image" :alt="slotProps.data.name"/>
								<div class="product-list-detail">
									<div class="product-name">{{slotProps.data.name}}</div>
									<div class="product-description">{{slotProps.data.description}}</div>
									<Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false"></Rating>
									<i class="pi pi-tag product-category-icon"></i><span class="product-category">{{slotProps.data.category}}</span>
								</div>
								<div class="product-list-action">
									<span class="product-price">${{slotProps.data.price}}</span>
									<Button icon="pi pi-shopping-cart" label="Add to Cart" :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
									<span :class="'product-badge status-'+slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>
								</div>
							</div>
						</div>
					</template>

					<template #grid="slotProps">
						<div class="col-12 md:col-4">
							<div class="card m-3 border-1 surface-border">
								<div class="flex align-items-center justify-content-between">
									<div class="flex align-items-center">
										<i class="pi pi-tag mr-2"></i>
										<span class="font-semibold">{{slotProps.data.category}}</span>
									</div>
									<span :class="'product-badge status-'+slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>
								</div>
								<div class="text-center">
									<img :src="'images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-9 shadow-2 my-3 mx-0"/>
									<div class="text-2xl font-bold">{{slotProps.data.name}}</div>
									<div class="mb-3">{{slotProps.data.description}}</div>
									<Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false"></Rating>
								</div>
								<div class="flex align-items-center justify-content-between">
									<span class="text-2xl font-semibold">${{slotProps.data.price}}</span>
									<Button icon="pi pi-shopping-cart" :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
								</div>
							</div>
						</div>
					</template>
				</DataView>
			</div>
		</div>

		<div class="col-12 lg:col-8">
			<div class="card">
				<h5>PickList</h5>
				<PickList v-model="picklistValue" dataKey="code">
					<template #sourceHeader>
						From
					</template>
					<template #targetHeader>
						To
					</template>
					<template #item="slotProps">
						<div>{{slotProps.item.name}}</div>
					</template>
				</PickList>
			</div>
		</div>

		<div class="col-12 lg:col-4">
			<div class="card">
				<h5>OrderList</h5>
				<OrderList v-model="orderlistValue" listStyle="height:250px" dataKey="code" class="p-orderlist-responsive" :rows="10">
					<template #header>
						Cities
					</template>
					<template #item="slotProps">
						<div>{{slotProps.item.name}}</div>
					</template>
				</OrderList>
			</div>
		</div>
	</div>
</template>

<script>
	import ProductService from "../service/ProductService";

	export default {
		data() {
			return {
				picklistValue: [[
					{name: 'San Francisco', code: 'SF'},
					{name: 'London', code: 'LDN'},
					{name: 'Paris', code: 'PRS'},
					{name: 'Istanbul', code: 'IST'},
					{name: 'Berlin', code: 'BRL'},
					{name: 'Barcelona', code: 'BRC'},
					{name: 'Rome', code: 'RM'},
				],[]],
				orderlistValue: [
					{name: 'San Francisco', code: 'SF'},
					{name: 'London', code: 'LDN'},
					{name: 'Paris', code: 'PRS'},
					{name: 'Istanbul', code: 'IST'},
					{name: 'Berlin', code: 'BRL'},
					{name: 'Barcelona', code: 'BRC'},
					{name: 'Rome', code: 'RM'},
				],
				dataviewValue: null,
				layout: 'grid',
				sortKey: null,
				sortOrder: null,
				sortField: null,
				sortOptions: [
					{label: 'Price High to Low', value: '!price'},
					{label: 'Price Low to High', value: 'price'},
				]
			}
		},
		productService: null,
		created() {
			this.productService = new ProductService();
		},
		mounted() {
			this.productService.getProducts().then(data => this.dataviewValue = data);
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

<style scoped lang="scss">
.product-name {
	font-size: 1.5rem;
	font-weight: 700;
}

.product-description {
	margin: 0 0 1rem 0;
}

.product-category-icon {
	vertical-align: middle;
	margin-right: .5rem;
}

.product-category {
	font-weight: 600;
	vertical-align: middle;
}

::v-deep(.product-list-item) {
	display: flex;
	align-items: center;
	padding: 1rem;
	width: 100%;

	img {
		width: 150px;
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
		margin-right: 2rem;
	}

	.product-list-detail {
		flex: 1 1 0;
	}

	.p-rating {
		margin: 0 0 .5rem 0;
	}

	.product-price {
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: .5rem;
		align-self: flex-end;
	}

	.product-list-action {
		display: flex;
		flex-direction: column;
	}

	.p-button {
		margin-bottom: .5rem;
	}

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

@media screen and (max-width: 576px) {
	.product-list-item {
		flex-direction: column;
		align-items: center;

		img {
			width: 75%;
			margin: 2rem 0;
		}

		.product-list-detail {
			text-align: center;
		}

		.product-price {
			align-self: center;
		}

		.product-list-action {
			display: flex;
			flex-direction: column;
		}

		.product-list-action {
			margin-top: 2rem;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			width: 100%;
		}
	}
}
</style>
