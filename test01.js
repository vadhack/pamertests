"use strict";
function findMedianSortedArrays(nums1, nums2) {
    var array = nums1.concat(nums2);
    array.sort(function (a, b) {
        if (a < b) {
            return -1;
        }
        else {
            return 1;
        }
        ;
    });
    var len = array.length;
    var ispair = len % 2 === 0;
    var mid_index = len / 2;
    if (ispair) {
        var left = array[mid_index - 1];
        var right = array[mid_index];
        return (left + right) / 2; // retorna el promedio de los valores centrales
    }
    else {
        mid_index = Math.floor(mid_index); // redondea decimales
        return array[mid_index];
    }
    ;
}
;
