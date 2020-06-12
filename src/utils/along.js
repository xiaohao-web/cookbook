//公共方法
class Along {

  //将对象进行序列化
  transformRequest(o) {
    let paramsString = '';
    for (let key in o) {
      paramsString += key + '=' + o[key] + '&';
    }

    return paramsString;
  }
  

}

export const along = new Along();