//js
Component({
  properties: {
    total: {
      type: Number,
      value: 0
    },
    size: {
      type: Number,
      value: 20
    },
    page: {
      type: Number,
      value: 1
    }
  },

  data: {
    pageSize: 20,
    pagetotal: 0,
    currentPage: 1

  },
  ready() {
    console.log(3333333333333,this.data.page,this.data.currentPage)
    this.setData({
      pageSize: this.data.size,
      currentPage: this.data.page,
      pagetotal: Math.ceil( parseInt(this.data.total) / this.data.size)
    })
  },
  observers: {
    'page,total': function (numberA, numberB) {
     this.setData({
      currentPage: numberA,
      pagetotal: Math.ceil( parseInt(numberB) / this.data.size)
    })
     
    }
  },
  methods: {
    //input输入双向绑定数据
    inputValue: function (e) {
      let name = e.currentTarget.dataset.name;
      let mapName = {};
      mapName[name] = e.detail && e.detail.value;
      this.setData(mapName);
    },
    //上一页
    prevFn: function () {
      if (this.data.currentPage <= 1) {
        wx.showToast({
          icon: 'none',
          title: '已经是最前一页',
        })
        return;
      }

      // wx.showLoading({
      //   title: '加载中...',
      // })
      let currentPage = Number(this.data.currentPage) - 1
      this.setData({
        currentPage
      })
      this.triggerEvent("pageChange", currentPage);
      // setTimeout(function(){
      //   wx.hideLoading()
      // },1000)
    },
    //下一页
    nextFn: function () {
      if (this.data.currentPage >= this.data.pagetotal) {
        wx.showToast({
          icon: 'none',
          title: '已经是最后一页',
        })
        return;
      }
      // wx.showLoading({
      //   title: '加载中...',
      // })
      let currentPage = Number(this.data.currentPage) + 1
      this.setData({
        currentPage
      })
      console.log(this.data.currentPage);
      this.triggerEvent("pageChange", currentPage);
      // setTimeout(function(){
      //   wx.hideLoading()
      // },1000)
    },
    //去到某一页
    pageGo: function () {
      console.log(Number(this.data.currentPage));
      let currentPage = Number(this.data.currentPage)
      if (currentPage > this.data.pagetotal) {
        this.setData({
          currentPage: this.data.pagetotal
        })
      } else if (currentPage <= 0) {
        this.setData({
          currentPage: 1
        })
      }
      this.triggerEvent("pageChange", currentPage);
      // console.log(currentPage);
      // wx.showLoading({
      //   title: '加载中...',
      // })
      // setTimeout(function(){
      //   wx.hideLoading()
      // },1000)
    },
    firstFn() {
      this.setData({
        currentPage: 1
      })
      this.triggerEvent("pageChange", this.data.currentPage);
    },
    lastFn() {
      this.setData({
        currentPage: this.data.pagetotal
      })
      this.triggerEvent("pageChange", this.data.currentPage);
    },
  },
});