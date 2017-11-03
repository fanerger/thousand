// 千分位分隔符
export default function thousandSep (params) {
  // return (params || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
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
