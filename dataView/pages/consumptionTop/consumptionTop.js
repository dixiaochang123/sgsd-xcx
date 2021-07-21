// pages/consumptionTop/consumptionTop.js
var app = getApp();
const util = require('../../../utils/util');
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		salesList:[],
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
	onLoad: function(options) {
		wx.showLoading();
		this.getList();
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