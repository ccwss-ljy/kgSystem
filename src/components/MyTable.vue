<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      :header-cell-style="{ textAlign: 'center' }"
      :border="true"
      height="400"
    >
      <el-table-column label="编号" width="50">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="习题类型" width="80">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.qType }}</span>
        </template>
      </el-table-column>
      <el-table-column label="习题信息" width="240">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.information }}</span>
        </template>
      </el-table-column>
      <el-table-column label="时间" width="140">
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
      <el-table-column label="题干" min-width="100%">
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
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="是否审核" width="80" v-if="pageType == 0">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="审核员" width="80" v-if="pageType == 3">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
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
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              v-if="pageType == 0 || pageType == 1"
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
    <el-pagination background layout="prev, pager, next" :total="100">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "MyTable",
  props: ["pageType"], //0--所有试题，1--未标注，2--待审核，3--审核通过
  data() {
    return {
      activeName: "", //题干当前激活的面板，支持手风琴模式
      tableData: [
        {
          content:
            "这道超级简单的题目没有任何输入。你只需要在第一行中输出程序员钦定名言“Hello World”，并且在第二行中输出更新版的“Hello New World”就可以了。",
          id: 1,
          information: "2018级--程序设计基础--随堂测试",
          isChecker: true,
          isMark: true,
          level: "基本元素和表达式",
          point: " 字符串数据输出",
          qType: "编程题",
          time: "2018-12-25",
        },
        {
          content:
            " World”，并且在第二行中输出更新版的“Hello New World”就可以了。",
          id: 2,
          information: "2018级--程序设计基础--随堂测试",
          isChecker: true,
          isMark: true,
          level: "基本元素和表达式",
          point: " 字符串数据输出",
          qType: "编程题",
          time: "2018-12-25",
        },
        {
          content:
            "这道超级简单的题目没有任何输入。你只需要在第一行中输出程序员钦定名言“Hello World”，并且在第二行中输出更新版的“Hello New World”就可以了。",
          id: 3,
          information: "2018级--程序设计基础--随堂测试",
          isChecker: true,
          isMark: true,
          level: "基本元素和表达式",
          point: " 字符串数据输出",
          qType: "编程题",
          time: "2018-12-25",
        },
        {
          content:
            "这道超级简单的题目没有任何输入。你只需要在第一行中输出程序员钦定名言“Hello World”，并且在第二行中输出更新版的“Hello New World”就可以了。",
          id: 4,
          information: "2018级--程序设计基础--随堂测试",
          isChecker: true,
          isMark: true,
          level: "基本元素和表达式",
          point: " 字符串数据输出",
          qType: "编程题",
          time: "2018-12-25",
        },
        {
          content:
            "这道超级简单的题目没有任何输入。你只需要在第一行中输出程序员钦定名言“Hello World”，并且在第二行中输出更新版的“Hello New World”就可以了。",
          id: 5,
          information: "2018级--程序设计基础--随堂测试",
          isChecker: true,
          isMark: true,
          level: "基本元素和表达式",
          point: " 字符串数据输出",
          qType: "编程题",
          time: "2018-12-25",
        },
        {
          content:
            "这道超级简单的题目没有任何输入。你只需要在第一行中输出程序员钦定名言“Hello World”，并且在第二行中输出更新版的“Hello New World”就可以了。",
          id: 6,
          information: "2018级--程序设计基础--随堂测试",
          isChecker: true,
          isMark: true,
          level: "基本元素和表达式",
          point: " 字符串数据输出",
          qType: "编程题",
          time: "2018-12-25",
        },
      ],
    };
  },
  methods: {
    // 标注事件
    handleMark(row) {
      console.log(row)
      this.$router.push({
        path:'/home/exercisemark',
        query:{
          information:row.information,
          qType:row.qType,
          time:row.time,
          content:row.content
        }
      })
    },
    // 删除事件
    handleDelete(index, row) {
      console.log(index, row);
    },
    // 修改事件
    handleEdit(index, row) {
      console.log(index, row);
      
    },
    // 通过事件
    handleSuccess(index, row) {
      console.log(index, row);
      
    },
  },
};
</script>

<style scoped>
.l-operate {
  display: flex;
  justify-content: center;
}
</style>