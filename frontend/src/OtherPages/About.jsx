import React from "react";

export default function About() {
  return (
    <div id="OtherPage">
      <h1>About</h1>
<p>
  Welcome to Searchy—your no-nonsense, ad-free, privacy-loving search buddy.  
  Think of us as the chill roommate of search engines: simple, minimal, and totally uninterested in your personal life.
</p>

{/* <p> */}
<ul>
  <strong>Here's the deal:</strong>
  {/* </p> */}
 
  <li>No ads. No distractions. No tracking.</li>
  <li>No creepy algorithms stalking your clicks.</li>
  <li>Just pure, unfiltered searches delivered straight to you, minus the drama.</li>
</ul>
<p>
  <strong>How Searchy Works:</strong>
</p>
<ol>
  <li><strong>You search.</strong> Type in your query—be it a recipe, random trivia, or something super specific.</li>
  <li><strong>We fetch results.</strong> Searchy uses DuckDuckGo's API to deliver clean and reliable search results, free from ads or trackers.</li>
  <li><strong>We show you.</strong> Clean, distraction-free results served instantly—no flashing banners, no sneaky pop-ups.</li>
  <li><strong>That's it.</strong> Once you leave, it's like you were never here (in the best way possible).</li>
</ol>
<p>
  Searchy isn't here to compete with the big guys (you know who). Designed with ❤️ & developed with 🧠 by <strong><a href="https://muditmehta.onrender.com/">Mudit Mehta</a></strong>, 
  I'm just here to offer you a laid-back alternative that respects your peace and privacy. 
  So, sit back, type away, and enjoy the zen of minimalist searching.  
</p>
<p className="Last-p"><strong>Searchy: Because your business is none of our business.</strong></p>

    </div>
  );
}
