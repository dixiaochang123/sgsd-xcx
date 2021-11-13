// pages/consumptionTop/consumptionTop.js
var app = getApp();
const util = require('../../../utils/util');
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		salesList:[],
		total:0,
		floorCode:''
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
		this.setData({
			floorCode:options.id
		})
		wx.showLoading();
		this.getList();
	},

	getList: function(e){
		wx.request({
			url:app.globalData.baseUrlOP + 'rest/sgsdbi/getunleasedstore',
			method:"POST",
			data:{
				floorCode:this.data.floorCode
			},
			success:res=>{
				if(res.statusCode==200){
					console.log(res.data.data)
					let total = res.data.data.length;
					//  res.data.data.map(item=>{
					// 	total+=item.area
					// })
					this.setData({
						salesList: res.data.data,
						total:total.toFixed(2)
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