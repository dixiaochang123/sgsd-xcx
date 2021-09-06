//app.js
App({
  onLaunch: function () {
    // 判断用户是否登录，未登录跳转登录页面，登录调用获取用户权限接口
    if(!wx.getStorageSync('userId')){
      console.log("未登录")
    }else{
      console.log('获取用户权限')
      wx.request({
        url: this.globalData.baseUrl+'data-analysis/api/v1/accessPerm?userId='+wx.getStorageSync('userId'),
        method:"POST",
        success:res=>{
          if(res.code == 0){
            console.log(res.data)
          }
        }
      })
    }
	},
	globalData: {
		userInfo: null,
    baseUrl:"https://o2o.shuoguoshidai.net/",//正式
    // baseUrl:"https://sgsd.tdcheck.cn:28000/",//测试
    baseUrlOP:"https://erp.shuoguoshidai.net:5443/sgbiposservice/"
    //baseUrlOP:"http://erp.shuoguoshidai.cn:8185/sgbiposservice/"
	}
})