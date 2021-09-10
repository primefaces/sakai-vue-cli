<template>
	<div id="layout-config" :class="containerClass">
		<a href="#" class="layout-config-button" id="layout-config-button" @click="toggleConfigurator">
			<i class="pi pi-cog"></i>
		</a>
		<Button class="p-button-danger layout-config-close p-button-rounded p-button-text" icon="pi pi-times" @click="hideConfigurator"></Button>

		<div class="layout-config-content">
			<h6 class="mt-0">Component Scale</h6>
			<div class="config-scale">
				<Button icon="pi pi-minus" @click="decrementScale()" class="p-button-text" :disabled="scale === scales[0]"/>
				<i class="pi pi-circle-on" v-for="s of scales" :class="{'scale-active': s === scale}" :key="s"/>
				<Button icon="pi pi-plus"  @click="incrementScale()" class="p-button-text" :disabled="scale === scales[scales.length - 1]" />
			</div>

			<h6>Input Style</h6>
			<div class="p-formgroup-inline">
				<div class="field-radiobutton">
					<RadioButton id="input_outlined" name="inputstyle" value="outlined" :modelValue="$primevue.config.inputStyle" @change="changeInputStyle('outlined')" />
					<label for="input_outlined">Outlined</label>
				</div>
				<div class="field-radiobutton">
					<RadioButton id="input_filled" name="inputstyle" value="filled" :modelValue="$primevue.config.inputStyle" @change="changeInputStyle('filled')" />
					<label for="input_filled">Filled</label>
				</div>
			</div>

			<h6>Ripple Effect</h6>
			<InputSwitch :modelValue="rippleActive" @update:modelValue="changeRipple" />

			<h6>Menu Type</h6>
			<div class="p-formgroup-inline">
				<div class="field-radiobutton">
					<RadioButton id="static" name="layoutMode" value="static" v-model="d_layoutMode" @change="changeLayout($event, 'static')" />
					<label for="static">Static</label>
				</div>
				<div class="field-radiobutton">
					<RadioButton id="overlay" name="layoutMode" value="overlay" v-model="d_layoutMode" @change="changeLayout($event, 'overlay')" />
					<label for="overlay">Overlay</label>
				</div>
			</div>

			<h6>Color Scheme</h6>
			<div class="p-formgroup-inline">
				<div class="field-radiobutton">
					<RadioButton id="light" name="layoutColorMode" value="saga" v-model="themeScheme" @change="changeThemeScheme('saga')" />
					<label for="light">Light</label>
				</div>
				<div class="field-radiobutton">
					<RadioButton id="dim" name="layoutColorMode" value="vela" v-model="themeScheme" @change="changeThemeScheme('vela')" />
					<label for="dim">Dim</label>
				</div>
				<div class="field-radiobutton">
					<RadioButton id="dark" name="layoutColorMode" value="arya" v-model="themeScheme" @change="changeThemeScheme('arya')" />
					<label for="dark">Dark</label>
				</div>
			</div>

			<h6>Primary Color</h6>
			<div class="flex">
				<div style="width:2rem;height:2rem;border-radius:6px" class="bg-blue-500 mr-3 cursor-pointer" @click="changeThemeColor('blue')"></div>
				<div style="width:2rem;height:2rem;border-radius:6px" class="bg-green-500 mr-3 cursor-pointer" @click="changeThemeColor('green')"></div>
				<div style="width:2rem;height:2rem;border-radius:6px" class="bg-orange-500 mr-3 cursor-pointer" @click="changeThemeColor('orange')"></div>
				<div style="width:2rem;height:2rem;border-radius:6px" class="bg-purple-500 cursor-pointer" @click="changeThemeColor('purple')"></div>
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
				scale: 16,
				scales: [12,13,14,15,16],
				themeScheme: 'saga',
				themeColor: 'blue'
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
				this.$primevue.config.inputStyle = value;
			},
			changeRipple(value) {
				this.$primevue.config.ripple = value;
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
			},
			decrementScale() {
				this.scale--;
				this.applyScale();
			},
			incrementScale() {
				this.scale++;
				this.applyScale();
			},
			applyScale() {
				document.documentElement.style.fontSize = this.scale + 'px';
			},
			changeTheme() {
				let theme = this.themeScheme + '-' + this.themeColor;
				let themeElement = document.getElementById('theme-link');
				themeElement.setAttribute('href', themeElement.getAttribute('href').replace(this.$appState.theme, theme));
				this.$appState.theme = theme;
			},
			changeThemeScheme(scheme) {
				this.themeScheme = scheme;
				this.changeTheme();
			},
			changeThemeColor(color) {
				this.themeColor = color;
				this.changeTheme();
			}
		},
		computed: {
			containerClass() {
				return ['layout-config', {'layout-config-active': this.active}];
			},
			rippleActive() {
				return this.$primevue.config.ripple;
			},
			inputStyle() {
				return this.$appState.inputStyle;
			}
		}
	}
</script>
