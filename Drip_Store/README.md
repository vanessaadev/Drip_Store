# Projeto Loja de Sapatos Esportivos
![Versão](https://img.shields.io/badge/Vers%C3%A3o-1.0_-blue)
![React](https://img.shields.io/badge/React-16.13.1-%2320232a)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-%F7DF1E)
![Font Awesome](https://img.shields.io/badge/Font%20Awesome-5.15.4-%23000000)
![Swiper](https://img.shields.io/badge/Swiper-8.0.0-%2334C6D4)

# Descrição do Projeto  
Drip Store é uma loja de sapatos esportivos desenvolvido inicialmente com o front-end, utilizando React com Javascript. O projeto tem como objetivo de aplicar os conhecimentos adqueridos na formação do curso Desenvolvimento Web Full Stack, ofertado pelo o Governo do Estado do Ceará com parceira da escola Digital College.

## Tecnologias Utilizadas

<div style="display: flex; align-items: flex-start;">
    <img src="https://i0.wp.com/blog.fontawesome.com/wp-content/uploads/2020/08/Variations-2.gif?resize=720%2C480&ssl=1" alt="icon" width="100" height="90" />
    <img src="https://media0.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif?cid=6c09b952c9pnqorz2b6a1zwr02frx9nzljqpyrvm1x75z8m3&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" alt="icon" width="100" height="100" />
    <img src="https://img.genial.ly/6035bcb66b979e053f5d6fc6/b9d08c40-5ec0-4463-b697-9e25c614fff7.gif" alt="icon" width="100" height="100" />
    <img src="https://webartdevelopers.com/blog/wp-content/uploads/2018/10/CSS-Card-Swipe-Animation.gif" alt="icon" width="100" height="90" />
</div>



## Arquitetutura das Pastas

```
|    ├── .Drip_Store
|    |    ├── public/
│    |    |
│    │    │   ├── collection-1.png
│    │    │   ├── collection-2.png
│    │    │   ├── collection-3.png
│    │    │   ├── collection1.png
│    │    │   ├── collection2.png
│    │    │   ├── collection3.png
│    │    │   ├── fundo_sapato.png
│    │    │   ├── home-slide-1.jpeg
│    │    │   ├── home-slide-2.jpeg
│    │    │   ├── home-slide-3.jpeg
│    │    │   ├── home-slide-4.jpeg
│    │    │   ├── home-slide-5.jpeg
│    │    │   ├── home-slide-6.jpeg
│    │    │   ├── home-slide-7.jpeg
│    │    │   ├── home-slide-8.jpeg
│    │    │   ├── product-image-1.jpeg
│    │    │   ├── product-image-2.jpeg
│    │    │   ├── product-image-3.jpeg
│    │    │   ├── product-image-4.jpeg
│    │    │   ├── product-image-5.jpeg
│    │    │   ├── product-thumb-1.jpeg
│    │    │   ├── product-thumb-2.jpeg
│    │    │   ├── product-thumb-3.jpeg
│    │    │   ├── product-thumb-4.jpeg
│    │    │   ├── product-thumb-5.jpeg
│    │    │   ├── sapato.png
│    │    │   ├── Site.png
│    │    │   ├── TenisSlide.svg
│    │
|    |── src/
│    │
│    ├── asserts/
│    │    ├── arrow-right.svg
│    │    ├── blusaE.svg
│    │    ├── calça.svg
│    │    ├── dois.svg
│    │    ├── ellipse.svg
│    │    ├── facebook.svg
│    │    ├── fone.svg
│    │    ├── instagram.svg
│    │    ├── logo-footer.svg
│    │    ├── logo-header.svg
│    │    ├── mini-cart.svg
│    │    ├── Ornament.svg
│    │    ├── Search.svg
│    │    ├── star-active.svg
│    │    ├── star-desactive.svg
│    │    ├── star-icon.svg
│    │    ├── star-white.svg
│    │    ├── teniss.svg
│    │    ├── twitter.svg
│
│    ├── components/
│    │
│    │    ├── ButtonCard/
│    │    │   ├── ButtonCard.css
│    │    │   ├── ButtonCard.jsx
│    │    │
│    │    ├── ButtonRosa/
│    │    │   ├── ButtonRosa.css
│    │    │   ├── ButtonRosa.jsx
│    │    │
│    │    ├── Corousel/
│    │    │   ├── Corousel.css
│    │    │   ├── Corousel.jsx
│    │    │
│    │    ├── ColorShoes/
│    │    │   ├── ColorShoes.css
│    │    │   ├── ColorShoes.jsx
│    │    │
│    │    ├── DescProduct/
│    │    │   ├── DescProduct.css
│    │    │   ├── DescProduct.jsx
│    │    │
│    │    ├── Footer/
│    │    │   ├── Footer.css
│    │    │   ├── Footer.jsx
│    │    │
│    │    ├── Header/
│    │    │   ├── Header.css
│    │    │   ├── Header.jsx
│    │    │
│    │    ├── Logo/
│    │    │   ├── Logo.css
│    │    │   ├── Logo.jsx
│    │    │
│    │    ├── Navbar/
│    │    │   ├── Navbar.css
│    │    │   ├── Navbar.jsx
│    │    │
│    │    ├── ProductCard/
│    │    │   ├── ProductCard.css
│    │    │   ├── ProductCard.jsx
│    │    │
│    │    ├── ProductPage/
│    │    │   ├── ProductPage.css
│    │    │   ├── ProductPage.jsx
│    │    │
│    │    ├── Section/
│    │    │   ├── Section.css
│    │    │   ├── Section.jsx
|    |    |
|    |    ├── SectionCard/
│    │    │   ├── SectionCard.css
│    │    │   ├── SectionCard.jsx
|    |    |
|    |    ├── SectionOfert/
│    │    │   ├── SectionOfert.css
│    │    │   ├── SectionOfert.jsx
|    |    |
|    |    ├── SizeButtonShoes/
│    │    │   ├── SizeButtonShoes.css
│    │    │   ├── SizeButtonShoes.jsx
|    |    |
|    |    ├── SlideShoes/
│    │    │   ├── SlideShoes.css
│    │    │   ├── SlideShoes.jsx
|    |    |
|    |    ├── Stars/
│    │    │   ├── Stars.css
│    │    │   ├── Stars.jsx
|    |       
│    │
│    ├── pages/
│    │
│    │    ├── HomePage/
│    │    │   ├── Products.jsx
│    │    │  
│    │    │
│    │    ├── ProductViewPage/
│    │    │   ├── ProductViewPage.jsx
│    │    │   
│    │    │
│    │    ├── PruductListinigPage.jsx
│    │    ├── PruductListinigPage.jsx
│    │
│    ├── routes/
│    │    ├── AppRoutes.jsx
│    │    
│    ├── App.css
│    ├── App.jsx
│    ├── main.jsx
│
├── .eslintrc.cjs
├── .gitignore
├── .image-1.png
├── .image.png
├── helper.md
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vite.configs.js
```


## Membros do Projeto

|                                               Profile                                                |       Nome Completo        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :--------------------------------------------------------------------------------------------------: | :------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|     [<img src="https://avatars.githubusercontent.com/u/146147231?v=4" height="90px">](https://github.com/souzadevofic)     |   Alisson Silva de Souza       |                                                                                                                                                                                                                                  
| [<img src="https://avatars.githubusercontent.com/u/88554119?v=4" height="90px">](https://github.com/vanessaadev) |   Vanessa de Araujo do Nascimento   |
|   [<img src="https://avatars.githubusercontent.com/u/172999556?v=4" height="90px">](https://github.com/DevRDone)   | Ronald da Costa Oliveira |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

