<template>
  <div class="l-table">
    <!-- 表格 -->
    <el-table
      :data="tableData"
      style="width: 100%"
      :header-cell-style="{ textAlign: 'center' }"
      :cell-style="{ textAlign: 'center' }"
      :border="true"
      height="400"
    >
      <el-table-column label="编号" width="60" v-if="pageType <= 3">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="习题类型" width="80" v-if="pageType <= 3">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.qType }}</span>
        </template>
      </el-table-column>
      <el-table-column label="习题信息" width="240" v-if="pageType <= 3">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.information }}</span>
        </template>
      </el-table-column>
      <el-table-column label="时间" width="140" v-if="pageType <= 3">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.time }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="能力层级"
        width="150"
        v-if="pageType == 2 || pageType == 3"
      >
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.level }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="知识点"
        width="150"
        v-if="pageType == 2 || pageType == 3"
      >
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.point }}</span>
        </template>
      </el-table-column>
      <el-table-column label="题干" min-width="100%" v-if="pageType <= 3">
        <template slot-scope="scope">
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="详细内容" :name="scope.row.id">
              <span style="margin-left: 10px">{{ scope.row.content }}</span>
            </el-collapse-item>
          </el-collapse>
        </template>
      </el-table-column>
      <el-table-column label="是否标注" width="80" v-if="pageType == 0">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{
            scope.row.isMark === true ? "√" : "X"
          }}</span>
        </template>
      </el-table-column>
      <el-table-column label="是否审核" width="80" v-if="pageType == 0">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{
            scope.row.isChecker === true ? "√" : "X"
          }}</span>
        </template>
      </el-table-column>
      <el-table-column label="审核员" width="80" v-if="pageType == 3">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.isChecker }}</span>
        </template>
      </el-table-column>
      <el-table-column label="编号" width="80" v-if="pageType == 6">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="测试时间" width="150" v-if="pageType == 6">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.time }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="学号"
        width="200"
        v-if="pageType == 4 || pageType == 5"
      >
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="姓名"
        width="100"
        v-if="pageType == 4 || pageType == 5"
      >
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="年级"
        width="120"
        v-if="pageType == 4 || pageType == 6"
      >
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.grade }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="专业"
        width="200"
        v-if="pageType == 4 || pageType == 6"
      >
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.major }}</span>
        </template>
      </el-table-column>
      <el-table-column label="试卷id" width="100" v-if="pageType == 4">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.eid }}</span>
        </template>
      </el-table-column>
      <el-table-column label="题号" width="100" v-if="pageType == 5">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.qid }}</span>
        </template>
      </el-table-column>
      <el-table-column label="题目类型" width="100" v-if="pageType == 5">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.type }}</span>
        </template>
      </el-table-column>
      <el-table-column label="题干" min-width="100%" v-if="pageType == 5">
        <template slot-scope="scope">
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="详细内容" :name="scope.row.qid">
              <span style="margin-left: 10px">{{ scope.row.content }}</span>
            </el-collapse-item>
          </el-collapse>
        </template>
      </el-table-column>
      <el-table-column
        label="科目"
        min-width="100%"
        v-if="pageType == 4 || pageType == 6"
      >
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.subject }}</span>
        </template>
      </el-table-column>
      <el-table-column label="试卷备注" width="200" v-if="pageType == 6">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.details }}</span>
        </template>
      </el-table-column>
      <el-table-column label="总成绩" width="100" v-if="pageType == 4">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.score }}</span>
        </template>
      </el-table-column>
      <el-table-column label="分数" width="100" v-if="pageType == 5">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.score }}</span>
        </template>
      </el-table-column>
      <el-table-column label="所属试卷" width="150" v-if="pageType == 5">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="作答详情" width="100" v-if="pageType == 5">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.details }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作" width="150" v-if="pageType != 3">
        <template slot-scope="scope">
          <div class="l-operate">
            <el-button
              type="primary"
              size="mini"
              @click="handleMark(scope.row)"
              v-if="pageType == 1"
              >标注</el-button
            >
            <el-button
              type="primary"
              size="mini"
              @click="handleMark(scope.row)"
              v-if="pageType >= 4"
              >查看</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              v-if="pageType <= 1 || pageType >= 4"
              >删除</el-button
            >
            <el-button
              type="success"
              size="mini"
              @click="handleSuccess(scope.$index, scope.row)"
              v-if="pageType == 2"
              >通过</el-button
            >
            <el-button
              type="warning"
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
              v-if="pageType == 2"
              >修改</el-button
            >
          </div>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      @current-change="changePage"
    >
    </el-pagination>
  </div>
</template>

