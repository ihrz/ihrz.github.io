const teamMembers = [
    {
        username: "Kisakay",
        role: {
            en: "iHorizon Developer",
            fr: "Développeuse iHorizon"
        },
        avatar: "../assets/img/team/kisakay.png",
        desc: {
            "fr": "Kisakay est l'une des principales développeuses d'iHorizon. Elle a développé la plupart du bot Discord iHorizon, ainsi que l'ancienne documentation.",
            "en": "Kisakay is one of the main developers of iHorizon. She developed most of the iHorizon Discord bot, as well as the old documentation."
        },
        link: "https://github.com/kisakay",
        type: "github"
    },
    {
        username: "Noémie",
        role: {
            en: "Developer and Marketing Director",
            fr: "Développeuse et Directrice Marketing"
        },
        avatar: "../assets/img/team/noemie.png",
        desc: {
            en: "Noémie also developed iHorizon and is the marketing director of iHorizon.",
            fr: "Noémie a également développée iHorizon et est la directrice marketing d'iHorizon."
        },
        link: "https://github.com/Name-shitty-github-profile",
        type: "github"
    },
    {
        username: "NayaWeb",
        role: {
            en: "iHorizon Developer",
            fr: "Développeuse iHorizon"
        },
        avatar: "../assets/img/team/nayaweb.png",
        desc: {
            en: "NayaWeb was one of the developers of the iHorizon website and its documentation.",
            fr: "Iris est la seconde développeuse d'Ihorizon et la principale responsable du site web ainsi que de sa documentation."
        },
        link: "https://github.com/belugafr",
        type: "github"
    },
    {
        username: "Wyene",
        role: {
            en: "iHorizon Contributor",
            fr: "Contributeur iHorizon"
        },
        avatar: "../assets/img/team/wyene.png",
        desc: {
            en: "Wyene is a contributor/developer for iHorizon. He has often organized and participated in staff task management.",
            fr: "Wyene est un contributeur/développeur pour iHorizon. Il a souvent organisé et participé à la gestion des tâches du staff."
        },
        link: "https://github.com/WyeneCloud",
        type: "github"
    },
    {
        username: "Andru",
        role: {
            en: "Contributor and Developer",
            fr: "Contributor et Développeur"
        },
        avatar: "../assets/img/team/andru.jpg",
        desc: {
            en: "Andru is a contributor and developer for iHorizon. He has often organized and participated in staff task management.",
            fr: "Andru est un contributeur et développeur pour iHorizon. Il a souvent organisé et participé à la gestion des tâches du staff."
        },
        link: "https://guns.lol/andrulegend",
        type: "guns"
    },
    {
        username: "Leeway",
        role: {
            en: "iHorizon Designer",
            fr: "Designer iHorizon"
        },
        avatar: "../assets/img/team/leeway.png",
        desc: {
            en: "Leeway is the main designer of the project, thanks to him and his artwork",
            fr: "Leeway est le principal designer du projet, grâce à lui et à ses œuvres d'art"
        },
        link: "https://github.com/leeway",
        type: "github"
    },
    {
        username: "Ether",
        role: {
            en: "iHorizon Contributor",
            fr: "Contributeur iHorizon"
        },
        avatar: "../assets/img/team/ether.png",
        desc: {
            en: "Ether is a contributor to iHorizon. He's fascinated by Linux and cybersecurity, and he improvises himself as a support helper for the iHorizon bot.",
            fr: "Ether est un contributeur d'iHorizon. Il est passionné de Linux et de cyber-sécurité, et s'improvise en tant qu'assistant de support pour le bot iHorizon."
        },
        link: "https://github.com/Ether2024-003",
        type: "github"
    },
    {
        username: "Lux_",
        role: {
            en: "iHorizon Developer",
            fr: "Développeur iHorizon"
        },
        avatar: "../assets/img/team/lux.gif",
        desc: {
            en: "Lux_ is a young passionate developer who would like to pursue a career in pentesting and cybersecurity. He loves coding and has a very beautiful portfolio. Send him a message on Discord.",
            fr: "Lux_ est un jeune développeur passionné qui aimerait poursuivre une carrière dans le pentesting et la cybersécurité. Il adore coder et a un très beau portfolio. Envoyez-lui un message sur Discord."
        },
        link: "https://github.com/luxinenglish",
        type: "github"
    },
    {
        username: "Maxine",
        role: {
            en: "Old iHorizon developer",
            fr: "Ancienne développeuse iHorizon"
        },
        avatar: "../assets/img/team/maxine.png",
        desc: {
            en: "Maxine was a developer; she actively participated in the transition to TypeScript.",
            fr: "Maxine était une développeuse, elle a participé activement à la transition en TypeScript."
        },
        link: "https://github.com/mxi1n",
        type: "github"
    },
    {
        username: "Gaboo",
        role: "Community Manager",
        avatar: "../assets/img/team/gaboo.png",
        desc: {
            en: "He manages partnerships, organizes and maintains activities in the Community.",
            fr: "il gérait les partenariats, organise et maintient les activités dans la communauté."
        },
        link: "https://github.com/Gpasenvie",
        type: "github"
    },
];

function loadTeamMembers() {
    const carouselContainer = document.querySelector('#team .owl-carousel');

    if (!carouselContainer) {
        console.error("Carousel container not found!");
        return;
    }

    teamMembers.forEach(member => {
        if (!member.username) return;

        const hoverClass = 'transform transition-transform duration-300 hover:scale-105'

        const memberElement = document.createElement('div');
        memberElement.innerHTML = `
        <div class="card text-center">
          <img class="card-img-top" src="${member.avatar}" alt="${member.username}" />
          <div class="card-body">
            <h5>
              ${member.username}<br>
              <span>${member.role[window.location.href.split("/")[3]]}</span>
            </h5>
            <p class="card-text">
              "${member.desc[window.location.href.split("/")[3]]}"
            </p>
            <a href="${member.link}" target="_blank">
              <button type="button"
                class="normalTextBold text-black button-color rounded-full px-3 py-1 text-center mb-2${hoverClass}">
                <i class="fab fa-github"></i> GitHub
              </button>
            </a>
          </div>
        </div>
      `;

        carouselContainer.appendChild(memberElement);
    });

    initializeOwlCarousel();
}

function initializeOwlCarousel() {
    if (typeof $ === 'function' && typeof $.fn.owlCarousel === 'function') {
        $('.owl-carousel1').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            dots: true,
            dotsEach: 1,
            responsive: {
                0: {
                    items: 1,
                    dotsEach: 1
                },
                600: {
                    items: 2,
                    dotsEach: 1
                },
                1000: {
                    items: 3,
                    dotsEach: 1
                }
            }
        });
    } else {
        console.error('jQuery or Owl Carousel not loaded!');
    }
}

document.addEventListener('DOMContentLoaded', loadTeamMembers);