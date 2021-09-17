// pages/index/index.js
import * as echarts from '../../ec-canvas/echarts';
const util = require('../../utils/util');
const app = getApp();
var chart10 = null;
var chart11 = null;
var chart12 = null;
var chart13 = null;
let lineChartData10 = {
	xData: [],
	legendData: ["上周", "本周", "去年同期"],
	currentDataList: [], //上周
	byDataList: [], //本周
	dataYearOnyearList: [], //去年同期
	dataZoom: [],
}
let lineChartData11 = {
	xData: [],
	legendData: ["上周", "本周", "去年同期"],
	currentDataList: [], //上周
	byDataList: [], //本周
	dataYearOnyearList: [], //去年同期
	dataZoom: [],
}
let lineChartData12 = {
	xData: [],
	legendData: ["上周", "本周", "去年同期"],
	currentDataList: [], //上周
	byDataList: [], //本周
	dataYearOnyearList: [], //去年同期
	dataZoom: [],
}
let lineChartData13 = {
	xData: [],
	legendData: ["上周", "本周", "去年同期"],
	currentDataList: [], //上周
	byDataList: [], //本周
	dataYearOnyearList: [], //去年同期
	dataZoom: [],
}

function initOption10() {

	return {
		// color:['#7f7d7e','#e3004f','#597ee9'],
		color: ['#e3004f', '#597ee9', '#7f7d7e'],
		grid: {
			left: 70,
			right: 20,
			// top:40
		},
		tooltip: {
			trigger: "axis",

			confine: true,
		},
		legend: {
			icon: 'rect',
			data: lineChartData10.legendData,
			itemHeight: 3,
			itemwidth: 80,
			align: 'right',
		},
		calculable: true,
		dataZoom:lineChartData10.dataZoom,
		xAxis: [{
			type: "category",
			data: lineChartData10.xData,
			// data: ["1/7", "2/7", "3/7", "4/7", "5/7", "6/7", "7/7"],
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			splitLine: {
				show: false
			},
			boundaryGap: true,
			axisLabel: {
				interval: 0
			}
		}],
		yAxis: [{
			type: "value",
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: "#ccc"
				}
			}
		}],
		series: [{
				name: lineChartData10.legendData[0],
				type: "line",
				// stack: "总量",
				// data: lineChartData10.currentDataList,
				data: lineChartData10.currentDataList,
				// data: [12000, 13200, 10100, 13400, 9000, 23000, 21000],
				symbol: "circle"
			},
			{
				name: lineChartData10.legendData[1],
				type: "line",
				// stack: "总量",
				// data: lineChartData10.byDataList,
				data: lineChartData10.byDataList,
				// data: [22000, 18200, 19100, 23400, 29000, 33000, 31000],
				symbol: "circle"
			},
			{
				name: lineChartData10.legendData[2],
				type: "line",
				data: lineChartData10.dataYearOnyearList,
				// data: [15000, 23200, 20100, 15400, 19000, 33000, 41000],
				symbol: "circle",
				// stack: "总量"
			},




		],
		// grid: {
		//     borderWidth: 0
		// }
	};
}

function initOption11() {

	return {
		color: ['#e3004f', '#597ee9', '#7f7d7e'],
		// color:['#e3004f','#597ee9','#7f7d7e'],
		grid: {
			left: 70,
			right: 20,
			// top:40
		},
		tooltip: {
			trigger: "axis",

			confine: true,
		},
		legend: {
			icon: 'rect',
			data: lineChartData11.legendData,
			itemHeight: 3,
			itemwidth: 80,
			align: 'right',
		},
		calculable: true,
		dataZoom:lineChartData11.dataZoom,
		xAxis: [{
			type: "category",
			data: lineChartData11.xData,
			// data: ["1/7", "2/7", "3/7", "4/7", "5/7", "6/7", "7/7"],
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			splitLine: {
				show: false
			},
			boundaryGap: true,
			axisLabel: {
				interval: 0
			}
		}],
		yAxis: [{
			type: "value",
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: "#ccc"
				}
			}
		}],
		series: [{
				name: lineChartData11.legendData[0],
				type: "line",
				// stack: "总量",
				// data: lineChartData11.currentDataList,
				data: lineChartData11.currentDataList,
				// data: [12000, 13200, 10100, 13400, 9000, 23000, 21000],
				symbol: "circle"
			},
			{
				name: lineChartData11.legendData[1],
				type: "line",
				// stack: "总量",
				// data: lineChartData11.byDataList,
				data: lineChartData11.byDataList,
				// data: [22000, 18200, 19100, 23400, 29000, 33000, 31000],
				symbol: "circle"
			},
			{
				name: lineChartData11.legendData[2],
				type: "line",
				data: lineChartData11.dataYearOnyearList,
				// data: [15000, 23200, 20100, 15400, 19000, 33000, 41000],
				symbol: "circle",
				// stack: "总量"
			},




		],
	};
}

