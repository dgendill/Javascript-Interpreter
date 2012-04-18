/**
  * @module
  */
var compiler = function() {
   /**
    * Compiles the made up music language MUS into the madeup music language NOTE.
    *
    * @param {Object} musexpr An object structured in the MUS Language.
    * @returns {Object} Returns an object sructured in the NOTE Language.
    */
  this.compile = function (musexpr) {
      var time = 0;
      var notes = [];
      var duration = 0;
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
              if (increment) {
                  time = time + expr.dur;
              }
              notes.push(toReturn);
          }
      };
      section(musexpr);
      return notes;
    };
    
  };
 }

