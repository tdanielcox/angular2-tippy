Angular2 Tippy
==============

A directive for the tippy.js library

## Installation

Install with NPM:

```bash
npm install angular2-tippy
```

Then, import the directive

```js
import { TippyDirective } from 'angular2-tippy';
```

```js
declarations: [
	...
	TippyDirective
	...
]
```

Important: Include the CSS from the tippy package

## Usage

```html

// Basic - This is the basic directive usage
<div tippy title="This is your tooltip"></div>

// With tippy options
<div id="my-tooltip-template" style="display: none">
    <p>This is my custom tooltip template</p>
</div>

<div tippy
	[tippyOptions]="{
	    html: '#my-tooptip-template',
	    ...
	}">
</div>
```

## Options

#### tippyOptions
Type: `Object`
Default: `null`

Pass all your tippy options here
