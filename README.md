Dotfiles
========

.gitconfig:
-----------
* It contains a basic git configuration.
* It is needed to add [core] and inside: name and email.
* It contains a beautifull alias for git log (At least, I think so).

.jshintrc:
----------
* It works with vim if you know how.
* All options from http://www.jshint.com/docs/options/ can be configured.
* You can add globals to customize it even more.

.noserc:
--------
* This file works with nosetests program.
* Install rednose plugin to use it or remove rednose option.
* Idem coverage plugin.

.vimrc:
-------
* Several plugins can be installed with Vundle plugin (you should install vundle plugin at first).
* It contains configuration about searching, indent and color theme as well as mapping to create a great enviroment to start programming.
* You should read install instructions for every plugin :P

Gruntfile.js
------------
* It provides tasks that help to do TDD/BDD in Javascript.
* It also provides tasks to get information about the project. Information such as maintainability metrics, coverage repors or API documentation among others.

package.json
------------
* It corresponds to the Gruntfile.js and contents all dependencies are needed to run grunt properly.

testem.json:
------------
* It works with jasmine unit test framework.
* It is configured to launch only Chrome.
* It takes all src and test files from their respective directories.

Any commentary, question or doubt will be appreciated :)
