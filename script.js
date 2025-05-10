document.addEventListener("DOMContentLoaded" , () => {
    const items =[
        {
           id: 0,
           name: "The Autodesk 2025 State of Design & Make Report is here",
           dsc:"Discover the latest insights from industry leaders leveraging emerging technologies to help build a more resilient world made for all.",
           img:"https://damassets.autodesk.net/content/dam/autodesk/www/images/company/sdm-report-2025.jpg"
        },

         {
           id: 0,
           name: "The Autodesk 2025 State of Design & Make Report is here",
           dsc:"Discover the latest insights from industry leaders leveraging emerging technologies to help build a more resilient world made for all.",
           img:"https://damassets.autodesk.net/content/dam/autodesk/www/images/company/ramboll-bim-gis.jpg"
        },

           {
           id: 0,
           name: "The Autodesk 2025 State of Design & Make Report is here",
           dsc:"Discover the latest insights from industry leaders leveraging emerging technologies to help build a more resilient world made for all.",
           img:"https://damassets.autodesk.net/content/dam/autodesk/www/images/company/india-apprenticeship.jpg"
        },

          {
           id: 0,
           name: "The Autodesk 2025 State of Design & Make Report is here",
           dsc:"Discover the latest insights from industry leaders leveraging emerging technologies to help build a more resilient world made for all.",
           img:"https://damassets.autodesk.net/content/dam/autodesk/www/Company/overview/autodesks-mission-is-to-empower-innovators-thumb-1172x660.jpg"
        },

        {
           id: 0,
           name: "The Autodesk 2025 State of Design & Make Report is here",
           dsc:"Discover the latest insights from industry leaders leveraging emerging technologies to help build a more resilient world made for all.",
           img:"https://damassets.autodesk.net/content/dam/autodesk/www/Company/overview/work-fluidly-across-boundaries-thumb-1172x660.jpg"
        },
    ];


    const contentImg = document.getElementById("content-img");
    const contentName = document.getElementById("content-name");
    const contentDsc = document.getElementById("content-dsc");
    const nextBtn = document.getElementById("next-Btn");
    const prevBtn = document.getElementById("prev-Btn");

    function showContent(person) {
       const reviews = items[person];
       contentImg.src = reviews.src;
       contentName.textContent = reviews.name;
       contentDsc.textContent = reviews.dsc;
        
    }

    nextBtn.addEventListener("click" , () => {
      const hek = showContent()
      console.log(hek)
    })



});