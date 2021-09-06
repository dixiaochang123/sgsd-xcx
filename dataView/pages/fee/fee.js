// pages/fee/fee.js
import * as echarts from '../../../ec-canvas/echarts';
const util = require('../../../utils/util');
const app = getApp();
var chart = null;
let lineChartData = {
	seriesData:[],
	xData:[]
}
function initOption(){
	return {
		grid: {
			left: '5%',
			right: '5%',
			top: 50,
			bottom: '5%',
			containLabel: true
		},
		// tooltip: {
		// 	show: true,
		// 	trigger: 'axis'
		// },
		dataZoom: [{
			type: "inside",
			startValue:lineChartData.xData.length - 6,
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
			barWidth:30,
			color: ['#7a819e'],
			label: {
				show: false,
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
    ratio: 0,
    floorData: [],
    operationTypeData: []
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
  onLoad: function (options) {
    var that = this;
    that.getData();
    // that.getLineData1();
    wx.showLoading();
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
						lineChartData.xData.push(res.data[i].date.substring(6,8)+'月');
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
  getData: function(e){
    wx.request({
			url: app.globalData.baseUrlOP+'rest/sgsdbi/countrentcollect',
      dataType: 'json',
      data: JSON.stringify({
        apiKey: "STANDRAD",
			}),
			header: {
				"content-type":'application/json',
				"Cookie":app.globalData.sessionid
			},
			method:"POST",
			success:res=>{
				if(res.data.success){
          res.data.floorData.sort((a, b)=>{
            return a.value - b.value
          })
          res.data.operationTypeData.sort((a, b)=>{
            return a.value - b.value
          })
          let operationTypeDataArr = util.sortOther(res.data.operationTypeData,"value","name")
					this.setData({
            ratio: (res.data.ratio).toFixed(1),
						floorData: res.data.floorData,
						operationTypeData: operationTypeDataArr
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