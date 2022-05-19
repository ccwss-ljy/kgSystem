<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%; margin-bottom: 20px"
      :border="true"
    >
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
    <MyHeader
      :options="options"
      phValue1="请选择能力层级"
      phValue3="请输入题干"
    />
    <el-card
      style="height: 340px; width: 100%; margin: 30px 0 20px 0; overflow: auto"
    >
      <el-tree :data="data" show-checkbox accordion @check-change="insertId" :check-strictly="true"/>
    </el-card>
    <div class="buttonBox">
      <el-button type="primary" @click="nextQuestion">下一题</el-button>
      <el-button type="primary" @click="submit">提交&下一题</el-button>
    </div>
  </div>
</template>

<script>
import { getRandomUnmarkedQuestion, getKnowledgePointTree, knowledgePointMark } from "../utils/api";
import MyHeader from "@/components/MyHeader.vue";

export default {
  components: {
    MyHeader,
  },
  props: ["information", "qType", "time", "content", "id"],
  data() {
    return {
      // 表格内容
      tableData: [
        {
          information: this.information,
          qType: this.qType,
          time: this.time,
          content: this.content,
        },
      ],
      iD:0,
      // 选择框内容
      options: [
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

      // 知识点内容
      data: [],

      // 选中的知识点
      idList:[]
    };
  },
  methods: {
    nextQuestion() {
      getRandomUnmarkedQuestion().then((value) => {
        let { information, qType, time, content,id } = value.data[0];
        this.tableData[0].information = information;
        this.tableData[0].qType = qType;
        this.tableData[0].time = time;
        this.tableData[0].content = content;
        this.iD = id;
      });
    },
    insertId(node, checked){
      checked ? this.idList.push(node.id) : this.idList.splice(this.idList.indexOf(node.id), 1) 
      if(this.idList.length > 3){
        console.log('不能选了你超了')
      }
    },
    submit(){
      knowledgePointMark({
        level:1,
        markData:String(this.idList),
        qid:this.id || this.iD
      }).then(v=>{
        console.log(v)
        return getRandomUnmarkedQuestion()
      })
      .then((value)=>{
        let { information, qType, time, content,id } = value.data[0];
        this.tableData[0].information = information;
        this.tableData[0].qType = qType;
        this.tableData[0].time = time;
        this.tableData[0].content = content;
        this.iD = id;
      })
    }
  },
  created() {
    // 如果信息不为undefined，说明是点击标注进入到该页面，那么不调用该接口
    if (!this.information) {
      getRandomUnmarkedQuestion().then((value) => {
        let { information, qType, time, content, id } = value.data[0];
        this.tableData[0].information = information;
        this.tableData[0].qType = qType;
        this.tableData[0].time = time;
        this.tableData[0].content = content;
        this.iD = id;
      });
    }

    // 获取知识点结构
    getKnowledgePointTree().then((oldData) => {
      let newStr = JSON.stringify(oldData);
      // 转换后端的数据字段，转换成前端组件渲染需要的字段
      newStr = newStr.replace(/title/g, "label");
      newStr = newStr.replace(/value/g, "id");
      newStr = newStr.replace(/data/g, "children");
      const newData = JSON.parse(newStr);
      this.data = newData;
    });
  },
};
</script>

<style>
.buttonBox {
  position: absolute;
  right: 50px;
}
</style>