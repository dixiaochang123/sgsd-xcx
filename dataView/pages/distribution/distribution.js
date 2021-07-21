// pages/distribution/distribution.js
import * as echarts from '../../../ec-canvas/echarts';
const util = require('../../../utils/util');
const app = getApp();
//曲线图
let chart = null;
let pieChartData = {
	seriesData:[],
}
function initOption() {
	return {
		tooltip: {
			trigger: 'item',
			formatter: '{a}\n{b}: {c} ({d}%)'
		},
		color: ['#35DFFF', '#FF7D4F','#288EFF', '#FF565D', '#5F45FF', '#B8E61C', '#862fb3'],
		legend: {
			show: false
		},
		series: [{
			name: '商铺数量',
			type: 'pie',
			radius: ['40%', '70%'],
			center: ['50%', '50%'],
			// roseType: 'radius',
			// roseType: false ,
			startAngle:180,
			data: pieChartData.seriesData,
			label: {
				color: '#3f3d60',
				formatter: "{b}\n{d}%"
			},
			// labelLine: {
			// 	lineStyle: {
			// 		color: '#fff'
			// 	}
			// },
			animationType: 'scale',
			animationEasing: 'elasticOut',
			animationDelay: function (idx) {
					return Math.random() * 200;
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
			onInit: (canvas, width, height, dpr) => {
				chart = echarts.init(canvas, null, {
					width: width,
					height: height,
					devicePixelRatio: dpr // new
				});
				canvas.setChart(chart);
				return chart;
			},
		},
		operationList: []
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
		wx.showLoading();
	},
	getData: function(e){
		wx.request({
			url: app.globalData.baseUrlOP+'rest/sgsdbi/countlocopertype',
			dataType: 'json',
			data: JSON.stringify({
				apiKey: "STANDRAD"
			}),
			header: {
				"content-type":'application/json'
			},
      method:"POST",
      success:res=>{
				if(res.data.success){
					pieChartData.seriesData = [];
					for(let i = 0; i<res.data.data.length; i++)
					{
						pieChartData.seriesData.push(
							{
								value:res.data.data[i].storeCount,
								name: res.data.data[i].operationType
							}
						)
					}
          this.setData({
            operationList: res.data.data
          })
				}
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