import { injectGlobal } from 'styled-components';

injectGlobal`
:root {
  --greyBlue: #718a99;
  --darkBlue: #3f51b5;
  --transparentDarkBlue: rgba(63, 81, 181, 0.57);
  --lightBlue: #c6dcf9;
  --paleBlue: #eff5fe;
  --black: #333;
  --white: #fdfdfd;
  --lightGrey: #ecf0f1;
  --shadow: rgba(209, 209, 209, 0.5);
  --gradientGold: #ffd26f;
  --gradientBlue: #3677ff;
  --paleGreen: rgb(164, 196, 131);
  --paleRed: rgb(200, 110, 115);
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  color: var(--black);
  background: var(--white);
}
`;
