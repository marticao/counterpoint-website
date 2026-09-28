/* =========================
   READING LIST
   ========================= */


/*
   This object stores the information for each book.

   The names on the left — trouillot, ferdinand, etc. —
   match the data-book values in reading-list.html.
*/

const books = {

    trouillot: {
        title: "Silencing the Past",
        author: "Michel-Rolph Trouillot",
        image: "../assets/images/books/silencing-past.png",
        alt: "Cover of Silencing the Past",
        description:
            "Examines how historical narratives are produced and how power shapes what is remembered, recorded, or silenced. Trouillot considers the making of history from the creation of sources to the writing of historical accounts."
    },

    ferdinand: {
        title: "Decolonial Ecology",
        author: "Malcom Ferdinand",
        image: "../assets/images/books/decolonial-ecology.png",
        alt: "Cover of Decolonial Ecology",
        description:
            "Examines environmental thought through the histories of colonialism and slavery in the Caribbean. Ferdinand connects ecological concerns with questions of race, inequality, and colonial power."
    },

    goldstein: {
        title: "Remains of the Everyday",
        author: "Joshua Goldstein",
        image: "../assets/images/books/remains-everyday.png",
        alt: "Cover of Remains of the Everyday",
        description:
            "Explores recycling, waste, and material culture in contemporary China. Goldstein examines how discarded objects move through informal economies and how everyday practices reveal wider social and economic transformations."
    },

    mccabe: {
        title: "Poems from the Edge of Extinction",
        author: "Edited by Chris McCabe",
        image: "../assets/images/books/poems-from-edge-of-extinction.png",
        alt: "Cover of Poems from the Edge of Extinction",
        description:
            "A collection of poems written in endangered languages from around the world. The anthology brings attention to linguistic diversity, cultural memory, and the relationship between language and identity."
    },

    scott: {
        title: "In Praise of Floods",
        author: "James C. Scott",
        image: "../assets/images/books/in-praise-of-floods.png",
        alt: "Cover of In Praise of Floods",
        description:
            "Examines rivers, wetlands, and floodplains as environments shaped by both ecological processes and human intervention. Scott challenges efforts to control water and considers alternative ways of living with changing landscapes."
    },

    warren: {
        title: "Typhoons",
        author: "James Francis Warren",
        image: "../assets/images/books/typhoons.png",
        alt: "Cover of Typhoons",
        description:
            "Examines the historical relationship between typhoons, climate, and society in the Philippines. Warren considers how extreme weather has shaped communities, livelihoods, and historical change."
    },

    adichie: {
        title: "Dream Count",
        author: "Chimamanda Ngozi Adichie",
        image: "../assets/images/books/dream-count.png",
        alt: "Cover of Dream Count",
        description:
            "A novel exploring the lives and relationships of four women across different places and experiences. The book considers love, migration, identity, memory, and the ways personal histories shape people's lives."
    }

};


/* =========================
   FEATURED BOOK ELEMENTS
   ========================= */


/*
   These variables identify the parts of the featured
   book area that JavaScript is allowed to change.
*/

const featuredCover =
    document.querySelector("#featured-book-cover");

const featuredTitle =
    document.querySelector("#featured-book-title");

const featuredAuthor =
    document.querySelector("#featured-book-author");

const featuredDescription =
    document.querySelector("#featured-book-description");

const featuredReading =
    document.querySelector("#featured-reading");

/*
   Find all seven clickable books in the grid.
*/

const readingBooks =
    document.querySelectorAll(".reading-book");


/* =========================
   BOOK SELECTION
   ========================= */


/*
   Give every book button a click event.
*/

readingBooks.forEach((bookButton) => {

    bookButton.addEventListener("click", () => {

        /*
           Find out which book was clicked.

           For example:
           data-book="scott"

           becomes:
           "scott"
        */

        const bookName =
            bookButton.dataset.book;


        /*
           Use that name to retrieve the matching
           information from the books object above.
        */

        const selectedBook =
            books[bookName];


        /*
           Change the featured book.
        */

        featuredCover.src =
            selectedBook.image;

        featuredCover.alt =
            selectedBook.alt;

        featuredTitle.textContent =
            selectedBook.title;

        featuredAuthor.textContent =
            selectedBook.author;

        featuredDescription.textContent =
            selectedBook.description;


        /*
           Remove the active style from every book.
        */

        readingBooks.forEach((book) => {
            book.classList.remove("reading-book-active");
        });


        /*
           Add the active style to the book
           that was just clicked.
        */

        bookButton.classList.add("reading-book-active");

        /*
            Smoothly return to the featured book
            after a new book is selected.
        */

        featuredReading.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });

});