function initOption12() {

	return {
		color: ['#e3004f', '#597ee9', '#7f7d7e'],
		grid: {
			left: 70,
			right: 20,
			// top:40
		},
		tooltip: {
			trigger: "axis",

			confine: true,
		},
		legend: {
			icon: 'rect',
			data: lineChartData12.legendData,
			itemHeight: 3,
			itemwidth: 80,
			align: 'right',
		},
		calculable: true,
		dataZoom:lineChartData12.dataZoom,
		xAxis: [{
			type: "category",
			data: lineChartData12.xData,
			// data: ["1/7", "2/7", "3/7", "4/7", "5/7", "6/7", "7/7"],
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			splitLine: {
				show: false
			},
			boundaryGap: true,
			axisLabel: {
				interval: 0
			}
		}],
		yAxis: [{
			type: "value",
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: "#ccc"
				}
			}
		}],
		series: [{
				name: lineChartData12.legendData[0],
				type: "line",
				// stack: "总量",

				// data: lineChartData12.currentDataList,
				data: lineChartData12.currentDataList,
				// data: [12000, 13200, 10100, 13400, 9000, 23000, 21000],
				symbol: "circle"
			},
			{
				name: lineChartData12.legendData[1],
				type: "line",
				// stack: "总量",

				// data: lineChartData12.byDataList,
				data: lineChartData12.byDataList,
				// data: [22000, 18200, 19100, 23400, 29000, 33000, 31000],
				symbol: "circle"
			},
			{
				name: lineChartData12.legendData[2],
				type: "line",
				data: lineChartData12.dataYearOnyearList,
				// data: [15000, 23200, 20100, 15400, 19000, 33000, 41000],
				symbol: "circle",
			},



		],
		// grid: {
		//     borderWidth: 0
		// }
	};
}

