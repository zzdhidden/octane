var outputs = [];
function output(str){
	outputs.push( str );
	if( typeof BenchmarkPrint !== "undefined" ) {
		BenchmarkPrint(str);
	} else if( typeof console !== "undefined" ) {
		console.info(str);
	} else if(typeof print !== "undefined" ) {
		print(str);
	}
}

var success = true;

function PrintResult(name, result) {
  output(name + ': ' + result);
}


function PrintError(name, error) {
  PrintResult(name, error);
  success = false;
}


function PrintScore(score) {
  if (success) {
    output('----');
    output('Score (version ' + BenchmarkSuite.version + '): ' + score);
  }
}


BenchmarkSuite.config.doWarmup = undefined;
BenchmarkSuite.config.doDeterministic = undefined;

BenchmarkSuite.RunSuites({ NotifyResult: PrintResult,
                           NotifyError: PrintError,
                           NotifyScore: PrintScore });

outputs;

