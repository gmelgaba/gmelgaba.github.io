---
layout: page
title: "Github Chrome Extensions"
description: "A glimpse to chrome extensions and its power"
author: "Gonzalo Melgar"
date: 2019-03-14 12:17:28 -0300
categories: chrome-extensions, boilerplate, update
active: blog-item
---

![image]({{ site.baseurl }}/assets/images/posts/github-chrome-extensions/1-cover.jpg){: .cover }

The more and more you navigate through the internet, the more features you think you need to make your life a little bit easier and here's where chrome extensions make our lives better.

A while ago I started playing with the chrome extensions and realized that they are too powerful!! So be aware of what you build, because you know.. "with great power comes great responsibility" 😉

In this post I'm gonna go through the basics, trying to explain the internal communication of the components as well as accessing DOM content, and play a little bit with it.


#### Architecture

The chrome extensions core is based on different components that interact with each other and with the browser.

![image]({{ site.baseurl }}/assets/images/posts/github-chrome-extensions/2-arquitecture.jpg)


**manifest.json**

This file describes the whole content of your extension. Without this file, you have no extension. Defines rules for content scripts injections, as well as the assets, styles, and other things that the extension will have access to.


**background.js**

This is the heart of your extension. All native browser interaction should go in here. The background script does NOT have access to the DOM and pages itself, but it can access through content scripts. It can also interact with the popup page.


**Content Scripts**

Content scripts can be injected into the tabs in the browser and access the DOM in the context of a browser session. This is where you can add new DOM elements, add extra listeners etc. Content scripts are optional but If you are planning to add HTML content, or interact with the page at some point, you'll need to have it.

**popup page**

That little app icon you see when clicking/activating an extension can show a small dialog or page in your browser, that's the popup page.

![image]({{ site.baseurl }}/assets/images/posts/github-chrome-extensions/3-popup.jpg)


It can be built with any framework like React or Angular, or just plain HTML depending on your needs.


**background page**

You can also have a backgorund page available in order to establish some custom parameters for your chrome extension. For example, I built a while back a chrome extension that calculates the price of bringing amazon items to Uruguay, and had available a configuration page in which you could change the vendor used, as well as the price per weight, among other parameters. All those values were used by the content script and they were parameterized


## Install Extension

To install a custom chrome extension you will have to do the following steps:

1) Once you have all the basic files for the chrome extension, open Google Chrome, and navigate to **chrome://extensions**

![image]({{ site.baseurl }}/assets/images/posts/github-chrome-extensions/4-install1.jpg)

2) Enable the 'Developer mode'.

![image]({{ site.baseurl }}/assets/images/posts/github-chrome-extensions/5-install2.jpg)

3) Click “Load Unpacked Extension” button.

![image]({{ site.baseurl }}/assets/images/posts/github-chrome-extensions/6-install3.jpg)

4) Navigate to the local folder where you have the chrome extension project, select that folder, and click OK.

5) DONE! The extension is now available to use.

![image]({{ site.baseurl }}/assets/images/posts/github-chrome-extensions/7-install4.jpg)


### Boilerplate

I've created several chrome extensions and after the second one, I realized that I wanted to save some basic setup time while doing it, so I created a chrome-extension-boilerplate code that will have all the necessary things to start working on your new chrome extension! Try it out!




