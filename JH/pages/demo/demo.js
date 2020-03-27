// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:''

  },one: function () {
    wx.navigateTo({
      url: '../demo/one/one'

    })
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../find/details_hutong/hutong'

    })
  },
  bindnum:function(){
    wx.navigateTo(
      {url:'../demo/number/number'}
    )
    
  },
  click: ()=>{
    wx.showToast({
      title: '',
    })
  },
  /**,
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
  //跳转至约拍页面
  about_beat:function(){
    wx.navigateTo({
      url: 'about_beat/about_beat',
    })
  },
  bindViewTap1: function () {
    wx.navigateTo({
      url: '../demo/question/question'

    })
  }

})