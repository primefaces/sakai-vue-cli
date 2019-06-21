<template>
	<div :class="containerClass" @click="onWrapperClick">
		<AppTopBar @menu-toggle="onMenuToggle" />

		<div :class="sidebarClass" @click="onSidebarClick">
			<div class="layout-logo">
                <router-link to="/">
                    <img alt="Logo" :src="logo" />
                </router-link>
            </div>

            <AppProfile />
            <AppMenu :model="menu" @menuitem-click="onMenuItemClick" />
		</div>

		<div class="layout-main">
			<router-view />
		</div>

		<AppFooter />
	</div>
</template>

<script>
import AppTopBar from './AppTopbar.vue';
import AppProfile from './AppProfile.vue';
import AppMenu from './AppMenu.vue';
import AppFooter from './AppFooter.vue';

export default {
    data() {
        return {
            layoutMode: 'static',
            layoutColorMode: 'dark',
            staticMenuInactive: false,
            overlayMenuActive: false,
            mobileMenuActive: false,
            menu : [
                {label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/'},
                {
                    label: 'Menu Modes', icon: 'pi pi-fw pi-cog',
                    items: [
                        {label: 'Static Menu', icon: 'pi pi-fw pi-bars',  command: () => this.layoutMode = 'static' },
                        {label: 'Overlay Menu', icon: 'pi pi-fw pi-bars',  command: () => this.layoutMode = 'overlay' }
                    ]
                },
                {
                    label: 'Menu Colors', icon: 'pi pi-fw pi-align-left', 
                    items: [
                        {label: 'Dark', icon: 'pi pi-fw pi-bars',  command: () => this.layoutColorMode = 'dark' },
                        {label: 'Light', icon: 'pi pi-fw pi-bars',  command: () => this.layoutColorMode = 'light' }
                    ]
                },
                {
                    label: 'Components', icon: 'pi pi-fw pi-globe', badge: '9',
                    items: [
                        {label: 'Sample Page', icon: 'pi pi-fw pi-th-large', to: '/sample'},
                        {label: 'Forms', icon: 'pi pi-fw pi-file', to: '/forms'},
                        {label: 'Data', icon: 'pi pi-fw pi-table', to: '/data'},
                        {label: 'Panels', icon: 'pi pi-fw pi-list', to: '/panels'},
                        {label: 'Overlays', icon: 'pi pi-fw pi-clone', to: '/overlays'},
                        {label: 'Menus', icon: 'pi pi-fw pi-plus', to: '/menus'},
                        {label: 'Messages', icon: 'pi pi-fw pi-spinner',to: '/messages'},
                        {label: 'Charts', icon: 'pi pi-fw pi-chart-bar', to: '/charts'},
                        {label: 'Misc', icon: 'pi pi-fw pi-upload', to: '/misc'}
                    ]
                },
                {
                    label: 'Template Pages', icon: 'pi pi-fw pi-file',
                    items: [
                        {label: 'Empty Page', icon: 'pi pi-fw pi-circle-off', to: '/empty'}
                    ]
                },
                {
                    label: 'Menu Hierarchy', icon: 'pi pi-fw pi-search',
                    items: [
                        {
                            label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
                            items: [
                                {
                                    label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
                                    items: [
                                        {label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark'},
                                        {label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark'},
                                        {label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark'},
                                    ]
                                },
                                {
                                    label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
                                    items: [
                                        {label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark'},
                                        {label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-bookmark'}
                                    ]
                                },
                            ]
                        },
                        {
                            label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
                            items: [
                                {
                                    label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
                                    items: [
                                        {label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark'},
                                        {label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark'},
                                        {label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-bookmark'},
                                    ]
                                },
                                {
                                    label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
                                    items: [
                                        {label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark'},
                                        {label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-bookmark'}
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {label: 'Documentation', icon: 'pi pi-fw pi-question', command: () => {window.location = "#/documentation"}},
                {label: 'View Source', icon: 'pi pi-fw pi-search', command: () => {window.location = "https://github.com/primefaces/sigma-vue"}}
            ]
        }
    },
    watch: {
        $route() {
            this.menuActive = false;
            this.$toast.removeAllGroups();
        }
    },
    methods: {
        onWrapperClick() {
            if (!this.menuClick) {
                this.overlayMenuActive = false;
                this.mobileMenuActive = false;
            }

            this.menuClick = false;
        },
        onMenuToggle() {
            this.menuClick = true;

            if (this.isDesktop()) {
                if (this.layoutMode === 'overlay') {
                    this.overlayMenuActive = !this.overlayMenuActive;
                }
                else if (this.layoutMode === 'static') {
                    this.staticMenuInactive = !this.staticMenuInactive;
                }
            }
            else {
                this.mobileMenuActive = !this.mobileMenuActive;
            }

            event.preventDefault();
        },
        onSidebarClick() {
            this.menuClick = true;
        },
        onMenuItemClick(event) {
            if (event.item && !event.item.items) {
                this.overlayMenuActive = false;
                this.mobileMenuActive = false;
            }
        },
        addClass(element, className) {
            if (element.classList)
                element.classList.add(className);
            else
                element.className += ' ' + className;
        },
        removeClass(element, className) {
            if (element.classList)
                element.classList.remove(className);
            else
                element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        },
        isDesktop() {
            return window.innerWidth > 1024;
        }
    },
    computed: {
        containerClass() {
            return ['layout-wrapper', {
                'layout-overlay': this.layoutMode === 'overlay',
                'layout-static': this.layoutMode === 'static',
                'layout-static-sidebar-inactive': this.staticMenuInactive && this.layoutMode === 'static',
                'layout-overlay-sidebar-active': this.overlayMenuActive && this.layoutMode === 'overlay',
                'layout-mobile-sidebar-active': this.mobileMenuActive
            }];
        },
        sidebarClass() {
            return ['layout-sidebar', {
                'layout-sidebar-dark': this.layoutColorMode === 'dark',
                'layout-sidebar-light': this.layoutColorMode === 'light'
            }];
        },
        logo() {
            return (this.layoutColorMode === 'dark') ? "assets/layout/images/logo-white.svg" : "assets/layout/images/logo.svg";
        }
    },
    beforeUpdate() {
        if (this.mobileMenuActive)
            this.addClass(document.body, 'body-overflow-hidden');
        else
            this.removeClass(document.body, 'body-overflow-hidden');
    },
    components: {
        'AppTopBar': AppTopBar,
        'AppProfile': AppProfile,
        'AppMenu': AppMenu,
        'AppFooter': AppFooter,
    }
}
</script>

<style lang="scss">
@import './App.scss';
</style>
