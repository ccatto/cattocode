# Shell Commands

## This page is a bunch of Shell Commands for Mac Terminal

I personally enjoy using iterm2 https://www.iterm2.com/

#### when port is in use how to kill proccess 
* `sudo lsof -i :8000` 
* this will list something like the following below & then get the PID #
````
COMMAND   PID USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
pma_agent 154 root   28u  IPv4 0xc697b87ebee46597      0t0  TCP *:irdmi (LISTEN)
pma_agent 154 root   29u  IPv6 0xc697b87ebaa5d687      0t0  TCP *:irdmi (LISTEN)
````
* `sudo kill -9 PID` 


### Basic Shell Commands
* ls - list
* pwd - Print working directory
* cd - change directory

#### killall -9 node


#### Clear All
* Cmd+K 

#### bash_profile Alias
* There is a .bash_profile file on mac 
* it's a hidden file so on finder use `Cmd+Shift+.` to show / hide all hidden files;
* We can adda line to alias such as:

````
alias cdgit='cd Documents/GitHub'
````
* then to relaod the file with out resterating utilize: `source ~/.bash_profile`