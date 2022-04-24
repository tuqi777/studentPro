<script>
import _ from 'lodash';
import { mergeProps, getOptionProps } from '@/utils/props-util';

export default {
  props: {
    treeType: Object,
    tableData: Array,
    tableOptions: Array,
    fatherDel: Function,
    fatherEdit: Function,
    fatherInstall: Function,
    fatherForbid: Function,
    fatherToDetails: Function,
    fatherSelectChange: Function,
    fatherCheck: Function,
    fatherReplace: Function,
    columns: Array,
  },
  created () {
    console.log(this.props, '接收的参数')
  },
  data () {
    return {
      blankWarn: '暂无数据',
      forbidText: '禁用',
      selectedRow: []
    }
  },
  render () {
    const {
      columns,
      tableData
    } = this
    console.log('表头', columns)
    console.log('数据', tableData)
    const that = this
    return (
      <div>
        <h2>你不是针正的快乐</h2>
        <div class="interface">
          {columns.map((item,index) => {
            return (
              <p>{item.dzlxmc}</p>
            )
          })}
        </div>
        <el-table 
          ref="appTable"
          size="mini"
          border
          style={{ width: '100%' }}
          header-row-class-name="table-header"
          data={tableData}>
           {this.createTableColumns(columns)}
        </el-table>
      </div>
    )
  },
  methods: {
    createTableColumns (columns) {
      const otherColumns = columns
      .filter(x =>!x.hidden)
      .map((x,i) => {
        const defaultRender = !x.render
            ? {
              scopedSlots: {
                default: props => {
                  let res = _.get(props.row, x.prop);
                  return this.createCellNode(res, [], x.showOverflowTooltip);
                }
              }
            }
            : {};
        const render = x.render
            ? {
                scopedSlots: {
                  default: props => {
                    return this.createCellNode(x.render(props, h), [], x.showOverflowTooltip);
                  }
                }
              }
            : {};
        const wrapProps = mergeProps(defaultRender, render);
        return (
           <el-table-column
              key={i}
              align={x.align} // 对齐方式
              prop={x.prop} // 字段名
              label={x.label} // 标题名
              show-overflow-tooltip // 溢出-滑过=弹层提示
              width={x.width} // 宽度
              className={x.className}
              sortable={x.sorter} // 是否支持排序
              fixed={x.fixed} // 固定位置label-class-name={x.editRequired && 'is-required'}
              minWidth={x.minWidth || this.calcHeaderWidth(x.label)} // 最小宽，可设置百分比模拟树形表
              {...wrapProps}
            >
              {Array.isArray(x.children) && this.createTableColumns(x.children, true)}
            </el-table-column>
        )
      })
      return otherColumns;
    },
    // 创建单元格渲染节点
    createCellNode(JSXNode, msgs = [], isTooltip) {
      const classNames = !msgs.length ? 'el-form-item' : 'el-form-item is-error';
      const domStyle = isTooltip ? { whiteSpace: 'pre' } : null;
      return (
        <div class={classNames} style={domStyle}>
          {JSXNode}
          {msgs.map(msg => (
            <div class="form-item-error">{msg}</div>
          ))}
        </div>
      );
    },
    // 根据表头字数自动计算列宽度
    calcHeaderWidth(text = '') {
      let l = text.length || 1;
      let f = 14;
      // 每个字大小，其实是每个字的比例值，大概会比字体大小差不多大一点
      return f * l + 60;
    },
  }
}
</script>
<style lang="scss">
.el-form-item {
  margin: 0;
  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.el-table th {
    background: none;
  }
.table-header {
  background-color: green!important;
  color: #fff;
  .cell {
    &.is-required::before {
      content: '*';
      color: #f56c6c;
      margin-right: 4px;
    }
  }
}
.czBtn {
  color: #229fff;
  cursor: pointer;
  margin-right: 15px;
}
.grayEdit {
  color: #666;
}
</style>
<style lang="scss" scoped>
.disabledBtn {
  color: gray !important;
  margin-right: 15px;
}
.basicTable {
  .tableExpand {
    // float: left;
    // margin-left: 5px;
    margin-right: 15px;
    cursor: pointer;
  }
  .el-form-item {
    margin-bottom: 0 !important;
    display: block !important;
  }
}
.file {
  cursor: pointer;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  opacity: 0;
  font-size: 0;
}
</style>
