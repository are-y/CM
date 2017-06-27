//logs.js
import * as util from '../../utils/util.js';

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function () {
        return util.formatTime(new Date())
      })
    })
  }
})
