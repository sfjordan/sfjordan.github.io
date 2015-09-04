---
layout: project
title: Virtual Boathouse 
description: A website an android app for rowing team management.
date: 2014-06-05
---
<div class="col-md-6">
    <img class="topimg" src="/static/img/VBSC1.png" alt="VirtualBoathouse"/>
</div>
<div class="col-md-6">
    <img class="topimg" src="/static/img/VBSC2.png" alt="VirtualBoathouse"/>
</div>
<p>
    Working in groups can be trying, but usually there's simply too much to be done than one person can do. This project proved to be a prime example of that sentiment, and an excellent demonstration of how planning and proper division of labor can go a long way.
</p>
<p>
    Virtual Boathouse was a collaboration for COS 333 (Advanced Programming Techniques, commonly referred to with the affectionate nickname 'story time with Brian Kernighan'), a heavily project-based class at Princeton. The last six weeks of the course or so are spent in groups, developing whatever project interests the group most for display in the in-class demo day. My group consisted of four current or past members of the crew team, and our goal was to use the substantial volume of domain-specific knowledge at our disposal to make the constant challenge of managing a crew team a little easier.
</p>
<p>
    The tool we decided to build to accomplish this task ended up taking the form of a web app (written in Django, with Bootstrap for the front-end) for roster management and an android app for on-the-water stats and performance analysis. Using a simple JSON RESTful API, the android and web apps would keep each other up-to-date on current lineups, piece times, and other useful data. We had a little over a month to get the app up and running, so division of labor and a strict MVP (minimum viable product) focus were essential to the success of the project. Luckily, the other members of my team were great and thanks to some good project management and individual skill we ended up with an A in the project, and the class.
</p>
<p>
    I ended up working with Matt on the android app (available on the google play store <a href="https://play.google.com/store/apps/details?id=com.vbh.virtualboathouse">here</a>), which I was more than happy to tackle since I hadn't done any mobile app development before. The coding paradigm the android SDK uses cerainly took a while to get used to - so much boilerplate has to be written to get something as simple as a box to show up on screen! Matt took care of the offline data storage and API communication, while I built out the lineup draggable list functionality and focused more on the UI side of the app. Images, icons, buttons and UX are definitely not my area of expertise but it was a great challenge having to think about how a user might want to actually interact with our app, rather than the typical sparse command line tool you normally build in an academic CS setting.
</p>
<p>
    This project was a great experience, allowing me to sink my teeth into some completely new paradigms and technologies. On top of the raw technical side, the organizational side was a great learning experience as well - communication between the web and android teams had to be efficient and clear, and when it wasn't (such as when the API was being developed) things broke, and development slowed down. If the two team-members in charge of the API had a miscommunication, it wouldn't just affect their work - the android app would be unstable, making it difficult for me to test the stuff I was working on; any others working on the web app couldn't progress as fast as they wanted to either. There were plenty of other lessons learned as well - simplicty in the UI makes everyone's life easier, when working in an unfamiliar SDK always remember to RTFM, and high quality assets go a long way towards making your UI look good (photo credit goes to <a href="http://www.alekagurel.com/">Aleka Gurel</a>). The project report, for those interested, is available <a href="https://www.dropbox.com/s/ka33almzrpuze4o/virtual-boathouse-report.pdf?raw=1">here</a>.
</p>