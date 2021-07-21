// pages/index/index.js
import * as echarts from '../../ec-canvas/echarts';
const util = require('../../utils/util');
const app = getApp();
//曲线图
var chart = null;
var chart1 = null;
var chart2 = null;
var areaTotal = 0;
var rentedAreaTotal = 0;
let lineChartData = {
	xData: [],
	seriesData: [],
}
let lineChartData1 = {
	xData: [],
	seriesData: [],
}

function initOption() {
	
	return {
		grid: {
			left: '5%',
			right: '15%',
			top: '10%',
			bottom: '5%',
			containLabel: true
		},
		tooltip: {
			trigger: 'axis'
		},
		dataZoom: [{
			type: "inside",
			startValue:lineChartData.xData.length - 9,
			endValue: lineChartData.xData.length - 1
		}],
		xAxis: {
			type: 'category',
			name: '',
			nameLocation: 'middle',
			nameTextStyle: {
				color: "#fff",
				fontSize: 10,
				padding: 10
			},
			splitLine: {
				show: false,
				//  改变轴线颜色
				lineStyle: {
					type: 'dashed',
					color: '#DCE0EE'
				}
			},
			axisTick: { //y轴刻度线
				show: false
			},
			axisLabel: {
				show: true,
				textStyle: {
					color: '#fff',
					fontSize: 10
				}
			},
			boundaryGap: true, //X轴从0开始
			axisLine: {
				show: false,
				lineStyle: {
					color: '#fff',
					width: 1, //这里是坐标轴的宽度
				}
			},
			data: lineChartData.xData
		},
		yAxis: {
			name: '',
			x: 'center',
			type: 'value',
			nameLocation: 'center',
			nameGap: 0,
			// max: mNum,
			// min: 0,
			splitNumber: 10,
			//interval: 200, //间隔
			minInterval: 1, //设置成1保证坐标轴分割刻度显示成整数。
			nameTextStyle: { //文字样式
				color: '#fff',
				fontSize: 10
			},
			axisTick: { //y轴刻度线
				show: false
			},
			axisLabel: {
				show: true,
				textStyle: {
					color: '#fff',
					fontSize: 10
				}
			},
			axisLine: {
				show: false,
				lineStyle: {
					color: '#fff',
					width: 1, //这里是坐标轴的宽度
				}
			},
			splitLine: {
				//show: false,
				lineStyle: {
					type: 'solid',
					color: '#DCE0EE'
				}
			}
			// show: false
		},
		series: [{
			name: '',
			type: 'line',
			color: ['#1BE6DA'],
			markPoint: {
				symbol: 'circle',
				symbolSize: 20,
			},
			itemStyle: {
				normal: {
					label: {
						color: '#fff',
						show: true, //开启显示
						position: 'top', //在上方显示
						textStyle: { //数值样式
							color: 'white',
							fontSize: 10
						}
					}
				},
			},
			data: lineChartData.seriesData
		}]
	};
}

function initOption1() {
	return {
		grid: {
			left: '5%',
			right: '15%',
			top: '10%',
			bottom: '5%',
			containLabel: true
		},
		tooltip: {
			trigger: 'axis',
		},
		dataZoom: [{
			type: "inside",
			endValue: 8
		}],
		xAxis: {
			type: 'category',
			name: '',
			nameLocation: 'middle',
			nameTextStyle: {
				color: "#fff",
				fontSize: 10,
				padding: 10
			},
			splitLine: {
				show: false,
				//  改变轴线颜色
				lineStyle: {
					type: 'dashed',
					color: '#DCE0EE'
				}
			},
			axisTick: { //y轴刻度线
				show: false
			},
			axisLabel: {
				show: true,
				textStyle: {
					color: '#fff',
					fontSize: 10
				}
			},
			boundaryGap: true, //X轴从0开始
			axisLine: {
				show: false,
				lineStyle: {
					color: '#fff',
					width: 1, //这里是坐标轴的宽度
				}
			},
			data: lineChartData1.xData
		},
		yAxis: {
			name: '',
			x: 'center',
			type: 'value',
			nameLocation: 'center',
			nameGap: 0,
			// max: mNum,
			// min: 0,
			splitNumber: 10,
			//interval: 200, //间隔
			minInterval: 1, //设置成1保证坐标轴分割刻度显示成整数。
			nameTextStyle: { //文字样式
				color: '#fff',
				fontSize: 10
			},
			axisTick: { //y轴刻度线
				show: false
			},
			axisLabel: {
				show: true,
				textStyle: {
					color: '#fff',
					fontSize: 10
				}
			},
			axisLine: {
				show: false,
				lineStyle: {
					color: '#fff',
					width: 1, //这里是坐标轴的宽度
				}
			},
			splitLine: {
				//show: false,
				lineStyle: {
					type: 'solid',
					color: '#DCE0EE'
				}
			}
			// show: false
		},
		series: [{
			name: '',
			type: 'line',
			color: ['#1BE6DA'],
			markPoint: {
				symbol: 'circle',
				symbolSize: 20,
			},
			itemStyle: {
				normal: {
					label: {
						color: '#fff',
						show: true, //开启显示
						position: 'top', //在上方显示
						textStyle: { //数值样式
							color: 'white',
							fontSize: 10
						}
					}
				},
			},
			data: lineChartData1.seriesData
		}]
	};
}

