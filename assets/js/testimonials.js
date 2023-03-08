// OOP Programming
// class Testimonials {
//   constructor(quote, image) {
//     this._quote = quote;
//     this._image = image;
//   }

//   get quote() {
//     return this._quote;
//   }

//   get image() {
//     return this._image;
//   }

//   get testiHtml() {
//     return `<div class="card-testi">
//               <img src="${this.image}" alt="person" />
//               <p class="quote">"${this.quote}"</p>
//               <p class="author">- ${this.author}</p>
//             </div>`;
//   }
// }

// class AuthorTesti extends Testimonials {
//   constructor(author, quote, image) {
//     super(quote, image);
//     this._author = author;
//   }

//   get author() {
//     return this._author;
//   }
// }

// class CompanyTesti extends Testimonials {
//   constructor(company, quote, image) {
//     super(quote, image);
//     this._company = company;
//   }

//   get author() {
//     return this._company + " Company";
//   }
// }

// const testi1 = new AuthorTesti(
//   "Surya Elidanto",
//   "Mantap sekali jasanya!",
//   "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
// );

// const testi2 = new AuthorTesti("Surya Elz", "Keren lah pokoknya!", "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60");

// const testi3 = new CompanyTesti("ABC", "Wuhuu keren lah!", "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60");

// let testimonialData = [testi1, testi2, testi3];
// let testimonialHtml = "";

// for (i = 0; i < testimonialData.length; i++) {
//   testimonialHtml += testimonialData[i].testiHtml;
// }

// document.querySelector(".wrap-testi").innerHTML = testimonialHtml;

// Functional Programming
const testimonialData = [
  {
    author: "Rizki Fais",
    quote: "Keren banget jasanya!",
    image: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 5,
  },
  {
    author: "Mubarok",
    quote: "Keren lah pokoknya!",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4,
  },
  {
    author: "Rifa",
    quote: "The best pelayanannya!",
    image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4,
  },
  {
    author: "Putra Ku",
    quote: "Oke lah!",
    image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    rating: 3,
  },
  {
    author: "Aji Kun",
    quote: "Apa apaan ini!",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    rating: 1,
  },
];

function allTestimonials() {
  let testimonialHtml = "";

  testimonialData.forEach((e) => {
    testimonialHtml += `<div class="card card-testi m-4" style="width: 20rem">
    <img
      src="${e.image}"
      class="card-img-top object-fit-cover pt-3 ps-3 pe-3"
      alt="Person"
    />
    <div class="card-body">
      <p class="card-text fst-italic">"${e.quote}"</p>
      <p class="card-text text-end">- ${e.author}</p>
      <p class="card-text text-end">${e.rating} <i class="fa-solid fa-star"></i></p>
    </div>
  </div>`;
  });

  document.querySelector(".wrap-testi").innerHTML = testimonialHtml;
}

allTestimonials();

function filterTestimonials(rating) {
  let testimonialHtml = "";

  const testimonialFiltered = testimonialData.filter((e) => {
    return e.rating === rating;
  });

  if (testimonialFiltered.length === 0) {
    testimonialHtml = `<h1 class="text-center">Data not found</h1>`;
  } else {
    testimonialFiltered.forEach((e) => {
      testimonialHtml += `<div class="card card-testi m-4" style="width: 20rem">
      <img
        src="${e.image}"
        class="card-img-top object-fit-cover pt-3 ps-3 pe-3"
        alt="Person"
      />
      <div class="card-body">
        <p class="card-text fst-italic">"${e.quote}"</p>
        <p class="card-text text-end">- ${e.author}</p>
        <p class="card-text text-end">${e.rating} <i class="fa-solid fa-star"></i></p>
      </div>
    </div>`;
    });
  }

  document.querySelector(".wrap-testi").innerHTML = testimonialHtml;
}

const ratingAll = document.querySelector(".star-all");
const rating1 = document.querySelector(".star-1");
const rating2 = document.querySelector(".star-2");
const rating3 = document.querySelector(".star-3");
const rating4 = document.querySelector(".star-4");
const rating5 = document.querySelector(".star-5");

ratingAll.addEventListener("click", allTestimonials);
rating1.addEventListener("click", function () {
  filterTestimonials(1);
});
rating2.addEventListener("click", function () {
  filterTestimonials(2);
});
rating3.addEventListener("click", function () {
  filterTestimonials(3);
});
rating4.addEventListener("click", function () {
  filterTestimonials(4);
});
rating5.addEventListener("click", function () {
  filterTestimonials(5);
});
