<template>
  <div class="workBeanch">
    <!-- <h1>{{name}}</h1>
    <h2>{{num}}</h2>
    <h2>{{num2}}</h2>
    <el-button type="primary" @click="changeName">你是谁的VUEX</el-button>
    <el-button type="primary" @click="textGetters">测试getters</el-button> -->
    <!-- <div id="echartsNo1"></div> -->
    <div class="top">
      <el-row :gutter="32" class="col">
        <el-col :span="4">
          <el-card shadow="always">
            <img src="@/assets/img/zhifu.svg" alt="" srcset="">
            <div class='titleWraper'>
              <span>总销售额</span>
              <h3>10,200</h3>
            </div>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card shadow="hover" class="col">
            <img src="@/assets/img/dingdan.svg" alt="" srcset="">
            <div class='titleWraper'>
              <span>订单总量</span>
              <h3>10,200</h3>
            </div>
          </el-card>
        </el-col>
        <!-- <el-col :span="4">
          <el-card shadow="hover" class="col">
            <img src="@/assets/img/yigoushuliang.svg" alt="" srcset="">
            <div class='titleWraper'>
              <span>支付笔数</span>
              <h3>1,200</h3>
            </div>
          </el-card>
        </el-col> -->
        <el-col :span="4">
          <el-card shadow="hover" class="col">
            <img src="@/assets/img/xingxiaoxiaoguo.svg" alt="" srcset="">
            <div class='titleWraper'>
              <span>运营活动效果</span>
              <h3>90%</h3>
            </div>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card shadow="hover" class="col">
            <img src="@/assets/img/wodedaibanx.svg" alt="" srcset="">
            <div class='titleWraper'>
              <span>待办事项</span>
              <h3>4</h3>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="mid">
      <div id="lineChart" ref="lineChart"></div>
      <div id="myEcharts" ref="myEcharts"></div>
    </div>
    <div class="bot">
      <div class="title">
        <img src="@/assets/img/xinwen.svg" alt="" srcset="">
        <h3>新闻资讯</h3>
      </div>
      <div class="bodyList">
        <ul class="newsList">
          <li v-for="(item, index) in newsList" :key="index">
            <a :href="item.link" target="_blank">
              {{item.title}}
            </a>
            <a class="more" href="https://sannong.cctv.com/" target="_blank">查看更多>></a>
            </li>
        </ul>
        <ul class="videoList">
          <li>
            <div class="image" style="+position:static">
            <a href="https://sannong.cctv.com/2022/04/24/ARTI9BILNNzEleSM3BHMDnyg220424.shtml" target="_blank">
              <img src="//p4.img.cctvpic.com/photoworkspace/2022/04/24/2022042410370596110.jpg" width="180" height="120">
            </a>
            <a href="https://sannong.cctv.com/2022/04/24/ARTI9BILNNzEleSM3BHMDnyg220424.shtml" class="plus" target="_blank">
            </a>
            </div>
            <div class="text">
              <a href="https://sannong.cctv.com/2022/04/24/ARTI9BILNNzEleSM3BHMDnyg220424.shtml" target="_blank">
                湖北宜城：油菜长势喜人 即将收割
              </a>
            </div>
          </li>
          <li>
          <div class="image" style="+position:static">
            <a href="https://sannong.cctv.com/2022/04/24/ARTI6sxcHZbZP5B68CvHNtxx220424.shtml" target="_blank">
            <img src="//p1.img.cctvpic.com/photoworkspace/2022/04/24/2022042410104535138.jpg" width="180" height="120">
            </a>
            <a href="https://sannong.cctv.com/2022/04/24/ARTI6sxcHZbZP5B68CvHNtxx220424.shtml" class="plus" target="_blank">
            </a>
          </div>
          <div class="text">
            <a href="https://sannong.cctv.com/2022/04/24/ARTI6sxcHZbZP5B68CvHNtxx220424.shtml" target="_blank">
            解除后顾之忧！吉林：代耕代种为滞留农民备春耕
            </a>
          </div>
          </li>
          <li>
            <div class="image" style="+position:static">
              <a href="https://sannong.cctv.com/2022/04/22/ARTIV6m2Fs0NjOvcwu45fdKT220422.shtml" target="_blank">
                <img src="//p1.img.cctvpic.com/photoworkspace/2022/04/22/2022042210301388567.jpg" width="180" height="120">
              </a>
              <a href="https://sannong.cctv.com/2022/04/22/ARTIV6m2Fs0NjOvcwu45fdKT220422.shtml" class="plus" target="_blank">
              </a>
            </div>
            <div class="text">
              <a href="https://sannong.cctv.com/2022/04/22/ARTIV6m2Fs0NjOvcwu45fdKT220422.shtml" target="_blank">
              吉林：有序组织复工复产和备春耕工作
              </a>
            </div>
          </li>
          <li>
            <div class="image" style="+position:static">
              <a href="https://sannong.cctv.com/2022/04/22/ARTIj2RHbC150f95Fp9ZnwN7220422.shtml" target="_blank">
                <img src="//p5.img.cctvpic.com/photoworkspace/2022/04/22/2022042210364834836.jpg" width="180" height="120">
              </a>
              <a href="https://sannong.cctv.com/2022/04/22/ARTIj2RHbC150f95Fp9ZnwN7220422.shtml" class="plus" target="_blank"></a>
            </div>
            <div class="text">
              <a href="https://sannong.cctv.com/2022/04/22/ARTIj2RHbC150f95Fp9ZnwN7220422.shtml" target="_blank">
              重庆黔江：高山梯田实现机械化耕种
              </a>
            </div>
          </li>
		    </ul>
      </div>
    </div>
    <draggable v-model="myArray" @end="deagEnd">
    </draggable>
  </div>
