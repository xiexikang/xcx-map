// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [],  //地图参数：
    latitude: "", //纬度 
    longitude: "",  //经度
  },
  regionchange(e) {
    //console.log(e)
  },
  markertap(e) {
    //console.log(e)
  },
  controltap(e) {
    //console.log(e)
  },

  //获得地图
  getMyMap(e) {
    let that = this;
    //自行查询经纬度 http://www.gpsspg.com/maps.htm
    const mapLatitude = 23.1194300000,
      mapLongitude = 113.3212200000;
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        // 当前自己的经纬度 res.latitude，res.longitude
        that.setData({
          latitude: mapLatitude,
          longitude: mapLongitude,
          markers: [{
            id: "0",
            latitude: mapLatitude,
            longitude: mapLongitude,
            iconPath: "https://xcx.quan5fen.com/Public/xcx-hitui/image/imgs-jyh/map-ico.png",
            width: 40,
            height: 40,
            callout: {
              'display': 'ALWAYS', 'fontSize': '30rpx', 'content': '广州珠江新城',
              'padding': '8rpx', 'boxShadow': '0 0 5rpx #333', 'borderRadius': '4rpx'
            }
          }],
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMyMap()
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

  }
})