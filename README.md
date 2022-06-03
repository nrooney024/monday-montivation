
<h1 align="center"><a target="_blank" href="https://monday-motivation.herokuapp.com/">Motivation Monday</a></h1>
        <br />
        <a target="_blank" href="https://monday-motivation.herokuapp.com/">
        <p align="center">
            <img src="https://user-images.githubusercontent.com/97787737/171951597-2bf1c9de-a0dc-4175-8265-6d87874f9cba.png" width="50%" alt="motivational video website"/>
        </p>
        </a>

Monday Motivation is for the people who got this, but don't know they got this yet. At the click of a button, Monday Motivation will pull together a motivational YouTube video at random to help the user get through those days that they're not feeling it. 

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node.js

Using Node.js, we built a server that houses a list of URLs to motivational YouTube videos. On the click of the button, we pull a URL at random and input it into our iframe to display the motivational video selected to the user.

## Optimizations

At first, we were thinking of hosting an array of iframes on the server, and then on the click of the button we would drop the iframe into the HTML. We decided that it was not necessary to replace the whole iframe and instead we kept a templated iframe in the HTML and added a new src attribute every time someone clicks the button. This way, we only need to keep an array of URLs instead of an array of iframes, and we would only need to update the src attribute, instead of the whole iframe.

## Lessons Learned:

Realizing that the embed URL to a YouTube video is different than the watch URL was the equivalent of someone hiding in a desert. It was hiding in plain sight, but when we realized it, it became one of those "ohhhhh that makes sense" moments.

## Examples:

Take a look at these examples that we have in our portfolios:

**Coders And (from Nick Rooney):** (https://github.com/nrooney024/coders-and/)

**Richmond Custom Woodwork (from Brian Harsha):** (https://github.com/harshabc4/RichmondCustomWoodwork)
