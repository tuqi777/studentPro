<template>
  <div class="workBeanch">
    <!-- <h1>{{name}}</h1>
    <h2>{{num}}</h2>
    <h2>{{num2}}</h2>
    <el-button type="primary" @click="changeName">你是谁的VUEX</el-button>
    <el-button type="primary" @click="textGetters">测试getters</el-button> -->
    <!-- <div id="echartsNo1"></div> -->
    <draggable v-model="myArray" @end="deagEnd">
      <div v-for="(element,index) in myArray" :key="index+1">
        <div class="echarts" :id="element.id"></div>
        {{element.id}}
      </div>
    </draggable>
  </div>
</template>

<script>
  // import  bar from '@/plugins/echarts'
  import { login } from '@/api'
  import { options } from './echarts.js'
  import draggable from 'vuedraggable'
  import { mapGetters, mapState } from 'vuex'
  export default {
    components: {
      draggable
    },
    data() {
      return {
        qm: 1,
        drag:false,
        myArray:[{
          id:'echartsNo1'
        },{
          id:'echartsNo2'
        }]
      }
    },
    computed: {
      name() {
        return this.$store.state.glob.name
      },
      ...mapState({
        num: state => state.glob.num
      }),
      ...mapGetters(['num2'])
    },
    mounted () {
      // console.log('vuex:', this.$store);
      console.log( 'this is -----', this.echarts);
      this.myArray = this.myArray.reverse()
      this.init();
      login()
    },
    methods: {
      init () {
        for (let index = 0; index < this.myArray.length; index++) {
          console.log(this.myArray[index].id,'initCharts');
          this.initEcharts(this.myArray[index].id)
        }
      },
      initEcharts(id){
        let myChart = this.echarts.init(document.getElementById(id));
        // 绘制图表
        let option = options[id.slice(-1)-1]
        myChart.setOption(option);
      },
      changeName() {
        this.$store.commit('CHANGE_NAME', '在你在心上，自由的飞翔') // 模块不带命名空间的写法
        // this.$store.dispatch('glob/change_name', '在你在心上，自由的飞翔') // 模块带命名空间的写法
      },
      textGetters(){
        this.$store.dispatch('change_num', this.$store.state.glob.num +1) // 模块带命名空间的写法
      },
      deagEnd(e){
        console.log(e);
        console.log(e.newIndex,e.oldIndex,'拖拽完成事件参数');
        let Zindex = e.newIndex - e.oldIndex > 0 ? e.newIndex : e.oldIndex
        console.log(Zindex);
        for (let index = 0; index <= Zindex; index++) {
          console.log(this.myArray[index].id,'initCharts');
          this.initEcharts(this.myArray[index].id)
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
.workBeanch{
  padding: 20px;
  .echarts{
    width:500px;
    height: 400px;
  }
}
</style>