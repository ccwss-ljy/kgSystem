<template>
  <div>
    <MyHeader
      :options="options"
      :level-options="levelOptions"
      phValue1="请选择习题类型"
      phValue2="请选择能力层级"
      phValue3="请输入题干"
    />
    <MyTable page-type="0" />
  </div>
</template>

<script>
import MyTable from "../components/MyTable.vue";
import MyHeader from "@/components/MyHeader.vue";

export default {
  components: {
    MyTable,
    MyHeader
  },
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "选择题",
        },
        {
          value: "选项2",
          label: "填空题",
        },
        {
          value: "选项3",
          label: "判断题",
        },
        {
          value: "选项4",
          label: "解答题",
        },
        {
          value: "选项5",
          label: "读程序题",
        },
        {
          value: "选项6",
          label: "编程题",
        },
      ],
      levelOptions: [
        {
          value: "level1",
          label: "1.程序设计基本概念",
        },
        {
          value: "level2",
          label: "2.基本元素和表达式",
        },
        {
          value: "level3",
          label: "3.选择结构",
        },
        {
          value: "level4",
          label: "4.循环结构",
        },
        {
          value: "level5",
          label: "5.数组和字符串",
        },
        {
          value: "level6",
          label: "6.函数和初级模块化程序设计",
        },
        {
          value: "level7",
          label: "7.指针及函数参数进阶",
        },
        {
          value: "level8",
          label: "8.指针和数组进阶",
        },
        {
          value: "level9",
          label: "9.模块化程序设计进阶",
        },
        {
          value: "level10",
          label: "10.结构体和链表",
        },
        {
          value: "level11",
          label: "11.文件",
        },
        {
          value: "level12",
          label: "12.较复杂问题的计算思维",
        },
        {
          value: "level13",
          label: "13.需求分析和简单系统设计",
        },
        {
          value: "level14",
          label: "14.详细设计和编程实现",
        },
        {
          value: "level15",
          label: "15.调试、测试和文档",
        },
      ],
    };
  },
};
</script>

<style>
</style>