<script>
import {
  getAllQuestions,
  deleteQuestion,
  checkQuestion,
  getExamRecord,
  getAnswerRecord,
  getAllExams,
} from "../utils/api";

import { mapState, mapActions } from "vuex";
export default {
  name: "MyTable",
  props: ["pageType"], //0--所有试题，1--未标注，2--待审核，3--审核通过, 4--测试记录，5--答题记录，6--查看试卷
  computed: {
    //通过计算属性将Vuex中的state进行简写(this.$store.state.pageStore.currentPage-->currentPage)
    ...mapState("pageStore", ["currentPage"]),
    //通过计算属性将Vuex中的state进行简写(this.$store.state.selectStore.qType-->qType)
    ...mapState("selectStore", ["qType"]),
  },
  watch: {
    qType(newData) {
      getAllQuestions({
        page: this.currentPage,
        limit: 10,
        category: String(newData),
      }).then((value) => {
        let { data, count } = value;
        this.tableData = data;
        this.total = count;
      });
    },
  },
  data() {
    return {
      activeName: "", //题干当前激活的面板，支持手风琴模式
      tableData: [], //表格内容
      total: 0, //题的数量
    };
  },
  methods: {
    // 将vuex中的actions和mutations简写
    ...mapActions("pageStore", { setPage: "changePage" }), //pageStore下的actions中的chanePage，简写成setPage方法
    // 标注事件
    handleMark(row) {
      console.log(row);
      this.$router.push({
        path: "/home/exercisemark",
        query: {
          information: row.information,
          qType: row.qType,
          time: row.time,
          content: row.content,
          id: row.id,
        },
      });
    },
    // 删除事件
    handleDelete(index, row) {
      if (this.pageType == 0 || this.pageType == 1) {
        deleteQuestion({
          id: row.id,
        }).then(() => {
          this.getPageContent(this.currentPage); //删除题之后，刷新当前页内容
        });
      }
    },
    // 修改事件
    handleEdit(index, row) {
      console.log(index, row);
    },
    // 通过事件
    handleSuccess(index, row) {
      console.log(index, row);
      checkQuestion({
        id: row.id,
      }).then(() => {
        this.getPageContent(this.currentPage); //通过题之后，刷新当前页内容
      });
    },
    // 获取当前页内容
    getPageContent(page) {
      // 所有试题的内容
      if (this.pageType == 0) {
        getAllQuestions({
          page,
          limit: 10,
        }).then((value) => {
          let { data, count } = value;
          this.tableData = data;
          this.total = count;
        });
      }
      // 未标注的内容
      if (this.pageType == 1) {
        getAllQuestions({
          page,
          limit: 10,
          isMarked: false,
          isChecked: false,
        }).then((value) => {
          let { data, count } = value;
          this.tableData = data;
          this.total = count;
        });
      }
      // 待审核的内容
      if (this.pageType == 2) {
        getAllQuestions({
          page,
          limit: 10,
          isMarked: true,
          isChecked: false,
        }).then((value) => {
          let { data, count } = value;
          this.tableData = data;
          this.total = count;
        });
      }
      // 审核通过的内容
      if (this.pageType == 3) {
        getAllQuestions({
          page,
          limit: 10,
          isMarked: true,
          isChecked: true,
        }).then((value) => {
          let { data, count } = value;
          this.tableData = data;
          this.total = count;
        });
      }
      // 测试记录的内容
      if (this.pageType == 4) {
        getExamRecord({
          page,
          limit: 10,
        }).then((value) => {
          let { data, count } = value;
          this.tableData = data;
          this.total = count;
        });
      }
      // 答题记录的内容
      if (this.pageType == 5) {
        getAnswerRecord({
          page,
          limit: 10,
        }).then((value) => {
          let { data, count } = value;
          this.tableData = data;
          this.total = count;
        });
      }
      // 查看试卷的内容
      if (this.pageType == 6) {
        getAllExams({
          page,
          limit: 10,
        }).then((value) => {
          let { data, count } = value;
          this.tableData = data;
          this.total = count;
        });
      }
    },
    // 改变页码触发事件
    changePage(page) {
      this.getPageContent(page);
      this.setPage(page); //改变Vuex中的currentPage，其他组件可以获取到当前页
    },
  },

  // 在可以获取到data数据时加载
  created() {
    this.getPageContent(1);
    this.setPage(1); //改变Vuex中的currentPage，其他组件可以获取到当前页
    console.log(this.qType);
  },

  // 页面更新
  beforeUpdate() {
    console.log("ahah");
    console.log(this.qType);
  },
  // 页面更新
  updated() {
    console.log("ahah");
  },
};
</script>

<style scoped>
.l-operate {
  display: flex;
  justify-content: center;
}
.l-table {
  margin-top: 50px;
}
</style>