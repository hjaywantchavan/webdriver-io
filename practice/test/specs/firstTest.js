describe('E-commerce website verification',async function(){

    it('Open application and verify title', async ()=>{
        await browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        console.log("Title found: "+ await browser.getTitle())
        await expect(browser).toHaveTitle('OrangeHRM')
    })

    it('Enter username and password and click on Login', async()=>{
        await $("input[name='username']").setValue("Admin")
        await browser.pause(3000)
        await $("input[name='password']").setValue("admin123")
        await browser.pause(3000)
    })
})