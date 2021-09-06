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
			// formatter: function(pram){
			// 	console.log(pram)
			// 	return pram.name+'\n'+'   '+pram.percent+'%'
			// },
		},
		color: ['#35DFFF', '#FF7D4F','#288EFF', '#FF565D', '#5F45FF', '#B8E61C', '#862fb3'],
		legend: {
			show: false
		},
		series: [ {
			name: '商铺数量',
			type: 'pie',
			radius: ['50%', '70%'],
			center: ['50%', '50%'],
			label: {
				normal: {
					show: true,
					position: 'outside',
					formatter: '{d}%',
					borderRadius: 20,
					color:"#5e5d7c",
					formatter: function(pram){
						console.log(pram)
						return pram.name+'\n'+pram.percent+'%'
				},
				},
				emphasis: {
					show: true,
					textStyle: {
						fontSize: '12',
						fontWeight: 'bold'
					}
				}
			},
			data: pieChartData.seriesData,
			itemStyle: {
				// borderRadius: 10,
				borderColor: '#e3e7f5',
				borderWidth: 4
			},
		},{
			itemStyle: {
				normal: {
					color: '#e3e6f5',
					borderColor: {
						type: 'radial',
						x: 0.5,
						y: 0.5,
						r: 0.5,
						colorStops: [{
								offset: 0, color: '#000000' // 0% 处的颜色
						}, {
								offset: 1, color: '#e4e7f6' // 100% 处的颜色
						}],
						global: false // 缺省为 false
					} ,
					borderWidth: 5 ,
				}
			},
			type: 'pie',
			hoverAnimation: false,
			radius: ['60%', '80%'],
			center: ["50%", "50%"],
			label: {
				normal: {
					show: false
				}
			},
			data: [{
				value: 1,
			}],
			z: -1
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
		operationList: [],
		color: ['#35DFFF', '#FF7D4F','#288EFF', '#FF565D', '#5F45FF', '#B8E61C', '#862fb3']
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