process.stdin.resume();
process.stdin.setEncoding('utf-8');

var input = '';

process.stdin.on('data', function (chunk){
    console.log('chunck', chunk);
    input += chunk;
    process.stdout.write('data: ' + chunk);
});

process.stdin.on("end", function () {
    // When we reach here, we are done with inputting things according to our wish.
    // Now, we can do the processing on the input and create a result.
    process.exit();
    process.stdout.write('ok');

});

process.stdin.on("resume", function () {
    // When we reach here, we are done with inputting things according to our wish.
    // Now, we can do the processing on the input and create a result.
    process.stdout.write('resume');
});

process.stdin.on("pause", function () {
    // When we reach here, we are done with inputting things according to our wish.
    // Now, we can do the processing on the input and create a result.
    process.stdout.write('pause');
});

process.on('SIGINT', function(){
    process.stdout.write('\n end process \n');
    process.exit();
});


