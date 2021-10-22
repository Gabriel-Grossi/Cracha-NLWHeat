const socialMediaLinks = {
    github: "Gabriel-Grossi",
    youtube: "rocketseat", //Código do meu canal;
    facebook: "rocketseat",
    instagram: "ghgrossi"
}

function changeSocialLinks(){
    for(let li of socialLinks.children){
        const social =  li.getAttribute('class');
        li.children[0].href = `https://www.${social}.com/${socialMediaLinks[social]}`
    }
}

changeSocialLinks();

function getGitHubProfileInfo(){
    const url = `https://api.github.com/users/${socialMediaLinks.github}`
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userBio.href = data.bio
            userLink.href = data.html_url
            userPhoto.src = data.avatar_url
            userLogin.textContent = data.login
        })
}

getGitHubProfileInfo()
