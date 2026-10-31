/* ===========================================================
   Maritsalart — the only file you need to edit
   ===========================================================

   HOW TO ADD A CHAPTER
   1. Copy one of the { ... } blocks below.
   2. Paste it after the last chapter.
   3. Change n, title, subtitle and the text inside body.
   4. Commit. The table of contents, the reading time, the
      prev/next links and the page title all update themselves.

   RULES FOR THE TEXT
   - Wrap each paragraph in <p> ... </p>
   - Put a blank line between paragraphs (easier to read here)
   - Use <em>word</em> for italics, <strong>word</strong> for bold
   - Use <hr> to mark a scene break (renders as three dots)
   - Do NOT use backticks ( ` ) inside the body — they end the string
   =========================================================== */

var BOOK = {
  title:  "Maritsalart",
  author: "Varun Singh",          // pen name goes here if you use one
  genre:  "Fantasy",

  // Shown under the title on the front page. Two or three sentences reads best.
  blurb:  "A fantasy story, serialised chapter by chapter. Read it here as it is written — no account, no app, no sign-up.",

  email:   "varunsingh09@proton.me",
  youtube: "https://youtube.com/@panwar0911"
};


var CHAPTERS = [

  {
    n: 1,
    title: "Chapter One",
    subtitle: "Replace this subtitle",
    body: `
      <p>This is placeholder text, here so you can see how the reader looks with a real chapter in it. Open <strong>assets/chapters.js</strong>, find this block, and replace everything between the backticks with your own writing.</p>

      <p>Each paragraph goes inside its own pair of <em>&lt;p&gt;</em> tags, with a blank line between them. Keep that pattern and the spacing, the drop cap on the opening letter, and the measure of the line all take care of themselves.</p>

      <p>The first letter of the first paragraph is set larger and in the accent colour — a small nod to printed books. If you would rather not have it, delete the <em>.prose p:first-of-type::first-letter</em> rule in <strong>assets/site.css</strong>.</p>

      <hr>

      <p>That line above is a scene break: three dots, centred, no fuss. Use it when the story jumps in time or place instead of starting a new chapter.</p>
    `
  },

  {
    n: 2,
    title: "Chapter Two",
    subtitle: "Replace this subtitle",
    body: `
      <p>A second placeholder chapter, so the previous and next links have somewhere to go. Delete this whole block once your real second chapter is ready, and paste your own in its place.</p>

      <p>Reading time is calculated from the word count at roughly 220 words a minute, and shown next to each chapter in the table of contents. Longer chapters simply report a longer time.</p>

      <p>If you want to quote something — a letter, a song, a line of scripture from your world — wrap it in <em>&lt;blockquote&gt;</em> and it will be set apart with a rule down the left and italics.</p>
    `
  }

];
