const isDev = process.env.NODE_ENV === 'development'

export function autoMatch(prefix){
  let baseUrl = ''
  if(isDev) {
    baseUrl = `/${prefix || 'default'}/`
  } else {
    switch(prefix) {
      case 'dev': 
        baseUrl = window.LOCAL_APPLICATION.DEV
        break
      case 'test':
        baseUrl = window.LOCAL_APPLICATION.TEST
        break
      case 'production':
        baseUrl = window.LOCAL_APPLICATION.PR
        break
      default:
        baseUrl = window.LOCAL_APPLICATION.DEFAULT
    }
    return baseUrl
  }
}