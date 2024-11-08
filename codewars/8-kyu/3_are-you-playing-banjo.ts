function areYouPlayingBanjo(name: string): string {
   return name.toLocaleLowerCase().startsWith("r")
      ? `${name} plays banjo`
      : `${name} does not play banjo`;
}
console.log(areYouPlayingBanjo("rdam"));
