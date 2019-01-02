const Util = require('util');
const sleep = Util.promisify(setTimeout);

module.exports = {
    async taskOne(){
        try{
            throw new Error('Algún problema ficticio');
            await sleep(4000);
            return '1';
        } catch(e) {
            console.log(e);
        }
        
    },
    async taskTwo(){
        try {
            await sleep(2000);
            return '2'
        } catch (error) {
            console.log(error);
        }
    }
}