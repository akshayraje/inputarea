# Inputarea
Expandable textarea React component

* As a user, you type data into a single line input box. The input box automatically expands if you hit the return key.
* As a developer you can enable/disable the expand feature (using `disableType` attribute)
* As a developer you can define the initial state, i.e. expanded or not. (using `initType="input"` or `initType="textarea"`)
* As a developer you can style the component as you need. Pass className, style or any other attributes supported by input type text or textarea.
* As a developer you can reuse the component in other projects.

## Installation

In your react project, simply add the component 

```sh
npm install git+https://github.com/akshayraje/inputarea.git#master
```

## Usage

Import the Inputarea component

```javascript
import Inputarea from 'inputarea';
```

Use it within your components like this:

```jsx
<Inputarea className="form-control" name="inputarea" id="inputarea" rows="3" placeholder="Input text here" />
```

To customize it as per your need, you can pass className, style or any other attributes supported by input type text or textarea.
To disable the expand feature add a `disableType` attribute without any value
You can define the initial state, i.e. expanded or not by using `initType="input"` or `initType="textarea"` attributes.

## Demo Code

For a working demo have a look at the [demo files](/demo) or clone this repo and run `npm install` `npm start` then open http://localhost:8080 and follow the instructions.
