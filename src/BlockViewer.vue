<template>
    <div class="block-section">
        <div class="block-header">
            <span class="block-title">
                <span>{{header}}</span>
                <span class="badge-new" v-if="recent">New</span>
            </span>
            <div class="block-actions">
                <a tabindex="0" :class="{'block-action-active': blockView === BlockView.PREVIEW}" @click="activateView($event, BlockView.PREVIEW)"><span>Preview</span></a>
                <a :tabindex="'0'" :class="{'block-action-active': blockView === BlockView.CODE}" @click="activateView($event, BlockView.CODE)">
                    <span>Code</span>
                </a>
                <a :tabindex="0" class="block-action-copy" @click="copyCode($event)" 
                    v-tooltip.focus.bottom="{ value: 'Copied to clipboard' }"><i class="pi pi-copy"></i></a>
            </div>
        </div>
        <div class="block-content">
            <div :class="containerClass" :style="previewStyle" v-if="blockView == BlockView.PREVIEW">
                <slot></slot>
            </div>
            <div v-if="blockView === BlockView.CODE">
<pre v-code><code>{{code}}

</code></pre>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        header: {
            type: String,
            default: null
        },
        code: null,
        recent: {
            type: Boolean,
            default: false
        },
        containerClass: null,
        previewStyle: null
    },
    data() {
        return {
            BlockView: {
                PREVIEW: 0,
                CODE: 1
            },
            blockView: 0,
        }
    },
    methods: {
        activateView(event, blockView) {
            this.blockView = blockView;
            event.preventDefault();
        },
        async copyCode(event) {
            await navigator.clipboard.writeText(this.code);
            event.preventDefault();
        }
    }
}
</script>