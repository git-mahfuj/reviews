
    const items =[
        {
           id: 0,
           name: "The Autodesk 2025 State of Design & Make Report is here",
           dsc:"Discover the latest insights from industry leaders leveraging emerging technologies to help build a more resilient world made for all.",
           img:"/sdm-report-2025.avif"
        },

         {
           id: 1,
           name: "Bringing technology and new workflows together to score goals",
           dsc:"Ramboll leverages BIM and GIS to increase better collaboration between design and environmental teams for the Wrexham A.F.C. Stadium project.",
           img:"/ramboll-bim-gis.avif"
        },

           {
           id: 2,
           name: "How Autodesk’s apprenticeship program shapes future careers",
           dsc:"Launched in Pakistan, Autodesk’s apprenticeship program bridges the gap between education and the workplace, providing a comprehensive learning experience.",
           img:"/india-apprenticeship.avif"
        },

          {
           id: 3,
           name: "Autodesk's mission is to empower everyone, everywhere to design and make anything",
           dsc:"Our technology spans architecture, engineering, and construction; product design and manufacturing; and media and entertainment, empowering Design.",
           img:"/autodesks-mission-is-to-empower-innovators-thumb-1172x660.avif"
        },

        {
           id: 4,
           name: "We equip our customers to work fluidly across boundaries of project, discipline, and industry",
           dsc:"Over the past four decades, millions of people have trusted our Design and Make technology to transform how their products are made. In the process, we’ve transformed what can be made.",
           img:"/work-fluidly-across-boundaries-thumb-1172x660.avif"
        },
    ];


    const contentImg = document.getElementById("content-img");
    const contentName = document.getElementById("content-name");
    const contentDsc = document.getElementById("content-dsc");
    const nextBtn = document.getElementById("next-Btn");
    const prevBtn = document.getElementById("prev-Btn");

    let currentItem =0;
   
   
    window.addEventListener("click" , ()=> {
      showContent(currentItem);
    })


    function showContent(person) {
      const reviews = items[person];
       contentImg.src = reviews.img;
       contentName.textContent = reviews.name;
       contentDsc.textContent = reviews.dsc;
        
    }


    nextBtn.addEventListener("click" , () => {
      currentItem ++ ;
      if(currentItem > items.length -1) {
         currentItem = 0;
         showContent(currentItem);
      }

    })

     prevBtn.addEventListener("click" , () => {
      currentItem -- ;
      if(currentItem < items.length -4) {
         currentItem = 4;
         showContent(currentItem);
      }

    })





