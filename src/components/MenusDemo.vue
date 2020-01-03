<template>
	<div class="p-grid p-fluid">
        <div class="p-col-12">
			<div class="card card-w-title">
				<h1>Menubar</h1>
				<Menubar :model="nestedMenuitems" />
			</div>
		</div>

        <div class="p-col-12">
			<div class="card card-w-title">
				<h1>Breadcrumb</h1>
				<Breadcrumb :home="breadcrumbHome" :model="breadcrumbItems" />
			</div>
		</div>

         <div class="p-col-12">
			<div class="card card-w-title">
				<h1>Steps</h1>
                <p>Steps and TabMenu are integrated with the same child routes.</p>
				<Steps :model="nestedRouteItems" :readonly="false" />
                <router-view/>

                <h1>TabMenu</h1>
                <TabMenu :model="nestedRouteItems" />
                <router-view/>
			</div>
		</div>

        <div class="p-col-12 p-xl-8">
			<div class="card card-w-title">
                <h1>MegaMenu</h1>
				<MegaMenu :model="megamenuItems" />

                <h1 style="margin-top: 1.55em">Vertical</h1>
                <MegaMenu :model="megamenuItems" orientation="vertical" />
			</div>
		</div>

        <div class="p-col-12 p-xl-4">
			<div class="card card-w-title">
                <h1>Menu</h1>
				<Menu :model="menuitems" />
                
				<Menu ref="menu" :model="menuitems" :popup="true" />
				<Button type="button" label="Overlay" @click="toggleMenu" style="margin-top: 2em; width: auto"/>
			</div>
		</div>

		<div class="p-col-12 p-md-4">
			<div class="card card-w-title">
				<h1>TieredMenu</h1>
				<TieredMenu :model="nestedMenuitems" />

                <TieredMenu ref="tieredMenu" :model="nestedMenuitems" :popup="true" />
				<Button type="button" label="Overlay" @click="toggleTieredMenu" style="margin-top: 2em; width: auto"/>
			</div>
		</div>

        <div class="p-col-12 p-md-4">
			<div class="card card-w-title">
				<h1>ContextMenu</h1>
                <img alt="image" src="assets/layout/images/nature/nature3.jpg" @contextmenu="onImageRightClick" class="contextmenu-image">
                <ContextMenu ref="contextMenu" :model="nestedMenuitems" />
			</div>
		</div>

        <div class="p-col-12 p-md-4">
			<div class="card card-w-title">
				<h1>PanelMenu</h1>
				<PanelMenu :model="panelMenuitems" />
			</div>
		</div>
		
	</div>
</template>

