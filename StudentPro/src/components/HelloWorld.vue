<template>
  <div class="hello">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="dzlxmc" label="单证类型名称"></el-table-column>
      <el-table-column prop="dzlxbm" label="单证类型编码"></el-table-column>
      <el-table-column prop="sjdzlx" label="上级单证类型"></el-table-column>
      <el-table-column prop="sfmd" label="是否面单"></el-table-column>
      <el-table-column prop="sblx" label="识别类型"></el-table-column>
      <el-table-column prop="sbwz" label="识别位置"></el-table-column>
      <el-table-column prop="bz" label="备注"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="look(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-button @click="add(scope.row)" type="text" size="small"
            >新增</el-button
          >
          <el-button @click="edit(scope.row, scope.$index)" type="text" size="small"
            >编辑</el-button
          >
          <el-button @click="del(scope.row, scope.$index)" type="text" size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      :title="addOrEdit === 'add' ? '新建' : '编辑'"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      width="408px"
      center
    >
      <el-form label-width="120px" ref="form" :model="form" :rules="rules">
        <el-form-item label="上级单证类型：">
          <el-input
            v-model="form.sjdzlx"
            placeholder="不选择显示为一级单证类型"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="单证类型名称：" prop="dzlxmc">
          <el-input
            v-model="form.dzlxmc"
          ></el-input>
        </el-form-item>
        <el-form-item label="单证类型编码：" prop="dzlxbm">
          <el-input
            v-model="form.dzlxbm"
          ></el-input>
        </el-form-item>
        <el-form-item label="是否面单：">
          <el-radio v-model="form.sfmd" label="1">是</el-radio>
          <el-radio v-model="form.sfmd" label="0">否</el-radio>
        </el-form-item>
        <el-form-item label="识别类型：">
          <el-select v-model="form.sblx" placeholder="请选择">
            <el-option
              v-for="(c, cdex) in sblxArr"
              :key="cdex"
              :label="c.name"
              :value="c.id"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="识别位置：">
          <el-select v-model="form.sbwz" placeholder="请选择">
            <el-option
              v-for="(c, cdex) in sbwzArr"
              :key="cdex"
              :label="c.name"
              :value="c.id"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注：">
          <el-input type="textarea" v-model="form.bz"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editConfirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      tableData: [{
          'dzlxbm': '新增1',
          'dzYxCount': '0',
          'dzlxmc': '新增1',
          'sbwz': '1',
          'dzCount': '0',
          'id': '791a365e4302493887bad16dac669a67',
          'yxCount': '0',
          'sblx': '2',
          'sfmd': '1'
        }, {
          'dzlxbm': 'EDOC_COVER',
          'dzYxCount': '0',
          'dzlxmc': '通用封面',
          'sbwz': '0',
          'dzCount': '0',
          'id': 'ee93f5f86c954e8795c89269359f72a6',
          'sjdzlx': '封面',
          'yxCount': '1',
          'sblx': '3',
          'sfmd': '1'
        }, {
          'dzlxbm': 'COVER',
          'dzYxCount': '0',
          'dzlxmc': '封面',
          'sbwz': '0',
          'dzCount': '0',
          'id': '5011645caa624304b4f86c4a97e611cb',
          'yxCount': '0',
          'sblx': '3',
          'sfmd': '1'
        }, {
          'dzlxbm': 'XSFP',
          'dzYxCount': '0',
          'dzlxmc': '形式发票',
          'sbwz': '0',
          'dzCount': '0',
          'id': '5f9a4fdd009543a896c128dc15cc10a1',
          'sjdzlx': '4e9a4f2f391249e299a2b1e8434ceb97',
          'yxCount': '0',
          'sblx': '2',
          'sfmd': '0'
        }, {
          'dzlxbm': 'HGJKZZS',
          'dzYxCount': '0',
          'dzlxmc': '海关进口增值税',
          'sbwz': '0',
          'dzCount': '0',
          'id': '113662a98ea24b3bac14073f2933a039',
          'sjdzlx': '4e9a4f2f391249e299a2b1e8434ceb97',
          'yxCount': '0',
          'sblx': '2',
          'sfmd': '0'
        }, 
      ],
      pageNum: 0,
      pageSize: 10,
      total: 10,
      addOrEdit: '',
      rules: {
        sjdzlx: {
          required: true,
          message: '请选择上级单证类型',
          trigger: 'blur'
        },
        dzlxmc: [
          { required: true, message: '请输入单证类型名称', trigger: 'blur' }
        ],
        dzlxbm: {
          required: true,
          message: '请输入单证类型编码',
          trigger: 'blur'
        },
        sfmd: { required: true, message: '请确认是否面单', trigger: 'blur' },
        sblx: { required: true, message: '请选择识别类型', trigger: 'blur' },
        sbwz: { required: true, message: '请选择识别位置', trigger: 'blur' },
        bz: {
          required: true,
          message: '请输入至少五个字符',
          trigger: 'blur'
        },
        remarks: { required: true, message: '请输入水印描述', trigger: 'blur' }
      },
      form: {
        sjdzlx: '',
        dzlxmc: '',
        dzlxbm: '',
        sfmd: '',
        sblx: '',
        sbwz: '',
        bz: '',
        id: '123456'
      },
      dialogVisible: false,
      sbwzArr: [
        {
          name: '全文',
          id: '0'
        },
        {
          name: '左上角',
          id: '1'
        },
        {
          name: '右上角',
          id: '2'
        },
        {
          name: '左下角',
          id: '3'
        },
        {
          name: '右下角',
          id: '4'
        },
        {
          name: '上',
          id: '5'
        },
        {
          name: '下',
          id: '6'
        }
      ],
      sblxArr: [
        {
          name: '不识别',
          id: '1'
        },
        {
          name: '票据',
          id: '2'
        },
        {
          name: '一维条码',
          id: '3'
        },
        {
          name: '全文',
          id: '4'
        }
      ],
      clickType: '',
      activeIndex: ''
    };
  },
  methods: {
    look (row) {
      console.log(row);
      this.form = {...row}
      this.dialogVisible = true;
      this.clickType = 'look'
    },
    add (row) {
      this.dialogVisible = true;
      this.clickType = 'add'
    },
    edit (row, index) {
      this.form = {...row}
      this.dialogVisible = true;
      this.clickType = 'edit';
      this.activeIndex = index;
    },
    del (row, index) {
      this.tableData.splice(index,1);
    },
    editConfirm () {
      switch(this.clickType) {
        case 'look':
          break;
        case 'add':
          this.tableData.push({...this.form})
          break;
        case 'edit':
          this.tableData.splice(this.activeIndex, 1, {...this.form})
          break;
      }
      this.dialogVisible = false;
      this.$refs['form'].resetFields()
    }
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
