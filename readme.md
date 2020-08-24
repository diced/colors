# colors

Simply lightweight terminal colors.

# usage

```js
const colors = require('@dicedtomato/colors');
console.log(colors.cyan('hello'));
```
or..
```ts
import { cyan } from '@dicedtomato/core'
console.log(cyan('hello'));
```

# api
```ts
var foreground: Foreground;
var background: Background;
var style: Style;
function create(color: number): string;
function reset(msg: string): string;
function bold(msg: string): string;
function dim(msg: string): string;
function italic(msg: string): string;
function underline(msg: string): string;
function inverse(msg: string): string;
function hidden(msg: string): string;
function strikethrough(msg: string): string;
function black(msg: string): string;
function red(msg: string): string;
function green(msg: string): string;
function yellow(msg: string): string;
function blue(msg: string): string;
function magenta(msg: string): string;
function cyan(msg: string): string;
function white(msg: string): string;
function gray(msg: string): string;
function brightRed(msg: string): string;
function brightGreen(msg: string): string;
function brightBlue(msg: string): string;
function brightMagenta(msg: string): string;
function brightCyan(msg: string): string;
function brightWhite(msg: string): string;
function bgBlack(msg: string): string;
function bgRed(msg: string): string;
function bgGreen(msg: string): string;
function bgYellow(msg: string): string;
function bgBlue(msg: string): string;
function bgMagenta(msg: string): string;
function bgCyan(msg: string): string;
function bgWhite(msg: string): string;
function bgGray(msg: string): string;
function bgBrightRed(msg: string): string;
function bgBrightGreen(msg: string): string;
function bgBrightYellow(msg: string): string;
function bgBrightBlue(msg: string): string;
function bgBrightMagenta(msg: string): string;
function bgBrightCyan(msg: string): string;
function bgBrightWhite(msg: string): string;
```