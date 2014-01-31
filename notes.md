# environment notes

## Test Commands to Run

- `git clone git@github.com:psyrendust/git-pull-hangs-on-smb-shared-repository.git`
- `git pull origin test-updates`
- `bower install`
- `npm install`
- `grunt`
- `git add -A`
- `git commit`
- `git push origin test-updates`

## Tests

**Remote Machine:** MacBook Air 10.9.1  
**Connection Method:** AFP through Finder's `Connect to Server...` command  
**Protocol Used:**

```shell
afp://10.81.11.104
```

**Permissions of `.git/`:**  

```shell
/Volumes/macafp/git-pull-hangs-on-smb-shared-repository/.git test-updates
❯ la
total 36
-rw-r--r-- 1 larrygordon staff 5455 Jan 31 11:37 COMMIT_EDITMSG
-rw-r--r-- 1 larrygordon staff    0 Jan 31 11:38 FETCH_HEAD
-rw-r--r-- 1 larrygordon staff   29 Jan 31 11:16 HEAD
-rw-r--r-- 1 larrygordon staff   41 Jan 31 11:17 ORIG_HEAD
drwxr-xr-x 1 larrygordon staff  264 Jan 31 11:13 branches
-rw-r--r-- 1 larrygordon staff  413 Jan 31 11:16 config
-rw-r--r-- 1 larrygordon staff   73 Jan 31 11:13 description
drwxr-xr-x 1 larrygordon staff  330 Jan 31 11:13 hooks
-rw-r--r-- 1 larrygordon staff  736 Jan 31 11:37 index
drwxr-xr-x 1 larrygordon staff  264 Jan 31 11:13 info
drwxr-xr-x 1 larrygordon staff  264 Jan 31 11:13 logs
drwxr-xr-x 1 larrygordon staff  432 Jan 31 11:37 objects
-rw-r--r-- 1 larrygordon staff  251 Jan 31 11:13 packed-refs
drwxr-xr-x 1 larrygordon staff  264 Jan 31 11:13 refs
trace: built-in: git 'rev-parse' '--show-toplevel'
```
