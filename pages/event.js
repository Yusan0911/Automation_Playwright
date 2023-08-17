const { expect } = require("@playwright/test")

exports.createEventPage = class createEventPage{

constructor(page){

    this.page = page
    this.email_box=page.getByLabel('Email address')
    this.password_box= page.getByLabel('Password')
    this.login_button=page.getByRole('button', { name: 'Log in' })
    this.createEvent_button = page.getByTestId('consumer-header-create-event-link')
    this.eventtitile_box=page.getByPlaceholder('Be clear and descriptive.')
    this.category_dropdown=page.locator('#eventType')
    this.type_dropdown=page.locator('#eventSubTopic')
    this.tag_box=page.getByPlaceholder('Add search keywords to your event')
    this.food_button=page.locator("//li[@id='food_and_drink']//button[@type='button']")
    this.music_button=page.locator("//div[normalize-space()='music']")
    this.locaton_box=page.locator('#event-locationautocomplete-location')
    this.save_and_continue=page.getByRole('button', { name: 'Save & Continue' })
    this.single_event=page.getByText('Single Event', { exact: true })
    this.calendar_button = page.getByLabel('Event Starts *(required)')
    this.move_nextMonth_button=page.getByLabel('Move forward to switch to the next month.')
    this.date_button=page.getByRole('button', { name: '1', exact: true })
    this.arraow_Button =page.locator('.arrow-down_svg__eds-icon--down-arrow_svg')
    this.eventMediaTitle=page.getByRole('heading', { name: 'Event media' })
    this.uploadImage=page.getByRole('button', { name: 'Upload image' })
    this.upload_video_box=page.getByLabel('URL')
    this.summarybox=page.getByPlaceholder('Write a short event summary to get attendees excited.')
    this.suggest_summary= page.getByRole('button', { name: 'Suggest summary' })
    this.publishButton= page.locator('#global-header a').filter({ hasText: 'Publish' })

}

async lunchLoginpage(){

    await this.page.goto("https://www.eventbrite.com/signin/")
}

async login(email,password){

    await this.email_box.type(email)
    await this.password_box.type(password)
    await this.login_button.click()
    await this.createEvent_button.click()

}

async eventTitleBox(text){
    await this.eventtitile_box.type(text)

}
async categoryAndType(category,type){
    await this.category_dropdown.selectOption(category)
    await this.type_dropdown.selectOption(type)
}
async tagsBox(textt){

    await this.tag_box.type(textt)
    await this.food_button.click()
    await this.arraow_Button.click()
}
async locationSelection(state){

    await this.locaton_box.type(state)
    await this.page.getByRole('button', { name: 'Houston Zoo, Hermann Park Drive, Houston, TX, USA' }).click();
    // await this.page.keyboard.press("ArrowDown");
    // await this.page.keyboard.press("Enter");
    await this.arraow_Button.click()
}
async timeToEvent(){

await this.single_event.click()
await this.calendar_button.click();
await this.move_nextMonth_button.click();
await this.date_button.click()
await this.save_and_continue.click()

}
 async uploadVideo(url){
    await this.upload_video_box.type(url)

 }

 async summary(){

    await this.suggest_summary.click()
 }

 async publish(){

    await this.publishButton.click()


 }

}