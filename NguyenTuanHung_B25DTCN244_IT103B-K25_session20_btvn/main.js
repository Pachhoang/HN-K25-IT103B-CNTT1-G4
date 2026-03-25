let songs = [];
let editingId = null;
let nextId = 1;

const saveToStorage = () => {
  localStorage.setItem("songs", JSON.stringify(songs));
  localStorage.setItem("nextId", String(nextId));
};

const loadFromStorage = () => {
  const stored = localStorage.getItem("songs");
  const storedId = localStorage.getItem("nextId");
  songs = stored ? JSON.parse(stored) : [];
  nextId = storedId ? parseInt(storedId) : 1;
};

const renderTable = (list = songs) => {
  const tbody = document.getElementById("songTable");
  if (list.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="4" style="color:#aaa; font-style: italic;">Không có bài hát nào.</td>
      </tr>`;
    return;
  }
  tbody.innerHTML = list
    .map(
      (song) => `
    <tr>
      <td>${song.id}</td>
      <td>${song.title}</td>
      <td>${song.artist}</td>
      <td>
        <button onclick="editSong(${song.id})">Sửa</button>
        <button onclick="deleteSong(${song.id})">Xóa</button>
      </td>
    </tr>`,
    )
    .join("");
};

const resetForm = () => {
  document.getElementById("title").value = "";
  document.getElementById("artist").value = "";
  document.getElementById("search").value = "";
  document.getElementById("formTitle").textContent = "🎵 Thêm bài hát";
  document.getElementById("submitBtn").textContent = "Thêm";
  editingId = null;
};

const validate = (title, artist) => {
  if (!title.trim()) {
    alert("Vui lòng nhập tên bài hát!");
    return false;
  }
  if (!artist.trim()) {
    alert("Vui lòng nhập tên ca sĩ!");
    return false;
  }
  return true;
};

const handleSubmit = () => {
  const title = document.getElementById("title").value;
  const artist = document.getElementById("artist").value;

  if (!validate(title, artist)) {
    return;
  }

  if (editingId !== null) {
    const index = songs.findIndex((s) => s.id === editingId);
    if (index !== -1) {
      songs[index].title = title.trim();
      songs[index].artist = artist.trim();
    }
  } else {
    songs.push({ id: nextId++, title: title.trim(), artist: artist.trim() });
  }

  saveToStorage();
  resetForm();
  renderTable();
};

const editSong = (id) => {
  const song = songs.find((s) => s.id === id);
  if (!song) {
    return;
  }
  document.getElementById("title").value = song.title;
  document.getElementById("artist").value = song.artist;
  document.getElementById("formTitle").textContent = "✏️ Sửa bài hát";
  document.getElementById("submitBtn").textContent = "Cập nhật";
  editingId = id;
};

const deleteSong = (id) => {
  const song = songs.find((s) => s.id === id);
  if (!song) return;

  if (!confirm(`Bạn có chắc muốn xóa bài hát "${song.title}" không?`)) return;

  songs = songs.filter((s) => s.id !== id);
  saveToStorage();

  if (editingId === id) {
    resetForm();
  }

  const keyword = document.getElementById("search").value;
  keyword.trim() ? searchSong() : renderTable();
};

const searchSong = () => {
  const keyword = document.getElementById("search").value.toLowerCase();
  renderTable(songs.filter((s) => s.title.toLowerCase().includes(keyword)));
};

loadFromStorage();
renderTable();
