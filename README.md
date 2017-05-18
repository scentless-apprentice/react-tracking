# tracking-schema

Tracking schema for NYT apps, based off [this Google Doc by DS&E](https://docs.google.com/document/d/1o0zbXibJlqmqk9ScYZGx0iq4jZ6IR8H_OdLU-8gZRlI/edit) with [JSON Schema v5 semantics via ajv](https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md).

### *PRO TIP:* Best used with [nyt-react-tracking](https://github.com/nytm/nyt-react-tracking).

## Motivation

The goal of this repo is to define a structured schema for all tracking data flowing through NYT apps.

This repo will provide the following:

 - **Validator:** A `validate()` function to validate your app's data tracking objects against the schema. This is most useful in tests that you can run in CI and/or as part of your build.

 - **Semver Schema:** Because this is an installable module, you can validate your data against a specific version of the schema.

## Documentation

 - For documentation on the current state of the schema please visit the [Documentation File](https://github.com/nytm/tracking-schema/blob/master/Documentation.md).
 - If you are making any changes to the schema via pull request, please run the documentation script to make sure the documentation stays up to date.

```
npm run documentation
```

 - Therefore, every pull request that alters the schema taxonomy or any field description must include an updated Documentation.md file

## Installation

```
npm install --save-dev nytm/tracking-schema
```

> You can optionally specify a specific version like so: `npm install --save nytm/tracking-schema#v0.1.2`

## Usage

Use in your tests to validate your app's tracking data against the schema.

```js
// import the validator provided by this module.
import { validator } from 'tracking-schema';

// import some module that exports a sampling of your app's tracking data.
import myAppsTrackingData from '../trackingData';

describe('MyApp tracking data', () => {
  it('should validate against the tracking-schema', () => {
    var result = validator(myAppsTrackingData);

    expect(!result.errors).toBe(true);
  });
});
```
## Parameters

The validator expects an object with a `data` property and an optional `individualEvents` flag.

* {Property} data (required):
The data property represents the tracking data object. The tracking data can be an entire data layer object or a segment of it.

* {Property} individualEvents (optional):
individualEvents allows the validator to evaluate invidual segments from the data layer. The data layer by defaults requires the following root properties:
```js
  // required top-level properties
  schema.required = ['event', 'application', 'user', 'referrer'];
```
However, passing individualEvents as true will clients to evaluate invidual elements such as `video` without having to pass the entire DL tree.

## Validation Errors

If your tracking data does not validate, then an array containing error objects will be returned instead, like so:

```js
const validation = validator(
  {
    application: {
      releaseDate: 'invalid'
    }
  },
  
  {
    individualEvents: true
  }
);

console.dir(validation.errors);
```

Would output something similar to:

```
[ { keyword: 'format',
    dataPath: '.application.releaseDate',
    schemaPath: '#/properties/application/properties/releaseDate/format',
    params: { format: 'date-time' },
    message: 'should match format "date-time"' } ]
```
