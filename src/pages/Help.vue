<template>
	<div class="p-grid help-page">
		<div class="p-col-12">
			<div class="card help-search">
				<div class="help-search-content">
					<h1>We are here to help</h1>
					<div class="search-container">
						<i class="pi pi-search"></i>
						<InputText type="text" placeholder="Search" />
					</div>
				</div>
			</div>
		</div>

		<div class="p-col-12 p-lg-6">
			<div class="card">
				<h4>General</h4>
				<Accordion>
					<AccordionTab header="Header I" :active="true">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
							ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</AccordionTab>
					<AccordionTab header="Header II">
						<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
							architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
							voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
					</AccordionTab>
					<AccordionTab header="Header III">
						<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
							cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
							Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
					</AccordionTab>
				</Accordion>

				<h4>FAQ</h4>
				<Accordion>
					<AccordionTab header="FAQ I" :active="true">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
							ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</AccordionTab>
					<AccordionTab header="FAQ II">
						<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
							architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
							voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
					</AccordionTab>
					<AccordionTab header="FAQ III">
						<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
							cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
							Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
					</AccordionTab>
				</Accordion>
			</div>
		</div>


		<div class="p-col-12 p-lg-6">
			<div class="card">
				<h4>System Status</h4>
				<p>All services are operational.</p>
				<div class="status-bars">
					<div class="status-bar"></div>
					<div class="status-bar"></div>
					<div class="status-bar"></div>
					<div class="status-bar"></div>
					<div class="status-bar"></div>
					<div class="status-bar"></div>
					<div class="status-bar"></div>
					<div class="status-bar"></div>
					<div class="status-bar status-bar-failure"></div>
					<div class="status-bar"></div>
					<div class="status-bar"></div>
					<div class="status-bar"></div>
					<div class="status-bar"></div>
					<div class="status-bar"></div>
					<div class="status-bar"></div>
					<div class="status-bar"></div>
					<div class="status-bar"></div>
					<div class="status-bar"></div>
					<div class="status-bar"></div>
					<div class="status-bar"></div>
					<div class="status-bar"></div>
					<div class="status-bar"></div>
					<div class="status-bar"></div>
					<div class="status-bar"></div>
					<div class="status-bar"></div>
					<div class="status-bar"></div>
					<div class="status-bar"></div>
					<div class="status-bar"></div>
					<div class="status-bar"></div>
					<div class="status-bar"></div>
				</div>
				<div class="status-bar-footer">
					<span>30 Days Ago</span>
					<span>Today</span>
				</div>
			</div>

			<div class="card">
				<h4>Articles</h4>
				<p>Recent articles from our team.</p>
				<div class="blog-posts">
					<div class="blog-post">
						<div class="blog-text">
							<h1>Building Revenue With Confidence</h1>
							<span>And avoiding failures</span>
						</div>
						<div class="blog-profile">
							<img src="assets/layout/images/avatar/amyelsner.png" alt="apollo" />
						</div>
					</div>

					<div class="blog-post">
						<div class="blog-text">
							<h1>Latest Marketing Trends</h1>
							<span>Don't miss out our tips</span>
						</div>
						<div class="blog-profile">
							<img src="assets/layout/images/avatar/annafali.png" alt="apollo" />
						</div>
					</div>

					<div class="blog-post">
						<div class="blog-text">
							<h1>How To Reach Your Audience</h1>
							<span>10 ways to increase your efficiency</span>
						</div>
						<div class="blog-profile">
							<img src="assets/layout/images/avatar/stephenshaw.png" alt="apollo" />
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
	}
</script>

<style scoped>

</style>
