# thousand
vue 千分位 过滤器   大额金额使用
 
//main.js注入

import thousand from './filters/thousand'

Vue.filter('thousandSep', thousand)

//页面中使用

{{totalFkAmount | thousandSep}}
