//app.js
App({
  onLaunch: function () {
    // 判断用户是否登录，未登录跳转登录页面，登录调用获取用户权限接口
    if(!wx.getStorageSync('userId')){
      console.log("未登录")
    }else{
      console.log('获取用户权限',wx.getStorageSync('userId'))
      wx.request({
        // url: this.globalData.baseUrl+'data-analysis/api/v1/accessPerm?userId='+wx.getStorageSync('userId'),
        url: this.globalData.baseUrl+'/data-analysis/api/v1/sgsdAccessPerm?userId='+wx.getStorageSync('userId'),
        method:"POST",
        success:res=>{
          console.log('获取用户权限',res)
          if(res.data.success ==true){
            this.globalData.power = res.data.data;
            // this.globalData.power.frontPageMember = false;
            // this.globalData.power.frontPagePassengerFlow = false;
            // this.globalData.power.dataAnalysisPassengerFlowDataStatistics = false;
            // this.globalData.power.dataAnalysis =false
            if(this.globalData.power.dataAnalysisCashRegisterDataStatistics == true||
              this.globalData.power.dataAnalysisCashierData == true||
              this.globalData.power.dataAnalysisCommercialManagementData == true||
              this.globalData.power.dataAnalysisMemberData == true||
              this.globalData.power.dataAnalysisMemberDataStatistics == true||
              this.globalData.power.dataAnalysisParkingLotData == true||
              this.globalData.power.dataAnalysisPassengerData == true||
              this.globalData.power.dataAnalysisPassengerFlowDataStatistics == true||
              this.globalData.power.dataAnalysisPinginess == true||
              this.globalData.power.dataAnalysisRentCollectionRate == true||
              this.globalData.power.dataAnalysisRentSellingRatio == true||
              this.globalData.power.dataAnalysisShopStatistics == true||
              this.globalData.power.dataAnalysisShoppingBusinessAnalysis == true||
              this.globalData.power.dataAnalysisVehicle == true||
              this.globalData.power.dataAnalysiseFrontPageTop10Shop == true||
              this.globalData.power.dataAnalysiseMberInformationStatistics == true) {
                this.globalData.power.dataAnalysis =true
              }
            if(!this.globalData.power.dataAnalysis) {
              this.globalData.power.dataAnalysisCashRegisterDataStatistics = false;
              this.globalData.power.dataAnalysisCashierData = false;
              this.globalData.power.dataAnalysisCommercialManagementData = false;
              this.globalData.power.dataAnalysisMemberData = false;
              this.globalData.power.dataAnalysisMemberDataStatistics = false;
              this.globalData.power.dataAnalysisParkingLotData = false;
              this.globalData.power.dataAnalysisPassengerData = false;
              this.globalData.power.dataAnalysisPassengerFlowDataStatistics = false;
              this.globalData.power.dataAnalysisPinginess = false;
              this.globalData.power.dataAnalysisRentCollectionRate = false;
              this.globalData.power.dataAnalysisRentSellingRatio = false;
              this.globalData.power.dataAnalysisShopStatistics = false;
              this.globalData.power.dataAnalysisShoppingBusinessAnalysis = false;
              this.globalData.power.dataAnalysisVehicle = false;
              this.globalData.power.dataAnalysiseFrontPageTop10Shop = false;
              this.globalData.power.dataAnalysiseMberInformationStatistics = false;
            }
          }
        },
        fail:error=>{
          console.log('获取用户权限',error)
        }
      })
    }
	},
	globalData: {
		userInfo: null,
    // baseUrl:"https://o2o.shuoguoshidai.net/",//正式
    baseUrl:"https://sgsd.tdcheck.cn:28000/",//测试
    baseUrlERP:"http://erp1.shuoguoshidai.cn:8185/sgbiposservice/rest/",//测试
    baseUrlOP:"https://erp.shuoguoshidai.net:5443/sgbiposservice/",
    //baseUrlOP:"http://erp.shuoguoshidai.cn:8185/sgbiposservice/"
    power:{}
	}
})