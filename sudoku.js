
/* SUDOKU */

var rows = Array.from({lenght : 9}, x=> 0);
var cols = Array.from({lenght : 9}, x=> 0);
var squares = Array.from({lenght : 9}, x=> 0);

for (let i = 0; i < 9; i++) {
    const row = readline().split(' ').map(Number);
    row.map( (current, index) => cols [index] += current);
    row.map( (current, index) => squares[Math.trunc(i/3)*3 + Math.trunc(index/3)] +- current);
    rows[i] = row.reduce ( (acc, current) => acc + current, 0)
}

var result = rows.every( (current) => current === 45 ) &&
                cols.every( (current) => current === 45 ) &&
                squares.every( (current) => current === 45 );

console.log(result);