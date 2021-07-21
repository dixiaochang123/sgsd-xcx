// pages/indexinfo1/indexinfo1.js
import * as echarts from '../../ec-canvas/echarts';
const util = require('../../utils/util');
const app = getApp();
//曲线图
var chart = null;
//饼状图
var chart1 = null;
var chart2 = null;
var chart3 = null;
var memberSalesVolume = 0;
var nonMemberSalesVolume = 0;
let sendData =  JSON.stringify({
	startTime: util.getNowDate(new Date(),'-')+" 00:00:00",
	endTime: util.formatTime(new Date()),
	order: "desc",
	// limit: 5,
	groupType: 2
});
let lineChartData = {
	seriesData:[],
	xData:[]
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

function initOption() {
	return {
		grid: {
			left: '5%',
			right: '5%',
			top: '10%',
			bottom: '5%',
			containLabel: true
		},
		tooltip: {
			show: true,
			trigger: 'axis'
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
				symbol:'circle',
				symbolSize:20,
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
		title: {
			text: pieChartData1.totalValue.toFixed(2) + '元',
			subtext: '销售额',
			left: 'center',
			right: 'center',
			top: 'center',
			bottom: 'center',
			textStyle: {
				fontSize: 14,
				color: '#FFDB32'
			},
			subtextStyle: {
				color: '#FFF'
			}
		},
		legend: {
			left: 'center',
			bottom: '0',
			itemWidth: 14,
			data: pieChartData1.floorData,
			textStyle: {
				color: '#fff',
				fontSize: 10
			}
		},
		tooltip: {
			trigger: 'item',
			formatter: '{b}: {d}%'
		},
		// color: [ '#0ECEFF', '#0566E8', '#F25C5D', '#F3961C', '#907AFF'],
		series: [{
			name: '楼层销售额',
			type: 'pie',
			radius: ['40%', '60%'],
			center: ['50%', '50%'],
			label: {
				normal: {
					show: true,
					position: 'outside',
					formatter: '{d}%'
				},
				emphasis: {
					show: true,
					textStyle: {
						fontSize: '12',
						fontWeight: 'bold'
					}
				}
			},
			data: pieChartData1.seriesData,
			itemStyle: {
				normal: {
					borderWidth: 4, // 间距的宽度
					borderColor: '#293c4b' //背景色
				}
			}
		}]
	};
}
function initOption2() {
	return {
		title: {
			text: pieChartData2.totalValue.toFixed(2) + '元',
			subtext: '销售额',
			left: 'center',
			top: '30%',
			textStyle: {
				fontSize: 10,
				color: '#FFDB32'
			},
			subtextStyle: {
				color: '#FFF'
			}
		},
		legend: {
			left: 'center',
			bottom: '0',
			itemWidth: 14,
			data: pieChartData2.formatData,
			textStyle: {
				color: '#fff',
				fontSize: 10
			}
		},
		tooltip: {
			trigger: 'item',
			formatter: '{b}: {d}%'
		},
		// color: ['#35DFFF', '#FF7D4F','#288EFF', '#FF565D', '#5F45FF', '#B8E61C', '#862fb3'],
		series: [{
			name: '业态销售额',
			type: 'pie',
			radius: ['30%', '50%'],
			center: ['50%', '35%'],
			startAngle:270, //起始角度
			label: {
				normal: {
					show: true,
					position: 'outside',
					formatter: '{d}%'
				},
				emphasis: {
					show: true,
					textStyle: {
						fontSize: '12',
						fontWeight: 'bold'
					}
				}
			},
			data: pieChartData2.seriesData,
			itemStyle: {
				normal: {
					borderWidth: 4, // 间距的宽度
					borderColor: '#293c4b' //背景色
				}
			}
		}]
	};
}
function initOption3() {
	var resultData = [
		{ value: nonMemberSalesVolume, name: "非会员消费" },
		{ value: memberSalesVolume, name: "会员消费" },
	];
	return {
		tooltip: {
			trigger: 'item',
			formatter: '{b}\n{c} ({d}%)'
		},
		legend: {
			show: false,
		},

		color: ['#35DFFF', '#FF7D4F','#288EFF', '#FF565D', '#5F45FF', '#B8E61C', '#862fb3'],
		series: [
			{
				name: "",
				type: "pie",
				radius: ["50%", "70%"],
				data: resultData,
				label:{
					show:false,
				},
			},
			{
				name: "",
				type: "pie",
				radius: [0, "70%"],
				data: [
					{ value: nonMemberSalesVolume, 
						name: '非会员消费' ,
						itemStyle:{
						normal:{
							opacity : 0
						},
						emphasis:{
							opacity : 1
						}
					}},
					{ value: memberSalesVolume,
						name: "会员消费",
						itemStyle:{
						normal:{
							opacity : 0
						},
						emphasis:{
							opacity : 1
						}
					}
					},
				],
				label:{
					textStyle:{
						color:'#FFF'
					},
					formatter: '{b} \n({d}%)\n{c}'
				},
				labelLine:{
					lineStyle:{
						color:'#FFF'
					},
					showAbove:true
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
    ec: {
			onInit: (canvas,width,height,dpr) => {
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
			onInit: (canvas,width,height,dpr) => {
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
			onInit: (canvas,width,height,dpr) => {
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
			onInit: (canvas,width,height,dpr) => {
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
    salesList:[]
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
  onLoad: function(options) {
		this.drawLeasePie();
		this.getData();
		this.getFloorList();
		this.getFormatList();
		this.getLineData();
    this.getPieChartData();
    this.getList();
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
	getData: function(e){
		util.ajax({
			url:"data-analysis/api/sg/salesDataForThisMonthThisWeekAndToday",
			method:"POST",
			success:res=>{
				if(res.success){
					let data = res.data;
					this.setData({
						todaySales: data.todaySales,
						weekSales: data.weekSales,
						monthSales: data.monthSales,
						customerPrice: data.customerPrice
					})
				}
				wx.hideLoading();
			},
			fail:error=>{
				wx.hideLoading();
			}
		})			
	},
	getFloorList: function(e){
		util.ajax({
			url: "data-analysis/api/sg/floorSalesAnalysis",
			method: "POST",
			data: sendData,
			success:res=>{
				if(res.success){
					pieChartData1.seriesData = [];
					pieChartData1.floorData = [];
					pieChartData1.totalValue = 0;
					for(let i = 0; i <res.data.length;i++){
						pieChartData1.totalValue += res.data[i].sales
						pieChartData1.floorData.push(res.data[i].floor.substring(4,6));
						pieChartData1.seriesData.push({            
							value: res.data[i].sales,
							name: res.data[i].floor.substring(4,6)
						})
					}
					this.setData({
						floorList: res.data
					})
				}
				let chartSet = function (){
					if(chart1){
						chart1.setOption(initOption1())
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
	getFormatList: function(e){
		util.ajax({
			url: "data-analysis/api/sg/formatSalesAnalysis",
			method: "POST",
			data: sendData,
			success:res=>{
				if(res.success){
					pieChartData2.seriesData = [];
					pieChartData2.formatData = [];
					pieChartData2.totalValue = 0;
					res.data.sort((a , b )=>{
						return a.sales - b.sales
					})
					res.data = util.sortOther(res.data,"sales","operationType")
					for(let i = 0; i <res.data.length;i++){
						pieChartData2.totalValue += res.data[i].sales
						pieChartData2.formatData.push(res.data[i].operationType);
						pieChartData2.seriesData.push({            
							value: res.data[i].sales,
							name: res.data[i].operationType
						})
					}
					this.setData({
						formatList: res.data
					})
				}
				let chartSet = function (){
					if(chart2){
						chart2.setOption(initOption2())
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
	getLineData: function(e){
		let sendData =  JSON.stringify({
			startTime: util.getNowDate(new Date(),'-')+" 00:00:00",
			endTime: util.formatTime(new Date()),
			order: "desc",
			limit: 5,
			groupType: 1
		});
		util.ajax({
			url:"data-analysis/api/sg/businessTypeSalesAnalysis",
			method:"POST",
			data:sendData,
			success:res=>{
				if(res.success){
					lineChartData.xData = [];
					lineChartData.seriesData = [];
					for(let i = 0; i <res.data.length;i++){
						lineChartData.xData.push(res.data[i].timestr.substring(4,6));
						lineChartData.seriesData.push((res.data[i].sales/1000).toFixed(2));
					}
				}
				let chartSet = function (){
					if(chart){
						chart.setOption(initOption())
						console.log('set linechart')
					}else{
						setTimeout(()=>{
							console.log("linechart is null")
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
	getPieChartData: function(e){
		util.ajax({
			url: "data-analysis/api/sg/percentageOfMemberSales",
			method: "POST",
			data:JSON.stringify({
				startTime: util.getNowDate(new Date(),'-'),
				endTime: util.formatTime(new Date()),
			}),
			success:res=>{
				if(res.success){
					memberSalesVolume = res.data.memberSalesVolume;
					nonMemberSalesVolume = res.data.nonMemberSalesVolume;
				}
				let chartSet = function (){
					if(chart3){
						console.log(chart3)
						chart3.setOption(initOption3())
						console.log('set chart3')
					}else{
						setTimeout(()=>{
							console.log("chart3 is null")
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
	getList: function(e){
		let sendData =  JSON.stringify({
			startTime: util.getNowDate(new Date(),'-')+" 00:00:00",
			endTime: util.formatTime(new Date()),
			order: "desc",
			limit: 10,
			groupType: 2
		});
		util.ajax({
			url:"data-analysis/api/sg/cashierSystemTopStores",
			method:"POST",
			data:sendData,
			success:res=>{
				if(res.success){
					this.setData({
						salesList: res.data
					})
				}
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