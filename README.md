git-pull-hangs-on-smb-shared-repository
=======================================

This repo is to help demonstrate issues with Git's `fmt-merge-msg` hanging when doing a fetch or pull. This issue seems to be isolated to Mac OS X Mavericks and how it connects to a network share via Apples SMB2.

If your git repo is hosted on a shared network location that you are connected to via smb (in my case I'm connected to my Parallels Windows 7 VM) and you cd to that folder on your hosts machines terminal doing a git pull will result in the following message:

```shell
/cygdrive/c/dev/git-pull-hangs-on-smb-shared-repository master
❯ GIT_TRACE=1 git pull origin master
trace: exec: 'git-pull' 'origin' 'master'
trace: run_command: 'git-pull' 'origin' 'master'
trace: built-in: git 'rev-parse' '--git-dir'
trace: built-in: git 'rev-parse' '--is-bare-repository'
trace: built-in: git 'rev-parse' '--show-toplevel'
trace: built-in: git 'ls-files' '-u'
trace: built-in: git 'symbolic-ref' '-q' 'HEAD'
trace: built-in: git 'config' 'branch.master.rebase'
trace: built-in: git 'config' 'pull.rebase'
trace: built-in: git 'rev-parse' '-q' '--verify' 'HEAD'
trace: built-in: git 'fetch' '--update-head-ok' 'origin' 'master'
trace: run_command: 'ssh' 'git@github.com' 'git-upload-pack '\''psyrendust/git-pull-hangs-on-smb-shared-repository.git'\'''
trace: run_command: 'rev-list' '--objects' '--stdin' '--not' '--all' '--quiet'
remote: Counting objects: 5, done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 3 (delta 0), reused 0 (delta 0)
trace: run_command: 'unpack-objects' '--pack_header=2,3'
trace: exec: 'git' 'unpack-objects' '--pack_header=2,3'
trace: built-in: git 'unpack-objects' '--pack_header=2,3'
Unpacking objects: 100% (3/3), done.
trace: run_command: 'rev-list' '--objects' '--stdin' '--not' '--all'
trace: exec: 'git' 'rev-list' '--objects' '--stdin' '--not' '--all'
trace: built-in: git 'rev-list' '--objects' '--stdin' '--not' '--all'
From github.com:psyrendust/git-pull-hangs-on-smb-shared-repository
 * branch            master     -> FETCH_HEAD
   13f03be..581cbd8  master     -> origin/master
trace: run_command: 'gc' '--auto'
trace: exec: 'git' 'gc' '--auto'
trace: built-in: git 'gc' '--auto'
trace: built-in: git 'rev-parse' '-q' '--verify' 'HEAD'
trace: built-in: git 'fmt-merge-msg'
```


If you output the current processes you'll notice that `git fmt-merge-msg` is hanging.

```shell
/cygdrive/c/dev/git-pull-hangs-on-smb-shared-repository master
❯ ps
  PID TTY           TIME CMD
33583 ttys007    0:02.45 -/usr/local/bin/zsh
34956 ttys008    0:00.75 -/usr/local/bin/zsh
45818 ttys008    0:00.00 git pull origin master
45819 ttys008    0:00.01 /bin/sh /usr/local/Cellar/git/1.8.5.3/libexec/git-core/git-pull origin master
45849 ttys008    0:00.00 /bin/sh /usr/local/Cellar/git/1.8.5.3/libexec/git-core/git-pull origin master
45850 ttys008    0:26.20 git fmt-merge-msg
```

test 1
test 2
test 3
