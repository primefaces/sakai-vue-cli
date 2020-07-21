<template>

	<div class="p-grid p-fluid">
		<div class="p-col-12 p-lg-6">
			<div class="card">
				<h5 class="centerText">Linear Chart</h5>
				<Chart type="line" :data="lineData" />
			</div>

			<div class="card">
				<h5 class="centerText">Pie Chart</h5>
				<Chart type="pie" :data="pieData" />
			</div>

			<div class="card">
				<h5 class="centerText">Polar Area Chart</h5>
				<Chart type="polarArea" :data="polarData" />
			</div>
		</div>
		<div class="p-col-12 p-lg-6">
			<div class="card">
				<h5 class="centerText">Bar Chart</h5>
				<Chart type="bar" :data="barData" />
			</div>

			<div class="card">
				<h5 class="centerText">Doughnut Chart</h5>
				<Chart type="doughnut" :data="doughnutData" />
			</div>

			<div class="card">
				<h5 class="centerText">Radar Chart</h5>
				<Chart type="radar" :data="radarData" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
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
			pieData: {
				labels: ['A','B','C'],
				datasets: [
					{
						data: [300, 50, 100],
						backgroundColor: [
							"#FF6384",
							"#36A2EB",
							"#FFCE56"
						],
						hoverBackgroundColor: [
							"#FF6384",
							"#36A2EB",
							"#FFCE56"
						]
					}
				]
			},
			polarData: {
				datasets: [{
					data: [
						11,
						16,
						7,
						3,
						14
					],
					backgroundColor: [
						"#FF6384",
						"#4BC0C0",
						"#FFCE56",
						"#E7E9ED",
						"#36A2EB"
					],
					label: 'My dataset'
				}],
				labels: [
					"Red",
					"Green",
					"Yellow",
					"Grey",
					"Blue"
				]
			},
			barData: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [
					{
						label: 'My First dataset',
						backgroundColor: '#2f4860',
						data: [65, 59, 80, 81, 56, 55, 40]
					},
					{
						label: 'My Second dataset',
						backgroundColor: '#00bb7e',
						data: [28, 48, 40, 19, 86, 27, 90]
					}
				]
			},
			doughnutData: {
				labels: ['A','B','C'],
				datasets: [
					{
						data: [300, 50, 100],
						backgroundColor: [
							"#FF6384",
							"#36A2EB",
							"#FFCE56"
						],
						hoverBackgroundColor: [
							"#FF6384",
							"#36A2EB",
							"#FFCE56"
						]
					}
				]
			},
			radarData: {
				labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
				datasets: [
					{
						label: 'My First dataset',
						backgroundColor: 'rgba(179,181,198,0.2)',
						borderColor: 'rgba(179,181,198,1)',
						pointBackgroundColor: 'rgba(179,181,198,1)',
						pointBorderColor: '#fff',
						pointHoverBackgroundColor: '#fff',
						pointHoverBorderColor: 'rgba(179,181,198,1)',
						data: [65, 59, 90, 81, 56, 55, 40]
					},
					{
						label: 'My Second dataset',
						backgroundColor: 'rgba(255,99,132,0.2)',
						borderColor: 'rgba(255,99,132,1)',
						pointBackgroundColor: 'rgba(255,99,132,1)',
						pointBorderColor: '#fff',
						pointHoverBackgroundColor: '#fff',
						pointHoverBorderColor: 'rgba(255,99,132,1)',
						data: [28, 48, 40, 19, 96, 27, 100]
					}
				]
			}
		}
	}
}
</script>

<style scoped>

</style>
