Component({
    /* 组件的属性列表 */
    properties: {
        title: { // 设置标题
            type: String,
            value: ''
        },
        show_bol: { // 控制返回箭头是否显示
            type: Boolean,
            value: false
        },
        my_class: { // 控制样式
            type: Boolean,
            value: false
        }
    },
    /**
     * 页面的初始数据
     */
    data: {
        type: "组件",
        bar_Height: wx.getSystemInfoSync().statusBarHeight, // 获取手机状态栏高度
        widnowH: wx.getSystemInfoSync().screenHeight
    },
    methods:{
        goBack: function () { // 返回事件
            console.log("退后")
            wx.navigateBack({
                delta: 1,
            })
        },
    },
   
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})