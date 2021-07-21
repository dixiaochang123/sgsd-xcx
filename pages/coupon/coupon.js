// pages/coupon/coupon.js
import * as echarts from '../../ec-canvas/echarts';
const util = require('../../utils/util');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[1,2,3],
    options: [{
      city_id: '2021',
      city_name: '2021'
    }, {
      city_id: '2020',
      city_name: '2020'
    }, {
      city_id: '2019',
      city_name: '2019'
    }],
    selected: {}
  },
  formdata (obj = {}) {
    let result = ''
    for (let name of Object.keys(obj)) {
      let value = obj[name];
      result += 
      '\r\n--XXX' +
      '\r\nContent-Disposition: form-data; name="'+name+'”'+ 
      '\r\n' +
      '\r\n' + value
    }
    return result+'\r\n--XXX--'
  },
  getConsumptionData: function (e) {
    var formdata = new window.FormData();
    formdata.append(time, 2019);
    formdata.append(currPage, 1);
    formdata.append(pageSize, 5);
    // console.log(formdata)
    // let obj = {
    //   time:2019,
    //   currPage: 1,
    //   pageSize: 5
    // }
    // let data = this.formdata(obj)
    
		util.ajax({
      // url: "data-analysis/api/general/member/everyCouponStatistics?time=2019&currPage=1&pageSize=5",
      url: "data-analysis/api/general/member/everyCouponStatistics",
      // dataType: 'json',
			data: formdata,
			header: {
        'content-type':'multipart/form-data; boundary=XXX'
      },
			method: "POST",
			success: res => {
				if (res.success) {
					let data = res.data;
					this.setData({
						
					})
				}
				wx.hideLoading();
			},
			fail: error => {
				wx.hideLoading();
			}
		})
	},
  change (e) {
    this.setData({
      selected: { ...e.detail }
    })
    console.log(this.data.selected.name)
    wx.showToast({
      title: ` ${this.data.selected.name}`,
      icon: 'success',
      duration: 1000
    })
  },
  close () {
    // 关闭select
    this.selectComponent('#select').close()
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
    // var formdata = new FormData();
    // formdata.append(time, 2019);
    // formdata.append(currPage, 1);
    // formdata.append(pageSize, 5);
    // console.log(formdata)
    this.getConsumptionData()
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