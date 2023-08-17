exports.registrationPage = class registrationPage{

    constructor(page){
        this.page = page
        this.signup_button = page.getByRole('link', { name: 'Sign up' })
        this.email_textBox=page.getByTestId('auth-lib-email-field')
        this.continue_button=page.getByTestId('form-submit-button')
        this.confrimEmail_Textbox=page.getByTestId('auth-lib-confirm-email-field')
        this.firstName_textbox=page.getByTestId('auth-lib-first-name-field')
        this.lastName_textbox=page.getByTestId('auth-lib-first-last-field')
        this.password_textbox=page.getByTestId('auth-lib-password-field')
        this.submit_button=page.getByTestId('signup-submit-button') 
        this.agree_button=page.locator("//button[normalize-space()='Agree']")
    }

    async gotoLoginPage(){

        await this.page.goto('https://www.eventbrite.com/signin/');
    }
    async CreateAcoount(email , password,fistName,LastName){

        await this.signup_button.click();
        await this.email_textBox.type(email)
        await this.continue_button.click()
        await this.confrimEmail_Textbox.type(email)
        await this.firstName_textbox.type(fistName)
        await this.lastName_textbox.type(LastName)
        await this.password_textbox.type(password)
        await this.submit_button.click();
        await this.agree_button.click()
       
    }

    

}