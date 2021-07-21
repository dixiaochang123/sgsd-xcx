// pages/login/login.js
const util = require('../../utils/util');
const app = getApp();
const ajax = util.ajax;

Page({

    /**
     * 页面的初始数据
     */
    data: {
      nickName:[],
      avatarUrl:[]
    },
    
    getPhoneNumber(e){
      wx.showLoading({
        title: '登录中',
        icon: 'loading',
      })
      if(e.detail.errMsg == "getPhoneNumber:fail user deny"){
        return false;
      }else if(e.detail.errMsg == 'getPhoneNumber:ok'){
        ajax({
          url: "data-analysis/api/v1/decrypt", 
          method: "POST",
          contentType: "application/x-www-form-urlencoded;charset=utf-8",
          data: {
            encrypted: e.detail.encryptedData,
            iv: e.detail.iv,
            session_key: wx.getStorageSync('session_key'),
            openid: wx.getStorageSync('openid'),
          },
          success: res =>{
            wx.hideLoading();
            if(res.success){
              wx.setStorageSync('userId', res.data.userInfo.userId)
              wx.setStorageSync('nickname', res.data.userInfo.nickname)
              console.log(res.data.userInfo.userId)
              wx.reLaunch({
                url: '/pages/index/index',
              })
            }else{
              wx.showToast({
                title: res.data.msg,
                icon: 'none',
                duration: 2000
              })
            }
          },
          fail:err=>{
            wx.hideLoading();
            wx.showToast({
              title: JSON.stringify(err),
              icon: 'none',
              duration: 2000
            })
          }
        })
      }     
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      var that = this;
      wx.showLoading({
        title: '加载中...',
        mask:true,
      })
      wx.login({
        success:(res)=>{
          console.log("========wx.login========="+res.code);
          if(res.code ){
            ajax({
              url:"data-analysis/api/v1/login",
              data:{
                "wxcode":res.code,
              },
              method:"POST",
              success:(data)=>{
                console.log(data);
                let retJson = data.data||data.msg;
                let sessionkey = retJson.session_key;
                let openId = retJson.openid;
                console.log("sessionkey"+sessionkey);
                console.log("openId"+openId);
                wx.setStorage({
                  data: sessionkey,
                  key: 'session_key',
                })
                wx.setStorage({
                  data: openId,
                  key: 'openid',
                })
                  wx.hideLoading();
              },
              fail:err=>{
                  wx.hideLoading();
              }
            })
          }
        },
        fail:(res)=>{
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