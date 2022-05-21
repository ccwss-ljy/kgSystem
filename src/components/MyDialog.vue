<template>
  <el-dialog
    title="导入试题"
    :visible="dialogVisible"
    width="30%"
  >
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="科目">
        <el-select v-model="form.subject" placeholder="请选择科目">
          <el-option
            v-for="item in subjectList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="考试时间">
        <el-date-picker v-model="form.date" type="date" placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="年级">
        <el-select v-model="form.grade" placeholder="请选择年级">
          <el-option
            v-for="item in gradeList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="专业">
        <el-input v-model="form.major" placeholder="请输入专业" style="width:220px"></el-input>
      </el-form-item>
      <el-form-item label="试题类型">
        <el-select v-model="form.examType" placeholder="请选择试题类型">
          <el-option
            v-for="item in examList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="form.tip" style="width:220px"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">上传文件</el-button>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button v-on:click="$emit('getDialogVisible', false)">取 消</el-button>
      <el-button type="primary" v-on:click="$emit('getDialogVisible', false)">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
    props:["dialogVisible"],
  data() {
    return {
      form: {
        //  科目值
        subject: "",
        // 日期
        date: "",
        // 年级值
        grade: "",
        // 专业
        major: "",
        // 试题类型值
        examType: "",
        // 备注
        tip:""
      },
      //   科目类型
      subjectList: [
        {
          value: 1,
          label: "程序设计基础",
        },
        {
          value: 2,
          label: "C++",
        },
      ],
      //   年级类型
      gradeList: [
        {
          value: 2019,
          label: "2019级",
        },
        {
          value: 2018,
          label: "2018级",
        },
        {
          value: 2017,
          label: "2017级",
        },
      ],
      //   试卷类型
      examList: [
        {
          value: 1,
          label: "随堂测验",
        },
        {
          value: 2,
          label: "期中考试",
        },
        {
          value: 3,
          label: "期末考试",
        },
      ],
    };
  },
};
</script>

<style>
</style>