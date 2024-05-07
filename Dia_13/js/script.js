function fetchCaraters(){
    let xhr = new XMLHttpRequest();
    let url = `https://randomuser.me/api/?results=1`
    xhr.open('GET',url,true);
    xhr.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            let response = JSON.parse(this.responseText);
            console.log(response);
            DisplayGeneralInfo(response);
        }
        else if( this.readyState == 4 ){
            console.log('Error:',this.statusText);
        }
    };
    xhr.send();
}
fetchCaraters();

function DisplayGeneralInfo(data){
    let avatar = document.getElementById("avatar");
    let name = document.getElementById("name");
    let email = document.getElementById("eemail");
    let calendar = document.getElementById("ccalendar");
    let map = document.getElementById("mmap");
    let tel = document.getElementById("ttel");
    let password = document.getElementById("ppassword");
    
    if (data.response === "error") {
        name.innerHTML = `<p>Error: ${data.error}</p>`;
        email.innerHTML = `<p>Error: ${data.error}</p>`;
        calendar.innerHTML = `<p>Error: ${data.error}</p>`;
        map.innerHTML = `<p>Error: ${data.error}</p>`;
        tel.innerHTML = `<p>Error: ${data.error}</p>`;
        password.innerHTML = `<p>Error: ${data.error}</p>`;

    } 
    else {
        
        avatar.innerHTML = `
        <img class="card__avatar" src="${data.results[0].picture.large}" alt="xd">
        `
        name.innerHTML = `
        <p style="color: #999999;">Hi, My name is</p></p><p>${data.results[0].name.first} ${data.results[0].name.last}</p>
        `
        eemail.innerHTML = `
        <p style="color: #999999;">My email address is</p><p>${data.results[0].email}</p>
        `
        ccalendar.innerHTML = `
        <p style="color: #999999;">My birthday is</p><p>${data.results[0].dob.date}</p>
        `
        mmap.innerHTML = `
        <p style="color: #999999;">My address is</p><p>${data.results[0].location.street.number} ${data.results[0].location.street.name}</p>
        `
        ttel.innerHTML = `
        <p style="color: #999999;">My phone number is</p><p>${data.results[0].email}</p>
        `
        ppassword.innerHTML = `
        <p style="color: #999999;">My password is</p><p>${data.results[0].phone}</p>
        `
    };
}

function displayname(){
    document.getElementById('name').style.display = 'block'; 
    document.getElementById('eemail').style.display = 'none'; 
    document.getElementById('ccalendar').style.display = 'none'; 
    document.getElementById('mmap').style.display = 'none'; 
    document.getElementById('ttel').style.display = 'none'; 
    document.getElementById('ppassword').style.display = 'none'; 
}

function displayemail(){
    document.getElementById('name').style.display = 'none'; 
    document.getElementById('eemail').style.display = 'block'; 
    document.getElementById('ccalendar').style.display = 'none'; 
    document.getElementById('mmap').style.display = 'none'; 
    document.getElementById('ttel').style.display = 'none'; 
    document.getElementById('ppassword').style.display = 'none'; 
}

function displaycalendar(){
    document.getElementById('name').style.display = 'none'; 
    document.getElementById('eemail').style.display = 'none'; 
    document.getElementById('ccalendar').style.display = 'block'; 
    document.getElementById('mmap').style.display = 'none'; 
    document.getElementById('ttel').style.display = 'none'; 
    document.getElementById('ppassword').style.display = 'none'; 
}

function displaymap(){
    document.getElementById('name').style.display = 'none'; 
    document.getElementById('eemail').style.display = 'none'; 
    document.getElementById('ccalendar').style.display = 'none'; 
    document.getElementById('mmap').style.display = 'block'; 
    document.getElementById('ttel').style.display = 'none'; 
    document.getElementById('ppassword').style.display = 'none'; 
}

function displaytel(){
    document.getElementById('name').style.display = 'none'; 
    document.getElementById('eemail').style.display = 'none'; 
    document.getElementById('ccalendar').style.display = 'none'; 
    document.getElementById('mmap').style.display = 'none'; 
    document.getElementById('ttel').style.display = 'block'; 
    document.getElementById('ppassword').style.display = 'none'; 
}

function displaypassword(){
    document.getElementById('name').style.display = 'none'; 
    document.getElementById('eemail').style.display = 'none'; 
    document.getElementById('ccalendar').style.display = 'none'; 
    document.getElementById('mmap').style.display = 'none'; 
    document.getElementById('ttel').style.display = 'none'; 
    document.getElementById('ppassword').style.display = 'block'; 
}




