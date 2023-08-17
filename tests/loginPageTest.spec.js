const { test,expect} = require('@playwright/test');

test('Home Page',async ({page})=>{

    await page.goto("https://code.visualstudio.com/docs/?dv=osx");

const pageTitle = page.title();
console.log("page title is",pageTitle);
await expect(page).toHaveURL('https://code.visualstudio.com/docs/?dv=osx');

await page.close;

})

