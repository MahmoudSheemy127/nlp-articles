const Btn = document.querySelector("#submit");
Btn.addEventListener("click", handleSubmit)

async function handleSubmit(e){
    e.preventDefault();
    document.getElementById("result").innerText = "";
    const Article = document.querySelector("#article").value;
    if(Article != "")
    {
        console.log(Article);        
        //api call to the server
        try{
            const res = await fetch("http://localhost:8080/post-article",{
                method:'POST',
                credentials: 'same-origin',
                headers:{
                    'Content-Type': 'application/json'
                    },
                body: JSON.stringify({Article})
                })
            const data = await res.json();
            console.log(data);
            Client.updateDom(data);
        }
        catch(err)
        {
            console.log("Huge err ",err);
        }    
    }   
}


// const postArticle = async (article) => {
//     try{
//         const res = await fetch("http://localhost:8080/post-article",{
//             method:'POST',
//             credentials: 'same-origin',
//             headers:{
//                 'Content-Type': 'application/json'
//                 },
//             body: JSON.stringify({article})
//             })
//         const data = await res.json();
//         console.log(data);
//         Client.updateDom(data);
//     }
//     catch(err)
//     {
//         console.log("Huge err ",err);
//     }
// }

export {handleSubmit}

