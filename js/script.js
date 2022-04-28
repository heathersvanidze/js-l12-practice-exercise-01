const selectUserNumber = document.querySelector(".select");
const randomFolks = document.querySelector(".random-peeps");

const getData = async function(){
    const usersRequest = await fetch ("https://randomuser.me/api?results=5");
    const data = await usersRequest.json();

    const userResults = data.results;
    console.log(userResults);
};
getData();

const displayUsers = function(userResults){
    randomFolks.innerHTML = "";
};

selectUserNumber.addEventListener("change", function (e){
    numUsers = e.target.value;
    getData(numUsers);
})
