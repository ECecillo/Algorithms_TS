# Algorithms_TS
Notes taken following the lesson : https://frontendmasters.com/courses/algorithms

# Arrays

An array is contiguous space in memory where we can put stuff.

![[Pasted image 20230701092018.png]]

Depending on the type of the **Array**, assigning values will be different because of how we move into the array : 
```js
const a = new ArrayBuffer(6);
// result
> a 
> ArrayBuffer { [Uint8Contents]: <00 00 00 00 00 00>, byteLength: 6 }

// Here we create a "view" of 8 bits,
// Which says that every single time we increase the offset
// We take the width of 8 bits (size of 1 number here) and
// We multiply that by the offset.
const a8 = new Uint8Array(a)
> a8
> Uint8Array(6) [ 0, 0, 0, 0, 0, 0 ]

a8[2] = 42
> 42

a8
> Uint8Array(6) [ 0, 0, 42, 0, 0, 0 ]

a
> ArrayBuffer { [Uint8Contents]: <00 00 2a 00 00 00>, byteLength: 6 }

// What happen here is that we told the computer we want to override
// the value at addres a8[2] with value 42, so our offset is 2 (index)
// and we multiply that by the size of how much a number is in the 
// array wich is 8bits


// 8 * 2 = 16 + 1 
// (because 16 is in the range of memory of the last number we add 1)
// Finally, we can set 42 in hexadecimal in the memory range of 
// 17 <-> 23

const a16 = new Uint16Array(a)

a
> ArrayBuffer { [Uint8Contents]: <00 00 2a 00 00 00>, byteLength: 6 }

a16
> Uint16Array(3) [ 0, 42, 0 ]

// Here we move 16 bits by 16 bits.
a16[2] = 69
> 69

a16
> Uint16Array(3) [ 0, 42, 69 ]

a8
> Uint8Array(6) [ 0, 0, 42, 0, 69, 0 ]
// Our a16[2] changed a8 at index 4 because 
// 8 * 4 = 32
// and 16 * 2  = 32

a
> ArrayBuffer { [Uint8Contents]: <00 00 2a 00 45 00>, byteLength: 6 }

```

