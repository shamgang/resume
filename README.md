OVERVIEW:
Shamik Ganguly's personal website to display experience and web development skills

STACK:
Hosted on Heroku
Version controlled and deployed with Git
Served by Node
Structured with React
Styled with Sass
Logic aided by jQuery

STORIES:
Create accessible navigation flow
Scroll animation should cancel when user scrolls
Multiple scrolls shouldn't queue
Anchor link clicks should animate - need to find a way to properly listen to click events or override link behavior
All headings and subheadings in navbar should have corresponding content
Clicking on an open heading should scroll to it, not close it. Clicking on the arrow should close it.

BUGS:
Clicking heading triggers click on all subheadings

QUESTIONS:
How do I set up a build system with Node on Heroku that will transpile and minify my Sass/JS before deployment?
Should I push source at all to Heroku or is there a way to just push local builds?
How do I set up multiple remotes for pushing this repo to both GitHub and Heroku?