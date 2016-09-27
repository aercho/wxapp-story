//picselect.js
//获取应用实例
var app = getApp()
Page( {
  data: {
    images:[],
    date:new Date(),
    title:'11',
    story:'',
    toastHidden:true
  },
   formSubmit: function(e) {
    var data=e.detail.value;
    console.log('form发生了submit事件，携带数据为：');
    this.setStore(data);
    this.formReset();
    this.toastChange(null,false);
  },
  /**
   * 保存story信息
   */
  setStore:function(data){
    wx.getStorage({
      key: 'storyData',
      success: function(res) {
          var tempData=[];
          if(!res.data || res.data===''){
            tempData=[];
          }else{
            tempData=res.data;
          }
          console.log(tempData)
          tempData.push(data)
          wx.setStorage({
            key:"storyData",
            data:tempData
          });
      },
      fail:function(err){
        console.log(err)
         var tempData=[data];
         wx.setStorage({
            key:"storyData",
            data:tempData
          });
      }
    })
   
  },
  /**
   * 清除缓存
   */
  clearStorage:function(){
    wx.clearStorage();
  },
  formReset: function() {
    var data={
      images:[],
      date:'',
      title:'',
      story:''
    };
    this.setData(data);
  },
  toastChange:function(e,value){
    var hidden=e?!e.detail.value:value;
    console.log(hidden)
    var obj={
      toastHidden:hidden
    }
    this.setData(obj)
  },
  //事件处理函数
  chooseImage: function() {
    var that=this;
    wx.chooseImage( {
      count: 1, // 默认9
      sizeType: [ 'original', 'compressed' ], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: [ 'album', 'camera' ], // 可以指定来源是相册还是相机，默认二者都有
      success: function( res ) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var obj={
          images:res.tempFilePaths
        }
        that.setData(obj)
      }
    })
  },
  onLoad: function() {
    console.log( 'onLoad' )
    var that = this
  }
})
