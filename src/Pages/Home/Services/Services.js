// import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "../../Home/Services/Services.css";

const Services = () => {
  const services = [
    {
      id: "124e13b9-2d54-4b2f-a74d-a77b362d6ead",
      name: "Mezhyhirya, Ukraine",
      description:
        "Mezhyhirya is situated on the banks of the beautiful Dnieper River and is the former residence of ex-president of the Ukraine, Viktor Yanukovych. There is no shortage of things to do here, and it may be the most interesting and over-the-top place you have ever visited.",
      price: 420,
      ratings: 4.5,
      img: "https://i.ibb.co/bdGYSzz/artem-ukraine.jpg",
    },
    {
      id: "13cbc7ed-a61b-4883-9d42-82d7d8642b86",

      name: "Blackhawk, USA",
      description:
        "Blackhawk is in Contra Costa County and is one of the best places to live in California. Living in Blackhawk offers residents a rural feel and most residents own their homes. In Blackhawk there are a lot of parks. Residents of Blackhawk tend to have moderate political views.",
      price: 319,
      ratings: 4,
      img: "https://i.ibb.co/88CjtZj/blackhawk-Usa.jpg",
    },
    {
      id: "307f166f-1d04-4573-bc37-2f461ea9d4f7",
      name: "Sousse, Tunisia",
      description:
        "Overlooked by the mighty fortifications of the ribat and kasbah, the medina in Sousse just begs to be explored. This lovely old town district is a warren of looping lanes, rimmed by whitewashed houses, and a shopping paradise with a tempting selection of ceramics, leatherwork, and metalwork on display.",
      price: 319,
      ratings: 4,
      img: "https://i.ibb.co/JQybmbK/bouchouicha-Tunisia.jpg",
    },
    {
      id: "4bf9798f-63bc-4a83-b0c6-6a3b816fe922",
      name: "Dalby, UK",
      description:
        "Dalby Forest is home to an abundance of internationally important wildlife species and is also a designated Dark Sky Discovery Site, where you can experience the magic of seeing the Milky Way with the naked eye and beach somethere",
      price: 319,
      ratings: 4,
      img: "https://i.ibb.co/FqDKcmv/dalby-forest-uk.jpg",
    },
    {
      id: "9496d72b-04ec-41f8-9bc3-0a7c9697be8e",
      name: "Aya Sofya, Turkey",
      description:
        "The Hagia Sophia (Aya Sofya in Turkish) was the emperor's swaggering statement to the world of the wealth and technical ability of his empire, beautiful old buildings and other places of historic interest and my other historic place here.",
      price: 319,
      ratings: 4,
      img: "https://i.ibb.co/nDV78w3/istanbul-turkey.jpg",
    },
    {
      id: "6e5593d3-557b-43cf-8dab-a5140faedfb0",
      name: "Mermaid street, UK",
      description:
        "Very picturesque and full of history throughout. Definitely worth a walk down the street itself. The Mermaid Inn is steeped in history, but along the road is an old Quaker meeting house eye and beach somethere",
      price: 319,
      ratings: 4,
      img: "https://i.ibb.co/nmFWkfK/mermaid-street-Uk.jpg",
    },
    {
      id: "c9d1f410-d28f-49d9-9b01-d759b5acbeea",
      name: "Marrakech, Morocco",
      description:
        "Magnificent mosques, pretty palaces, and sprawling gardens welcome every visitor at Marrakech, a stunning city in Morocco. Marrakech is a historic city and was quite popular during the medieval time period as it was the home of the Berber Empire. Adorned with a vibrant medina at the heart of the city.",
      price: 319,
      ratings: 4,
      img: "https://i.ibb.co/Hg22CDC/Merrakash-morroco.jpg",
    },
    {
      id: "1564a06b-692f-4f2e-8413-9c8a1cc2da77",
      name: "San Sebastian, Spain",
      description:
        "San Sebastian is one of the most beautiful seaside destinations in Spain. Comb the jewel of Spain’s Basque country for hidden alleyways, cute bars, movie stars, jazz musicians and haute-couture fashion designers. There are plenty of things to do in San Sebastian and it’s a city to tick of your list when exploring the landmarks of Spain. ",
      price: 260,
      ratings: 5,
      img: "https://i.ibb.co/kSgCtps/san-sebastian-spain.jpg",
    },
    {
      id: "ac44095f-230e-4502-8816-dea3eaae8320",
      name: "Venice, Italy",
      description:
        "In a city as filled with tourist attractions as Venice, it's hard to know where to begin. Perhaps the best way is to simply get lost for a few hours wandering through its enchanting little streets and passageways, beautiful old buildings and other places of historic interest strolling beside its canals, and finding its secret corners.",
      price: 437,
      ratings: 4,
      img: "https://i.ibb.co/6gGHSQM/venice-italy.jpg",
    },
  ];

  return (
    <div id="services">
      <h1 className="text-center mt-5">Popular Destination</h1>
      <div className="services-container">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
