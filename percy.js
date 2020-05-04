let { run } = require("@percy/script");
let scrollToBottom = require("scroll-to-bottomjs");

const PercyScript = require('@percy/script');

// A script to navigate our app and take snapshots with Percy.
PercyScript.run(async (page, percySnapshot) => {
  
  await page.goto('https://www.handy.la/');
  await page.evaluate(scrollToBottom, { frequency: 100, timing: 70 });
  await percySnapshot('Home');

  
  await page.goto('https://www.handy.la/funcionalidades');
  await page.evaluate(scrollToBottom, { frequency: 100, timing: 70 });
  await percySnapshot('funcionalidades');

  await page.goto('https://www.handy.la/preventa');
  await page.evaluate(scrollToBottom);
  await page.evaluate(scrollToBottom, { frequency: 100, timing: 70 });
  await percySnapshot('preventa');

  await page.goto('https://www.handy.la/promotoria');
  await page.evaluate(scrollToBottom);
  await page.evaluate(scrollToBottom, { frequency: 100, timing: 70 });
  await percySnapshot('promotoria');

  await page.goto('https://www.handy.la/venta-en-ruta');
  await page.evaluate(scrollToBottom);
  await page.evaluate(scrollToBottom, { frequency: 100, timing: 70 });
  await percySnapshot('VentaRuta');

  let urls = ['https://www.handy.la/precios'];
  for (let url of urls) {
    await page.goto(url);
    await page.evaluate(scrollToBottom, { frequency: 100, timing: 70 });
    await percySnapshot('Precios');
  }

  
});
