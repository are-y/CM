import * as global from "../js/global";

export let loginLog=function(param){
  wx.request({
    url: global.ctx+'loginLog.json',
    data:{
      user:param.data.user
    },
    success: (param.success != null && param.success != undefined) ? param.success : function (s) { },
    fail: (param.fail != null && param.fail != undefined) ? param.fail : function (f) { },
    complete: (param.complete != null && param.complete != undefined) ? param.complete : function (c) { }
  })
}