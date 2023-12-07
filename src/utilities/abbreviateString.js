export function abbreviateString(input) {
  const f_letters = input.slice(0, 4);
  const l_letters = input.slice(-4);

  return `${f_letters}...${l_letters}`;
}
