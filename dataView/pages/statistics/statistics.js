// pages/statistics/statistics.js
import * as echarts from '../../../ec-canvas/echarts';
const app = getApp();
//曲线图
var chart = null;
var chart1 = null;
var areaTotal = 0;
var rentedAreaTotal = 0;
let chartData = {
	Count: 0,
	nullCount: 0,
	rentCount: 0,
	nullRate: 0
}

function initOption() {
	let num = (areaTotal - rentedAreaTotal).toFixed(2)
	var resultData = [{
			value: rentedAreaTotal,
			name: "已租面积"
		},
		{
			value: num,
			name: "未租面积"
		}
	];
	return {
		// tooltip: {
		// 	trigger: 'item',
		// 	formatter: '{b}\n{c}m² ({d}%)'
		// },
		legend: {
			show: false,
		},
		color: ['#e5004f', '#4d5063'],
		series: [{
				name: "",
				type: "pie",
				radius: ["40%", "60%"],
				data: resultData,
				label: {
					show: true
				},
				itemStyle : {
					normal : {
						label : {
						position : 'inner',
						formatter : function (params){
							return params.percent + '%';},
							textStyle: {
										color: '#fff'
						}
						},
						labelLine : {
							show : false
						}
					}
				},
			},
			{
				name: "",
				type: "pie",
				radius: [0, "60%"],
				data: [{
						value: rentedAreaTotal,
						name: '已租面积',
						itemStyle: {
							normal: {
								opacity: 1
							},
							emphasis: {
								opacity: 1
							}
						}
					},
					{
						value: num,
						name: "未租面积",
						itemStyle: {
							normal: {
								opacity: 1
							},
							emphasis: {
								opacity: 1
							}
						}
					},
				],
				label: {
					textStyle: {
						color: '#000'
					},
					// formatter: '{b}\n{c}m²'
					formatter: function(pram){
						return pram.name+'\n'+'   '+pram.value+'m²'
				},
				},
				labelLine: {
					lineStyle: {
						color: '#2e2f39'
					},
					showAbove: true
				}
			},
		],
	};
}

function initOption1() {
	return {
		title: {
			text: chartData.Count + '户',
			subtext: '总铺位数',
			left: 'center',
			right: 'center',
			top: 'center',
			textStyle: {
				fontSize: 16,
				color: '#000'
			}
		},
		legend: {
			show: false
		},
		// tooltip: {
		// 	trigger: 'item',
		// 	formatter: '{b}\n{c}户 ({d}%)'
		// },
		color: ['#e5004f', '#4d5063'],
		series: [{
			name: '总铺位',
			type: 'pie',
			radius: ['40%', '60%'],
			clockwise: false,
			label: {
				show: false,
			},
			data: [{
					value: chartData.nullCount,
					name: '空铺位' + chartData.nullCount,
					selected: true
				},
				{
					value: chartData.rentCount,
					name: '已租铺位' + chartData.nullCount,

				}
			]
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
			}
		},
		ec1: {
			onInit: (canvas, width, height, dpr) => {
				chart1 = echarts.init(canvas, null, {
					width: width,
					height: height,
					devicePixelRatio: dpr // new
				});
				canvas.setChart(chart1);
				return chart1;
			}
		},
		leasePercent: 0.25,
		areaTotal: 0,
		rentedAreaTotal: 0,
		nullCount: 0,
		rentCount: 0,
		nullRate: 0,
		rentRate: 0
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
	onLoad: function (options) {
		wx.showLoading();
		this.getData();
		this.getPieChartData();
		this.drawLeasePie();
	},
	getData: function (e) {
		wx.request({
			url: app.globalData.baseUrlOP + 'rest/sgsdbi/countrentarea',
			dataType: 'json',
			data: JSON.stringify({
				apiKey: "STANDRAD"
			}),
			header: {
				"content-type": 'application/json'
			},
			method: "POST",
			success: res => {
				if (res.data.success) {
					areaTotal = res.data.data.areaTotal,
						rentedAreaTotal = res.data.data.rentedAreaTotal,
						console.log(areaTotal,rentedAreaTotal)
						this.setData({
							areaTotal: res.data.data.areaTotal,
							rentedAreaTotal: res.data.data.rentedAreaTotal
						})
				}
				let chartSet = function () {
					if (chart) {
						console.log(chart)
						chart.setOption(initOption())
						console.log('set piechart')
					} else {
						setTimeout(() => {
							console.log("piechart is null")
							chartSet();
						}, 1000)
					}
				}
				chartSet();
				wx.hideLoading();
			},
			fail: error => {
				wx.hideLoading();
			}
		})
	},
	getPieChartData: function (e) {
		wx.request({
			url: app.globalData.baseUrlOP + 'rest/sgsdbi/countlocation',
			dataType: 'json',
			data: JSON.stringify({
				apiKey: "STANDRAD"
			}),
			header: {
				"content-type": 'application/json'
			},
			method: "POST",
			success: res => {
				if (res.data.success) {
					chartData.Count = res.data.data.shopBunkCount,
						chartData.nullCount = res.data.data.shopBunkNullCount,
						chartData.rentCount = res.data.data.shopBunkRentedCount,
						chartData.nullRate = res.data.data.shopBunkNullRate,
						this.setData({
							nullCount: res.data.data.shopBunkNullCount,
							rentCount: res.data.data.shopBunkRentedCount,
							nullRate: res.data.data.shopBunkNullRate,
							rentRate: (res.data.data.shopBunkRentedCount / res.data.data.shopBunkCount * 100).toFixed(2)
						})
				}
				let chartSet1 = function () {
					if (chart1) {
						console.log(chart1)
						chart1.setOption(initOption1())
						console.log('set chart')
					} else {
						setTimeout(() => {
							console.log("chart is null")
							chartSet1();
						}, 500)
					}
				}
				chartSet1();
				wx.hideLoading();
			},
			fail: error => {
				wx.hideLoading();
			}
		})
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
		context.fillText('未租面积', 0, 200)
		context.draw();
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