let baseUrl = "";   //这里是一个默认的url，可以没有
if (process.env.NODE_ENV === 'production') {

  if (process.env.VUE_APP_TITLE === 'test') {

    baseUrl = "https://api.qingcxt.com/"

  } else if (process.env.VUE_APP_TITLE === 'prod') {

    baseUrl = "https://shiyi.qingcxt.com/"

  } else {
    baseUrl = "https://shiyi.qingcxt.com/"
  }

}
export default baseUrl;