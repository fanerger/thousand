# vue 千分位 过滤器

```js
export default function thousandSep (params) {
  if (params === null || params === undefined) {
    return null
  } else if (isNaN(params)) {
    return 'NaN'
  } else {
    let num = params.toString()
    if (/^-?\d+\.?\d+$/.test(num)) {
      if (/^-?\d+$/.test(num)) {
        num = num.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      } else {
        let numarray = num.split('.')
        let numbefore = numarray[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        num = numbefore + '.' + numarray[1]
      }
    }
    return num
  }
}
```
 
main.js注入
```js
import thousand from './filters/thousand'
Vue.filter('thousandSep', thousand)
```

//页面中使用

{{money | thousandSep}}
