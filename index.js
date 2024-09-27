let movies = [
    {
        name: "The Trial",
        des: "Noyonika Sengupta faces a trial by fire when her family gets hit by a scandal. Watch her defend them in life and in the courtroom." ,
        image: "images/the trial.webp"
    },
    {
        name: "Aakhri Sach",
        des: "A bone-chilling tale that unravels the twisted ties of fate, trapped secrets of a family and the most terrifying horrors an investigator has ever seen." ,
        image: "images/aakhri sach.webp"
    },
    {
        name: "MUN vs NFO",
        des: "Watch Highlights of the Premier League 2023/24 match between Manchester United and Nottingham Forest." ,
        image: "images/mun vs nfo.webp"
    },
    {
        name: "Commando",
        des: "India is in danger. And so is Kshitij, an Indian spy behind enemy lines. What will Commando Virat do to rescue him and his country?" ,
        image: "images/commando.avif"
    },
    {
        name: "Mission Mangal",
        des: "Based on the true story of India's finest scientists who rose above hardships and failures to make us the only country to reach Mars in its first attempt." ,
        image: "images/mission mangal.webp"
    },
    {
        name: "The First Responders",
        des: "A police station and a fire station adjoining each other cooperate in combating crime and fire in the most brutal and tragic cases." ,
        image: "images/the first responders.webp"
    }
];

const card=document.querySelector('.card');
let sliders=[];

let slideindex=0;

const createslide = () =>{
    if(slideindex>=movies.length){
        slideindex=0;
    }


    let slide=document.createElement("div");
    let content=document.createElement("div");
    let h1=document.createElement("h1");
    let p=document.createElement("p");
    var imgElement=document.createElement("img");


    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideindex].name));
    p.appendChild(document.createTextNode(movies[slideindex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    card.appendChild(slide);

    
    imgElement.src=movies[slideindex].image;
    slideindex++;



    slide.className="slider";
    content.className="slide-content";
    h1.className="movie-title";
    p.className="movie-des";

    sliders.push(slide);

	if (sliders.length) {
		sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
			30 * (sliders.length - 2)
		}px)`;
	}
};
// for (let i=0;i<3;i++){
    // createslide();
// }

setInterval(() => {
    createslide();
}, 2000);

