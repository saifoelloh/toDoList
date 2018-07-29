// InputBox
const inputData = document.getElementById("input-data")

//  Notif
const notifTambah = document.getElementById("data-pesan-tambah")
const notifUbah = document.getElementById("data-pesan-ubah")
const notifUbah2 = document.getElementById("data-pesan-ubah2")
const notifDelete = document.getElementById("data-pesan-delete")

// Button Collection
const btnSubmit = document.getElementById("tombol-submit")
const btnUbah = document.getElementsByClassName("tombolUbah")
const btnSimpan = document.getElementById("tombol-save")
const btnHapus = document.getElementsByClassName("tombolHapus")

// List Item
const listItemSebelum = document.getElementById("sebelum-list")
const listItemSesudah = document.getElementById("sesudah-list")
const listItem = document.getElementsByClassName("listedItem")

let arr

kotakLokal = JSON.parse(localStorage.getItem("belajar"))

if (kotakLokal!=null)
    arr = kotakLokal
else
    arr = {
        sebelum : [],
        sesudah : []
    }

render()

btnSubmit.addEventListener("click", function () {
    console.log(inputData.value)
    arr.sebelum.push(inputData.value)
    localStorage.setItem("belajar", JSON.stringify(arr))
    render()
    inputData.value = ""
})

function funPindahArrSebelum(i) {
    let temp = arr.sebelum[i]
    arr.sebelum.splice(i,1)
    arr.sesudah.push(temp)
    localStorage.setItem("belajar", JSON.stringify(arr))
    render()
}

function funHapusArrSebelum(i) {
    arr.sebelum.splice(i,1)
    localStorage.setItem("belajar", JSON.stringify(arr))
    render()
}

function funPindahArrSesudah(i) {
    let temp = arr.sesudah[i]
    arr.sesudah.splice(i,1)
    arr.sebelum.push(temp)
    localStorage.setItem("belajar", JSON.stringify(arr))
    render()
}

function funHapusArrSesudah(i) {
    arr.sesudah.splice(i,1)
    localStorage.setItem("belajar", JSON.stringify(arr))
    render()
}

function render() {
    
    let temp = ``
    let temp2 = ``

    if (arr.sebelum.length != 0) {
        for (let i = 0; i < arr.sebelum.length; i++){
            temp += `<li class="list-group-item">
                        <div class="input-group d-flex align-items-stretch">
                        <input id="listedItem" type="text" class="form-control disable" aria-label="Recipient's username with two button addons" aria-describedby="button-addon4" value="${arr.sebelum[i]}">
                        <div class="input-group-append" id="button-addon4">
                            <button class="btn btn-outline-secondary" type="button" onclick="funPindahArrSebelum(${i})">
                            <svg id="i-checkmark" viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                <path d="M2 20 L12 28 30 4" />
                            </svg>
                            </button>
                            <button class="btn btn-outline-secondary" type="button" onclick="funHapusArrSebelum(${i})">
                            <svg id="i-trash" viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                <path d="M28 6 L6 6 8 30 24 30 26 6 4 6 M16 12 L16 24 M21 12 L20 24 M11 12 L12 24 M12 6 L13 2 19 2 20 6" />
                            </svg>
                            </button>
                        </div>
                        </div>
                    </li>`
        }
    } else {
        temp += `<h3 class="d-flex align-items-center justify-content-center text-secondary">Anda pengangguran</h3>`
    }


    if(arr.sesudah.length!=0) {
        for(let i=0;i<arr.sesudah.length;i++){
            temp2 += `<li class="list-group-item">
                        <div class="input-group d-flex align-items-stretch">
                        <input id="listedItem" type="text" class="form-control disable" aria-label="Recipient's username with two button addons" aria-describedby="button-addon4" value="${arr.sesudah[i]}">
                        <div class="input-group-append" id="button-addon4">
                            <button class="btn btn-outline-secondary" type="button" onclick="funPindahArrSesudah(${i})">
                            <svg id="i-checkmark" viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                <path d="M2 20 L12 28 30 4" />
                            </svg>
                            </button>
                            <button class="btn btn-outline-secondary" type="button" onclick="funHapusArrSesudah(${i})">
                            <svg id="i-trash" viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                <path d="M28 6 L6 6 8 30 24 30 26 6 4 6 M16 12 L16 24 M21 12 L20 24 M11 12 L12 24 M12 6 L13 2 19 2 20 6" />
                            </svg>
                            </button>
                        </div>
                        </div>
                    </li>`
        }
    } else {
        temp2 = `<h3 class="d-flex align-items-center justify-content-center text-secondary">Lembur Mas</h3>`
    }

    listItemSebelum.innerHTML = temp
    listItemSesudah.innerHTML = temp2
}