// pages/earlyWarning/earlyWarning.js
import * as echarts from '../../../ec-canvas/echarts';
const util = require('../../../utils/util');
const app = getApp();
//曲线图
var chart = null;

function getOption() {
  var option = {
    color: ['#ff4d4d', '#ccc'],
    gradientColor: ['#f6efa6', '#d88273', '#bf444c'],
    tooltip: {
      trigger: 'item',
      show: false
    },
    legend: {
      top: '40%',
      left: 'center',
      show: false
    },
    series: [{
      name: '访问来源',
      type: 'pie',
      radius: ['90%', '60%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: false,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [{
          value: 30,
          name: '餐饮'
        },
        {
          value: 100,
          name: ''
        },
      ]
    }]
  };
  return option;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ecpie: {
      onInit: (canvas, width, height, dpr) => {
        chart = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: dpr // new
        });
        canvas.setChart(chart);
        var option = getOption();
        chart.setOption(option);
        // return chart;
      },
    },
    lastTapTime: 0,
    isshow:true,
    value:100

  },
  // 触摸开始时间
  touchStartTime: 0,
  // 触摸结束时间
  touchEndTime: 0,
  // 最后一次单击事件点击发生时间
  lastTapTime: 0,
  // 单击事件点击后要触发的函数
  lastTapTimeoutFunc: null,
  doubleTap: function (e) {
    var that = this
    // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
    if (that.touchEndTime - that.touchStartTime < 350) {
      // 当前点击的时间
      var currentTime = e.timeStamp
      var lastTapTime = that.lastTapTime
      // 更新最后一次点击时间
      that.lastTapTime = currentTime

      // 如果两次点击时间在300毫秒内，则认为是双击事件
      if (currentTime - lastTapTime < 300) {
        console.log("double tap")
        // 成功触发双击事件时，取消单击事件的执行
        clearTimeout(that.lastTapTimeoutFunc);
        this.setData({
          isshow:!that.data.isshow
        })
        console.log(that.data.isshow,'双击事件被触发')
        // wx.showModal({
        //   title: '提示',
        //   content: '双击事件被触发',
        //   showCancel: false
        // })
      }
    }
  },
  handleclicktomerchants() {
    console.log(2222222222222)
    wx.navigateTo({
      url: '/dataView/pages/merchants/merchants'
    });
  },
  inputBlur(e) {
    this.setData({
      isshow:true
    })

  },
  inputchange(e) {
    let value = e.detail.value;
    let newValue = this.substrchange(value)
    console.log(newValue)
    this.setData({
      value:newValue
    })
  },
  substrchange(str) {
    str = str.replace(/[^\d]/g,"");
    if(str.substr(0, 1)=="0") {
      str = str.substr(1)
      this.substrchange(str)
    }
    if(str>100) {
      str = 100
    }
    return str
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (chart) {
      chart.setOption(initOptions())
    }
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