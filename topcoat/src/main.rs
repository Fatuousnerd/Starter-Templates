use topcoat::{
    Result,
    router::{module_router, page},
    view::{View, component, view},
};

#[tokio::main]
async fn main() {
    topcoat::start(module_router!().build()).await.unwrap();
}

#[page]
async fn home() -> Result<impl View> {
    Ok(view!{
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>"Document"</title>
            topcoat::dev::script()
        </head>
        <body>
            hello(name: "world")
        </body>
        </html>
    })
}

#[component]
async fn hello(name:&str)->Result<impl View>{
    Ok(view!{
        <h1>"Hello, " (name) "!"</h1>
    })
}