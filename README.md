# Hello World Application for Apache Cordova

> Simple Hello World application and test suite.

## Run App

    /www/index.html

## Run Tests

    /www/spec.html

## Versions and Tags

The Hello World's version is directly tied to an Apache Cordova version.
For example, the tag `1.9.0` for Hello World is compatible with
Apache Cordova `1.9.0`.

## How to Update

Update to Apache Cordova x.x.x by:

1. `www/index.html`
    - Update `<script type="text/javascript" src="cordova-x.x.x.js"></script>`
2. `www/config.xml`
    - Update `<widget version="x.x.x">`
3. Commit and Tag
    - `git commit -am "[app] Version x.x.x"`
    - `git tag x.x.x`

