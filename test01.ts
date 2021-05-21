function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let array: number[] = nums1.concat(nums2);
    array.sort((a: number, b: number) => {
        if(a < b){
            return -1;
        }else{
            return 1;
        };
    });
    let len: number = array.length;
    let ispair: boolean = len % 2 === 0;
    let mid_index: number = len/2;
    if(ispair){
        let left: number = array[mid_index - 1];
        let right: number = array[mid_index];
        return (left + right)/2; // retorna el promedio de los valores centrales
    }else{
        mid_index = Math.floor(mid_index); // redondea decimales
        return array[mid_index];
    };
};