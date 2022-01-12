// pages/carGout/carGout.js
import * as echarts from '../../../ec-canvas/echarts';
const util = require('../../../utils/util');
const app = getApp();
let yearFit = app.globalData.yearFit-1
//曲线图
var chart = null;
var chart1 = null;
var chart2 = null;
var chart3 = null;
var position = []
let lineChartData={
	seriesData:[],
	xData:[]
}
let seriesData = {
	data1:[120, 180, 150],
	data2:[120, 180, 150],
	data3:[120, 180, 150],
}
function initOption(){
	return {
		grid: {
			left: '5%',
			right: '5%',
			top: 20,
			bottom: '5%',
			containLabel: true
		},
		// tooltip: {
		// 	show: true,
		// 	trigger: 'axis'
		// },
		dataZoom: [{
			type: "inside",
			startValue:lineChartData.xData.length - 8,
			endValue: lineChartData.xData.length - 1,
			zoomLock: true
		}],
		xAxis: {
			type: 'category',
			axisLine:{
				show:false
			},
			axisTick:{
				show:false
			},
			axisLabel:{
				interval:0
			},
			data: lineChartData.xData
		},
		yAxis: {
			type: 'value',
			splitLine:{
				show: false
			}
		},
		series: [{
			name: '',
			type: 'bar',
			barMaxWidth:30,
			color: ['#7a819e'],
			label: {
				show: true,
				position: 'top',
				// offset:lineChartData.seriesData.map((item,index)=>{
				// 	return index%2==0?[0,0]:[0,-30]
				// }),
				valueAnimation: true
			},
			// smooth: true,
			// markPoint: {
			// 	symbol:'circle',
			// 	symbolSize:20,
			// },
			itemStyle: {
				borderRadius: 5,
				borderColor: 'transparent',
				borderWidth: 3,
				color: '#bdc3dd',
				shadowColor: '#8a8895',
				shadowBlur: 3,
				shadowOffsetX: -1 ,
				shadowOffsetY: -2 ,
				
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
						offset: 0,
						color: '#9c9bb3' // 0% 处的颜色
					}, {
						offset: 0.2,
						color: '#e3e5f2' // 0% 处的颜色
					}, {
						offset: 0.4,
						color: '#e3e5f2' // 0% 处的颜色
					}, {
						offset: 0.6,
						color: '#e3e5f2' // 0% 处的颜色
					}, {
						offset: 1,
						color: '#dadeec' // 100% 处的颜色
					}],
					global: false // 缺省为 false
				},
				borderColor: '#ebeef8',
				borderWidth: 3,
				borderRadius: 5,
				opacity: 1
			},
			emphasis:{
				label:{
					color:"#e5004f"
				},
				itemStyle:{
					color:"#e5004f"
				}
			},
			// data: lineChartData.seriesData
			data: [5324,2644],
			data: lineChartData.seriesData
		}]
	};
}
function initOptions1() {
	return {
		grid: {
			left: 90,
			right: 90,
			bottom:80,
			top:50
		},
		xAxis: {
			type: 'category',
			data: ['本周', '上周', yearFit+'年同期'],
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				interval: 0
			}
		},
		yAxis: {
			type: 'value',
			splitLine:{
				show: false
			}
		},
		series: [{
			data: seriesData.data1,
			label: {
				show: true,
				position: 'top',
				valueAnimation: true
			},
			type: 'bar',
			barWidth: 35,
			barWidth: 40,
			itemStyle: {
				borderRadius: 5,
				borderColor: 'transparent',
				borderWidth: 3,
				color: '#bdc3dd',
				shadowColor: '#8a8895',
				shadowBlur: 3,
				shadowOffsetX: -1 ,
				shadowOffsetY: -2 ,
				
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
						offset: 0,
						color: '#9c9bb3' // 0% 处的颜色
					}, {
						offset: 0.2,
						color: '#e3e5f2' // 0% 处的颜色
					}, {
						offset: 0.4,
						color: '#e3e5f2' // 0% 处的颜色
					}, {
						offset: 0.6,
						color: '#e3e5f2' // 0% 处的颜色
					}, {
						offset: 1,
						color: '#dadeec' // 100% 处的颜色
					}],
					global: false // 缺省为 false
				},
				borderColor: '#ebeef8',
				borderWidth: 3,
				borderRadius: 5,
				opacity: 1
			}
		}]
	}
}

