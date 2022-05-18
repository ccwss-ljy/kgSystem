<template>
  <div>
    <MyHeader
      :options="options"
      :level-options="levelOptions"
      phValue1="请选择年级"
      phValue2="请选择题目类型"
      phValue3="请输入学生姓名"
    />
    <MyTable page-type="4" />
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";
import MyTable from "@/components/MyTable.vue";

export default {
  components: {
    MyHeader,
    MyTable,
  },
  data() {
    return {
      options: [
        {
          value: "2019",
          label: "2019级",
        },
        {
          value: "2018",
          label: "2018级",
        },
        {
          value: "2017",
          label: "2017级",
        },
      ],
      levelOptions: [
        {
          value: "1",
          label: "编程题",
        },
        {
          value: "2",
          label: "选择题",
        },
        {
          value: "3",
          label: "填空题",
        },
        {
          value: "4",
          label: "简答题",
        },
      ],
    };
  },
};
</script>

<style>
</style>