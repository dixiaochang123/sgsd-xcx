// pages/consumption/consumption.js
import * as echarts from '../../../ec-canvas/echarts';
const util = require('../../../utils/util');
const app = getApp();
//曲线图
var chart = null;
//饼状图
var chart1 = null;
var chart2 = null;
var chart3 = null;
var memberSalesVolume = 0;
var nonMemberSalesVolume = 0;
let sendData =  JSON.stringify({
	startTime: util.getNowDate(new Date(),'-')+" 00:00:00",
	endTime: util.formatTime(new Date()),
	order: "desc",
	limit: 5,
	groupType: 2
});
let lineChartData = {
	seriesData:[],
	xData:[]
};
let pieChartData1 = {
	floorData: [],
	seriesData: [],
	totalValue: 0
}
let pieChartData2 = {
	formatData: [],
	seriesData: [],
	totalValue: 0
}
let seriesData = {
	data1:[120, 180, 150],
	data2:[120, 180, 150],
	data3:[120, 180, 150],
}

function initOption() {
	return {
		grid: {
			left: '5%',
			right: '5%',
			top: '10%',
			bottom: '5%',
			containLabel: true
		},
		tooltip: {
			show: true,
			trigger: 'axis',
			confine:true,
		},
		dataZoom: [{
			type: "inside",
			endValue: 8
		}],
		xAxis: {
			type: 'category',
			name: '',
			nameLocation: 'middle',
			nameTextStyle: {
				color: "#fff",
				fontSize: 10,
				padding: 10
			},
			splitLine: {
				show: false,
				//  改变轴线颜色
				lineStyle: {
					type: 'dashed',
					color: '#DCE0EE'
				}
			},
			axisTick: { //y轴刻度线
				show: false
			},
			axisLabel: {
				show: true,
				textStyle: {
					color: '#fff',
					fontSize: 10
				}
			},
			boundaryGap: true, //X轴从0开始
			axisLine: {
				show: false,
				lineStyle: {
					color: '#fff',
					width: 1, //这里是坐标轴的宽度
				}
			},
			data: lineChartData.xData
		},
		yAxis: {
			name: '',
			x: 'center',
			type: 'value',
			nameLocation: 'center',
			nameGap: 0,
			// max: mNum,
			// min: 0,
			splitNumber: 10,
			//interval: 200, //间隔
			minInterval: 1, //设置成1保证坐标轴分割刻度显示成整数。
			nameTextStyle: { //文字样式
				color: '#fff',
				fontSize: 10
			},
			axisTick: { //y轴刻度线
				show: false
			},
			axisLabel: {
				show: true,
				textStyle: {
					color: '#fff',
					fontSize: 10
				}
			},
			axisLine: {
				show: false,
				lineStyle: {
					color: '#fff',
					width: 1, //这里是坐标轴的宽度
				}
			},
			splitLine: {
				//show: false,
				lineStyle: {
					type: 'solid',
					color: '#DCE0EE'
				}
			}
			// show: false
		},
		series: [{
			name: '',
			type: 'line',
			color: ['#1BE6DA'],
			markPoint: {
				symbol:'circle',
				symbolSize:20,
			},
			itemStyle: {
				normal: {
					label: {
						color: '#fff',
						show: true, //开启显示
						position: 'top', //在上方显示
						textStyle: { //数值样式
							color: 'white',
							fontSize: 10
						},
					}
				},
			},
			data: lineChartData.seriesData
		}]
	};
}
function initOptions1(){
	return  {
		grid: {
			left: 80 ,
			right: 90 ,
		},
    xAxis: {
        type: 'category',
				data: ['本周', '上周', '20年同期'],
				axisLine:{
					show:false
				},
				axisTick:{
					show:false
				},
				axisLabel:{
					interval:0
				}
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: seriesData.data1,
        label: {
            show: true,
            position: 'top',
            valueAnimation: true
        },
				type: 'bar',
				barWidth:35,
				itemStyle:{
					borderRadius: 5,
					borderColor: 'transparent' ,
			borderWidth: 3 ,
					color:'#7a819e'
				},
        showBackground: true,
        backgroundStyle: {
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 1,
							y2: 0,
							colorStops: [{
									offset: 0, color: '#9c9bb3' // 0% 处的颜色
							}, {
								offset: 0.2, color: '#d9d9e7' // 0% 处的颜色
						},{
							offset: 0.4, color: '#d9d9e7' // 0% 处的颜色
						},{
							offset: 0.6, color: '#d9d9e7' // 0% 处的颜色
						},{
									offset: 1, color: '#dadeec' // 100% 处的颜色
							}],
							global: false // 缺省为 false
						},
						borderColor: '#ebeef8' ,
						borderWidth: 3 ,
						borderRadius: 5,
						opacity:1
        }
    }]
}
}
function initOptions2(){
	return  {
		grid: {
			left: 80 ,
			right: 90 ,
		},
    xAxis: {
        type: 'category',
				data: ['本月', '上月', '20年同期'],
				axisLine:{
					show:false
				},
				axisTick:{
					show:false
				},
				axisLabel:{
					interval:0
				}
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: seriesData.data2,
        label: {
            show: true,
            position: 'top',
            valueAnimation: true
        },
				type: 'bar',
				barWidth:35,
				itemStyle:{
					borderRadius: 5,
					color:'#7a819e'
				},
        showBackground: true,
        backgroundStyle: {
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 1,
							y2: 0,
							colorStops: [{
									offset: 0, color: '#9c9bb3' // 0% 处的颜色
							}, {
								offset: 0.2, color: '#d9d9e7' // 0% 处的颜色
						},{
							offset: 0.4, color: '#d9d9e7' // 0% 处的颜色
						},{
							offset: 0.6, color: '#d9d9e7' // 0% 处的颜色
						},{
									offset: 1, color: '#dadeec' // 100% 处的颜色
							}],
							global: false // 缺省为 false
						},
						borderColor: '#ebeef8' ,
						borderWidth: 3 ,
						borderRadius: 5,
						opacity:1
        }
    }]
}
}
function initOptions3(){
	return  {
		grid: {
			left: 80 ,
			right: 90 ,
		},
    xAxis: {
        type: 'category',
				data: ['本年',  '19年','20年'],
				axisLine:{
					show:false
				},
				axisTick:{
					show:false
				},
				axisLabel:{
					interval:0
				}
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: seriesData.data3,
        label: {
            show: true,
            position: 'top',
            valueAnimation: true
        },
				type: 'bar',
				barWidth:35,
				itemStyle:{
					borderRadius: 5,
					color:'#7a819e'
				},
        showBackground: true,
        backgroundStyle: {
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 1,
							y2: 0,
							colorStops: [{
									offset: 0, color: '#9c9bb3' // 0% 处的颜色
							}, {
								offset: 0.2, color: '#d9d9e7' // 0% 处的颜色
						},{
							offset: 0.4, color: '#d9d9e7' // 0% 处的颜色
						},{
							offset: 0.6, color: '#d9d9e7' // 0% 处的颜色
						},{
									offset: 1, color: '#dadeec' // 100% 处的颜色
							}],
							global: false // 缺省为 false
						},
						borderColor: '#ebeef8' ,
						borderWidth: 3 ,
						borderRadius: 5,
						opacity:1
        }
    }]
}
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec: {
			onInit: (canvas,width,height,dpr) => {
				chart = echarts.init(canvas, null, {
					width: width,
					height: height,
					devicePixelRatio: dpr // new
				});
				canvas.setChart(chart);
				return chart;
			}
		},
		ec1: {
			onInit: (canvas,width,height,dpr) => {
				chart1 = echarts.init(canvas, null, {
					width: width,
					height: height,
					devicePixelRatio: dpr // new
				});
				canvas.setChart(chart1);
				return chart1;
			}
    },
    ec2: {
			onInit: (canvas,width,height,dpr) => {
				chart2 = echarts.init(canvas, null, {
					width: width,
					height: height,
					devicePixelRatio: dpr // new
				});
				canvas.setChart(chart2);
				return chart2;
			}
    },
    ec3: {
			onInit: (canvas,width,height,dpr) => {
				chart3 = echarts.init(canvas, null, {
					width: width,
					height: height,
					devicePixelRatio: dpr // new
				});
				canvas.setChart(chart3);
				return chart3;
			}
		},
		leasePercent: 0.25,
		todaySales: [],
		weekSales: [],
		monthSales: [],
		customerPrice: [],
		floorList: [],
		formatList: [],
		yearSales:'',
		weekCustomerPrice:'',
		monthCustomerPrice: '',
		yearCustomerPrice: '',
		zhb:'',
		ztb:'',
		yhb:'',
		ytb:'',
		nhb:'',
		ntb:'',
	},
	handlerGobackClick(delta) {
    const pages = getCurrentPages();
    if (pages.length >= 2) {
      wx.navigateBack({
        delta: delta
      });
    } else {
      wx.switchTab({
        url: 'pages/index/index'
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
		var that = this;
		that.drawLeasePie();
		setTimeout(that.getData);
		that.getLineData();
		that.getBarData(1);
		that.getBarData(2);
		that.getBarData(3);
		wx.showLoading();
	},
	drawLeasePie() {
		let angle = Math.PI * 2 * this.data.leasePercent
		let start = Math.PI * 1.5;
		let end = Math.PI * 1.5 + angle;
		var context = wx.createCanvasContext('lease-pie')
		context.arc(170, 130, 100, start, end, false)
		context.lineTo(170, 130)
		context.setFillStyle('#00E7DB')
		context.fill()
		context.draw();

		context.setFillStyle('#2F4D63')
		context.arc(170, 130, 95, end, start, false)
		context.lineTo(170, 130)
		context.fill()
		context.draw();

		context.setFillStyle('#213340')
		context.arc(170, 130, 60, end, start, false)
		context.lineTo(170, 130)
		context.fill()
		context.draw();

		context.setFillStyle('#FFF')
		context.setFontSize(12)
		context.fillText('非会员消费', 0, 200)
		context.draw();
	},
	getData: function(e){
		util.ajax({
			url:"data-analysis/api/sg/salesDataForThisMonthThisWeekAndToday",
			method:"POST",
			success:res=>{
				if(res.success){
					let data = res.data;
					this.setData({
						todaySales: data.todaySales >10000 ? (data.todaySales/10000).toFixed(2):data.todaySales,
						weekSales: data.weekSales >10000 ? (data.weekSales/10000).toFixed(2):data.weekSales,
						monthSales: data.monthSales >10000 ? (data.monthSales/10000).toFixed(2):data.monthSales,
						customerPrice: data.customerPrice >10000 ? (data.customerPrice/10000).toFixed(2):data.customerPrice,
						yearSales: data.yearSales >10000 ? (data.yearSales/10000).toFixed(2):data.yearSales,
						weekCustomerPrice: data.weekCustomerPrice >10000 ? (data.weekCustomerPrice/10000).toFixed(2):data.weekCustomerPrice,
						monthCustomerPrice: data.monthCustomerPrice >10000 ? (data.monthCustomerPrice/10000).toFixed(2):data.monthCustomerPrice,
						yearCustomerPrice: data.yearCustomerPrice>10000 ? (data.yearCustomerPrice/10000).toFixed(2):data.yearCustomerPrice,
					})
				}
				wx.hideLoading();
			},
			fail:error=>{
				wx.hideLoading();
			}
		})			
	},
	getLineData: function(e){
		let sendData =  JSON.stringify({
			startTime: util.getNowDate(new Date(),'-')+" 00:00:00",
			endTime: util.formatTime(new Date()),
			order: "desc",
			groupType: 1
		});
		util.ajax({
			url:"data-analysis/api/sg/businessTypeSalesAnalysis",
			method:"POST",
			data:sendData,
			success:res=>{
				// if(res.success){
				// 	lineChartData.xData = [];
				// 	lineChartData.seriesData = [];
				// 	for(let i = 0; i <res.data.length;i++){
				// 		lineChartData.xData.push(res.data[i].timestr.substring(4,6));
				// 		lineChartData.seriesData.push((res.data[i].sales/10000).toFixed(2));
				// 	}
				// }
				let chartSet = function (){
					if(chart1){
						console.log(44333,chart)
						// chart.setOption(initOption())
						chart1.setOption(initOptions1())
						chart2.setOption(initOptions2())
						chart3.setOption(initOptions3())
						console.log('set linechart')
					}else{
						setTimeout(()=>{
							console.log("linechart is null")
							chartSet();
						},500)
					}
				}
				chartSet();
				wx.hideLoading();
			},
			fail:error=>{
				wx.hideLoading();
			}
		})			
	},
	getBarData: function(num){
		util.ajax({
			url:"data-analysis/api/sg/cashRegisterIsMoreThanYearOnYear?type="+num,
			method:"POST",
			success:res=>{
				console.log(res)
				// 环比增长率=（本期数-上期数）/上期数×100%
				// 同比增长率=（本期数-去年同期数）/去年同期数×100%
				let hb = (((res.data.byData - res.data.dataYearOnYear)/ res.data.byData) * 100).toFixed(2);
				hb = isNaN(hb)?0:hb
				let tb = (((res.data.byData - res.data.thisPeriodOfData)/ res.data.thisPeriodOfData) * 100).toFixed(2);
				tb = isNaN(tb)?0:tb
				if(res.success){
					if(num==1) {

						seriesData.data1 = Object.values(res.data).filter(item=>typeof(item)=="number") 
						this.setData({
							zhb:res.data.ringRatio,
							ztb:res.data.coRate   
						})
					}
					if(num==2) {

						seriesData.data2 = Object.values(res.data).filter(item=>typeof(item)=="number") 
						this.setData({
							yhb:res.data.ringRatio,
							ytb:res.data.coRate,
						})
					}
					if(num==3) {

						seriesData.data3 = Object.values(res.data).filter(item=>typeof(item)=="number") 
						this.setData({
							nhb:res.data.ringRatio,
							ntb:res.data.coRate,
						})
					}
				}
				let chartSet = function (){
					if(chart1){
						console.log(44333,chart)
						// chart.setOption(initOption())
						chart1.setOption(initOptions1())
						chart2.setOption(initOptions2())
						chart3.setOption(initOptions3())
						console.log('set linechart')
					}else{
						setTimeout(()=>{
							console.log("linechart is null")
							chartSet();
						},500)
					}
				}
				chartSet();
				wx.hideLoading();
			},
			fail:error=>{
				wx.hideLoading();
			}
		})			
	},


/**
	 * 图表切换
*/
	chartsClick: function(e){
		var that = this;
		that.setData({
			num: e.currentTarget.dataset.num
		});
	},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
	chart = null;
	chart1 = null;
	chart2 = null;
	chart3 = null;
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})