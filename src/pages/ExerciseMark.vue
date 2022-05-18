<template>
  <el-table :data="tableData" style="width: 100%" :border="true">
    <el-table-column prop="information" label="习题信息" width="240"></el-table-column>
    <el-table-column prop="qType" label="习题类型" width="100"> </el-table-column>
    <el-table-column prop="time" label="时间" width="100"> </el-table-column>
    <el-table-column prop="content" label="题干" min-width="100%"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  props:['information', 'qType', 'time', 'content'],
  data() {
    console.log(this)
    return {
      tableData: [
        {
          information: this.information,
          qType: this.qType,
          time: this.time,
          content: this.content
        }
      ],
    };
  },
  mounted(){
    console.log(this.$route)
  }
};
</script>

<style>
</style>