function initOptions2() {
	return {
		grid: {
			left: 90,
			right: 90,
			bottom:80,
			top:50
		},
		xAxis: {
			type: 'category',
			data: ['本月', '上月', yearFit+'年同期'],
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				interval: 0
			}
		},
		yAxis: {
			type: 'value',
			splitLine:{
				show: false
			}
		},
		series: [{
			data: seriesData.data2,
			label: {
				show: true,
				position: 'top',
				valueAnimation: true
			},
			type: 'bar',
			barWidth: 35,
			barWidth: 40,
			itemStyle: {
				borderRadius: 5,
				borderColor: 'transparent',
				borderWidth: 3,
				color: '#bdc3dd',
				shadowColor: '#8a8895',
				shadowBlur: 3,
				shadowOffsetX: -1 ,
				shadowOffsetY: -2 ,
				
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
						offset: 0,
						color: '#9c9bb3' // 0% 处的颜色
					}, {
						offset: 0.2,
						color: '#e3e5f2' // 0% 处的颜色
					}, {
						offset: 0.4,
						color: '#e3e5f2' // 0% 处的颜色
					}, {
						offset: 0.6,
						color: '#e3e5f2' // 0% 处的颜色
					}, {
						offset: 1,
						color: '#dadeec' // 100% 处的颜色
					}],
					global: false // 缺省为 false
				},
				borderColor: '#ebeef8',
				borderWidth: 3,
				borderRadius: 5,
				opacity: 1
			}
		}]
	}
}

