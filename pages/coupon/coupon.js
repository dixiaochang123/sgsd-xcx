// pages/coupon/coupon.js
import * as echarts from '../../ec-canvas/echarts';
const util = require('../../utils/util');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[1,2,3],
    currPage:1,
    totalCount:1,
    time:2021,
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
  pageChange(e) {
    let currPage = e.detail
    console.log(currPage)
    this.setData({
      currPage
    })
    this.getConsumptionData()
  },
  getConsumptionData: function (e) {
    let obj = {
      time:this.data.time,
      currPage: this.data.currPage,
      pageSize:3
    }
    let num="?";
    for (const i in obj) {
      if (Object.hasOwnProperty.call(obj, i)) {
        num+=i+'='+obj[i]+'&'
        
      }
    }
    num = num.substring(0, num.length - 1);
    console.log(99999999,num)

    util.ajax({
      url: "data-analysis/api/general/member/everyCouponStatistics"+num,
			method: "POST",
			success: res => {
				if (res.success) {
          let data = res.data;
          // 退款率 退款的除以购买的
          // 转化率 使用的除以购买的
          // 核销率 使用的除以发放的
          // 组合券以每张券形式计算
          // 购买率 购买的除以发放的
          data.list.map(item=>{
            item['zhl'] = (item.couponUsage/item.couponPurchase)*100
            item['tkl'] = (item.couponNumberOfRefunds/item.couponPurchase)*100
            item['hxl'] = (item.couponUsage/item.couponDischarge)*100
            item['gml'] = (item.couponPurchase/item.couponDischarge)*100
          })
          
          console.log(data.list)

					this.setData({
            list:data.list,
            currPage:data.currPage,
            totalCount:data.totalCount
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
      selected: { ...e.detail },
      time:e.detail.name,
      currPage:1
    })
    console.log(this.data.selected.name)
    this.getConsumptionData()
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