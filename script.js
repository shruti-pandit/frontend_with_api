let root = document.getElementById("root");

let data = fetch("http://api.github.com/users")
.then(data=>{
    data.json().then(ex_data =>{

        for(value of ex_data){
            console.log(value.login);
            console.log(value.avtar_url);

            let{avatar_url, login,html_url}=value;
            root.innerHTML +=`
            <div class="card">
                <img src=${avatar_url} alt=${value.login}>
                <div class="info">
                    <h2> ${login} </h2>
                    <a href=${html_url} target="_blank">profile</a>
               </div>
            </div>
           ` ;
        }
    });
})
.catch(err => console.log(err));