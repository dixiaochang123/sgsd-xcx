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
			center: ['50%', '50%'],
			data: resultData,
			silent: true,
			label: {
				show: true
			},
			itemStyle: {
				normal: {
					label: {
						position: 'inner',
						formatter: function (params) {
							return params.percent + '%';
						},
						textStyle: {
							color: '#fff'
						}
					},
					labelLine: {
						show: false
					}
				}
			},
		},
		{
			name: "",
			type: "pie",
			silent: true,
			radius: ['40%', "60%"],
			center: ['50%', '50%'],
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
				formatter: function (pram) {
					return pram.name + '\n' + pram.value + 'm²'
				},
				overflow: 'none'
			},
			labelLine: {
				lineStyle: {
					color: '#2e2f39'
				},
				showAbove: true,
				length:2
			}
		},
		],
	};
}

function initOption1() {
	return {
		grid: {
			top: 20,
			bottom: '10%',
			containLabel: false
		},
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
			name: '',
			type: 'pie',
			radius: [0, '40%'],
			tooltip: { show: false },
			label: {
				show: false,
			},
			itemStyle: {
				normal: {
					color: '#ffffff',
				},
			},
			data: [
				{
					value: 100,
				},
			],
		}, {
			name: '总铺位',
			type: 'pie',
			radius: ['40%', '60%'],
			clockwise: false,
			label: {
				show: false,
			},
			data: [{
				value: chartData.nullCount,
				name: '空铺位',
				selected: true
			},
			{
				value: chartData.rentCount,
				name: '已租铺位',

			}
			],
			label: {
				textStyle: {
					color: '#000',
					align: 'left',
					fontSize:9,
				},
				formatter: '{b}\n{c}户\n{d}%',
				overflow: 'none'
			},
			itemStyle: {
				normal:{
					labelLine: {
						show: true,//数据标签引导线
						length: 2,
						lineStyle: {
								width: 1,
								type: 'solid'
						}
				}
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
		Count:0,
		nullCount: 0,
		rentCount: 0,
		nullRate: 0,
		rentRate: 0,
		imgSrc: '',//饼图替代图片src
		options: [{
			city_id: '所有楼层',
			city_name: '所有楼层'
		}],
		options2:[],
		options1:[],
		selected: {}
	},
	change(e) {
		this.setData({
			selected: { ...e.detail },
			imgSrc: '',
		})
		console.log(this.data.selected,this.data.options1,this.data.options2)
		let area = this.data.options2.filter(item=>item.floorCode==this.data.selected.id);
		let leva = this.data.options1.filter(item=>item.floorCode==this.data.selected.id);
		this.setData({
			selected: { ...e.detail },
			areaTotal: area[0].rentedAreaTotal,
			rentedAreaTotal: area[0].leasedAreaTotal
		})
		areaTotal = area[0].rentedAreaTotal;
		rentedAreaTotal = area[0].leasedAreaTotal;
		console.log(areaTotal,rentedAreaTotal)
		let chartSet = function () {
			if (chart) {
				chart.setOption(initOption())
				// setTimeout(() => {
				// 	this.handleCanvarToImg()
				// }, 2000)
				console.log('set piechart')
			} else {
				setTimeout(() => {
					console.log("piechart is null")
					chartSet();
				}, 500)
			}
		}.bind(this)
		chartSet();
		wx.hideLoading();
		// setTimeout(() => {
		// 	this.handleCanvarToImg()
		// }, 2000)

		chartData.Count = leva[0].totalShopBunkCount,
		chartData.nullCount = leva[0].unleasedShopBunkCount,
		chartData.rentCount = leva[0].leasedShopBunkCount,
		// chartData.nullRate = leva[0].shopBunkNullRate,
		this.setData({
			Count:leva[0].totalShopBunkCount,
			nullCount: leva[0].unleasedShopBunkCount,
			rentCount: leva[0].leasedShopBunkCount,
			// nullRate: leva[0].shopBunkNullRate,
			nullRate:  (leva[0].unleasedShopBunkCount / leva[0].totalShopBunkCount * 100).toFixed(2),
			rentRate: (leva[0].leasedShopBunkCount / leva[0].totalShopBunkCount * 100).toFixed(2)
		})
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

	},
	handleticketarea() {
		wx.navigateTo({
			url: '/dataView/pages/areastatistics/areastatistics?id='+this.data.selected.id
		})
	},
	handleticketberth() {
		wx.navigateTo({
			url: '/dataView/pages/berthstatistics/berthstatistics?id='+this.data.selected.id
		})
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
		// this.getPieChartData();
		this.drawLeasePie();
	},
	handleCanvarToImg() {
		let that = this;
		this.selectComponent('#mychart-dom-bar').canvasToTempFilePath({
			success: function (res) {
				// console.log('imgSrc',res.tempFilePath);
				that.setData({
					imgSrc: res.tempFilePath,
				});

			},
			fail: function (err) {
				console.log('canvasErr', err)
			}
		}, this);
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
					let arr = []
					res.data.data = res.data.data.reverse()
					res.data.data.map((item, index) => {
						let { floorCode, floorDesci } = item;
						arr[index] = {
							city_id: floorCode,
							city_name: floorDesci
						}

					})
					// this.setData({
					// 	options: arr,
					// 	selected: {
					// 		id: arr[0].city_id,
					// 		name: arr[0].city_name
					// 	}
					// })
					// arr = arr.reverse()
					areaTotal = res.data.data[0].rentedAreaTotal;
					rentedAreaTotal = res.data.data[0].leasedAreaTotal;
					console.log(9999,arr)
					this.setData({
						options2:res.data.data,
						options: arr,
						selected: {
							id: arr[0].city_id,
							name: arr[0].city_name
						},
						areaTotal: res.data.data[0].rentedAreaTotal,
						rentedAreaTotal: res.data.data[0].leasedAreaTotal
					})
					this.getPieChartData()
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
				setTimeout(() => {
					// this.handleCanvarToImg()
				}, 2000)
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
					let sss = res.data.dataList.filter(item=>item.floorCode==this.data.selected.id)
					console.log(res.data.dataList,sss)
					chartData.Count = sss[0].totalShopBunkCount;
						chartData.nullCount = sss[0].unleasedShopBunkCount;
						chartData.rentCount = sss[0].leasedShopBunkCount;
						// chartData.nullRate = sss[0].shopBunkNullRate;
						this.setData({
							options1:res.data.dataList,
							Count:sss[0].totalShopBunkCount,
							nullCount: sss[0].unleasedShopBunkCount,
							rentCount: sss[0].leasedShopBunkCount,
							// nullRate: sss[0].shopBunkNullRate,
							nullRate:  (sss[0].unleasedShopBunkCount / sss[0].totalShopBunkCount * 100).toFixed(2),
							rentRate: (sss[0].leasedShopBunkCount / sss[0].totalShopBunkCount * 100).toFixed(2)
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