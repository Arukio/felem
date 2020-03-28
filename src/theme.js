export const fontStack =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";

export const maxWidth = "1180px";

export const colors = {
  // main colors
  yellow: "#FF9F1C",
  red: "#FF4040",
  green: "#2EC4B6",
  // grey colors
  dark: "#0A1014",
  grey: "#1B2329",
  midGrey: "#353F4C",
  lightGrey: "#7A8C99",
  white: "#FFFFFF",
  overlay: "#1B2329E6" // grey + 0.9 alpha
};

export const fonts = {
  default: `"Roboto", ${fontStack}`
};

export const focusShadow = `
	outline: none;
  box-shadow: 0 0 0 0.125rem ${colors.yellow};
`;
