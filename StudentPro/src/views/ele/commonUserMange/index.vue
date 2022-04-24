<template>
  <div>
    <BasicTable
      v-loading="tableLoading"
      :tableData="tableData"
      :tableOptions="tableOptions"
      :treeType="treeType"
    >
    </BasicTable>
    <el-button type="primary" @click="loginTest">login测试</el-button>
  </div>
</template>

<script>
import BasicTable from '@/components/basic-table'
import {login} from '@/api/userMange'
import request from '@/api/request'
  export default {
    components: {
      BasicTable,
    },
    data() {
      return {
        tableLoading: false,
        tableData: [],
        tableOptions: [{
          label: 'ID',
          prop:'id'
        },{
          label: '姓名',
          prop:'name'
        },{
          label: '年龄',
          prop:'age'
        },{
          label: '职位',
          prop:'job'
        }],
        treeType: {
          type: 'operate',
          edit: true,
          del: true,
          upload: true,
        }
      }
    },
    mounted () {
      // this.loginTest();
      this.loadingTable()
    },
    methods: {
      loadingTable() {
        this.tableLoading = true;
        request({
          method: 'get',
          url: '/parameter/ccc',
          params: {
            type: 'mock'
          }
        }).then(res => {
          console.log(res, 'mock接口返回值');
          this.tableData = res.rows

          // try {
          //   if (res.status === 200) {
          //     this.tableData = res.rows
          //   } else {
          //     this.tableData = []
          //   }
          // } catch (error) {
          //   console.log(error, 'table接口报错');
          // }
          this.tableLoading =false
        })
      },
      loginTest() {
        login({
          method:'get',
          url: '/parameter/query',
          params: {
            name: 'lp'
          }
        }).then(function(res){
          console.log(res, '测试接口返回值');

        })
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>