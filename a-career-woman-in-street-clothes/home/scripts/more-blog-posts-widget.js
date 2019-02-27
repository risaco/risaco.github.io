// Generates the "More Blog Posts" side widget

// ***** BLOG POST DICTIONARY *****
var blogPosts = [
    {
      title: "Resolutions are Just Fancy Goals",
      snippet: "I gave up New Year’s resolutions two years ago in favor of mantras. Previous years proved to me that I wasn’t working on anything I “resolved” to do. So, in 2017, I decided to change my approach, and it has stuck with me ever since.",
      url: "blog-posts/2019-01/resolutions-are-fancy-goals.html",
      img: "images/resolutions.jpg",
      postdate: "February 27, 2019",
      style: "lightStyle"
    },
    {
      title: "5 Things I Learned in Bootcamp",
      snippet: "I didn’t take the college road to becoming a software engineer. I went to college to become a rocket scientist, and I hold a B.S. in Physics for my efforts. Although aerospace engineering hasn’t become a reality for me as of yet, I am not particularly dismayed.",
      url: "blog-posts/2019-01/things-learned-in-bootcamp.html",
      img: "images/tilib-1.jpeg",
      postdate: "January 31, 2019",
      style: "darkStyle"
    },
    {
      title: "Inclusion 2019 Workshop Review",
      snippet: "I spent my morning with Dr. Shirley Davis in an amazing diversity & inclusion workshop hosted by Nonprofit Connect</a> at the Kauffman Foundation Conference Center in Kansas City, Missouri. We broke down the difference between diversity and inclusion, why you need both, and how to achieve both in an organization",
      url: "blog-posts/2019-01/inclusion-2019-review.html",
      img: "images/inclusion-2019-review-1.jpg",
      postdate: "January 30, 2019",
      style: "darkStyle"
    },
    {
      title: "5 More Things I Learned in Bootcamp",
      snippet: "I mentioned in a previous post that  I took the non-traditional road to becoming a software engineer by attending a coding bootcamp, and that I did manage to learn a few tech-ish things. Well, I also learned quite a few non-tech things during the course of the program.",
      url: "blog-posts/2019-01/more-things-learned-in-bootcamp.html",
      img: "images/more-tilib-1.jpg",
      postdate: "January 14, 2019",
      style: "darkStyle"
    },
    {
      title: "My First Conference Speaking Experience",
      snippet: "One of my goals for 2019 is to speak at 2-3 conferences. I am happy to report that I successfully completed my first conference speaking engagement on Saturday, February 9, 2019 at DevFest KC on the campus of the University of Missouri-Kansas City!",
      url: "blog-posts/2019-02/devfestkc-2019.html",
      img: "images/devfest-kc-1.jpg",
      postdate: "January 8, 2019",
      style:"darkStyle"
    }
  ];





// ***** Main Function *****
window.onload = function(listPosts) {
  

  
  // Once window loads...fill the widget with post info

  console.log(blogPosts.length);

 // for each post, listed from latest to oldest
 for (i =0; i < blogPosts.length; i++){
  j = (blogPosts.length-1)-i;

  var breakTag = document.createElement('br');
  // entire blog post wrapped in appropriate <a href>
  var post = document.createElement('a'); 

  // blog post card without blog link (gets inserted into post)
  var blogcard = document.createElement('div'); 
  blogcard.classList.add("card", "bg-dark", "text-white");

  // image div is appended as child to blogcard
  var image = document.createElement('img');
  image.classList.add("card-img");
  image.setAttribute("style", "opacity:0.75;");

  // div with title overlay (gets appended inserted into blog-card after the img)
  var overlay = document.createElement('div');
  overlay.classList.add("card-img-overlay");

  // header div is appended as child to overlay
  var btnHeader = document.createElement('h4');
  btnHeader.classList.add("card-title");

  var darkStyle = "text-shadow: 2px 2px black;";
  var lightStyle = "color: black; text-shadow: 2px 2px white;";

  if(blogPosts[j].style == "darkStyle") {
    btnHeader.setAttribute("style", darkStyle);
  }
  else{
    btnHeader.setAttribute("style", lightStyle);
  }
  
  btnHeader.innerHTML = blogPosts[j].title;
  overlay.appendChild(btnHeader);

  image.setAttribute("src", blogPosts[j].img);
  image.setAttribute("alt", blogPosts[j].title);
  

  post.setAttribute("href", blogPosts[j].url);
  blogcard.appendChild(image);
  blogcard.appendChild(overlay);
  post.appendChild(blogcard);

  document.getElementById("postList").appendChild(post);
  document.getElementById("postList").appendChild(breakTag);
  

  console.log(blogPosts[j].style);
  console.log(j + ": " + blogPosts[j].title);
  console.log("post element: " + post);
 }
  
}



// <a href="../2019-02/devfestkc-2019.html">
// <div class="card bg-dark text-white">
// <img src="../../images/devfest-kc-1.jpg" class="card-img" alt="DevFest KC 2019" style="opacity:0.75">
// <div class="card-img-overlay">
//   <h4 class="card-title" style="text-shadow: 2px 2px black;">My First Conference Speaking Experience</h4>
// </div>
// </div></a>

// <br>

// <a href="../2019-01/more-things-learned-in-bootcamp.html">
// <div class="card bg-dark text-white">
//   <img src="../../images/more-tilib-1.jpg" class="card-img" alt="5 More Things I Learned in Bootcamp" style="opacity:0.75">
//   <div class="card-img-overlay">
//     <h4 class="card-title" style="text-shadow: 2px 2px black;">5 More Things I Learned in Bootcamp</h4>
//   </div>
// </div></a>

// <br>

// <a href="../2019-01/inclusion-2019-review.html">
// <div class="card bg-dark text-white">
//   <img src="../../images/inclusion-2019-review-1.jpg" class="card-img" alt="Inlcusion 2019 Workshop Review" style="opacity:0.75">
//   <div class="card-img-overlay">
//     <h4 class="card-title" style="text-shadow: 2px 2px black;">Inclusion 2019 Workshop Review</h4>
//   </div>
// </div></a>

// <br>

// <a href="../2019-01/things-learned-in-bootcamp.html">
// <div class="card bg-dark text-white">
//   <img src="../../images/tilib-1.jpeg" class="card-img" alt="5 Things I Learned in Bootcamp" style="opacity:0.75">
//   <div class="card-img-overlay">
//     <h4 class="card-title" style="text-shadow: 2px 2px black;">5 Things I Learned in Bootcamp</h4>
//   </div>
// </div></a>

// <br>

// <a href="../2019-01/resolutions-are-fancy-goals.html">
// <div class="card bg-dark text-white">
//   <img src="../../images/resolutions.jpg" class="card-img" alt="Resolutions are Just Fancy Goals" style="opacity:0.75">
//   <div class="card-img-overlay">
//     <h4 class="card-title" style="color: black; text-shadow: 2px 2px white;">Resolutions are Just Fancy Goals</h4>
//   </div>
// </div></a>