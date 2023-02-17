"use strict";
let end = window.location.pathname;
let sourceLink = "https://ayazemregm.github.io/hazeltreeassets/";

console.log("loaded");

window.addEventListener("load", () => {
  defaultActions();
  switch (end) {
    case "/":
      console.log("Main Page");
      break;
    case "/page/hazeltree-university":
      console.log("testPage");
      let css = `<link rel="stylesheet" href="${sourceLink}catalog-hazeltree.css">`;
      document.head.insertAdjacentHTML("beforeend", css);
      addCourseTitle();
      initializeSwiper();
      tabs();
      // footer();
      break;
    default:
      console.log("Default Fired");
      break;
  }
});

function defaultActions() {
  let footer = document.getElementById("ep-footer");
  footer.remove();
}

// add course
function addCourseTitle() {
  let courseTitles = `
<div id="courseTitle">
   <h2 id="availableCourses">
     Available Courses
   </h2>
   <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
     libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
     sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
   </p>
 </div>`;
  let catalogContent = document.getElementById("catalog-content");
  catalogContent.insertAdjacentHTML("afterbegin", courseTitles);
}

// swiper
function initializeSwiper() {
  let swiperTemplate = `  
<!-- Slider main container -->
<div id="swiper0">
  <!-- Additional required wrapper -->
  <div id="course-sliders" class="swiper-wrapper ">
    <!-- Slides --></div>
  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
</div>`;

  let catalogCourses = document.getElementById("catalog-courses");
  let catalogContent = document.getElementById("catalog-content");

  catalogContent.insertAdjacentHTML("beforeend", swiperTemplate);
  let courses = catalogCourses.children;
  console.log(catalogCourses.children);
  let filteredCourses = [];

  for (let i = 0; i < courses.length; i++) {
    if (
      !catalogCourses.children.item(i).classList.contains("not-found") &&
      catalogCourses.children.item(i).dataset["type"] == "-c"
    ) {
      let sliders = document.getElementById("course-sliders");
      console.log("loop " + i);

      let swiperSlide = `<div class="swiper-slide"></div>`;
      sliders.insertAdjacentHTML("beforeend", swiperSlide);
      filteredCourses.push(courses.item(i));
    }
  }

  let swiperSliders = document.querySelectorAll(".swiper-slide");

  for (let i = 0; i < filteredCourses.length; i++) {
    swiperSliders.item(i).appendChild(filteredCourses[i]);
  }

  const swiper = new Swiper("#swiper0", {
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 5,
    paginationClickable: false,

    breakpoints: {
      1280: {
        slidesPerView: 4,
      },
      960: {
        slidesPerView: 3,
      },
      600: {
        slidesPerView: 2,
      },
      400: {
        slidesPerView: 1,
      },
    },
  });
}

// tabs
function tabs() {
  let tabsText = `<div class="tabs-wrapper">
      <p>Hazeltree University brings all your creativity together ! </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
    
      <section class="tabs">
        <div id="tabs-title" >
        <div class="tabs-nav ">
          <button class="tab-nav-item active" data-tab="asset-managers">Asset
            Managers</button>
          <button class="tab-nav-item " data-tab="hedge-funs">Hedge
            Funs</button>
          <button class="tab-nav-item " data-tab="financial">Financial
            Institutions & Administrators</button>
          <button class="tab-nav-item" data-tab="pensions">Pensions
            &
            Endowments</button>
        </div>
      </div>

       <div id="tabs-content" class="tabs-content ">
        <div class="tab-content active " id="asset-managers">
tab-1
        </div>
        <div class="tab-content" id="hedge-funs">
          <div id="hedge-content" class="">
            tab-2
          </div>

        </div>
        <div class="tab-content " id="financial">
          tab-3
        </div>
        <div class="tab-content " id="pensions">
tab-4
        </div>
      </div>
      </section>
    
    </div>`;

  let tabTemplate = `  
<!-- Slider main container -->
<div  id="swiper1">
  <!-- Additional required wrapper -->
  <div id="tab-sliders" class="swiper-wrapper ">
  <div class="swiper-slide">1</div>
  <div class="swiper-slide">2</div>
  <div class="swiper-slide">3</div>
  <div class="swiper-slide">4</div>
  <div class="swiper-slide">5</div>
    <!-- Slides --></div>
  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
</div>`;

  let catalogContent = document.getElementById("catalog-content");
  catalogContent.insertAdjacentHTML("beforeend", tabsText);
  console.log(tabsText);

  const tabsNav = document.querySelectorAll(".tab-nav-item");
  tabsNav.forEach((item) => {
    item.addEventListener("click", () => {
      const tabId = item.getAttribute("data-tab");
      const tabsContent = document.querySelectorAll(".tab-content");
      tabsContent.forEach((tabContent) => {
        tabContent.classList.remove("active");
        if (tabContent.getAttribute("id") === tabId) {
          tabContent.classList.add("active");
        }
      });
      tabsNav.forEach((tabNav) => {
        tabNav.classList.remove("active");
      });
      item.classList.add("active");
    });
  });

  console.log("test");

  document
    .getElementById("asset-managers")
    .insertAdjacentHTML("afterbegin", tabTemplate);

  const swiper1 = new Swiper("#swiper1", {
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 3,
    paginationClickable: false,

    breakpoints: {
      1280: {
        slidesPerView: 4,
      },
      960: {
        slidesPerView: 3,
      },
      600: {
        slidesPerView: 2,
      },
      400: {
        slidesPerView: 1,
      },
    },
  });
}
// footer
function footer() {
  let footer = `
  <footer>
    <p>Footer</p>
  </footer>
  `;

  let skilljarContent = document.getElementById("skilljar-content");

  skilljarContent.insertAdjacentHTML("beforeend", footer);
}
