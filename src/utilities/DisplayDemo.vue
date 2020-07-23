<template>
	<div class="p-grid">
		<div class="p-col-12">
			<div class="card">
				<h4>Display</h4>
				<p>Efficiently configure the display of the component with <a href="https://github.com/primefaces/primeflex">PrimeFlex</a> display utilities.</p>

				<h5>Inline</h5>
				<InputText class="p-mr-2 p-d-inline" />
				<InputText class="p-d-inline" />

				<h5>Block</h5>
				<InputText class="p-mb-2 p-d-block" />
				<InputText class="p-d-block" />

				<h5>Visible on a Small Screen</h5>
				<p>Resize to view.</p>
				<Button type="button" icon="pi pi-bars" class="p-button-rounded p-d-md-none" />

				<h5>Hidden on a Small Screen</h5>
				<p>Resize to hide.</p>
				<Button type="button" icon="pi pi-search" class="p-button-rounded p-button-success p-d-none p-d-md-inline-flex" />

				<h5>Visible to Print, Invisible for Screen</h5>
				<p class="p-d-none p-print-block">Only visible when printed.</p>

				<h5>Visible to Screen, Invisible for Print</h5>
				<p class="p-d-block p-print-none">Not available for printing.</p>
			</div>
		</div>
	</div>
</template>

<script>
</script>
