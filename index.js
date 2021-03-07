const animalData = [
    {
        id: 1,
        name: "Elefant Bill",
        job: "IT Manager",
        img: "https://res.cloudinary.com/doligjahp/image/upload/v1615076872/001-elephant_gzfpzl.svg",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus facere similiquem. Iusto, ea?"
    },
    {
        id: 2,
        name: "Snake Filo",
        job: "Security Analyst",
        img: "https://res.cloudinary.com/doligjahp/image/upload/v1615076872/002-snake_qn0ufe.svg",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus facere similiquem. Iusto, ea?"

    },
    {
        id: 3,
        name: "Hippo Mary",
        job: "Systems Analyst",
        img: "https://res.cloudinary.com/doligjahp/image/upload/v1615076872/003-hippo_dlvy2n.svg",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus facere similiquem. Iusto, ea?"

    },
    {
        id: 4,
        name: "Turtle Robert",
        job: "Computer Support",
        img: "https://res.cloudinary.com/doligjahp/image/upload/v1615076872/004-turtle_ltmqek.svg",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus facere similiquem. Iusto, ea?"

    },
    {
        id: 5,
        name: "Parot Zé",
        job: "Computer Technician",
        img: "https://res.cloudinary.com/doligjahp/image/upload/v1615076872/005-parrot_m3vh4e.svg",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus facere similiquem. Iusto, ea?"

    },
    {
        id: 6,
        name: "Panda Lebron",
        job: "Network Administrator",
        img: "https://res.cloudinary.com/doligjahp/image/upload/v1615076872/006-panda_ppgwjm.svg",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus facere similiquem. Iusto, ea?"

    },
    {
        id: 7,
        name: "Boar Zack",
        job: "Data Scientist",
        img: "https://res.cloudinary.com/doligjahp/image/upload/v1615076875/007-boar_sjzprv.svg",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus facere similiquem. Iusto, ea?"

    },
    {
        id: 8,
        name: "Giraffe Boris",
        job: "System Administrator",
        img: "https://res.cloudinary.com/doligjahp/image/upload/v1615076875/008-giraffe_zlrgni.svg",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus facere similiquem. Iusto, ea?"

    },
    {
        id: 9,
        name: "Squid Gisele",
        job: "Data Analyst",
        img: "https://res.cloudinary.com/doligjahp/image/upload/v1615076875/009-squid_sj7rc1.svg",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus facere similiquem. Iusto, ea?"

    },
    {
        id: 10,
        name: "Rhino Jordan",
        job: "Computer Engineer",
        img: "https://res.cloudinary.com/doligjahp/image/upload/v1615076875/010-rhino_qyhq9l.svg",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus facere similiquem. Iusto, ea?"

    },
    {
        id: 11,
        name: "Deer Bruce",
        job: "CEO",
        img: "https://res.cloudinary.com/doligjahp/image/upload/v1615076875/011-deer_iejrqh.svg",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus facere similiquem. Iusto, ea?"

    },
    {
        id: 12,
        name: "Stingray Joseph",
        job: "IT Director",
        img: "https://res.cloudinary.com/doligjahp/image/upload/v1615076875/012-stingray_c9ntge.svg",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus facere similiquem. Iusto, ea?"

    },
    {
        id: 13,
        name: "Beetle Mag",
        job: "CS Analyst",
        img: "https://res.cloudinary.com/doligjahp/image/upload/v1615076878/013-beetle_nymspp.svg",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus facere similiquem. Iusto, ea?"

    },
    {
        id: 14,
        name: "Shark Mark",
        job: "Developer",
        img: "https://res.cloudinary.com/doligjahp/image/upload/v1615076878/014-shark_zjidrp.svg",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus facere similiquem. Iusto, ea?"

    },
    {
        id: 15,
        name: "Walrus Fill",
        job: "Devops Engineer",
        img: "https://res.cloudinary.com/doligjahp/image/upload/v1615076877/015-walrus_wlm1yp.svg",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus facere similiquem. Iusto, ea?"

    }
];

const img = document.getElementById("person-img");
const autor = document.getElementById("autor");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//start item
let currentItem = 0;

//load initial item

window.addEventListener("DOMContentLoaded", function () {
    ShowPerson()
});

function ShowPerson() {
    const item = animalData[currentItem];
    img.src = item.img;
    autor.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > animalData.length - 1) {
        currentItem = 0;
    }
    ShowPerson();
});

prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = animalData.length - 1
    }
    ShowPerson();
});

randomBtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * animalData.length);
    ShowPerson();

})