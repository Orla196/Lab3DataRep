import Book from "./Book"; //imports Books function

function Read() {
    //JSSON brought into read.js and will hold a dataset
    const data = [
        {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
        },
        {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg", "status": "MEAP",
            "authors": [
                "Kyle Banker",
                "Peter Bakkum",
                "Tim Hawkins",
                "Shaun Verch",
                "Douglas Garrett"
            ],
            "categories": []
        },
        {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg", "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
        }

    ];
    //everything betweeen { } is objects in jason
    //everything betweeen ( ) is Array in jason
    return (<div>
        <h3>"Hello from Read"</h3>
        <Book myBooks={data}></Book> {/*Sends data to the child componant of book.js*/}
    </div>)
}


//export the Read conponent
export default Read;