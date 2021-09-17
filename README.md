## MBO project 结构
```
sgsd-xcx
├─ .DS_Store
├─ app.js
├─ app.json
├─ app.wxss
├─ components
│  ├─ component
│  │  ├─ component.js
│  │  ├─ component.json
│  │  ├─ component.wxml
│  │  └─ component.wxss
│  ├─ navBar
│  │  ├─ app.js
│  │  ├─ navBar.js
│  │  ├─ navBar.json
│  │  ├─ navBar.wxml
│  │  ├─ navBar.wxss
│  │  └─ package.json
│  ├─ pagination
│  │  ├─ pagination.js
│  │  ├─ pagination.json
│  │  ├─ pagination.wxml
│  │  └─ pagination.wxss
│  ├─ select
│  │  ├─ select.js
│  │  ├─ select.json
│  │  ├─ select.wxml
│  │  └─ select.wxss
│  ├─ tabs
│  │  ├─ index.js
│  │  ├─ index.json
│  │  ├─ index.wxml
│  │  └─ index.wxss
│  └─ weui-wxss
│     └─ dist
│        └─ style
│           └─ weui.wxss
├─ config.js
├─ dataView
│  ├─ .DS_Store
│  └─ pages
│     ├─ carGout
│     │  ├─ carGout.js
│     │  ├─ carGout.json
│     │  ├─ carGout.wxml
│     │  └─ carGout.wxss
│     ├─ consumption
│     │  ├─ consumption.js
│     │  ├─ consumption.json
│     │  ├─ consumption.wxml
│     │  └─ consumption.wxss
│     ├─ consumptionTop
│     │  ├─ consumptionTop.js
│     │  ├─ consumptionTop.json
│     │  ├─ consumptionTop.wxml
│     │  └─ consumptionTop.wxss
│     ├─ distribution
│     │  ├─ distribution.js
│     │  ├─ distribution.json
│     │  ├─ distribution.wxml
│     │  └─ distribution.wxss
│     ├─ earlyWarning
│     │  ├─ earlyWarning.js
│     │  ├─ earlyWarning.json
│     │  ├─ earlyWarning.wxml
│     │  └─ earlyWarning.wxss
│     ├─ fee
│     │  ├─ fee.js
│     │  ├─ fee.json
│     │  ├─ fee.wxml
│     │  └─ fee.wxss
│     ├─ groundTop
│     │  ├─ groundTop.js
│     │  ├─ groundTop.json
│     │  ├─ groundTop.wxml
│     │  └─ groundTop.wxss
│     ├─ income
│     │  ├─ income.js
│     │  ├─ income.json
│     │  ├─ income.wxml
│     │  └─ income.wxss
│     ├─ indexInfo
│     │  ├─ indexInfo.js
│     │  ├─ indexInfo.json
│     │  ├─ indexInfo.wxml
│     │  └─ indexInfo.wxss
│     ├─ memNum
│     │  ├─ memNum.js
│     │  ├─ memNum.json
│     │  ├─ memNum.wxml
│     │  └─ memNum.wxss
│     ├─ merchants
│     │  ├─ merchants.js
│     │  ├─ merchants.json
│     │  ├─ merchants.wxml
│     │  └─ merchants.wxss
│     ├─ monitor
│     │  ├─ monitor.js
│     │  ├─ monitor.json
│     │  ├─ monitor.wxml
│     │  └─ monitor.wxss
│     ├─ rentTop
│     │  ├─ rentTop.js
│     │  ├─ rentTop.json
│     │  ├─ rentTop.wxml
│     │  └─ rentTop.wxss
│     ├─ revenue
│     │  ├─ revenue.js
│     │  ├─ revenue.json
│     │  ├─ revenue.wxml
│     │  └─ revenue.wxss
│     └─ statistics
│        ├─ statistics.js
│        ├─ statistics.json
│        ├─ statistics.wxml
│        └─ statistics.wxss
├─ ec-canvas
│  ├─ ec-canvas.js
│  ├─ ec-canvas.json
│  ├─ ec-canvas.wxml
│  ├─ ec-canvas.wxss
│  ├─ echarts.js
│  └─ wx-canvas.js
├─ example
│  └─ common.wxss
├─ images
├─ package-lock.json
├─ pages
│  ├─ analysis
│  │  ├─ analysis.js
│  │  ├─ analysis.json
│  │  ├─ analysis.wxml
│  │  └─ analysis.wxss
│  ├─ coupon
│  │  ├─ coupon.js
│  │  ├─ coupon.json
│  │  ├─ coupon.wxml
│  │  └─ coupon.wxss
│  ├─ index
│  │  ├─ index.js
│  │  ├─ index.json
│  │  ├─ index.wxml
│  │  └─ index.wxss
│  ├─ indexInfo
│  │  ├─ indexInfo.js
│  │  ├─ indexInfo.json
│  │  ├─ indexInfo.wxml
│  │  └─ indexInfo.wxss
│  ├─ indexinfo1
│  │  ├─ indexinfo1.js
│  │  ├─ indexinfo1.json
│  │  ├─ indexinfo1.wxml
│  │  └─ indexinfo1.wxss
│  ├─ indexinfo3
│  │  ├─ indexinfo3.js
│  │  ├─ indexinfo3.json
│  │  ├─ indexinfo3.wxml
│  │  └─ indexinfo3.wxss
│  ├─ indexinfo4
│  │  ├─ indexinfo4.js
│  │  ├─ indexinfo4.json
│  │  ├─ indexinfo4.wxml
│  │  └─ indexinfo4.wxss
│  ├─ login
│  │  ├─ login.js
│  │  ├─ login.json
│  │  ├─ login.wxml
│  │  └─ login.wxss
│  ├─ memData
│  │  ├─ memData.js
│  │  ├─ memData.json
│  │  ├─ memData.wxml
│  │  └─ memData.wxss
│  └─ user
│     ├─ user.js
│     ├─ user.json
│     ├─ user.wxml
│     └─ user.wxss
├─ project.config.json
├─ sitemap.json
├─ toast
│  ├─ toast.js
│  └─ tosat.wxml
└─ utils
   ├─ md5.js
   ├─ page.js
   ├─ promisify.js
   ├─ util.js
   ├─ utils.wxs
   └─ wxcharts.js

```