# \<super-portal-siblings\>



## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your application locally.

## Viewing Your Application

After cloning, run `bower install` to fetch dependencies, then:

```
$ polymer serve
```

## Building Your Application

```
$ polymer build
```

This will create a `build/` folder with `bundled/` and `unbundled/` sub-folders
containing a bundled (Vulcanized) and unbundled builds, both run through HTML,
CSS, and JS optimizers.

You can serve the built versions by giving `polymer serve` a folder to serve
from:

```
$ polymer serve build/bundled
```

## Editing the map

First, install Tiled.  On Fedora, `dnf install tiled`.  Or grab an [OS X or
Windows download](https://thorbjorn.itch.io/tiled).

Launch Tiled and open
`src/super-portal-siblings-app/game/assets/map/testmap.tmx`.  Edit the map,
save your changes, and export (`Ctrl+e`) in JSON format to
`src/super-portal-siblings-app/game/assets/map/testmap.json`.  Refresh the
game, and your changes will be reflected.

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
