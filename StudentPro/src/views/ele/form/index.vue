<template>
  <div class="nonglin">
    <el-form :model="form" inline size="small" label-width="60px">
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
    <el-button-group style="margin:5px 0">
      <el-button type="primary" size="small" icon="el-icon-plus" @click="add">新增</el-button>
      <el-button type="primary" size="small" icon="el-icon-edit" @click="edit">修改</el-button>
      <el-button type="primary" size="small" icon="el-icon-delete" @click="del">删除</el-button>
    </el-button-group>
    <el-table
      ref="table"
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        align="center"
        type="selection"
        label=""
        width="60">
      </el-table-column>
      <el-table-column
        align="center"
        prop="name"
        label="名称"
        width="180">
      </el-table-column>
      <el-table-column
        align="center"
        prop="diZhi"
        label="地址"
        width="180">
      </el-table-column>
      <el-table-column
        align="center"
        prop="jianJie"
        label="简介">
      </el-table-column>
      <el-table-column
        align="center"
        prop="jiJie"
        label="季节">
      </el-table-column>
      <el-table-column
        align="center"
        prop="teDian"
        label="特点">
      </el-table-column>
    </el-table>
    <el-dialog
      title="编辑"
      :visible.sync="dialogVisible"
      width="30%"
      :append-to-body='true'
      >
      <el-form ref='editForm' :model="formAdd" inline size="small" :rules='rules' label-width="60px">
        <el-form-item label="名称" prop="name" >
          <el-input v-model="formAdd.name"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="diZhi" >
          <el-input v-model="formAdd.diZhi"></el-input>
        </el-form-item>
        <el-form-item label="简介" prop="jianJie" >
          <el-input v-model="formAdd.jianJie"></el-input>
        </el-form-item>
        <el-form-item label="季节" prop="jiJie" >
          <el-input v-model="formAdd.jiJie"></el-input>
        </el-form-item>
        <el-form-item label="特点" prop="teDian" >
          <el-input v-model="formAdd.teDian"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </span>
    </el-dialog>
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
      dialogVisible:false,
      form: {
        name: '',
        diZhi: '',
        jianJie:'',
        jiJie:'', 
        teDian:'',
      },
      formAdd: {
        name: '',
        diZhi: '',
        jianJie:'',
        jiJie:'', 
        teDian:'',
      },
      tableData:[{
        name: '稻香村',
        diZhi: '北京',
        jianJie:'特产',
        jiJie:'All', 
        teDian:'国宝',
      },{
        name: '二锅头',
        diZhi: '红阳厂',
        jianJie:'国粹',
        jiJie:'All', 
        teDian:'上头',
      },{
        name: '史丹利',
        diZhi: '田野',
        jianJie:'加大加粗',
        jiJie:'SUMMER', 
        teDian:'咦~',
      },],
      rules: {
        // name: [
        //   {required: false , trigger: 'change', validator: RegTest(/^[\u4e00-\u9fa5a-zA-Z]+$/)}
        // ],
        // diZhi: [
        //   {required: false , trigger: 'change', validator: RegTest(/^(-?\d+)(\.\d+)?$/)}
        // ],
        // jianJie: [
        //   {required: false , trigger: 'blur', validator: RegTest(/^(\d{4}-|\d{3}-)?(\d{8}|\d{7})$/)}
        // ],
        // jiJie: [
        //   {required: false , trigger: 'blur', validator: RegTest(/^1\d{10}$/)}
        // ],
        // teDian: [
        //   {required: false , trigger: 'blur', validator: RegTest(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)}
        // ],
      }
    }
  },
  mounted () {
    // this.getList();
  },
  methods: {
    getList(){
      this.$api({
        method: 'post',
        url: '/apis/user/loging',
        data: this.formAdd
      }).then((res)=>{
        console.log(res,'getList');
        this.tableData = res.data.data
      })
    },
    add() {
      this.dialogVisible = true
      this.formAdd= {
        name: '',
        diZhi: '',
        jianJie:'',
        jiJie:'', 
        teDian:'',
      },
      this.actionType = 'add'
    },
    edit(){
      if(!this.$refs['table'].selection || this.$refs['table'].selection.length<1){
        this.$message.warning('请先选择一条数据进行修改！')
      } else {
        this.dialogVisible = true
        this.actionType = 'edit'
        this.formAdd = this.$refs['table'].selection[0]
      }
    },
    del(){
      if(!this.$refs['table'].selection || this.$refs['table'].selection.length<1){
        this.$message.warning('请先选择一条数据进行修改！')
      } else {
        this.$api({
          method: 'post',
          url: '/apis/user/loging',
          data: this.formAdd
        }).then((res)=>{
          console.log(res,'ADD');
          this.getList()
        })
      }
    },
    submitForm(){
      this.$refs['editForm'].validate(valid=>{
        if(valid){
          if(thi.actionType === 'add'){
            this.$api({
              method: 'post',
              url: '/apis/user/loging',
              data: this.formAdd
            }).then((res)=>{
              console.log(res,'ADD');
              this.getList()
            })
          } else {
            this.$api({
              method: 'post',
              url: '/apis/user/loging',
              data: this.formAdd
            }).then((res)=>{
              console.log(res,'ADD');
              this.getList()
            })
          }
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.nonglin{
  width: 100%;
  height: 100%;
  padding:10px 20px;
  background: #fff;
}
</style>