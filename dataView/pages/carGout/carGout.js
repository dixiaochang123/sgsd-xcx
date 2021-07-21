// pages/carGout/carGout.js
import * as echarts from '../../../ec-canvas/echarts';
const util = require('../../../utils/util');
const app = getApp();
//曲线图
var chart = null;
var chart1 = null;
var chart2 = null;
var chart3 = null;
let lineChartData={
	seriesData:[],
	xData:[]
}
function initOption(){
	return {
		grid: {
			left: '5%',
			right: '5%',
			top: '10%',
			bottom: '5%',
			containLabel: true
		},
		// tooltip: {
		// 	show: true,
		// 	trigger: 'axis'
		// },
		dataZoom: [{
			type: "inside",
			startValue:lineChartData.xData.length - 4,
			endValue: lineChartData.xData.length - 1
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
			type: 'value'
		},
		series: [{
			name: '',
			type: 'bar',
			barWidth:35,
			color: ['#7a819e'],
			smooth: true,
			markPoint: {
				symbol:'circle',
				symbolSize:20,
			},
			itemStyle: {
				normal: {
					label: {
						color: '#7a819e',
						show: true, //开启显示
						position: 'top', //在上方显示
						textStyle: { //数值样式
							color: '#7a819e',
							fontSize: 10
						}
					}
				},
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
        },
			data: lineChartData.seriesData
		}]
	};
}
function initOptions1(){
	return  {
		grid: {
			left: 60 ,
			right: 90 ,
		},
    xAxis: {
        type: 'category',
				data: ['本周', '上周', '19年同期'],
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
        data: [120, 180, 150],
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
			left: 60 ,
			right: 90 ,
		},
    xAxis: {
        type: 'category',
				data: ['本周', '上周', '19年同期'],
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
        data: [120, 180, 150],
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
			left: 60 ,
			right: 90 ,
		},
    xAxis: {
        type: 'category',
				data: ['本周', '上周', '19年同期'],
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
        data: [120, 180, 150],
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
		remainSpace:0
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
		wx.showLoading();
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
						lineChartData.xData.push(res.data[i].date.substring(8,10));
						lineChartData.seriesData.push(res.data[i].trafficVolume);
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
						lineChartData.xData.push(res.data[i].date.substring(6,8));
						lineChartData.seriesData.push(res.data[i].trafficVolume);
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