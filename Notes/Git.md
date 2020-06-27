# Git

* [Git Reset](#gitReset)
* [Git Fundamentals](#gitFundamentals)
* [Git Version](#gitVersion)
* [Git Status](#gitStatus)
* [Git Clean](#gitClean)
* [Git Log](#gitLog)
* [Git Pull ](#gitPull)
* [Git Rebase](#gitRebase)
* [Git Branch ](#gitBranch)
* [Git Checkout](#gitCheckout)
* [Git Init](#gitInit)
* [Git Clone](#gitClone)
* [Git Commit](#gitCommit)
* [Git Add](#gitAdd)
* [Git Push](#gitPush)
* [Footer](#footer)


#### <a name="gitReset"></a>git reset 

* `git reset` is a powerful command that allows us to undo local changes;

````
    git reset --hard 

    git reset --hard HEAD
```` 

## <a name="gitFundamentals"></a>git fundamentals 

#### <a name="gitVersion"></a>git version 

* `git version` To check the version fo git: 

````
    git --version

    Then result would something such as: 
    git version 2.17.1
```` 

#### <a name="gitStatus"></a>git status

* `git status` displays state of current directory: 

````
    git status

    # Flag fro untracked;
    git status -u  

````

#### <a name="gitClean"></a>git clean

* if we have untracked files & we don't care about them & want to get back to regular version we can `git clean -f` to stop the "untracked files"

````
    git clean -f
````

#### <a name="gitLog"></a>git log

* `git log` Shows running record of commits:  

````
    git log

    `q` quit to get back to terminal shell prompt;


    git log --oneline

    # A nice flag for log
    git log --pretty=format:"%h%x09%an%x09%ad%x09%s"

    # some ASCII art 
    git log --graph --oneline --decorate --all

    # search - need beter examles for this flag
    git log -S 

    git log --all --simplify-by-decoration

    # fun with flags: 
    git log --graph --oneline

````

#### <a name="gitPull"></a>git pull 

* `git pull`  is used to fetch and download content from a remote repository and immediately update the local repository to match that content; 


##### <a name="gitRebase"></a>git rebase;

* `git rebase` is important; 

* `git status -f" the flag is the current flag assosiated with the command; 

* the next command is the forward thinking of the physical badge; 

* another point is the linting & code verification before submitting pull request; 

* rebase off of dev is important; 


##### <a name="gitBranch"></a>git branch

* `git branch` command is for us to create, list, rename and delete branches

````

    git branch 
    # lists all branches & displays what current branch we are on by an * prefixing the name

    git branch -D nameOfBranch
    # -D flag will delete a branch 

    git branch -vv 
    # this -vv flag is Doubly verbose & provides us more info about the branch
````

##### <a name="gitCheckout"></a>git checkout

* `git checkout` command allows us to navigate between branches

````

    git checkout -b NewBranchName 
    # allows us to create a new branch and name it

    git checkout develop 
    # will switch our brach to a branch name develop

    git checkout branchName 
    # will switch our brach to a branch name branchName
````


##### <a name="gitInit"></a>git init

* `git init` creates a new git repo;

````
    git init
````

##### <a name="gitClone"></a>git clone 

* `git clone` creates a working copy of a repo. When on a github page there is a "clone" button in the top right usually where we can get the path to use. We can use ssh or https;

````
    git clone git@github.com:facebook/react.git
````

#### git add; commit & push to move changes to remote repo 

* git clone creates a working copy of a repo. When we make changes to files locally and want to move them to report repo on github we can use the following sequence to do so: 
* git add . adds all changes to the index;
* git commit saves changes to local repo
* git push uploads local repo to remote repo

````
    git add .
    git commit -m "my commit message"
    git push

````

#### <a name="gitAdd"></a>git add

* `git add` has flags & we can commit just one file

````
    git add . # adds all files
    git add fileName # addes just the 1 file named "fileName"
    git add -A # I think this adds all & untracked need a bit more research on this flag; I usually use `git add .` not sure difference; 
````

#### <a name="gitPush"></a>git push 

* git push allows us to push our code
* Publish changes to a remote server 

````
    git push

    # a good git push example
    git push origin branchName -f 

    # a good git push example
    git push origin AB-1234 -f 

````


##### <a name="footer"></a>Footer

* https://git-scm.com/ 
* git flow workflow study that; 
* `pwd` is a command that prints working directory but isn't a git command;

* research `git clean -n`

* git config --global core.editor vim needs research
* git config --global help.autocorrect 1 
* git satsu would be neat;
* cat .gitconfig 
* git branch -r # remote list remote branches; 
* git remote add origin Http://githubl;kjasdfas.git
* git fetch -- pull down any changes from the repo
* git fetch origin 
* git log -- NO changes yet
* git log on origin/master has the readme.md file updated; 
* git merge from origin/master to my current bracnch masXXXX master 
* git log it's tjere it's fast forward; 
* next;




<<<<<<< HEAD



### ahead by x commits & want to trash them 

```` 
On branch NS-4062-CMS-5050-Spacing-Options-back-end
Your branch is ahead of 'origin/NS-4062-CMS-5050-Spacing-Options-back-end' by 31 commits.
  (use "git push" to publish your local commits)
  ````

  We can reset to the latest by:

  ````
      git fetch origin
      git reset --hard origin/branchName 

      # where branchName would be "NS-1234" for example

  ````

  #### Untracked Files

* If we use `git status` sometimes we can see we have untracked files; 
=======



## Make develop even with develop

* so develop in github is behind by X commits; 
* run the following:

````
    git fetch upstream
    git rebase upstream/develop
    git push

````


#### <a name="gitCommit"></a>git commit 

* `git commit` important



````
    git commit -m "message" 
```` 

* we can use the -amend flag - some raw notes below:

````
After git commit -amend 

Then control + o to save the control x to exit

In GitHub web browser the branch is slelected was wrong. 
````



================================
* squash git commits: 
````
    git rebase -i
````
* -i is for interactive;

* then we see a screen such as: 

````

noop

# Rebase c97b143..c97b143 onto c97b143 (1 command(s))
#
# Commands:
# p, pick = use commit
# r, reword = use commit, but edit the commit message
# e, edit = use commit, but stop for amending
# s, squash = use commit, but meld into previous commit
# f, fixup = like "squash", but discard this commit's log message
# x, exec = run command (the rest of the line) using shell
# d, drop = remove commit
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
                                       [ Read 20 lines ]
^G Get Help    ^O Write Out   ^W Where Is    ^K Cut Text    ^J Justify     ^C Cur Pos
^X Exit        ^R Read File   ^\ Replace     ^U Uncut Text  ^T To Spell    ^_ Go To Line
````

* git pushing new branch & wanting to set upstream to create branch on GitHub:

````
    git push --set-upstream origin NS-1234
````



## Git rebase from origin develop process


````
    git pull upstream develop
        * shift + z; shift + z 
    git pull origin develop (skip? )
    git rebase origin/develop (skip?)
    git rebase upstream/develop

    # some others:     
    git log

    git fetch upstream
    git rebase upstream/develop
````

## Replace local branch wiht remote branch 

* What happend was I commited to my develop branch by mistake then was stuck & wanted to make my local just like my fork branch develop which was just like the trunk develop
* Here is a possible 3 steps that deletes it then fetchs:

1. Delete your local branch: git branch -D develop
2. Fetch the latest remote branch: git fetch origin develop
3. Rebuild the local branch based on the remote one: git checkout -b develop origin/develop


````
git branch -D develop
git fetch upstream
git checkout develop
git reset --hard upstream/develop  
git push origin develop --force
````

* git push set upstream 
`git push --set-upstream origin develop`

* git view upstream 

* Git Rebase Interactive 

git rebase -i upstream/develop

#### git remote -v 

````
   git remote -v 

   origin	git@github.com:NewellBrands/ecom-commercecloud.git (fetch)
   origin	git@github.com:NewellBrands/ecom-commercecloud.git (push)
````

* git remote -v diplays the origin's 
* what we need to do somethmes is to set the remote to the develop branch;

````
    $ git remote add upstream [Upstream git URL]

    -- example: 
    git remote add upstream git@github.com:NewellBrands/ecom-commercecloud.git

````
* then we would see the following: 
````
C02RH17EG8WP:ecom-commercecloud uy00413$ git remote -v
origin	git@github.com:NewellBrands/ecom-commercecloud.git (fetch)
origin	git@github.com:NewellBrands/ecom-commercecloud.git (push)
upstream	git@github.com:NewellBrands/ecom-commercecloud.git (fetch)
upstream	git@github.com:NewellBrands/ecom-commercecloud.git (push)
C02RH17EG8WP:ecom-commercecloud uy00413$ git fetch upstream
From github.com:NewellBrands/ecom-commercecloud
 * [new branch]      NS-4449      -> upstream/NS-4449
 * [new branch]      NS-4449-beta -> upstream/NS-4449-beta
 * [new branch]      development  -> upstream/development
 * [new branch]      master       -> upstream/master
C02RH17EG8WP:ecom-commercecloud uy00413$ git fetch upstream
````