window.addEventListener('load', async () => {
   const rootEl = document.querySelector('#home');
   const mainEl = document.querySelector('#main');

   const headerStr = await (await fetch('../Templates/header.hbs')).text();
   const headerTempl = Handlebars.compile(headerStr);

   const aboutSection = await (await (await fetch('../Templates/about.hbs')).text());
   const aboutTempl = Handlebars.compile(aboutSection);

   const featuresSection = await (await (await fetch('../Templates/features.hbs')).text());
   const featuresTempl = Handlebars.compile(featuresSection);

   const headerHtml = headerTempl({});
   const aboutHtml = aboutTempl({});
   const featuresHtml = featuresTempl({});
   const main = aboutHtml + featuresHtml;

   rootEl.innerHTML = headerHtml;
   mainEl.innerHTML = main;
});