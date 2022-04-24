<script>
import { mergeProps, getOptionProps } from '@/utils/props-util';
import BasicTable from '@/components/basic-table1.vue'
export default {
  name: 'about',
  components: {
    BasicTable
  },
  data () {
    return {
      title: '单证类型',
        dialogVisible: false,
        dialogdel: false,
        bmStatus: false,
        nameStatus: false,
        errJudgecode: false, //判断单证类型编码是否重复
        errJudgename: false, //判断单证类型名称是否重复
        activeEditRow: null,
        delId: '',
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
        editId: '',
        rules: {
          sjdzlx: {
            required: true,
            message: "请选择上级单证类型",
            trigger: "blur",
          },
          dzlxmc: [{ required: true, message: "请输入单证类型名称", trigger: "blur" }],
          dzlxbm: {
            required: true,
            message: "请输入单证类型编码",
            trigger: "blur"
          },
          sfmd: { required: true, message: "请确认是否面单", trigger: "blur" },
          sblx: { required: true, message: "请选择识别类型", trigger: "blur" },
          sbwz: { required: true, message: "请选择识别位置", trigger: "blur" },
          bz: {
            required: true,
            message: "请输入至少五个字符",
            trigger: "blur"
          },
          remarks: { required: true, message: "请输入水印描述", trigger: "blur" }
        },
        sjdzlxArr: [],
        sblxArr: [{
            name: '不识别',
            id: '1'
          }, {
            name: '票据',
            id: '2'
          }, {
            name: '一维条码',
            id: '3',
          }, {
            name: '全文',
            id: '4'
        }],
        sbwzArr: [{
            name: '全文',
            id: '0',
          }, {
            name: '左上角',
            id: '1',
          }, {
            name: '右上角',
            id: '2',
          }, {
            name: '左下角',
            id: '3',
          }, {
            name: '右下角',
            id: '4',
        }, {
            name: '上',
            id: '5',
        }, {
            name: '下',
            id: '6',
        }],
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
          'sbwz': '3',
          'dzCount': '0',
          'id': 'ee93f5f86c954e8795c89269359f72a6',
          'sjdzlx': '封面',
          'yxCount': '1',
          'sblx': '3',
          'sfmd': '1',
          'bz': '14323423423'
          }, {
          'dzlxbm': 'COVER',
          'dzYxCount': '0',
          'dzlxmc': '封面',
          'sbwz': '6',
          'dzCount': '0',
          'id': '5011645caa624304b4f86c4a97e611cb',
          'yxCount': '0',
          'sblx': '3',
          'sfmd': '1'
          }, {
          'dzlxbm': 'XSFP',
          'dzYxCount': '0',
          'dzlxmc': '形式发票',
          'sbwz': '5',
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
          'sbwz': '2',
          'dzCount': '0',
          'id': '113662a98ea24b3bac14073f2933a039',
          'sjdzlx': '4e9a4f2f391249e299a2b1e8434ceb97',
          'yxCount': '0',
          'sblx': '2',
          'sfmd': '0'
        }, 
      ],
        tableOptions: [{
          label: '序号',
          prop: 'xh',
          align: 'center'
          }, {
          label: '单证类型名称',
          prop: 'dzlxmc',
          align: 'center'
          }, {
          label: '单证类型编码',
          prop: 'dzlxbm',
          align: 'center',
          sorter: true
          }, {
          label: '上级单证类型',
          prop: 'sjdzlx',
          align: 'center'
          }, {
          label: '是否面单',
          prop: 'sfmd',
          align: 'center'
          }, {
          label: '识别类型',
          prop: 'sblx',
          align: 'center'
          }, {
          label: '识别位置',
          prop: 'sbwz',
          align: 'center',
          sorter: true
          }, {
          label: '备注',
          prop: 'bz',
          align: 'center'
          },{
          label: '操作',
          prop: 'column-action',
          align: 'center',
          fixed: 'right',
          render: (props, h) => {
            return (
              <div>
                <el-button size="mini" type="text" onClick={() => this.cellClickHandler(props.row)}>
                  详情
                </el-button>
                <el-divider direction="vertical" />
                <el-button size="mini" type="text" onClick={() => this.cellClickHandler(props.row)}>
                  编辑
                </el-button>
                <el-divider direction="vertical" />
                <el-button size="mini" type="text" onClick={() => this.cellClickHandler(props.row)}>
                  删除
                </el-button>
              </div>
            );
          }
        },],
        treeType: {
          type: 'operate',
          edit: true,
          del: true,
          add: true,
          customButton: [{
            text: '匹配',
          }],
        },
        pageNum: 0,
        pageSize: 10,
        total: 10,
        addOrEdit: '',
        dialog: false,
    }
  },
  render () {
    const { $listeners, $attrs, $scopedSlots } = this;
    const props = getOptionProps(this);
    const wrapProps = mergeProps({
      props: {
        ...props,
        columns: this.tableOptions,
        tableData: this.tableData
      },
      on: $listeners,
      attrs: $attrs,
      scopedSlots: $scopedSlots
    });
    console.log('传参', wrapProps)
    return (
      <div>
        <BasicTable ref='basicTable' {...wrapProps}></BasicTable>
          <el-dialog
            title="提示"
            visible={this.dialogVisible}
            width="30%"
            before-close={this.handleClose}
          >
          <el-form>
            <el-form-item>
              {this.form.dzlxmc}
            </el-form-item>
          </el-form>
          </el-dialog>
      </div>
    )
  },
  methods: {
    cellClickHandler (row) {
      console.log('当前行数据', row)
      this.dialogVisible = true;
      this.form = {...row};
    },
    handleClose() {
      this.dialogVisible = false;
    }
  }
}
</script>

<style>
</style>
