fetchData();

async function fetchData() {

    try {
        const response = await fetch("https://swapi.py4e.com/api/people/1")
        
        if(!response.ok){
            throw new Error("No se pudo encontrar");
        }
    
        const data = await response.json();
        console.log(data);
    }
    
    catch(error){
        console.error(error);
    }

}


// async function fetchData() {
// 
    // try {
// 
//         const stwname = document.getElementById("stwname").value.toLowerCase();
// 
//         const response = await fetch(`https://swapi.py4e.com/api/${stwname}`)
//         
//         if(!response.ok){
//             throw new Error("No se pudo encontrar");
//         }
//     
//         const data = await response.json();
//         console.log(data);
//     }
//     
//     catch(error){
//         console.error(error);
//     }
// 
// }