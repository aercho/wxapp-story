//setting.js
//获取应用实例
var app = getApp()
Page( {
    data:{
        modalHidden:true
    },
  //清除缓存
  clearStorage:function(){
     this.setData({modalHidden:false});
     
  },
  onLoad: function() {
    console.log( 'onLoad' )
  },
  modalChange:function(e){
      if(e.type==="confirm"){
          wx.clearStorage();
      }
      this.setData({modalHidden:true});
  }
})