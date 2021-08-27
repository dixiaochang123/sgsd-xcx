// pages/consumption/consumption.js
import * as echarts from '../../../ec-canvas/echarts';
const util = require('../../../utils/util');
const app = getApp();
//曲线图
var chart = null;
var chart0 = null;
//饼状图
var chart1 = null;
var chart2 = null;
var chart3 = null;
var memberSalesVolume = 0;
var nonMemberSalesVolume = 0;
let sendData = JSON.stringify({
	startTime: util.getNowDate(new Date(), '-') + " 00:00:00",
	endTime: util.formatTime(new Date()),
	order: "desc",
	limit: 5,
	groupType: 2
});
let lineChartData = {
	seriesData: [],
	xData: []
};
let lineChartData0 = {
	seriesData: [],
	xData: []
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
	data1: [120, 180, 150],
	data2: [120, 180, 150],
	data3: [120, 180, 150],
}

function initOption() {
	return {
		grid: {
			left: '5%',
			right: '5%',
			top: 30,
			bottom: '5%',
			containLabel: true
		},
		// tooltip: {
		// 	show: true,
		// 	trigger: 'axis'
		// },
		dataZoom: [{
			type: "inside",
			startValue: lineChartData.xData.length - 8,
			endValue: lineChartData.xData.length - 1,
			zoomLock: true
		}],
		xAxis: {
			type: 'category',
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				interval: 0
			},
			data: lineChartData.xData
		},
		yAxis: {
			type: 'value',
			splitLine: {
				show: false
			}
		},
		series: [{
			name: '',
			type: 'bar',
			barMaxWidth: 30,
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
				shadowOffsetX: -1,
				shadowOffsetY: -2,

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
			emphasis: {
				label: {
					color: "#e5004f"
				},
				itemStyle: {
					color: "#e5004f"
				}
			},
			data: lineChartData.seriesData
		}]
	};
}

function initOption0() {
	return {
		grid: {
			left: '2%',
			right: '10%',
			top: 30,
			bottom: '5%',
			containLabel: true
		},
		// tooltip: {
		// 	show: true,
		// 	trigger: 'axis'
		// },
		dataZoom: [{
			type: "inside",
			startValue: lineChartData0.xData.length - 8,
			endValue: lineChartData0.xData.length - 1,
			zoomLock: true
		}],
		xAxis: {
			type: 'category',
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				interval: 0
			},
			data: lineChartData0.xData
		},
		yAxis: {
			type: 'value',
			splitLine: {
				show: false
			}
		},
		series: [{
			name: '',
			type: 'bar',
			barMaxWidth: 30,
			color: ['#7a819e'],
			label: {
				show: true,
				position: 'top',
				valueAnimation: true,
				// color:"transparent"
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
				shadowOffsetX: -1,
				shadowOffsetY: -2,

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
			emphasis: {
				label: {
					color: "#e5004f"
				},
				itemStyle: {
					color: "#e5004f"
				}
			},
			data: lineChartData0.seriesData
		}]
	};
}

