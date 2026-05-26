// const arr = [11, 2, 3, 4, 5];
// // const arr1 = [6, 7, 8, 9, 10];

// function productOfTwoMaximums(arr) {
//   let max = -Infinity;
//   let max2 = -Infinity;
//   if (arr.length < 2) return arr[1] + arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     let current = arr[i];

//     if (current > max) {
//       max2 = max;
//       max = current;
//     } else if (max2 < current) {
//       max2 = current;
//     }
//   }
//   return max * max2;
// }
// const product = productOfTwoMaximums(arr);
// console.log(product);

// let arr = [2,7,9,11]
// let target =13;

// function twoSum(arr ,target){

//   for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//       if(arr[i]+arr[j]===target){
//         return [i,j]
//       }
//   }
// }}

// console.log(twoSum(arr,target));

// let arr = [1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1];

// let start = 0;
// let end = arr.length - 1;

// while (start < end) {
//   if (arr[start] == 0) {
//     start++;
//   } else {
//     if (arr[end] == 0) {
//       let temp = arr[start];
//       arr[start] = arr[end];
//       arr[end] = temp;
//       start++;
//       end--;
//     } else {
//       end--;
//     }
//   }
// }

// console.log(arr);

// let arr = [2, 7, 11, 3, 5, 1, 6];
// arr.sort((a, b) => a - b);
// console.log(arr);

// let target = 13;

// function twoSum(arr, target) {
//   let start = 0;
//   let end = arr.length - 1;

//   while (start < end) {
//     const sum = arr[start] + arr[end];
//     if (sum === target) {
//       return [start, end];
//     } else if (sum < target) {
//       start++;
//     } else {
//       end--;
//     }
//   }
// }

// console.log(twoSum(arr, target));

// const arr = [0, 0, 1, 1, 1, 2, 2, 3, 4, 4, 5];

// function removeDuplicates(arr) {
//   let start = 0;
//   let end = arr.length - 1;
//   let k = 0;
//   while (start < end) {
//     if (arr[start] == arr[end]) {
//       end--;
//       start++;
//     } else {
//       start++;
//       end--;
//     }
//   }
// }

// const user = {
//   name: "Alice",
//   greet: function () {
//     console.log(`Hello, ${this.name}!`);
//   },
// };

// const user2 = {
//   name: "bob",
// };

// user2.__proto__ = user;

// user2.greet();
// --- Configuration ---
// Set to 'true' to run in seconds instead of minutes so you can test it quickly

// function countingSimulation() {
//   console.log("Page loaded");

//   setTimeout(() => {
//    setTimeout(() => {
//      console.log("couting for 30 seconds");
//    }, 1000);
//   }, 1000 * 30);
//   // setInterval(() => {
//   //   console.log("stopping counting for 30 seconds");
//   // }, 1000 * 30);
//   // setTimeout(() => {
//   //   console.log("again starting counting for 30 seconds");
//   // }, 1000 * 30);
// }


// countingSimulation()

// --- Durations in milliseconds ---
const ONE_MINUTE = 20000;
const TWO_MINUTES = 30000;

// --- State ---
let count = 0;
let timerInterval;

// --- Core Functions ---
function startCounting() {
    console.log("\n▶ Counting started...");
    
    // Increment the counter every 1 second
    timerInterval = setInterval(() => {
        count++;
        // \r rewrites the current line in the terminal
        process.stdout.write(`\rCurrent Count: ${count} seconds elapsed    `);
    }, 1000);
}

function stopCounting() {
    // Clear the interval to pause the counter
    clearInterval(timerInterval);
    console.log("\n\n⏹ Counting Stop.");
}

// --- Main Simulation Sequence ---
function runSimulation() {
    console.log("Initializing Terminal Simulation...");

    // Phase 1: Start counting immediately
    startCounting();

    // Phase 2: After 1 minute (60,000ms), stop counting
    setTimeout(() => {
        stopCounting();
        console.log("Waiting for 1 minute before resuming...");

        // Phase 3: Wait 1 minute (60,000ms) while stopped, then start counting again
        setTimeout(() => {
            startCounting();

            // Phase 4: After 2 more minutes (120,000ms), stop completely
            setTimeout(() => {
                stopCounting();
                console.log("✅ Simulation Complete.");
                process.exit(0); 
            }, TWO_MINUTES);

        }, ONE_MINUTE);

    }, ONE_MINUTE);
}

// Start the process
runSimulation();