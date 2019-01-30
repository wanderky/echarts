EchartType = {

//折线图
    line :{
         BasicLineChart :{
             option : {
                 title:{

                 },
                 xAxis: {
                     type: 'category',
                     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                 },
                 yAxis: {
                     type: 'value'
                 },
                 series: [{
                     data: [820, 932, 901, 934, 1290, 1330, 1320],
                     type: 'line'
                 }]
             },
             config :{
                 //设置标题
                 title :{
                     name:'标题',
                     subTitle:'子标题'
                 },
                 // 设置X轴数据
                 xAxis: { data:[]},
                 //设置Y轴数据展示方式，value：连续型 category：散列型 time:时间类型
                 yAxis:{type:'value'},
                 //设置Y轴统计数据
                 series:[{data:[]}],
             }
         },
         BasicAreaChart :{
             option : {
                 title: {
                     text: ''
                 },
                 xAxis: {
                     type: 'category',
                     boundaryGap: false,
                     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                 },
                 yAxis: {
                     type: 'value'
                 },
                 series: [{
                     data: [820, 932, 901, 934, 1290, 1330, 1320],
                     type: 'line',
                     areaStyle: {}
                 }]
             },
             config :{
                 // 设置X轴数据
                 xAxis: { data:[]},
                 //设置Y轴数据展示方式，value：连续型 category：散列型 time:时间类型
                 yAxis:{type:'value'},
                 //设置Y轴统计数据
                 series:[{data:[]}],
             }
         },
         smoothLineChart :{
             option : {
                 title: {
                     text: ''
                 },
                 xAxis: {
                     type: 'category',
                     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                 },
                 yAxis: {
                     type: 'value'
                 },
                 series: [{
                     data: [820, 932, 901, 934, 1290, 1330, 1320],
                     type: 'line',
                     smooth: true
                 }]
             },
             config :{
                 // 设置X轴数据
                 xAxis: { data:[]},
                 //设置Y轴数据展示方式，value：连续型 category：散列型 time:时间类型
                 yAxis:{type:'value'},
                 //设置Y轴统计数据
                 series:[{data:[]}],
             }
         },
         StackedAreaChart :{
             option : {
                 title: {
                     text: ''
                 },
                 tooltip : {
                     trigger: 'axis',
                     axisPointer: {
                         type: 'cross',
                         label: {
                             backgroundColor: '#6a7985'
                         }
                     }
                 },
                 legend: {
                     data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
                 },
                 toolbox: {
                     feature: {
                         saveAsImage: {}
                     }
                 },
                 grid: {
                     left: '3%',
                     right: '4%',
                     bottom: '3%',
                     containLabel: true
                 },
                 xAxis : [
                     {
                         type : 'category',
                         boundaryGap : false,
                         data : ['周一','周二','周三','周四','周五','周六','周日']
                     }
                 ],
                 yAxis : [
                     {
                         type : 'value'
                     }
                 ],
                 series : [
                     {
                         name:'邮件营销',
                         type:'line',
                         stack: '总量',
                         areaStyle: {},
                         data:[120, 132, 101, 134, 90, 230, 210]
                     },
                     {
                         name:'联盟广告',
                         type:'line',
                         stack: '总量',
                         areaStyle: {},
                         data:[220, 182, 191, 234, 290, 330, 310]
                     },
                     {
                         name:'视频广告',
                         type:'line',
                         stack: '总量',
                         areaStyle: {},
                         data:[150, 232, 201, 154, 190, 330, 410]
                     },
                     {
                         name:'直接访问',
                         type:'line',
                         stack: '总量',
                         areaStyle: {normal: {}},
                         data:[320, 332, 301, 334, 390, 330, 320]
                     },
                     {
                         name:'搜索引擎',
                         type:'line',
                         stack: '总量',
                         label: {
                             normal: {
                                 show: true,
                                 position: 'top'
                             }
                         },
                         areaStyle: {normal: {}},
                         data:[820, 932, 901, 934, 1290, 1330, 1320]
                     }
                 ]
             },
             config :{
                 // 设置X轴数据
                 xAxis: { data:[]},
                 //设置Y轴数据展示方式，value：连续型 category：散列型 time:时间类型
                 yAxis:{type:'value'},
                 //设置Y轴统计数据
                 series:[{data:[]}],
             }
         }
     },

//柱状图
    bar :{
        BarSimple :{
            option : {
                title: {
                    text: ''
                },
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar'
                }]
            },
            config :{
                // 设置X轴数据
                xAxis: { data:[]},
                //设置Y轴数据展示方式，value：连续型 category：散列型 time:时间类型
                yAxis:{
                    type:'value',
                    option:{
                        options:['value,cagegory,time,log'],
                        description: "设置Y轴数据展示方式，value：连续型 category：散列型 time:时间类型",
                    },
                },
                //设置Y轴统计数据
                series:[{data:[]}],
            }
        }
    }

//饼状图

}