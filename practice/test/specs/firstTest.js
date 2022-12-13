describe('E-commerce website verification',async function(){

    it('Open application and verify title', async ()=>{
        await browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        console.log("Title found: "+ await browser.getTitle())
    })
})