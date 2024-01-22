// Immediately Invoked Funciton Expression (IIFE)

function chai(){
    console.log(`DB COnnected`)
}

// chai()
// this is IIFE example
(function chai1(){
    console.log(`DB COnnected`)
}) ();

(() => {
    console.log(`DB COnnected 2`)
}) ()