
let empData = localStorage.getItem("Token") || null;

let tableBody = document.getElementById("employees-table-body")
let pagination = document.getElementById("pagination")

let searchBtn = document.querySelector("form")
let searchBar = document.getElementById("search-name")
let filterTag = document.getElementById("filter-department")
let SortTag = document.getElementById("sort-salary")


let API = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees`



window.addEventListener('load', () => {
    fetchAndRenderUsers()
})

//fetching the data from the API and rendering data to DOM
function fetchAndRenderUsers(pages=1) {

    fetch(`${API}?limit=15&page=${pages}`)
        .then((res) => {
            let totalCount = res.headers.get('X-Total-Count')
            console.log(totalCount)
            return res.json()
        })
        .then((data) => {
            console.log(data)
            sortSalary(data.data)
            RenderData(data.data)
            searchEmp(data.data)
        })

}





function RenderData(data) {

    tableBody.innerHTML=""

    data.forEach((emp) => {

        let tr = document.createElement("tr")

        let imageTd = document.createElement("td")

        let image = document.createElement("img")
        image.setAttribute("src", emp.image)

        let name = document.createElement("td")
        name.innerText = emp.name

        let department = document.createElement("td")
        department.innerText = emp.department

        let salary = document.createElement("td")
        salary.innerText = emp.salary

        let gender = document.createElement("td")
        gender.innerText = emp.gender


        imageTd.appendChild(image)
        tr.append(imageTd, name, department, gender, salary)
        tableBody.append(tr)

    });


}


paginationBtn(100)
function paginationBtn(page) {

    let all_arr = [];
    let btn = Math.ceil(page / 15)

    for (let i = 1; i <= btn; i++) {
        all_arr.push(`<button class="pagination-button" data-page-number="${i}">${i}</button>`)
    }

    pagination.innerHTML = all_arr.join('')

    let all_btns = document.querySelectorAll("#pagination button")

    for (let btn of all_btns) {
        btn.addEventListener('click', (e) => {
            let page_number = e.target.dataset.pageNumber
            fetchAndRenderUsers(page_number)
        })
    }
}


// sortSalary()
function sortSalary(data){
    SortTag.addEventListener('change',(e) => {

        if(SortTag.value=="all"){
            fetchAndRenderUsers(data)
        }
        else if(SortTag.value=="asc"){
            let sorted = data.sort(function(a,b) {return a.salary - b.salary})
            RenderData(sorted)
        }
        else if(SortTag.value=="desc"){
            let sorted = data.sort(function(a,b) {return b.salary - a.salary})
            RenderData(sorted)
        }
    })
    filterEmp(data)
}




function filterEmp(data){

    filterTag.addEventListener('change',(e) => {
        let filtered = data.filter((emp) => {
            if(emp.department == filterTag.value){
                return true
            }
            else{
                return false
            }
        })
        RenderData(filtered)
    })
}




function searchEmp(data){

    searchBtn.addEventListener('submit',(e) => {
        e.preventDefault()

        let searchInput = searchBar.value
        let searched = data.filter((Emp) => {
            if(Emp.name.toUpperCase().includes(searchInput.toUpperCase())==true){
                 return true
            }
            else{
                return false
            }
        })
        RenderData(searched)
    })
}




// fetch('http://127.0.0.1:9090/appleBand')
// .then((res) => {
    
// })