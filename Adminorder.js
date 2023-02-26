let cartdata = JSON.parse(localStorage.getItem("cartdata")) || [];
console.log(cartdata)
let tbody = document.querySelector("tbody")
dataappend(cartdata)

function dataappend(array) {
    tbody.innerHTML = "";
    array.forEach(element => {
        let row = document.createElement("tr");
        let c1 = document.createElement("td");
        let c2 = document.createElement("td");
        let c3 = document.createElement("td");
        let c4 = document.createElement("td");
        c1.innerText = element.id;
        c2.innerText = element.name
        c3.innerText = element.qty;
        c4.innerText = "pending for payment"
        row.append(c1, c2, c3, c4)
        tbody.append(row)

    });
}