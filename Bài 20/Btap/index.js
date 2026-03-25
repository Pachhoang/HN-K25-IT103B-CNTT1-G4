let songs = JSON.parse(localStorage.getItem("songs")) || [];
let editId = null;

window.onload = function () {
  renderTable(songs);
};

function saveLocal() {
  localStorage.setItem("songs", JSON.stringify(songs));
}

function renderTable(list) {
  let table = document.getElementById("songTable");
  table.innerHTML = "";

  list.forEach((song) => {
    table.innerHTML += `
            <tr>
                <td>${song.id}</td>
                <td>${song.title}</td>
                <td>${song.artist}</td>
                <td>
                    <button onclick="editSong(${song.id})">Sửa</button>
                    <button onclick="deleteSong(${song.id})">Xóa</button>
                </td>
            </tr>
        `;
  });
}

function handleSubmit() {
  let title = document.getElementById("title").value.trim();
  let artist = document.getElementById("artist").value.trim();
  if (title === "" || artist === "") {
    alert("Không được để trống!");
    return;
  }

  if (editId === null) {
    let newId = songs.length > 0 ? songs[songs.length - 1].id + 1 : 1;

    let song = {
      id: newId,
      title: title,
      artist: artist,
    };

    songs.push(song);
  } else {
    let index = songs.findIndex((s) => s.id === editId);
    songs[index].title = title;
    songs[index].artist = artist;
    editId = null;

    document.getElementById("formTitle").innerText = "🎵 Thêm bài hát";
    document.getElementById("submitBtn").innerText = "Thêm";
  }

  saveLocal();
  renderTable(songs);
  resetForm();
}

function resetForm() {
  document.getElementById("title").value = "";
  document.getElementById("artist").value = "";
}

function editSong(id) {
  let song = songs.find((s) => s.id === id);

  document.getElementById("title").value = song.title;
  document.getElementById("artist").value = song.artist;

  document.getElementById("formTitle").innerText = "✏️ Sửa bài hát";
  document.getElementById("submitBtn").innerText = "Cập nhật";

  editId = id;
}

function deleteSong(id) {
  if (confirm("Bạn có chắc muốn xóa?")) {
    songs = songs.filter((s) => s.id !== id);
    saveLocal();
    renderTable(songs);
  }
}

function searchSong() {
  let keyword = document.getElementById("search").value.toLowerCase();

  let filtered = songs.filter((song) =>
    song.title.toLowerCase().includes(keyword),
  );

  renderTable(filtered);
}