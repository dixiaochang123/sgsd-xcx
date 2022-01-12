module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const app = getApp();
const util = require('../../utils/util');
let date11 = new Date();
let yearupdate = date11.getFullYear(); //获取完整的年份(4位)
console.log('本年年份tab',yearupdate)
Component({
    options: {
        addGlobalClass: true,
        pureDataPattern: /^_/,
        multipleSlots: true
    },
    properties: {
        tabs: { type: Array, value: [] },
        tabClass: { type: String, value: '' },
        swiperClass: { type: String, value: '' },
        dataId: { type: String, value: '' },
        activeClass: { type: String, value: '' },
        tabUnderlineColor: { type: String, value: '#07c160' },
        tabActiveTextColor: { type: String, value: '#000000' },
        tabInactiveTextColor: { type: String, value: '#000000' },
        tabBackgroundColor: { type: String, value: '#e3e7f5' },
        activeTab: { type: Number, value: 0 },
        swipeable: { type: Boolean, value: true },
        animation: { type: Boolean, value: true },
        duration: { type: Number, value: 500 },
        // new data
        dataAllFlow:{type: Object, value: {}},
        dataAllMember:{type: Object, value: {}},
        dataAllSales:{type: Object, value: {}},
        dataAllMarket:{type: Object, value: {}},
        todaySales:{ type: Number, value: 0 },
        todaySales1:{ type: Number, value: 0 },
        totalSpace:{ type: Number, value: 0 },
        ec10:{type: Object, value: {}},
        power:{type: Object, value: {}},
        rentCollectionRate:{ type: Array, value: []},
    },
    data: {
        currentView: 0,
        activeflow:'本周',
        flowdata:'',//客流  本周/本月/本年

        activeMember:"男性",
        memberdata:'',

        activeadd:"本周增加",
        totalNewMumber:'',
        num:1,
        totalScore:"",//会员总积分

        dayAppearanceData: "", //今日出
        dayEntryData: "", //今日入
        num1:1,
        num2:1,
        activecar:"本周车流",
        thisPeriodOfData:'',
        profit:'0',
        totalSpaceas:0,

        activeSales:"本周销售额",
        salesdata:'0',
        salesdata1:'0',
        monthCustomerPrice:'',

        ftl:0,
        ratio:'',//实时租金收缴率
        scrollTop:0,

        flowdata1:0,
        options: [{
            city_id: '2021',
            city_name: '2021'
          }, {
            city_id: '2020',
            city_name: '2020'
          }],
          selected: {}

        //新增图表
        // ec: {
		// 	onInit: (canvas, width, height, dpr) =>{
		// 		chart = echarts.init(canvas, null, {
		// 			width: width,
		// 			height: height,
		// 			devicePixelRatio: dpr // new
		// 		});
		// 		canvas.setChart(chart);
		// 		return chart;
		// 	}
		// },


    },
    onPageScroll: function(e) {
		console.log('滚动条高度',e.scrollTop)
		this.setData({
			scrollTop:e.scrollTop
		})
},
    attached() {
        
        console.log(this.data.activeflow)
        console.log("======================")
        this.setData({
            options:[{
                city_id: yearupdate+'',
                city_name: yearupdate+''
            },...this.data.options]
        })
        console.log(this.data.options)
        
    },
    // parseFloat(res.data.dayPassengerFlow).toLocaleString()
    observers: {
        activeTab: function activeTab(_activeTab) {
            var len = this.data.tabs.length;
            if (len === 0) return;
            var currentView = _activeTab - 1;
            if (currentView < 0) currentView = 0;
            if (currentView > len - 1) currentView = len - 1;
            this.setData({ currentView: currentView });
        },
        dataAllFlow: function dataAllFlow(val) {
            if(!this.data.activeflow) {
                this.setData({
                    flowdata1:val.weekPassengerFlow,
                    flowdata:val.weekPassengerFlow>10000?(val.weekPassengerFlow/10000).toFixed(2):val.weekPassengerFlow,
                })
            }
            if(this.data.activeflow=='本周') {
                this.setData({
                    flowdata1:val.weekPassengerFlow,
                    flowdata:val.weekPassengerFlow>10000?(val.weekPassengerFlow/10000).toFixed(2):val.weekPassengerFlow,
                })
            }
            if(this.data.activeflow=='本月') {
                this.setData({
                    flowdata1:val.monthPassengerFlow,
                    flowdata:val.monthPassengerFlow>10000?(val.monthPassengerFlow/10000).toFixed(2):val.monthPassengerFlow,
                })
            }
            if(this.data.activeflow=='本年') {
                this.setData({
                    flowdata1:val.yearPassengerFlow,
                    flowdata:val.yearPassengerFlow>10000?(val.yearPassengerFlow/10000).toFixed(2):val.yearPassengerFlow,
                })
            }
            console.log('flowdata1',this.data.flowdata1)
        },
        dataAllMember: function dataAllMember(val) {
            if(!this.data.activeMember) {

                this.setData({
                    memberdata:parseFloat(this.data.dataAllMember.totalNumberOfMaleMembers).toLocaleString()
                })
            }
            if(this.data.activeMember=="男性") {

                this.setData({
                    memberdata:parseFloat(this.data.dataAllMember.totalNumberOfMaleMembers).toLocaleString()
                })
            }
            if(this.data.activeMember=="女性") {

                this.setData({
                    memberdata:parseFloat(this.data.dataAllMember.totalNumberOfFemaleMembers).toLocaleString()
                })
            }
            if(this.data.activeMember=="其他") {

                this.setData({
                    memberdata:parseFloat(this.data.dataAllMember.totalNumberOfOtherMembers).toLocaleString()
                })
            }
            this.getMemberData1()
            this.getMemberData2()
            this.getCarData()
            this.carFlowCycleWithData()
            this.parkingDataRevenueData()
        },
        dataAllSales: function dataAllSales(val) {
            this.setData({
                monthCustomerPrice:this.data.dataAllSales.monthCustomerPrice
            })
            if(!this.data.activeSales) {
                this.setData({
                    salesdata:this.data.dataAllSales.weekSales>10000?(this.data.dataAllSales.weekSales/10000).toFixed(2):this.data.dataAllSales.weekSales,
                    salesdata1:this.data.dataAllSales.weekSales
                })
            }
            if(this.data.activeSales=='本周销售额') {
                this.setData({
                    salesdata:this.data.dataAllSales.weekSales>10000?(this.data.dataAllSales.weekSales/10000).toFixed(2):this.data.dataAllSales.weekSales,
                    salesdata1:this.data.dataAllSales.weekSales
                })
            }
            if(this.data.activeSales=='本月销售额') {
                this.setData({
                    salesdata:this.data.dataAllSales.monthSales>10000?(this.data.dataAllSales.monthSales/10000).toFixed(2):this.data.dataAllSales.monthSales,
                    salesdata1:this.data.dataAllSales.monthSales
                })
            }
            if(this.data.activeSales=='本年销售额') {
                this.setData({
                    salesdata:this.data.dataAllSales.yearSales>10000?(this.data.dataAllSales.yearSales/10000).toFixed(2):this.data.dataAllSales.yearSales,
                    salesdata1:this.data.dataAllSales.yearSales
                })
            }
        },
        dataAllMarket: function dataAllMarket(val) {
            this.setData({
                shoundAmount:this.data.dataAllMarket.shoundAmount>10000?(this.data.dataAllMarket.shoundAmount/10000).toFixed(2):this.data.dataAllMarket.shoundAmount,
                receivableAmount:this.data.dataAllMarket.receivableAmount>10000?(this.data.dataAllMarket.receivableAmount/10000).toFixed(2):this.data.dataAllMarket.receivableAmount,
            })
        },
        totalSpace: function totalSpace(val) {
            this.getData()
        },
    },
    lifetimes: {
        created: function created() {
            console.log(1111111,"dxc")
        }
    },
    methods: {
        change (e) {
            this.setData({
              selected: { ...e.detail },
            })
            this.triggerEvent('parentComponentFunction', { selected:this.data.selected});
        },
          close () {
            // 关闭select
            this.selectComponent('#select').close()
          },
        getData: function(e){
            wx.request({
                    url: app.globalData.baseUrlOP+'rest/sgsdbi/countrentcollect',
              dataType: 'json',
              data: JSON.stringify({
                apiKey: "STANDRAD",
                    }),
                    header: {
                        "content-type":'application/json',
                        "Cookie":app.globalData.sessionid
                    },
                    method:"POST",
                    success:res=>{
                        if(res.data.success){
                            this.setData({
                    ratio: (res.data.ratio).toFixed(1),
                  })
                }
                wx.hideLoading();
                    },
                    fail:error=>{
                        wx.hideLoading();
                    }
                })
          },
        handleTabClick: function handleTabClick(e) {
            console.log(e)
            wx.pageScrollTo({
                scrollTop: this.data.scrollTop+1
            })
            var index = e.currentTarget.dataset.index;
            this.setData({ activeTab: index });
            this.triggerEvent('tabclick', { index: index,id:e.currentTarget.dataset.id });
        },
        handleSwiperChange: function handleSwiperChange(e) {
            wx.pageScrollTo({
                scrollTop: this.data.scrollTop+1
            })
            console.log(e)
            var index = e.detail.current;
            this.setData({ activeTab: index });
            this.triggerEvent('change', { index: index,id:e.detail.currentItemId });
        },
        handleTabClickflow(e) {
            let key = e.target.id;
            console.log(key)
            switch (key) {
                case '客流':
                    wx.navigateTo({
                        url: '/dataView/pages/monitor/monitor'
                    })
                    
                    break;
                case '会员':
                    wx.navigateTo({
                        url: '/dataView/pages/indexInfo/indexInfo?id=会员'
                    })
                    
                    break;
                case '会员1':
                    wx.navigateTo({
                        url: '/dataView/pages/memNum/memNum'
                    })
                    
                    break;
                case '车场':
                    wx.navigateTo({
                        url: '/dataView/pages/carGout/carGout'
                    })
                    
                    break;
                case '车场1':
                    wx.navigateTo({
                        url: '/dataView/pages/revenue/revenue'
                    })
                    
                    break;
                case '收银':
                    wx.navigateTo({
                        url: '/dataView/pages/consumption/consumption'
                    })
                    
                    break;
                case '商管':
                    wx.navigateTo({
                        url: '/dataView/pages/income/income'
                    })
                    
                    break;
                case '商管1':
                    wx.navigateTo({
                        url: '/dataView/pages/fee/fee'
                    })
                    
                    break;
            
                default:
                    break;
            }
        }
        //本周 本月 本年
        ,handleclickTab(event) {
            console.log(event)
            var dataval = event.target.dataset.val;
            // var activeflow = event.target.id;
            // this.setData({ activeflow });
            let obj={
                '本周':this.data.dataAllFlow.weekPassengerFlow>10000?(this.data.dataAllFlow.weekPassengerFlow/10000).toFixed(2):this.data.dataAllFlow.weekPassengerFlow,
                '本月':this.data.dataAllFlow.monthPassengerFlow>10000?(this.data.dataAllFlow.monthPassengerFlow/10000).toFixed(2):this.data.dataAllFlow.monthPassengerFlow,
                '本年':this.data.dataAllFlow.yearPassengerFlow>10000?(this.data.dataAllFlow.yearPassengerFlow/10000).toFixed(2):this.data.dataAllFlow.yearPassengerFlow,
            }
            let obj1={
                '男性':this.data.dataAllMember.totalNumberOfMaleMembers,
                '女性':this.data.dataAllMember.totalNumberOfFemaleMembers,
                '其他':this.data.dataAllMember.totalNumberOfOtherMembers
            }
            let obj2={
                '本周增加':1,
                '本月增加':2,
                '本年增加':3
            }
            let obj3={
                '本周销售额':this.data.dataAllSales.weekSales>10000?(this.data.dataAllSales.weekSales/10000).toFixed(2):this.data.dataAllSales.weekSales,
                '本月销售额':this.data.dataAllSales.monthSales>10000?(this.data.dataAllSales.monthSales/10000).toFixed(2):this.data.dataAllSales.monthSales,
                '本年销售额':this.data.dataAllSales.yearSales>10000?(this.data.dataAllSales.yearSales/10000).toFixed(2):this.data.dataAllSales.yearSales,
            }
            let obj4={
                '本周车流':1,
                '本月车流':2,
                '本年车流':3
            }
            switch (dataval) {
                case "客流":
                    var activeflow = event.target.id;
                    this.setData({ activeflow });
                    this.setData({
                        flowdata:obj[activeflow],
                        // flowdata1:this.data.dataAllFlow.weekPassengerFlow
                    })
                    if(activeflow=='本周') {
                        this.setData({
                            flowdata1:this.data.dataAllFlow.weekPassengerFlow
                        })
                    }
                    if(activeflow=='本月') {
                        this.setData({
                            flowdata1:this.data.dataAllFlow.monthPassengerFlow
                        })
                    }
                    if(activeflow=='本年') {
                        this.setData({
                            flowdata1:this.data.dataAllFlow.yearPassengerFlow
                        })
                    }
                    console.log('flowdata1',this.data.flowdata1)
                    break;
                case "会员":
                    var activeMember = event.target.id;
                    this.setData({ activeMember });
                    this.setData({
                        // memberdata:obj1[activeMember]
                        memberdata:parseFloat(obj1[activeMember]).toLocaleString()
                    })
                    break;
                case "会员1":
                    var activeadd = event.target.id;
                    this.setData({ activeadd });
                    this.setData({
                        num:obj2[activeadd]
                    })
                    this.getMemberData1()
                    console.log(this.data.activeadd,this.data.num)
                    break;
                case "车场":
                    var activecar = event.target.id;
                    this.setData({ activecar });
                    this.setData({
                        num2:obj4[activecar]
                    })
                    console.log(activecar)
                    this.carFlowCycleWithData()
                    break;
                case "收银":
                    var activeSales = event.target.id;
                    this.setData({ activeSales });
                    this.setData({
                        salesdata:obj3[activeSales]
                    })
                    // let obj3={
                    //     '本周销售额':this.data.dataAllSales.weekSales>10000?(this.data.dataAllSales.weekSales/10000).toFixed(2):this.data.dataAllSales.weekSales,
                    //     '本月销售额':this.data.dataAllSales.monthSales>10000?(this.data.dataAllSales.monthSales/10000).toFixed(2):this.data.dataAllSales.monthSales,
                    //     '本年销售额':this.data.dataAllSales.yearSales>10000?(this.data.dataAllSales.yearSales/10000).toFixed(2):this.data.dataAllSales.yearSales,
                    // }
                    console.log('activeSales',activeSales)
                    if(activeSales=='本周销售额') {
                        this.setData({
                            salesdata1:this.data.dataAllSales.weekSales
                        })
                    }
                    if(activeSales=='本月销售额') {
                        this.setData({
                            salesdata1:this.data.dataAllSales.monthSales
                        })
                    }
                    if(activeSales=='本年销售额') {
                        this.setData({
                            salesdata1:this.data.dataAllSales.yearSales
                        })
                    }
                    console.log('salesdata1',this.data.salesdata1)
                    break;
            
                default:
                    break;
            }
            










        },
        getMemberData1: function (e) {
            util.ajax({
                url: "data-analysis/api/general/member/newMemberStatistics?type="+this.data.num,
                method: "POST",
                success: res => {
                    if (res.success) {
                        this.setData({
                            // totalNewMumber: res.data.totalNumberOfMembers
                            totalNewMumber: parseFloat(res.data.totalNumberOfMembers).toLocaleString()
                        })
                        console.log(3333333333,res.data.totalNumberOfMembers)
                    }
                    wx.hideLoading();
                },
                fail: error => {
                    wx.hideLoading();
                }
            })
        },
        getMemberData2: function (e) {
            util.ajax({
                url: "data-analysis/api/general/member/score",
                method: "POST",
                success: res => {
                    if (res.success) {
                        this.setData({
                        	totalScore: res.data.totalScore > 10000 ? (res.data.totalScore/10000).toFixed(2):res.data.totalScore
                        })
                        console.log(55555555555,res.data.totalScore)
                    }
                    wx.hideLoading();
                },
                fail: error => {
                    wx.hideLoading();
                }
            })
        },
        //车流量
        getCarData: function (e) {
            util.ajax({
                url: "data-analysis/api/parkingLotStatistics/vehicleAccessInformation",
                method: "POST",
                success: res => {
                    if (res.success) {
                        // 当天车流量入的/总车位数
                        let ftl = ((res.data.dayEntryData/this.data.totalSpace)*100).toFixed(2);
                        console.log('ftl',res.data.dayEntryData,this.data.totalSpace)
                        ftl = isNaN(ftl)?0:ftl;
                        this.setData({
                            dayAppearanceData: res.data.dayAppearanceData, //今日出
                            dayEntryData: res.data.dayEntryData>10000?(res.data.dayEntryData/10000).toFixed(2):res.data.dayEntryData, //今日入
                            ftl
                        })
                    }
                    wx.hideLoading();
                },
                fail: error => {
                    wx.hideLoading();
                }
            })
        },
        //车流 周月年
        getTrafficVolume: function (e) {
            util.ajax({
                url: "data-analysis/api/parkingLotStatistics/trafficVolume?type="+this.data.num1,
                method: "POST",
                success: res => {
                    if (res.success) {
                        console.log(res.data)
                        // this.setData({
                        //     trafficVolume: res.data.trafficVolume
                        // })
                    }
                    wx.hideLoading();
                },
                fail: error => {
                    wx.hideLoading();
                }
            })
        },
        carFlowCycleWithData: function (e) {
            util.ajax({
                url: "data-analysis/api/parkingLotStatistics/carFlowCycleWithData?type="+this.data.num2,
                method: "POST",
                success: res => {
                    if (res.success) {
                        console.log(res.data)
                        this.setData({
                            thisPeriodOfData: parseFloat(res.data.thisPeriodOfData).toLocaleString()
                        })
                    }
                    wx.hideLoading();
                },
                fail: error => {
                    wx.hideLoading();
                }
            })
        },
        parkingDataRevenueData: function (e) {
            util.ajax({
                url: "data-analysis/api/parkingLotStatistics/parkingDataRevenueData?type=0",
                method: "POST",
                success: res => {
                    if (res.success) {
                        console.log('今日收益',res.data)
                        this.setData({
                            // profit: res.data>10000?(res.data/10000):res.data
                            // profit: parseFloat(res.data).toLocaleString()
                            profit: res.data
                        })
                    }
                    wx.hideLoading();
                },
                fail: error => {
                    wx.hideLoading();
                }
            })
        },
    }
});

/***/ })

/******/ });