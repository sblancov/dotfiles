Help for VIM
============

Command-T
---------
Ruby is needed to use it.
> aptitude install ruby ruby-dev

and compile some libraries.
> cd ~/.vim/bundle/command-t/ruby/command-t

> ruby extconf.rb

> make

Flake8
------
It needs flake8 in order to use it.
> aptitude install python-pip

> pip install flake8

Syntastic
---------
This plugin is needed to use jsHint easily. It is necessary to install jsHint.
> aptitude install nodejs

> npm install -g jshint

Tagbar
------
It needs ctags so:
> aptitude install exuberant-ctags

Tern
----
It needs node and npm.
> cd ~/.vim/bundle/tern_for_vim/

> npm install

UltiSnip
--------
In order to be able to use this plugin it is necessary to install vim-nox to
support python in vim:
> aptitude install vim-nox

Vundle
------
This plugin allow to install and update the other plugins. It is needed to
install from git.
> git clone https://github.com/gmarik/Vundle.vim.git ~/.vim/bundle/Vundle.vim

YouCompleteMe
-------------
Before to install YouCompleteMe it is necessary to install python2.7-dev and cmake:
> aptitude install python2.7-dev cmake

1.  Check if your vim version is at least 7.3.584, how?
    > vim

    > :version

2.  Install YCM with Vundle
    > Bundle Valloric/YouCompleteMe

    > :BundleInstall

3.  Install dependencies
    > cd ~/.vim/bundle/YouCompleteMe
    
    > ./install.sh

that is all :)

NOTE: Linux debian 3.14-2-amd64 #1 SMP Debian 3.14.15-2 (2014-08-09) x86_64 GNU/Linux
> uname -a
