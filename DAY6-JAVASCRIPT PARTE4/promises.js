//promises

const step1 = () => {
    return new Promise(() => {
        setTimeout((resolve, reject) => {
            console.log("Step 1 is complete.");
          // resolve();
        }, 5000); 
    });
};
const step2 = () => {
    return new Promise(() => {
        setTimeout((resolve, reject) => {
            console.log("Step 2 is complete.");
           resolve();
        }, 6000); 
    });
};

step1()
    .then(step2)
    .then(() => {
        console.log('ALL STEPS ARE COMPLETE')
    })