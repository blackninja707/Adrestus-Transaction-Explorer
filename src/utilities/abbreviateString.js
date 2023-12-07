export function abbreviateString(input) {
<<<<<<< HEAD
  if (input.length <= 8) {
    return input; // Return the original string if it has 8 or fewer characters
=======
  if(input.length <= 8) {
    return input;
>>>>>>> 6f1efbc41a79e7bc93590ca07286664e86981939
  }
  const f_letters = input.slice(0, 4);
  const l_letters = input.slice(-4);

  return `${f_letters}...${l_letters}`;
}
