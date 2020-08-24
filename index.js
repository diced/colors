const Style = {
  reset: 0,
  bold: 1,
  dim: 2,
  italic: 3,
  underline: 4,
  inverse: 7,
  hidden: 8,
  strikethrough: 9
}
const Foreground = {
  black: 30,
  red: 31,
  green: 32,
  yellow: 33,
  blue: 34,
  magenta: 35,
  cyan: 36,
  white: 37,
  gray: 90,
  brightRed: 91,
  brightGreen: 92,
  brightBlue: 94,
  brightMagenta: 95,
  brightCyan: 96,
  brightWhite: 87
}
const Background = {
  bgBlack: 40,
  bgRed: 41,
  bgGreen: 42,
  bgYellow: 43,
  bgBlue: 44,
  bgMagenta: 45,
  bgCyan: 46,
  bgWhite: 47,
  bgGray: 100,
  bgBrightRed: 101,
  bgBrightGreen: 102,
  bgBrightYellow: 103,
  bgBrightBlue: 104,
  bgBrightMagenta: 105,
  bgBrightCyan: 106,
  bgBrightWhite: 107
};

const create = (color) => `\u001b[${color}m`;

for (let i = 0; i < Object.keys(Style).length; i++) {
  const c = Object.keys(Style)[i];
  const delim = [0, 22, 23, 24, 27, 28, 29][i];
  exports[c] = (msg) => `${create(Style[c])}${msg}${create(delim)}`;
}

for (const code of Object.keys(Foreground)) exports[code] = (msg) => `${create(Foreground[code])}${msg}${create(39)}`;
for (const code of Object.keys(Background)) exports[code] = (msg) => `${create(Background[code])}${msg}${create(49)}`;


for (const c of Object.keys(exports)) console.log(`export function ${c}(msg: string): string;`);

exports.create = create;
exports.style = Style;
exports.background = Background;
exports.foreground = Foreground;