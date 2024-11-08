console.log(well(['bad', 'bad', 'bad', 'good', 'good', 'good']));

function well(x: string[]): string {
   // my solution
   // let goodCount: number = 0;
   // x.forEach((el: string) => {
   //    if (el === 'good') {
   //       goodCount += 1;
   //    }
   // });
   // if (goodCount === 0) {
   //    return 'Fail!';
   // } else if (goodCount <= 2) {
   //    return 'Publish!';
   // } else {
   //    return 'I smell a series!';
   // }

   // best solution :
   let num: number = x.filter((a) => a === 'good').length;
   return num > 2 ? 'I smell a series!' : num >= 1 ? 'Publish!' : 'Fail!';
}
