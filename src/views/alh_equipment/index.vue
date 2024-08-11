<template>
    <div class="app-container">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="功能描述" name="first">
                <FunctionDescription v-if="activeName === 'first'" ref="FunctionDescription" />
            </el-tab-pane>
            <el-tab-pane label="规则说明" name="second">
                <Rule ref="Rule"  v-if="activeName === 'second'"/>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import FunctionDescription from './functionDescription/index.vue'
import Rule from './ruleView/index.vue'
export default {
    data() {
        return {
            activeName: 'first'
        }
    },
    components: {
        FunctionDescription,
        Rule
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event)
        }
    }
}
</script>

<style lang="scss" scoped></style>