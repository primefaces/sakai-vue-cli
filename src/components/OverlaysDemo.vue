<template>
	<div class="p-grid">
		<div class="p-col-6 p-fluid">
            <div class="card">
				<h1>Overlay Panel</h1>
				<div class="p-grid">
					<div class="p-col-6">
						<Button type="button" label="Image" @click="toggle" />
						<OverlayPanel ref="op" appendTo="body" :showCloseIcon="true">
							<img src="assets/layout/images/nature/nature1.jpg" alt="Nature 1" />
						</OverlayPanel>
					</div>
					<div class="p-col-6">
						<Button type="button" label="DataTable" @click="toggleDataTable" />
						<OverlayPanel ref="op2" appendTo="body" :showCloseIcon="true">
							<DataTable :value="dataTableValue" style="width: 500px">
								<Column field="vin" header="Vin" :sortable="true"></Column>
								<Column field="year" header="Year" :sortable="true"></Column>
								<Column field="brand" header="Brand" :sortable="true"></Column>
								<Column field="color" header="Color" :sortable="true"></Column>
							</DataTable>
						</OverlayPanel>
					</div>
				</div>
			</div>
		</div>
        <div class="p-col-6 p-fluid">
			<div class="card">
				<h1>Dialog</h1>
				<Dialog header="Godfather I" :visible.sync="display" :style="{width: '30vw'}" :modal="true">
					<p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
						His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
						Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
						kind and benevolent to those who give respect,
						but given to ruthless violence whenever anything stands against the good of the family.
					</p>
					<template #footer>
						<Button label="Yes" @click="close" icon="pi pi-check"/>
						<Button label="No" @click="close" icon="pi pi-times" class="p-button-secondary"/>
					</template>
				</Dialog>
				<Button label="Show" icon="pi pi-external-link" @click="open"/>
			</div>
		</div>
        <div class="p-col-12">
			<div class="card">
				<h1>Tooltip</h1>
                <div class="p-grid p-fluid">
                    <div class="p-col-12 p-md-3">
                        <InputText type="text" placeholder="Right" v-tooltip.right="'Enter your username'" />
                    </div>
                    <div class="p-col-12 p-md-3">
                        <InputText type="text" placeholder="Top" v-tooltip.top="'Enter your username'" />
                    </div>
                    <div class="p-col-12 p-md-3">
                        <InputText type="text" placeholder="Bottom" v-tooltip.bottom="'Enter your username'" />
                    </div>
                    <div class="p-col-12 p-md-3">
                        <InputText type="text" placeholder="Left" v-tooltip.left="'Enter your username'" />
                    </div>
                </div>

                <h3>Focus and Blur</h3>
                <InputText type="text" placeholder="Focus" v-tooltip.bottom.focus="'Enter your username'" />

                <h3>Button</h3>
                <Button type="button" label="Save" icon="pi pi-check" v-tooltip="'Click to proceed'" />
			</div>
		</div>
	</div>
</template>

<script>
import CarService from '../service/CarService'

export default {
	data() {
		return {
			dataTableValue: [],
			display: false
		}
	},
	carService: null,
	created() {
		this.carService = new CarService();
	},
	mounted() {
		this.carService.getCarsSmall().then(data => this.dataTableValue = data.slice(0,5));
	},
	methods: {
		open() {
			this.display = true;
		},
		close() {
			this.display = false;
		},
		toggle(event) {
			this.$refs.op.toggle(event);
		},
		toggleDataTable(event) {
			this.$refs.op2.toggle(event);
		}
	}
}
</script>

<style scoped>
p {
    line-height: 1.5;
    margin: 0;
}
</style>