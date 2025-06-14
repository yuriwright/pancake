

// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// +-+-+-+-+-+-+-+-+-+-+form 1+-+-+-+-+-+-+-+-+-+-+-+-+-
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

// grab reference to form
const formElem = document.querySelector("form1");

// submit handler
formElem.addEventListener("submit", (e) => {
    // on form submission, prevent default
    e.preventDefault();

    // construct a FormData object, which fires 
    // the formdata event
    new FormData(formElem);
});

// formdata handler to retrieve data
formElem.addEventListener("formdata", (e) => {
    console.log("formdata fired");

    // get the form data from the event object
    let data = e.formData;
    for (const value of data.values()) {
        console.log(value);
    }

    // submit the data via XHR
    const request = new XMLHttpRequest();
    request.open("POST", "/formHandler");
    request.send(data);
});