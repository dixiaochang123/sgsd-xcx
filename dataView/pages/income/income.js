// pages/income/income.js
import * as echarts from '../../../ec-canvas/echarts';
const util = require('../../../utils/util');
const app = getApp();
//曲线图
var chart = null;
var chart1 = null;
var chart2 = null;
var chart3 = null;
var chart4 = null;
var incomeValue = [];
var totalIncome = 0;
let lineChartData = {
	xData: [],
	shoundAmount: [],
	receivableAmount: [],
	outstandingAmount: []
}

function initOption() {
	var data = [];
	var labelData = [];
	var incomeTotal = [];
	for (var i = 0; i < 100; ++i) {
		data.push({
			value: Math.random() * 10 + 10 - Math.abs(i - 12),
			name: i + ':00'
		});
		labelData.push({
			value: 1,
			name: i,
			itemStyle: {
				normal: {
					color: "#00ffffff"
				}
			}
		});
	}
	var color = ['#35DFFF', '#FF7D4F','#288EFF', '#FF565D', '#5F45FF', '#B8E61C', '#B8E61C'];
	for (var j = 0; j < incomeValue.length; j++) {
		for (var i = 0; i <= j; i++) {
			incomeTotal[j] = 0;
			incomeTotal[j] += incomeValue[i];
		}
	}
	for (var j = 0; j < incomeTotal.length; j++) {
		for (var i = 0; i < labelData.length; ++i) {
			if (labelData[i].name <= incomeTotal[j]) {
				labelData[i].itemStyle = {
					normal: {
						color: color[j]
					}
				}
			}
		}
	}
	return {
		title: {
			text: '¥' + totalIncome.toFixed(2),
			subtext: '总收入(元)',
			left: 'center',
			right: 'center',
			top: 'center',
			textStyle: {
				fontSize: 16,
				color: '#fff'
			}
		},
		series: [{
			hoverAnimation: false,
			type: 'pie',
			data: labelData,
			radius: ['70%', '85%'],
			itemStyle: {
				normal: {
					borderWidth: 1,
					borderColor: '#233440'
				}
			},
			label: {
				normal: {
					show: false,
				}
			}
		}]
	};
}

