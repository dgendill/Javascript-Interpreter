/**
 * Compiles the made up music language MUS into the madeup music language NOTE.
 *
 * @param {Object} musexpr An object structured in the MUS Language.
 * @returns {Object} Returns an object sructured in the NOTE Language.
 */
var compile = function (musexpr) {
    var time = 0;
    var notes = [];
	duration = 0;
    
    var section = function(expr, increment) {
		if (expr.tag === 'seq') {
			section(expr.left, true);
			section(expr.right, true);
		} else if (expr.tag === 'par') {
			section(expr.left, false);
			section(expr.right, true);
		} else {			
			var toReturn = {
				tag:expr.tag,
				pitch:expr.pitch,
				start:time,
				dur:expr.dur
			};
			//duration = (expr.dur > duration) ? expr.dur : duration;
			if (increment) {
				time = time + expr.dur;
				//duration = 0;				
			}
			notes.push(toReturn);
		}
    };
	section(musexpr);
    return notes;
};

