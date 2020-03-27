// pages/find/details_view2/details_view2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  suoyi:function(){
    wx.navigateTo({
      url: 'suoyi/suoyi',
    })
  },
  shijin:function(){
wx.navigateTo({
  url: 'shijin/shijin',
})
  },
  qijin:function(){
    wx.navigateTo({
      url: 'qijin/qijin',
    })
  },
  zhongxibu:function(){
    wx.navigateTo({
      url: 'zhongxibu/zhongxibu',
    })
  },
  yunju:function(){
    wx.navigateTo({
      url: 'yunju/yunju',
    })
  },
  ganjin:function(){
    wx.navigateTo({
      url: 'ganjin/ganjin',
    })
  },
  lanman:function(){
    wx.navigateTo({
      url: 'lanman/lanman',
    })
  }
})