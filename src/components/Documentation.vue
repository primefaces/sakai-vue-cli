<template>
    <div class="p-grid">
        <div class="p-col-12">
            <div class="card docs">
                <h4>Current Version</h4>
                <p>Vue 2.6.0 and PrimeVue 2.x</p>

                <h4>Getting Started</h4>
                <p>Sigma is an application template for Vue based on the <a href="https://cli.vuejs.org/">Vue CLI</a> that provides out-of-the-box standard
                tooling for Vue projects. To get started, clone the <a href="https://github.com/primefaces/sigma-vue">repository</a> from GitHub and install the dependencies with npm or yarn.</p>
<pre>
npm install
</pre>

                or

<pre>
yarn
</pre>

                <p>Next step is running the application using the serve script and navigate to <b>http://localhost:8080/</b> to view the application.
                    That is it, you may now start with the development of your application using the Sigma template.</p>

                <pre>
npm run serve
</pre>

                <h4>Vue CLI Scripts</h4>
                <p>Following commands are derived from create-app-app.</p>
<pre>
"npm run serve": Starts the development server
"npm run build": Builds the application for deployment.
"npm run lint": Executes the lint checks.
"npm run test:unit": Runs the tests.
</pre>

                <h4>Structure</h4>
                <p>Sigma consists of 2 main parts; the application layout and the resources. <i>App.vue</i> inside src folder is the main component containing the template for the base layout
                    whereas required resources such as SASS structure for the layout are placed inside the <b>src/assets/layout</b> folder.</p>

                <h4>Templates</h4>
                <p>Main layout is the template of the <i>App.vue</i>, it is divided into a couple of child components such as topbar, profile, menu and footer. Here is template of the
                    <i>App.vue</i> component that implements the logic such as menu state, layout modes and so on.
                </p>

<CodeHighlight>
<template v-pre>
&lt;template&gt;
    &lt;div :class="containerClass" @click="onWrapperClick"&gt;
        &lt;AppTopBar @menu-toggle="onMenuToggle" /&gt;

        &lt;transition name="layout-sidebar"&gt;
            &lt;div :class="sidebarClass" @click="onSidebarClick" v-show="isSidebarVisible()"&gt;
                &lt;div class="layout-logo"&gt;
                    &lt;router-link to="/"&gt;
                        &lt;img alt="Logo" :src="logo" /&gt;
                    &lt;/router-link&gt;
                &lt;/div&gt;

                &lt;AppProfile /&gt;
                &lt;AppMenu :model="menu" @menuitem-click="onMenuItemClick" /&gt;
            &lt;/div&gt;
        &lt;/transition&gt;

        &lt;div class="layout-main"&gt;
            &lt;router-view /&gt;
        &lt;/div&gt;

        &lt;AppConfig :layoutMode="layoutMode" :layoutColorMode="layoutColorMode" @layout-change="onLayoutChange" @layout-color-change="onLayoutColorChange"/&gt;

        &lt;AppFooter /&gt;
    &lt;/div&gt;
&lt;/template&gt;
</template>
</CodeHighlight>

                <h4>Menu</h4>
                <p>Menu is a separate component defined in <i>AppMenu.vue</i> file based on PrimeNG MenuModel API. In order to define the menuitems,
                    navigate to data section of <i>App.vue</i> file and define your own model as a nested structure using the menu property.
                    Here is the menu component from the demo application. Notice that menu object is bound to the model property of AppMenu component as shown above.</p>

