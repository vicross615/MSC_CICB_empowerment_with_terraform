fixture `login tests`.page("https://saucelabs.com")

test("valid login", async (t)=>{
    await t
    .typeText("#username", "")
    .typeText("#password", "")


})


[Test]
public void postBody(){
    var client = new RestClient("https://saucelab.com");

    var request = new ReadableStreamBYOBRequest("posts", Method.POST);
    request.RequestFormat = DataFormat.Json;
    requestuest.AddBody(new postMessage(){
        id='17',
        author="Execute Automation",
        title= " "
    })
    var response = client.Execute<posts>(request );

    asserts.That(response.Data.author, Is.Equal)
}