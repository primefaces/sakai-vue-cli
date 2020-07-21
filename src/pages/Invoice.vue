<template>
	<div>
		<Button label="Print" icon="pi pi-print" @click="printClick" style="display: block; margin-bottom: 20px; margin-left: 6px" :key="1"></Button>

		<div class="p-grid">
			<div class="p-col">
				<div class="card" id="invoice-content">
					<div class="invoice">
						<div class="invoice-header">
							<div class="invoice-company">
								<img id="invoice-logo" class="logo-image" src="assets/layout/images/logo.svg" alt="roma-layout" />
								<div class="company-name">YOUR COMPANY</div>
								<div>9137 3rd Lane California City</div>
								<div>CA 93504, U.S.A.</div>
							</div>
							<div>
								<div class="invoice-title">INVOICE</div>
								<div class="invoice-details">
									<div class="invoice-label">DATE</div>
									<div class="invoice-value">{{new Date().toISOString().split('T')[0]}}</div>

									<div class="invoice-label">INVOICE #</div>
									<div class="invoice-value">8523</div>

									<div class="invoice-label">CUSTOMER ID</div>
									<div class="invoice-value">C1613</div>
								</div>
							</div>
						</div>
						<div class="invoice-to">
							<div class="bill-to">BILL TO</div>
							<div class="invoice-to-info">
								<div>Claire Williams, 148 Hope Lane</div>
								<div>Palo Alto, CA 94304. </div>
							</div>
						</div>
						<div class="invoice-items">
							<table>
								<thead>
								<tr>
									<th>Description</th>
									<th>Quantity</th>
									<th>Unit Price</th>
									<th>Line Total</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td>Green T-Shirt</td>
									<td>1</td>
									<td>$49.00</td>
									<td>$49.00</td>
								</tr>
								<tr>
									<td>Game Controller</td>
									<td>2</td>
									<td>$99.00</td>
									<td>$198.00</td>
								</tr>
								<tr>
									<td>Mini Speakers</td>
									<td>1</td>
									<td>$85.00</td>
									<td>$85.00</td>
								</tr>
								</tbody>
							</table>
						</div>
						<div class="invoice-summary">
							<div class="invoice-notes">
								<b>NOTES</b>
								<div>

								</div>
							</div>
							<div>
								<div class="invoice-details">
									<div class="invoice-label">SUBTOTAL</div>
									<div class="invoice-value">$332.00</div>

									<div class="invoice-label">VAT</div>
									<div class="invoice-value">0</div>

									<div class="invoice-label">TOTAL</div>
									<div class="invoice-value">$332.00</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		printClick() {
			window.print();
		}
	}
}
</script>

<style scoped>

</style>
