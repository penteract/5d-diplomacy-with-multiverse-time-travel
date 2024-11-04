import colours from 'tailwindcss/colors';

enum Nation {
  Frankland = 'Frankland',
  Juggernaut = 'Juggernaut',
}

export const getNationColour = (nation?: Nation, isEmphasised: boolean = true) => {
  if (!nation) return colours.orange[isEmphasised ? 300 : 200];
  return {
    [Nation.Juggernaut]: colours.red[isEmphasised ? 500 : 400],
    [Nation.Frankland]: colours.blue[isEmphasised ? 500 : 400]
  }[nation];
};

export default Nation;
