export function friend(friends: string[]): string[] {
   return friends.filter((v, i) => v.length === 4);
}

console.log(friend(['Ryan', 'Kieran', 'Mark']));
