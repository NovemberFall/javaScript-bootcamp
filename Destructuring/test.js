// list matching
var [a, , b] = [1, 2, 3];

console.log(a + " " + b);

// object matching
var {
    op: a,
    lhs: { op: b },
    rhs: c
} = getASTNode()

// object matching shorthand
// binds `op`, `lhs` and `rhs` in scope
var { op, lhs, rhs } = getASTNode()


console.log(op + " " + lhs + " " + rhs);