<CodeHighlight lang="js">
data() {
    return {
        menu : [
            {label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/'},
            {
                label: 'UI KIT', icon: 'pi pi-fw pi-sitemap',
                items: [
                    {label: 'Form Layout', icon: 'pi pi-fw pi-id-card', to: '/formlayout'},
                    {label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/input'},
                    {label: 'Button', icon: 'pi pi-fw pi-mobile', to: '/button'},
                    {label: 'Table', icon: 'pi pi-fw pi-table', to: '/table'},
                    {label: 'List', icon: 'pi pi-fw pi-list', to: '/list'},
                    {label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: '/tree'},
                    {label: 'Panel', icon: 'pi pi-fw pi-tablet', to: '/panel'},
                    {label: 'Overlay', icon: 'pi pi-fw pi-clone', to: '/overlay'},
                    {label: 'Menu', icon: 'pi pi-fw pi-bars', to: '/menu'},
                    {label: 'Message', icon: 'pi pi-fw pi-comment', to: '/messages'},
                    {label: 'File', icon: 'pi pi-fw pi-file', to: '/file'},
                    {label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/chart'},
                    {label: 'Misc', icon: 'pi pi-fw pi-circle-off', to: '/misc'},
                ]
            },
            {
                label: "Utilities", icon:'pi pi-fw pi-globe',
                items: [
                    {label: 'Display', icon:'pi pi-fw pi-desktop', to:'/display'},
                    {label: 'Elevation', icon:'pi pi-fw pi-external-link', to:'/elevation'},
                    {label: 'Flexbox', icon:'pi pi-fw pi-directions', to:'/flexbox'},
                    {label: 'Icons', icon:'pi pi-fw pi-search', to:'/icons'},
                    {label: 'Grid System', icon:'pi pi-fw pi-th-large', to:'/grid'},
                    {label: 'Spacing', icon:'pi pi-fw pi-arrow-right', to:'/spacing'},
                    {label: 'Typography', icon:'pi pi-fw pi-align-center', to:'/typography'},
                    {label: 'Text', icon:'pi pi-fw pi-pencil', to:'/text'},
                ]
            },
            {
                label: 'Pages', icon: 'pi pi-fw pi-clone',
                items: [
                    {label: 'Crud', icon: 'pi pi-fw pi-user-edit', to: '/crud'},
                    {label: 'Calendar', icon: 'pi pi-fw pi-calendar-plus', to: '/calendar'},
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
            {label: 'View Source', icon: 'pi pi-fw pi-search', command: () => {window.location = "https://github.com/primefaces/sigma"}}
        ]
    }
}
</CodeHighlight>

                <h4>Dependencies</h4>

                <p>Dependencies of Sigma are listed below and needs to be added to package.json. Sigma has no direct dependency, even PrimeVue components are an optional dependency..</p>

<CodeHighlight lang="js">
{
    "primevue": "^1.0.0-rc.6",         //optional: PrimeVue components
    "primeicons": "2.0.0",             //optional: Icons
    "primeflex": "1.0.0",              //optional: Grid system
}
</CodeHighlight>

                <h4>Saga Theme</h4>
                <p>Sigma uses the free Saga-Blue which is a free theme distributed within PrimeVue, however it can be used with any PrimeVue theme as well.</p>

                <h4>SASS Variables</h4>
                <p>In case you'd like to customize the layout variables, open <i>_variables.scss</i> file under src/layout folder. Saving the changes
                    will be reflected instantly at your browser.</p>

                <h3>src/assets/_vaiables.scss</h3>
<CodeHighlight lang="css">
/* General */
$fontSize:14px;
$bodyBgColor:#edf0f5;
$textColor:#333333;
$textSecondaryColor:#707070;
$borderRadius:3px;
$dividerColor:#e3e3e3;
$transitionDuration:.2s;
$maskBgColor:#424242;
$focusShadowColor:#8dcdff;


/* Menu */
$menuitemBadgeBgColor:#007be5;
$menuitemBadgeColor:#ffffff;
$submenuFontSize:13px;

/* Menu Dark*/
$menuDarkBgColorFirst:#4d505b;
$menuDarkBgColorLast:#3b3e47;
$menuitemDarkColor:#ffffff;
$menuitemDarkHoverColor:#0388e5;
$menuitemDarkActiveColor:#0388e5;
$menuitemDarkActiveBgColor:#2e3035;
$menuitemDarkBorderColor:rgba(52, 56, 65, 0.6);

/* Menu Light*/
$menuBgColorFirst:#f3f4f9;
$menuBgColorLast:#d7dbe8;
$menuitemColor:#232428;
$menuitemHoverColor:#0388e5;
$menuitemActiveColor:#0388e5;
$menuitemActiveBgColor:#ffffff;
$menuitemBorderColor:rgba(207, 211, 224, 0.6);

/* Topbar */
$topbarLeftBgColor:#0388E5;
$topbarRightBgColor:#07BDF4;
$topbarItemBadgeBgColor:#ef6262;
$topbarItemBadgeColor:#ffffff;
$topbarItemColor:#ffffff;
$topbarItemHoverColor:#77c7ff;
$topbarSearchInputBorderBottomColor:#ffffff;
$topbarSearchInputColor:#ffffff;

/* Footer */
$footerBgColor:#ffffff;
</CodeHighlight>

                <h4>Menu Modes</h4>
                <p>Menu has 2 modes, <i>static</i> and <i>overlay</i>. Main layout container element in App.vue is used to define which mode to use by adding specific classes. List
                    below indicates the style classes for each mode.</p>

                <ul>
                    <li>Static: "layout-wrapper layout-static"</li>
                    <li>Overlay: "layout-wrapper layout-overlay"</li>
                </ul>

                <p>For example to create an overlay menu, the div element should be in following form;</p>
<CodeHighlight>
&lt;div class="layout-wrapper layout-static"&gt;
</CodeHighlight>

                <p>It is also possible to leave the choice to the user by keeping the preference at a component and using an expression to bind it so that user can switch between modes. Sample
                    application has an example implementation of such use case with a computed property. Refer to App.vue for an example.</p>

                <h4>Menu Color Scheme</h4>
                <p>There are two alternatives as the menu colors schemes; "light" and "dark". A color scheme is applied using the <i>layout-sidebar-light</i> or <i>layout-sidebar-dark</i>
                to the sidebar element.</p>

                <b>Dark Menu</b>
<CodeHighlight>
&lt;div class="layout-sidebar layout-sidebar-dark"&gt;
</CodeHighlight>

                <b>Light Menu</b>
<CodeHighlight>
&lt;div class="layout-sidebar layout-sidebar-light"&gt;
</CodeHighlight>

                <h4>Grid CSS</h4>
                <p>Sigma uses PrimeFlex CSS Grid throughout the samples. Although any grid library can be used, we recommend using PrimeFlex as your layout framework as it is well tested and supported by PrimeVue. PrimeFlex is
                    available at <a href="https://www.npmjs.com/package/primeflex">NPM</a>.</p>

                <h4>Customizing Styles</h4>
                <p>It is suggested to write your customizations in <i>_overrides.scss</i> file instead of adding them to the
                    scss files under sass folder to avoid maintenance issues after an update.</p>
            </div>
        </div>
    </div>
</template>

<script>
import CodeHighlight from './CodeHighlight';

export default {
    components: {
        'CodeHighlight': CodeHighlight
    }
}
</script>

<style scoped>
pre {
    border-left: 10px solid #7fbcec;
    background: #f0f0f0;
    font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
    text-align: left;
    white-space: pre;
    padding: 1em;
    overflow: auto;
}

i {
    background-color: #fcf2a7;
    font-family: monaco,Consolas,Lucida Console,monospace;
    font-weight: 700;
    font-style: normal;
    font-size: 14px;
    padding: 2px;
}
</style>
