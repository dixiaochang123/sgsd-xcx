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

const util = require('../../utils/util');
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
        totalSpace:{ type: Number, value: 0 },
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
        monthCustomerPrice:'',

        ftl:0


    },
    attached() {
        
    },
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
            this.setData({
                flowdata:this.data.dataAllFlow.weekPassengerFlow>10000?(this.data.dataAllFlow.weekPassengerFlow/10000).toFixed(2):this.data.dataAllFlow.weekPassengerFlow
            })
        },
        dataAllMember: function dataAllMember(val) {
            this.setData({
                memberdata:this.data.dataAllMember.totalNumberOfMaleMembers >10000?(this.data.dataAllMember.totalNumberOfMaleMembers/10000).toFixed(2):this.data.dataAllMember.totalNumberOfMaleMembers
            })
            this.getMemberData1()
            this.getMemberData2()
            this.getCarData()
            this.carFlowCycleWithData()
            this.parkingDataRevenueData()
        },
        dataAllSales: function dataAllSales(val) {
            this.setData({
                salesdata:this.data.dataAllSales.weekSales,
                // totalNewMumber:this.data.dataAllSales.totalNewMumber,
                monthCustomerPrice:this.data.dataAllSales.monthCustomerPrice
            })
        },
        dataAllMarket: function dataAllMarket(val) {
            this.setData({
                shoundAmount:this.data.dataAllMarket.shoundAmount,
                receivableAmount:this.data.dataAllMarket.receivableAmount
            })
        },
        totalSpace: function totalSpace(val) {
            
        },
    },
    lifetimes: {
        created: function created() {}
    },
    methods: {
        handleTabClick: function handleTabClick(e) {
            var index = e.currentTarget.dataset.index;
            this.setData({ activeTab: index });
            this.triggerEvent('tabclick', { index: index });
        },
        handleSwiperChange: function handleSwiperChange(e) {
            var index = e.detail.current;
            this.setData({ activeTab: index });
            this.triggerEvent('change', { index: index });
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
                        url: '/dataView/pages/indexInfo/indexInfo'
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
                        url: '/dataView/pages/statistics/statistics'
                    })
                    
                    break;
                case '商管1':
                    wx.navigateTo({
                        url: '/dataView/pages/distribution/distribution'
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
                '本周销售额':this.data.dataAllSales.weekSales,
                '本月销售额':this.data.dataAllSales.monthSales,
                '本年销售额':this.data.dataAllSales.yearSales
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
                        flowdata:obj[activeflow]
                    })
                    break;
                case "会员":
                    var activeMember = event.target.id;
                    this.setData({ activeMember });
                    this.setData({
                        // memberdata:obj1[activeMember]
                        memberdata:obj1[activeMember] >10000?(obj1[activeMember]/10000).toFixed(2):obj1[activeMember]
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
                            totalNewMumber: res.data.totalNumberOfMembers>10000?(res.data.totalNumberOfMembers/10000).toFixed(2):res.data.totalNumberOfMembers
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
                            dayEntryData: parseFloat(res.data.dayEntryData).toLocaleString(), //今日入
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
                            profit: res.data>10000?(res.data/10000):res.data
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