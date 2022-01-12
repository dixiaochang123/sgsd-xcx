// pages/indexInfo/indexInfo.js
// pages/memData/memData.js
import * as echarts from '../../../ec-canvas/echarts';
const util = require('../../../utils/util');
const app = getApp();
let yearFit = app.globalData.yearFit-1
var chart = null;
var chart1 = null;
var chart2 = null;
var chart3 = null;
var chart4 = null;
var chart5 = null;
var chart6 = null;
var chart10 = null;
var chart11 = null;
var chart12 = null;
let pieChartData = {
	totalNumberOfMembers: 0,
	totalNumberOfMaleMembers: [],
	totalNumberOfFemaleMembers: [],
	totalNumberOfOtherMembers: []
}
let lineChartData = {
	xData: [],
	seriesData: []
}
let radarChartData = {
	indicatorMale: [],
	indicatorFemale: [],
	indicatorOther: [],
	maleCount: [],
	famaleCount: [],
	otherCount: []
}
let chartData = {
	couponGivenCount: 0,
	couponGainRatio: 0,
	couponUsedRatio: 0
}
let initOptions6data = [120, 180, 150]

function initOption() {
	return {
		// tooltip: {
		// 	show: false
		// },
		tooltip: {
			trigger: 'item',
			confine: true
		},
		grid: {
			left: 60,
		},
		title: {
			text: pieChartData.totalNumberOfMembers + '人',
			subtext: ' 会员总数',
			right: 'center',
			top: '40%',
			textStyle: {
				fontSize: 14,
				color: '#3f3d60'
			},
			subtextStyle: {
				fontSize: 10
			}
		},
		color: ['#1be6da', '#ff555d', '#929292'],
		series: [{
			name: '会员',
			type: 'pie',
			radius: ['65%', '85%'],
			center: ['50%', '50%'],
			// roseType: 'radius',
			stillShowZeroSum: true,
			data: [{
					value: pieChartData.totalNumberOfMaleMembers,
					name: '男性会员'
				},
				{
					value: pieChartData.totalNumberOfFemaleMembers,
					name: '女性会员'
				},
				{
					value: pieChartData.totalNumberOfOtherMembers,
					name: '其他会员'
				}
			],
			label: {
				show: false,
			},
		}]
	};
}

function initOption1() {
	return {
		grid: {
			left: 0,
			right: '3%',
			top: '10%',
			bottom: '5%',
			containLabel: true
		},
		dataZoom: [{
			type: "inside",
			// start: 70,
			startValue: lineChartData.xData.length - 8,
			endValue: lineChartData.xData.length - 1,
			zoomLock: true
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
					color: '#000',
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
			type: 'value',
			show: false,
			splitLine: {
				show: false
			}
		},
		series: [{
			name: '',
			type: 'bar',
			barWidth: 30,
			color: ['#1BE6DA'],
			// itemStyle: {
			// 	normal: {
			// 		color:"#3f505d",
			// 		barBorderRadius: [8, 8, 0, 0],
			// 		label: {
			// 			show: true, //开启显示
			// 			position: 'top', //在上方显示
			// 			textStyle: { //数值样式
			// 				color: '#fff',
			// 				fontSize: 10
			// 			}
			// 		}
			// 	},
			// 	emphasis:{
			// 		color:"#1be6da"
			// 	}
			// },
			label: {
				show: true,
				position: 'top',
				valueAnimation: true
			},
			itemStyle: {
				borderRadius: 5,

				borderColor: 'transparent',
				borderWidth: 3,
				color: '#bcc3dc'
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
						color: '#9c9bb3'
					}, {
						offset: 0.2,
						color: '#d9d9e7'
					}, {
						offset: 0.4,
						color: '#d9d9e7'
					}, {
						offset: 0.6,
						color: '#d9d9e7'
					}, {
						offset: 1,
						color: '#dadeec'
					}],
					global: false // 缺省为 false
				},
				borderColor: '#ebeef8',
				borderWidth: 3,
				borderRadius: 5,
				opacity: 1
			},
			data: lineChartData.seriesData,
			emphasis: {
				label: {
					position: 'top',
					show: true,
					color: "#e5004f"
				},
				itemStyle: {
					color: "#e5004f"
				}
			}
		}]
	};
}

