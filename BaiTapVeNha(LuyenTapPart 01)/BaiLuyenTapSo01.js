let songs = [
    { id: 1, nameSong: "Trap Boy", singer: "24KRight" },
    { id: 2, nameSong: "THE WXRDIES | 1 NHẤP 0 CHE", singer: "Wxrdie" },
    { id: 3, nameSong: "Đánh Đổi", singer: "Obito" },
];

let editId = null;


// DOM 
let songsList = document.getElementById("songTable");
let title = document.getElementById("title");
let singers = document.getElementById("artist");


let titleUpdate = document.getElementById("formTitle");
let btnSubmit = document.getElementById("submitBtn");
let btnCance = document.getElementById("cancelBtn");


let searchSong = document.getElementById("search");
let form = document.querySelector(".form");

let newSongs;

function saveToLocaleStroage(songs) {
    localStorage.setItem("Songs", JSON.stringify(songs));
}
function getLocalStroage() {
    newSongs = JSON.parse(localStorage.getItem("Songs")) || [];
}




saveToLocaleStroage(songs);
getLocalStroage();

function renderAllSong(arr) {
    songsList.innerHTML = "";
    if (arr.length === 0) {
        songsList.innerHTML = `
            <tr>
                <td colspan="4" style="text-align:center; padding: 20px;">
                    Không có bài hát nào 😢
                </td>
            </tr>
        `;
        return;
    }
    arr.forEach((c, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML += `
            <td>${index + 1}</td>
            <td>${c.nameSong}</td>
            <td>${c.singer}</td>
            <td>
                <button class = "btn--edit" data-id = "${c.id}">Sửa</button>
                <button class = "btn--delete" data-id = "${c.id}">Xóa</button>
            </td>
        `;
        songsList.appendChild(tr);
    });
}

function handleCancel(){
    title.value = "";
    singers.value = "";
    titleUpdate.textContent = "🎵 Thêm bài hát";
    btnCance.style.display = "none";
    renderAllSong(newSongs);
}

function handleSubmit() {
    if (editId === null) {
        const nameSong = title.value.trim();
        if (nameSong === "") {
            alert("Tên bài hát không được để trống !");
            title.focus();
            return;
        }
        const songSinger = singers.value.trim();
        if (songSinger === "") {
            alert("Tên ca sĩ không được để trống");
            singers.focus();
            return;
        }
        console.log(songSinger);

        const newSong = {
            id: newSongs.length ? newSongs[newSongs.length - 1].id + 1 : 1,
            nameSong,
            singer: singers.value,
        }
        newSongs.push(newSong);
    }else{
        const song = newSongs.find(c => c.id === editId);
        song.nameSong = title.value.trim();
        song.singer = singers.value.trim();
        titleUpdate.textContent = "🎵 Thêm bài hát";
        btnSubmit.textContent = "Thêm";
        btnCance.style.display = "none";
        editId = null;
    }
    title.value = "";
    singers.value = "";
    saveToLocaleStroage(newSongs);
    // getLocalStroage();
    renderAllSong(newSongs);
}
renderAllSong(newSongs);

songsList.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn--edit")) {
        editId = +e.target.dataset.id;
        titleUpdate.textContent = "🎵 Cập nhập bài hát";
        btnSubmit.textContent = "Cập nhập";
        let resultSong = newSongs.find(c => c.id === editId);
        title.value = resultSong.nameSong;
        singers.value = resultSong.singer;
        btnCance.style.display = "inline-block";
    }
    if(e.target.classList.contains("btn--delete")){
        let id = +e.target.dataset.id;
        let deleteSong = newSongs.find(c => c.id === id);
        let wannaToDelete = window.confirm(`Bạn có muốn xóa bài hát ${deleteSong.nameSong} của ca sĩ ${deleteSong.singer} ?`);
        if(wannaToDelete){
            newSongs = newSongs.filter(c => c.id !== id);
            saveToLocaleStroage(newSongs);
            renderAllSong(newSongs);
        }
    }
});
form.addEventListener("keydown" ,(e) => {
    if(e.key === "Enter"){
        handleSubmit();
    }
});
searchSong.addEventListener("input", (e) => {
    const key = e.target.value.trim().toLowerCase();
    let songList = newSongs.filter(c => c.nameSong.toLowerCase().includes(key));
    renderAllSong(songList);
});