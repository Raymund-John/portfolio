function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const Menu = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: `menu-container ${props.showMenu}` }, /*#__PURE__*/
    React.createElement("div", { className: "overlay" }), /*#__PURE__*/
    React.createElement("div", { className: "menu-items" }, /*#__PURE__*/
    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#welcome-section", onClick: props.toggleMenu }, "HOME")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#about", onClick: props.toggleMenu }, "ABOUT")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#projects", onClick: props.toggleMenu }, "PORTFOLIO")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#contact", onClick: props.toggleMenu }, "CONTACT"))), /*#__PURE__*/




    React.createElement(SocialLinks, null))));



};

/*Navigation*/

const Nav = props => {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("nav", { id: "navbar" }, /*#__PURE__*/
    React.createElement("div", { className: "nav-wrapper" }, /*#__PURE__*/
    React.createElement("p", { className: "brand" }, "Safe", /*#__PURE__*/

    React.createElement("strong", null, "House")), /*#__PURE__*/

    React.createElement("a", {
      onClick: props.toggleMenu,
      className:
      props.showMenu === "active" ? "menu-button active" : "menu-button" }, /*#__PURE__*/


    React.createElement("span", null))))));





};

/*Heading*/

const Header = props => {
  return /*#__PURE__*/(
    React.createElement("header", { id: "welcome-section" }, /*#__PURE__*/
    React.createElement("div", { className: "forest" }), /*#__PURE__*/
    React.createElement("div", { className: "silhouette" }), /*#__PURE__*/
    React.createElement("div", { className: "moon" }), /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("h1", null, /*#__PURE__*/
    React.createElement("span", { className: "line" }, " A place"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, " where you'll"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, /*#__PURE__*/
    React.createElement("span", { className: "color" }, "never"), " feel inferior.")), /*#__PURE__*/


    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: "#projects" }, "My portfolio"), /*#__PURE__*/
    React.createElement("a", { href: "#contact", className: "cta" }, "Contact me")))));






};

/*About Component*/

const About = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "about" }, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("article", null, /*#__PURE__*/
    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "Who's this guy?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc full" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "My name is Raymund John."), /*#__PURE__*/
    React.createElement("p", null, "I am a 2nd-Year Student of STI Las Pinas based in the beautiful place of Manila, Philippines."), /*#__PURE__*/



    React.createElement("p", null, "I used to be an Introvert in my almost entire life. But as time passes by, I got time to develop myself and be a better one. I also love to solve logical problems, to cook, to sing, and to watch series or movies.")), /*#__PURE__*/






    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "What does he do?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "I'm a Computer Science Student."), /*#__PURE__*/
    React.createElement("p", null, "I decided to enroll on this course in order for me to have more knowledge about software or game development, and web development."), /*#__PURE__*/



    React.createElement("p", null, "There has been a stereotype about Technology Students. People believe that we we're just typing for certain things, and fixing computer components. But there's no such thing as easy as pie. We have to learn all the impotances of coding, develop websites and softwares on our own with programming languages that most nontechie people don't know, and solve logical and math problems.")), /*#__PURE__*/








    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "A cook as well."), /*#__PURE__*/
    React.createElement("p", null, "Cooking has been a part of my life ever since I was a kid. This kind of my hobby helped me to get through and deal with my stress."), /*#__PURE__*/


    React.createElement("p", null, "I started to teach myself in making dishes on my own since I will be living on my own someday, and I don't want to owe someone about something. I wanted to be as independent as everyone does."))))));







};

/*Project Component*/

