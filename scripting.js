
let path = window.location.pathname;
let page = path.split("/").pop();

// Mobile menu - Start
let mobileMenuClicked = false;
let navigationPosition = document.getElementById('nav-links');

document.getElementById('menu').onclick = function() {

    if(mobileMenuClicked == false) {
        navigationPosition.style.top = '60px';
        navigationPosition.style.animation = ' .5s mobileMenuSlideOpen forwards ease-in-out';
        mobileMenuClicked = true;
        console.log('opened mobile menu');
    }

    else if(mobileMenuClicked == true) {
        navigationPosition.style.top = '-100vh';
        navigationPosition.style.animation = ' .5s mobileMenuSlideClose forwards ease-in-out';
        mobileMenuClicked = false;
        console.log('closed mobile menu');
    }
};
// Mobile menu - End



// Contact form open/close - Start
let contactClicked = false;

if(page != "about.html") {
    document.getElementById('contact-navigation-button').onclick=function() {
        if(contactClicked == false) {
            contactClicked = true;
            document.getElementById('clicked-contact').style.animation = '.5s contact-page-show forwards ease';
        }
    };

    document.addEventListener('keydown', function(event){
        if(event.key === "Escape" && contactClicked == true){
            contactClicked = false;
            document.getElementById('clicked-contact').style.animation = '.5s contact-page-hide forwards ease';
        }
    });

    
    document.getElementById('contact-close').onclick=function() {
        if(contactClicked == true) {
            contactClicked = false;
            document.getElementById('clicked-contact').style.animation = '.5s contact-page-hide forwards ease';
        }
    };
}
// Contact page open/close - End




// Canvas animation - Start
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;

// Create particle
class Partcile {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }

    // Method that draws individual particles
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = '#fff79d';
        ctx.fill();
    };

    // Check particle position, move the particle, draw the particle
    update() {
        // Check if particle is still within canvas
        if (this.x > canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
        }

        // Move particles
        this.x += this.directionX / 2;
        this.y += this.directionY / 2;

        // Draw particle
        this.draw();
    };
}

// Create particle array
function init() {
    particlesArray = [];
    let numberOfParticles = (canvas.height * canvas.width) / 8000;
    for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 5) + 1;
        let x = (Math.random() * ((innerWidth - size * 4) - (size * 4)) + size * 4);
        let y = (Math.random() * ((innerHeight - size * 4) - (size * 4)) + size * 4);
        let directionX = (Math.random() * 5) - 2.5;
        let directionY = (Math.random() * 5) - 2.5;
        let color = 'rgba(242, 170, 76, 0.925)';

        particlesArray.push(new Partcile(x, y, directionX, directionY, size, color));
    }
};

// Check if particles are close enough for them to connect
function connect() {
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
                + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
            if (distance < (canvas.width / 8) * (canvas.height / 8)) {
                ctx.strokeStyle = 'rgba(242, 170, 76, 0.925)';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }

        }
    }
};

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }

    connect();
};

// Resize event with window size
window.addEventListener('resize',
    function () {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        init();
    }
);

