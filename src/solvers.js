/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, 
// with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = new Board({'n': n});
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      solution.togglePiece(i,j);
      if (solution.hasAnyRooksConflicts()) {
        solution.togglePiece(i, j);
      }
    }
  }  
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution.rows()));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solution = new Board({ 'n': n });
  var solutionCount = 0; //fixme




  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({'n' : n});
  var numQueens = 0;
  if (n === 0) {
    return [];
  }
   if (n === 1) {
    return [[1]];
  }
  if (n === 2 || n === 3) {
    return solution.rows();
  }
  if (n >= 4) {
    for(var r = 0; r < solution.rows(0).length; r++) { //1st Row
      if (numQueens !== n) {
        for (var i = 0; i < n; i++) {  //Check board
          for (var j = 0; j < n; j++) {
            solution.togglePiece(i,j);
            numQueens +=1;
            if(solution.hasAnyQueensConflicts()) {
              solution.togglePiece(i,j);  
              numQueens -=1;
            }
            }
          }
        }
          if (numQueens === n) {
            return solution.rows();
          }
      }
            
  }



  //if n >= 4

  //loop through indexes of 1st row
    //check/toggle the board
    //if n !== n

  

  // if (n >= 4) {
  //   for(var r = 0; r < solution.rows(0).length; r++) { //loop through the 1st Row
  //     if (numQueens !== n) {
  //       for (var i = 0; i < n; i++) {  //Check board
  //         for (var j = 0; j < n; j++) {
  //           solution.togglePiece(i,j);
  //           numQueens +=1;
  //           if(solution.hasAnyQueensConflicts()) {
  //             solution.togglePiece(i,j);  
  //             numQueens -=1;
  //           }
  //           }
  //         }
  //       }
  //         if (numQueens === n) {
  //           return solution.rows();
  //         }
  //     }
            
  // }



 
    
  //run function that checks for solution (at that index)
    
  // var checkBoard = function(startIndex) {

  //   for (var i = 0; i < n; i++) {
  //     for (var j = 0; j < n; j++) {
  //       solution.togglePiece(i,j);
  //       numQueens +=1;
  //       if(solution.hasAnyQueensConflicts()) {
  //         solution.togglePiece(i,j);  
  //         numQueens -=1;
  //       }
  //       if (numQueens=== n) {
  //         return solution.rows();
  //       }
  //       if (numQueens !== n) {
  //         solution.isSolution()
  //       }
  //     }
  //   }
  // }


  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
   return solution.rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
