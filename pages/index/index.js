const app = getApp()

Page({
  data: {

  },
  bindTap() {
    let query = wx.createSelectorQuery()
    let clas = "#" + 'mines';
    query.select(clas).boundingClientRect()
    query.exec(res => {
      console.log(res);
    })
  },
  onLoad() {

  },
})