// Run particle animation
init();
animate();
// Canvas animation - End



 
// About me page logic
if (page == "about.html") {

    // Phone number information button
    let clickedPhone = false;

    document.getElementById("button-1").onclick = function () {
        document.getElementById("button-1").style.animation = "6s contact-box-shine infinite, 1.5s contact-icon-slide forwards ease";
        document.getElementById("phone").style.animation = "1.4s contact-info-slide ease forwards, 3s contact-info-text-opacity forwards ease";
        document.getElementById("phone-text").style.animation = "3s contact-info-text-opacity forwards ease"

        let phone = "(929)-402-9246";
        console.log(phone);

        if (clickedPhone == true) {
            myFunction(phone);
        } else {
            clickedPhone = true;
        }
    };
    
    // Email contact information button
    let clickedEmail = false;

        document.getElementById("button-2").onclick = function () {
        document.getElementById("button-2").style.animation = "6s contact-box-shine infinite, 1.5s contact-icon-slide forwards ease";
        document.getElementById("email").style.animation = "1.4s contact-info-slide ease forwards, 3s contact-info-text-opacity forwards ease";
        document.getElementById("email-text").style.animation = "3s contact-info-text-opacity forwards ease"
        let email = document.getElementById("email-text").innerHTML;
        console.log(email);

        if (clickedEmail == true) {
            myFunction(email);
        } else {
            clickedEmail = true;
        }
    };

    // LinkedIn contact information button
    let clickedLinkedIn = false;

    document.getElementById("button-3").onclick = function () {
        document.getElementById("button-3").style.animation = "6s contact-box-shine infinite, 1.5s contact-icon-slide forwards ease";
        document.getElementById("linkedIn").style.animation = "1.4s contact-info-slide ease forwards";
        document.getElementById("linkedIn-text").style.animation = " 3s contact-info-text-opacity forwards ease";


        if (clickedLinkedIn == true) {
            window.open("https://linkedin.com/in/jakub-lewandowski-011001");
        } else {
            clickedLinkedIn = true;
        }
    };

    // GitHub contact information button
    let clickedGitHub = false;

    document.getElementById("button-4").onclick = function () {
        document.getElementById("button-4").style.animation = "6s contact-box-shine infinite, 1.5s contact-icon-slide forwards ease";
        document.getElementById("gitHub").style.animation = "1.4s contact-info-slide ease forwards, 3s contact-info-text-opacity forwards ease";
        document.getElementById("gitHub-text").style.animation = "3s contact-info-text-opacity forwards ease"

        if (clickedGitHub == true) {
            window.open("https://github.com/JacobLewandowskiDev");
        } else {
            clickedGitHub = true;
        }
    };

    // Copy text inside of tag
    function myFunction(text) {
        let copyText = text;    /* Get the text field */

        navigator.clipboard.writeText(copyText);

        alert("Copied: " + copyText);
    };



    // Open skill information box when programming language logo is clicked
    function openSkillInfo(skillName) {
        if(skillName == 'java') {
            document.getElementById('skill-description').style.display = "flex";
            document.getElementById('skill-name').innerHTML = "Java";
            document.getElementById('coding-skill-description').innerHTML = " - This was the first programming language in which I made my baby steps towards becoming a programmer back in the middle of 2020. After spending a few months learning it in my free time I really started to enjoy writing code in it. Even though I was totally new to programming when I started I never got discouraged by any problem I was facing, because of the amount of fun I was having while figuring stuff out. That is why Java has become the primary backend language in my projects.";
            console.log('Java description active');
        }
    
        else if(skillName == 'html') {
            document.getElementById('skill-description').style.display = "flex";
            document.getElementById('skill-name').innerHTML = "HTML";
            document.getElementById('coding-skill-description').innerHTML = " - I really enjoy the process of creating websites from scratch with HTML and then designing them with CSS. I don't mind using ready code snippets, however, I always try to do something by myself when I'm in the learning process.";
            console.log('HTML description active');
        }
    
        else if(skillName == 'css') {
            document.getElementById('skill-description').style.display = "flex";
            document.getElementById('skill-name').innerHTML = "CSS";
            document.getElementById('coding-skill-description').innerHTML = " - I love working with CSS. I believe myself to be a very visual and creative person. Because of this I really enjoy the process of designing the look of my projects."
            console.log('CSS description active');
        }
    
        else if(skillName == 'javascript') {
            document.getElementById('skill-description').style.display = "flex";
            document.getElementById('skill-name').innerHTML = "JavaScript";
            document.getElementById('coding-skill-description').innerHTML = " - Because JavaScript can be run on any device and web browser nowadays without any special program makes it one of the most versatile languages in my skill set. While I was just starting to learn it I quickly noticed the similarities in principles and the way code is written in it, which made the entire process of learning much easier for me."
            console.log('JavaScript description active');
        }
    
        else if(skillName == 'sql') {
            document.getElementById('skill-description').style.display = "flex";
            document.getElementById('skill-name').innerHTML = "SQL";
            document.getElementById('coding-skill-description').innerHTML = " - Whenever a project I work on requires a way to contain lots of data that is in some way related to one another, I'd typically go for a SQL database like SQLite or MySQL to create a container for all that data. I find the basics of the SQL language to be fairly easy to learn and use."
            console.log('SQL description active');
        }
    
        else if(skillName == 'git') {
            document.getElementById('skill-description').style.display = "flex";
            document.getElementById('skill-name').innerHTML = "Git";
            document.getElementById('coding-skill-description').innerHTML = " - Git has become a primary tool that I use for version control of my work. It was a very straightforward tool to learn and use right away. Check out my code repositories on <a class='p-link' target='_blank' href='https://github.com/JacobLewandowskiDev'>Github.</a>"
            console.log('Git description active');
        }

        else if(skillName == 'maven') {
            document.getElementById('skill-description').style.display = "flex";
            document.getElementById('skill-name').innerHTML = "Maven";
            document.getElementById('coding-skill-description').innerHTML = " - Keeping track of a project's dependencies, plugins, and configurations can be a real hassle that can overwhelm a programmer very quickly. This is where Maven comes to the rescue, which rids us of this problem by holding all of our project dependencies in one place. Once I've learned how to use Maven I started implementing it in all of my Java projects."
            console.log('Maven description active');
        }

        else if(skillName == 'googling') {
            document.getElementById('skill-description').style.display = "flex";
            document.getElementById('skill-name').innerHTML = "Googling";
            document.getElementById('coding-skill-description').innerHTML = " - It might sound silly to you that I listed this as a skill, but hear me out. If I were to name one ability that is extremely helpful to all programmers no matter the skill level or what language he uses, I would have to say it's googling/searching for stuff the right way. Knowing what to look for and the way you format your questions/syntax in the web browser can save you tons of time when looking for a solution to your coding problem."
            console.log('Googling description active');
        }

        else if(skillName == 'spring') {
            document.getElementById('skill-description').style.display = "flex";
            document.getElementById('skill-name').innerHTML = "Spring";
            document.getElementById('coding-skill-description').innerHTML = " - I really like to work with the Spring framework. The fact that it manages all of the dependencies for me, and allows the implementation of complex features (like user authentication, REST API control etc.) without having to write paragraphs of code saves me a lot of time and allows me to focus more on the logic behind my apps."
            console.log('Spring description active');
        }
    
        // Close skill information box when clicked anywhere in its field
        document.getElementById('skill-description').onclick = function() {
            if(document.getElementById('skill-description').style.display = 'flex') {
                document.getElementById('skill-description').style.display = 'none';
                console.log('Skill description closed');
            }
        };
    };
};


