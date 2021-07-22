// pages/income/income.js
import * as echarts from '../../../ec-canvas/echarts';
const util = require('../../../utils/util');
const app = getApp();
//曲线图
var chart = null;
var chart4 = null;
var incomeValue = [];
var totalIncome = 0;
let lineChartData = {
	xData: [],
	shoundAmount: [],
	receivableAmount: [],
	outstandingAmount: []
}

function initOption4() {
	return {
		grid: {
			left: '5%',
			right: '5%',
			top: '5%',
			bottom: '5%',
			containLabel: true
		},
		"tooltip": {
			"trigger": "axis",
			"axisPointer": {
				"type": "shadow",
				textStyle: {
					color: "#fff"
				}

			}
		},
		legend: {
			data: [ "应交","已付", "未付"],
			textStyle: {
				color: '#2d3450'
			},
			right: 0
		},
		"grid": {
			"left": '15%',
			right: '5%',
			textStyle: {
				color: "#fff"
			}
		},
		"calculable": true,
		"xAxis": [{
			"type": "category",
			"splitLine": {
				"show": false
			},
			"axisTick": {
				"show": false
			},
			"splitArea": {
				"show": false
			},
			axisLine: {
				show: false
			},
			"axisLabel": {
				"interval": 0,
				color: '#2d3450',
				fontSize: 10
			},
			"data": lineChartData.xData,
		}],
		"yAxis": [{
			"type": "value",
			"splitLine": {
				"show": true
			},
			"axisLine": {
				"show": false
			},
			"axisTick": {
				"show": false
			},
			"axisLabel": {
				"interval": 0,
				color: '#2d3450',
				fontSize: 14

			},
			"splitArea": {
				"show": false
			},

		}],
		"series": [ {
			"name": "应交",
			"type": "bar",
			"barGap": "-100%",
			"barWidth": 20,
			// "stack": "总量",
			// symbolSize: 8,
			// symbol: 'circle',
			"itemStyle": {
				"normal": {
					"color": '#c4c9d9',
					"barBorderRadius": 2,
					borderWidth: 1 
				}
			},
			lineStyle: {
				normal: {
					width: 2,
					color: '#18e8d7',
				}
			},
			"data": lineChartData.shoundAmount
		},{
				"name": "已付",
				"type": "bar",
				"stack": "总量",
				"barWidth": 20,
				"barGap": "-100%",
				"itemStyle": {
					"normal": {
						"color": '#7a819e',
					}
				},
				"data": lineChartData.receivableAmount,
			},

			{
				"name": "未付",
				"type": "bar",
				"barGap": "-100%",
				"stack": "总量",
				"itemStyle": {
					"normal": {
						"color": '#f9023c',
						// "barBorderRadius": [20, 20, 0, 0]
					}
				},
				"data": lineChartData.outstandingAmount
			},
		]
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
		totalIncome:0,
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		var that = this;
		// that.getPieData();
		that.getPieData1();
		// that.getLineData();  本月
		that.getLineData1(); //本年
		this.getData()
		wx.showLoading();
	},
	getData() {
		wx.request({
			// url: app.globalData.baseUrlOP + 'rest/sgsdbi/getrentsalesratio',
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
				
				}
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
						incomeList: (res.data.categoryStatistic).map(item=>{
							if(item.value>10000) {

								item.value = (item.value/10000).toFixed(2)
							} else {
								item.value = item.value
							}
							return item
						}),
						
						marketRevenue:res.data.mallTotal>10000?(res.data.mallTotal/10000).toFixed(2):res.data.mallTotal,
						blockIncome:res.data.squareTotal>10000?(res.data.squareTotal/10000).toFixed(2):res.data.squareTotal,
						totalIncome:totalIncome>10000?(totalIncome/10000).toFixed(2):totalIncome
					})
				}
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
					if (chart4) {
						chart4.setOption(initOption4())
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
		chart4 = null;
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