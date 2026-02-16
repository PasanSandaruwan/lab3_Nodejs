const condition = true; // Change to false to test rejection

const myPromise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('Success with await!');
    } else {
        reject('Failure with await!');
    }
});

async function myFunction() {
    try {
        const result = await myPromise;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

myFunction();
