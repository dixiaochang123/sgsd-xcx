// pages/groundTop/groundTop.js
const util = require('../../../utils/util');
const app = getApp();
Page({
  data: {
    // tab切换 
    currentTab: 0,
    currentTab1: 0,
    groundList: [],
    page: 1,
    total:10
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
  swichNav: function (e) {
    var that = this;
    var currentTab = e.currentTarget.dataset.current
    if (that.data.currentTab === e.currentTarget.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.currentTarget.dataset.current,
      })
    }
    if(currentTab == 0){
      that.getData();
    }
    else if (currentTab == 1){
      that.getData1()
    } else if (currentTab == 2) {
      that.getData2()

    }
    this.setData({
      currentTab: e.currentTarget.dataset.current,
    })
  },
  swichNav1: function (e) {
    var that = this;
    if (that.data.currentTab1 === e.currentTarget.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab1: e.currentTarget.dataset.current,
        page: 1
      })
    }
    that.getData2()
  },
  swiperChange: function (e) {

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
			url: app.globalData.baseUrlOP+'rest/sgsdbi/getstoreeffectrank',
      dataType: 'json',
      data: JSON.stringify({
        apiKey: "STANDRAD",
        startTime: util.getNowYear(new Date(),'-')+" 00:00:00",
        endTime: util.formatTime(new Date()),
        order: "desc",
        limit: 10
      }),
			header: {
				"content-type":'application/json'
			},
      method:"POST",
      success:res=>{
				if(res.data.success){
          this.setData({
            groundList: res.data.data
          })
        }
        wx.hideLoading();
      },
      fail:error=>{
			wx.hideLoading();
			}
		})
  },
  getData1: function(e){
    wx.request({
			url: app.globalData.baseUrlOP+'rest/sgsdbi/getstoreeffectrank',
      dataType: 'json',
      data: JSON.stringify({
        apiKey: "STANDRAD",
        startTime: util.getNowYear(new Date(),'-')+" 00:00:00",
        endTime: util.formatTime(new Date()),
        order: "asc",
        limit: 10
      }),
			header: {
				"content-type":'application/json'
			},
      method:"POST",
      success:res=>{
				if(res.data.success){
          this.setData({
            groundList: res.data.data
          })
        }
        wx.hideLoading();
      },
      fail:error=>{
			wx.hideLoading();
			}
		})
  },
  getData2: function(e){
    this.getInfo().then(res=>{
      let list = res.data.data;
      let list1 = this.chunk(list, 10)
      console.log('list', list, this.data.page)
      this.setData({
        groundList: list1[this.data.page - 1],
        total: list.length,
      })
    })
  },
  pageChange(e) {
    let page = e.detail
    console.log(page)
    this.setData({
      page
    })
    this.getData2()
  },
  chunk(array, size) {
    let [start, end, result] = [null, null, []];
    for (let i = 0; i < Math.ceil(array.length / size); i++) {
      start = i * size;
      end = start + size;
      result.push(array.slice(start, end));
    }
    return result;
  },
  getInfo() {
    wx.showLoading();
    var mydate = new Date();
    let params = {
      "apiKey": "STANDRAD",
      limit: 999999,
      order: "desc",
    },
    currentTab1 = parseInt(this.data.currentTab1);
    this.setData({
      currentMonth:mydate.getMonth()
    })
    switch (currentTab1) {
      case 0:
        params.startTime = util.getNowYear(new Date(),'-')+ " 00:00:00"
        params.endTime = mydate.getFullYear()+"-01-31 00:00:00";
        break;
      case 1:
        params.startTime =  mydate.getFullYear()+"-02-01 00:00:00"
        params.endTime = mydate.getFullYear()+"-02-29 00:00:00";
        break;
      case 2:
        params.startTime =  mydate.getFullYear()+"-03-01 00:00:00"
        params.endTime = mydate.getFullYear()+"-03-31 00:00:00";
        break;
      case 3:
        params.startTime =  mydate.getFullYear()+"-04-01 00:00:00"
        params.endTime = mydate.getFullYear()+"-04-30 00:00:00";
        break;
      case 4:
        params.startTime =  mydate.getFullYear()+"-05-01 00:00:00"
        params.endTime = mydate.getFullYear()+"-05-31 00:00:00";
        break;
      case 5:
        params.startTime =  mydate.getFullYear()+"-06-01 00:00:00"
        params.endTime = mydate.getFullYear()+"-06-30 00:00:00";
        break;
      case 6:
        params.startTime =  mydate.getFullYear()+"-07-01 00:00:00"
        params.endTime = mydate.getFullYear()+"-07-31 00:00:00";
        break;
      case 7:
        params.startTime =  mydate.getFullYear()+"-08-01 00:00:00"
        params.endTime = mydate.getFullYear()+"-08-31 00:00:00";
        break;
      case 8:
        params.startTime =  mydate.getFullYear()+"-09-01 00:00:00"
        params.endTime = mydate.getFullYear()+"-09-30 00:00:00";
        break;
      case 9:
        params.startTime =  mydate.getFullYear()+"-10-01 00:00:00"
        params.endTime = mydate.getFullYear()+"-10-31 00:00:00";
        break;
      case 10:
        params.startTime =  mydate.getFullYear()+"-11-01 00:00:00"
        params.endTime = mydate.getFullYear()+"-11-30 00:00:00";
        break;
      case 11:
        params.startTime =  mydate.getFullYear()+"-12-01 00:00:00"
        params.endTime = mydate.getFullYear()+"-12-31 00:00:00";
        break;
      default:
        break;
    }
    return new Promise(resolve=>{
      wx.request({
        url: app.globalData.baseUrlOP + 'rest/sgsdbi/getstoreeffectrank',
        dataType: 'json',
        data: JSON.stringify(params),
        header: {
          "content-type": 'application/json'
        },
        method: "POST",
        success: res => {
          if (res.data.success) {
            resolve(res);
          }
          wx.hideLoading();
          return false;
        },
        fail: error => {
          wx.hideLoading();
        }
      })
    })
  },
  showMore() {
    wx.navigateTo({
      url: '../groundTopMore/groundTop',
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

