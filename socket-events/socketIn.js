exports = module.exports = function(io){
	io.on('connection', function(client) {  
        console.log('Client connected...' + new Date());

        client.on('join', function(data) {
        console.log(data+ new Date());
        });

        });
}