export const colors = {
  blue: '#1891ff',
  red: '#ff0000',
  green: '#13b12b',
  yellow: '#ffff00',
  lightYellow: '#ffffdf',
  lightRed: '#ffdddd',
  lightBlue: '#f0f8ff',
  darkBlue: '#355386'
}

const baseVariables = {
  headerHeight: "70px",
  screenMedium: "768px",
};

export const light = {
  ...baseVariables,
  name: "light",
  opposite: "dark",
  text: "black",
  boxShadow: "-5px 5px 40px 0px lightgray",
  background: "#e7ebfb",
  backgroundSecondary: "#f4f6ff",
};

export const dark = {
  ...baseVariables,
  name: "dark",
  opposite: "light",
  text: "white",
  boxShadow: "-5px 5px 40px 0px black",
  background: "#232435",
  backgroundSecondary: "#353b50",
};

export default {
  light,
  colors,
  medium: {},
  dark
}