function initOption2() {
	return {
		tooltip: {
			trigger: 'item',
			formatter: function (param) {
				return '' +
					radarChartData.indicatorMale[0].name + ':' + param.value[0] + '\n' +
					radarChartData.indicatorMale[1].name + ':' + param.value[1] + '\n' +
					radarChartData.indicatorMale[2].name + ':' + param.value[2] + '\n' +
					radarChartData.indicatorMale[3].name + ':' + param.value[3] + '\n' +
					radarChartData.indicatorMale[4].name + ':' + param.value[4] + '\n' +
					radarChartData.indicatorMale[5].name + ':' + param.value[5]
			},
			axisPointer: {
				type: 'shadow'
			}
		},
		color: "#3e8dfe",
		radar: {
			name: {
				textStyle: {
					color: '#fff'
				}
			},
			indicator: radarChartData.indicatorMale,
		},
		series: [{
			name: '年龄分布',
			type: 'radar',
			data: [{
				value: radarChartData.maleCount,
				name: '男性',
				areaStyle: {
					opacity: 0.6,
					color: '#3e8dfe'
				}
			}]
		}]
	};
}

function initOption3() {
	return {
		tooltip: {
			trigger: 'item',
			formatter: function (param) {
				return '' +
					radarChartData.indicatorFemale[0].name + ':' + param.value[0] + '\n' +
					radarChartData.indicatorFemale[1].name + ':' + param.value[1] + '\n' +
					radarChartData.indicatorFemale[2].name + ':' + param.value[2] + '\n' +
					radarChartData.indicatorFemale[3].name + ':' + param.value[3] + '\n' +
					radarChartData.indicatorFemale[4].name + ':' + param.value[4] + '\n' +
					radarChartData.indicatorFemale[5].name + ':' + param.value[5]
			},
			axisPointer: {
				type: 'shadow'
			}
		},
		color: "#D11D2A",
		radar: {
			name: {
				textStyle: {
					color: '#fff'
				}
			},
			indicator: radarChartData.indicatorFemale,
		},
		series: [{
			name: '年龄分布',
			type: 'radar',
			data: [{
				value: radarChartData.famaleCount,
				name: '女性',
				areaStyle: {
					opacity: 0.6,
					color: '#D11D2A'
				}
			}]
		}]
	};
}

function initOption4() {
	return {
		tooltip: {
			trigger: 'item',
			formatter: function (param) {
				return '' +
					radarChartData.indicatorOther[0].name + ':' + param.value[0] + '\n' +
					radarChartData.indicatorOther[1].name + ':' + param.value[1] + '\n' +
					radarChartData.indicatorOther[2].name + ':' + param.value[2] + '\n' +
					radarChartData.indicatorOther[3].name + ':' + param.value[3] + '\n' +
					radarChartData.indicatorOther[4].name + ':' + param.value[4] + '\n' +
					radarChartData.indicatorOther[5].name + ':' + param.value[5]
			},
			axisPointer: {
				type: 'shadow'
			}
		},
		color: "#1BE6DA",
		radar: {
			name: {
				textStyle: {
					color: '#fff'
				}
			},
			indicator: radarChartData.indicatorOther,
		},
		series: [{
			name: '年龄分布',
			type: 'radar',
			data: [{
				value: radarChartData.otherCount,
				name: '其他',
				areaStyle: {
					opacity: 0.6,
					color: '#1BE6DA'
				}
			}]
		}]
	};
}

function initOption5() {
	var placeHolderStyle = {
		normal: {
			color: 'rgba(124,228,245,0.2)',
		},
	};

	return {
		title: {
			text: ` ` + chartData.couponGivenCount + `\n发放数量`,
			top: "center",
			left: "center",
			textStyle: {
				fontSize: 12,
				color: '#ffffff'
			}
		},
		tooltip: {
			show: false,
			formatter: "{a}：{d}%"
		},
		legend: {
			orient: '',
			itemGap: 12,
			left: '25%',
			top: 'center',
			textStyle: {
				color: "#fff",
			},
			data: ['领取数量', '使用数量', '核销率']
		},
		series: [{
				type: 'pie',
				hoverAnimation: false,
				clockWise: false,
				radius: ['60%', '80%'],
				itemStyle: {
					normal: {
						color: '#4cabfe',
						label: {
							show: false
						},
						labelLine: {
							show: false
						}
					}
				},
				data: [{
						value: 1 - chartData.couponGainRatio,
						itemStyle: placeHolderStyle
					},
					{
						value: chartData.couponGainRatio,
					}
				],
			},
			{
				type: 'pie',
				clockWise: false,
				hoverAnimation: false,
				radius: ['60%', '80%'],
				itemStyle: {
					normal: {
						color: '#ffaf00',
						label: {
							show: false
						},
						labelLine: {
							show: false
						}
					}
				},
				data: [{
						value: 1 - chartData.couponUsedRatio,
						itemStyle: placeHolderStyle
					},
					{
						value: chartData.couponUsedRatio,
					}
				]
			},
			/**{
				type: 'pie',
				clockWise: false,
				hoverAnimation: false, 
				radius: ['70%', '80%'],
				itemStyle: {
					normal: {
						color: '#01ebb9',
						label: {
							show: false
						},
						labelLine: {
							show: false
						}
					}
				},
				data: [{
					value: 1-chartData.couponGainRatio,
					itemStyle: placeHolderStyle
				},
				{
					value: chartData.couponGainRatio,
				}]
			}**/
		]
	};;
}