<script>
export default {
	data() {
		return {
			menuitems: [
				{
					label: 'Options',
					items: [{label: 'New', icon: 'pi pi-fw pi-plus'},
						{label: 'Delete', icon: 'pi pi-fw pi-trash'}]
				},
				{
					label: 'Account',
					items: [{label: 'Option', icon: 'pi pi-fw pi-cog'},
						{label: 'Sign Out', icon: 'pi pi-fw pi-power-off'} ]
				}
			],
            nestedMenuitems: [
                {
                   label:'File',
                   icon:'pi pi-fw pi-file',
                   items:[
                      {
                         label:'New',
                         icon:'pi pi-fw pi-plus',
                         items:[
                            {
                               label:'Bookmark',
                               icon:'pi pi-fw pi-bookmark'
                            },
                            {
                               label:'Video',
                               icon:'pi pi-fw pi-video'
                            },

                         ]
                      },
                      {
                         label:'Delete',
                         icon:'pi pi-fw pi-trash'
                      },
                      {
                         separator:true
                      },
                      {
                         label:'Export',
                         icon:'pi pi-fw pi-external-link'
                      }
                   ]
                },
                {
                   label:'Edit',
                   icon:'pi pi-fw pi-pencil',
                   items:[
                      {
                         label:'Left',
                         icon:'pi pi-fw pi-align-left'
                      },
                      {
                         label:'Right',
                         icon:'pi pi-fw pi-align-right'
                      },
                      {
                         label:'Center',
                         icon:'pi pi-fw pi-align-center'
                      },
                      {
                         label:'Justify',
                         icon:'pi pi-fw pi-align-justify'
                      },

                   ]
                },
                {
                   label:'Users',
                   icon:'pi pi-fw pi-user',
                   items:[
                      {
                         label:'New',
                         icon:'pi pi-fw pi-user-plus',

                      },
                      {
                         label:'Delete',
                         icon:'pi pi-fw pi-user-minus',

                      },
                      {
                         label:'Search',
                         icon:'pi pi-fw pi-users',
                         items:[
                            {
                               label:'Filter',
                               icon:'pi pi-fw pi-filter',
                               items:[
                                  {
                                     label:'Print',
                                     icon:'pi pi-fw pi-print'
                                  }
                               ]
                            },
                            {
                               icon:'pi pi-fw pi-bars',
                               label:'List'
                            }
                         ]
                      }
                   ]
                },
                {
                   label:'Events',
                   icon:'pi pi-fw pi-calendar',
                   items:[
                      {
                         label:'Edit',
                         icon:'pi pi-fw pi-pencil',
                         items:[
                            {
                               label:'Save',
                               icon:'pi pi-fw pi-calendar-plus'
                            },
                            {
                               label:'Delete',
                               icon:'pi pi-fw pi-calendar-minus'
                            },

                         ]
                      },
                      {
                         label:'Archieve',
                         icon:'pi pi-fw pi-calendar-times',
                         items:[
                            {
                               label:'Remove',
                               icon:'pi pi-fw pi-calendar-minus'
                            }
                         ]
                      }
                   ]
                },
                {
                   label:'Quit',
                   icon:'pi pi-fw pi-power-off'
                }
             ],
             panelMenuitems: [
                {
                   label: 'File',
                   icon:'pi pi-fw pi-file',
                   items: [
                      {
                         label: 'New',
                         icon:'pi pi-fw pi-plus',
                         items: [
                            {
                               label: 'Bookmark',
                               icon:'pi pi-fw pi-bookmark'
                            },
                            {
                               label: 'Video',
                               icon:'pi pi-fw pi-video'
                            }
                         ]
                      },
                      {
                         label: 'Delete',
                         icon:'pi pi-fw pi-trash'
                      },
                      {
                         label: 'Export',
                         icon:'pi pi-fw pi-external-link'
                      }
                   ]
                },
                {
                   label: 'Edit',
                   icon:'pi pi-fw pi-pencil',
                   items: [
                      {
                         label: 'Left',
                         icon:'pi pi-fw pi-align-left'
                      },
                      {
                         label: 'Right',
                         icon:'pi pi-fw pi-align-right'
                      },
                      {
                         label: 'Center',
                         icon:'pi pi-fw pi-align-center'
                      },
                      {
                         label: 'Justify',
                         icon:'pi pi-fw pi-align-justify'
                      }
                   ]
                },
                {
                   label: 'Users',
                   icon:'pi pi-fw pi-user',
                   items: [
                      {
                         label: 'New',
                         icon:'pi pi-fw pi-user-plus',

                      },
                      {
                         label: 'Delete',
                         icon:'pi pi-fw pi-user-minus',
                      },
                      {
                         label: 'Search',
                         icon:'pi pi-fw pi-users',
                         items: [
                            {
                               label: 'Filter',
                               icon:'pi pi-fw pi-filter',
                               items: [
                                  {
                                     label: 'Print',
                                     icon:'pi pi-fw pi-print'
                                  }
                               ]
                            },
                            {
                               icon:'pi pi-fw pi-bars',
                               label: 'List'
                            }
                         ]
                      }
                   ]
                },
                {
                   label: 'Events',
                   icon:'pi pi-fw pi-calendar',
                   items: [
                      {
                         label: 'Edit',
                         icon:'pi pi-fw pi-pencil',
                         items: [
                            {
                               label: 'Save',
                               icon:'pi pi-fw pi-calendar-plus'
                            },
                            {
                               label: 'Delete',
                               icon:'pi pi-fw pi-calendar-minus'
                            }
                         ]
                      },
                      {
                         label: 'Archieve',
                         icon:'pi pi-fw pi-calendar-times',
                         items: [
                            {
                               label: 'Remove',
                               icon:'pi pi-fw pi-calendar-minus'
                            }
                         ]
                      }
                   ]
                }
             ],
             breadcrumbHome: {icon: 'pi pi-home', to: '/'},
             breadcrumbItems: [
                {label:'Categories'},
                {label:'Sports'},
                {label:'Football'},
                {label:'Countries'},
                {label:'Spain'},
                {label:'F.C. Barcelona'},
                {label:'Squad'},
                {label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'}
            ],
            megamenuItems: [
                {
                    label: 'Videos', icon: 'pi pi-fw pi-video',
                    items: [
                        [
                            {
                                label: 'Video 1',
                                items: [{label: 'Video 1.1'}, {label: 'Video 1.2'}]
                            },
                            {
                                label: 'Video 2',
                                items: [{label: 'Video 2.1'}, {label: 'Video 2.2'}]
                            }
                        ],
                        [
                            {
                                label: 'Video 3',
                                items: [{label: 'Video 3.1'}, {label: 'Video 3.2'}]
                            },
                            {
                                label: 'Video 4',
                                items: [{label: 'Video 4.1'}, {label: 'Video 4.2'}]
                            }
                        ]
                    ]
                },
                {
                    label: 'Users', icon: 'pi pi-fw pi-users',
                    items: [
                        [
                            {
                                label: 'User 1',
                                items: [{label: 'User 1.1'}, {label: 'User 1.2'}]
                            },
                            {
                                label: 'User 2',
                                items: [{label: 'User 2.1'}, {label: 'User 2.2'}]
                            },
                        ],
                        [
                            {
                                label: 'User 3',
                                items: [{label: 'User 3.1'}, {label: 'User 3.2'}]
                            },
                            {
                                label: 'User 4',
                                items: [{label: 'User 4.1'}, {label: 'User 4.2'}]
                            }
                        ],
                        [
                            {
                                label: 'User 5',
                                items: [{label: 'User 5.1'}, {label: 'User 5.2'}]
                            },
                            {
                                label: 'User 6',
                                items: [{label: 'User 6.1'}, {label: 'User 6.2'}]
                            }
                        ]
                    ]
                },
                {
                    label: 'Events', icon: 'pi pi-fw pi-calendar',
                    items: [
                        [
                            {
                                label: 'Event 1',
                                items: [{label: 'Event 1.1'}, {label: 'Event 1.2'}]
                            },
                            {
                                label: 'Event 2',
                                items: [{label: 'Event 2.1'}, {label: 'Event 2.2'}]
                            }
                        ],
                        [
                            {
                                label: 'Event 3',
                                items: [{label: 'Event 3.1'}, {label: 'Event 3.2'}]
                            },
                            {
                                label: 'Event 4',
                                items: [{label: 'Event 4.1'}, {label: 'Event 4.2'}]
                            }
                        ]
                    ]
                },
                {
                    label: 'Settings', icon: 'pi pi-fw pi-cog',
                    items: [
                        [
                            {
                                label: 'Setting 1',
                                items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}]
                            },
                            {
                                label: 'Setting 2',
                                items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}]
                            },
                            {
                                label: 'Setting 3',
                                items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}]
                            }
                        ],
                        [
                            {
                                label: 'Setting 4',
                                items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}]
                            }
                        ]
                    ]
                }
            ],
            nestedRouteItems: [{
                label: 'Personal',
                to: '/menus'
            },
            {
                label: 'Seat',
                to: '/menus/seat'
            },
            {
                label: 'Payment',
                to: '/menus/payment'
            },
            {
                label: 'Confirmation',
                to: '/menus/confirmation'
            }]
        }
	},
	methods: {
		toggleMenu(event) {
			this.$refs.menu.toggle(event);
        },
        onImageRightClick(event) {
            this.$refs.contextMenu.show(event);
        },
        toggleTieredMenu(event) {
			this.$refs.tieredMenu.toggle(event);
        }
	}
}
</script>

<style scoped lang="scss">
/deep/ .stepsdemo-content  {
    padding: 1em 0;

    p {
        font-weight: 400;
        display: inline-block;
        vertical-align: middle;
        font-size: 18px;
        margin: 0;
    }

    i {
        vertical-align: middle;
        font-size: 2em;
        margin: 0;
    }
}

.contextmenu-image {
    width: 100%;
}
</style>