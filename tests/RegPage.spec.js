import{test,expect} from '@playwright/test'
import{registrationPage} from '../pages/reg'

test('RegPage',async ({page})=>{
    
const regPage = new registrationPage(page)
await regPage.gotoLoginPage()
const pageTitle = page.title();
console.log("page title is",pageTitle);
await expect(page).toHaveTitle('Eventbrite - Log In and Sign In');
await expect(page).toHaveURL('https://www.eventbrite.com/signin/');
await regPage.signup_button
await regPage.CreateAcoount('yrepket@petpartnr.com','Yusanjan','Yusan','Repket')
 await expect(page).toHaveURL('https://www.eventbrite.com/u/interests/?onboarding_referrer=');
})