function initOption2() {
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
		tooltip: {
			trigger: 'item',
			formatter: '{b}\n{c}m² ({d}%)'
		},
		legend: {
			show: false,
		},
		color: ['#1be6da', '#2e4c61'],
		series: [{
				name: "",
				type: "pie",
				radius: ["50%", "70%"],
				data: resultData,
				label: {
					textStyle: {
						color: '#FFF'
					},
					show:false
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
								opacity: 0
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
								opacity: 0
							},
							emphasis: {
								opacity: 1
							}
						}
					},
				],
				label: {
					textStyle: {
						color: '#FFF'
					},
					formatter:'{b}({d}%)\n{c}m² ',
				},
				labelLine: {
					lineStyle: {
						color: '#FFF'
					},
					showAbove: true
				}
			},
		],
	};
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
		leasePercent: 0.25,
		todaySales: 0,
		weekSales: 0,
		monthSales: 0,
		totalNumberOfMembers: 0, //会员总数
		totalNewMumber: 0,//新增会员
		totalNumberOfMaleMembers: 0,//男性会员数
		totalNumberOfFemaleMembers: 0,//女性会员数
		totalNumberOfOtherMembers: 0,//其他会员数
		dayPassengerFlow: 0,//客流
		weekPassengerFlow: 0,//客流
		monthPassengerFlow: 0,//客流
		yearPassengerFlow: 0,//客流
		totalSpace: 0,
		dayEntryData: 0,
		dayAppearanceData: 0,
		shoundAmount: 0,
		receivableAmount: 0,
		marketRevenue:0,
		blockIncome:0,
		tabs: [],
		activeTab: 0,
		dataAllFlow:{},//人流
		dataAllMember:{},//会员
		dataAllSales:{},//收银
		dataAllMarket:{},

		swiperClass:'weui-tabs-swiper'
	},
	onChange(e) {
		let arr = ['weui-tabs-swiper','weui-tabs-swiper1','weui-tabs-swiper1','weui-tabs-swiper2','weui-tabs-swiper']
		let i = e.detail.index
		console.log(e.detail.index)
		this.setData({
			swiperClass:arr[i]
		})

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
		// this.getLineData();
		// this.getLineData1();
		// this.drawLeasePie();
		const titles = ['keliu', 'huiyuan', 'chechang', 'shouyin', 'shangguan'];
		const title = ['客流', '会员', '车场', '收银', '商管']
    const tabs = titles.map((item,index) => ({title: item,
      // url:getApp().globalData.baseUrl+'客流.png'}))
      url:'../../images/'+item+'.png',
			url1:'../../images/'+item+'1.png',
			title:title[index]
		}))
		let dataInfo = {

		}
    this.setData({tabs})
	},
	getConsumptionData: function (e) {
		util.ajax({
			url: "data-analysis/api/sg/salesDataForThisMonthThisWeekAndToday",
			method: "POST",
			success: res => {
				if (res.success) {
					let data = res.data;
					this.setData({
						todaySales: data.todaySales > 10000? (res.data.todaySales/10000).toFixed(2):res.data.todaySales,
						weekSales: data.weekSales,
						monthSales: data.monthSales
					})
					this.setData({
						dataAllSales:{
							todaySales: data.todaySales > 10000? (res.data.todaySales/10000).toFixed(2):res.data.todaySales,
							weekSales: data.weekSales > 10000? (res.data.weekSales/10000).toFixed(2):res.data.weekSales,
							monthSales: data.monthSales > 10000? (res.data.monthSales/10000).toFixed(2):res.data.monthSales,
							monthCustomerPrice:data.monthSales > 10000? (res.data.monthSales/10000).toFixed(2):res.data.monthSales,
							yearSales:data.yearSales > 10000? (res.data.yearSales/10000).toFixed(2):res.data.yearSales,
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
						dataAllMember:{
							totalNumberOfMembers: parseFloat(res.data.totalNumberOfMembers).toLocaleString(),
							totalNumberOfMaleMembers: res.data.totalNumberOfMaleMembers > 10000? (res.data.totalNumberOfMaleMembers/10000).toFixed(2):res.data.totalNumberOfMaleMembers,
							totalNumberOfFemaleMembers: res.data.totalNumberOfFemaleMembers > 10000? (res.data.totalNumberOfFemaleMembers/10000).toFixed(2):res.data.totalNumberOfFemaleMembers,
							totalNumberOfOtherMembers: res.data.totalNumberOfOtherMembers > 10000? (res.data.totalNumberOfOtherMembers/10000).toFixed(2):res.data.totalNumberOfOtherMembers,
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
						totalNewMumber:  res.data.totalNumberOfMembers
					})
					console.log(3333333333,res.data.totalNumberOfMembers)
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
						dataAllFlow:{
							dayPassengerFlow: parseFloat(res.data.dayPassengerFlow).toLocaleString(),
							weekPassengerFlow: res.data.weekPassengerFlow,
							monthPassengerFlow: res.data.monthPassengerFlow,
							yearPassengerFlow: res.data.yearPassengerFlow,
						}
					})
					console.log(444444444,this.data.dataAllFlow,this.dataAllFlow)
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
					console.log('总车位：'+res.data.totalSpace)
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
	getBMData: function (e) {
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
						rentedAreaTotal = res.data.data.rentedAreaTotal
				}
				let chartSet = function () {
					if (chart2) {
						console.log(chart2)
						chart2.setOption(initOption2())
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
								marketRevenue:res.data.dateStatistic[i].mallShoundAmount,
								blockIncome:res.data.dateStatistic[i].squareShoundAmount,
								dataAllMarket:{
									shoundAmount: res.data.dateStatistic[i].shoundAmount,
									receivableAmount: res.data.dateStatistic[i].receivableAmount,
									marketRevenue:res.data.dateStatistic[i].mallShoundAmount,
									blockIncome:res.data.dateStatistic[i].squareShoundAmount,
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