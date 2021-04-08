---
layout: page
title: "Customize Your Bash Terminal"
description: "Terminal tips"
author: "Gonzalo Melgar"
date: 2020-02-04 11:47:02 -0300
categories: terminal custom bash alias
active: blog-item
---

Customize Your Bash Terminal
============================

<https://www.cyberciti.biz/tips/bash-aliases-mac-centos-linux-unix.html>

There comes a time when you use the terminal for so long that you need to do something to improve it or even have fun with it.  With this article the idea is to share my personal updates to the command prompt, like aliases, prompt updates, terminal applications, to customize the behavior and the look and feel of the application.

Here are some of the most interesting ways you can customize your Mac's Terminal.

Aliases
-------

A Bash alias is essentially nothing more than a keyboard shortcut. Eventually with time, a developer tires of typing a specific long command or just want to rename it to something more simple.

Here's a small list of the aliases I have in my terminal prompt:

alias ..='cd ..'\
alias c='clear'\
alias ll='ls -lG'

alias bashreload='source ~/.bash_profile && echo "Bash config reloaded"''

alias editbashprofile='vim ~/.bash_profile' # for mac\
# git shortcuts

alias br='git branch'

alias st='git status'

alias diff='git diff'

alias co='git checkout'

Custom Prompt
-------------

Bash Prompt Customization

Now if you want to add a little color to make the interface more friendly or just want to have fun for a while, you can define color variables in the bash profile, and then update the prompt with the colors of your choosing. You can also choose the information to display by using the special prompt variable characters. Some examples:

-   \u    The username of the current user

-   \h    The hostname, up to the first

-   \w   The current working directory

-   \n    A new line

The Bash prompt configuration is stored in the PS1 variable, so in order to save its contents you'll need to overwrite its value in a new variable.

# color vars\
NO_COLOR="\[\033[0m\]"

LIGHT_WHITE="\[\033[1;37m\]"

WHITE="\[\033[0;37m\]"

GRAY="\[\033[1;30m\]"

BLACK="\[\033[0;30m\]"

RED="\[\033[0;31m\]"

LIGHT_RED="\[\033[1;31m\]"

GREEN="\[\033[0;32m\]"

LIGHT_GREEN="\[\033[1;32m\]"

YELLOW="\[\033[0;33m\]"

LIGHT_YELLOW="\[\033[1;33m\]"

BLUE="\[\033[0;34m\]"

LIGHT_BLUE="\[\033[1;34m\]"

MAGENTA="\[\033[0;35m\]"

LIGHT_MAGENTA="\[\033[1;35m\]"

CYAN="\[\033[0;36m\]"

LIGHT_CYAN="\[\033[1;36m\]"

# set a fancy prompt with the branch name included

export  PS1="${LIGHT_RED}\u${LIGHT_WHITE} at ${LIGHT_BLUE}\h${LIGHT_WHITE} in ${LIGHT_YELLOW}\w${NO_COLOR}  \n$ "

Example prompt after these changes:

gonzalomelgar at gonzalos-air-4 in ~/workspace/server\
$

Git branch display 
-------------------

Eventually I got tired of having to do a 'git branch' when I wanted to check the current branch I'm working on, so I installed the git bash completion bash (src: <https://github.com/bobthecow/git-flow-completion/wiki/Install-Bash-git-completion>). After that you'll need to add a function that gets the current branch name from the project you're currently standing on. Here's what you'll need to add in the bash_profile in order to do that:

if [ -f ~/.git-completion.bash ]; then

  . ~/.git-completion.bash

fi

git_branch() {

git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'\
}

Then in order to get that information directly in the prompt you'll just need to invoke that function in the PS1 variable definition:

export  PS1="${LIGHT_RED}\u${LIGHT_WHITE} at ${LIGHT_BLUE}\h${LIGHT_WHITE} in ${LIGHT_YELLOW}\w${LIGHT_GREEN}\$(git_branch)${NO_COLOR}  \n$ "

Example prompt after these changes:
-----------------------------------

gonzalomelgar at gonzalos-air-4 in ~/workspace/server  (feature/tests)\
$

Terminal emulation applications
-------------------------------

iTerm2

iTerm won by a pretty big landslide, likely because our developers use Macbook Pros at Shopify. iTerm includes features like split panes, hotkey windows, search, and autocomplete. You can also customize the look and feel pretty easily too.

Conclusión

These are only the "greatest hits" of Terminal customization. There is much more you can do to customize your Terminal. Explore the Terminal Preferences menu to find more.