function initOptions1() {
	return {
		grid: {
			left: 90,
			right: 90,
			bottom: 80,
			top: 50
		},
		xAxis: {
			type: 'category',
			data: ['本周', '上周', '20年同期'],
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
			splitLine: {
				show: false
			}
		},
		series: [{
			data: seriesData.data1,
			label: {
				show: true,
				position: 'top',
				valueAnimation: true,
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
				shadowOffsetX: -1,
				shadowOffsetY: -2,

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
			emphasis: {
				label: {
					color: "#e5004f"
				},
				itemStyle: {
					color: "#e5004f"
				}
			},
		}]
	}
}

function initOptions2() {
	return {
		grid: {
			left: 90,
			right: 90,
			bottom: 80,
			top: 50
		},
		xAxis: {
			type: 'category',
			data: ['本月', '上月', '20年同期'],
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
			splitLine: {
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
				shadowOffsetX: -1,
				shadowOffsetY: -2,

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
			emphasis: {
				label: {
					color: "#e5004f"
				},
				itemStyle: {
					color: "#e5004f"
				}
			},
		}]
	}
}

function initOptions3() {
	return {
		grid: {
			left: 90,
			right: 90,
			bottom: 80,
			top: 50
		},
		xAxis: {
			type: 'category',
			data: ['本年', '20年', '19年'],
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
			splitLine: {
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
				shadowOffsetX: -1,
				shadowOffsetY: -2,

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
			emphasis: {
				label: {
					color: "#e5004f"
				},
				itemStyle: {
					color: "#e5004f"
				}
			},
		}]
	}
}
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		num: 1,
		num1: 1,
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
		ec0: {
			onInit: (canvas, width, height, dpr) => {
				chart0 = echarts.init(canvas, null, {
					width: width,
					height: height,
					devicePixelRatio: dpr // new
				});
				canvas.setChart(chart0);
				return chart0;
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
		ec2: {
			onInit: (canvas, width, height, dpr) => {
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
			onInit: (canvas, width, height, dpr) => {
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
		yearSales: '',
		weekCustomerPrice: '',
		monthCustomerPrice: '',
		yearCustomerPrice: '',
		zhb: '',
		ztb: '',
		yhb: '',
		ytb: '',
		nhb: '',
		ntb: '',
		ztbisadd: true,
		zhbisadd: true,
		ytbisadd: true,
		yhbisadd: true,
		ntbisadd: true,
		nhbisadd: true,
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
		that.drawLeasePie();
		that.shabi()
		setTimeout(that.getData);
		// that.getLineDataxse();
		// that.getLineData();
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
	getData: function (e) {
		util.ajax({
			url: "data-analysis/api/sg/salesDataForThisMonthThisWeekAndToday",
			method: "POST",
			success: res => {
				if (res.success) {
					let data = res.data;
					console.log(data.yearCustomerPrice > 10000)
					this.setData({
						todaySales: data.todaySales > 10000 ? (data.todaySales / 10000).toFixed(2) : data.todaySales,
						todaySales1: data.todaySales,
						weekSales: data.weekSales > 10000 ? (data.weekSales / 10000).toFixed(2) : data.weekSales,
						monthSales: data.monthSales > 10000 ? (data.monthSales / 10000).toFixed(2) : data.monthSales,
						customerPrice: data.customerPrice > 10000 ? (data.customerPrice / 10000).toFixed(2) : data.customerPrice,
						yearSales: data.yearSales > 10000 ? (data.yearSales / 10000).toFixed(2) : data.yearSales,
						weekCustomerPrice: data.weekCustomerPrice > 10000 ? (data.weekCustomerPrice / 10000).toFixed(2) : data.weekCustomerPrice,
						monthCustomerPrice: data.monthCustomerPrice > 10000 ? (data.monthCustomerPrice / 10000).toFixed(2) : data.monthCustomerPrice,
						yearCustomerPrice: data.yearCustomerPrice > 10000 ? (data.yearCustomerPrice / 10000).toFixed(2) : data.yearCustomerPrice,
					})
				}
				wx.hideLoading();
			},
			fail: error => {
				wx.hideLoading();
			}
		})
	},
	getBarData: function (num) {
		util.ajax({
			url: "data-analysis/api/sg/cashRegisterIsMoreThanYearOnYear?type=" + num,
			method: "POST",
			success: res => {
				console.log(res)
				// 环比增长率=（本期数-上期数）/上期数×100%
				// 同比增长率=（本期数-去年同期数）/去年同期数×100%
				let hb = (((res.data.byData - res.data.dataYearOnYear) / res.data.byData) * 100).toFixed(2);
				hb = isNaN(hb) ? 0 : hb
				let tb = (((res.data.byData - res.data.thisPeriodOfData) / res.data.thisPeriodOfData) * 100).toFixed(2);
				tb = isNaN(tb) ? 0 : tb
				if (res.success) {
					if (num == 1) {

						seriesData.data1 = Object.values(res.data).filter(item => typeof (item) == "number")
						this.setData({
							ztb: res.data.coRate.search("-") != -1 ? res.data.coRate.substr(1) : res.data.coRate,
							zhb: res.data.ringRatio.search("-") != -1 ? res.data.ringRatio.substr(1) : res.data.ringRatio,
							ztbisadd: res.data.coRate.search("-") != -1 ? false : true,
							zhbisadd: res.data.ringRatio.search("-") != -1 ? false : true,
						})

					}
					if (num == 2) {

						seriesData.data2 = Object.values(res.data).filter(item => typeof (item) == "number")
						this.setData({
							ytb: res.data.coRate.search("-") != -1 ? res.data.coRate.substr(1) : res.data.coRate,
							yhb: res.data.ringRatio.search("-") != -1 ? res.data.ringRatio.substr(1) : res.data.ringRatio,
							ytbisadd: res.data.coRate.search("-") != -1 ? false : true,
							yhbisadd: res.data.ringRatio.search("-") != -1 ? false : true,
						})
					}
					if (num == 3) {

						seriesData.data3 = Object.values(res.data).filter(item => typeof (item) == "number")
						this.setData({
							ntb: res.data.coRate.search("-") != -1 ? res.data.coRate.substr(1) : res.data.coRate,
							nhb: res.data.ringRatio.search("-") != -1 ? res.data.ringRatio.substr(1) : res.data.ringRatio,
							ntbisadd: res.data.coRate.search("-") != -1 ? false : true,
							nhbisadd: res.data.ringRatio.search("-") != -1 ? false : true,
						})
					}
				}
				let chartSet = function () {
					if (chart1) {
						console.log(44333, chart)
						// chart.setOption(initOption())
						chart1.setOption(initOptions1())
						chart2.setOption(initOptions2())
						chart3.setOption(initOptions3())
						console.log('set linechart')
					} else {
						setTimeout(() => {
							console.log("linechart is null")
							chartSet();
						}, 500)
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
	shabi:function() {
		util.ajax({
			url: "data-analysis/api/sg/cashRegisterSalesStatistics?type=1",
			method: "POST",
			success: res => {
				if (res.success) {
					lineChartData.xData = [];
					lineChartData.seriesData = [];
					// ---------------
					lineChartData0.xData = [];
					lineChartData0.seriesData = [];
					for (let i = 0; i < res.data.length; i++) {
						lineChartData.xData.push(res.data[i].time.substring(6, 8) + '日');
						lineChartData.seriesData.push({
							name: '',
							value: res.data[i].customerPrice,
							label: {
								show: true,
								position: i % 2 == 0 ? [0, -38] : [-10, -10],
								valueAnimation: true
							}
						});
						// ----------
						lineChartData0.xData.push(res.data[i].time.substring(6, 8) + '日');
							lineChartData0.seriesData.push({
								name: '',
								value: res.data[i].sales,
								label: {
									show: true,
									position:'top',
									valueAnimation: true
								}
							});
					}
				}
				let chartSet = function () {
					if (chart) {
						chart.setOption(initOption())
						console.log('set chart')
					} else {
						setTimeout(() => {
							console.log("chart is null")
							chartSet();
						}, 100)
					}
				}
				chartSet();
				let chartSet0 = function () {
					if (chart0) {
						chart0.setOption(initOption0())
						console.log('set chart')
					} else {
						setTimeout(() => {
							console.log("chart is null")
							chartSet0();
						}, 100)
					}
				}
				chartSet0();
				wx.hideLoading();
			},
			fail: error => {
				wx.hideLoading();
			}
		})
	},
	getLineData: function (type) {
		util.ajax({
			url: "data-analysis/api/sg/cashRegisterSalesStatistics?type=1",
			method: "POST",
			success: res => {
				if (res.success) {
					lineChartData.xData = [];
					lineChartData.seriesData = [];
					for (let i = 0; i < res.data.length; i++) {
						lineChartData.xData.push(res.data[i].time.substring(6, 8) + '日');
						lineChartData.seriesData.push({
							name: '',
							value: res.data[i].customerPrice,
							label: {
								show: true,
								position: i % 2 == 0 ? [0, -38] : [-10, -10],
								valueAnimation: true
							}
						});
					}
				}
				let chartSet = function () {
					if (chart) {
						chart.setOption(initOption())
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
			},
			fail: error => {
				wx.hideLoading();
			}
		})
	},
	getLineData1: function (e) {
		util.ajax({
			url: "data-analysis/api/sg/cashRegisterSalesStatistics?type=2",
			method: "POST",
			success: res => {
				if (res.success) {
					console.log(898989)
					lineChartData.xData = [];
					lineChartData.seriesData = [];
					lineChartData0.xData = [];
					lineChartData0.seriesData = [];
					for (let i = 0; i < res.data.length; i++) {
						lineChartData.xData.push(res.data[i].time.substring(4, 6) + '月');
						lineChartData.seriesData.push({
							name: '',
							value: res.data[i].customerPrice,
							label: {
								show: true,
								position: i % 2 == 0 ? [0, -38] : [-10, -10],
								valueAnimation: true
							}
						});
					}
				}
				let chartSet = function () {
					if (chart) {
						chart.setOption(initOption())
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
			},
			fail: error => {
				wx.hideLoading();
			}
		})
	},
	getLineDataxse: function (type) {
		util.ajax({
			url: "data-analysis/api/sg/cashRegisterSalesStatistics?type=1",
			method: "POST",
			success: res => {
				if (res.success) {
						lineChartData0.xData = [];
						lineChartData0.seriesData = [];
						for (let i = 0; i < res.data.length; i++) {
							console.log(res.data[i].sales,typeof res.data[i].sales)
							// res.data[i].sales = (res.data[i].sales/10000).toFixed(1)
							lineChartData0.xData.push(res.data[i].time.substring(6, 8) + '日');
							lineChartData0.seriesData.push({
								name: '',
								value: res.data[i].sales,
								label: {
									show: true,
									position:'top',
									valueAnimation: true
								}
							});
						}
						
					}
					let chartSet0 = function () {
						if (chart0) {
							chart0.setOption(initOption0())
							console.log('set chart')
						} else {
							setTimeout(() => {
								console.log("chart is null")
								chartSet0();
							}, 500)
						}
					}
					chartSet0();
				wx.hideLoading();
			},
			fail: error => {
				wx.hideLoading();
			}
		})
	},
	getLineData1xse: function (e) {
		util.ajax({
			url: "data-analysis/api/sg/cashRegisterSalesStatistics?type=2",
			method: "POST",
			success: res => {
				if (res.success) {
					// res.data.map(item=>{
					// 	item.sales = (item.sales/10000).toFixed(1)
					// })
					
					lineChartData.xData = [];
					lineChartData.seriesData = [];
					lineChartData0.xData = [];
					lineChartData0.seriesData = [];
					for (let i = 0; i < res.data.length; i++) {
						lineChartData0.xData.push(res.data[i].time.substring(4, 6) + '月');
						lineChartData0.seriesData.push({
							name: '',
							value: res.data[i].sales,
							label: {
								show: true,
								position: 'top',
								position: i % 2 == 0 ? [0, -38] : [-10, -10],
								valueAnimation: true
							}
						});
					}
				}
				let chartSet0 = function () {
					if (chart0) {
						chart0.setOption(initOption0())
						console.log('set chart')
					} else {
						setTimeout(() => {
							console.log("chart is null")
							chartSet0();
						}, 500)
					}
				}
				chartSet0();
				wx.hideLoading();
			},
			fail: error => {
				wx.hideLoading();
			}
		})
	},
	/**
	 * 图表切换
	 */
	chartsClick: function (e) {
		var that = this;
		var num = e.currentTarget.dataset.num;
		if (that.data.num == num) {
			return false
		} else {
			that.setData({
				num: e.currentTarget.dataset.num
			})
		}
		if (num == 1) {
			that.getLineData();
		} else if (num == 2) {
			that.getLineData1();
		}
		that.setData({
			num: e.currentTarget.dataset.num
		})
	},
	chartsClick1: function (e) {
		var that = this;
		var num = e.currentTarget.dataset.num;
		if (that.data.num1 == num) {
			return false
		} else {
			that.setData({
				num1: e.currentTarget.dataset.num
			})
		}
		if (num == 1) {
			that.getLineDataxse();
		} else if (num == 2) {
			that.getLineData1xse();
		}
		that.setData({
			num1: e.currentTarget.dataset.num
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
		var that = this;
		that.drawLeasePie();
		that.shabi()
		setTimeout(that.getData);
		// that.getLineDataxse();
		// that.getLineData();
		that.getBarData(1);
		that.getBarData(2);
		that.getBarData(3);
		wx.showLoading();
	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {
		var that = this;
		that.onLoad();
	},
	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {
		chart = null;
		chart0 = null;
		chart1 = null;
		chart2 = null;
		chart3 = null;
		chart4 = null;
	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {
		chart = null;
		chart0 = null;
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