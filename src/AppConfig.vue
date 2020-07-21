<template>
	<div id="layout-config" :class="containerClass">
		<a href="#" class="layout-config-button" id="layout-config-button" @click="toggleConfigurator">
			<i class="pi pi-cog"></i>
		</a>
		<a href="#" class="layout-config-close" @click="hideConfigurator">
			<i class="pi pi-times"></i>
		</a>

		<div class="layout-config-content">

			<h5 style="margin-top: 0">Input Style</h5>
			<div class="p-formgroup-inline">
				<div class="p-field-radiobutton">
					<RadioButton id="input_outlined" name="inputstyle" value="outlined" :modelValue="inputStyle" @input="changeInputStyle" />
					<label for="input_outlined">Outlined</label>
				</div>
				<div class="p-field-radiobutton">
					<RadioButton id="input_filled" name="inputstyle" value="filled" :modelValue="inputStyle" @input="changeInputStyle" />
					<label for="input_filled">Filled</label>
				</div>
			</div>

			<h5>Ripple Effect</h5>
			<InputSwitch :value="rippleActive" @input="changeRipple"  />

			<h5>Menu Type</h5>
			<div class="p-formgroup-inline">
				<div class="p-field-radiobutton">
					<RadioButton id="static" name="layoutMode" value="static" v-model="d_layoutMode" @change="changeLayout($event, 'static')" />
					<label for="static">Static</label>
				</div>
				<div class="p-field-radiobutton">
					<RadioButton id="overlay" name="layoutMode" value="overlay" v-model="d_layoutMode" @change="changeLayout($event, 'overlay')" />
					<label for="overlay">Overlay</label>
				</div>
			</div>

			<h5>Menu Color</h5>
			<div class="p-formgroup-inline">
				<div class="p-field-radiobutton">
					<RadioButton id="dark" name="layoutColorMode" value="dark" v-model="d_layoutColorMode" @change="changeLayoutColor($event, 'dark')" />
					<label for="dark">Dark</label>
				</div>
				<div class="p-field-radiobutton">
					<RadioButton id="light" name="layoutColorMode" value="light" v-model="d_layoutColorMode" @change="changeLayoutColor($event, 'light')" />
					<label for="light">Light</label>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			layoutMode: {
				type: String,
				default: null
			},
			layoutColorMode: {
				type: String,
				default: null
			}
		},
		data() {
			return {
				active: false,
				d_layoutMode: this.layoutMode,
				d_layoutColorMode: this.layoutColorMode,
			}
		},
		watch: {
			$route() {
				if (this.active) {
					this.active = false;
					this.unbindOutsideClickListener();
				}
			},
			layoutMode(newValue) {
				this.d_layoutMode = newValue;
			},
			layoutColorMode(newValue) {
				this.d_layoutColorMode = newValue;
			}
		},
		outsideClickListener: null,
		methods: {
			toggleConfigurator(event) {
				this.active = !this.active;
				event.preventDefault();

				if (this.active)
					this.bindOutsideClickListener();
				else
					this.unbindOutsideClickListener();
			},
			hideConfigurator(event) {
				this.active = false;
				this.unbindOutsideClickListener();
				event.preventDefault();
			},
			changeInputStyle(value) {
				this.$appState.inputStyle = value;
			},
			changeRipple(value) {
				this.$primevue.ripple = value;
			},
			changeLayout(event, layoutMode) {
				this.$emit('layout-change', layoutMode);
				event.preventDefault();
			},
			changeLayoutColor(event, layoutColor) {
				this.$emit('layout-color-change', layoutColor);
				event.preventDefault();
			},
			bindOutsideClickListener() {
				if (!this.outsideClickListener) {
					this.outsideClickListener = (event) => {
						if (this.active && this.isOutsideClicked(event)) {
							this.active = false;
						}
					};
					document.addEventListener('click', this.outsideClickListener);
				}
			},
			unbindOutsideClickListener() {
				if (this.outsideClickListener) {
					document.removeEventListener('click', this.outsideClickListener);
					this.outsideClickListener = null;
				}
			},
			isOutsideClicked(event) {
				return !(this.$el.isSameNode(event.target) || this.$el.contains(event.target));
			}
		},
		computed: {
			containerClass() {
				return ['layout-config', {'layout-config-active': this.active}];
			},
			rippleActive() {
				return this.$primevue.ripple;
			},
			inputStyle() {
				return this.$appState.inputStyle;
			}
		}
	}
</script>
