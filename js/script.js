// slider items 

let items = document.querySelectorAll('.slider .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    
    let activo = 0; // que empiece en item1
    function CargarTarjetas(){
        let stt = 0;
        items[activo].style.transform = `none`;
        items[activo].style.zIndex = 1;
        items[activo].style.filter = 'none';
        items[activo].style.opacity = 1;
        for(let i = activo + 1; i < items.length; i++){
            stt++;
            items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
        stt = 0;
        for(let i = activo - 1; i >= 0; i--){
            stt++;
            items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
    }
    CargarTarjetas();
    next.onclick = function(){
        activo = activo + 1 < items.length ? activo + 1 : activo;
        CargarTarjetas();
    }
    prev.onclick = function(){
        activo = activo - 1 >= 0 ? activo - 1 : activo;
        CargarTarjetas();
    }


    //---- boton de form 
    window.addEventListener("load", function() {
        document.getElementById("viewAlerta").addEventListener("click", function() {
            alert("¡Muchas gracias! Contactaremos contigo lo más pronto posible");
        });
    });

    //----- PARTE DE LA API jsonplaceholder
document.addEventListener("DOMContentLoaded", () => {
    const userList = document.getElementById('user-list');
    fetch('https://jsonplaceholder.typicode.com/users') // promises 
        .then(response => response.json())
        .then(users => {
            // Ejecutar los datos de todos los autores:
            users.forEach(user => {
                // userlist container div
                const userDiv = document.createElement('div');
                userDiv.classList.add('user');

                // nombre
                const userName = document.createElement('h2');
                userName.textContent = user.name; 
                userDiv.appendChild(userName);
               
                // random images
                const authorImage = document.createElement('img');
                authorImage.classList.add('author-image');
                authorImage.src = `https://picsum.photos/seed/${user.id}/100/100`; 
                authorImage.alt = `Imagen de ${user.name}`;
                userDiv.appendChild(authorImage);

               
                //catch phrase
                const userCatchPhrase = document.createElement('p');
                userCatchPhrase.classList.add('catch-phrase');
                userCatchPhrase.textContent = `"${user.company.catchPhrase}"`;
                userDiv.appendChild(userCatchPhrase);

                 // email
                 const userEmail = document.createElement('p');
                 userEmail.textContent = `Email: ${user.email}`;
                 userDiv.appendChild(userEmail);

                 
                // website 
                const userWebsite = document.createElement('p');
                const userWebsiteLink = document.createElement('a');
                userWebsiteLink.href = `http://${user.website}`;
                userWebsiteLink.textContent = `Website: ${user.website}`;
                userWebsiteLink.target = "_blank";
                userWebsite.appendChild(userWebsiteLink);
                userDiv.appendChild(userWebsite);

                  //telefono
                  const userphone = document.createElement('p');
                  userphone.classList.add('phone');
                  userphone.textContent = `Contacto: ${user.phone}`;
                  userDiv.appendChild(userphone);
                 
                   // ciudad 
                const usercity = document.createElement('p');
                usercity.classList.add('city')
                usercity.textContent = `Direccion: ${user.address.city}`;
    
                userDiv.appendChild(usercity);
                  

                // user list ejecutar
                userList.appendChild(userDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching the user data:', error);
        });
});

