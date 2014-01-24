git-pull-hangs-on-smb-shared-repository
=======================================

This repo is to help demonstrate issues with Git's `fmt-merge-msg` hanging when doing a fetch or pull. This issue seems to be isolated to Mac OS X Mavericks and how it connects to a network share via Apples SMB2.

If your git repo is hosted on a shared network location that you are connected to via smb (in my case I'm connected to my Parallels Windows 7 VM) and you cd to that folder on your hosts machines terminal doing a git pull will result in the following message:

```shell

```
