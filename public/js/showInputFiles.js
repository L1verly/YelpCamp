function showInputFiles(input) {
  const previewsContainer = document.getElementById("imagePreviews");

  previewsContainer.innerHTML = "";
  const files = input.files;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();
    reader.onload = function (e) {
      const preview = document.createElement("div");
      preview.classList.add("col-md-4", "mb-3");
      preview.innerHTML = ` 
			<img src="${e.target.result}" alt="Preview" class="img-fluid rounded"> 
			<div class="text-center mt-2"> 
			<span class="badge bg-secondary text-truncate w-100" title="${file.name}">${file.name}</span> 
			</div> 
		`;
      previewsContainer.appendChild(preview);
    };
    reader.readAsDataURL(file);
  }
}
