const API_URL = "https://jsonplaceholder.typicode.com/users"

fetch(API_URL).then((Response) => {
    return Response.json();
}).then((data) => {
    data.forEach((user) => {
        console.log(user);
        let tdData1 = user.name;
        let tdData2 = user.username;
        let tdData3 = user.email;

        let trEle = document.createElement("tr");
        let tdEle1 = document.createElement("td");
        let tdEle2 = document.createElement("td");
        let tdEle3 = document.createElement("td");
        let tBody = document.querySelector("#table_body");

        tdEle1.textContent = tdData1;
        tdEle2.textContent = tdData2;
        tdEle3.textContent = tdData3;
  
        trEle.append(tdEle1);
        trEle.append(tdEle2);
        trEle.append(tdEle3);

        tBody.append(trEle);
    });
});