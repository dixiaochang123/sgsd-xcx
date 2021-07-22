// pages/earlyWarning/earlyWarning.js
import * as echarts from '../../../ec-canvas/echarts';
const util = require('../../../utils/util');
const app = getApp();
//曲线图
var chart = null;

function getOption() {
  var option = {
    color:['#ff4d4d','#ccc'],
    gradientColor:['#f6efa6','#d88273','#bf444c'],
      tooltip: {
          trigger: 'item',
          show:false
      },
      legend: {
          top: '40%',
          left: 'center',
          show:false
      },
      series: [
        {
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
          data: [
              {value: 30, name: '餐饮'},
              {value: 100, name: ''},
          ]
        }
      ]
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
    lastTapTime:0,
    
  },
  doubleClick(e){
    var curTime = e.timeStamp
    var lastTime = e.currentTarget.dataset.time  // 通过e.currentTarget.dataset.time 访问到绑定到该组件的自定义数据
    console.log("上一次点击时间："+lastTime)
    console.log("这一次点击时间：" + curTime)
    console.log('------------------------------');
    if (curTime - lastTime > 0) {
      if (curTime - lastTime < 300) {//是双击事件
        console.log("挺快的双击，用了：" + (curTime - lastTime))
      }
      
    }
    this.setData({
      lastTapTime: curTime
    })
  },
  handleclicktomerchants() {
    console.log(2222222222222)
    wx.navigateTo({
			url: '/dataView/pages/merchants/merchants'
		});
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(chart){
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