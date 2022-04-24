const chalk = require('chalk');
const path = require('path')
const fs = require('fs');
const resolve = (...file) => path.resolve(__dirname, ...file)
const log = message => console.log(chalk.green(`${message}`));
const successLog = message => console.log(chalk.blueBright(`${message}`));
const errLog = message => console.log(chalk.red(`${message}`));
const { vueTemplate } = require('./template')
console.log(process.argv.splice(2))
const _ = process.argv.splice(2)[0] === '-com'
const createVue = (path, data) => {
    if(fs.existsSync(path)){
        errLog('文件已存在！')
        return
    }
    return new Promise((res,rej) => {
        fs.writeFile(path, data, 'utf8', err => {
            if(err){
                errLog(err.message)
                rej(err)
            } else {
                res(true)
            }
        })

    })
}
_ ?
    (log('请输入要生成的组件名称，如需生成全局组件，请加 global/ 前缀'),log('全局组件'))
    : (log('请输入要生成的页面组件名称，会生成在views目录下'),log('页面组件'))

let componentName = ''
process.stdin.on('data', async chunk => {

    const inputName = String(chunk).trim().toString()
    // 根据不同的 类型组件，分别处理
    if(_) {
        // 组件目录路径
        const componentDirectory = resolve('src/components', inputName)
        // vue组件路径
        const vueName = resolve(componentDirectory, 'index')
        
        const hasComponentDirectory = fs.existsSync(componentDirectory)
        // 判断该目录是否已存在
        if(hasComponentDirectory) {
            log(`${inputName}组件目录已存在，请重新输入`)
            return
        } else {
            log(`正在生成component目录${inputName}`)
            await createDirectory(componentDirectory)
        }
        try {
            if(inputName.includes('/')){
                const inputArr = inputName.split('/')
                componentName = inputArr[inputArr.length -1]
            } else {
                componentName = inputName
            }
            log(`正在生成vue文件${componentName}`)
            await createVue((componentName+ '.vue'), vueTemplate(componentName))
        } catch (error) {
            errLog(error.message)
        }
    } else {
        const inputArr = inputName.split('/')
        const directory = inputArr[0]
        const componentName = inputArr[inputArr.length -1]
        log(`${directory}+${componentName}文件夹和组件名称`)
        // 页面组件目录
        const componentDirectory = resolve('../../src/views',directory)
        // vue组件
        const vueName = resolve(componentDirectory, `${componentName}`)
        const hasComponentDirectory = fs.existsSync(componentDirectory)
        // 判断该目录是否已存在
        if(hasComponentDirectory) {
            log(`${componentDirectory}组件目录已存在，请重新输入`)
            return
        } else {
            log(`正在生成component目录${componentDirectory}`)
            await createDirectory(componentDirectory)
        }
        try {
            log(`正在生成vue文件${componentName}`)
            await createVue((componentDirectory+'/'+componentName+'.vue'), vueTemplate(componentName))
        } catch (error) {
            errLog(error.message)
        }
    }
    process.stdin.emit('end')
})

process.stdin.on('end', () => {
    log('exit')
    process.exit()
})
function createDirectory(directory) {
    return new Promise((res, rej) => {
        mkdir(directory,function() {
            res(true)
        })
    })
}

//递归创建目录

function mkdir(directory, callback) {
    let exists = fs.existsSync(directory)
    if(exists) {
        callback()
    } else {
        mkdir(path.dirname(directory), function () {
            fs.mkdirSync(directory)
            callback()
        })
    }
}