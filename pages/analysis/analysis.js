// pages/analysis/analysis.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    power:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    setTimeout(()=>{

      that.setData({
        power:app.globalData.power
      })
      console.log(that.data.power)
    },500)
    // dataAnalysisCashRegisterDataStatistics 是否有管理层看板-数据分析-收银数据-收银数据统计-按钮权限 true 有 false:无
    //  dataAnalysisCashierData 是否有管理层看板-数据分析-收银数据按钮权限 true 有 false:无
    //  dataAnalysisCommercialManagementData 是否有管理层看板数据分析-商管按钮权限 true 有 false:无
    //  dataAnalysisMemberData 是否有管理层看板-数据分析-会员数据按钮权限 true 有 false:无
    //  dataAnalysisMemberDataStatistics 是否有管理层看板-数据分析-会员数据-会员数据统计按钮权限 true 有 false:无
    //  dataAnalysisParkingLotData 是否有管理层看板-数据分析-停车场数据按钮权限 true 有 false:无
    //  dataAnalysisPassengerData 是否有管理层看板-数据分析-客流数据 钮权限 true 有 false:无
    //  dataAnalysisPassengerFlowDataStatistics 是否有管理层看板-数据分析-客流数据-客流数据统计权限 true 有 false:无
    //  dataAnalysisPinginess 是否有管理层看板数据-分析商管-坪效分析 true 有 false:无
    //  dataAnalysisRentCollectionRate 是否有管理层看板-数据分析商管-租金收缴率 true 有 false:无
    //  dataAnalysisRentSellingRatio 是否有管理层看板-数据分析-商管-租售比分析 true 有 false:无

    //  dataAnalysisShopStatistics 是否有管理层看板-数据分析-商管-商铺统计 true 有 false:无
    //  dataAnalysisShoppingBusinessAnalysis 是否有管理层看板-数据分析-商管-商铺业态分析 true 有 false:无
    //  dataAnalysisVehicle 是否有管理层看板-数据分析-停车场数据-车辆-按钮权限 true 有 false:无
    //  dataAnalysiseFrontPageTop10Shop 是否有管理层看板-数据分析-收银数据-首页TOP10商铺-按钮权限 true 有 false:无
    //  dataAnalysiseMberInformationStatistics 是否有管理层看板-数据分析-会员数据-会员信息统计按钮权限 true 有 false:无


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