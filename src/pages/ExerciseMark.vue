<template>
  <el-table :data="tableData" style="width: 100%" :border="true">
    <el-table-column
      prop="information"
      label="习题信息"
      width="240"
    ></el-table-column>
    <el-table-column prop="qType" label="习题类型" width="100">
    </el-table-column>
    <el-table-column prop="time" label="时间" width="100"> </el-table-column>
    <el-table-column prop="content" label="题干" min-width="100%">
    </el-table-column>
  </el-table>
</template>

<script>
import { getRandomUnmarkedQuestion } from '../utils/api'

export default {
  props: ["information", "qType", "time", "content"],
  data() {
    return {
      tableData: [
        {
          information: this.information,
          qType: this.qType,
          time: this.time,
          content: this.content,
        },
      ],
    };
  },
  created() {
    // 如果信息不为undefined，说明是点击标注进入到该页面，那么不调用该接口
    if (!this.information) {
      getRandomUnmarkedQuestion().then(value=>{
        let {information, qType, time, content} = value.data[0]
        this.tableData[0].information = information;
        this.tableData[0].qType = qType;
        this.tableData[0].time = time;
        this.tableData[0].content = content;
      })
    }
  },
};
</script>

<style>
</style>