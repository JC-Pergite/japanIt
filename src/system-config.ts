// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */

// var ngVer = '2.0.0-rc.4';
// var routerVer = '@3.0.0-beta.2';
// var formsVer = '@0.2.0';

// var map = {
//   'app':                        'app', // 'dist',
//   '@angular':                   'https://npmcdn.com/@angular',
//   '@angular/router':            'https://npmcdn.com/@angular/router@3.0.0-beta.2',
//   'rxjs':                       'https://npmcdn.com/rxjs@5.0.0-beta.6',

// };

/** User packages configuration. */
// var packages = {
//   'app':                        { main: 'main.js',  defaultExtension: 'ts' },
//   'rxjs':                       { defaultExtension: 'js' },

// };

const map: any = {
};

const packages: any = {
};

// var ngPackageNames = [
//   'common',
//   'compiler',
//   'core',
//   'http',
//   'platform-browser',
//   'platform-browser-dynamic',
//   'router-deprecated',
//   'upgrade',
// ];

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',   
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',


  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/agenda',
  /** @cli-barrel */
];

var cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
