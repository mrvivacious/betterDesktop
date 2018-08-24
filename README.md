# betterDesktop
Google Calendar, small notes, and a homework list in one place

<hr>

### How 2 deploy
Step 0. In terminal, CD to wherever you want this project cloned and git clone

For example, this installs the folder to your desktop with the name betterDesktop:<br>
`cd Desktop && git clone https://github.com/mrvivacious/betterDesktop.git betterDesktop`

Step 1: Inside the folder, right-click on the file `index.html` and select "Open with Chrome" (whatever browser you desire).

Step 2: Point the iframe src in `index.html` to your <a href="https://support.google.com/calendar/answer/41207?hl=en">Google Calendar</a>!

<ul>
  <li>Go <a href="https://calendar.google.com/calendar/r/settings/calendar/di5iaG9va3lhOThAZ21haWwuY29t">here</a> and scroll down to "Integrate calendar".</li>
  <li>Copy everything inside the "Embed code" field.</li>
  <li>Open index.html with a text editor of any kind and <b>replace line 17 ("<iframe src...") with your embed code</b>.</li>
    <li>Refresh the browser page of betterDesktop (to update the page with the changes made) and your calendar should load!</li>
</ul>
    
Step 3: To save the text data, please make sure to click the "Save written data" button (autosaving will come in a future update, thank you for your patience).

Good luck, have fun!