// Project slides for project page
if (page == "projects.html") {   

    let slideIndex = 1;
  
    // Change selected project if left/right button is clicked
    leftOrRightSlide = function(n) {
        slideIndex += n;

        if(slideIndex == 0) {
            slideIndex = 4;
            document.getElementById('clicked-project').src = 'images/gwent.jpg';
            document.getElementById('selected-project-caption').innerHTML = "Gwent: The card game";
        }

        if(slideIndex == 1) {
            document.getElementById('clicked-project').src = 'images/gym.jpg';
            document.getElementById('selected-project-caption').innerHTML = "Church Of Iron";
        }

        if(slideIndex == 2) {
            document.getElementById('clicked-project').src = 'images/calculator.jpg';
            document.getElementById('selected-project-caption').innerHTML = "HVAC Calculator";
        }

        if(slideIndex == 3) {
            document.getElementById('clicked-project').src = 'images/burger.jpg';
            document.getElementById('selected-project-caption').innerHTML = "Burger Builder";
        }

        if(slideIndex == 4) {
            document.getElementById('clicked-project').src = 'images/gwent.jpg';
            document.getElementById('selected-project-caption').innerHTML = "Gwent: The card game";
        }

        if(slideIndex > 4) {
            slideIndex = 1;
            document.getElementById('clicked-project').src = 'images/gym.jpg';
            document.getElementById('selected-project-caption').innerHTML = "Church Of Iron";
        }

        console.log(slideIndex);

    }

    // Switch selected project when project thumbnail is clicked
    document.getElementById('project-1').addEventListener('click', function() {
        document.getElementById('clicked-project').src = 'images/gym.jpg';
        document.getElementById('selected-project-caption').innerHTML = "Church Of Iron";
        slideIndex = 1;
        console.log('It worked 1');
    });

    document.getElementById('project-2').addEventListener('click', function() {
        document.getElementById('clicked-project').src = 'images/calculator.jpg';
        document.getElementById('selected-project-caption').innerHTML = "HVAC Calculator";
        slideIndex = 2;
        console.log('It worked 2');
    });

    document.getElementById('project-3').addEventListener('click', function() {
        document.getElementById('clicked-project').src = 'images/burger.jpg';
        document.getElementById('selected-project-caption').innerHTML = "Burger Builder";
        slideIndex = 3;
        console.log('It worked 3');
    });

    document.getElementById('project-4').addEventListener('click', function() {
        document.getElementById('clicked-project').src = 'images/gwent.jpg';
        document.getElementById('selected-project-caption').innerHTML = "Gwent: The card game"; 
        slideIndex = 4;
        console.log('It worked 4');
    });

    // Open/close project description
    projectClicked = false;
    if(page == "projects.html") {
        document.getElementById('selected-project').onclick=function() {
            if(projectClicked == false) {
                projectClicked = true;           
                document.getElementById('project-clicked-on').style.animation = '.5s contact-page-show forwards ease';
            }
        };
        
        document.addEventListener('keydown', function(event){
            if(event.key === "Escape" && projectClicked == true){
                projectClicked = false;
                document.getElementById('project-clicked-on').style.animation = '.5s contact-page-hide forwards ease';
            }
        });

        document.getElementById('project-clicked-close').onclick=function() {
            if(projectClicked == true) {
                projectClicked = false;
                document.getElementById('project-clicked-on').style.animation = '.5s contact-page-hide forwards ease';
            }
        };
    }




 // Change project description depending on which image is selected
    function changeInfo() {
        // If selected project's index is equal to 1 then change name and description to Project 1's
        if(slideIndex == 1) {
            document.getElementById('project-name').innerHTML = 'Church Of Iron';
            document.getElementById('project-description').innerHTML = 'A fully developed gym web app that allows users to log in and create their own workout routine to track their progress by adding exercises from the default list or adding their own exercises to it. Each list is then saved and stored for each individual user for future use. The user can also copy their previous workout to avoid typing it out each time. The entire backend for this web app was written in <span class="orangeText">Java</span>. For data storage, I\'ve decided to use a relational database - <span class="orangeText">MySQL</span>. For the front-end, I\'ve used <span class="orangeText">HTML, CSS, JavaScript</span>';
            changeLink('view-code', 'https://github.com/JacobLewandowskiDev/Church-Of-Iron/tree/main'); // Change view code link
            changeLink('live-version', null); // Change live version link
        }
        
        // If selected project's index is equal to 2 then change name and description to Project 2's
        else if(slideIndex == 2) {
            document.getElementById('project-name').innerHTML = 'Hvac Calculator';
            document.getElementById('project-description').innerHTML = 'As an environmental engineering graduate, I figured I\'d create an online calculator that helps with the tedious portion of creating an HVAC/MEP project. This particular app allows its users to calculate the pipe/air duct diameters and sizes in 4 different specializations (Heating, Ventilation, Water supply, and gas supply). I have built this app from nothing only with the following tech stack: <span class="orangeText">HTML, CSS</span>, and <span class="orangeText">JavaScript</span>.';
        
            changeLink('view-code', 'https://github.com/JacobLewandowskiDev/HVAC-Calculator'); // Change view code link
            changeLink('live-version', 'HVAC_calculator/calculator-main.html'); // Change live version link
        }

        // If selected project's index is equal to 3 then change name and description to Project 3's
        else if(slideIndex == 3) {
            document.getElementById('project-name').innerHTML = 'Burger Builder';
            document.getElementById('project-description').innerHTML = 'A <span class="orangeText">Java</span> backend for a burger building web app similar to the one McDonalds uses. It allows users to add their own ingredients to form the \"perfect\" burger, but if you are of the lazier type you can also order some of the ready meals to enjoy.';
        
            changeLink('view-code', 'https://github.com/JacobLewandowskiDev/BurgerBuilder'); // Change view code link
            changeLink('live-version', null); // Remove live version link
        }

        // If selected project's index is equal to 4 then change name and description to Project 4's
        else if(slideIndex == 4) {
            document.getElementById('project-name').innerHTML = 'Gwent: The Witcher Card Game';
            document.getElementById('project-description').innerHTML = 'A work in progress replica of the Witcher 3\'s card game: Gwent. I\'ve really enjoyed playing this mini-game but felt sad that there wasn\'t an app with this version of it anywhere. That is why I\'ve decided to make it by myself. The game will contain all of the playable decks from the original Witcher 3 game and also have a simple AI that allows the player to play against it.';
        
            changeLink('view-code', null); // Change view code link
            changeLink('live-version', null); // Change live version link
        }
    };
    

    // Change project links
    const linkContainer = document.getElementById('project-view-buttons');

    function changeLink(oldTagID, newlink) {

        // If old tag exists then delete it otherwise skip this step
        if(document.getElementById(oldTagID) != null) {
            document.getElementById(oldTagID).remove();
        }

        let tag;

        // View code button replacement
        if(oldTagID == 'view-code' && newlink != null) {
            tag = document.createElement('a');
            tag.textContent='View Code';
            tag.setAttribute('id', 'view-code');
            tag.setAttribute('href', newlink)
            tag.setAttribute('target', '_blank')
            linkContainer.appendChild(tag);
            console.log('New view code tag created: ');
            console.log(tag);
        }

        // Live version button replacement
        else if(oldTagID == 'live-version' && newlink != null) {
            tag = document.createElement('a');
            tag.textContent='Live version';
            tag.setAttribute('id', 'live-version');
            tag.setAttribute('href', newlink)
            tag.setAttribute('target', '_blank')
            linkContainer.appendChild(tag);
            console.log('New live version tag created: ');
            console.log(tag);
        }

        // If new link is null then just remove the unnecessary tag
        else {
            console.log('Tag removed');
        }
    }
};
