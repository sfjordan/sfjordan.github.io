---
layout: project
title: TigerTidal
description: A 'marauder's map'-style iOS app.
date: 2015-01-06
---

<div class="col-md-6">
    <img class="topimg" src="/static/img/TigerTidalSC.png" alt="TigerTidal"/>
</div>

<p>
    At Princeton, every AB student is expected to do two semesters of Junior independent work and one Senior thesis. For those studying Economics or Physics or Public Policy, this can be somewhat of a pain. It takes up a lot of time, and while it encourages you to focus on a particular problem there isn't always an issue that is the right size to make much progress on in a single term. Fortunately for me, this arrangement works quite nicely with how Computer Science projects are usually done - identify a problem area, then find (and perhaps learn) an appropriate technology to solve the problem. Learning new technologies is something that I find myself less and less uncomfortable with, as my grasp of the underlying concepts (which a lot of frameworks or languages share) improves.
</p>
<p>
    I've worked in the past in web app frameworks like Ruby on Rails and Django, and in various languages like Java, C, or python; one thing I haven't done before but always wanted to try was building an iOS app. I worked with the Android SDK on a previous project, where I found a lot of the development concepts a little foreign and unintuitive (I also tried to jump right in immediately, thinking that a good knowedlge of Java would be enough to understand what sample or stackoverflow code was doing - definitely not true, as it turns out). But now that I had had some exposure to the mobile development paradigm, I thought that my first semester of Junior independent work would be a great opportunity to seize and learn something I'd always wanted to try.
</p>
<p>
    I ended up building something a little more complicated than a simple iOS app. I wrote a fairly simple fileserver and RESTful API using Node.js (another thing I'd heard about, and had wanted to try it out firsthand). I also wrote an iOS app in a mixture of Swift and Objective-C, due to the need to use the iOS Google Maps SDK (which I will get into later). The goal of the project was to replicate the Marauder's Map from Harry Potter on the Princeton campus. Users could log in to the app, and while the app was open the would be able to see other students going about the campus (and other students would be able to see them). Although this seemed like a fairly simple concept, it quickly grew in scale - giving me a great personal anecdote to relate when describing how difficult it is to estimate software development timelines. As for the design of the project itself, they say a picture's worth 1000 words. So, here's my 2000 word design essay:
</p>
<div class="col-md-6">
    <img class="midimg" src="/static/img/TigerTidal_design.png" alt="TigerTidal"/>
</div>
<div class="col-md-6">
    <img class="midimg" src="/static/img/TigerTidal_updatejson.png" alt="TigerTidal"/>
</div>
<p>
    Above is a couple of simple diagrams, illustrating the high-level division of labor in the (left) and the JSON model used for server-client communicaiton (right).
</p>
<p>
    One of the first problems I ran into when building the iOS client was available map data. I had assumed that a map of campus would be trivial to obtain, and it was (in the form of the default Apple Maps MapView object), but it such low detail as to be useless for my purposes. I needed a map with pedestrian-level details, with buildings marked on it and so on - Apple Maps had none of that, and seemed to only be aware of a single road running through campus. So, I had to look into obtaining an API key from Google and using the Google Maps SDK, which had far more street-level detail. This is just one example of an unexpected setback greatly increasing the complexity of the project, since the SDK is written in Objective-C, meaning I now needed to be familiar with two different languages for the same client. In any case, I eventually got it working and obtained the detailed maps that were central to the project, along with some bonus features like GPS-coordinate pins and some pretty animations, courtesy of the SDK.
</p>
<p>
    Another problem I ran up against was the limitations of a mobile platform. The resources on a mobile platform (processing power, bandwidth, and battery) are not huge; I wanted my app to work with a decent number of concurrent users without slowing to a crawl or massively reducing battery life. In order to ameliorate some of these issues, I tried a couple of things. First, in order to reduce the high latency problem inherent in mobile internet connections, I update the server with your current bearing and velocity. Other clients use this information to interpolate your position between updates, meaning that you can display the illusion of fluid motion while maintaining a lower update rate (which both reduces the effect of high latency connections, and has significant savings on battery usage). Unfortunately, this means I have a bunch of original user positions, and their distance and direction traveled after every update frame. To draw the new icon on the GMView map, I need a pair of latitude and longitude coordinates. This can be done, but it is a rather complex calculation and thus unsuitable to be done for every user every time the map is updated (which must be frequently if I want the movement to appear fluid). Luckily, there are a couple of common approximations for this. The Pythagorean <a href="http://www.movable-type.co.uk/scripts/latlong.html">equirectangular approximation</a> would be fine, but given that I know users will be within a particular couple square miles (the Princeton campus) I used a local approximation to convert between meters and degrees of latitute/longitude. This method is significantly faster than all others (it involves just multiplication/division, with only two trigonometric functions to compute per user per update), and as an added bonus it ends up being more accurate within the bounderies I set as well!
</p>
<p>
    One of the most unexpected issues I ran into during this project was testing. CS assignments for school classes frequently have either the specifications already written for you, or perhaps automated unit tests, and sometimes both. For this project, however, all my tests had to be designed and written by me. On top of this, for things like stress testing or client testing with multiple other active users I had to create a testing framework (in the form of a series of bash and python scripts) which would simulate different types of load and use of the system. It was a great experience and certainly showed me first hand the value of simple, testable and modular code - but it was another unexpectedly large piece of work that had to be done before I could continue testing and building the iOS client.
</p>
<p>
    Overall, it was a great experience and certainly helped solidify my experience with mobile development. It was also the largest project I was in charge of everything from time management to design to implementation to testing. The time management lessons learned were probably the most valuable, but testing was a close second - not allowing feature creep, writing clean code and a focus on testing from the very beginning and all great rules of thumb that I've had to learn first hand from the couple of months of on-and-off work on this project. The final report on the project is avaialble <a href="https://www.dropbox.com/s/ejghchrm5b6u733/fall_JP_report.pdf?raw=1">here</a>, and the poster I designed to present to the Princeton CS department can be found <a href="https://www.dropbox.com/s/fesrkcqmaklbuaj/fall_JP_poster.pdf?raw=1">here</a>.
</p>