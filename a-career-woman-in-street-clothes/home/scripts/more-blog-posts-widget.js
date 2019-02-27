// Generates the "More Blog Posts" side widget

// ***** BLOG POST DICTIONARY *****
var blogPosts = [
    {
      "title": "Resolutions are Just Fancy Goals",
      "snippet": "I gave up New Year’s resolutions two years ago in favor of mantras. Previous years proved to me that I wasn’t working on anything I “resolved” to do. So, in 2017, I decided to change my approach, and it has stuck with me ever since.",
      "url": "../2019-01/resolutions-are-fancy-goals.html",
      "img": "../../images/resolutions.jpg",
      "postdate": "February 27, 2019"
    },
    {
      "title": "5 Things I Learned in Bootcamp",
      "snippet": "I didn’t take the college road to becoming a software engineer. I went to college to become a rocket scientist, and I hold a B.S. in Physics for my efforts. Although aerospace engineering hasn’t become a reality for me as of yet, I am not particularly dismayed.",
      "url": "../2019-01/things-learned-in-bootcamp.html",
      "img": "../../images/tilib-1.jpeg",
      "postdate": "January 31, 2019"
    },
    {
      "title": "Inclusion 2019 Workshop Review",
      "snippet": "I spent my morning with Dr. Shirley Davis in an amazing diversity & inclusion workshop hosted by Nonprofit Connect</a> at the Kauffman Foundation Conference Center in Kansas City, Missouri. We broke down the difference between diversity and inclusion, why you need both, and how to achieve both in an organization",
      "url": "../2019-01/inclusion-2019-review.html",
      "img": "../../images/inclusion-2019-review-1.jpg",
      "postdate": "January 30, 2019"
    },
    {
      "title": "5 More Things I Learned in Bootcamp",
      "snippet": "I mentioned in a previous post that  I took the non-traditional road to becoming a software engineer by attending a coding bootcamp, and that I did manage to learn a few tech-ish things. Well, I also learned quite a few non-tech things during the course of the program.",
      "url": "../2019-01/more-things-learned-in-bootcamp.html",
      "img": "../../images/more-tilib-1.jpg",
      "postdate": "January 14, 2019"
    },
    {
      "title": "My First Conference Speaking Experience",
      "snippet": "One of my goals for 2019 is to speak at 2-3 conferences. I am happy to report that I successfully completed my first conference speaking engagement on Saturday, February 9, 2019 at DevFest KC on the campus of the University of Missouri-Kansas City!",
      "url": "../2019-02/devfestkc-2019.html",
      "img": "../../images/devfest-kc-1.jpg",
      "postdate": "January 8, 2019"
    }
  ];



var post; // entire blog post wrapped in appropriate <a href>
var blog-card; // blog post card without blog link (gets inserted into post)
var overlay; // div with title overlay (gets appended inserted into blog-card after the img)

// build the post
 var div = document.createElement('div');


<a href="../2019-02/devfestkc-2019.html">
<div class="card bg-dark text-white">
<img src="../../images/devfest-kc-1.jpg" class="card-img" alt="DevFest KC 2019" style="opacity:0.75">
<div class="card-img-overlay">
  <h4 class="card-title" style="text-shadow: 2px 2px black;">My First Conference Speaking Experience</h4>
</div>
</div></a>

<br>

<a href="../2019-01/more-things-learned-in-bootcamp.html">
<div class="card bg-dark text-white">
  <img src="../../images/more-tilib-1.jpg" class="card-img" alt="5 More Things I Learned in Bootcamp" style="opacity:0.75">
  <div class="card-img-overlay">
    <h4 class="card-title" style="text-shadow: 2px 2px black;">5 More Things I Learned in Bootcamp</h4>
  </div>
</div></a>

<br>

<a href="../2019-01/inclusion-2019-review.html">
<div class="card bg-dark text-white">
  <img src="../../images/inclusion-2019-review-1.jpg" class="card-img" alt="Inlcusion 2019 Workshop Review" style="opacity:0.75">
  <div class="card-img-overlay">
    <h4 class="card-title" style="text-shadow: 2px 2px black;">Inclusion 2019 Workshop Review</h4>
  </div>
</div></a>

<br>

<a href="../2019-01/things-learned-in-bootcamp.html">
<div class="card bg-dark text-white">
  <img src="../../images/tilib-1.jpeg" class="card-img" alt="5 Things I Learned in Bootcamp" style="opacity:0.75">
  <div class="card-img-overlay">
    <h4 class="card-title" style="text-shadow: 2px 2px black;">5 Things I Learned in Bootcamp</h4>
  </div>
</div></a>

<br>

<a href="../2019-01/resolutions-are-fancy-goals.html">
<div class="card bg-dark text-white">
  <img src="../../images/resolutions.jpg" class="card-img" alt="Resolutions are Just Fancy Goals" style="opacity:0.75">
  <div class="card-img-overlay">
    <h4 class="card-title" style="color: black; text-shadow: 2px 2px white;">Resolutions are Just Fancy Goals</h4>
  </div>
</div></a>