function initOptions6() {
	return {
		grid: {
			left: 60,
			right: 90,
		},
		xAxis: {
			type: 'category',
			data: ['本月', '上月', yearFit+'年同期'],
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
			data: initOptions6data,
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
				color: '#bcc3dc'
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
			},
			emphasis: {
				label: {
					color: "#e5004f"
				},
				itemStyle: {
					color: "#e5004f"
				}
			}
		}]
	}
}
let pieChartData10 = {
	legendData: [],
	seriesData: []
}

function initOptions10(pieChartData10,name,isLinefeed,startAngle) {
	return {
		title: {
			// text: pieChartData10.totalValue,
			text: name==1?'':name || '年龄',
			// subtext: '客流',
			left: 'center',
			right: 'center',
			top: 'center',
			textStyle: {
				fontSize: 16,
				color: '#3f435e'
			},
			subtextStyle: {
				color: '#3f3d60'
			}
		},
		// color: ['#F3961C', '#F25C5D', '#907AFF', '#0ECEFF', '#0566E8', '#32CD32'],
		color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4','#ea7ccc'],
		series: [{
			name: '客流占比',
			type: 'pie',
			minAngle: 10,  //设置扇形的最小占比
			startAngle:startAngle || 0,
avoidLabelOverlap: true ,
			radius: ['30%', '50%'],
			center: ['50%', '50%'],
			label: {
				textStyle: {
					color: '#3f435e'
				},
				// formatter: '{b}\n{c}m²'
				formatter: function (pram) {
					if(isLinefeed) {

						// return pram.name + ' ' + pram.value + '%'
						return pram.name + '\n'  + pram.value + '%'
					}else {
						return pram.name + ' ' + pram.value + '%'

					}
				},
				overflow: 'none'
			},
			labelLine:{
				show:true,
				
				showAbove:true
			},
			data: pieChartData10.seriesData,
			itemStyle: {
				// borderRadius: 10,
				borderColor: '#e3e7f5',
				borderWidth: 4
			},
		}, {
			itemStyle: {
				normal: {
					color: '#e3e6f5',
					borderColor: {
						type: 'radial',
						x: 0.5,
						y: 0.5,
						r: 0.5,
						colorStops: [{
							offset: 0,
							color: '#000000' // 0% 处的颜色
						}, {
							offset: 1,
							color: '#e4e7f6' // 100% 处的颜色
						}],
						global: false // 缺省为 false
					},
					borderWidth: 5,
				}
			},
			type: 'pie',
			hoverAnimation: false,
			radius: ['40%', '60%'],
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
	}
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
		ec1: {
			onInit: (canvas, width, height, dpr) => {
				chart1 = echarts.init(canvas, null, {
					width: width,
					height: height,
					devicePixelRatio: dpr // new
				});
				canvas.setChart(chart1);
				return chart1;
			},
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
			},
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
			},
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
			},
		},
		ec5: {
			onInit: (canvas, width, height, dpr) => {
				chart5 = echarts.init(canvas, null, {
					width: width,
					height: height,
					devicePixelRatio: dpr // new
				});
				canvas.setChart(chart5);
				return chart5;
			}
		},
		ec6: {
			onInit: (canvas, width, height, dpr) => {
				chart6 = echarts.init(canvas, null, {
					width: width,
					height: height,
					devicePixelRatio: dpr // new
				});
				canvas.setChart(chart6);
				return chart6;
			}
		},
		ec10: {
			onInit: (canvas, width, height, dpr) => {
				chart10 = echarts.init(canvas, null, {
					width: width,
					height: height,
					devicePixelRatio: dpr // new
				});
				canvas.setChart(chart10);
				return chart10;
			},
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
			},
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
			},
		},
		totalScore: [],
		GainCount: [],
		GainRatio: [],
		GivenCount: [],
		UsedCount: [],
		UsedRatio: [],
		num: 1,
		flag: "月",
		totalNumberOfMembers: [],
		totalNumberOfMaleMembers: [],
		proportionOfMaleMembers: [],
		totalNumberOfFemaleMembers: [],
		proportionOfFemaleMembers: [],
		proportionOfOtherMembers: [],
		totalNumberOfOtherMembers: [],
		totalMember: [],
		maleMembersYearOnYear: [],
		previousPeriodTotalNumberOfMaleMembers: [],
		presentNumberOfMaleMembers: [],
		femaleMembersYearOnYear: [],
		previousPeriodTotalNumberOfFemaleMembers: [],
		presentNumberOfFemaleMembers: [],
		otherMembersYearOnYear: [],
		previousPeriodTotalNumberOfOtherMembers: [],
		presentNumberOfOtherMembers: [],

		activeflow: '点击率',
		flowdata: 0, //客流  本周/本月/本年

		activeMember: "男会员",
		activeMember1: "点击率",
		memberdata: '',
		dataAllMember: {},
		dataAllMember1: {},

		flowList: [],
		activeUserStatistics: '',
		tb: '',
		hb: '',
		tbisadd: true,
		hbisadd: true,
		top5: 'first5',
		count: '' //微信
	},
	getList() {
		util.ajax({
			url: "data-analysis/api/general/member/newAgeStatistics",
			method: "POST",
			success: res => {
				if (res.success) {
					let {
						totalCount,
						age00Proportion,
						age50Proportion,
						age60Proportion,
						age70Proportion,
						age80Proportion,
						age90Proportion,
						ageNoProportion
					} = res.data;
					let arr = [{
						value: age00Proportion.substr(0,age00Proportion.length-1),
						name: '00后'
					}, {
						value: age50Proportion.substr(0,age50Proportion.length-1),
						name: '50后'
					}, {
						value: age60Proportion.substr(0,age60Proportion.length-1),
						name: '60后'
					}, {
						value: age70Proportion.substr(0,age70Proportion.length-1),
						name: '70后'
					}, {
						value: age80Proportion.substr(0,age80Proportion.length-1),
						name: '80后'
					}, {
						value: age90Proportion.substr(0,age90Proportion.length-1),
						name: '90后'
					}, {
						value: ageNoProportion.substr(0,ageNoProportion.length-1),
						name: '未知'
					}]
					pieChartData10.seriesData = arr;
					pieChartData10.legendData = arr.map(item => item.name);
					let chartSet = function () {
						if (chart10) {
							chart10.setOption(initOptions10(pieChartData10,'',false,1))
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
				}
			},
			fail: error => {
				wx.hideLoading();
			}
		})
	},
	getList1() {
		util.ajax({
			url: "/data-analysis/api/sg/percentCagegoryOfMemberSales?type=1",
			method: "POST",
			success: res => {
				if (res.success) {
					let {
						list,
						totalSale
					} = res.data
					console.log(list)
					let arr = []
					list.map(item => {
						arr.push({
							value: item.proportion.substr(0,item.proportion.length-1),
							name: item.categoryName
						})
					})

					pieChartData10.seriesData = arr;
					pieChartData10.legendData = arr.map(item => item.name);
					let chartSet = function () {
						if (chart11) {
							chart11.setOption(initOptions10(pieChartData10,'品类',true))
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
				}
			},
			fail: error => {
				wx.hideLoading();
			}
		})
	},
	getList2() {
		util.ajax({
			url: "/data-analysis/api/sg/percentageOfMemberSales",
			dataType: 'json',
			data: JSON.stringify({
				startTime: "2020-01-01",
				endTime: "2021-01-31",
				order: "desc",
				limit: 10,
				groupType: 1
			}),
			header: {
				"content-type": 'application/json'
			},
			method: "POST",
			success: res => {
				if (res.success) {
					console.log(res.data)
					let {
						memberSalesVolumeRatio,
						nonMemberSalesVolumeRatio
					} = res.data
					console.log(memberSalesVolumeRatio, nonMemberSalesVolumeRatio)
					let arr = [{
						value: parseFloat(memberSalesVolumeRatio,2) ,
						name: '会员销售额'
					}, {
						value: parseFloat(nonMemberSalesVolumeRatio,2),
						name: '非会员销售额'
					}]

					pieChartData10.seriesData = arr;
					pieChartData10.legendData = arr.map(item => item.name);
					let chartSet = function () {
						if (chart12) {
							chart12.setOption(initOptions10(pieChartData10,'1',false,90))
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
				}
			},
			fail: error => {
				wx.hideLoading();
			}
		})
	},
	memberIsMoreThanYearOnYear: function (e) {
		util.ajax({
			url: "data-analysis/api/general/member/memberIsMoreThanYearOnYear?type=2",
			method: "POST",
			success: res => {
				if (res.success) {
					console.log(444444, res)
					initOptions6data = Object.values(res.data).filter(item => typeof (item) == "number")
					// 环比增长率=（本期数-上期数）/上期数×100%
					// 同比增长率=（本期数-去年同期数）/去年同期数×100%
					let hb = (((res.data.byData - res.data.dataYearOnYear) / res.data.byData) * 100).toFixed(2);
					let tb = (((res.data.byData - res.data.thisPeriodOfData) / res.data.thisPeriodOfData) * 100).toFixed(2);
					this.setData({
						tb: res.data.coRate.search("-") != -1 ? res.data.coRate.substr(1) : res.data.coRate,
						hb: res.data.ringRatio.search("-") != -1 ? res.data.ringRatio.substr(1) : res.data.ringRatio,
						tbisadd: res.data.coRate.search("-") != -1 ? false : true,
						hbisadd: res.data.ringRatio.search("-") != -1 ? false : true,
					})
					let chartSet = function () {
						if (chart6) {
							chart6.setOption(initOptions6())
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
				}
			},
			fail: error => {
				wx.hideLoading();
			}
		})
	},
	getMemberData1: function (e) {
		util.ajax({
			url: "data-analysis/api/general/member/newMemberStatistics?type=2",
			method: "POST",
			success: res => {
				if (res.success) {
					this.setData({
						dataAllMember1: {
							totalNumberOfMaleMembers: res.data.totalNumberOfMaleMembers,
							totalNumberOfFemaleMembers: res.data.totalNumberOfFemaleMembers,
							totalNumberOfOtherMembers: res.data.totalNumberOfOtherMembers
						},
						memberdata: res.data.totalNumberOfMaleMembers
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
						dataAllMember: {
							totalNumberOfMembers: res.data.totalNumberOfMembers,
							totalNumberOfMaleMembers: res.data.totalNumberOfMaleMembers,
							totalNumberOfFemaleMembers: res.data.totalNumberOfFemaleMembers,
							totalNumberOfOtherMembers: res.data.totalNumberOfOtherMembers
						},
						memberdata: res.data.totalNumberOfMembers > 10000 ? (res.data.totalNumberOfMembers / 10000).toFixed(2) : res.data.totalNumberOfMembers
					})
				}
				wx.hideLoading();
			},
			fail: error => {
				wx.hideLoading();
			}
		})
	},
	gethydata(num) {
		util.ajax({
			url: "data-analysis/api/general/member/activeUserStatistics?type=" + num,
			method: "POST",
			success: res => {
				if (res.success) {
					this.setData({
						activeUserStatistics: res.data
					})
				}
				wx.hideLoading();
			},
			fail: error => {
				wx.hideLoading();
			}
		})
	},
	memberSource() {
		util.ajax({
			url: "data-analysis/api/general/member/memberSource",
			method: "POST",
			success: res => {
				if (res.success) {
					console.log(res.data)
					this.setData({
						count: res.data[0].count
					})
				}
				wx.hideLoading();
			},
			fail: error => {
				wx.hideLoading();
			}
		})
	},
	handleclickTab(event) {
		console.log(event)
		var dataval = event.target.dataset.val;
		// var activeflow = event.target.id;
		// this.setData({
		// 	activeflow
		// });
		let obj1 = {
			'点击率': 0,
			'日活跃': 2,
			'月活跃': 3
		}
		let obj = {
			'男会员': this.data.dataAllMember1.totalNumberOfMaleMembers,
			'女会员': this.data.dataAllMember1.totalNumberOfFemaleMembers,
			'其他': this.data.dataAllMember1.totalNumberOfOtherMembers
		}
		switch (dataval) {
			case "客流":
				var activeMember = event.target.id;
				this.setData({
					activeMember
				});
				this.setData({
					// memberdata: obj[activeMember]>10000?(obj[activeMember]/10000).toFixed(2):obj[activeMember]
					memberdata: obj[activeMember]
				})
				break;
			case "会员":
				var activeMember1 = event.target.id;
				this.setData({
					activeMember1
				});
				this.setData({
					flowdata: obj1[activeMember1]

				})
				this.gethydata(obj1[activeMember1])
				break;

			default:
				// this.setData({
				// 	activeflow: "本周",
				// 	memberdata: "点击率"
				// });
				break;
		}











	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		wx.showLoading();
		this.getData();
		this.getLineData();
		this.getRadarData();
		this.getRadarData1();
		this.getRadarData2();
		this.getData1();
		this.getCouponData();
		this.getMemberData();
		this.getMemberData1();
		this.gethydata(0)
		this.memberSource()
		this.memberIsMoreThanYearOnYear()
		this.getList()
		this.getList1()
		this.getList2()
	},
	getData: function (e) {
		util.ajax({
			url: "data-analysis/api/general/member/menberData",
			method: "POST",
			success: res => {
				if (res.success) {
					pieChartData.totalNumberOfMembers = res.data.totalNumberOfMembers;
					pieChartData.totalNumberOfMaleMembers = res.data.totalNumberOfMaleMembers;
					pieChartData.totalNumberOfFemaleMembers = res.data.totalNumberOfFemaleMembers;
					pieChartData.totalNumberOfOtherMembers = res.data.totalNumberOfOtherMembers;
					this.setData({
						totalNumberOfMembers: res.data.totalNumberOfMembers,
						totalNumberOfMaleMembers: res.data.totalNumberOfMaleMembers,
						totalNumberOfFemaleMembers: res.data.totalNumberOfFemaleMembers,
						proportionOfFemaleMembers: res.data.proportionOfFemaleMembers,
						proportionOfMaleMembers: res.data.proportionOfMaleMembers,
						proportionOfOtherMembers: res.data.proportionOfOtherMembers,
						totalNumberOfOtherMembers: res.data.totalNumberOfOtherMembers
					})
					this.initChart();
				}
				wx.hideLoading();
			},
			fail: error => {
				wx.hideLoading();
			}
		})
	},
	getLineData: function (e) {
		util.ajax({
			url: "data-analysis/api/general/member/membershipGrowthTrendStatistics?type=2",
			method: "POST",
			success: res => {
				if (res.success) {
					lineChartData.xData = [];
					lineChartData.seriesData = [];
					for (let i = 0; i < res.data.membershipGrowthTrend.length; i++) {
						res.data.membershipGrowthTrend[i].date = res.data.membershipGrowthTrend[i].date.substr(-2, 2).replace(/\b(0+)/gi, "") + '日'
						console.log(res.data.membershipGrowthTrend[i].date)
						lineChartData.xData.push(res.data.membershipGrowthTrend[i].date);
						lineChartData.seriesData.push(res.data.membershipGrowthTrend[i].numberOfMembers)
					}
					this.setData({
						flag: "月",
						totalMember: res.data.yearMembershipData.totalNumberOfMembers,
						maleMembersYearOnYear: res.data.yearMembershipData.maleMembersYearOnYear,
						previousPeriodTotalNumberOfMaleMembers: res.data.yearMembershipData.previousPeriodTotalNumberOfMaleMembers,
						presentNumberOfMaleMembers: res.data.yearMembershipData.totalNumberOfMaleMembers,
						femaleMembersYearOnYear: res.data.yearMembershipData.femaleMembersYearOnYear,
						previousPeriodTotalNumberOfFemaleMembers: res.data.yearMembershipData.previousPeriodTotalNumberOfFemaleMembers,
						presentNumberOfFemaleMembers: res.data.yearMembershipData.totalNumberOfFemaleMembers,
						otherMembersYearOnYear: res.data.yearMembershipData.otherMembersYearOnYear,
						previousPeriodTotalNumberOfOtherMembers: res.data.yearMembershipData.previousPeriodTotalNumberOfOtherMembers,
						presentNumberOfOtherMembers: res.data.yearMembershipData.totalNumberOfOtherMembers,
					})
					let chartSet = function () {
						if (chart1) {
							console.log(chart1)
							chart1.setOption(initOption1())
							console.log('set chart')
						} else {
							setTimeout(() => {
								console.log("chart is null")
								chartSet();
							}, 500)
						}
					};
					chartSet();
				}
				wx.hideLoading();
			},
			fail: error => {
				wx.hideLoading();
			}
		})
	},
	getLineData1: function (e) {
		util.ajax({
			url: "data-analysis/api/general/member/membershipGrowthTrendStatistics?type=3",
			method: "POST",
			success: res => {
				if (res.success) {
					lineChartData.xData = [];
					lineChartData.seriesData = [];
					for (let i = 0; i < res.data.membershipGrowthTrend.length; i++) {
						res.data.membershipGrowthTrend[i].date = res.data.membershipGrowthTrend[i].date.substr(-2, 2).replace(/\b(0+)/gi, "") + '月'
						console.log(res.data.membershipGrowthTrend[i].date)
						lineChartData.xData.push(res.data.membershipGrowthTrend[i].date);
						lineChartData.seriesData.push(res.data.membershipGrowthTrend[i].numberOfMembers)
					}
					this.setData({
						flag: "年",
						totalMember: res.data.yearMembershipData.totalNumberOfMembers,
						maleMembersYearOnYear: res.data.yearMembershipData.maleMembersYearOnYear,
						previousPeriodTotalNumberOfMaleMembers: res.data.yearMembershipData.previousPeriodTotalNumberOfMaleMembers,
						presentNumberOfMaleMembers: res.data.yearMembershipData.totalNumberOfMaleMembers,
						femaleMembersYearOnYear: res.data.yearMembershipData.femaleMembersYearOnYear,
						previousPeriodTotalNumberOfFemaleMembers: res.data.yearMembershipData.previousPeriodTotalNumberOfFemaleMembers,
						presentNumberOfFemaleMembers: res.data.yearMembershipData.totalNumberOfFemaleMembers,
						otherMembersYearOnYear: res.data.yearMembershipData.otherMembersYearOnYear,
						previousPeriodTotalNumberOfOtherMembers: res.data.yearMembershipData.previousPeriodTotalNumberOfOtherMembers,
						presentNumberOfOtherMembers: res.data.yearMembershipData.totalNumberOfOtherMembers,
					})
					let chartSet = function () {
						if (chart1) {
							console.log(chart1)
							chart1.setOption(initOption1())
							console.log('set chart')
						} else {
							setTimeout(() => {
								console.log("chart is null")
								chartSet();
							}, 500)
						}
					};
					chartSet();
				}
				wx.hideLoading();
			},
			fail: error => {
				wx.hideLoading();
			}
		})
	},
	getRadarData: function (e) {
		util.ajax({
			url: "data-analysis/api/general/member/ageStatistics",
			method: "POST",
			success: res => {
				if (res.success) {
					radarChartData.maleCount = [];
					//radarChartData.famaleCount = [];
					//radarChartData.otherCount = [];
					radarChartData.indicatorMale = [];
					//radarChartData.indicatorFemale = [];
					//radarChartData.indicatorOther = [];
					for (let i = 0; i < res.data.length; i++) {
						radarChartData.maleCount.push(res.data[i].maleCount);
						//radarChartData.famaleCount.push(res.data[i].femaleCount);
						//radarChartData.otherCount.push(res.data[i].otherCount);
						radarChartData.indicatorMale.push({
							name: res.data[i].rangeName,
							max: res.data[i].maxMale
						});
						//radarChartData.indicatorFemale.push({
						//name:res.data[i].rangeName,
						//max:res.data[i].maxFemale
						//});
						//radarChartData.indicatorOther.push({
						//name:res.data[i].rangeName,
						//max:res.data[i].maxOther
						//});
					}
					// let chartSet = function () {
					// 	if (chart2) {
					// 		console.log(chart2)
					// 		chart2.setOption(initOption2())
					// 		console.log('set chart')
					// 	} else {
					// 		setTimeout(() => {
					// 			console.log("chart is null")
					// 			chartSet();
					// 		}, 500)
					// 	}
					// };
					// chartSet();
				}
				wx.hideLoading();
			},
			fail: error => {
				wx.hideLoading();
			}
		})
	},
	getRadarData1: function (e) {
		util.ajax({
			url: "data-analysis/api/general/member/ageStatistics",
			method: "POST",
			success: res => {
				if (res.success) {
					//radarChartData.maleCount = [];
					radarChartData.famaleCount = [];
					//radarChartData.otherCount = [];
					//radarChartData.indicatorMale = [];
					radarChartData.indicatorFemale = [];
					//radarChartData.indicatorOther = [];
					for (let i = 0; i < res.data.length; i++) {
						//radarChartData.maleCount.push(res.data[i].maleCount);
						radarChartData.famaleCount.push(res.data[i].femaleCount);
						//radarChartData.otherCount.push(res.data[i].otherCount);
						//radarChartData.indicatorMale.push({
						//name:res.data[i].rangeName,
						//max:res.data[i].maxMale
						//});
						radarChartData.indicatorFemale.push({
							name: res.data[i].rangeName,
							max: res.data[i].maxFemale
						});
						//radarChartData.indicatorOther.push({
						//name:res.data[i].rangeName,
						//max:res.data[i].maxOther
						//});
					}
					// let chartSet = function () {
					// 	if (chart3) {
					// 		console.log(chart3)
					// 		chart3.setOption(initOption3())
					// 		console.log('set chart')
					// 	} else {
					// 		setTimeout(() => {
					// 			console.log("chart is null")
					// 			chartSet();
					// 		}, 500)
					// 	}
					// };
					// chartSet();
				}
				wx.hideLoading();
			},
			fail: error => {
				wx.hideLoading();
			}
		})
	},
	getRadarData2: function (e) {
		util.ajax({
			url: "data-analysis/api/general/member/ageStatistics",
			method: "POST",
			success: res => {
				if (res.success) {
					//radarChartData.maleCount = [];
					//radarChartData.famaleCount = [];
					radarChartData.otherCount = [];
					//radarChartData.indicatorMale = [];
					//radarChartData.indicatorFemale = [];
					radarChartData.indicatorOther = [];
					for (let i = 0; i < res.data.length; i++) {
						//radarChartData.maleCount.push(res.data[i].maleCount);
						//radarChartData.famaleCount.push(res.data[i].femaleCount);
						radarChartData.otherCount.push(res.data[i].otherCount);
						//radarChartData.indicatorMale.push({
						//name:res.data[i].rangeName,
						//max:res.data[i].maxMale
						//});
						//radarChartData.indicatorFemale.push({
						//name:res.data[i].rangeName,
						//max:res.data[i].maxFemale
						//});
						radarChartData.indicatorOther.push({
							name: res.data[i].rangeName,
							max: res.data[i].maxOther
						});
					}
					// let chartSet = function () {
					// 	if (chart4) {
					// 		console.log(chart4)
					// 		chart4.setOption(initOption4())
					// 		console.log('set chart')
					// 	} else {
					// 		setTimeout(() => {
					// 			console.log("chart is null")
					// 			chartSet();
					// 		}, 500)
					// 	}
					// };
					// chartSet();
				}
				wx.hideLoading();
			},
			fail: error => {
				wx.hideLoading();
			}
		})
	},
	getData1: function (e) {
		util.ajax({
			url: "data-analysis/api/general/member/score",
			method: "POST",
			success: res => {
				if (res.success) {
					this.setData({
						totalScore: res.data.totalScore
					})
				}
				wx.hideLoading();
			},
			fail: error => {
				wx.hideLoading();
			}
		})
	},
	getCouponData: function (e) {
		util.ajax({
			url: "data-analysis/api/general/member/coupon",
			method: "POST",
			success: res => {
				if (res.success) {
					chartData.couponGivenCount = res.data.couponGivenCount
					chartData.couponGainRatio = res.data.couponGainRatio / 100;
					chartData.couponUsedRatio = res.data.couponUsedRatio / 100;
					this.setData({
						GainCount: res.data.couponGainCount,
						GainRatio: res.data.couponGainRatio,
						GivenCount: res.data.couponGivenCount,
						UsedCount: res.data.couponUsedCount,
						UsedRatio: res.data.couponUsedRatio
					})
				}
				// let chartSet = function () {
				// 	if (chart5) {
				// 		console.log(chart5)
				// 		chart5.setOption(initOption5())
				// 		console.log('set chart')
				// 	} else {
				// 		setTimeout(() => {
				// 			console.log("chart is null")
				// 			chartSet();
				// 		}, 500)
				// 	}
				// }
				// chartSet();
				wx.hideLoading();
			},
			fail: error => {
				wx.hideLoading();
			}
		})
	},
	initChart() {
		let chartSet = function () {
			if (chart) {
				console.log(chart)
				chart.setOption(initOption())
				console.log('set chart')
			} else {
				setTimeout(() => {
					console.log("chart is null")
					chartSet();
				}, 500)
			}
		};
		chartSet();
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
	handleclickTop5(e) {
		let id = e.target.id;
		console.log(id)
		if (id == 'first5') {
			this.setData({
				top5: 'first5'
			})

		}
		if (id == 'last5') {
			this.setData({
				top5: 'last5'
			})
		}

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
		chart2 = null;
		chart3 = null;
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