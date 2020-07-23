<template>

    <div class="p-grid spacing-demo">
        <div class="p-col-12">
            <div class="card">
                <h3>Spacing</h3>
                <p><router-link to="grid">PrimeFlex</router-link> provides various spacing utilities to modify
                    an element's layout.</p>

                <h5>Classes</h5>
                <p>The classes modify the margins and use the <mark>p-m{position}-{value}</mark> syntax whereas for responsive
                    values <mark>p-m{position}-{breakpoint}-{value}</mark> format is used.</p>
                <pre>
&lt;div class="p-mb-2"&gt;&lt;/i&gt;
&lt;div class="p-mt-4"&gt;&lt;/i&gt;
&lt;div class="p-m-1 p-m-lg-2"&gt;&lt;/i&gt;
</pre>
                <h5>Position</h5>
                <p>Position can either be either of the 4 sides, the x-y axis or blank for the shortand of all sides.</p>
                <ul>
                    <li><b>t</b>: top</li>
                    <li><b>b</b>: bottom</li>
                    <li><b>l</b>: left</li>
                    <li><b>r</b>: right</li>
                    <li><b>x</b>: left and right</li>
                    <li><b>y</b>: top and bottom</li>
                    <li><b>blank</b>: all sides</li>
                </ul>

                <h5>Value</h5>
                <p>Value field varies from 0 to 6 where default value of the <mark>$spacer</mark> is 1rem. The special auto value is used to center elements using auto margins.</p>
                <ul>
                    <li><b>0</b>: $spacer * 0</li>
                    <li><b>1</b>: $spacer * .25</li>
                    <li><b>2</b>: $spacer * .5</li>
                    <li><b>3</b>: $spacer * 1</li>
                    <li><b>4</b>: $spacer * 1.5</li>
                    <li><b>5</b>: $spacer * 2</li>
                    <li><b>6</b>: $spacer * 3</li>
                    <li><b>auto</b>: auto margin</li>
                </ul>

                <h5>Breakpoint</h5>
                <p>Breakpoints define how the spacing should be depending on the screen size.</p>
                <ul>
                    <li><b>sm</b>: small screens e.g. phones</li>
                    <li><b>md</b>: medium screens e.g. tablets</li>
                    <li><b>lg</b>: large screens e.g. notebooks</li>
                    <li><b>xl</b>: larger screens .e.g monitors</li>
                </ul>
            </div>
        </div>

        <div class="p-col-12 p-md-6">
            <div class="card">
                <h5>Use Case 1</h5>
                <p>Spacing is a handy utility when elements wrap when screen size get smaller. In example below, when buttons wrap
                    they are displayed on top of each other whereas with spacing this issue can easily be resolved.
                </p>

                <h6>Without Spacing</h6>
                <Button type="button" label="Button 1" style="width:20rem" />
                <Button type="button" label="Button 2" style="width:20rem" />

                <h6>With Spacing</h6>
                <Button type="button" label="Button 1" style="width:20rem" class="p-mr-2 p-mb-2" />
                <Button type="button" label="Button 2" style="width:20rem" class="p-mb-2"/>
            </div>
        </div>

        <div class="p-col-12 p-md-6">
            <div class="card">
                <h5>Use Case 2</h5>
                <p>Spacing utilities also work seamlessly with responsive PrimeFlex grid utilty. Example below demonstrates a case where on a smaller screen inputs receive a margin to position themselves
                    separately in stacked mode, reduce the dimension of the window to view the difference.
                </p>

                <h6>Without Spacing</h6>
                <div class="p-grid p-formgrid p-fluid">
                    <div class="p-col-12 p-lg-4">
                        <InputText />
                    </div>
                    <div class="p-col-12 p-lg-4">
                        <InputText />
                    </div>
                    <div class="p-col-12 p-lg-4">
                        <InputText />
                    </div>
                </div>

                <h6>With Spacing</h6>
                <div class="p-grid p-formgrid p-fluid">
                    <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
                        <InputText />
                    </div>
                    <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
                        <InputText />
                    </div>
                    <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
                        <InputText />
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
.demo-container {
    border: 1px solid #dee2e6;
}
</style>
