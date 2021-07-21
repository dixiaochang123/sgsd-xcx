// pages/indexinfo3/indexinfo3.js
import * as echarts from '../../ec-canvas/echarts';
const util = require('../../utils/util');
const app = getApp();
//曲线图
var chart = null;
let lineChartData = {
	xData:[],
	seriesData: [],
	total: 0
}
var chart1 = null;
let lineChartData1={
	seriesData:[],
	xData:[]
}
let initOption = function () {
	return {
		grid: {
			left: '5%',
			right: '5%',
			top: '10%',
			bottom: '5%',
			containLabel: true
		},
		dataZoom: [{
			type: "inside",
			endValue: 8
		}],
		tooltip: {
			show: true,
			trigger: 'axis'
		},
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
						}
					}
				},
			},
			data: lineChartData.seriesData
		}]
	}
}
function initOption1(){
	return {
		grid: {
			left: '5%',
			right: '5%',
			top: '10%',
			bottom: '5%',
			containLabel: true
		},
		dataZoom: [{
			type: "inside",
			endValue: 8
		}],
		tooltip: {
			show: true,
			trigger: 'axis'
		},
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
			data: lineChartData1.xData
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
			//interval: 00, //间隔
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
			smooth: true,
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
						}
					}
				},
			},
			data: lineChartData1.seriesData
		}]
	};
}
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
    num: 1,
    nums: 1,
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
			onInit: (canvas, width, height, dpr) =>{
				chart1 = echarts.init(canvas, null, {
					width: width,
					height: height,
					devicePixelRatio: dpr // new
			});
			canvas.setChart(chart1);
			return chart1;
		  }
    },
    remainSpace: [],
		totalSpace: [],
		total: lineChartData.total,
		dayAppearanceData: [],
		dayEntryData: [],
		dayStrandedData: [],
		yesterdayYearOnYearIn: [],
		yesterdayYearOnYearOut: []
	},
	handlerGobackClick(delta) {
    const pages = getCurrentPages();
    if (pages.length >= 2) {
      wx.navigateBack({
        delta: delta
      });
    } else {
      wx.switchTab({
        url: '/pages/index/index'
      });
    }
  },

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
    wx.showLoading();
    this.getData();
		this.getLineData();
		this.getData1();
		this.getLineData2();
  },
  getData: function(e){
		util.ajax({
			url:"data-analysis/api/parkingLotStatistics/parkingInformation",
			method:"POST",
			success:res=>{
				if(res.success){
					this.setData({
						remainSpace: res.data.remainSpace,
						totalSpace: res.data.totalSpace
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
			url:"data-analysis/api/parkingLotStatistics/parkingSpaceRevenue?type=2",
			method:"POST",
			success:res=>{
				if(res.success){
					lineChartData.xData = [];
					lineChartData.seriesData = [];
					lineChartData.total = 0;
					for(let i = 0; i < res.data.length; i++){
						lineChartData.total += res.data[i].income
						lineChartData.xData.push(res.data[i].date.substring(8,10))
						lineChartData.seriesData.push(res.data[i].income)
					}
					this.setData({
						total: lineChartData.total
					})
				}
				this.initChart();
				wx.hideLoading();
			},
			fail:error=>{
				wx.hideLoading();
			}
		})
	},
	getLineData1: function(e){
		util.ajax({
			url:"data-analysis/api/parkingLotStatistics/parkingSpaceRevenue?type=3",
			method:"POST",
			success:res=>{
				if(res.success){
					lineChartData.xData = [];
					lineChartData.seriesData = [];
					lineChartData.total = 0;
					for(let i = 0; i < res.data.length; i++){
						lineChartData.total += res.data[i].income
						lineChartData.xData.push(res.data[i].date.substring(6,8))
						lineChartData.seriesData.push(res.data[i].income)
					}
					this.setData({
						total: lineChartData.total
					})
					this.initChart();
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
			url:"data-analysis/api/parkingLotStatistics/vehicleAccessInformation",
			method:"POST",
			success:res=>{
				if(res.success){
					this.setData({
						dayAppearanceData: res.data.dayAppearanceData,//今日出
						dayEntryData: res.data.dayEntryData,//今日入
						dayStrandedData: res.data.dayStrandedData,//今日滞留
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
	getLineData2: function(e){
		util.ajax({
			url:"data-analysis/api/parkingLotStatistics/trafficVolume?type=2",
			method:"POST",
			success:res=>{
				if(res.success){
					lineChartData1.xData = [];
					lineChartData1.seriesData = [];
					for(let i = 0; i <res.data.length;i++){
						lineChartData1.xData.push(res.data[i].date.substring(8,10));
						lineChartData1.seriesData.push(res.data[i].trafficVolume);
          }
          this.initChart1();
				}
				wx.hideLoading();
			},
			fail:error=>{
				wx.hideLoading();
			}
		})			
	},
	getLineData3: function(e){
		util.ajax({
			url:"data-analysis/api/parkingLotStatistics/trafficVolume?type=3",
			method:"POST",
			success:res=>{
				if(res.success){
					lineChartData1.xData = [];
					lineChartData1.seriesData = [];
					for(let i = 0; i <res.data.length;i++){
						lineChartData1.xData.push(res.data[i].date.substring(6,8));
						lineChartData1.seriesData.push(res.data[i].trafficVolume);
          }
          this.initChart1();
				}
				wx.hideLoading();
			},
			fail:error=>{
				wx.hideLoading();
			}
		})			
  },
  initChart(){
		let chartSet = function (){
			if(chart){
				console.log(chart)
				chart.setOption(initOption())
				console.log('set chart')
			}else{
				setTimeout(()=>{
					console.log("chart is null")
					chartSet();
				},500)
			}
		};
		chartSet();
	},
  initChart1(){
		let chartSet = function (){
			if(chart1){
				console.log(chart1)
				chart1.setOption(initOption1())
				console.log('set chart')
			}else{
				setTimeout(()=>{
					console.log("chart is null")
					chartSet();
				},500)
			}
		};
		chartSet();
	},
	/**
	 * 图表切换
	 */
	chartsClick: function(e) {
		var num = e.currentTarget.dataset.num;
		if (this.data.num == num) {return false} 
		else {
			this.setData({num: e.currentTarget.dataset.num})
		}
		if(num == 1){
			this.getLineData();
		}
		else if(num == 2){
			this.getLineData1();
		}
		this.setData({
			num: e.currentTarget.dataset.num
		})
	},
	chartsClicka: function (e) {
		var that = this;
		var nums = e.currentTarget.dataset.nums;
		if (that.data.nums == nums) {return false} 
		else {
			that.setData({nums: e.currentTarget.dataset.nums})
		}
		if(nums == 1){
			that.getLineData2();
		}
		else if(nums == 2){
			that.getLineData3();
		}
		that.setData({
			nums: e.currentTarget.dataset.nums
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
    chart1 = null;
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