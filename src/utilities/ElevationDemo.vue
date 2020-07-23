<template>
    <div class="p-grid">
        <div class="p-col-12">
            <div class="card">
                <h4>Shadow</h4>
                <p>Elevation is used to specify the separation between surfaces and elements along the z-axis. There are 24 style classes (<mark>.p-shadow-{level}</mark>) to define the elevation layers.</p>

                <div class="shadow-container">
                    <div class="p-col" v-for="index in 24" :key="index">
                        <div :class="['box', 'p-shadow-' + index]">
                            p-shadow-{{index}}
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

<style lang="scss" scoped>
.box {
    min-height: 100px;
    min-width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    margin: 2rem;
    border-radius: 4px;
}

.shadow-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
</style>
