// pages/memNum/memNum.js
import * as echarts from '../../../ec-canvas/echarts';
const util = require('../../../utils/util');
const app = getApp();
//曲线图
var chart = null;
var chart1 = null;
var chart2 = null;
let chartData = {
	couponGivenCount: 51201,
	couponGainRatio: 0,
	couponUsedRatio: 0
}
function initOption() {
	return {
    title: {
        subtext: '发放数量',
        text: chartData.couponGivenCount,
        textStyle: {
             color: '#333',
             fontSize: 10,
             // align: 'center'
         },
          subtextStyle: {
             fontSize: 10,
             color: ['#5a5d62']
         },
        left: 'center',
        top: 'center'
    },
    // tooltip: {
    //     trigger: 'item'
    // },
    legend: {
        orient: 'vertical',
        left: 'left',
    },
    series: [
				 {//外层
					silent: false ,
            name:'',
            hoverAnimation:false,
           type:'pie',
           startAngle:90, //起始角度
           radius: ['65%', '95%'],
           label: {
               normal: {
                   show:false    // 外层饼图的箭头指示线和指示框  不显示
               }
           },
           data:[ 
						chartData.couponGainRatio,
                chartData.couponGivenCount
               ],   // 外层饼图的数据来源
            itemStyle: {
                normal: {
                color: function(params) {
                        //自定义颜色
                        var colorList = ['#4a4d60','#aeb0c5'];
                        return colorList[params.dataIndex]
                    }
                },
                shadowColor: 'rgba(0,0,0,0.3)'
            },
            emphasis:{  //鼠标移入动态的时候显示的默认样式
            　　color:'green'
            }
        },
        {
					silent: false ,
            name: '访问来源',
            type: 'pie',
            hoverAnimation:false,
            radius: ['65%', '80%'],
            startAngle:45, //起始角度
            label: {
               normal: {
                   show:false    // 外层饼图的箭头指示线和指示框  不显示
               }
           },
            data: [
							chartData.couponUsedRatio,
                chartData.couponGivenCount,
            ],
            itemStyle: {
                normal: {
                color: function(params) {
                        //自定义颜色
                        var colorList = [ 'red', "rgba(250,250,250,0)"];
                        return colorList[params.dataIndex]
                    }
                }
            },
            emphasis:{  //鼠标移入动态的时候显示的默认样式
            　　color:'green'
            }
        }
    ]
};
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
		ec1: {
			onInit: (canvas, width, height, dpr) =>{
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
			onInit: (canvas, width, height, dpr) =>{
				chart2 = echarts.init(canvas, null, {
					width: width,
					height: height,
					devicePixelRatio: dpr // new
				});
				canvas.setChart(chart2);
				return chart2;
			}
		},
		totalScore:[],
		consumedTotalScore:[],
		GainCount: [],
		GainRatio: [],
		GivenCount: [],
		UsedCount: [],
		UsedRatio: [],

		couponDischarge: '',
		couponUsage: '',
		couponReceive: '',

		couponUsage1: '',
		couponReceive1: '',

		couponUsage2: '',
		couponReceive3: '',



		conversionRate: '',
		verify: '',
		purchaseRate: '',
		refundRate: '',

		conversionRate1: '',
		verify1: '',
		purchaseRate1: '',
		refundRate1: '',

		conversionRate2: '',
		verify2: '',
		purchaseRate2: '',
		refundRate2: '',

		activeflow:'积分来源',
		integralSources:[],
	},
	handleclickTab(event) {
		var dataval = event.target.dataset.val;
		this.setData({
			activeflow:dataval
		})
		console.log(dataval)
		switch (dataval) {
			case "积分来源":
				this.integralSource('0')
				;
			case "消耗来源":
				this.integralSource('1')
				;
		}
	},
	integralSource(type) {
		util.ajax({
			url:"data-analysis/api/general/member/integralSource?type="+type,
			method:"POST",
			success:res=>{
				if(res.success){
					console.log(res.data)
					this.setData({
						integralSources:res.data
					})
				}
				wx.hideLoading();
			},
			fail:error=>{
				wx.hideLoading();
			}
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
		// this.getCouponData();
		this.getCouponData1();
		this.getCouponData2();
		this.getCouponData3();
		this.integralSource(0);
	},
	getData: function(e){
		util.ajax({
			url:"data-analysis/api/general/member/score",
			method:"POST",
			success:res=>{
				if(res.success){
					this.setData({
						totalScore: res.data.totalScore >10000? (res.data.totalScore/10000).toFixed(2):res.data.totalScore,
						consumedTotalScore: res.data.consumedTotalScore >10000? (res.data.consumedTotalScore/10000).toFixed(2):res.data.consumedTotalScore
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
					chartData.couponGivenCount = res.data.couponDischarge,
					chartData.couponGainRatio = res.data.couponReceive;
					chartData.couponUsedRatio = res.data.couponUsage;
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
					
					// this.getCouponData()
				}

				wx.hideLoading();
			},
			fail:error=>{
				wx.hideLoading();
			}
		})

	},
	getCouponData2: function(e){
		util.ajax({
			url:"data-analysis/api/general/member/groupBuyingSpike?type=1",
			method:"POST",
			success:res=>{
				if(res.success){
					this.setData({
						couponDischarge: res.data.couponDischarge,
						couponUsage1: res.data.couponUsage,
						couponReceive1: res.data.couponReceive,
						conversionRate1: res.data.conversionRate,
						verify1: res.data.verify,
						purchaseRate1: res.data.purchaseRate,
						refundRate1: res.data.refundRate,
					})
					chartData.couponGivenCount = res.data.couponDischarge,
					chartData.couponGainRatio = res.data.couponReceive;
					chartData.couponUsedRatio = res.data.couponUsage;
					let chartSet = function (){
						if(chart1){
							console.log(chart1)
							chart1.setOption(initOption())
							console.log('set chart')
						}else{
							setTimeout(()=>{
								console.log("chart is null")
								chartSet();
							},500)
						}
					}
					chartSet();
					
					// this.getCouponData()
				}

				wx.hideLoading();
			},
			fail:error=>{
				wx.hideLoading();
			}
		})

	},
	getCouponData3: function(e){
		util.ajax({
			url:"data-analysis/api/general/member/systemDistributionCoupon",
			method:"POST",
			success:res=>{
				if(res.success){
					this.setData({
						couponDischarge: res.data.couponDischarge,
						couponUsage2: res.data.couponUsage,
						couponReceive2: res.data.couponReceive,
						conversionRate2: res.data.conversionRate,
						verify2: res.data.verify,
						purchaseRate2: res.data.purchaseRate,
						refundRate2: res.data.refundRate,
					})
					chartData.couponGivenCount = res.data.couponDischarge,
					chartData.couponGainRatio = res.data.couponReceive;
					chartData.couponUsedRatio = res.data.couponUsage;
					let chartSet = function (){
						if(chart2){
							console.log(chart2)
							chart2.setOption(initOption())
							console.log('set chart')
						}else{
							setTimeout(()=>{
								console.log("chart is null")
								chartSet();
							},500)
						}
					}
					chartSet();
					
					// this.getCouponData()
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