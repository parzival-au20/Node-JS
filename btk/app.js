const Logger = require('./logger');
const logger = new Logger();

logger.on('connection',function(args){
    console.log('baglantı kuruldu.',args);
});

logger.log('User login oldu.');