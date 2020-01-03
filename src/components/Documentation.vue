<template>
    <div class="p-grid">
        <div class="p-col-12">
            <div class="card docs">
                <h1>Current Version</h1>
                <p>Vue 2.6.0 and PrimeVue 1.0.0</p>

                <h1>Getting Started</h1>
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

                <h1>Vue CLI Scripts</h1>
                <p>Following commands are derived from create-app-app.</p>
<pre>
"npm run serve": Starts the development server
"npm run build": Builds the application for deployment.
"npm run lint": Executes the lint checks.
"npm run test:unit": Runs the tests.
</pre>

                <h1>Structure</h1>
                <p>Sigma consists of 2 main parts; the application layout and the resources. <i>App.vue</i> inside src folder is the main component containing the template for the base layout
                    whereas required resources such as SASS structure for the layout are placed inside the <b>src/assets/layout</b> folder.</p>

                <h1>Templates</h1>
                <p>Main layout is the template of the <i>App.vue</i>, it is divided into a couple of child components such as topbar, profile, menu and footer. Here is template of the
                    <i>App.vue</i> component that implements the logic such as menu state, layout modes and so on.
                </p>

<CodeHighlight>
<template v-pre>
&lt;template&gt;
    &lt;div :class="containerClass" @click="onWrapperClick"&gt;
        &lt;AppTopBar @menu-toggle="onMenuToggle" /&gt;

        &lt;div :class="sidebarClass" @click="onSidebarClick"&gt;
            &lt;div class="layout-logo"&gt;
                &lt;img alt="Logo" :src="logo" /&gt;
            &lt;/div&gt;

            &lt;AppProfile /&gt;
            &lt;AppMenu :model="menu" @menuitem-click="onMenuItemClick" /&gt;
        &lt;/div&gt;

        &lt;div class="layout-main"&gt;
            &lt;router-view /&gt;
        &lt;/div&gt;

        &lt;AppFooter /&gt;
    &lt;/div&gt;
&lt;/template&gt;
</template>
</CodeHighlight>

                <h1>Menu</h1>
                <p>Menu is a separate component defined in <i>AppMenu.vue</i> file based on PrimeNG MenuModel API. In order to define the menuitems,
                    navigate to data section of <i>App.vue</i> file and define your own model as a nested structure using the menu property. 
                    Here is the menu component from the demo application. Notice that menu object is bound to the model property of AppMenu component as shown above.</p>

<CodeHighlight lang="js">
data() {
    return {
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
            {label: 'View Source', icon: 'pi pi-fw pi-search', command: () => {window.location = "https://github.com/primefaces/sigma"}}
        ]
    }
}
</CodeHighlight>

                <h1>Dependencies</h1>

                <p>Dependencies of Sigma are listed below and needs to be added to package.json. Sigma has no direct dependency, even PrimeVue components are an optional dependency..</p>

<CodeHighlight lang="js">
{
    "primevue": "^1.0.0-rc.6",         //optional: PrimeVue components
    "primeicons": "2.0.0",             //optional: Icons
    "primeflex": "1.0.0",              //optional: Grid system
}
</CodeHighlight>

                <h1>Nova Theme</h1>
                <p>Sigma uses the free Nova-Light which is a free theme distributed within PrimeVue, however it can be used with any PrimeVue theme as well.</p>

                <h1>SASS Variables</h1>
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

                <h1>Menu Modes</h1>
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

                <h1>Menu Color Scheme</h1>
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

                <h1>Grid CSS</h1>
                <p>Sigma uses PrimeFlex CSS Grid throughout the samples. Although any grid library can be used, we recommend using PrimeFlex as your layout framework as it is well tested and supported by PrimeVue. PrimeFlex is
                    available at <a href="https://www.npmjs.com/package/primeflex">NPM</a>.</p>

                <h1>Customizing Styles</h1>
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