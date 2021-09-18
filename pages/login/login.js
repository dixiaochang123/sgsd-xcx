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
      avatarUrl:[],
      power:{}
    },
    powerInfo() {
      util.ajax({
        // url: this.globalData.baseUrl+'data-analysis/api/v1/accessPerm?userId='+wx.getStorageSync('userId'),
        url: 'data-analysis/api/v1/sgsdAccessPerm?userId='+wx.getStorageSync('userId'),
        method:"POST",
        success:res=>{
          console.log('获取用户权限powerInfo',res)
          if(res.success ==true){
            let power = res.data;
            this.globalData.power = res.data.data;
            // this.globalData.power.frontPageMember = false;
            // this.globalData.power.frontPagePassengerFlow = false;
            // this.globalData.power.dataAnalysisPassengerFlowDataStatistics = false;
            // this.globalData.power.dataAnalysis =false
            if(power.dataAnalysisCashRegisterDataStatistics == true||
              power.dataAnalysisCashierData == true||
              power.dataAnalysisCommercialManagementData == true||
              power.dataAnalysisMemberData == true||
              power.dataAnalysisMemberDataStatistics == true||
              power.dataAnalysisParkingLotData == true||
              power.dataAnalysisPassengerData == true||
              power.dataAnalysisPassengerFlowDataStatistics == true||
              power.dataAnalysisPinginess == true||
              power.dataAnalysisRentCollectionRate == true||
              power.dataAnalysisRentSellingRatio == true||
              power.dataAnalysisShopStatistics == true||
              power.dataAnalysisShoppingBusinessAnalysis == true||
              power.dataAnalysisVehicle == true||
              power.dataAnalysiseFrontPageTop10Shop == true||
              power.dataAnalysiseMberInformationStatistics == true) {
                power.dataAnalysis =true
              }
            if(!power.dataAnalysis) {
              power.dataAnalysisCashRegisterDataStatistics = false;
              power.dataAnalysisCashierData = false;
              power.dataAnalysisCommercialManagementData = false;
              power.dataAnalysisMemberData = false;
              power.dataAnalysisMemberDataStatistics = false;
              power.dataAnalysisParkingLotData = false;
              power.dataAnalysisPassengerData = false;
              power.dataAnalysisPassengerFlowDataStatistics = false;
              power.dataAnalysisPinginess = false;
              power.dataAnalysisRentCollectionRate = false;
              power.dataAnalysisRentSellingRatio = false;
              power.dataAnalysisShopStatistics = false;
              power.dataAnalysisShoppingBusinessAnalysis = false;
              power.dataAnalysisVehicle = false;
              power.dataAnalysiseFrontPageTop10Shop = false;
              power.dataAnalysiseMberInformationStatistics = false;
            }
            console.log('用户权限11111111',power)
            app.globalData.power = power
            wx.setStorageSync('power', power)
            console.log(wx.getStorageSync('power'))
          }
        },
        fail:error=>{
          console.log('获取用户权限',error)
        }
      })
    },
    getPhoneNumber(e){
      // wx.showLoading({
      //   title: '登录中',
      //   icon: 'loading',
      // })
      if(e.detail.errMsg == "getPhoneNumber:fail user deny"){
        return false;
      }else if(e.detail.errMsg == 'getPhoneNumber:ok'){
        wx.showLoading({
          title: '登录中',
          icon: 'loading',
        })
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
              this.powerInfo()
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