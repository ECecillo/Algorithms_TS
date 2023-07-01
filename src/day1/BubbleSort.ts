export default function bubble_sort(arr: number[]): void {
    // Array from 0 to N
    // We need to compare and switch i and i+1, without going out from the array.
    // To ensure we stay in the right bonds we need to do the swap from i to n-1
    // Finally, we need to repeat the swap n times and for each iteration of swap
    // we will consider that the last item of the previous loop is sorted
    // In the end we should to the compare and swap btw two items and finish
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            // - i here represent the element at the end that are soted on the way
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
}

// Just extracting the logic to a function that can Handle swap operation on an array
// Because arr are passed by value not ref by default.
const swap = (array: number[], indexA: number, indexB: number): void => {
    const temp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = temp;
};
