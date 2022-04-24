
const apis = require.context('./',true, /index\.js$/)

const contents = []

console.log(apis.keys(), '//111111111111');
apis.keys().map((item) => {
  let name = item.match(/.*\/(.*)\/index\.js$/)
  if(name){
    name = name[1]
    let temp = {}
    temp[name] = apis(item)
    contents.push(temp);
  }
});
console.log(...contents, 'apisssssss');
export function login(){
  console.log('login-apis');
}