const Project = props => {
  const tech = {
    css: "fab fa-css3-alt",
    js: "fab fa-js-square" };


  const link = props.link || "http://";
  const repo = props.repo || "http://";

  return /*#__PURE__*/(
    React.createElement("div", { className: "project" }, /*#__PURE__*/
    React.createElement("a", {
      className: "project-link",
      href: link,
      target: "_blank",
      rel: "noopener noreferrer" }, /*#__PURE__*/

    React.createElement("img", {
      className: "project-image",
      src: props.img,
      alt: "Screenshot of " + props.title })), /*#__PURE__*/


    React.createElement("div", { className: "project-details" }, /*#__PURE__*/
    React.createElement("div", { className: "project-tile" }, /*#__PURE__*/
    React.createElement("p", { className: "icons" },
    props.tech.split(" ").map((t) => /*#__PURE__*/
    React.createElement("i", { className: tech[t], key: t }))),


    props.title, " "),

    props.children, /*#__PURE__*/
    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: repo, target: "_blank", rel: "noopener noreferrer" }, "View source ", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" })), /*#__PURE__*/

    React.createElement("a", { href: link, target: "_blank", rel: "noopener noreferrer" }, "Try it Live ", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" }))))));





};

/*Projects Component*/

const Projects = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "projects" }, /*#__PURE__*/
    React.createElement("div", { className: "projects-container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("h3", { className: "title" }, "My Works"), /*#__PURE__*/
    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "Here's are some of the projects I've been working on lately", /*#__PURE__*/


    React.createElement("a", {
      href: "https://codepen.io/your-work",
      target: "_blank",
      rel: "noopener noreferrer" }, ". CodePen"), ", where I've been coding these past few months for all the projects given by our instructor.")), /*#__PURE__*/






    React.createElement("div", { className: "projects-wrapper" }, /*#__PURE__*/
    React.createElement(Project, {
      title: "Calendar w/ Event",
      img:
      "https://raymund-john.github.io/hosted-asset/Screenshot%202022-06-16%20105808.png",

      tech: "html css js",
      link: "https://codepen.io/RaymundJohn/full/yLvpbQe",
      repo: "https://codepen.io/RaymundJohn/pen/yLvpbQe" }, /*#__PURE__*/

    React.createElement("small", null, "Built using HTML, CSS, JS"), /*#__PURE__*/


    React.createElement("p", null, "This is a functional calendar that update days everyday wherein you can write or create an event on it.")), /*#__PURE__*/



    React.createElement(Project, {
      title: "Image Viewer DOM",
      img:
      "https://raymund-john.github.io/hosted-asset/DOM.png",

      tech: "html css js",
      link: "https://codepen.io/RaymundJohn/full/abqXExo",
      repo: "https://codepen.io/RaymundJohn/pen/abqXExo" }, /*#__PURE__*/

    React.createElement("small", null, "Built using HTML, CSS, JS."), /*#__PURE__*/


    React.createElement("p", null, "A document object model code that shows image, title, and its description.")), /*#__PURE__*/



    React.createElement(Project, {
      title: "Page Measurer",
      img:
      "https://raymund-john.github.io/hosted-asset/Measure.png",

      tech: "html js",
      link: "https://codepen.io/RaymundJohn/full/mdXqbWQ",
      repo: "https://codepen.io/RaymundJohn/pen/mdXqbWQ" }, /*#__PURE__*/

    React.createElement("small", null, "Built using HTML, and JS."), /*#__PURE__*/


    React.createElement("p", null, "A website that gets the page's size.")), /*#__PURE__*/



    React.createElement(Project, {
      title: "Registration Form",
      img:
      "https://raymund-john.github.io/hosted-asset/RegForm.png",

      tech: "html css",
      link: "https://codepen.io/RaymundJohn/full/oNpMdBj",
      repo: "https://codepen.io/RaymundJohn/pen/oNpMdBj" }, /*#__PURE__*/

    React.createElement("small", null, "Built using HTML and CSS."), /*#__PURE__*/


    React.createElement("p", null, "A page wherein you can create an account.")), /*#__PURE__*/



    React.createElement(Project, {
      title: "June 2022 Calendar",
      img:
      "https://raymund-john.github.io/hosted-asset/Calendar.png",

      tech: "html",
      link: "https://codepen.io/RaymundJohn/full/wvpqOGV",
      repo: "https://codepen.io/RaymundJohn/pen/wvpqOGV" }, /*#__PURE__*/

    React.createElement("small", null, "Built using HTML."), /*#__PURE__*/


    React.createElement("p", null, "A simple page that shows the month of June 2022.")), /*#__PURE__*/



    React.createElement(Project, {
      title: "Calculator",
      img:
      "http://raymund-john.github.io/hosted-asset/Calculator.png",

      tech: "html css js",
      link: "https://codepen.io/RaymundJohn/full/VwyNZNZ",
      repo: "https://codepen.io/RaymundJohn/pen/VwyNZNZ" }, /*#__PURE__*/

    React.createElement("small", null, "Built using HTML, CSS, and JS."), /*#__PURE__*/
    React.createElement("p", null, "A project on which I built a virtual calculator with its usual features."))))));








};

