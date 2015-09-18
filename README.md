# Overview

Shamik Ganguly's personal website to display experience and web development skills

# Stack

Hosted on Heroku<br/>
Version controlled and deployed with Git<br/>
Served by Node<br/>
Structured with React<br/>
Styled with Sass<br/>
Logic aided by jQuery<br/>

# Stories

Enable intro animation with no hash, but make more performant<br/>
Create accessible navigation flow<br/>
Anchor link clicks should animate - need to find a way to properly listen to click events or override link behavior<br/>
    Scroll animation should cancel when user scrolls<br/>
    Multiple scrolls shouldn't queue<br/>
All headings and subheadings in navbar should have corresponding content<br/>
NavGroup open/close arrow should work independently of link<br/>
Add parallax scrolling to splash<br/>
Add an icon+link to connect with me on LinkedIn, email<br/>
Should jump to hash on page load and open corresponding NavGroup<br/>
Should link to relevant external information, such as web frameworks<br/>
Rationalize lower vs. upper case and make consistent<br/>
Make embed objects have max width and center<br/>

# Bugs

Clicking heading triggers click on all subheadings<br/>

# Questions

How do I set up a build system with Node on Heroku that will transpile and minify my Sass/JS before deployment?<br/>
Should I push source at all to Heroku or is there a way to just push local builds?<br/>
How do I set up multiple remotes for pushing this repo to both GitHub and Heroku?<br/>
Should I switch to Angular + jQuery? Virtual DOM in React appears to causing problems with interaction event handling<br/>