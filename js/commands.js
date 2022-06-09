var instagram = "https://www.instagram.com/kenny.dd/";
var linkedin = "https://www.linkedin.com/in/kennyndang/";
var github = "https://www.github.com/kenny-dd/";
var email = "mailto:ynneknd@gmail.com";
var repo = "https://www.github.com/kenny-dd/terminalSite";
//var portfolioSite = "https://www.youtube.com";

whois = [
  "<br>",
  "Hi! I'm Kenny Dang.",
  "I'm currently a computer science undergraduate at Old Dominion University.",
  "My hobbies and interests include playing videogames, watching anime, weightlifting, building computers and keyboards, and anything tech related.",
  "My main coding languages right now are C++, Java, HTML/CSS/JS, and MySQL.",
  "As of now, my main focus is sofware engineering and end goal is to be a front-end developer.",
  "<br>",
];

whoami = [
  "<br>",
  "guest",
  "<br>"
];

social = [
  "<br>",
  'instagram      <a href="' + instagram + '" target="_blank">instagram/kenny.dd' + "</a>",
  'linkedin       <a href="' + linkedin + '" target="_blank">linkedin/kennyndang' + "</a>",
  'github         <a href="' + github + '" target="_blank">github/kenny-dd' + "</a>",
  "<br>",
];

help = [
  "<br>",
  '<span class="command">whois</span>          who am i?',
  '<span class="command">whoami</span>         who are you?',
  '<span class="command">social</span>         display social networks',
  '<span class="command">projects</span>       view coding projects',
  '<span class="command">history</span>        view command history',
  '<span class="command">help</span>           you obviously already know what this does',
  '<span class="command">email</span>          use this with caution',
  '<span class="command">date</span>           displays the current date',
  '<span class="command">repo</span>           opens the websites repository',
  '<span class="command">sudo</span>           only use if you&#39;re an admin',
  '<span class="command">clear</span>          clear terminal',
  '<span class="command">banner</span>         display the header',
  "<br>",
];

banner = [
  '<span class="index">kenny dang (KD) terminal portfolio site.</span>',
  "<br>",
  '<span class="ban">⣿⣿⣿⣿⣯⣿⣿⠄⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠈⣿⣿⣿⣿⣿⣿⣆⠄</span>',
  '<span class="ban">⢻⣿⣿⣿⣾⣿⢿⣢⣞⣿⣿⣿⣿⣷⣶⣿⣯⣟⣿⢿⡇⢃⢻⣿⣿⣿⣿⣿⢿⡄</span>',
  '<span class="ban">⠄⢿⣿⣯⣏⣿⣿⣿⡟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣧⣾⢿⣮⣿⣿⣿⣿⣾⣷</span>',
  '<span class="ban">⠄⣈⣽⢾⣿⣿⣿⣟⣄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣝⣯⢿⣿⣿⣿⣿</span>',
  '<span class="ban">⣿⠟⣫⢸⣿⢿⣿⣾⣿⢿⣿⣿⢻⣿⣿⣿⢿⣿⣿⣿⢸⣿⣼⣿⣿⣿⣿⣿⣿⣿</span>',
  '<span class="ban">⡟⢸⣟⢸⣿⠸⣷⣝⢻⠘⣿⣿⢸⢿⣿⣿⠄⣿⣿⣿⡆⢿⣿⣼⣿⣿⣿⣿⢹⣿</span>',
  '<span class="ban">⡇⣿⡿⣿⣿⢟⠛⠛⠿⡢⢻⣿⣾⣞⣿⡏⠖⢸⣿⢣⣷⡸⣇⣿⣿⣿⢼⡿⣿⣿</span>',
  '<span class="ban">⣡⢿⡷⣿⣿⣾⣿⣷⣶⣮⣄⣿⣏⣸⣻⣃⠭⠄⠛⠙⠛⠳⠋⣿⣿⣇⠙⣿⢸⣿</span>',
  '<span class="ban">⠫⣿⣧⣿⣿⣿⣿⣿⣿⣿⣿⣿⠻⣿⣾⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣹⢷⣿⡼⠋</span>',
  '<span class="ban">⠄⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣿⣿⣿⠄⠄</span>',
  '<span class="ban">⠄⠄⢻⢹⣿⠸⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣼⣿⣿⣿⣿⡟⠄⠄</span>',
  '<span class="ban">⠄⠄⠈⢸⣿⠄⠙⢿⣿⣿⣹⣿⣿⣿⣿⣟⡃⣽⣿⣿⡟⠁⣿⣿⢻⣿⣿⢿⠄⠄</span>',
  '<span class="ban">⠄⠄⠄⠘⣿⡄⠄⠄⠙⢿⣿⣿⣾⣿⣷⣿⣿⣿⠟⠁⠄⠄⣿⣿⣾⣿⡟⣿⠄⠄</span>',
  '<span class="ban">⠄⠄⠄⠄⢻⡇⠸⣆⠄⠄⠈⠻⣿⡿⠿⠛⠉⠄⠄⠄⠄⢸⣿⣇⣿⣿⢿⣿⠄⠄</span>',
  "<br>",
  '<span class="indent">----</span>',
  '<span class="color2">welcome to my first interactive web terminal.</span>',
  '<span class="color2">for a list of available commands, type</span> <span class="command">\'help\'</span><span class="color2">.</span>',
  //'<span class="indent">----</span>',
  //'<span class="color2">for my simplified portfolio, click </span><a target="_blank" href="'+ portfolioSite + '">\'here\'</a><span class="color2">.</span>',
  '<span class="indent">----</span>',
  '<span class="color2">click the flashing cursor to type.</span>',
  '<br>'
];

function date() {
  // get a new date (locale machine date time)
  var date = new Date();
  // get the date as a string
  var n = date.toDateString();
  // get the time as a string
  var time = date.toLocaleTimeString();

  // log the date in the browser console
  console.log("date:", n);
  // log the time in the browser console
  console.log("time:", time);

  return "date: " + n + " " + time;
}
