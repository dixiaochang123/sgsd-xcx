Component({
  properties: {
    options: {
      type: Array,
      value: []
    },
    defaultOption: {
      type: Object,
      value: {
        id: '全部楼层',
        name: '全部楼层'
      }
    },
    key: {
      type: String,
      value: 'id'
    },
    text: {
      type: String,
      value: 'name'
    }
  },
  data: {
    result: [],
    isShow: false,
    current: {}
  },
  methods: {
    optionTap(e) {
      let dataset = e.target.dataset
      this.setData({
        current: dataset,
        isShow: false
      });
      console.log(dataset)
      // 调用父组件方法，并传参
      this.triggerEvent("change", { ...dataset })
    },
    openClose() {
      this.setData({
        isShow: !this.data.isShow
      })
    },

    // 此方法供父组件调用
    close() {
      this.setData({
        isShow: false
      })
    }
  },
  observers: {
    options: function options(options) {
        console.log(options)
        let result = []
      if (this.data.key !== 'id' || this.data.text !== 'name') {       
        for (let item of options) {
          let { [this.data.key]: id, [this.data.text]: name } = item
          result.push({ id, name })
        }
      }
      console.log(result)
      this.setData({
        current: result[0] || this.data.defaultOption,
        result: result,
      })
    },
    defaultOption: function defaultOption(defaultOption) {
       
      this.setData({
        defaultOption
      })
    },
  },
  lifetimes: {
    attached() {
      // 属性名称转换, 如果不是 { id: '', name:'' } 格式，则转为 { id: '', name:'' } 格式
      // console.log(this.data.options)
      let result = []
      if (this.data.key !== 'id' || this.data.text !== 'name') {       
        for (let item of this.data.options) {
          let { [this.data.key]: id, [this.data.text]: name } = item
          result.push({ id, name })
        }
      }
      console.log(result)
      this.setData({
        current: result[0] || this.data.defaultOption,
        result: result
      })
    }
  }
})