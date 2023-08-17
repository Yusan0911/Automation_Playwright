import{test,expect} from '@playwright/test'
import{createEventPage, registrationPage} from '../pages/event'

test('createEventPage',async ({page})=>{

      
      const createEvent = new createEventPage(page)
      await createEvent.lunchLoginpage()
      await createEvent.login('repukati.yushanjiang@gmail.com','Yusanjan')
      await createEvent.eventTitleBox('Yusan Birthday Party')
      await createEvent.categoryAndType('Party or Social Gathering','Other')
      await createEvent.tagsBox('food')
      await createEvent.locationSelection('Houston')
      await createEvent.timeToEvent()
      await createEvent.uploadVideo('https://www.youtube.com/watch?v=iDSVpsFBVz0&list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbAVMiDSVpsFBVz0&start_radio=1')
      await createEvent.summary()
      await createEvent.publish()


                     //Event Media page title mediaCreate
                    
    const PageTitle =await page.locator("//h1[normalize-space()='Event media']").textContent();    
    console.log("PageTitle"+PageTitle);
    expect(PageTitle.includes("Event media")).toBeTruthy();
    
     // event validation
    expect(await page.getByText('Sunday, October 1, 2023 at 7:00 PM CDT6200 Hermann Park Drive, Houston, TX 77030').textContent()).toBeTruthy()


//             //File upload
//     //await page.getByLabel('Upload image').setInputFiles('/Users/repukatiali/Downloads/image.2.png');






    


    

    



    


})