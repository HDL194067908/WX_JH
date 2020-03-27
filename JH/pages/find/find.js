// pages/find/find.js
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
  details_view2: function () {
    wx.navigateTo({
      url: 'details_view2/details_view2'
    })
  },
  details_view3: function () {
    wx.navigateTo({
      url: 'details_view3/details_view3'
    })
  },
  // 展示相关主题胡同
  details_view:function(){
    wx.navigateTo({
      url: 'details_view/details_view'
    })
  },
  //约拍跳转
  about_beat:function(){
    wx.navigateTo({
      url: 'about_beat/about_beat'
    })
  },
  //跳转至胡同详细简介
  hutong:function(){
    wx.navigateTo({
      url: 'details_hutong/hutong',
    })
  },
  details_view4: function () {
    wx.navigateTo({
      url: 'details_view4/details_view4'
    })
  },
  details_view5: function () {
    wx.navigateTo({
      url: 'details_view5/details_view5'
    })
  },
  details_view7: function () {
    wx.navigateTo({
      url: 'details_view7/details_view7'
    })
  }
})