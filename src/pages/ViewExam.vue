<template>
  <div>
    <MyHeader
      :options="options"
      :level-options="levelOptions"
      phValue1="请选择年级"
      phValue2="请选择试卷类型"
      phValue3="请输入试卷名"
      page-type="6"
    />
    <MyTable page-type="6"/>
  </div>
</template>

<script>
import MyTable from "@/components/MyTable.vue";
import MyHeader from "@/components/MyHeader.vue";
export default {
  components: {
    MyTable,
    MyHeader,
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
          label: "期末试卷",
        },
        {
          value: "2",
          label: "期中试卷",
        },
        {
          value: "3",
          label: "随堂测试",
        },
        {
          value: "4",
          label: "章节测试",
        },
      ],
    };
  },
};
</script>

<style>
</style>