const app = getApp();

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatDate = (date,Delimiter)=>{
  Delimiter = Delimiter || '-'
  const year = date.getFullYear();
  const month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0"+ (date.getMonth() + 1);
  const day = date.getDate() > 9 ? date.getDate() : "0" + date.getDate();
  return year + Delimiter + month + Delimiter + day;
}

const formatMonth = (date,Delimiter)=>{
  Delimiter = Delimiter || '-';
  const year = date.getFullYear();
  const month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0"+ (date.getMonth() + 1);
  return  year + Delimiter + month;
}
const formatDateText = (text,Delimiter)=>{
  Delimiter = Delimiter || '-'
  if(text.length == 8){
    let year = text.slice(0,4);
    let month = text.slice(4,6);
    let day = text.slice(6,8);
    return year + Delimiter + month + Delimiter + day
  }
}

const getNowYear = (date,Delimiter) => {
  Delimiter = Delimiter || '-';
  const year = date.getFullYear()
  const month = '01'
  const day = '01'
  return [year, month,day].map(formatNumber).join(Delimiter)
}
const getNowDate = (date,Delimiter) => {
  Delimiter = Delimiter || '-';
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return [year, month,day].map(formatNumber).join(Delimiter)
}



const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const navigateTo = function(url){
  wx.navigateTo({
    url: url,
    success:()=>{
      wx.hideLoading()
    }
  })
}


const ajax = sendMsg =>{
  if(!sendMsg.url){
    console.warn("请求未携带请求地址");
    return;
  }
  const baseUrl = app.globalData.baseUrl;


  wx.request({
    url: baseUrl+sendMsg.url,
    data: sendMsg.data,
    dataType: sendMsg.dataType||'json',
    header: {
      "content-type":sendMsg.contentType||'application/json',
      "Cookie":app.globalData.sessionid
    },
    method: sendMsg.method,
    success: (res) => {
      sendMsg.success?sendMsg.success(res.data):'';
    },
    fail: (err) => {
      sendMsg.fail?sendMsg.fail(err):console.log('url:',sendMsg.url,'error:',err);
    },
  })
}

const axiseFormatter = value=>{
  let text = ''
  if(value<10000){
    text = value;
  }else if (value>= 10000 && value < 100000000){
    text =  (value/10000) +"万";
  }else if (value >= 100000000) {
    text =  (value/100000000) +"亿";
  }
  return text;
}

const sortOther = (list,value,name)=>{
  let arr = [],index = 0;
  for(let i = 0 ; i < list.length ; i++){
    if(list[i][name] == "其他"){
      index = i;
      continue
    }
    arr.push(list[i]);
  }
  arr.push(list[index]);
  return arr;
}


module.exports = {
  formatTime: formatTime,
  ajax,
  navigateTo,
  formatDate,
  formatMonth,
  formatDateText,
  getNowDate,
  getNowYear,
  axiseFormatter,
  sortOther,
}