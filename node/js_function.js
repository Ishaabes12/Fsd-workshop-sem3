// import fs from 'fs';
// function sizeChecker(filename)
// {
//     const stats = fs.statsync(filename)
//     const limit =2*1024*1024 // 2MB
//     if(stats.size>limit)
//     {
//         console.log("File size exceeds 2MB limit.");
//     }
//     else{
//         console.log("File has been submitted successfully.");
//     }
// }
  const sizeChecker = () => {
    
  }
  (
    () => {
      console.log("hello");
    }
  )()
  const nums = [1, 2, 3, 4, 5];
  nums.map((num,index) => {
    console.log(`Numbers ${index+0}: ${num*2}`);
  })
  nums.filter((num, index) => {
    if(num > 2) {
        console.log(num);
    }
})