function initOption13() {

	return {
		color: ['#e3004f', '#597ee9', '#7f7d7e'],
		grid: {
			left: 80,
			right: 20,
			// top:40
		},
		tooltip: {
			trigger: "axis",

			confine: true,
		},
		legend: {
			icon: 'rect',
			data: lineChartData13.legendData,
			itemHeight: 3,
			itemwidth: 80,
			align: 'right',
		},
		calculable: true,
		dataZoom:lineChartData13.dataZoom,
		xAxis: [{
			type: "category",
			data: lineChartData13.xData,
			// data: ["1/7", "2/7", "3/7", "4/7", "5/7", "6/7", "7/7"],
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			splitLine: {
				show: false
			},
			boundaryGap: true,
			axisLabel: {
				interval: 0
			}
		}],
		yAxis: [{
			type: "value",
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: "#ccc"
				}
			}
		}],
		series: [{
				name: lineChartData13.legendData[0],
				type: "line",
				// stack: "总量",
				// data: lineChartData13.currentDataList,
				data: lineChartData13.currentDataList,
				// data: [12000, 13200, 10100, 13400, 9000, 23000, 21000],
				symbol: "circle"
			},
			{
				name: lineChartData13.legendData[1],
				type: "line",
				// stack: "总量",
				// data: lineChartData13.byDataList,
				data: lineChartData13.byDataList,
				// data: [22000, 18200, 19100, 23400, 29000, 33000, 31000],
				symbol: "circle"
			},
			{
				name: lineChartData13.legendData[2],
				type: "line",
				data: lineChartData13.dataYearOnyearList,
				// data: [15000, 23200, 20100, 15400, 19000, 33000, 41000],
				symbol: "circle",
				// stack: "总量"
			},




		],
		// grid: {
		//     borderWidth: 0
		// }
	};
}
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		num: 1,
		nums: 1,
		ec10: {
			onInit: (canvas, width, height, dpr) => {
				chart10 = echarts.init(canvas, null, {
					width: width,
					height: height,
					devicePixelRatio: dpr // new
				});
				canvas.setChart(chart10);
				return chart10;
			}
		},
		ec11: {
			onInit: (canvas, width, height, dpr) => {
				chart11 = echarts.init(canvas, null, {
					width: width,
					height: height,
					devicePixelRatio: dpr // new
				});
				canvas.setChart(chart11);
				return chart11;
			}
		},
		ec12: {
			onInit: (canvas, width, height, dpr) => {
				chart12 = echarts.init(canvas, null, {
					width: width,
					height: height,
					devicePixelRatio: dpr // new
				});
				canvas.setChart(chart12);
				return chart12;
			}
		},
		ec13: {
			onInit: (canvas, width, height, dpr) => {
				chart13 = echarts.init(canvas, null, {
					width: width,
					height: height,
					devicePixelRatio: dpr // new
				});
				canvas.setChart(chart13);
				return chart13;
			}
		},
		leasePercent: 0.25,
		todaySales: 0,
		todaySales1: 0,
		weekSales: 0,
		monthSales: 0,
		totalNumberOfMembers: 0, //会员总数
		totalNewMumber: 0, //新增会员
		totalNumberOfMaleMembers: 0, //男性会员数
		totalNumberOfFemaleMembers: 0, //女性会员数
		totalNumberOfOtherMembers: 0, //其他会员数
		dayPassengerFlow: 0, //客流
		weekPassengerFlow: 0, //客流
		monthPassengerFlow: 0, //客流
		yearPassengerFlow: 0, //客流
		totalSpace: 0,
		dayEntryData: 0,
		dayAppearanceData: 0,
		shoundAmount: 0,
		receivableAmount: 0,
		marketRevenue: 0,
		blockIncome: 0,
		tabs: [],
		tabs1: ['客流','会员','车场','收银','商管'],
		activeTab: 0,
		dataAllFlow: {}, //人流
		dataAllMember: {}, //会员
		dataAllSales: {}, //收银
		dataAllMarket: {},

		swiperClass: 'weui-tabs-swiper',
		dataId: '客流',
		idx: 0,
		scrollTop: 0,
		num10: 1,
		type10: 1,
		num11: 1,
		type11: 1,
		num12: 1,
		type12: 1,
		num13: 1,
		type13: 1,

		power:{}

	},
	onPageScroll: function (e) {
		// console.log('滚动条高度',e.scrollTop)
		this.setData({
			scrollTop: e.scrollTop
		})
	},
	chartsClick10: function (e) {
		var that = this;
		var num = e.currentTarget.dataset.num;
		if (that.data.num10 == num) {
			return false
		} else {
			that.setData({
				num10: e.currentTarget.dataset.num
			})
		}
		if (num == 1) {
			that.getLineDataxse(1);
		} else if (num == 2) {
			that.getLineDataxse(2);
		} else if (num == 3) {
			that.getLineDataxse(3);

		}
		that.setData({
			num10: e.currentTarget.dataset.num
		})
	},
	chartsClick11: function (e) {
		var that = this;
		var num = e.currentTarget.dataset.num;
		if (that.data.num11 == num) {
			return false
		} else {
			that.setData({
				num11: e.currentTarget.dataset.num
			})
		}
		if (num == 1) {
			that.getLineData1xse(1);
		} else if (num == 2) {
			that.getLineData1xse(2);
		} else if (num == 3) {
			that.getLineData1xse(3);

		}
		that.setData({
			num11: e.currentTarget.dataset.num
		})
	},
	chartsClick12: function (e) {
		var that = this;
		var num = e.currentTarget.dataset.num;
		if (that.data.num12 == num) {
			return false
		} else {
			that.setData({
				num12: e.currentTarget.dataset.num
			})
		}
		if (num == 1) {
			that.getLineData2xse(1);
		} else if (num == 2) {
			that.getLineData2xse(2);
		} else if (num == 3) {
			that.getLineData2xse(3);

		}
		that.setData({
			num12: e.currentTarget.dataset.num
		})
	},
	chartsClick13: function (e) {
		var that = this;
		var num = e.currentTarget.dataset.num;
		if (that.data.num13 == num) {
			return false
		} else {
			that.setData({
				num13: e.currentTarget.dataset.num
			})
		}
		if (num == 1) {
			that.getLineData3xse(1);
		} else if (num == 2) {
			that.getLineData3xse(2);
		} else if (num == 3) {
			that.getLineData3xse(3);

		}
		that.setData({
			num13: e.currentTarget.dataset.num
		})
	},
	getLineDataxse(type) {
		this.setData({
			type10: type
		})
		util.ajax({
			url: "data-analysis/api/passengerFlow/flwTonghuanRatioTrend?type=" + type,
			method: "POST",
			success: res => {
				if (res.success) {
					let {
						currentDataList,
						byDataList,
						dataYearOnyearList
					} = res.data;
					lineChartData10.legendData = []
					lineChartData10.xData = [];
					lineChartData10.currentDataList = [];
					lineChartData10.byDataList = [];
					lineChartData10.dataYearOnyearList = [];
					console.log(type, typeof type)
					let obj = {
						'1': '周一',
						'2': '周二',
						'3': '周三',
						'4': '周四',
						'5': '周五',
						'6': '周六',
						'0': '周日',
					}
					if (type == 1) {
						// lineChartData10.legendData = ["上周", "本周", "去年同期"]
						lineChartData10.legendData = ["本周", "上周", "去年同期"]
					}
					if (type == 2) {
						// lineChartData10.legendData = ["上月", "本月", "去年同期"]
						lineChartData10.legendData = ["本月", "上月", "去年同期"]
					}
					if (type == 3) {
						lineChartData10.legendData = ["本年", "去年"]
					}
					let ln = currentDataList.length > 0 ? currentDataList : (byDataList.length > 0 ? byDataList : dataYearOnyearList);
					console.log(ln)
					for (let i = 0; i < ln.length; i++) {
						// lineChartData10.xData.push(currentDataList[i].sdate +'/'+currentDataList.length);
						if (type == 1) {
							lineChartData10.xData.push(obj[ln[i].sdate]);
							let cur = currentDataList[i] ? currentDataList[i].count : 0;
							lineChartData10.currentDataList.push(cur);
							let by = byDataList[i] ? byDataList[i].count : 0;
							lineChartData10.byDataList.push(by);
							let yea = dataYearOnyearList[i] ? dataYearOnyearList[i].count : 0;
							lineChartData10.dataYearOnyearList.push(yea);
							lineChartData10.dataZoom = []
						}
						if (type == 2) {
							let sdate = ln[i].sdate.substring(8, 10);
							if(sdate.substr(0, 1)) {
								if(sdate.substr(0, 1)=='0') {
									sdate = sdate.substr(1, 2) + '日'
								} else {
									sdate = sdate.substr(0, 2) + '日'
								}
							}
							lineChartData10.xData.push(sdate);
							let cur = currentDataList[i] ? currentDataList[i].count : 0;
							let by = byDataList[i] ? byDataList[i].count : 0;
							lineChartData10.currentDataList.push(cur);
							lineChartData10.byDataList.push(by);
							let yea = dataYearOnyearList[i] ? dataYearOnyearList[i].count : 0;
							lineChartData10.dataYearOnyearList.push(yea);
							// lineChartData10.dataYearOnyearList.push(dataYearOnyearList[i].count);
							lineChartData10.dataZoom = [{
								type: "inside",
								startValue: lineChartData10.xData.length - 5,
								endValue: lineChartData10.xData.length - 1,
								zoomLock: true
							}]
						}
						if (type == 3) {
							let sdate = ln[i].sdate.substring(5, 7);
							if(sdate.substr(0, 1)) {
								if(sdate.substr(0, 1)=='0') {
									sdate = sdate.substr(1, 2) + '月'
								} else {
									sdate = sdate.substr(0, 2) + '月'
								}
							}
							lineChartData10.xData.push(sdate);
							lineChartData10.currentDataList.push(currentDataList[i].count);
							lineChartData10.byDataList.push(byDataList[i].count);
							// lineChartData10.dataYearOnyearList.push(dataYearOnyearList[i].count);
							lineChartData10.dataZoom = [{
								type: "inside",
								startValue: lineChartData10.xData.length - 5,
								endValue: lineChartData10.xData.length - 1,
								zoomLock: true
							}]
						}
					}
					console.log(currentDataList, byDataList, dataYearOnyearList)
					console.log(lineChartData10)

				}
				let chartSet10 = function () {
					if (chart10) {
						chart10.setOption(initOption10())
						// chart11.setOption(initOption10())
						// chart12.setOption(initOption10())
						console.log('set chart')
					} else {
						setTimeout(() => {
							console.log("chart is null")
							chartSet10();
						}, 500)
					}
				}
				chartSet10();
				wx.hideLoading();
			},
			fail: error => {
				wx.hideLoading();
			}
		})
	},
	getLineData1xse(type) {
		this.setData({
			type11: type
		})
		util.ajax({
			url: "data-analysis/api/general/member/tonghuanRatioTrendMemberNum?type=" + type,
			method: "POST",
			success: res => {
				if (res.success) {
					let {
						currentDataList,
						byDataList,
						dataYearOnyearList
					} = res.data;
					lineChartData11.legendData = []
					lineChartData11.xData = [];
					lineChartData11.currentDataList = [];
					lineChartData11.byDataList = [];
					lineChartData11.dataYearOnyearList = [];
					console.log(type, typeof type)
					let obj = {
						'1': '周一',
						'2': '周二',
						'3': '周三',
						'4': '周四',
						'5': '周五',
						'6': '周六',
						'0': '周日',
					}
					if (type == 1) {
						lineChartData11.legendData = ["本周", "上周", "去年同期"]
					}
					if (type == 2) {
						lineChartData11.legendData = ["本月", "上月", "去年同期"]
					}
					if (type == 3) {
						lineChartData11.legendData = ["本年", "去年"]
					}
					let ln = currentDataList.length > 0 ? currentDataList : (byDataList.length > 0 ? byDataList : dataYearOnyearList);
					for (let i = 0; i < ln.length; i++) {
						if (type == 1) {
							lineChartData11.xData.push(obj[ln[i].date]);
							let cur = currentDataList[i] ? currentDataList[i].numberOfMembers : 0;
							lineChartData11.currentDataList.push(cur);
							let by = byDataList[i] ? byDataList[i].numberOfMembers : 0;
							lineChartData11.byDataList.push(by);
							let yea = dataYearOnyearList[i] ? dataYearOnyearList[i].numberOfMembers : 0;
							lineChartData11.dataYearOnyearList.push(yea);
							// lineChartData11.currentDataList.push(currentDataList[i].numberOfMembers);
							// lineChartData11.byDataList.push(byDataList[i].numberOfMembers);
							// lineChartData11.dataYearOnyearList.push(dataYearOnyearList[i].numberOfMembers);
							lineChartData11.dataZoom = []
						}
						if (type == 2) {
							let date = ln[i].date.substring(8, 10);
							if(date.substr(0, 1)=='0') {
								date = date.substr(1, 2) + '日'
							} else {
								date = date.substr(0, 2) + '日'
							}
							lineChartData11.xData.push(date);
							let cur = currentDataList[i] ? currentDataList[i].numberOfMembers : 0;
							lineChartData11.currentDataList.push(cur);
							let by = byDataList[i] ? byDataList[i].numberOfMembers : 0;
							lineChartData11.byDataList.push(by);
							let yea = dataYearOnyearList[i] ? dataYearOnyearList[i].numberOfMembers : 0;
							lineChartData11.dataYearOnyearList.push(yea);
							// lineChartData11.dataYearOnyearList.push(dataYearOnyearList[i].numberOfMembers);
							lineChartData11.dataZoom = [{
								type: "inside",
								startValue: lineChartData11.xData.length - 5,
								endValue: lineChartData11.xData.length - 1,
								zoomLock: true
							}]
						}
						if (type == 3) {
							let date = ln[i].date.substring(5, 7);
							if(date.substr(0, 1)=='0') {
								date = date.substr(1, 2) + '月'
							} else {
								date = date.substr(0, 2) + '月'
							}
							lineChartData11.xData.push(date);
							lineChartData11.currentDataList.push(currentDataList[i].numberOfMembers);
							lineChartData11.byDataList.push(byDataList[i].numberOfMembers);
							// lineChartData11.dataYearOnyearList.push(dataYearOnyearList[i].numberOfMembers);
							lineChartData11.dataZoom = [{
								type: "inside",
								startValue: lineChartData11.xData.length - 5,
								endValue: lineChartData11.xData.length - 1,
								zoomLock: true
							}]
						}
					}
					console.log(currentDataList, byDataList, dataYearOnyearList)
					console.log(lineChartData11)

				}
				let chartSet11 = function () {
					if (chart11) {
						chart11.setOption(initOption11())
						// chart12.setOption(initOption10())
						console.log('set chart')
					} else {
						setTimeout(() => {
							console.log("chart is null")
							chartSet11();
						}, 500)
					}
				}
				chartSet11();
				wx.hideLoading();
			},
			fail: error => {
				wx.hideLoading();
			}
		})
	},
	getLineData2xse(type) {
		this.setData({
			type12: type
		})
		util.ajax({
			url: "data-analysis/api/parkingLotStatistics/tonghuanRatioTrendTrafficVolume?type=" + type,
			method: "POST",
			success: res => {
				if (res.success) {
					let {
						currentDataList,
						byDataList,
						dataYearOnyearList
					} = res.data;
					lineChartData12.legendData = []
					lineChartData12.xData = [];
					lineChartData12.currentDataList = [];
					lineChartData12.byDataList = [];
					lineChartData12.dataYearOnyearList = [];
					let obj = {
						'1': '周一',
						'2': '周二',
						'3': '周三',
						'4': '周四',
						'5': '周五',
						'6': '周六',
						'0': '周日',
					}
					if (type == 1) {
						lineChartData12.legendData = ["本周", "上周", "去年同期"]
					}
					if (type == 2) {
						lineChartData12.legendData = ["本月", "上月", "去年同期"]
					}
					if (type == 3) {
						lineChartData12.legendData = ["本年", "去年"]
					}
					let ln = currentDataList.length > 0 ? currentDataList : (byDataList.length > 0 ? byDataList : dataYearOnyearList);
					for (let i = 0; i < ln.length; i++) {
						if (type == 1) {
							lineChartData12.xData.push(obj[ln[i].date]);
							let cur = currentDataList[i] ? currentDataList[i].trafficVolume : 0;
							lineChartData12.currentDataList.push(cur);
							let by = byDataList[i] ? byDataList[i].trafficVolume : 0;
							lineChartData12.byDataList.push(by);
							let yea = dataYearOnyearList[i] ? dataYearOnyearList[i].trafficVolume : 0;
							lineChartData12.dataYearOnyearList.push(yea);
							lineChartData12.dataZoom = []
						}
						if (type == 2) {
							let date = ln[i].date.substring(8, 10);
							if(date.substr(0, 1)=='0') {
								date = date.substr(1, 2) + '日'
							} else {
								date = date.substr(0, 2) + '日'
							}
							lineChartData12.xData.push(date);
							lineChartData12.currentDataList.push(currentDataList[i].trafficVolume);
							lineChartData12.byDataList.push(byDataList[i].trafficVolume);
							// lineChartData12.dataYearOnyearList.push(dataYearOnyearList[i].trafficVolume);
							let yea = dataYearOnyearList[i] ? dataYearOnyearList[i].trafficVolume : 0;
							lineChartData12.dataYearOnyearList.push(yea);
							lineChartData12.dataZoom = [{
								type: "inside",
								startValue: lineChartData12.xData.length - 5,
								endValue: lineChartData12.xData.length - 1,
								zoomLock: true
							}]
						}
						if (type == 3) {
							let date = ln[i].date.substring(5, 7);
							if(date.substr(0, 1)=='0') {
								date = date.substr(1, 2) + '月'
							} else {
								date = date.substr(0, 2) + '月'
							}
							lineChartData12.xData.push(date);
							let cur = currentDataList[i] ? currentDataList[i].trafficVolume : 0;
							let by = byDataList[i] ? byDataList[i].trafficVolume : 0;
							lineChartData12.currentDataList.push(cur);
							lineChartData12.byDataList.push(by);
							// lineChartData12.dataYearOnyearList.push(dataYearOnyearList[i].trafficVolume);
							lineChartData12.dataZoom = [{
								type: "inside",
								startValue: lineChartData12.xData.length - 5,
								endValue: lineChartData12.xData.length - 1,
								zoomLock: true
							}]
						}
					}
					console.log(currentDataList, byDataList, dataYearOnyearList)
					console.log(lineChartData12)

				}
				let chartSet12 = function () {
					if (chart12) {
						chart12.setOption(initOption12())
						console.log('set chart')
					} else {
						setTimeout(() => {
							console.log("chart is null")
							chartSet12();
						}, 500)
					}
				}
				chartSet12();
				wx.hideLoading();
			},
			fail: error => {
				wx.hideLoading();
			}
		})
	},
	getLineData3xse(type) {
		this.setData({
			type13: type
		})
		util.ajax({
			url: "data-analysis/api/sg/cashRegisterDataIsTheSameAsTheTrend?type=" + type,
			method: "POST",
			success: res => {
				if (res.success) {
					let {
						currentDataList,
						byDataList,
						dataYearOnyearList
					} = res.data;
					lineChartData13.legendData = []
					lineChartData13.xData = [];
					lineChartData13.currentDataList = [];
					lineChartData13.byDataList = [];
					lineChartData13.dataYearOnyearList = [];
					let obj = {
						'1': '周一',
						'2': '周二',
						'3': '周三',
						'4': '周四',
						'5': '周五',
						'6': '周六',
						'0': '周日',
					}
					if (type == 1) {
						lineChartData13.legendData = ["本周", "上周", "去年同期"]
					}
					if (type == 2) {
						lineChartData13.legendData = ["本月", "上月", "去年同期"]
					}
					if (type == 3) {
						lineChartData13.legendData = ["本年", "去年"]
					}
					let ln = currentDataList.length > 0 ? currentDataList : (byDataList.length > 0 ? byDataList : dataYearOnyearList);
					for (let i = 0; i < ln.length; i++) {
						if (type == 1) {
							lineChartData13.xData.push(obj[ln[i].time]);
							let cur = currentDataList[i] ? currentDataList[i].sales : 0;
							lineChartData13.currentDataList.push(cur);
							let by = byDataList[i] ? byDataList[i].sales : 0;
							lineChartData13.byDataList.push(by);
							let yea = dataYearOnyearList[i] ? dataYearOnyearList[i].sales : 0;
							lineChartData13.dataYearOnyearList.push(yea);
							lineChartData13.dataZoom = []
						}
						if (type == 2) {
							console.log(ln[i])
							let time = ln[i].time.substring(6, 8);
							if(time.substr(0, 1)=='0') {
								time = time.substr(1, 2) + '日'
							} else {
								time = time.substr(0, 2) + '日'
							}
							lineChartData13.xData.push(time);
							let cur = currentDataList[i] ? currentDataList[i].sales : 0;
							lineChartData13.currentDataList.push(cur);
							let by = byDataList[i] ? byDataList[i].sales : 0;
							lineChartData13.byDataList.push(by);
							let yea = dataYearOnyearList[i] ? dataYearOnyearList[i].sales : 0;
							lineChartData13.dataYearOnyearList.push(yea);
							lineChartData13.dataZoom = [{
								type: "inside",
								startValue: lineChartData13.xData.length - 5,
								endValue: lineChartData13.xData.length - 1,
								zoomLock: true
							}]
						}
						if (type == 3) {
							let time = ln[i].time.substring(4, 6);
							if(time.substr(0, 1)=='0') {
								time = time.substr(1, 2) + '月'
							} else {
								time = time.substr(0, 2) + '月'
							}
							lineChartData13.xData.push(time);
							let cur = currentDataList[i] ? currentDataList[i].sales : 0;
							let by = byDataList[i] ? byDataList[i].sales : 0;
							lineChartData13.currentDataList.push(cur);
							lineChartData13.byDataList.push(by);
							// lineChartData13.dataYearOnyearList.push(dataYearOnyearList[i].sales);
							lineChartData13.dataZoom = [{
								type: "inside",
								startValue: lineChartData13.xData.length - 5,
								endValue: lineChartData13.xData.length - 1,
								zoomLock: true
							}]
						}
					}
					console.log(currentDataList, byDataList, dataYearOnyearList)
					console.log(lineChartData13)

				}
				let chartSet13 = function () {
					if (chart13) {
						chart13.setOption(initOption13())
						console.log('set chart')
					} else {
						setTimeout(() => {
							console.log("chart is null")
							chartSet13();
						}, 500)
					}
				}
				chartSet13();
				wx.hideLoading();
			},
			fail: error => {
				wx.hideLoading();
			}
		})
	},
	onChange(e) {
		let arr = ['weui-tabs-swiper', 'weui-tabs-swiper1', 'weui-tabs-swiper2', 'weui-tabs-swiper2', 'weui-tabs-swiper2']
		let arr1 = [
			{
				name:'客流',
				class:'weui-tabs-swiper',
				index:0
			},
			{
				name:'会员',
				class:'weui-tabs-swiper1',
				index:1
			},
			{
				name:'车场',
				class:'weui-tabs-swiper2',
				index:2
			},
			{
				name:'收银',
				class:'weui-tabs-swiper2',
				index:3
			},
			{
				name:'商管',
				class:'weui-tabs-swiper2',
				index:4
			},
		]
		// wx.pageScrollTo({
		// 	scrollTop: this.data.scrollTop+2
		// })
		let i = e.detail.index;
		let id = e.detail.id;
		wx.setStorageSync('dataId', id)
		this.setData({
			swiperClass: arr1.find(item=>item.name==id).class,
			idx: arr1.find(item=>item.name==id).index,
			dataId:id
		})
		console.log('id',id)
		setTimeout(() => {

			if (id == '客流') {
				this.getLineDataxse(this.data.type10)
			}
			if (id == '会员') {
				this.getLineData1xse(this.data.type11)
			}
			if (id == '车场') {
				this.getLineData2xse(this.data.type12)
			}
			if (id == '收银') {
				this.getLineData3xse(this.data.type13)
			}
		}, 200)

	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		let userId = wx.getStorageSync('userId');
	
		if (!userId) {
			wx.reLaunch({
				url: '../login/login',
			})
			return
		}
		wx.showLoading();
		this.getConsumptionData();
		this.getMemberData();
		this.getMemberData1();
		this.getMonitorData();
		this.getMonitorData1();
		this.getCarData();
		// this.getCarData1();
		// this.getBMData();
		this.getBMData1();
		// this.getLineDataxse(1);
		// this.getLineData1xse(1);
		// this.getLineData();
		// this.getLineData1();
		// this.drawLeasePie();
		let titless = [{
			title:'客流',
			name:'keliu',
			code:'frontPagePassengerFlow',
			class:'weui-tabs-swiper',
				index:0
		},{
			title:'会员',
			name:'huiyuan',
			code:'frontPageMember',
			class:'weui-tabs-swiper1',
				index:1
		},{
			title:'车场',
			name:'chechang',
			code:'frontPageGreenhouse',
			class:'weui-tabs-swiper2',
				index:2
		},{
			title:'收银',
			name:'shouyin',
			code:'frontPageCashier',
			class:'weui-tabs-swiper2',
				index:3
		},{
			title:'商管',
			name:'shangguan',
			code:'frontPageCommercialManagement',
			class:'weui-tabs-swiper2',
				index:4
		}]
		console.log(this.data.dataId)
		setTimeout(()=>{

			console.log('用户权限信息',app.globalData,app.globalData.power)
			if(!app.globalData.power.frontPagePassengerFlow) {
				titless = titless.filter(item=>item.title!=='客流')
			}
			if(!app.globalData.power.frontPageMember) {
				titless = titless.filter(item=>item.title!=='会员')
			}
			if(!app.globalData.power.frontPageGreenhouse) {
				titless = titless.filter(item=>item.title!=='车场')
			}
			if(!app.globalData.power.frontPageCashier) {
				titless = titless.filter(item=>item.title!=='收银')
			}
			if(!app.globalData.power.frontPageCommercialManagement) {
				titless = titless.filter(item=>item.title!=='商管')
			}
			const tabs = titless.map((item, index) => ({
				title: item.title,
				url: '../../images/' + item.name + '.png',
				url1: '../../images/' + item.name + '1.png',
			}))
			console.log(this.data.dataId,tabs[0].title)
			if (this.data.dataId=='客流') {
				console.log('请求客流数据')
				this.setData({
					idx:0,
					swiperClass:'weui-tabs-swiper'
				})
				this.getLineDataxse(this.data.type10)
			}
			if (this.data.dataId=='会员') {
				console.log('请求会员数据')
				this.setData({
					idx:1,
					swiperClass:'weui-tabs-swiper1'
				})
				this.getLineData1xse(this.data.type11)
			}
			if (this.data.dataId=='车场') {
				this.setData({
					idx:2,
					swiperClass:'weui-tabs-swiper2'
				})
				console.log('请求车场数据')

				this.getLineData2xse(this.data.type12)
			}
			if (this.data.dataId=='收银') {
				console.log('请求收银数据')
				this.setData({
					idx:3,
					swiperClass:'weui-tabs-swiper2'
				})

				this.getLineData3xse(this.data.type13)
			}
			if (this.data.dataId=='商管') {
				console.log('请求收银数据')
				this.setData({
					idx:4,
					swiperClass:'weui-tabs-swiper2'
				})
			}
	
			this.setData({
				tabs,
				tabs1:tabs.map(item=>item.title),
				power:app.globalData.power,
				dataId:wx.getStorageSync('dataId')?wx.getStorageSync('dataId'):tabs[0].title
			})
		},500)
	},
	getConsumptionData: function (e) {
		util.ajax({
			url: "data-analysis/api/sg/salesDataForThisMonthThisWeekAndToday",
			method: "POST",
			success: res => {
				if (res.success) {
					let data = res.data;
					this.setData({
						todaySales: data.todaySales > 10000 ? (res.data.todaySales / 10000).toFixed(2) : res.data.todaySales,
						todaySales1: data.todaySales,
						weekSales: data.weekSales,
						monthSales: data.monthSales
					})
					console.log(this.data.todaySales, typeof this.data.todaySales, this.data.todaySales1, typeof this.data.todaySales1)
					this.setData({
						dataAllSales: {
							todaySales: data.todaySales > 10000 ? (res.data.todaySales / 10000).toFixed(2) : res.data.todaySales,
							weekSales: data.weekSales,
							monthSales: data.monthSales,
							monthCustomerPrice: data.monthCustomerPrice > 10000 ? (res.data.monthCustomerPrice / 10000).toFixed(2) : res.data.monthCustomerPrice,
							yearSales: data.yearSales,
						}
					})
				}
				wx.hideLoading();
			},
			fail: error => {
				wx.hideLoading();
			}
		})
	},
	getMemberData: function (e) {
		util.ajax({
			url: "data-analysis/api/general/member/menberData",
			method: "POST",
			success: res => {
				if (res.success) {
					this.setData({
						totalNumberOfMembers: res.data.totalNumberOfMembers,
						totalNumberOfMaleMembers: res.data.totalNumberOfMaleMembers,
						totalNumberOfFemaleMembers: res.data.totalNumberOfFemaleMembers,
						totalNumberOfOtherMembers: res.data.totalNumberOfOtherMembers
					})
					this.setData({
						dataAllMember: {
							totalNumberOfMembers: parseFloat(res.data.totalNumberOfMembers).toLocaleString(),
							totalNumberOfMembers: res.data.totalNumberOfMembers > 10000 ? (res.data.totalNumberOfMembers / 10000).toFixed(2) : res.data.totalNumberOfMembers,
							totalNumberOfMaleMembers: res.data.totalNumberOfMaleMembers,
							totalNumberOfFemaleMembers: res.data.totalNumberOfFemaleMembers,
							totalNumberOfOtherMembers: res.data.totalNumberOfOtherMembers,
						}
					})
				}
				wx.hideLoading();
			},
			fail: error => {
				wx.hideLoading();
			}
		})
	},
	getMemberData1: function (e) {
		util.ajax({
			url: "data-analysis/api/general/member/newMemberStatistics?type=1",
			method: "POST",
			success: res => {
				if (res.success) {
					this.setData({
						totalNewMumber: res.data.totalNumberOfMembers
					})
					console.log(3333333333, res.data.totalNumberOfMembers)
				}
				wx.hideLoading();
			},
			fail: error => {
				wx.hideLoading();
			}
		})
	},
	getMonitorData: function (e) {
		util.ajax({
			url: "data-analysis/api/passengerFlow/basicPassengerFlowData",
			method: "POST",
			success: res => {
				if (res.success) {
					this.setData({
						dayPassengerFlow: res.data.dayPassengerFlow,
						weekPassengerFlow: res.data.weekPassengerFlow,
						monthPassengerFlow: res.data.monthPassengerFlow,
						yearPassengerFlow: res.data.yearPassengerFlow,
					})
					this.setData({
						dataAllFlow: {
							// dayPassengerFlow: parseFloat(res.data.dayPassengerFlow).toLocaleString(),
							dayPassengerFlow: res.data.dayPassengerFlow > 10000 ? (res.data.dayPassengerFlow / 10000).toFixed(2) : res.data.dayPassengerFlow,
							dayPassengerFlow11: res.data.dayPassengerFlow,
							weekPassengerFlow: res.data.weekPassengerFlow,
							monthPassengerFlow: res.data.monthPassengerFlow,
							yearPassengerFlow: res.data.yearPassengerFlow,
						}
					})
					console.log(444444444, this.data.dataAllFlow, this.dataAllFlow)
				}
				wx.hideLoading();
			},
			fail: error => {
				wx.hideLoading();
			}
		})
	},
	getMonitorData1: function (e) {
		util.ajax({
			url: "data-analysis/api/passengerFlow/monthPassengerFlow",
			method: "POST",
			success: res => {
				if (res.success) {
					this.setData({
						monthPassengerFlow: res.data
					})
				}
				wx.hideLoading();
			},
			fail: error => {
				wx.hideLoading();
			}
		})
	},
	getCarData: function (e) {
		util.ajax({
			url: "data-analysis/api/parkingLotStatistics/parkingInformation",
			method: "POST",
			success: res => {
				if (res.success) {
					console.log('总车位：' + res.data.totalSpace)
					this.setData({
						totalSpace: res.data.totalSpace
					})
				}
				wx.hideLoading();
			},
			fail: error => {
				wx.hideLoading();
			}
		})
	},
	getCarData1: function (e) {
		util.ajax({
			url: "data-analysis/api/parkingLotStatistics/vehicleAccessInformation",
			method: "POST",
			success: res => {
				if (res.success) {
					this.setData({
						dayAppearanceData: res.data.dayAppearanceData, //今日出
						dayEntryData: res.data.dayEntryData, //今日入
					})
				}
				wx.hideLoading();
			},
			fail: error => {
				wx.hideLoading();
			}
		})
	},
	getBMData1: function (e) {
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
					let mydate = new Date();
					for (let i = 0; i < res.data.dateStatistic.length; i++) {
						if (res.data.dateStatistic[i].timestr.substring(4, 6) == (mydate.getMonth() + 1)) {
							this.setData({
								shoundAmount: res.data.dateStatistic[i].shoundAmount,
								receivableAmount: res.data.dateStatistic[i].receivableAmount,
								marketRevenue: res.data.dateStatistic[i].mallShoundAmount,
								blockIncome: res.data.dateStatistic[i].squareShoundAmount,
								dataAllMarket: {
									shoundAmount: res.data.dateStatistic[i].shoundAmount,
									receivableAmount: res.data.dateStatistic[i].receivableAmount,
									marketRevenue: res.data.dateStatistic[i].mallShoundAmount,
									blockIncome: res.data.dateStatistic[i].squareShoundAmount,
								}
							})
						}
					}
				}
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
		//this.ecComponent = this.selectComponent('#mychart-dom-bar');
	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {
		this.onLoad()
	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {
		let that = this;
		that.setData({
			num10: 1,
			type10: 1,
			num11: 1,
			type11: 1,
			num12: 1,
			type12: 1,
			num13: 1,
			type13: 1,
		})

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {
		//	chart = null;
		//chart1 = null;
		//chart2 = null;
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