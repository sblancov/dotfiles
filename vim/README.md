Help for VIM
============

Tagbar
------
It needs ctags so:
> aptitude install exuberant-ctags

YouCompleteMe
-------------
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