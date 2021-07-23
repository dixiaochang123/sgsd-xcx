// pages/memNum/memNum.js
import * as echarts from '../../../ec-canvas/echarts';
const util = require('../../../utils/util');
const app = getApp();
//曲线图
var chart = null;
let chartData = {
	couponGivenCount: 0,
	couponGainRatio: 0,
	couponUsedRatio: 0
}
function initOption() {
	var placeHolderStyle = {
    normal: {
      color: 'rgba(124,228,245,0.2)',
		},
	};

	return {
		title: {
			text: ` `+chartData.couponGivenCount+`\n发放数量`,
			top: "center",
			left: "center",
			textStyle: {
				fontSize: 12,
				color: '#000000'
			}
		},
		tooltip: {
			show: false,
			formatter: "{a}：{d}%"
		},
		legend: {
			orient: '',
			itemGap: 12,
			left:'25%',
			top:'center',
			textStyle: {
				color: "#010101",
			},
			data: ['领取数量', '使用数量', '核销率']
		},
		series: [{
			type: 'pie',
			hoverAnimation: false,
			clockWise: false,
			radius: ['70%', '90%'],
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
				value:1-chartData.couponGainRatio,
				itemStyle: placeHolderStyle
			},
			{
				value:chartData.couponGainRatio,
			}],
		},
		{
			type: 'pie',
			clockWise: false,
			hoverAnimation: false, 
			radius: ['70%', '90%'],
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
				value: 1-chartData.couponUsedRatio,
				itemStyle: placeHolderStyle
			},
			{
				value: chartData.couponUsedRatio,
			}]
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
	};	;
}

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		ec: {
			onInit: (canvas, width, height, dpr) =>{
				chart = echarts.init(canvas, null, {
					width: width,
					height: height,
					devicePixelRatio: dpr // new
				});
				canvas.setChart(chart);
				return chart;
			}
		},
		totalScore:[],
		GainCount: [],
		GainRatio: [],
		GivenCount: [],
		UsedCount: [],
		UsedRatio: [],

		couponDischarge: '',
		couponUsage: '',
		couponReceive: '',
		conversionRate: '',
		verify: '',
		purchaseRate: '',
		refundRate: '',
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
	handleticket() {
		wx.navigateTo({
			url: '/pages/coupon/coupon'
		});
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		wx.showLoading();
		this.getData();
		this.getCouponData();
		this.getCouponData1();
	},
	getData: function(e){
		util.ajax({
			url:"data-analysis/api/general/member/score",
			method:"POST",
			success:res=>{
				if(res.success){
					this.setData({
						totalScore: res.data.totalScore >10000? (res.data.totalScore/10000).toFixed(2):res.data.totalScore
					})
				}
				wx.hideLoading();
			},
			fail:error=>{
				wx.hideLoading();
			}
		})			
	},
	getCouponData1: function(e){
		util.ajax({
			url:"data-analysis/api/general/member/allCouponStatistics",
			method:"POST",
			success:res=>{
				if(res.success){
					this.setData({
						couponDischarge: res.data.couponDischarge,
						couponUsage: res.data.couponUsage,
						couponReceive: res.data.couponReceive,
						conversionRate: res.data.conversionRate,
						verify: res.data.verify,
						purchaseRate: res.data.purchaseRate,
						refundRate: res.data.refundRate,
					})
				}

				wx.hideLoading();
			},
			fail:error=>{
				wx.hideLoading();
			}
		})

	},
	getCouponData: function(e){
		util.ajax({
			url:"data-analysis/api/general/member/coupon",
			method:"POST",
			success:res=>{
				if(res.success){
					console.log(res.data)
					chartData.couponGivenCount = res.data.couponGivenCount
					chartData.couponGainRatio = res.data.couponGainRatio/100;
					chartData.couponUsedRatio = res.data.couponUsedRatio/100;
					this.setData({
						GainCount: res.data.couponGainCount,
						GainRatio: res.data.couponGainRatio,
						GivenCount: res.data.couponGivenCount,
						UsedCount: res.data.couponUsedCount,
						UsedRatio: res.data.couponUsedRatio
					})
				}
				let chartSet = function (){
					if(chart){
						console.log(chart)
						chart.setOption(initOption())
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
	onReady: function() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function() {
	//	chart = null;
	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	}
})