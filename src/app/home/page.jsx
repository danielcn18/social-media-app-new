// page.jsx could be page.js & it wouldn't make a difference b/ Next knows to read js files w/ returning html as jsx files.
// So it's simply good practice to use page.jsx & not page.js. 

// When a file marked with 'use client' is imported from a Server Component, compatible bundlers will treat the module import as a boundary between server-run and client-run code.
"use client"

// Initializing Page function
const Page = () => {

    return (
        <>
            <h1>This is the home page</h1>
        </>
    );
}

// Exporting the Page function
export default Page;