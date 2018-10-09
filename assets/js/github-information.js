function userInformationHTML(user) {    //return html code we use to render the data for our users //single parameter..user(our object)
    return `                                
        <h2>${user.name}                    <!-- url that will link to a users github page target=_blank...opens up in new tab-->
            <span class="small-name">
                (@<a href="${user.html_url}" target="_blank">${user.login}</a>)  
            </span>                                                             
        </h2>
        <div class ="gh-content">
            <div class="gh-avatar">
                <a href="${user.html_url} target="_blank">
                    <img src="${user.avatar_url}" width="80" height="80" alt="${user.login}" />"    <!--shows users github avatar -->
                </a>
            </div>
            <p>Followers: ${user.followers} - Following ${user.following} <br> Repos: ${user.public_repos}</p> 
        </div>`; /*number of followers/following. num of repos*/
                                                                                                                
                
                                                            
}

function fetchGitHubInformation(event) {            
    
    var username = $("#gh-username").val();             
    if(!username) {             
        $("#gh-user-data").html(`<h2>Please enter a GitHub username</h2>`);
        return;
    }
    
    $("#gh-user-data").html(
        `<div id="loader">
            <img src="assets/css/loader_gif.gif" alt="loading..." />
        </div>`);
        
    $.when(
        $.getJSON(`https://api.github.com/users/${username}`)
        ).then(
            function(response) {
                var userData = response;
                $("#gh-user-data").html(userInformationHTML(userData)); //write userData to gh-user-data
            }, function(errorResponse) {
                if (errorResponse.status === 404) {
                    $("#gh-user-data").html(        //write html to gh-user-data
                        `<h2>No info found for user ${username}</h2>`); //display this if error is 404
                }else {
                    console.log(errorResponse); // any other errors..console.log them
                    $("#gh-user-data").html(  //feedback for user. Error and error message
                        `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
                }
            }); 
}