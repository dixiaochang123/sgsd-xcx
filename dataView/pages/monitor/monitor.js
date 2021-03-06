// pages/monitor/monitor.js
import * as echarts from '../../../ec-canvas/echarts';
const util = require('../../../utils/util');
const app = getApp();
let yearFit = app.globalData.yearFit-1
//曲线图
var chart = null;
//柱状图
var chart1 = null;
var chart2 = null;
var chart3 = null;
var chart4 = null;
var chart5 = null;
var chart6 = null;
var chart7 = null;
let pieChartData = {
	legendData: [],
	seriesData: [],
	totalValue: 0,
}
let seriesData = {
	data1:[120, 180, 150],
	data2:[120, 180, 150],
	data3:[120, 180, 150],
}
let seriesData1 = {
	data1:[120, 180, 150,100],
	data2:[120, 180, 150,100],
	data3:[120, 180, 150,100],
}
let lineChartData={
	seriesData:[],
	xData:[]
}

function initOptions() {
	return {
		title: {
			text: pieChartData.totalValue,
			subtext: '客流',
			left: 'center',
			right: 'center',
			top: 142,
			textStyle: {
				fontSize: 16,
				color: '#e5004f'
			},
			subtextStyle: {
				color: '#3f3d60'
			},
itemGap: 5,
		},
		legend: {
			left: 'center',
			bottom: 0,
			itemWidth: 14,
			data: pieChartData.legendData,
			textStyle: {
				color: '#3f3d60',
				fontSize: 10
			}
		},
		// color: ['#F3961C', '#F25C5D', '#907AFF', '#0ECEFF', '#0566E8', '#32CD32'],
		series: [{
			name: '客流占比',
			type: 'pie',
			radius: ['30%', '50%'],
			center: ['50%', '50%'],
			label: {
				normal: {
					show: true,
					position: 'outside',
					formatter: '{d}%',
					borderRadius: 20,
					
overflow: 'none' ,
					
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

function initOptions1(xAxisdata) {
	return {
		grid: {
			left: 70,
			right: 100,
			top:40
		},
		xAxis: {
			type: 'category',
			data: xAxisdata||['本周', '上周', yearFit+'年同期'],
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				interval: 0
			},
			splitLine:{
				show: false
			}
		},
		yAxis: {
			type: 'value',
			splitLine:{
				show: false
			},
		},
		series: [{
			data: seriesData.data1,
			label: {
				show: true,
				position: 'top',
				valueAnimation: true
			},
			type: 'bar',
			barWidth: 40,
			itemStyle: {
				borderRadius: 5,
				borderColor: 'transparent',
				borderWidth: 3,
				color: '#bdc3dd',
				shadowColor: '#8a8895',
				shadowBlur: 3,
				shadowOffsetX: -1 ,
				shadowOffsetY: -2 ,
				
			},
			showBackground: true,
			emphasis:{
				label:{
					position: 'top',
					show: true,
					color:"#e5004f"
				},
				itemStyle:{
					color:"#e5004f"
				}
			},
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
			}
		}]
	}
}

function initOptions2(xAxisdata) {
	return {
		grid: {
			left: 70,
			right: 100,
			top:40
		},
		xAxis: {
			type: 'category',
			data: xAxisdata||['本月', '上月', yearFit+'年同期'],
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
			splitLine:{
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
			barWidth: 40,
			itemStyle: {
				borderRadius: 5,
				borderColor: 'transparent',
				borderWidth: 3,
				color: '#bdc3dd',
				shadowColor: '#8a8895',
				shadowBlur: 3,
				shadowOffsetX: -1 ,
				shadowOffsetY: -2 ,
				
			},
			showBackground: true,
			emphasis:{
				label:{
					position: 'top',
					show: true,
					color:"#e5004f"
				},
				itemStyle:{
					color:"#e5004f"
				}
			},
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
			}
		}]
	}
}

function initOptions3(xAxisdata) {
	return {
		grid: {
			left: 70,
			right: 100,
			top:40
		},
		xAxis: {
			type: 'category',
			data: xAxisdata||['本年', (yearFit)+'年', (yearFit-1)+'年'],
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
			splitLine:{
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
			barWidth: 40,
			itemStyle: {
				borderRadius: 5,
				borderColor: 'transparent',
				borderWidth: 3,
				color: '#bdc3dd',
				shadowColor: '#8a8895',
				shadowBlur: 3,
				shadowOffsetX: -1 ,
				shadowOffsetY: -2 ,
				
			},
			showBackground: true,
			emphasis:{
				label:{
					position: 'top',
					show: true,
					color:"#e5004f"
				},
				itemStyle:{
					color:"#e5004f"
				}
			},
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
			}
		}]
	}
}
function initOptions5(xAxisdata,title) {
	return {
		grid: {
			left: 70,
			right: 20,
			top:40
		},
		title: {
			show:true,
			text:title,
			right: 22,
			top:5,
			textStyle:{
				fontWeight:400,
				fontSize:12,
				// color:'#000'
			}
		},
		xAxis: {
			type: 'category',
			data: xAxisdata||['本周', '上周', yearFit+'年同期'],
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				interval: 0
			},
			splitLine:{
				show: false
			}
		},
		yAxis: {
			type: 'value',
			splitLine:{
				show: false
			},
		},
		series: [{
			data: seriesData1.data1,
			label: {
				show: true,
				position: 'top',
				valueAnimation: true
			},
			type: 'bar',
			barWidth: 40,
			itemStyle: {
				borderRadius: 5,
				borderColor: 'transparent',
				borderWidth: 3,
				color: '#bdc3dd',
				shadowColor: '#8a8895',
				shadowBlur: 3,
				shadowOffsetX: -1 ,
				shadowOffsetY: -2 ,
				
			},
			showBackground: true,
			emphasis:{
				label:{
					position: 'top',
					show: true,
					color:"#e5004f"
				},
				itemStyle:{
					color:"#e5004f"
				}
			},
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
			}
		}]
	}
}

