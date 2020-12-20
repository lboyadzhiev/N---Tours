window.addEventListener('load', async () => {
   const rootEl = document.querySelector('#root');

   const headerStr = await (await fetch('../Templates/header.hbs')).text();
   const headerTempl = Handlebars.compile(headerStr);

   const headerHtml = headerTempl({ });

   rootEl.innerHTML = headerHtml;
});