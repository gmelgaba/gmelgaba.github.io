---
layout: page
title: "Github Chrome Extensions"
description: "A glimpse to chrome extensions and its power"
author: "Gonzalo Melgar"
date: 2019-03-14 12:17:28 -0300
categories: chrome-extensions update
active: blog-item
---

# Github Chrome Extensions

The more and more you navigate through the internet, the more features you think you need to make your life a little bit easier. Here's where chrome extensions came to make our life a little bit easier ;)

A while ago I started playing a little bit with the chrome extensions and realized that they are too powerful!! So be aware of what you build, because you know.. "with great power comes great responsibility" ;)

In this post I'm gonna go through the basics, trying to explain the internal communication of the components as well as accessing DOM content, and play a little bit with it.



### Architecture

The chrome extensions core is based on different components that interact with each other and with the browser.

![image]({{ site.baseurl }}/assets/images/posts/github-chrome-extensions/1-arquitecture.jpg){: .galleryThumb}


**manifest.json**

This file describes the content of the extension. Without this file, you have no extension. Defines rules for content scripts injections, as well as the assets, styles, and other things that the extension will have access to.


**background.js**

This is the heart and soul of your extension. All the “hard” business logic and native browser interaction should go in here as much as possible. The background script does NOT have access to the DOM and pages itself, but it can access through content scripts. It can also interact with the popup page.


**Content Scripts**

Content scripts can be injected into the tabs in the browser and access the DOM in the context of a browser session. This is where you can add new DOM elements, add extra listeners etc. Note: content scripts are optional

**popup page**

That little app icon you see when clicking/activating an extension can show a small dialogo or page in your browser.

![Tux, the Linux mascot](https://i.stack.imgur.com/4kX7v.png)


Can be built with any framework like React or Angular, or just plain HTML depending on your needs.


**UI Elements**

A dedicated page for customising settings of your extension. This page should persist any settings to the store, to be fetched again by other parts of your plugin.

### Boilerplate

I've created several chrome extensions and after the second one, I realized that I wanted to save some basic setup time while doing it, so I created a chrome-extension-boilerplate code that will have all the necessary things to start working on your new chrome extension! Try it out! :)


`YEAR-MONTH-DAY-title.MARKUP`

Where `YEAR` is a four-digit number, `MONTH` and `DAY` are both two-digit numbers, and `MARKUP` is the file extension representing the format used in the file. After that, include the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}
