// pages/revenue/revenue.js
import * as echarts from '../../../ec-canvas/echarts';
const util = require('../../../utils/util');
var chart = null;
let lineChartData={
	seriesData:[],
	xData:[]
}
function initOption(){
	return {
		grid: {
			left: 10,
			right: 30,
			top: 20,
			bottom: '10%',
			containLabel: false
		},
		// tooltip: {
		// 	show: true,
		// 	trigger: 'axis',
		// 	// formatter
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
			show:false,
			
			offset: 0 ,
			splitLine:{
				show: false
			}
		},
		series: [{
			name: '',
			type: 'bar',
			barWidth:30,
			color: ['#7a819e'],
			label: {
				show: true,
				position: 'top',
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
			data: lineChartData.seriesData,
			emphasis:{
				label:{
					position: 'top',
					show: true,
					color:"#e5004f"
				},
				itemStyle:{
					color:"#e5004f"
				}
			}
		}]
	};
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
		remainSpace: [],
		totalSpace: '',
		totalSpace11:''
	},
	getLineData: function(e){
		util.ajax({
			url:"data-analysis/api/parkingLotStatistics/parkingSpaceRevenue?type=2",
			method:"POST",
			success:res=>{
				if(res.success){
					lineChartData.xData = [];
					lineChartData.seriesData = [];
					for(let i = 0; i <res.data.length;i++){
						lineChartData.xData.push(res.data[i].date.substring(8,10)+'日');
						lineChartData.seriesData.push(res.data[i].income);
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
			url:"data-analysis/api/parkingLotStatistics/parkingSpaceRevenue?type=3",
			method:"POST",
			success:res=>{
				if(res.success){
					lineChartData.xData = [];
					lineChartData.seriesData = [];
					for(let i = 0; i <res.data.length;i++){
						lineChartData.xData.push(res.data[i].date.substring(6,8)+'月');
						lineChartData.seriesData.push(res.data[i].income);
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
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		wx.showLoading();
		this.getData(2);
		this.getLineData();
	},
	getData: function(nub){
		util.ajax({
			url:"data-analysis/api/parkingLotStatistics/parkingDataRevenueData?type="+nub,
			method:"POST",
			success:res=>{
				if(res.success){
					this.setData({
						totalSpace: res.data>10000?(res.data/10000).toFixed(2):res.data,
						totalSpace11: res.data
					})
				}
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
		var num = e.currentTarget.dataset.num;
		if (that.data.num == num) {return false} 
		else {
			that.setData({num: e.currentTarget.dataset.num})
		}
		if(num == 1){
			that.getData(2);
			that.getLineData();
		}
		else if(num == 2){
			that.getData(3);
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