function initOptions6(xAxisdata,title) {
	return {
		grid: {
			left: 70,
			right: 20,
			top:40
		},
		title: {
			show:true,
			text:title,
			right: 22,
			top:5,
			textStyle:{
				fontWeight:400,
				fontSize:12,
				// color:'#000'
			}
		},
		xAxis: {
			type: 'category',
			data: xAxisdata||['本月', '上月', yearFit+'年同期'],
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
			splitLine:{
				show: false
			}
		},
		series: [{
			data: seriesData1.data2,
			label: {
				show: true,
				position: 'top',
				valueAnimation: true
			},
			type: 'bar',
			barWidth: 40,
			itemStyle: {
				borderRadius: 5,
				borderColor: 'transparent',
				borderWidth: 3,
				color: '#bdc3dd',
				shadowColor: '#8a8895',
				shadowBlur: 3,
				shadowOffsetX: -1 ,
				shadowOffsetY: -2 ,
				
			},
			showBackground: true,
			emphasis:{
				label:{
					position: 'top',
					show: true,
					color:"#e5004f"
				},
				itemStyle:{
					color:"#e5004f"
				}
			},
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
			}
		}]
	}
}

function initOptions7(xAxisdata,title) {
	return {
		grid: {
			left: 70,
			right: 100,
			top:40
		},
		title: {
			show:true,
			text:title,
			right: 105,
			top:5,
			textStyle:{
				fontWeight:400,
				fontSize:12,
				// color:'#000'
			}
		},
		xAxis: {
			type: 'category',
			data: xAxisdata||['本年', '20年', (yearFit-1)+'年'],
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
			splitLine:{
				show: false
			}
		},
		series: [{
			data: seriesData1.data3,
			label: {
				show: true,
				position: 'top',
				valueAnimation: true
			},
			type: 'bar',
			barWidth: 40,
			itemStyle: {
				borderRadius: 5,
				borderColor: 'transparent',
				borderWidth: 3,
				color: '#bdc3dd',
				shadowColor: '#8a8895',
				shadowBlur: 3,
				shadowOffsetX: -1 ,
				shadowOffsetY: -2 ,
				
			},
			showBackground: true,
			emphasis:{
				label:{
					position: 'top',
					show: true,
					color:"#e5004f"
				},
				itemStyle:{
					color:"#e5004f"
				}
			},
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
			}
		}]
	}
}
function initOption4(){
	return {
		grid: {
			left: 10,
			right: 30,
			top: 20,
			bottom: '10%',
			containLabel: false
		},
		// tooltip: {
		// 	show: true,
		// 	trigger: 'axis',
		// 	// formatter
		// },
		dataZoom: [{
			type: "inside",
			startValue:lineChartData.xData.length - 8,
			endValue: lineChartData.xData.length - 1,
			zoomLock: true
		}],
		xAxis: {
			type: 'category',
			axisLine:{
				show:false
			},
			axisTick:{
				show:false
			},
			axisLabel:{
				interval:0
			},
			data: lineChartData.xData
		},
		yAxis: {
			type: 'value',
			show:false,
			
			offset: 0 ,
			splitLine:{
				show: false
			}
		},
		series: [{
			name: '',
			type: 'bar',
			barWidth:30,
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
				shadowOffsetX: -1 ,
				shadowOffsetY: -2 ,
				
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
			data: lineChartData.seriesData,
			emphasis:{
				label:{
					position: 'top',
					show: true,
					color:"#e5004f"
				},
				itemStyle:{
					color:"#e5004f"
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
		imgSrc:'',//饼图替代图片src
		imgSrc1:'',
		imgSrc2:'',
		imgSrc3:'',
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
		num1: 1,
		ec4: {
			onInit: (canvas, width, height, dpr) =>{
				chart4 = echarts.init(canvas, null, {
					width: width,
					height: height,
					devicePixelRatio: dpr // new
			});
			canvas.setChart(chart4);
			return chart4;
		  }
		},
		ec5: {
			onInit: (canvas, width, height, dpr) =>{
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
			onInit: (canvas, width, height, dpr) =>{
				chart6 = echarts.init(canvas, null, {
					width: width,
					height: height,
					devicePixelRatio: dpr // new
			});
			canvas.setChart(chart6);
			return chart6;
		  }
		},
		ec7: {
			onInit: (canvas, width, height, dpr) =>{
				chart7 = echarts.init(canvas, null, {
					width: width,
					height: height,
					devicePixelRatio: dpr // new
			});
			canvas.setChart(chart7);
			return chart7;
		  }
		},
		charts4Isshow:false,
		num: 0,
		type: 2,
		currentPassengerFlow: 0,
		onSitePassengerFlow:0,
		//三元巷当日客流
		sanyuanLaneFlow:0,
		hourPassengerFlow: 0,
		dayPassengerFlow: 0,
		weekPassengerFlow: 0,
		weekPassengerFlow1: 0,
		monthPassengerFlow: 0,
		monthPassengerFlow1: 0,
		yearPassengerFlow: 0,
		yearPassengerFlow1: 0,
		flowList: [],
		zhb:'',
		ztb:'',
		ztbisadd:true,
		zhbisadd:true,
		yhb:'',
		ytb:'',
		ytbisadd:true,
		yhbisadd:true,
		nhb:'',
		ntb:'',
		ntbisadd:true,
		nhbisadd:true,
		totalMember:'',

		zhb1:'',
		ztb1:'',
		ztbisadd1:true,
		zhbisadd1:true,
		yhb1:'',
		ytb1:'',
		ytbisadd1:true,
		yhbisadd1:true,
		nhb1:'',
		ntb1:'',
		ntbisadd1:true,
		nhbisadd1:true,
		num11:'',
		num22:'',
		num33:'',
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

	//将当前canvas画成图片 替代原先canvas
  handleCanvarToImg() {
		let that = this;
		console.log('this.selectComponent', this.selectComponent('#mychart-dom-bar'))
    this.selectComponent('#mychart-dom-bar').canvasToTempFilePath({
      success: function (res) {
				// console.log('imgSrc',res.tempFilePath);
        that.setData({
          imgSrc: res.tempFilePath,
        });

      },
      fail:function(err){
        console.log('canvasErr',err)
      }
    }, this);
    this.selectComponent('#mychart-dom-bar1').canvasToTempFilePath({
      success: function (res) {
				// console.log('imgSrc1',res.tempFilePath);
        that.setData({
          imgSrc1: res.tempFilePath,
        });

      },
      fail:function(err){
        console.log('canvasErr',err)
      }
    }, this);
    this.selectComponent('#mychart-dom-bar2').canvasToTempFilePath({
      success: function (res) {
				// console.log('imgSrc2',res.tempFilePath);
        that.setData({
          imgSrc2: res.tempFilePath,
        });

      },
      fail:function(err){
        console.log('canvasErr',err)
      }
    }, this);
    this.selectComponent('#mychart-dom-bar3').canvasToTempFilePath({
      success: function (res) {
				// console.log('imgSrc3',res.tempFilePath);
        that.setData({
          imgSrc3: res.tempFilePath,
        });

      },
      fail:function(err){
        console.log('canvasErr',err)
      }
    }, this);
  },

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		var that = this;
		that.getData();
		that.getList();
		that.getLineData();
		that.passengerDataFromTheSameYear(1);
		that.passengerDataFromTheSameYear(2);
		that.passengerDataFromTheSameYear(3);

		that.passengerDataFromTheSameYear1(1);
		that.passengerDataFromTheSameYear1(2);
		that.passengerDataFromTheSameYear1(3);
	},
	passengerDataFromTheSameYear: function (num) {
		console.log(num)
		let that = this;
		wx.showLoading();
		util.ajax({
			url: "data-analysis/api/passengerFlow/PassengerDataFromTheSameYear?type="+num,
			method: "POST",
			success: res => {
				console.log(res)
				if (res.success) {
					console.log(4444444444444444,res.data)
					// 环比增长率=（本期数-上期数）/上期数×100%
						// 同比增长率=（本期数-去年同期数）/去年同期数×100%
						if(res.data.thisPeriodOfData==null) {
							res.data.thisPeriodOfData = 0
						}
					let hb = (((res.data.byData - res.data.dataYearOnYear)/ res.data.byData) * 100).toFixed(2);
					let tb = (((res.data.byData - res.data.thisPeriodOfData)/ res.data.thisPeriodOfData) * 100).toFixed(2);
					if(num==1) {

						seriesData.data1 = Object.values(res.data).filter(item=>typeof(item)=="number")
						this.setData({
							ztb:res.data.coRate.search("-") != -1?res.data.coRate.substr(1):res.data.coRate,
							zhb:res.data.ringRatio.search("-") != -1?res.data.ringRatio.substr(1):res.data.ringRatio,
							ztbisadd:res.data.coRate.search("-") != -1?false:true,
							zhbisadd:res.data.ringRatio.search("-") != -1?false:true,
						})
					}
					if(num==2) {

						seriesData.data2 = Object.values(res.data).filter(item=>typeof(item)=="number") 
						this.setData({
							// yhb:res.data.ringRatio,
							// ytb:res.data.coRate,
							ytb:res.data.coRate.search("-") != -1?res.data.coRate.substr(1):res.data.coRate,
							yhb:res.data.ringRatio.search("-") != -1?res.data.ringRatio.substr(1):res.data.ringRatio,
							ytbisadd:res.data.coRate.search("-") != -1?false:true,
							yhbisadd:res.data.ringRatio.search("-") != -1?false:true,
						})
					}
					if(num==3) {

						seriesData.data3 = Object.values(res.data).filter(item=>typeof(item)=="number") 
						console.log(res.data.ringRatio)
						console.log(res.data.ringRatio.search("-") != -1)
						console.log(res.data.ringRatio.substr(1))
						this.setData({
							// nhb:res.data.ringRatio,
							// ntb:res.data.coRate,
							// ntb:res.data.coRate.search("-") != -1?res.data.coRate.substr(1):res.data.coRate,
							ntb:res.data.ringRatio.search("-") != -1?res.data.ringRatio.substr(1):res.data.ringRatio,
							// ntb:res.data.ringRatio,
							ntbisadd:res.data.coRate.search("-") != -1?false:true,
							nhbisadd:res.data.ringRatio.search("-") != -1?false:true,
						})
					}
					let chartSet = function () {
						if (chart1) {
							chart1.setOption(initOptions1())
							chart2.setOption(initOptions2())
							chart3.setOption(initOptions3())
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
					setTimeout(()=>{
						that.handleCanvarToImg();
					},2000)
				}
			},
			fail: error => {
				wx.hideLoading();
			}
		})
	},
	passengerDataFromTheSameYear1: function (num) {
		console.log(num)
		let that = this;
		wx.showLoading();
		util.ajax({
			url: "data-analysis/api/passengerFlow/passengerFlowIndicators?type="+num,
			method: "POST",
			success: res => {
				console.log(res)
				if (res.success) {
					// res.data.passengerFlowIndex = 1
					// res.data.thisPeriodOfData = 2
					// res.data.byData = 3
					// res.data.dataYearOnYear = 4
					console.log(11, Object.values(res.data),Object.keys(res.data))
					// 环比增长率=（本期数-上期数）/上期数×100%
						// 同比增长率=（本期数-去年同期数）/去年同期数×100%
						if(res.data.thisPeriodOfData==null) {
							res.data.thisPeriodOfData = 0
						}
					if(num==1) {

						seriesData1.data1 = Object.values(res.data).filter(item=>typeof(item)=="number");
						this.setData({
							ztb1:res.data.coRate.search("-") != -1?res.data.coRate.substr(1):res.data.coRate,
							zhb1:res.data.ringRatio.search("-") != -1?res.data.ringRatio.substr(1):res.data.ringRatio,
							ztbisadd1:res.data.coRate.search("-") != -1?false:true,
							zhbisadd1:res.data.ringRatio.search("-") != -1?false:true,
							num11:res.data.indexRate
						})
					}
					if(num==2) {

						seriesData1.data2 = Object.values(res.data).filter(item=>typeof(item)=="number") 
						this.setData({
							// yhb:res.data.ringRatio,
							// ytb:res.data.coRate,
							ytb1:res.data.coRate.search("-") != -1?res.data.coRate.substr(1):res.data.coRate,
							yhb1:res.data.ringRatio.search("-") != -1?res.data.ringRatio.substr(1):res.data.ringRatio,
							ytbisadd1:res.data.coRate.search("-") != -1?false:true,
							yhbisadd1:res.data.ringRatio.search("-") != -1?false:true,
							num22:res.data.indexRate
						})
					}
					if(num==3) {

						seriesData1.data3 = Object.values(res.data).filter(item=>typeof(item)=="number");
						seriesData1.data3.splice(1,1);
						console.log(res.data,seriesData1.data3)
						this.setData({
							ntb1:res.data.coRate,
							ntbisadd1:res.data.coRate.search("-") != -1?false:true,
							nhbisadd1:res.data.ringRatio.search("-") != -1?false:true,
							num33:res.data.indexRate
						})
					}
					let chartSet = function () {
						if (chart5) {
							chart5.setOption(initOptions5(['本周','上周','去年同期','本周指标'],this.data.num11))
							chart6.setOption(initOptions6(['本月','上月','去年同期','本月指标'],this.data.num22))
							chart7.setOption(initOptions7(['本年','上年','本年指标'],this.data.num33))
							console.log('set chart')
							
						} else {
							setTimeout(() => {
								console.log("chart is null")
								chartSet();
							}, 500)
						}
					}.bind(this)
					chartSet();
					wx.hideLoading();
					setTimeout(()=>{
						that.handleCanvarToImg();
					},2000)
				}
			},
			fail: error => {
				wx.hideLoading();
			}
		})
	},
	getData: function (e) {
		util.ajax({
			url: "data-analysis/api/passengerFlow/basicPassengerFlowData",
			method: "POST",
			success: res => {
				if (res.success) {
					this.setData({
						currentPassengerFlow: res.data.currentPassengerFlow,
						hourPassengerFlow: res.data.hourPassengerFlow,
						dayPassengerFlow: res.data.dayPassengerFlow,
						weekPassengerFlow: res.data.weekPassengerFlow>9999?(res.data.weekPassengerFlow/10000).toFixed(2):res.data.weekPassengerFlow,
					  onSitePassengerFlow: res.data.onSitePassengerFlow,
					  sanyuanLaneFlow:res.data.sanyuanLaneFlow,
						weekPassengerFlow1: res.data.weekPassengerFlow,
						monthPassengerFlow: res.data.monthPassengerFlow>9999?(res.data.monthPassengerFlow/10000).toFixed(2):res.data.monthPassengerFlow,
						monthPassengerFlow1: res.data.monthPassengerFlow,
						yearPassengerFlow: res.data.yearPassengerFlow>9999?(res.data.yearPassengerFlow/10000).toFixed(2):res.data.yearPassengerFlow,
						yearPassengerFlow1: res.data.yearPassengerFlow,
					})
				}
				wx.hideLoading();
			},
			fail: error => {
				wx.hideLoading();
			}
		})
	},
	getList: function (e) {
		wx.showLoading();
		let a = parseInt(this.data.num)
		switch (a) {
			case 0:
				this.type = 2
				break;
			case 1:
				this.type = 3
				break;
			case 2:
				this.type = 4
				break;
			case 3:
				this.type = 5
				break;
			default:
				break;
		}
		let that = this;
		util.ajax({
			url: "data-analysis/api/passengerFlow/percentageDataOfEachChannel?type=" + that.type,
			method: "POST",
			// data:JSON.stringify({
			// 	type:that.type
			// }),
			success: res => {
				if (res.success) {
					pieChartData.seriesData = [];
					pieChartData.legendData = [];
					pieChartData.totalValue = 0;
					res.data.sort((a, b) => {
						return b.currentPassengerFlow - a.currentPassengerFlow
					})
					// let arr = 0;
					// res.data.map(item=>{
					// 	arr+=item.currentPassengerFlow
					// })
					let infos = res.data;
					let arr = 0;
					for (let i = 0; i < infos.length; i++) {
						const element = infos[i];
						arr+=element.currentPassengerFlow;
						
					}
					let info = util.sortOther(res.data, "currentPassengerFlow", "channelName");
					info.map(item=>{
						item['proportion'] = ((item.currentPassengerFlow/arr)*100).toFixed(2) +'%'
					})
					console.log('all',arr,'info',info)
					for (let i = 0; i < info.length; i++) {
						pieChartData.totalValue += info[i].currentPassengerFlow
						pieChartData.legendData.push(info[i].channelName);
						pieChartData.seriesData.push({
							value: info[i].currentPassengerFlow,
							name: info[i].channelName,
							proportion:info[i].proportion,
						})
					}
					this.setData({
						flowList: info
					})
				}
				let chartSet = function () {
					if (chart) {
						console.log(chart)
						chart.setOption(initOptions())
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
				setTimeout(()=>{
					that.handleCanvarToImg();
				},1500)
			},
			fail: error => {
				wx.hideLoading();
			}
		})
	},
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
		that.getList()
	},
	chartsClick1: function(e){
		var that = this;
		var num = e.currentTarget.dataset.num;
		if (that.data.num1 == num) {return false} 
		else {
			that.setData({num1: e.currentTarget.dataset.num})
		}
		if(num == 1){
			that.getLineData();
		}
		else if(num == 2){
			that.getLineData1();
		}
		that.setData({
			num1: e.currentTarget.dataset.num
		})
	},
	getLineData: function(e){
		util.ajax({
			url:"data-analysis/api/passengerFlow/passengerFlowTrendMonthOryear?type=1",
			method:"POST",
			success:res=>{
				if(res.success){
					lineChartData.xData = [];
					lineChartData.seriesData = [];
					let totalMember = 0
					for(let i = 0; i <res.data.length;i++){
						let date = res.data[i].sdate.substring(8,10)
						if(date.substr(0, 1)=='0') {
							date = date.substr(1, 2) + '日'
						} else {
							date = date.substr(0, 2) + '日'
						}
						lineChartData.xData.push(date);
						lineChartData.seriesData.push(res.data[i].count);
						totalMember+=res.data[i].count
					}
					this.setData({
						totalMember:totalMember>9999?(totalMember/10000).toFixed(2):totalMember,
					})
					console.log(999,res.data,this.data.ec4)
					if(res.data.length>0) {
						this.setData({
							charts4Isshow:true
						})
					} else {
						this.setData({
							charts4Isshow:false
						})
					}
					let chartSet = function (){
						if(chart4){
							chart4.setOption(initOption4())
							console.log('set chart')
						}else{
							setTimeout(()=>{
								console.log("chart is null")
								chartSet();
							},500)
						}
					}
					chartSet();
				}
				wx.hideLoading();
			},
			fail:error=>{
				wx.hideLoading();
			}
		})			
	},
	getLineData1: function(e){
		util.ajax({
			url:"data-analysis/api/passengerFlow/passengerFlowTrendMonthOryear?type=2",
			method:"POST",
			success:res=>{
				if(res.success){
					lineChartData.xData = [];
					lineChartData.seriesData = [];
					let totalMember=0;
					for(let i = 0; i <res.data.length;i++){
						let date = res.data[i].sdate.substring(5,8)
						if(date.substr(0, 1)=='0') {
							date = date.substr(1, 2) + '月'
						} else {
							date = date.substr(0, 2) + '月'
						}
						lineChartData.xData.push(date);
						lineChartData.seriesData.push(res.data[i].count);
						totalMember+=res.data[i].count
					}
					this.setData({
						totalMember:totalMember>9999?(totalMember/10000).toFixed(2):totalMember,
					})
				}
				let chartSet = function (){
					if(chart4){
						chart4.setOption(initOption4())
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
	onReady: function () {
		
	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {
		var that = this;
		that.onLoad();
	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {
		var that = this;
		that.onLoad();
		that.setData({
			num1:1
		})
	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {
		var that = this;
		chart = null;
		chart1 = null;
		chart2 = null;
		chart3 = null;
		chart4 = null;
		that.setData({
			num1:1
		})
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