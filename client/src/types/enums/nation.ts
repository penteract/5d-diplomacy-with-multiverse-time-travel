import themeColours from '../../utils/colours';

enum Nation {
  Frankland = 'Frankland',
  Juggernaut = 'Juggernaut',
}

export const getNationColour = (nation?: Nation, isEmphasised: boolean = true) => {
  if (!nation) return isEmphasised ? themeColours.unclaimedEmphasised : themeColours.unclaimedStandard;
  return {
    [Nation.Juggernaut]: isEmphasised ? themeColours.austriaEmphasised : themeColours.austriaStandard,
    [Nation.Frankland]: isEmphasised ? themeColours.franceEmphasised : themeColours.franceStandard,
  }[nation];
};

export default Nation;
