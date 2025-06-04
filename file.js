const file = require('fs').promises
const path = require('path')
const fileops = async () => {
    try {
        const data = await file.readFile(path.join(__dirname , 'text.txt'), 'utf8')
        console.log(data)
        await file .writeFile(path.join(__dirname,'text.txt'),'hi i am free fire player')
        console.log ("write is complete")
        const text = await  file.readFile(path.join(__dirname,'text.txt'),'utf8')
        console.log (text)
        await file .appendFile(path.join(__dirname,'text.txt'),' also i am anime lover')
        console.log('append complete')
    } catch (error) {
        console.error('file is not find', error.message)
    }
}
fileops()