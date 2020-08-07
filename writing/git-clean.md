# AVOID CLEAN GIT HISTORY

Here i will explain why i used linear history and why in order to get a clean git history. This is based on my experiences. If you have other practices, please feel free to share with me.

# I'm lost 😭

![](https://i.imgur.com/OG5Jlgb.png)

Have you already encoutered the same git history ?
Maybe not really if you work alone or work on small project/team, BUT i have already face this situation on standard projects (>10 members).

**The problem** here is not to GET many branches, this is a normal situation but the problem is **THE WAY** we **manage** these branches.

## The problems 

😖 **Hard to read**, Look at the history even if you don't need to find or revert a commit, visually you feel bad, same as you are when you see messy home for example.

🕵️‍♂️ **Hard to find/revert** to a commit of our history will be also be annoying, this will even can create other conflicts... so a bug fixes and maintenance will be more complicated.

🐛 **Filter or reate new bugs** when merging work to the another branch why ? Take the followed example:


- we have branche B pulled from dev branch
- dev branch keeps moving, meanwhile you work on feature
- now you finished & you will merge
- you fix conflicts
- now it's merge
- **the problem start here**  ⚠️

Even if you fixed conflicts you don't even know if the merged (dev branch) is working, but this is to late, you have already mixed the 2 branches.

Ok There is some bugs? I can revert BUT you will create another commit on dev.. SO you are **polluting** the branch with **unecessary commits** and potentially creating bugs if you don't see/test before. 

Linar history works well to me, this one solution.

🤔 Do i really **need** to see **old branches** ? Maybe not it depends


## Linear History 🙏

![](https://i.imgur.com/mK4IURp.png)

This is Angular(google) git history. I don't know exactly which internal rules or tools they use to get this.

But this is a example of what i prefer to see in my projects.

> You can also see that the messages are clean. I will write another post about that soon.


## How i do to get a linear history

- avoiding --no-ff option
- using rebase instead of simple merge

## Avoid Merge --no-ff

You commits are directly following the origin branch ? So GIT will create a linear history **without creating a "new merge commit"**, just by mixing and move HEAD pointer.

![](https://i.imgur.com/e1pZ7xH.gif)

 👉 This case can change, it depends on:
- Is the target branch ahead (more changes) ?
- Gitlab/Github merges configuration (default --no-ff ? )

Result will be this. It created a **"new merge commit"**

![](https://i.imgur.com/hNZADrt.gif)


### Rebase -> my 🦸‍♂️

![](https://i.imgur.com/hlt8M5c.gif)

Mix branches in order to get linear history needs to following next **steps**

basically:
1. update
2. rebase
3. merge

- /feature branch is ready to be mixed ?
- **update (pull from origin)** the target branch (dev)
- **rebase** on top of /dev branch (for example): **now /feature is updated** too and ready to test
- tests, unit, functional and so on.
- **merge**, as your /feature is directly following the HEAD of dev branch, you branch will merge without creating "new merge commit" (see first GIF).


### Observation

- Ok rebase, needs a little **more steps** compared to merge, but this was **useful** to me, i can improve tests and avoid bugs.
- **This is not THE SOLUTION**, sometimes you need to keep track of an old branch, i don't know maybe you need to see when a feature branch was started and finished/merged, it depends of your needs, you should ask yourself you i need to see this branch in my history ? is it meaningful ? YES/NO ?
- As rebase creates "new commits" than you feature branch, if you team mate has pulled his work from your /feature branch he might have conflicts when he will merge to /dev branch (MAYBE). This is a **little bit tricky**, see how REBASE work here: https://git-scm.com/book/en/v2/Git-Branching-Rebasing. If you need me to explain it please let me know.

# Thank you for reading ! 🙇‍♂️