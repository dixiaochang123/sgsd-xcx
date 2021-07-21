// pages/fee/fee.js
const app = getApp();
const util = require("../../../utils/util");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ratio: 0,
    floorData: [],
    operationTypeData: []
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
  onLoad: function (options) {
    var that = this;
    that.getData();
    wx.showLoading();
  },
  getData: function(e){
    wx.request({
			url: app.globalData.baseUrlOP+'rest/sgsdbi/countrentcollect',
      dataType: 'json',
      data: JSON.stringify({
        apiKey: "STANDRAD",
			}),
			header: {
				"content-type":'application/json',
				"Cookie":app.globalData.sessionid
			},
			method:"POST",
			success:res=>{
				if(res.data.success){
          res.data.floorData.sort((a, b)=>{
            return a.value - b.value
          })
          res.data.operationTypeData.sort((a, b)=>{
            return a.value - b.value
          })
          let operationTypeDataArr = util.sortOther(res.data.operationTypeData,"value","name")
					this.setData({
            ratio: res.data.ratio,
						floorData: res.data.floorData,
						operationTypeData: operationTypeDataArr
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