---
layout: project
title: EverKindle
description: A script to convert notes from Evernote to Kindle.
date: 2014-8-24
---
<div class="col-md-6">
    <img class="topimg" src="/static/img/EverKindleSC.png" alt="EverKindle"/>
</div>
<p>
    Like most of my projects, this one came about because I wanted my computer to do something which it unfortunately wouldn't do without a little help. In this case, I wrote my notes in a program called <a href="https://evernote.com/">Evernote</a>. I also have a Kindle; and while I must admit I was initially skeptical of e-readers in general (the tactile, physical experience of reading is still something I put quite a lot of value in) the Kindle does a great job of adding so much utility in other areas that I have become quite happily a convert.
</p>
<p>
    Around May of last year, I was faced with a logistical problem: the rest of my team and I were heading up to Massachusets for Eastern Sprints. This involves several hours on a bus (in both directions), and several days in a hotel the weekend before finals. I didn't want to bring my laptop and have to worry about charging or losing it, and if I printed out my notes I would have to worry about some 300 pages getting out of order or lost. I wanted to simply transfer them to my Kindle, and then just take that. So, as a somewhat pointless but fun form of procrastination, I began looking into how to do that.
</p>
<p>
    I found out that Evernote could export notes in HTML, but not the .mobi, .epub, or .azw3 that the Kindle supports. Luckily there's awesome tools like <a href="http://calibre-ebook.com/">Calibre</a> which are great for the transfer and conversion of files. But Calibre doesn't support combining many HTML files into one 'book', at least not with the formatting that Evernote exports. Luckily, it does support merging many note into one big note, which you can then export. However, this large note is now in reverse chronological order; that is, the most recent notes will be at the front of the 'book', rather than the end. Not a great way to read through your notes when studying. So, I turned to my trusty favorite string manipulation and scripting language: Python.
</p>
<p>
    My first script was quick and hacky. It didn't do everything I wanted to, and it could break easily if Evernote changed the format of their outputs. It was a simple script which just read the contents of the merged notes file, parsed it into the individual notes that comprised it, flipped their order, then wrote them out to a new file (with a little HTML doctoring to fix some broken tags). It sufficed, and enabled me to put the notes on my Kindle and study them sufficiently to do fine on the final. But the hacky nature niggled at me enough that when I finally had some free time, on a vacation from work over the summer, I opened the project back up again and completely re-wrote the script with fewer of the shortcomings.
</p>
<p>
    On my second attempt, I took advantage of Evernote's ability to export an index of the notes, as well as the notes themselves. After a litle playing with the <code>urllib2</code> library (some things, like an amprisand, had to be dealt with manually) I was able to write a script that could simply read the index, grab the exported file names, and open those files to read the contents, do a little CSS doctoring to spruce up the headers, and write all the notes in correct chronological order to one file. This file could then by converted and transferred by Calibre with no problems - making the whole experience of transferring notes much less hassle.
</p>
<p>
    While it is probably true that I would have made better use of my time by simply reading my notes instead of writing a script to convert them for slightly different reading, I found the experience to be useful. String manipulation and url parsing is a fairly easy task in Python, and it gave me a good way to brush up the language. If you're interested in the code for the project (or even using it yourself!), its available <a href="https://github.com/sfjordan/EverKindle">here</a>.
</p>