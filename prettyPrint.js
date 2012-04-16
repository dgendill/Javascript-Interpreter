/**
 * Takes an object structured in the NOTE Language and outputs using the desired output method.
 *
 * @param {Function} stdout An output function for instance document.write
 * @param {String} newline newline character default /\n
 * @returns {undefined}	
 */ 
var prettyPrint = function(stdout, newline) {
	newline = newline || "\n";
    for ( var b in results) {
        if (results.hasOwnProperty(b)) {
            stdout('{ ');
            var flag = false;         
            for ( var c in results[b]) {
                if (flag) {
                   stdout(', ');
                } else {
                   flag = true;
                }
                stdout(c + ' : ' + results[b][c]);        
            }
            stdout('}' + newline);
         }
    }
}