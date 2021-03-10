<template>
	<div class="p-grid panel-demo">
		<div class="p-col-12">
			<div class="card toolbar-demo">
				<h5>Toolbar</h5>
				<Toolbar>
					<template v-slot:left>
						<Button label="New" icon="pi pi-plus" style="margin-right: .5em" />
						<Button label="Open" icon="pi pi-folder-open" class="p-button-secondary" />

						<i class="pi pi-bars p-toolbar-separator" style="margin-right: .5em"></i>

						<Button icon="pi pi-check" class="p-button-success" style="margin-right: .5em"/>
						<Button icon="pi pi-trash" class="p-button-warning" style="margin-right: .5em"/>
						<Button icon="pi pi-print" class="p-button-danger" />
					</template>
					<template v-slot:right>
						<SplitButton label="Options" :model="toolbarItems"></SplitButton>
					</template>
				</Toolbar>
			</div>
		</div>
		<div class="p-col-12 p-md-6">
			<div class="card">
				<h5>AccordionPanel</h5>
				<Accordion  :activeIndex="0">
					<AccordionTab header="Header I">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</AccordionTab>
					<AccordionTab header="Header II">
						<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
							ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
							voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
							Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
					</AccordionTab>
					<AccordionTab header="Header III">
						<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
							et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
							Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
							quo minus.</p>
					</AccordionTab>
				</Accordion>
			</div>
			<div class="card">
				<h5>TabView</h5>
				<TabView>
					<TabPanel header="Header I">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></TabPanel>
					<TabPanel header="Header II">
						<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
							ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
							voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
							Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
					</TabPanel>
					<TabPanel header="Header III">
						<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
							et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
							Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
							quo minus.</p>
					</TabPanel>
				</TabView>
			</div>
		</div>
		<div class="p-col-12 p-md-6">
			<div class="card">
				<h5>Panel</h5>
				<Panel header="Header" :toggleable="true">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</Panel>
			</div>
			<div class="card">
				<h5>Fieldset</h5>
				<Fieldset legend="Legend" :toggleable="true">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</Fieldset>
			</div>

			<Card>
				<template v-slot:title>
					<h5>Card</h5>
					<Button icon="pi pi-plus" class="p-button-text" @click="toggle"/>
					<Menu id="config_menu" ref="menu" :model="cardMenu" :popup="true" />
				</template>

				<template v-slot:subtitle>
					Subtitle
				</template>

				<template v-slot:content>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</template>
			</Card>
		</div>

		<div class="p-col-12">
			<div class="card">
				<h5>Divider</h5>
				<div class="p-grid">
					<div class="p-col-5 p-d-flex p-flex-column p-ai-center p-jc-center">
						<div class="p-fluid">
							<div class="p-field">
								<label for="username">Username</label>
								<InputText id="username" type="text" />
							</div>
							<div class="p-field">
								<label for="password">Password</label>
								<InputText id="password" type="password" />
							</div>
						</div>
						<div class="p-fluid">
							<Button label="Login"></Button>
						</div>
					</div>
					
					<div class="p-col-2">
						<Divider layout="vertical">
							<b>OR</b>
						</Divider>
					</div>
					<div class="p-col-5 p-ai-center p-jc-center">
						<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                        voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>

						<Divider layout="horizontal" align="center">
							<span class="p-tag">Badge</span>
						</Divider>

						<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                        deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                        cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est
                        laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>

						<Divider align="right">
							<Button label="Button" icon="pi pi-search" class="p-button-outlined"></Button>
						</Divider>

						<p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
                        voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur
                        a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis
                        doloribus asperiores repellat.
                        Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien.
                        Morbi dapibus luctus odio.</p>
					</div>
				</div>
			</div>
		</div>

		<div class="p-col-12">
			<div class="card">
				<h5>Splitter</h5>
				<div class="p-grid">
					<Splitter style="height: 300px" class="p-mb-5">
						<SplitterPanel :size="40" :minSize="10" style="overflow: scroll">
							<p class="p-col p-m-3">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur pariatur recusandae rerum atque nisi ipsum fuga numquam 
								distinctio obcaecati quibusdam repellat, est assumenda quam perferendis reprehenderit, blanditiis, excepturi facilis! Voluptatem.
							</p>
						</SplitterPanel>
						<SplitterPanel :size="60" style="overflow: scroll">
							<Splitter layout="vertical">
								<SplitterPanel :size="15">
									<p class="p-col p-m-3">
										At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
										quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, 
										id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis 
										est eligendi optio cumque nihil impedit quo minus.
									</p>
								</SplitterPanel>
								<SplitterPanel :size="85">
									<p class="p-col p-m-3">
										Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et 
										molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur 
										aut perferendis doloribus asperiores repellat. Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, 
										egestas vitae sapien. Morbi dapibus luctus odio.
									</p>
								</SplitterPanel>
							</Splitter>
						</SplitterPanel>
					</Splitter>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				toolbarItems: [
					{
						label: 'Save',
						icon: 'pi pi-check'
					},
					{
						label: 'Update',
						icon: 'pi pi-upload'
					},
					{
						label: 'Delete',
						icon: 'pi pi-trash'
					},
					{
						label: 'Home Page',
						icon: 'pi pi-home'
					},
				],
				cardMenu:  [
					{ label: 'Save', icon: 'pi pi-fw pi-check' },
					{ label: 'Update', icon: 'pi pi-fw pi-refresh' },
					{ label: 'Delete', icon: 'pi pi-fw pi-trash' },
				]
			}
		},
		methods: {
			toggle() {
				this.$refs.menu.toggle(event);
			}
		}
	}
</script>

<style scoped lang="scss">
	p {
		line-height: 1.5;
		margin: 0;
	}
	::v-deep(.p-card .p-card-title) {
		display: -ms-flexbox;
		display: flex;
		-ms-flex-align: center;
		align-items: center;
		-ms-flex-pack: justify;
		justify-content: space-between;
		margin-bottom: 0;
	}
	::v-deep(button) {
		margin-right: .25em;
		margin-left: .25em;
	}
	::v-deep(.p-splitbutton button) {
		margin-right: 0;
		margin-left: 0;
	}
    @media screen and (max-width: 960px) {
        .panel-demo {
			.toolbar-demo.card {
				overflow: auto;
			}
        }
    }
</style>
