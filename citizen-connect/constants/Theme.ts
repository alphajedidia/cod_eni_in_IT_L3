/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  primary: "#37C0C0",
  secondary: "#3299CC",
  black: "#303030",
  white: "#FDFDFD",
  green: "#5cb85c",
  text: "#11181C",
  background: "#fff",
  tint: tintColorLight,
  icon: "#687076",
  tabIconDefault: "#687076",
  tabIconSelected: tintColorLight,
  lime: "#D7FFD4",
  pink: "#F655FF",
  brown: "#29271D",
  sky: "#E5EDFF",
  teal: "#0E4D45",
  yellow: "#FCBB80",
  orange: "#EF580B",
  blue: "#0000FA",
  light: "#FFFCFF",
  grey: "#242026",
  greyLight: "#B8B3BA",
  input: "#EEE9F0",
  selected: "#F7F2F9",
  dark: "#2F2D32",
  red: "#EF0827",
  lightGray: "#DCDCE2",
  gray: "#6E6E73",
  card: "#FFFFFF",
  shadow: "#000000",
};

export const Sizes = {
  // global sizes
  base: 8,
  text: 14,
  radius: 4,
  padding: 20,

  // font sizes
  h1: 44,
  h2: 40,
  h3: 32,
  h4: 24,
  h5: 18,
  p: 16,

  // button sizes
  buttonBorder: 1,
  buttonRadius: 8,
  socialSize: 64,
  socialRadius: 16,
  socialIconSize: 26,

  // button shadow
  shadowOffsetWidth: 0,
  shadowOffsetHeight: 7,
  shadowOpacity: 0.07,
  shadowRadius: 4,
  elevation: 2,

  // input sizes
  inputHeight: 46,
  inputBorder: 1,
  inputRadius: 8,
  inputPadding: 12,

  // card sizes
  cardRadius: 16,
  cardPadding: 10,

  // image sizes
  imageRadius: 14,
  avatarSize: 32,
  avatarRadius: 8,

  // switch sizes
  switchWidth: 50,
  switchHeight: 24,
  switchThumb: 20,

  // checkbox sizes
  checkboxWidth: 18,
  checkboxHeight: 18,
  checkboxRadius: 5,
  checkboxIconWidth: 10,
  checkboxIconHeight: 8,

  // product link size
  linkSize: 12,

  /** font size multiplier: for maxFontSizeMultiplier prop */
  multiplier: 2,

  /** xs: 4px */
  xs: 8 * 0.5,
  /** s: 8px */
  s: 8 * 1,
  /** sm: 16px */
  sm: 8 * 2,
  /** m: 24px */
  m: 8 * 3,
  /** md: 32px */
  md: 8 * 4,
  /** l: 40px */
  l: 8 * 5,
  /** xl: 48px */
  xl: 8 * 6,
  /** xxl: 56px */
  xxl: 8 * 7,
};
