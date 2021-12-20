var content = "Link"

const textBtn = document.getElementById("text");
const linkBtn = document.getElementById("link");
const textArea = document.getElementById("article");

textBtn.addEventListener("click",()=>{
    if(content != "text")
    {
        content = "text";
        console.log(content);
        textArea.placeholder = "Type What you Think of"
    }
})

linkBtn.addEventListener("click",()=>{
    if(content != "link")
    {
        content = "link";
        console.log(content);
        textArea.placeholder = "Insert Link here"
    }

})

export {content}


