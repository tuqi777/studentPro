<template>
  <div>
    <el-form :model="form" inline size="small" label-width="100px">
      <el-form-item label="名称" prop="name" >
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="农产品" prop="nongCp" >
        <el-input v-model="form.nongCp"></el-input>
      </el-form-item>
      <el-form-item label="发货地" prop="faHuoDi" >
        <el-input v-model="form.faHuoDi"></el-input>
      </el-form-item>
      <el-form-item label="收货地" prop="shouHuoDi" >
        <el-input v-model="form.shouHuoDi"></el-input>
      </el-form-item>
      <el-form-item label="发货人" prop="faHuoRen" >
        <el-input v-model="form.faHuoRen"></el-input>
      </el-form-item>
      <el-form-item label="收货人" prop="shouHuoRen" >
        <el-input v-model="form.shouHuoRen"></el-input>
      </el-form-item>
      <el-form-item label="开始时间" prop="kaiShiShiJian" >
        <el-input v-model="form.kaiShiShiJian"></el-input>
      </el-form-item>
      <el-form-item label="结束时间" prop="jieShuShiJian" >
        <el-input v-model="form.jieShuShiJian"></el-input>
      </el-form-item>
      <el-form-item label="状态" prop="state" >
        <el-input v-model="form.state"></el-input>
      </el-form-item>
      <el-form-item label="备注" prop="beiZhu" >
        <el-input v-model="form.beiZhu"></el-input>
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
        prop="nongCp"
        label="农产品"
        width="180">
      </el-table-column>
      <el-table-column
        align="center"
        prop="faHuoDi"
        label="发货地">
      </el-table-column>
      <el-table-column
        align="center"
        prop="shouHuoDi"
        label="收货地">
      </el-table-column>
      <el-table-column
        align="center"
        prop="faHuoRen"
        label="发货人">
      </el-table-column>
      <el-table-column
        align="center"
        prop="shouHuoRen"
        label="收货人">
      </el-table-column>
      <el-table-column
        align="center"
        prop="kaiShiShiJian"
        label="开始时间">
      </el-table-column>
      <el-table-column
        align="center"
        prop="jieShuShiJian"
        label="结束时间">
      </el-table-column>
      <el-table-column
        align="center"
        prop="state"
        label="状态">
      </el-table-column>
      <el-table-column
        align="center"
        prop="beiZhu"
        label="备注">
      </el-table-column>
    </el-table>
    <el-dialog
      title="编辑"
      :visible.sync="dialogVisible"
      width="30%"
      :append-to-body='true'
      >
      <el-form :model="form" inline size="small" :rules='rules' label-width="100px">
        <el-form-item label="名称" prop="name" >
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="农产品" prop="nongCp" >
          <el-input v-model="form.nongCp"></el-input>
        </el-form-item>
        <el-form-item label="发货地" prop="faHuoDi" >
          <el-input v-model="form.faHuoDi"></el-input>
        </el-form-item>
        <el-form-item label="收货地" prop="shouHuoDi" >
          <el-input v-model="form.shouHuoDi"></el-input>
        </el-form-item>
        <el-form-item label="发货人" prop="faHuoRen" >
          <el-input v-model="form.faHuoRen"></el-input>
        </el-form-item>
        <el-form-item label="收货人" prop="shouHuoRen" >
          <el-input v-model="form.shouHuoRen"></el-input>
        </el-form-item>
        <el-form-item label="开始时间" prop="kaiShiShiJian" >
          <el-input v-model="form.kaiShiShiJian"></el-input>
        </el-form-item>
        <el-form-item label="结束时间" prop="jieShuShiJian" >
          <el-input v-model="form.jieShuShiJian"></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="state" >
          <el-input v-model="form.state"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="beiZhu" >
          <el-input v-model="form.beiZhu"></el-input>
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
        nongCp: '',
        faHuoDi:'',
        shouHuoDi:'', 
        faHuoRen:'',
        shouHuoRen:'',
        kaiShiShiJian:'',
        jieShuShiJian:'',
        state:'',
        beiZhu:'',
      },
      formAdd: {
        name: '',
        nongCp: '',
        faHuoDi:'',
        shouHuoDi:'', 
        faHuoRen:'',
        shouHuoRen:'',
        kaiShiShiJian:'',
        jieShuShiJian:'',
        state:'',
        beiZhu:'',
      },
      tableData:[{
        name: '老北京',
        nongCp: 'Y',
        faHuoDi:'南街村',
        shouHuoDi:'河南', 
        faHuoRen:'李鹏',
        shouHuoRen:'路遥',
        kaiShiShiJian:'2022/04/25',
        jieShuShiJian:'2022/04/26',
        state:'已发货',
        beiZhu:'么么哒',
      },{
        name: '和田玉',
        nongCp: 'N',
        faHuoDi:'伊犁',
        shouHuoDi:'河南', 
        faHuoRen:'李鹏',
        shouHuoRen:'路遥',
        kaiShiShiJian:'2022/04/25',
        jieShuShiJian:'2022/04/26',
        state:'已发货',
        beiZhu:'1314',
      },{
        name: 'spaceX-C91',
        nongCp: 'N',
        faHuoDi:'漂亮国',
        shouHuoDi:'伊拉克', 
        faHuoRen:'拜登',
        shouHuoRen:'萨达姆',
        kaiShiShiJian:'2022/04/25',
        jieShuShiJian:'2022/04/26',
        state:'已发货',
        beiZhu:'0.0',
      },],
      rules: {
        name: [
          {required: false , trigger: 'change', validator: RegTest(/^[\u4e00-\u9fa5a-zA-Z]+$/)}
        ],
        nongCp: [
          {required: false , trigger: 'change', validator: RegTest(/^(-?\d+)(\.\d+)?$/)}
        ],
        faHuoDi: [
          {required: false , trigger: 'blur', validator: RegTest(/^(\d{4}-|\d{3}-)?(\d{8}|\d{7})$/)}
        ],
        kaiShiShiJian: [
          {required: false , trigger: 'blur', validator: RegTest(/^1\d{10}$/)}
        ],
        jieShuShiJian: [
          {required: false , trigger: 'blur', validator: RegTest(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)}
        ],
        state: [
          {required: false , trigger: 'blur', validator: RegTest(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)}
        ],
        beiZhu: [
          {required: false , trigger: 'blur', validator: RegTest(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)}
        ],
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

<style>

</style>