function initOptions3() {
	return {
		grid: {
			left: 90,
			right: 90,
			bottom:80,
			top:50
		},
		xAxis: {
			type: 'category',
			data: ['本年',(yearFit)+'年',  (yearFit-1)+'年'],
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				interval: 0
			}
		},
		yAxis: {
			type: 'value',
			splitLine:{
				show: false
			}
		},
		series: [{
			data: seriesData.data3,
			label: {
				show: true,
				position: 'top',
				valueAnimation: true
			},
			type: 'bar',
			barWidth: 35,
			barWidth: 40,
			itemStyle: {
				borderRadius: 5,
				borderColor: 'transparent',
				borderWidth: 3,
				color: '#bdc3dd',
				shadowColor: '#8a8895',
				shadowBlur: 3,
				shadowOffsetX: -1 ,
				shadowOffsetY: -2 ,
				
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
						offset: 0,
						color: '#9c9bb3' // 0% 处的颜色
					}, {
						offset: 0.2,
						color: '#e3e5f2' // 0% 处的颜色
					}, {
						offset: 0.4,
						color: '#e3e5f2' // 0% 处的颜色
					}, {
						offset: 0.6,
						color: '#e3e5f2' // 0% 处的颜色
					}, {
						offset: 1,
						color: '#dadeec' // 100% 处的颜色
					}],
					global: false // 缺省为 false
				},
				borderColor: '#ebeef8',
				borderWidth: 3,
				borderRadius: 5,
				opacity: 1
			}
		}]
	}
}
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		num: 1,
		ec: {
			onInit: (canvas, width, height, dpr) =>{
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
		dayAppearanceData: [],
		dayEntryData: [],
		//dayStrandedData: [],
		yesterdayYearOnYearIn: [],
		yesterdayYearOnYearOut: [],
		remainSpace:0,

		zhb:'',
		ztb:'',
		yhb:'',
		ytb:'',
		nhb:'',
		ntb:'',
		ztbisadd:true,
		zhbisadd:true,
		ytbisadd:true,
		yhbisadd:true,
		ntbisadd:true,
		nhbisadd:true,
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
		that.getData();
		that.getData1();
		that.getLineData();
		that.passengerDataFromTheSameYear(1);
		that.passengerDataFromTheSameYear(2);
		that.passengerDataFromTheSameYear(3);
		wx.showLoading();
	},
	passengerDataFromTheSameYear: function (num) {
		console.log(num)
		let that = this;
		wx.showLoading();
		util.ajax({
			url: "data-analysis/api/parkingLotStatistics/carFlowCycleWithData?type="+num,
			method: "POST",
			success: res => {
				console.log(res)
				if (res.success) {
					console.log(333333,res.data)
					// 环比增长率=（本期数-上期数）/上期数×100%
						// 同比增长率=（本期数-去年同期数）/去年同期数×100%
					let hb = (((res.data.byData - res.data.dataYearOnYear)/ res.data.byData) * 100).toFixed(2);
					let tb = (((res.data.byData - res.data.thisPeriodOfData)/ res.data.thisPeriodOfData) * 100).toFixed(2);
					if(num==1) {

						seriesData.data1 = Object.values(res.data).filter(item=>typeof(item)=="number") 
						this.setData({
							ztb:res.data.coRate.search("-") != -1?res.data.coRate.substr(1):res.data.coRate,
							zhb:res.data.ringRatio.search("-") != -1?res.data.ringRatio.substr(1):res.data.ringRatio,
							ztbisadd:res.data.coRate.search("-") != -1?false:true,
							zhbisadd:res.data.ringRatio.search("-") != -1?false:true,
						})
					}
					if(num==2) {

						seriesData.data2 = Object.values(res.data).filter(item=>typeof(item)=="number") 
						this.setData({
							ytb:res.data.coRate.search("-") != -1?res.data.coRate.substr(1):res.data.coRate,
							yhb:res.data.ringRatio.search("-") != -1?res.data.ringRatio.substr(1):res.data.ringRatio,
							ytbisadd:res.data.coRate.search("-") != -1?false:true,
							yhbisadd:res.data.ringRatio.search("-") != -1?false:true,
						})
					}
					if(num==3) {

						seriesData.data3 = Object.values(res.data).filter(item=>typeof(item)=="number")
						// [seriesData.data3[0], seriesData.data3[1]] = [seriesData.data3[1], seriesData.data3[0]];
						// console.log('seriesData.data3',seriesData.data3)
						this.setData({
							ntb:res.data.coRate.search("-") != -1?res.data.coRate.substr(1):res.data.coRate,
							nhb:res.data.ringRatio.search("-") != -1?res.data.ringRatio.substr(1):res.data.ringRatio,
							ntbisadd:res.data.coRate.search("-") != -1?false:true,
							nhbisadd:res.data.ringRatio.search("-") != -1?false:true,
						})
					}
					let chartSet = function () {
						if (chart) {
							chart1.setOption(initOptions1())
							chart2.setOption(initOptions2())
							chart3.setOption(initOptions3())
							console.log('set chart')
							
						} else {
							setTimeout(() => {
								console.log("chart is null")
								chartSet();
							}, 500)
						}
					}
					chartSet();
					wx.hideLoading();
				}
			},
			fail: error => {
				wx.hideLoading();
			}
		})
	},
	getData: function(e){
		util.ajax({
			url:"data-analysis/api/parkingLotStatistics/vehicleAccessInformation",
			method:"POST",
			success:res=>{
				if(res.success){
					this.setData({
						dayAppearanceData: res.data.dayAppearanceData,//今日出
						dayEntryData: res.data.dayEntryData,//今日入
						//dayStrandedData: res.data.dayStrandedData,//今日滞留
						yesterdayYearOnYearIn: res.data.yesterdayYearOnYearIn,//入比
						yesterdayYearOnYearOut: res.data.yesterdayYearOnYearOut,//出比
					})
				}
				wx.hideLoading();
			},
			fail:error=>{
				wx.hideLoading();
			}
		})			
	},
	getData1: function(e){
		util.ajax({
			url:"data-analysis/api/parkingLotStatistics/parkingInformation",
			method:"POST",
			success:res=>{
				if(res.success){
					this.setData({
						remainSpace: res.data.remainSpace,
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
		util.ajax({
			url:"data-analysis/api/parkingLotStatistics/trafficVolume?type=2",
			method:"POST",
			success:res=>{
				if(res.success){
					lineChartData.xData = [];
					lineChartData.seriesData = [];
					for(let i = 0; i <res.data.length;i++){
						let date = res.data[i].date.substring(8,10)
						if(date.substr(0, 1)=='0') {
							date = date.substr(1, 2) + '日'
						} else {
							date = date.substr(0, 2) + '日'
						}
						lineChartData.xData.push(date);
						// lineChartData.seriesData.push(res.data[i].trafficVolumeName);
						lineChartData.seriesData.push({
								
							name:'' ,
							value: res.data[i].trafficVolumeName,
							label:{
								show: true,
								position: 'top',
								offset:[0,0],
								// offset:[0,0],
								valueAnimation: true
							}
						});
					}
				}
				let chartSet = function (){
					if(chart){
						chart.setOption(initOption())
						chart1.setOption(initOptions1())
						chart2.setOption(initOptions2())
						chart3.setOption(initOptions3())
						console.log('set chart')
					}else{
						setTimeout(()=>{
							console.log("chart is null")
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
	getLineData1: function(e){
		util.ajax({
			url:"data-analysis/api/parkingLotStatistics/trafficVolume?type=3",
			method:"POST",
			success:res=>{
				if(res.success){
					lineChartData.xData = [];
					lineChartData.seriesData = [];
					for(let i = 0; i <res.data.length;i++){
						let date = res.data[i].date.substring(5,8)
						if(date.substr(0, 1)=='0') {
							date = date.substr(1, 2) + '月'
						} else {
							date = date.substr(0, 2) + '月'
						}
						lineChartData.xData.push(date);
						// lineChartData.seriesData.push(res.data[i].trafficVolumeName);
						lineChartData.seriesData.push({
								
							name:'' ,
							value: res.data[i].trafficVolumeName,
							label:{
								show: true,
								position: 'top',
								// offset:i%2==0?[0,-20]:[0,0],
								// offset:[0,0],
								valueAnimation: true
							}
						});
					}
				}
				let chartSet = function (){
					if(chart){
						chart.setOption(initOption())
						console.log('set chart')
					}else{
						setTimeout(()=>{
							console.log("chart is null")
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
	chartsClick: function(e) {
		var that = this;
		var num = e.currentTarget.dataset.num;
		if (that.data.num == num) {return false} 
		else {
			that.setData({num: e.currentTarget.dataset.num})
		}
		if(num == 1){
			that.getLineData();
		}
		else if(num == 2){
			that.getLineData1();
		}
		that.setData({
			num: e.currentTarget.dataset.num
		})
	},


	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function() {
		chart = null;
	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	}
})