</template>

<script>
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
        }],
        workList:[{
          title:'总销售额',
          count:'10020'
        },{
          title:'订单量',
          count:'10020'
        },{
          title:'支付笔数',
          count:'10020'
        },{
          title:'运营活动效果',
          count:'10020'
        }
        ],
        newsList:[
          {
            title:'两部委联合发声：无疫情地区 应保证农业生产正常开展',
            link:'https://sannong.cctv.com/2022/04/24/ARTIGV1TwnZOHwEt4gRNJDE9220424.shtml?spm=C73274.P13518688384.S79412.1'
          },
          {
            title:'好消息！玉米新品种破解大豆玉米带状复合种植难题',
            link:'https://sannong.cctv.com/2022/04/24/ARTIGV1TwnZOHwEt4gRNJDE9220424.shtml?spm=C73274.P13518688384.S79412.1'
          },
          {
            title:'吃海鲜抓紧啦 辽宁大连：休渔期临近 价格会上涨',
            link:'https://sannong.cctv.com/2022/04/24/ARTIGV1TwnZOHwEt4gRNJDE9220424.shtml?spm=C73274.P13518688384.S79412.1'
          },
          {
            title:'日元贬值 韩国彩椒、花卉等行业收入或大打折扣',
            link:'https://sannong.cctv.com/2022/04/24/ARTIGV1TwnZOHwEt4gRNJDE9220424.shtml?spm=C73274.P13518688384.S79412.1'
          },
          {
            title:'生态环境部：一季度全国生态环境质量持续改善',
            link:'https://sannong.cctv.com/2022/04/24/ARTIGV1TwnZOHwEt4gRNJDE9220424.shtml?spm=C73274.P13518688384.S79412.1'
          },
          {
            title:'湖北孝昌：绿色发展促乡村产业兴旺',
            link:'https://sannong.cctv.com/2022/04/24/ARTIGV1TwnZOHwEt4gRNJDE9220424.shtml?spm=C73274.P13518688384.S79412.1'
          },
          {
            title:'日元贬值 韩国彩椒、花卉等行业收入或大打折扣',
            link:'https://sannong.cctv.com/2022/04/24/ARTIGV1TwnZOHwEt4gRNJDE9220424.shtml?spm=C73274.P13518688384.S79412.1'
          },
          {
            title:'一年产出三季 乌黑泥塘挖出雪白财富',
            link:'https://sannong.cctv.com/2022/04/24/ARTIGV1TwnZOHwEt4gRNJDE9220424.shtml?spm=C73274.P13518688384.S79412.1'
          },
          {
            title:'春耕不误农时 吉林：绿色通道助农民采买农机',
            link:'https://sannong.cctv.com/2022/04/20/ARTIuxv1RQ30OCBuntpuARcU220420.shtml?spm=C73274.P13518688384.E6gJ0W9OHuc4.31'
          },
          {
            title:'北京平谷探索乡村治理数字化 让村民过上便捷“云生活',
            link:'https://sannong.cctv.com/2022/04/22/ARTIZOAxa6Pi8kDFcSlCDIpf220422.shtml?spm=C73274.P13518688384.EMTwve2ADhHN.12'
          },
        ]
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
      console.log( 'this is -----', this.$echarts);
      this.myArray = this.myArray.reverse()
      setTimeout(()=>{
        this.init();
      },0)
    },
    methods: {
      init(){
        this.$nextTick(() => {
          let mapName = "china";
          let data = [
            { name: "北京", value: 177 },
            { name: "天津", value: 42 },
            { name: "河北", value: 102 },
            { name: "山西", value: 81 },
            { name: "内蒙古", value: 47 },
            { name: "辽宁", value: 67 },
            { name: "吉林", value: 82 },
            { name: "黑龙江", value: 66 },
            { name: "上海", value: 24 },
            { name: "江苏", value: 92 },
            { name: "浙江", value: 114 },
            { name: "安徽", value: 109 },
            { name: "福建", value: 116 },
            { name: "江西", value: 91 },
            { name: "山东", value: 119 },
            { name: "河南", value: 137 },
            { name: "湖北", value: 116 },
            { name: "湖南", value: 114 },
            { name: "重庆", value: 91 },
            { name: "四川", value: 125 },
            { name: "贵州", value: 62 },
            { name: "云南", value: 83 },
            { name: "西藏", value: 9 },
            { name: "陕西", value: 80 },
            { name: "甘肃", value: 56 },
            { name: "青海", value: 10 },
            { name: "宁夏", value: 18 },
            { name: "新疆", value: 67 },
            { name: "广东", value: 123 },
            { name: "广西", value: 59 },
            { name: "海南", value: 14 }
          ];
          let geoCoordMap = {};
          let toolTipData = [
            {
              name: "北京",
              value: [{ name: "文科", value: 95 }, { name: "理科", value: 82 }]
            },
            {
              name: "天津",
              value: [{ name: "文科", value: 22 }, { name: "理科", value: 20 }]
            },
            {
              name: "河北",
              value: [{ name: "文科", value: 60 }, { name: "理科", value: 42 }]
            },
            {
              name: "山西",
              value: [{ name: "文科", value: 40 }, { name: "理科", value: 41 }]
            },
            {
              name: "内蒙古",
              value: [{ name: "文科", value: 23 }, { name: "理科", value: 24 }]
            },
            {
              name: "辽宁",
              value: [{ name: "文科", value: 39 }, { name: "理科", value: 28 }]
            },
            {
              name: "吉林",
              value: [{ name: "文科", value: 41 }, { name: "理科", value: 41 }]
            },
            {
              name: "黑龙江",
              value: [{ name: "文科", value: 35 }, { name: "理科", value: 31 }]
            },
            {
              name: "上海",
              value: [{ name: "文科", value: 12 }, { name: "理科", value: 12 }]
            },
            {
              name: "江苏",
              value: [{ name: "文科", value: 47 }, { name: "理科", value: 45 }]
            },
            {
              name: "浙江",
              value: [{ name: "文科", value: 57 }, { name: "理科", value: 57 }]
            },
            {
              name: "安徽",
              value: [{ name: "文科", value: 57 }, { name: "理科", value: 52 }]
            },
            {
              name: "福建",
              value: [{ name: "文科", value: 59 }, { name: "理科", value: 57 }]
            },
            {
              name: "江西",
              value: [{ name: "文科", value: 49 }, { name: "理科", value: 42 }]
            },
            {
              name: "山东",
              value: [{ name: "文科", value: 67 }, { name: "理科", value: 52 }]
            },
            {
              name: "河南",
              value: [{ name: "文科", value: 999 }, { name: "理科", value: 68 }]
            },
            {
              name: "湖北",
              value: [{ name: "文科", value: 60 }, { name: "理科", value: 56 }]
            },
            {
              name: "湖南",
              value: [{ name: "文科", value: 62 }, { name: "理科", value: 52 }]
            },
            {
              name: "重庆",
              value: [{ name: "文科", value: 47 }, { name: "理科", value: 44 }]
            },
            {
              name: "四川",
              value: [{ name: "文科", value: 65 }, { name: "理科", value: 60 }]
            },
            {
              name: "贵州",
              value: [{ name: "文科", value: 32 }, { name: "理科", value: 30 }]
            },
            {
              name: "云南",
              value: [{ name: "文科", value: 42 }, { name: "理科", value: 41 }]
            },
            {
              name: "西藏",
              value: [{ name: "文科", value: 5 }, { name: "理科", value: 4 }]
            },
            {
              name: "陕西",
              value: [{ name: "文科", value: 38 }, { name: "理科", value: 42 }]
            },
            {
              name: "甘肃",
              value: [{ name: "文科", value: 28 }, { name: "理科", value: 28 }]
            },
            {
              name: "青海",
              value: [{ name: "文科", value: 5 }, { name: "理科", value: 5 }]
            },
            {
              name: "宁夏",
              value: [{ name: "文科", value: 10 }, { name: "理科", value: 8 }]
            },
            {
              name: "新疆",
              value: [{ name: "文科", value: 36 }, { name: "理科", value: 31 }]
            },
            {
              name: "广东",
              value: [{ name: "文科", value: 63 }, { name: "理科", value: 60 }]
            },
            {
              name: "广西",
              value: [{ name: "文科", value: 29 }, { name: "理科", value: 30 }]
            },
            {
              name: "海南",
              value: [{ name: "文科", value: 8 }, { name: "理科", value: 6 }]
            }
          ];
          /*获取地图数据*/
          let myChart = this.$echarts.init(document.getElementById("myEcharts"));
          // myChart.showLoading();
          let mapFeatures = this.$echarts.getMap(mapName).geoJson.features;
          // myChart.hideLoading();
          console.log(mapFeatures,'省份数据');
          mapFeatures.forEach(function(v) {
            // 地区名称
            let name = v.properties.name;
            // 地区经纬度
            geoCoordMap[name] = v.properties.cp;
          });
          let max = 480,min = 9; // todo
          let maxSize4Pin = 100,minSize4Pin = 20;

          let convertData = function(data) {
            let res = [];
            for (let i = 0; i < data.length; i++) {
              let geoCoord = geoCoordMap[data[i].name];
              if (geoCoord) {
                res.push({
                  name: data[i].name,
                  value: geoCoord.concat(data[i].value)
                });
              }
            }
            return res;
          };
          let option = {
            title:{
              show:true,
              text:'全国销售数据一览',
              left:'160',
              top:'20'
            },
            tooltip: {
              trigger: "item",
              formatter: function(params) {
                if (typeof params.value[2] == "undefined") {
                  let toolTiphtml = "";
                  for (let i = 0; i < toolTipData.length; i++) {
                    if (params.name == toolTipData[i].name) {
                      toolTiphtml += toolTipData[i].name + ":<br>";
                      for (let j = 0; j < toolTipData[i].value.length; j++) {
                        toolTiphtml +=
                          toolTipData[i].value[j].name +
                          ":" +
                          toolTipData[i].value[j].value +
                          "<br>";
                      }
                    }
                  }
                  // console.log(toolTiphtml);
                  // console.log(convertData(data))
                  return toolTiphtml;
                } else {
                  let toolTiphtml = "";
                  for (let i = 0; i < toolTipData.length; i++) {
                    if (params.name == toolTipData[i].name) {
                      toolTiphtml += toolTipData[i].name + ":<br>";
                      for (let j = 0; j < toolTipData[i].value.length; j++) {
                        toolTiphtml +=
                          toolTipData[i].value[j].name +
                          ":" +
                          toolTipData[i].value[j].value +
                          "<br>";
                      }
                    }
                  }
                  // console.log(toolTiphtml,'ttttttttttt');
                  // console.log(convertData(data))
                  return toolTiphtml;
                }
              }
            },
            //这个属性控制地图的多彩板块
            visualMap: {
              show: true,
              min: 0,
              max: 200,
              left: 150,
              bottom: 20,
              text: ["高", "低"], // 文本，默认为数值文本
              itemHeight:60,
              calculable: false,
              seriesIndex: [1],
              inRange: {
                // color: ['#3B5077', '#031525'] // 蓝黑
                // color: ['#ffc0cb', '#800080'] // 红紫
                // color: ['#3C3B3F', '#605C3C'] // 黑绿
                // color: ['#0f0c29', '#302b63', '#A5CC82'] // 黑紫黑
                // color: ['#23074d', '#cc5333'] // 紫红
                // color: ["#00467F", "#A5CC82"] // 蓝绿
                // color: ['#1488CC', '#2B32B2'] // 浅蓝
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                color: ['#00467F', '#A5CC82','#888'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿
              },
            },
            geo: {
              show: true,
              map: mapName,
              label: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: false
                }
              },
              roam: true,
              itemStyle: {
                normal: {
                  areaColor: "#031599",
                  borderColor: "#3B5099"
                },
                emphasis: {
                  areaColor: "#2B91B7"
                }
              }
            },
            series: [
            //1）全省的散点
              {
                name: "散点",
                type: "scatter",
                coordinateSystem: "geo",
                data: convertData(data),
                symbolSize: function(val) {
                  return val[2] / 10;
                },
                label: {
                  normal: {
                    formatter: "{b}",
                    position: "right",
                    show: false
                  },
                  emphasis: {
                    show: true
                  }
                },
                itemStyle: {
                  normal: {
                    color: "#05C3F9"
                  }
                }
              },
              // 2）为了与visualMap配对，必须要加上
              {
                type: "map",
                map: mapName,
                geoIndex: 0,
                aspectScale: 0.75, //长宽比
                showLegendSymbol: false, // 存在legend时显示
                label: {
                  normal: {
                    show: false
                  },
                  emphasis: {
                    show: false,
                    textStyle: {
                      color: "#fff"
                    }
                  }
                },
                roam: false,
                itemStyle: {
                  normal: {
                    areaColor: "#031525",
                    borderColor: "#3B5077"
                  },
                  emphasis: {
                    areaColor: "#2B91B7"
                  }
                },
                animation: false,
                data: data
              },
              //3）气泡
              // {
              //   name: "点",
              //   type: "scatter",
              //   coordinateSystem: "geo",
              //   symbol: "pin", 
              //   symbolSize: function(val) {
              //     let a = (maxSize4Pin - minSize4Pin) / (max - min);
              //     let b = minSize4Pin - a * min;
              //     b = maxSize4Pin - a * max;
              //     return a * val[2] + b;
              //   },
              //   label: {
              //     normal: {
              //       show: true,
              //       formatter:function(params) {
              //         return params.data.value[2]
              //       },
              //       textStyle: {
              //         color: "#fff",
              //         fontSize: 9
              //       }
              //     }
              //   },
              //   itemStyle: {
              //     normal: {
              //       color: "#F62157" //标志颜色
              //     }
              //   },
              //   zlevel: 6,
              //   data: convertData(data)
              // },
              //4.前五个有效果的光圈
              {
                name: "Top 5",
                type: "effectScatter",
                coordinateSystem: "geo",
                data: convertData(
                  data
                    .sort(function(a, b) {
                      return b.value - a.value;
                    })
                    .slice(0, 5)
                ),
                symbolSize: function(val) {
                  return val[2] / 10;
                },
                showEffectOn: "render",
                rippleEffect: {
                  brushType: "stroke"
                },
                hoverAnimation: true,
                label: {
                  normal: {
                    formatter: "{b}",
                    position: "right",
                    show: true
                  }
                },
                itemStyle: {
                  normal: {
                    color: "yellow",
                    shadowBlur: 10,
                    shadowColor: "yellow"
                  }
                },
                zlevel: 1
              }
            ]
          };
          myChart.setOption(option);
          window.onresize = function() {
            myChart.resize();
          };
          this.initLineChart()

    });
      },
      initLineChart(){
        let chartDom = document.getElementById('lineChart');
        console.log(chartDom);
        let myChart = this.$echarts.init(chartDom);
        let option;

        option = {
          color:[
            '#5470c6',
            '#91cc75',
            '#fac858',
            '#ee6666',
            '#73c0de',
            '#3ba272',
            '#fc8452',
            '#9a60b4',
            '#ea7ccc',
          ],
          gradientColor:[
            '#f6efa6',
            '#d88273',
            '#bf444c'
          ],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          toolbox: {
            feature: {
              dataView: { show: true, readOnly: false },
              magicType: { show: true, type: ['line', 'bar'] },
              restore: { show: true },
              saveAsImage: { show: true }
            }
          },
          legend: {
            data: ['总销售额', '订单总量', '运营活动效果']
          },
          xAxis: [
            {
              type: 'category',
              data: ['2021/01', '2021/02', '2021/03', '2021/04', '2021/05', '2021/06', '2021/07', '2021/08', '2021/09', '2021/10', '2021/11', '2021/12'],
              axisPointer: {
                type: 'shadow'
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '订单总量',
              min: 0,
              max: 250,
              interval: 50,
              axisLabel: {
                formatter: '{value}'
              }
            },
            {
              type: 'value',
              name: '运营活动效果',
              min: 0,
              max: 25,
              interval: 5,
              axisLabel: {
                formatter: '{value} %'
              }
            }
          ],
          series: [
            {
              name: '总销售额',
              type: 'bar',
              tooltip: {
                valueFormatter: function (value) {
                  return value ;
                }
              },
              data: [
                2.0, 6.4, 3.3, 4.9, 7.0, 20.0, 23.2, 25.6, 32.6, 76.7, 135.6, 162.2
              ]
            },
            {
              name: '订单总量',
              type: 'bar',
              tooltip: {
                valueFormatter: function (value) {
                  return value;
                }
              },
              data: [
                2.6, 6.0, 2.3, 5.9, 9.0, 18.8, 26.4, 28.7, 48.7, 70.7, 175.6, 182.2
              ]
            },
            {
              name: '运营活动效果',
              type: 'line',
              yAxisIndex: 1,
              tooltip: {
                valueFormatter: function (value) {
                  return value + ' %';
                }
              },
              data: [2.0, 2.2, 3.3, 4.5, 6.3, 6.2, 10.2, 16.5, 12.0, 20.3, 23.0, 23.4]
            }
          ]
        };

        option && myChart.setOption(option);
        window.onresize = function() {
          myChart.resize();
        };
      },
      changeName() {
        this.$store.commit('CHANGE_NAME', '在你在心上，自由的飞翔') // 模块不带命名空间的写法
        // this.$store.dispatch('glob/change_name', '在你在心上，自由的飞翔') // 模块带命名空间的写法
      },
      textGetters(){
        this.$store.dispatch('change_num', this.$store.state.glob.num +1) // 模块带命名空间的写法
      },
      deagEnd(e){
        return
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
  #lineChart{
    margin: 50px auto;
    width:60%;
    height: 400px;
    display: inline-block;
  }
  #myEcharts,#myEcharts0,#myEcharts1,#myEcharts2,#myEcharts3{
    width:30%;
    height: 400px;
    margin: 50px 70px;
    display: inline-block;
  }
  .col{
    .el-card__body{
      height: 80px!important;

    }
    .titleWraper{
      text-align: right;
      float: right;
      h3{
        margin: 15px 0 0 0;
      }
    }
    img{
      display: inline-block;
      width: 60px;
      height: 60px;
    }
  }
  .top{
    width: 100%;
    height: 100%;
    // background: #fff;
  }
  .mid{
    width: 100%;
    height: 100%;
    margin: 20px 0;
    background: #fff;
  }
  .bot{
    width: 100%;
    height: 100%;
    margin: 20px 0;
    padding: 20px;
    background: #fff;
    .title{
      width: 100%;
      height: 40px;
      line-height: 40px;
      position: relative;
      &::after{
        content: '';
        width: 150px;
        height: 1px;
        background: #1296db;
        position: absolute;
        bottom: 0;
        left: 0;
      }
      img{
        width: 40px;
        vertical-align: bottom;
        display: inline-block;
      }
      h3{
        display: inline;
        margin-left: 15px;
      }
    }
    .bodyList{
      overflow: hidden;
      .newsList{
        width: 50%;
        padding-top: 10px;
        display: inline-block;
        li{
          margin: 15px 20px;
          .more{
            color: #7e8c8d;
            float: right;
          }
        }
      }
      .videoList{
        width: 40%;
        float: right;
        position: relative;
        text-align: center;
        &::before{
          content: '';
          width: 1px;
          height: 80%;
          background: #7e8c8d;
          position: absolute;
          left: -50px;
          top:5%;
        }
        .image{
          display: inline-block;
          img{
            display: inline-block;
            width: 250px;
            height: 150px;
          }
        }
        li{
          width: 40%;
          margin: 10px 0;
          display: inline-block;
        }
        .text{
          width: 100%;
          height: 22px;
          line-height: 22px;
          text-align: center;
          overflow: hidden;
          display: -webkit-box;
          text-overflow: ellipsis;
          -webkit-line-clamp: 1; // 超出多少行
          -webkit-box-orient: vertical;
        }
      }
    }
  }
}
</style>