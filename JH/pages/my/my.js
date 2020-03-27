
//获取应用实例
const app = getApp();
const nowData = app.globalData.link;
Page({
  data: {
    userInfo: {},
  },

  onLoad: function () {
    this.getinfo();
  },
  getinfo:function(){
    if (app.globalData.userInfo != null) {
      this.setData({
        userInfo: app.globalData.userInfo,
      })
    } else {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
          })
         }
      })
    }
  },
  collection_view:function(){
    wx.navigateTo({
      url: 'collection_view/collection_view',
    })
  }
})
