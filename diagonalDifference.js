
function diagonalDifference(arr) {
    //Sum holds the difference between the two diagonal...
    var sum = [0,0];
    var x = arr.length;
    //p and q hold the indices of the first and second diagonal respectively...
    var p,q; 
    arr.forEach((a,i) => {
       p = i;
        q = (x-1) - i; 
        
        sum[0] += a[p];
        sum[1] += a[q];
    });
    
    return Math.abs(sum.reduce((a,b) => a-b));
    
}