/*Contact Component*/

const Contact = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "contact" }, /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading-wrapper" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("p", { className: "title" }, "You can catch ", /*#__PURE__*/
    React.createElement("br", null), "me here."), /*#__PURE__*/


    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "Please, use the form below or send an email to ",
    "", /*#__PURE__*/
    React.createElement("span", { className: "mail" }, "rjbuduan", /*#__PURE__*/

    React.createElement("i", { className: "fas fa-at at" }), "gmail", /*#__PURE__*/

    React.createElement("i", { className: "fas fa-circle dot" }), "com"), ":")), /*#__PURE__*/





    React.createElement(SocialLinks, null)), /*#__PURE__*/

    React.createElement("form", { id: "contact-form", action: "#" }, /*#__PURE__*/
    React.createElement("input", { placeholder: "Name", name: "name", type: "text", required: true }), /*#__PURE__*/
    React.createElement("input", { placeholder: "Email", name: "email", type: "email", required: true }), /*#__PURE__*/
    React.createElement("textarea", { placeholder: "Message", type: "text", name: "message" }), /*#__PURE__*/
    React.createElement("input", { className: "button", id: "submit", value: "Submit", type: "submit" })))));




};

/***********************
  Footer Component
 ***********************/

const Footer = props => {
  return /*#__PURE__*/(
    React.createElement("footer", null, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("h3", null, "THANKS FOR VISITING"), /*#__PURE__*/
    React.createElement("p", null, "\xA9 ", new Date().getFullYear(), " Raymund John Buduan."), /*#__PURE__*/
    React.createElement(SocialLinks, null))));



};

/*Social Links Component*/

const SocialLinks = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "social" }, /*#__PURE__*/
    React.createElement("a", {
      href: "https://web.facebook.com/itsmeraymundjohn/",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to Facebook profile" },

    " ", /*#__PURE__*/
    React.createElement("i", { className: "fab fa-facebook" })), /*#__PURE__*/

    React.createElement("a", {
      href: "https://codepen.io/RaymundJohn",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to Codepen Profile" },

    " ", /*#__PURE__*/
    React.createElement("i", { className: "fab fa-codepen" }))));



};




















/*Main Component*/

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      menuState: false });_defineProperty(this, "toggleMenu",


    () => {
      this.setState(state => ({
        menuState: !state.menuState ?
        "active" :
        state.menuState === "deactive" ?
        "active" :
        "deactive" }));

    });}

  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Header, null), /*#__PURE__*/
      React.createElement(About, null), /*#__PURE__*/
      React.createElement(Projects, null), /*#__PURE__*/
      React.createElement(Contact, null), /*#__PURE__*/
      React.createElement(Footer, null)));


  }

  componentDidMount() {
    const navbar = document.querySelector("#navbar");
    const header = document.querySelector("#welcome-section");
    const forest = document.querySelector(".forest");
    const silhouette = document.querySelector(".silhouette");
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos =
      document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
      header.style.visibility =
      header.style.visibility === "hidden" && "visible";else
      header.style.visibility = "hidden";

      if (scrollPos + 100 >= window.innerHeight)
      navbar.classList.add("bg-active");else
      navbar.classList.remove("bg-active");
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener("click", e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: "start",
              behavior: "smooth" });

          });
        }
      }
    })();
  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("buduan"));