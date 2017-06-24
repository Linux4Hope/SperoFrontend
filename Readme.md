# Spero

## Description

Angular Frontend application for Linux4Hope [Spero-BaasBox](https://github.com/Linux4Hope/Spero-BaasBox).

## Build, Testing, Development

1. Need to have [Nodejs](https://nodejs.org/en/), [NPM](https://www.npmjs.com/), and [AngularCLI](https://cli.angular.io/) installed on your system globally. This guide assumes you are running a 16.04 LTS 64bit Ubuntu system. If running a Debian/Ubuntu system and you do not have the packages installed globally, run these commands below:

        sudo apt update
        sudo apt upgrade -y
        sudo apt full-upgrade -y
        curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -  
        sudo apt install nodejs  
        sudo ln -s /usr/bin/nodejs /usr/bin/node  
        sudo apt install npm
        sudo npm install -g npm
        sudo npm install -g @angular/cli

2. Clone this repo.

3. In the root of the project folder, run `npm install`.

4. Run `ng serve` for live preview in the `l4h-app` directory. You can then browse the site after opening your browser to the url that the server has informed you. If you have the app in a
container or through a proxy, run `ng serve --host 0.0.0.0 --disable-host-check`
to listen to all ports and disable security checks.

5. Run `grunt test` to make sure the app will past some unit testing if you are making changes to the app. This is a small safety measure to make sure your changes do not have an adverse effect.
