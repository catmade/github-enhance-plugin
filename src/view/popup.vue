<template>
    <div class="main_app">
        <div style="display: flex; align-items: center; justify-content: space-between">
            <div>Sticky Header</div>
            <el-switch v-model="headerSticky" @change="set(headerStickyTag, headerSticky)" active-color="#13ce66"/>
        </div>
        <div style="display: flex; align-items: center; justify-content: space-between">
            <div>Sticky Repository Header</div>
            <el-switch v-model="repoHeaderSticky" @change="set(repoHeaderStickyTag, repoHeaderSticky)"
                       active-color="#13ce66"/>
        </div>
    </div>
</template>

<script>
import {config} from "@/entry/common";

let app = {
    name: 'popup-view',
    data() {
        return {
            headerSticky: false,
            headerStickyTag: config.headerStickyTag,
            repoHeaderSticky: false,
            repoHeaderStickyTag: config.repoHeaderStickyTag,
        }
    },
    methods: {
        set(k, v) {
            config.set(k, v);
        },
    },
    async created() {
        this.headerSticky = await config.get(this.headerStickyTag)
        this.repoHeaderSticky = await config.get(this.repoHeaderStickyTag)
    }
}

export default app

</script>

<style>
.main_app {
    height: 150px;
    width: 250px;
    background: transparent;
    margin: 10px 10px 0 10px;
}
</style>
