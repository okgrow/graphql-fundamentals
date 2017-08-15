import { injectGlobal } from 'styled-components';

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Gaegu:300,400,700');
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
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

  --clouds: #ecf0f1;
  --silver: #bdc3c7;
  --wetAsphalt: #34495e;
  --midnightBlue: #2c3e50;
  --peterRiver: #3498db;
  --belizeHole: #2980b9;
  --alizarin: #e74c3c;
  --pomegranate: #c0392b;
  --emerald: #2ecc71;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
  height: 100%
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  color: var(--black);
  background: var(--white);
  height: 100%;
  #root {
    height: 100%;
    background-image: url(https://www.toptal.com/designers/subtlepatterns/patterns/geometry.png);
  }
}
`;
