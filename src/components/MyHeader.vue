<template>
  <div class="l-Header">
    <el-select v-model="typeValue" :placeholder="phValue1">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <el-select
      v-model="levelValue"
      :placeholder="phValue2"
      style="margin-left: -430px"
      v-if="pageType == 2 || pageType == 5 || pageType == 6"
    >
      <el-option
        v-for="item in levelOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <div class="l-input">
      <el-input v-model="input" :placeholder="phValue3"></el-input>
      <el-button type="primary">搜索</el-button>
    </div>
  </div>
</template>

<script>
export default {
  //options--第一个选择栏内容，levelOptions--第二个选择内容，phvalue1--第一个选择栏默认文字
  //phvalue2--第二个选择栏默认文字，phvalue3--第三个选择栏默认文字
  props: ["options", "levelOptions", "phValue1", "phValue2", "phValue3","pageType"], 
  data() {
    return {
      typeValue: "",
      levelValue: "",
      input: "",
    };
  },
};
</script>

<style>
.l-Header {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.l-input {
  display: flex;
}
</style>