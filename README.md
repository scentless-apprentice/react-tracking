# tracking-schema

Tracking schema for NYT apps, based off [this Google Doc by DS&E](https://docs.google.com/document/d/1o0zbXibJlqmqk9ScYZGx0iq4jZ6IR8H_OdLU-8gZRlI/edit) with [JSON Schema v5 semantics via ajv](https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md).

> ### ⚠️ STILL BEING DEVELOPED. DON'T USE THIS YET. ⚠️

## Motivation

The goal of this repo is to define a structured schema for all tracking data flowing through NYT apps.

This repo will provide the following:

 - **Validator:** A `validate()` function to validate your app's data tracking objects against the schema. This is most useful in tests that you can run in CI and/or as part of your build.

 - **Semver Schema:** Because this is an installable module, you can validate your data against a specific version of the schema.


## Installation

```
npm install --save-dev nytm/tracking-schema
```

> You can optionally specify a specific like so: `npm install --save nytm/tracking-schema#v0.1.2`

## Usage

Use in your tests to validate your app's tracking data against the schema.

> NOTE: This hasn't actually been written yet, but the API will look something like this.

```js
// import the validator provided by this module.
import validator from 'tracking-schema';

// import some module that exports a sampling of your app's tracking data.
import myAppsTrackingData from '../trackingData';

describe('MyApp tracking data', () => {
  it('should validate against the tracking-schema', () => {
    expect(validator(myAppsTrackingData)).toBe(true);
  });
});
```

## Validation Errors

If your tracking data does not validate, then an object with an errors array will be returned instead, like so:

```js
const validation = validator({
  application: {
    releaseDate: 'invalid'
  }
});

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
