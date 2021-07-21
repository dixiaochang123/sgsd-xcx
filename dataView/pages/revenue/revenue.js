// pages/revenue/revenue.js
import * as echarts from '../../../ec-canvas/echarts';
const util = require('../../../utils/util');

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		num: 1,
		remainSpace: [],
		totalSpace: '',
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
		wx.showLoading();
		this.getData(2);
	},
	getData: function(nub){
		util.ajax({
			url:"data-analysis/api/parkingLotStatistics/parkingDataRevenueData?type="+nub,
			method:"POST",
			success:res=>{
				if(res.success){
					this.setData({
						totalSpace: res.data>10000?(res.data/10000).toFixed(2):res.data
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
	 * 图表切换
	 */
	chartsClick: function(e){
		var that = this;
		var num = e.currentTarget.dataset.num;
		if (that.data.num == num) {return false} 
		else {
			that.setData({num: e.currentTarget.dataset.num})
		}
		if(num == 1){
			that.getData(2);
		}
		else if(num == 2){
			that.getData(3);
		}
		that.setData({
			num: e.currentTarget.dataset.num
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
		chart = null;
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