function initOptions1() {
	return {
		grid: {
			left: 60,
			right: 90,
		},
		xAxis: {
			type: 'category',
			data: ['本周', '上周', '19年同期'],
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
			barWidth: 35,
			itemStyle: {
				borderRadius: 5,
				borderColor: 'transparent',
				borderWidth: 3,
				color: '#7a819e'
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
						color: '#d9d9e7' // 0% 处的颜色
					}, {
						offset: 0.4,
						color: '#d9d9e7' // 0% 处的颜色
					}, {
						offset: 0.6,
						color: '#d9d9e7' // 0% 处的颜色
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
			left: 60,
			right: 90,
		},
		xAxis: {
			type: 'category',
			data: ['本周', '上周', '19年同期'],
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
			barWidth: 35,
			itemStyle: {
				borderRadius: 5,
				color: '#7a819e'
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
						color: '#d9d9e7' // 0% 处的颜色
					}, {
						offset: 0.4,
						color: '#d9d9e7' // 0% 处的颜色
					}, {
						offset: 0.6,
						color: '#d9d9e7' // 0% 处的颜色
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
			left: 60,
			right: 90,
		},
		xAxis: {
			type: 'category',
			data: ['本周', '上周', '19年同期'],
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
			barWidth: 35,
			itemStyle: {
				borderRadius: 5,
				color: '#7a819e'
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
						color: '#d9d9e7' // 0% 处的颜色
					}, {
						offset: 0.4,
						color: '#d9d9e7' // 0% 处的颜色
					}, {
						offset: 0.6,
						color: '#d9d9e7' // 0% 处的颜色
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
		nums: 1,
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
		ec4: {
			onInit: (canvas, width, height, dpr) => {
				chart4 = echarts.init(canvas, null, {
					width: width,
					height: height,
					devicePixelRatio: dpr // new
				});
				canvas.setChart(chart4);
				return chart4;
			}
		},
		incomeList: [],
		marketRevenue:0,
		blockIncome:0,
		totalIncome:0
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
		that.getPieData();
		that.getLineData();
		wx.showLoading();
	},
	getPieData: function (e) {
		wx.request({
			url: app.globalData.baseUrlOP + 'rest/sgsdbi/countincome',
			dataType: 'json',
			data: JSON.stringify({
				apiKey: "STANDRAD",
				type: "month"
			}),
			header: {
				"content-type": 'application/json'
			},
			method: "POST",
			success: res => {
				if (res.data.success) {
					incomeValue = [];
					totalIncome = 0;
					for (let i = 0; i < res.data.categoryStatistic.length; i++) {
						totalIncome += res.data.categoryStatistic[i].value;
						incomeValue.push(res.data.categoryStatistic[i].ratio);
					}
					let dateStatistic = res.data.dateStatistic,
						mydate = new Date();
					for(let i = 0 ; i < dateStatistic.length ; i ++ ){
						if (dateStatistic[i].timestr.substring(4, 6) == (mydate.getMonth() + 1)) {
							this.setData({
								marketRevenue:res.data.dateStatistic[i].mallShoundAmount,
								blockIncome:res.data.dateStatistic[i].squareShoundAmount,
								totalIncome
							})
						}
					}
					this.setData({
						incomeList: res.data.categoryStatistic
					})
				}
				let chartSet = function () {
					if (chart) {
						console.log(chart)
						chart.setOption(initOption())
						chart2.setOption(initOptions1())
						chart3.setOption(initOptions2())
						chart4.setOption(initOptions3())
						console.log('set piechart')
					} else {
						setTimeout(() => {
							console.log("piechart is null")
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
	getPieData1: function (e) {
		wx.request({
			url: app.globalData.baseUrlOP + 'rest/sgsdbi/countincome',
			dataType: 'json',
			data: JSON.stringify({
				apiKey: "STANDRAD",
				type: "year"
			}),
			header: {
				"content-type": 'application/json'
			},
			method: "POST",
			success: res => {
				if (res.data.success) {
					incomeValue = [];
					totalIncome = 0;
					for (let i = 0; i < res.data.categoryStatistic.length; i++) {
						totalIncome += res.data.categoryStatistic[i].value;
						incomeValue.push(res.data.categoryStatistic[i].ratio);
					}
					let dateStatistic = res.data.dateStatistic,YEAR = new Date().getFullYear(),mallShoundAmount = 0 ,squareShoundAmount = 0;
					for(let i = 0 ; i < dateStatistic.length ; i ++){
						if(dateStatistic[i].timestr.substring(0, 4) == YEAR){
							console.log(dateStatistic[i].mallShoundAmount)
							mallShoundAmount += dateStatistic[i].mallShoundAmount;
							squareShoundAmount += dateStatistic[i].squareShoundAmount;
							
						}
					}
					this.setData({
						incomeList: res.data.categoryStatistic,
						marketRevenue:mallShoundAmount.toFixed(2),
						blockIncome:squareShoundAmount.toFixed(2),
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
	getLineData: function (e) {
		wx.request({
			url: app.globalData.baseUrlOP + 'rest/sgsdbi/countincome',
			dataType: 'json',
			data: JSON.stringify({
				apiKey: "STANDRAD",
				type: "month"
			}),
			header: {
				"content-type": 'application/json'
			},
			method: "POST",
			success: res => {
				if (res.data.success) {
					lineChartData.xData = []
					lineChartData.shoundAmount = []
					lineChartData.receivableAmount = []
					lineChartData.outstandingAmount = [];
					for (let i = 0; i < res.data.dateStatistic.length; i++) {
						lineChartData.xData.push(res.data.dateStatistic[i].timestr)
						lineChartData.shoundAmount.push((res.data.dateStatistic[i].shoundAmount / 10000).toFixed(2))
						lineChartData.receivableAmount.push((res.data.dateStatistic[i].receivableAmount / 10000).toFixed(2))
						lineChartData.outstandingAmount.push((res.data.dateStatistic[i].outstandingAmount / 10000).toFixed(2))
					}
				}
				let chartSet1 = function () {
					if (chart1) {
						// chart1.setOption(initOption1())
						// chart2.setOption(initOptions1())
						// chart3.setOption(initOptions2())
						// chart4.setOption(initOptions3())
						console.log('set linechart')
					} else {
						setTimeout(() => {
							console.log("linechart is null")
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
	getLineData1: function (e) {
		wx.request({
			url: app.globalData.baseUrlOP + 'rest/sgsdbi/countincome',
			dataType: 'json',
			data: JSON.stringify({
				apiKey: "STANDRAD",
				type: "year"
			}),
			header: {
				"content-type": 'application/json'
			},
			method: "POST",
			success: res => {
				if (res.data.success) {
					lineChartData.xData = []
					lineChartData.shoundAmount = []
					lineChartData.receivableAmount = []
					lineChartData.outstandingAmount = [];
					for (let i = 0; i < res.data.dateStatistic.length; i++) {
						lineChartData.xData.push(res.data.dateStatistic[i].timestr.substring(4, 6))
						lineChartData.shoundAmount.push((res.data.dateStatistic[i].shoundAmount / 10000).toFixed(2))
						lineChartData.receivableAmount.push((res.data.dateStatistic[i].receivableAmount / 10000).toFixed(2))
						lineChartData.outstandingAmount.push((res.data.dateStatistic[i].outstandingAmount / 10000).toFixed(2))
					}
				}
				let chartSet1 = function () {
					if (chart1) {
						chart1.setOption(initOption())
						console.log('set linechart')
					} else {
						setTimeout(() => {
							console.log("linechart is null")
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
			that.getPieData();
		} else if (num == 2) {
			that.getPieData1();
		}
		that.setData({
			num: e.currentTarget.dataset.num
		})
	},
	chartsClicka: function (e) {
		var that = this;
		var nums = e.currentTarget.dataset.nums;
		if (that.data.nums == nums) {
			return false
		} else {
			that.setData({
				nums: e.currentTarget.dataset.nums
			})
		}
		if (nums == 1) {
			that.getLineData();
		} else if (nums == 2) {
			that.getLineData1();
		}
		that.setData({
			nums: e.currentTarget.dataset.nums
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