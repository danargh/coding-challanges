// fungsi ini akan mengembalikan skor yang mengalami break/lonjakan

function breakingRecords(scores: number[]): number[] {
   let highest: number[] = [];
   let lowest: number[] = [];
   let totalBreak: number[] = [0, 0];

   for (let i: number = 0; i < scores.length; i++) {
      if (scores[i] < highest[i - 1]) {
         highest.push(highest[i - 1]);
      } else if (scores[i] > highest[i - 1]) {
         highest.push(scores[i]);
         totalBreak[0] += 1;
      } else {
         highest.push(scores[i]);
      }
      if (scores[i] > lowest[i - 1]) {
         lowest.push(lowest[i - 1]);
      } else if (scores[i] < lowest[i - 1]) {
         lowest.push(scores[i]);
         totalBreak[1] += 1;
      } else {
         lowest.push(scores[i]);
      }
   }
   return totalBreak;
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
