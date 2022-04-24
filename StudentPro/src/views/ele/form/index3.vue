<template>
  <div>
    <el-form :model="form" inline size="small" :rules='rules'>
      <el-form-item label="名称" prop="name" >
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="diZhi" >
        <el-input v-model="form.diZhi"></el-input>
      </el-form-item>
      <el-form-item label="简介" prop="jianJie" >
        <el-input v-model="form.jianJie"></el-input>
      </el-form-item>
      <el-form-item label="季节" prop="jiJie" >
        <el-input v-model="form.jiJie"></el-input>
      </el-form-item>
      <el-form-item label="特点" prop="teDian" >
        <el-input v-model="form.teDian"></el-input>
      </el-form-item>
    </el-form>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="name"
        label="名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="diZhi"
        label="地址"
        width="180">
      </el-table-column>
      <el-table-column
        prop="jianJie"
        label="简介">
      </el-table-column>
      <el-table-column
        prop="jiJie"
        label="季节">
      </el-table-column>
      <el-table-column
        prop="teDian"
        label="特点">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data(){
     const RegTest = (reg) =>(rule,value, callBack) => {
       console.log(rule,value,1111);
       !value && callBack(new Error('不能为空！'))
        || (reg.test(value) && callBack())
        || callBack(new Error('内容不合法，请修改！'))
     }
    return {
      form: {
        name: '',
        diZhi: '',
        jianJie:'',
        jiJie:'', 
        teDian:'',
      },
      tableData:[],
      rules: {
        name: [
          {required: false , trigger: 'change', validator: RegTest(/^[\u4e00-\u9fa5a-zA-Z]+$/)}
        ],
        diZhi: [
          {required: false , trigger: 'change', validator: RegTest(/^(-?\d+)(\.\d+)?$/)}
        ],
        jianJie: [
          {required: false , trigger: 'blur', validator: RegTest(/^(\d{4}-|\d{3}-)?(\d{8}|\d{7})$/)}
        ],
        jiJie: [
          {required: false , trigger: 'blur', validator: RegTest(/^1\d{10}$/)}
        ],
        teDian: [
          {required: false , trigger: 'blur', validator: RegTest(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)}
        ],
      }
    }
  },
  methods: {
    name() {
      
    }
  },
}
</script>

<style>

</style>