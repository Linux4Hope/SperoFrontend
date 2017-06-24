# Spero [![Build Status](https://travis-ci.org/Linux4Hope/SperoFrontend.svg?branch=master)](https://travis-ci.org/Linux4Hope/SperoFrontend)

## Description

Angular Frontend application for Linux4Hope [Spero-BaasBox](https://github.com/Linux4Hope/Spero-BaasBox).

## Build, Testing, Development

1. Need to have [Nodejs](https://nodejs.org/en/), [NPM](https://www.npmjs.com/), [AngularCLI](https://cli.angular.io/), and [Chrome](https://www.google.com/chrome/) installed on your system globally. This guide assumes you are running a 16.04 LTS 64bit Ubuntu system. If running a Debian/Ubuntu system and you do not have the packages installed globally, run these commands below:

        sudo apt update
        sudo apt upgrade -y
        sudo apt full-upgrade -y
        curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -  
        sudo apt install nodejs  
        sudo ln -s /usr/bin/nodejs /usr/bin/node  
        sudo apt install npm
        sudo npm install -g npm
        sudo npm install -g @angular/cli
        sudo apt install gdebi -y
        wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
        sudo gdebi google-chrome-stable_current_amd64.deb --n

2. Clone this repo.

3. In the root of the project folder, run `npm install`.

4. Run `ng serve` for live preview in the `l4h-app` directory. You can then browse the site after opening your browser to the url that the server has informed you. If you have the app in a
container or through a proxy, run `ng serve --host 0.0.0.0 --disable-host-check`
to listen to all ports and disable security checks.

5. Run `ng test` to make sure the app will past some unit testing if you are making changes to the app. This is a small safety measure to make sure your changes do not have an adverse effect. `ng test` will run Chrome in headless mode, however, you can have
the gui view of Karma by going to port 9876 in your Chrome browser. If you like for Karma to kill it's process after tests, run `ng test --watch false`. Run `ng e2e` for additional tests.
`ng test` is ran by [Karma](https://karma-runner.github.io) and `ng e2e` does end to end testing using [Protractor](http://www.protractortest.org/). Make sure you call `ng serve` and have the server running for `ng e2e`.

6. Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

**Note:** AngularCLI made a default config file for Karma and Protractor but
were edited to support Chrome in headless mode.
