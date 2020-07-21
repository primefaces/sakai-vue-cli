<template>
	<div class="card icons-demo">
		<h3>Icons</h3>
		<p>Apollo uses PrimeIcons v4.0, PrimeTek's new modern icon library.</p>

		<h5>Getting Started</h5>
		<p>PrimeIcons use the pi pi-{icon} syntax such as pi pi-check. A standalone icon can be displayed using an element like i or span.</p>
<CodeHighlight>
&lt;i class="pi pi-check"&gt;&lt;/i&gt;
&lt;i class="pi pi-times"&gt;&lt;/i&gt;
</CodeHighlight>

		<i class="pi pi-check" style="margin-right: .5rem"></i>
		<i class="pi pi-times"></i>

		<h5>Component Icons</h5>
		<p>Components that have icon properties accept PrimeIcons with the pi pi-{icon} syntax.</p>
<CodeHighlight>
&lt;Button label="Confirm" icon="pi pi-check"&gt;&lt;/Button&gt;
</CodeHighlight>

		<Button label="Confirm" icon="pi pi-check"></Button>

		<h5>Size</h5>
		<p>Size of the icons can easily be changed using font-size property.</p>

<CodeHighlight>
&lt;i class="pi pi-check"&gt;&lt;/i&gt;
</CodeHighlight>

		<i class="pi pi-check"></i>

<CodeHighlight>
&lt;i class="pi pi-check" style="fontSize: 2rem"&gt;&lt;/i&gt;
</CodeHighlight>

		<i class="pi pi-check" style="fontSize: 2rem"></i>

		<h5>Spinning Animation</h5>
		<p>Special pi-spin class applies continuous rotation to an icon.</p>
<CodeHighlight>
&lt;i class="pi pi-spin pi-spinner" style="fontSize: 2rem"&gt;&lt;/i&gt;
</CodeHighlight>

		<i class="pi pi-spin pi-spinner" style="fontSize: 2rem"></i>

		<h5>List of Icons</h5>
		<p>Here is the current list of PrimeIcons, more icons are added periodically. You may also <a href="https://github.com/primefaces/primeicons/issues">request new icons</a> at the issue tracker.</p>

		<div class="p-grid icons-list">
			<div class="p-col-12 p-md-2" v-for="icon of icons" :key="icon.properties.name">
				<i :class="'pi pi-' + icon.properties.name"></i>
				<div>pi-{{icon.properties.name}}</div>
			</div>
		</div>

	</div>
</template>

<script>
import CodeHighlight from "../components/CodeHighlight";
import axios from 'axios';

export default {
	data() {
		return {
			icons: null
		}
	},
	mounted() {
		axios.get('assets/layout/data/icons.json').then(res => {
			let icons = res.data.icons;
			icons.sort((icon1, icon2) => {
				if(icon1.properties.name < icon2.properties.name)
					return -1;
				else if(icon1.properties.name < icon2.properties.name)
					return 1;
				else
					return 0;
			});
			this.icons = icons;
		});
	},
	components: {
		'CodeHighlight': CodeHighlight
	}
}
</script>

<style scoped lang="scss">
.icons-list {
	text-align: center;
	color: #6c757d;

	.p-md-2 {
		padding: 1em;
	}
}

.icons-list i {
	font-size: 1.5rem;
	margin-bottom: .5rem;
}
</style>
