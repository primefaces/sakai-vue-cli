<template>
	<div class="p-grid misc-layout">
    <div class="p-col-12">
        <div class="card">
            <h5>ProgressBar</h5>
            <div class="p-grid">
                <div class="p-col">
                    <ProgressBar :value="value"></ProgressBar>
                </div>
                <div class="p-col">
                    <ProgressBar :value="50" :showValue="false"></ProgressBar>
                </div>
            </div>
        </div>
    </div>
    <div class="p-col-12 p-lg-6">
        <div class="card">
            <h4>Badge</h4>
            <h5>Numbers</h5>
            <div class="badges">
                <Badge :value="2" class="p-mr-2"></Badge>
                <Badge :value="8" severity="success" class="p-mr-2"></Badge>
                <Badge :value="4" severity="info" class="p-mr-2"></Badge>
                <Badge :value="12" severity="warning" class="p-mr-2"></Badge>
                <Badge :value="3" severity="danger"></Badge>
            </div>

            <h5>Positioned Badge</h5>
            <i class="pi pi-bell p-mr-4 p-text-secondary" style="font-size: 2rem" v-badge="2"></i>
            <i class="pi pi-calendar p-mr-4 p-text-secondary" style="font-size: 2rem" v-badge.danger="'10+'"></i>
            <i class="pi pi-envelope p-text-secondary" style="font-size: 2rem" v-badge.danger></i>


            <h5>Inline Button Badge</h5>
            <Button label="Emails" badge="8" class="p-mr-2"></Button>
            <Button label="Messages" icon="pi pi-users" class="p-button-warning" badge="8" badgeClass="p-badge-danger"></Button>

            <h5>Sizes</h5>
            <div class="badges">
                <Badge :value="2" class="p-mr-2"></Badge>
                <Badge :value="4" size="large" severity="warning" class="p-mr-2"></Badge>
                <Badge :value="6" size="xlarge" severity="success" class="p-mr-2"></Badge>
            </div>
        </div>

        <div class="card">
            <h4>Avatar</h4>
            <h5>Avatar Group</h5>
            <AvatarGroup class="p-mb-3">
                <Avatar image="assets/layout/images/avatar/amyelsner.png" size="large" shape="circle"></Avatar>
                <Avatar image="assets/layout/images/avatar/asiyajavayant.png" size="large" shape="circle"></Avatar>
                <Avatar image="assets/layout/images/avatar/onyamalimba.png" size="large" shape="circle"></Avatar>
                <Avatar image="assets/layout/images/avatar/ionibowcher.png" size="large" shape="circle"></Avatar>
                <Avatar image="assets/layout/images/avatar/xuxuefeng.png" size="large" shape="circle"></Avatar>
                <Avatar label="+2" shape="circle" size="large" :style="{'background-color':'#9c27b0', 'color': '#ffffff'}"></Avatar>
            </AvatarGroup>

            <h5>Label - Circle</h5>
            <Avatar label="P" class="p-mr-2" size="xlarge" shape="circle"></Avatar>
            <Avatar label="V" class="p-mr-2" size="large" :style="{'background-color':'#2196F3', 'color': '#ffffff'}" shape="circle"></Avatar>
            <Avatar label="U" class="p-mr-2" :style="{'background-color': '#9c27b0', 'color': '#ffffff'}" shape="circle"></Avatar>

            <h5>Icon - Badge</h5>
            <Avatar icon="pi pi-user" class="p-mr-2" size="xlarge" v-badge.success="4"></Avatar>
        </div>

        <div class="card">
            <h4>ScrollTop</h4>
            <ScrollPanel :style="{width: '250px', height: '200px'}">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Vitae et leo duis ut diam.
                    Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut.
                    Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
                    Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris.
                    Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales.
                    Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.
                    Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas.
                    Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.
                    Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer.
                    Mattis aliquam faucibus purus in massa tempor nec.
                </p>
                <ScrollTop target="parent" class="custom-scrolltop" :threshold="100" icon="pi pi-arrow-up"></ScrollTop>
            </ScrollPanel>
        </div>
    </div>
    <div class="p-col-12 p-lg-6">
        <div class="card">
            <h4>Tag</h4>
            <h5>Tags</h5>
            <Tag class="p-mr-2" value="Primary"></Tag>
            <Tag class="p-mr-2" severity="success" value="Success"></Tag>
            <Tag class="p-mr-2" severity="info" value="Info"></Tag>
            <Tag class="p-mr-2" severity="warning" value="Warning"></Tag>
            <Tag severity="danger" value="Danger"></Tag>

            <h5>Pills</h5>
            <Tag class="p-mr-2" value="Primary" :rounded="true"></Tag>
            <Tag class="p-mr-2" severity="success" value="Success" :rounded="true"></Tag>
            <Tag class="p-mr-2" severity="info" value="Info" :rounded="true"></Tag>
            <Tag class="p-mr-2" severity="warning" value="Warning" :rounded="true"></Tag>
            <Tag severity="danger" value="Danger" :rounded="true"></Tag>

            <h5>Icons</h5>
            <Tag class="p-mr-2" icon="pi pi-user" value="Primary"></Tag>
            <Tag class="p-mr-2" icon="pi pi-check" severity="success" value="Success"></Tag>
            <Tag class="p-mr-2" icon="pi pi-info-circle" severity="info" value="Info"></Tag>
            <Tag class="p-mr-2" con="pi pi-exclamation-triangle" severity="warning" value="Warning"></Tag>
            <Tag icon="pi pi-times" severity="danger" value="Danger"></Tag>
        </div>

        <div class="card">
            <h4>Chip</h4>
            <h5>Basic</h5>
            <div class="p-d-flex p-ai-center p-flex-column p-flex-sm-row">
                <Chip label="Action" class="p-mr-2 p-mb-2"></Chip>
                <Chip label="Comedy" class="p-mr-2 p-mb-2"></Chip>
                <Chip label="Mystery" class="p-mr-2 p-mb-2"></Chip>
                <Chip label="Thriller" :removable="true" class="p-mb-2"></Chip>
            </div>

            <h5>Icon</h5>
            <div class="p-d-flex p-ai-center p-flex-column p-flex-sm-row">
                <Chip label="Apple" icon="pi pi-apple" class="p-mr-2 p-mb-2"></Chip>
                <Chip label="Facebook" icon="pi pi-facebook" class="p-mr-2 p-mb-2"></Chip>
                <Chip label="Google" icon="pi pi-google" class="p-mr-2 p-mb-2"></Chip>
                <Chip label="Microsoft" icon="pi pi-microsoft" :removable="true" class="p-mb-2"></Chip>
            </div>

            <h5>Image</h5>
            <div class="p-d-flex p-ai-center p-flex-column p-flex-sm-row">
                <Chip label="Amy Elsner" image="assets/layout/images/avatar/amyelsner.png" class="p-mr-2 p-mb-2"></Chip>
                <Chip label="Asiya Javayant" image="assets/layout/images/avatar/asiyajavayant.png" class="p-mr-2 p-mb-2"></Chip>
                <Chip label="Onyama Limba" image="assets/layout/images/avatar/onyamalimba.png" class="p-mr-2 p-mb-2"></Chip>
                <Chip label="Xuxue Feng" image="assets/layout/images/avatar/xuxuefeng.png" :removable="true" class="p-mb-2"></Chip>
            </div>

            <h5>Styling</h5>
            <div class="p-d-flex p-ai-center p-flex-column p-flex-sm-row">
                <Chip label="Action" class="p-mr-2 p-mb-2 custom-chip"></Chip>
                <Chip label="Comedy" class="p-mr-2 p-mb-2 custom-chip"></Chip>
                <Chip label="Onyama Limba" image="assets/layout/images/avatar/onyamalimba.png" class="p-mr-2 p-mb-2 custom-chip"></Chip>
                <Chip label="Xuxue Feng" image="assets/layout/images/avatar/xuxuefeng.png" :removable="true" class="p-mb-2 custom-chip"></Chip>
            </div>
        </div>

        <div class="card">
            <h4>Skeleton</h4>
            <div class="custom-skeleton p-p-4">
                <div class="p-d-flex p-mb-3">
                    <Skeleton shape="circle" size="4rem" class="p-mr-2"></Skeleton>
                    <div>
                        <Skeleton width="10rem" class="p-mb-2"></Skeleton>
                        <Skeleton width="5rem" class="p-mb-2"></Skeleton>
                        <Skeleton height=".5rem"></Skeleton>
                    </div>
                </div>
                <Skeleton width="100%" height="150px"></Skeleton>
                <div class="p-d-flex p-jc-between p-mt-3">
                    <Skeleton width="4rem" height="2rem"></Skeleton>
                    <Skeleton width="4rem" height="2rem"></Skeleton>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
	export default {
		data() {
			return {
				value: 0
			}
		},
		interval: null,
		methods: {
			startProgress() {
				this.interval = setInterval(() => {
					let newValue = this.value + Math.floor(Math.random() * 10) + 1;
					if (newValue >= 100) {
						newValue = 100;
					}
					this.value = newValue;
				}, 2000);
			},
			endProgress() {
				clearInterval(this.interval);
				this.interval = null;
			}
		},
		mounted() {
			this.startProgress();
		},
		beforeUnmount() {
			this.endProgress();
		}
	}
</script>

<style lang="scss" scoped>
	.badges {
		.p-badge, .p-tag {
			margin-right: .5rem;
		}
	}

	.p-button {
		margin-right: .5rem;
	}

	.p-overlay-badge {
		margin-right: 2rem;
	}

    ::v-deep(.custom-scrolltop){
        width: 2rem;
        height: 2rem;
        border-radius: 4px;
        background-color: var(--primary-color);
    }
    ::v-deep(.custom-scrolltop .p-scrolltop-icon) {
        font-size: 1rem;
        color: var(--primary-color-text);
    }
    ::v-deep(.custom-scrolltop:hover) {
         background-color: var(--primary-color);
    }
    ::v-deep(.custom-skeleton) {
        border: 1px solid var(--surface-d);
        border-radius: 4px;
    }
    ::v-deep(.custom-skeleton ul) {
        list-style: none;
    }
</style>
