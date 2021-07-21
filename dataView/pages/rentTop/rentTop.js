// pages/rentTop/rentTop.js
const util = require('../../../utils/util');
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // tab切换 
    currentTab: 4,
    currentTab1: 3,
    rentList: [],
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
        url: '/pages/index/index'
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
    if(e.currentTarget.dataset.current==6) {
      console.log(3334444)
      this.getData1();
    } else {

      this.getData();
    }
  },
  swichNav1: function (e) {
    var that = this;
    var currentTab = e.currentTarget.dataset.current
    if (that.data.currentTab1 === e.currentTarget.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab1: e.currentTarget.dataset.current,
        page: 1
      })
    }
    console.log(this.data.page)
    that.getData1();
  },
  showMore() {
    wx.navigateTo({
      url: '../rentTopMore/rentTop',
    })
  },
  getInfo(ace = true) {
    wx.showLoading();
    return new Promise(resolve => {
      wx.request({
        method: "POST",
        url: app.globalData.baseUrlOP + 'rest/sgsdbi/getrentsalesratio',
        dataType: 'json',
        data: JSON.stringify({
          "apiKey": "STANDRAD",
          "startRatio": "0",
          "endRatio": "100",
          limit: 999999,
        }),
        header: {
          "content-type": 'application/json'
        },
        success: res => {
          if (res.data.success) {
            resolve(res)
          }
          wx.hideLoading();
        },
        fail: error => {
          wx.hideLoading();
        }
      })

    })
  },
  // 更多数据接口
  getInfo1() {
    wx.showLoading();
    let params = {
        "apiKey": "STANDRAD",
        limit: 999999,
      },
      currentTab1 = parseInt(this.data.currentTab1);
    switch (currentTab1) {
      case 0:
        params.startRatio = "75"
        params.endRatio = "100";
        break;
      case 1:
        params.startRatio = "50"
        params.endRatio = "75";
        break;
      case 2:
        params.startRatio = "25"
        params.endRatio = "50";
        break;
      default:
        params.startRatio = "0"
        params.endRatio = "25";
    }
    return new Promise(resolve => {
      wx.request({
        url: app.globalData.baseUrlOP + 'rest/sgsdbi/getrentsalesratio',
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
  getData1: function (e) {
    this.getInfo1().then(res => {
      let list = res.data.data;
      // this.setData({
      //   total: list.length
      // })
      // console.log(list,this.data.total)
      let num = 0;
      list.sort((a, b) => {
        return a.value - b.value;
      })
      for (var i = 0; i < list.length; i++) {
        if (list[i].value != 0) {
          num = i
          break
        }
      }
      let list1 = this.chunk(list, 10)
      console.log('list', list, this.data.page)
      this.setData({
        rentList: list1[this.data.page - 1],
        total: list.length,
        // page:this.data.page
      })
      console.log(this.data.rentList,this.data.total,this.data.page)
    })
  },
  pageChange(e) {
    let page = e.detail
    console.log(page)
    this.setData({
      page
    })
    this.getData1()
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.getData();
  },
  getData: function (e) {
    this.getInfo(this.data.currentTab == 5 ? false : true).then(res => {
      let list = res.data.data;
      let num = 0
      if (this.data.currentTab == 5) { //后十
        list.sort((a, b) => {
          return b.value - a.value
        })
      } else {
        list.sort((a, b) => {
          return a.value - b.value
        })
      }
      for (var i = 0; i < list.length; i++) {
        if (list[i].value != 0) {
          num = i
          break
        }
      }
      this.setData({
        rentList: list.slice(num, num + 10)
      })

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