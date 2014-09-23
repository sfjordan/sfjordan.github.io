---
layout: project
title: NetworkTest
description: A script to check and print your wireless connection's quality, color-coded.
date: 2014-7-15
---
<div class="col-md-6">
    <img class="topimg" src="{{ site.url }}/static/img/NetworkTestSC.png" alt="NetworkTest"/>
</div>
<p>
    I was sitting in a cafe in London, just outside Leicester Square, waiting around until the movie I'd bought tickets for later that afternoon. I pulled out my laptop and connected to their wifi, with the intention of killing some time just surfing the web. Unfortunately, their wireless network sucked. I began wondering just how slow it really was, so I tried running a <a href="http://www.speedtest.net/">speedtest</a>. Their wifi was so slow, however, the speedtest site just wouldn't load. The fancy animations and javascript libraries were making the rest of the site unusable on such a low-quality connection. I thought to myself, 'Why do I need these animations? I'm just here for one thing...'. So, I started looking for a speedtest script I could just run from the terminal, no GUI necessary. Looking around led me to <a href="https://github.com/sivel/speedtest-cli">this</a> script, a neat little bit of Python that would do all the actual testing for me. When I ran it, however, I found it a little lacking. It wouldn't tell you the percentage packet loss of your connection, or if your wireless wasn't actually connected to the Internet. Hey, I thought. That's probably something I can add.
</p>
<p>
    So I wrote a shell script that would run a ping to Google's DNS servers (mainly because 8.8.8.8 is an easy IP address to remember, and Google is almost never down), as well as another Python script that would parse the output of the speedtest script and return just the useful information. 
</p>
<p>
    While writing it, I also decided to add some color. A little bit of fun with Python's <code>termcolor</code> library, and soon enough I was able to output log information in light gray, and the average ping, percentage packet loss, and upload/download speeds; all color coded with green for good, yellow for OK, and red for bad. This way I could simply run one script and have an easily visualization of my wireless connection's quality, without having to mess around with browsers or anything else. Just a quick terminal command, and done. I also had a little fun messing around the the <code>tee</code> unix command, which can split input streams into two. Using this, I added a '-v' option to my script, so users could either opt for the simple, important info only look or actually view all the results as they came back in real-time.
</p>
<p>
    In addition, following on from my desire to see the network's quality quickly and easily, I wrote a little <a href="http://www.alfredapp.com/">Alfred</a> script so I could invoke it with my favorite little mac utility. That wasn't too hard, but it really helps in terms of speed; now I don't even have to open a terminal, I can just use Alfred to invoke the script in about four or five key presses. It even can pass through the 'verbose' setting (-v)! If you're interested in the code for the project (or instructions on how to run it), its available <a href="https://github.com/sfjordan/networktest">here</a>.
</p>