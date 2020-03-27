// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    background: ['../../tabbar/top4.jpg', '../../tabbar/top2.jpg', 'https://i01piccdn.sogoucdn.com/18d587312f2b9712', 'https://img04.sogoucdn.com/net/a/04/link?url=https%3A%2F%2Fi03piccdn.sogoucdn.com%2Ff6eee1c92c46f639&appid=122'],
    contentItems: ['', '', '', ''],

    listItem: ['', '', '', '', '', ''],
    

  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '/pages/index/bindViewTap/bindViewTap'

    })
  }, 
  bindsearch: function () {
    wx.navigateTo({
      url: '../index/search/search'

    })
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
    console.log(this.data.guinness);
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

//跳转至第三方页面
  orgin:function(){
    wx.navigateTo({
      url: '/pages/index/out/origin/origin',
    })
  },
  history:function(){
    wx.navigateTo({
      url: '/pages/index/out/history/history',
    })
  },
  funny:function(){
    wx.navigateTo({
      url: '/pages/index/out/funny/funny',
    })
  },
  courtyard:function(){
    wx.navigateTo({
      url: '/pages/index/out/courtyard/courtyard',
    })
  },
  photo:function(){
    wx.navigateTo({
      url: '/pages/index/out/photo/photo',
    })
  },
  celebrity:function(){
    wx.navigateTo({
      url: '/pages/index/out/celebrity/celebrity',
    })
  }
})