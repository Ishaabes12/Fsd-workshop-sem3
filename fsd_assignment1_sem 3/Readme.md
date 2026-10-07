# Nested Scheduling in Node.js

## Aim

To understand how a **Timer**, **Promise**, and **process.nextTick()** work together in Node.js.

The execution flow is:

```text
Timer
  ↓
Promise
  ↓
process.nextTick()
```

## File Structure

```text
FSD/
│
├── nested.js
└── README.md
```

## Code

Create a file named `nested.js`:

```js
console.log("Start");

setTimeout(() => {
    console.log("Timer");

    Promise.resolve().then(() => {
        console.log("Promise");

        process.nextTick(() => {
            console.log("Next Tick");
        });
    });

}, 0);

console.log("End");
```

## How to Run

Open CMD or Terminal in your project folder and run:

```bash
node nested.js
```

## Output

```text
Start
End
Timer
Promise
Next Tick
```

## How It Works

### 1. Start

```js
console.log("Start");
```

This runs first because it is normal synchronous code.

### 2. End

The `setTimeout()` is registered, but its callback does not run immediately.

So:

```js
console.log("End");
```

runs next.

### 3. Timer

After the normal code finishes, the timer callback runs:

```js
console.log("Timer");
```

Inside the timer, a Promise is scheduled.

### 4. Promise

After the timer callback finishes, the Promise runs:

```js
console.log("Promise");
```

Inside the Promise, `process.nextTick()` is scheduled.

### 5. Next Tick

After the Promise callback finishes, `process.nextTick()` runs:

```js
console.log("Next Tick");
```

## Final Execution Order

```text
Start
  ↓
End
  ↓
Timer
  ↓
Promise
  ↓
Next Tick
```

## Conclusion

This program shows **nested scheduling in Node.js**:

```text
setTimeout()
    ↓
Promise
    ↓
process.nextTick()
```

It helps us understand how Node.js handles synchronous code, timers, Promise microtasks, and `process.nextTick()`.