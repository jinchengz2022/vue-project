export default {
  install: (app, options) => {
    app.config.globalProperties.$translate = (key) => {
      return key.split('.').reduce((pre, cur) => {
        if(pre) {
          return pre[cur];
        }
      }, options)
    }
  }
}