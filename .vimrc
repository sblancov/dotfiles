set nocompatible
filetype off

set rtp+=~/.vim/bundle/vundle/
call vundle#rc()

" Vundles
" You have to type :BundleInstall to install/update all this plugins:
Bundle 'gmarik/vundle'
Bundle 'scrooloose/nerdtree'
Bundle 'scrooloose/syntastic'
Bundle 'majutsushi/tagbar'
Bundle 'Lokaltog/vim-distinguished'
Bundle 'tomtom/tcomment_vim'
Bundle 'rstacruz/sparkup'
Bundle 'tpope/vim-surround'
Bundle 'marijnh/tern_for_vim'
Bundle 'Valloric/YouCompleteMe'
Bundle 'SirVer/ultisnips'
Bundle 'bling/vim-airline'
Bundle 'tpope/vim-fugitive'

filetype plugin indent on

" Searching
set hlsearch
set showcmd
set smartcase

" Indent
set softtabstop=4
set tabstop=4
set shiftwidth=4
set expandtab
set autoindent
set smartindent
set cindent

" Others
syntax on
set t_Co=256
set bg=dark
colorscheme distinguished
set number

" Mapping
nmap <F8> :TagbarToggle<CR>
nmap <F7> :NERDTreeToggle<CR>

let g:UltiSnipsJumpForwardTrigger="<tab>"
let g:UltiSnipsJumpBackwardTrigger="<s-tab>"

let g:ycm_key_list_select_completion = ['<C-TAB>', '<Down>']
let g:ycm_key_list_previous_completion = ['<C-S-TAB>', '<Up>']

let g:tern_map_keys=1
let g:tern_show_argument_hints='on_hold'

set laststatus=2

" Remap some hateful typos:
command W w
command Wq wq
