const mta = require('vendor/mta_analysis.js');
const config = require('config.js');
App({
  onLaunch: function (options) {
    /**
     * 初始化 MTA  检测
     */
    mta.App.init({
      "appID": config.mtaAppID,
      "eventID": config.mtaEventID,
      "statShareApp": true,
      "statReachBottom": true,
      "lauchOpts": options,
    });
    /**
     * 初始化云开发
     */
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
        env: config.envID
      })
    }
    /**
     * 获取屏幕高度
     */
    let { windowHeight } = wx.getSystemInfoSync();

    this.globalData = { windowHeight, is_administrator:false }
  }
})
