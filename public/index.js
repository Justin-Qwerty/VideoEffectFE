const videovar = document.getElementById("video");
const closeButton = document.getElementById("close-button");
const generatebutton = document.getElementById("generatebutton")
const generatebuttonTrigger = document.getElementById("generateImagebutton")
const restartbutton = document.getElementById("restartbutton")
const textarea = document.getElementById("subject")
const textareaImage = document.getElementById("subjectImage")
const playbutton = document.getElementById("playButton")
const downloadbutton = document.getElementById("downloadButton")
const readyText = document.getElementById("readyText")
const readyImageText = document.getElementById("readyImageText")
const generateImageButton = document.getElementById("generateImagebutton")
const videoTrigger = document.getElementById("videoTrigger")
const imageTrigger = document.getElementById("imageTrigger")
const imageForm = document.getElementById("subjectImageForm")
const videoForm = document.getElementById("subjectForm")
const imagePreview = document.getElementById("imagePreview")
const viewButton = document.getElementById("viewButton")
const downloadImageButton = document.getElementById("downloadImageButton")
const imagePreviewContainer = document.getElementById("imagePreviewContainer")
const streamImageContainer = document.getElementById("streamImageContainer")
const streamVideoContainer = document.getElementById("streamVideoContainer")
const uploadButton = document.getElementById("uploadButton")
const pleaseWait = document.getElementById("pleaseWait")
let title = "";


// THIS IS FOR THE GENERATE VIDEO BUTTON
// document.getElementById("subjectForm").addEventListener("submit", async (event) => {
//     event.preventDefault();
//     formdata = new FormData(event.target);
//     console.log(formdata.entries());
//     for (let [key, value] of formdata.entries()) {
        
//         console.log(`${key}: ${value}`);
//         title = value;
//     }
//     textarea.disabled = true
//     generatebutton.disabled = true
//     generatebutton.textContent = "Generating Video please wait..."
//     generatebutton.classList.add("opacity-50", "cursor-not-allowed")
//     videoTrigger.disabled = true
//     videoTrigger.classList.add("cursor-not-allowed")
//     imageTrigger.disabled = true
//     imageTrigger.classList.add("cursor-not-allowed")

//     try{
//         const response = await fetch("http://127.0.0.1:5000/test", {
//             method: "POST",
//             body: formdata
//         })

//         if(response.ok){
//             console.log("data sent");
//             generatebutton.style.display = "none"
//             restartbutton.style.display = "block"
//             playbutton.disabled = false;
//             downloadbutton.disabled = false;
//             playbutton.classList.remove("cursor-not-allowed")
//             downloadbutton.classList.remove("cursor-not-allowed")
//             readyText.classList.remove("hidden")
//         }else{
//             throw new Error("failed to send")
            
//         }

//     } catch (error) {
//         console.error("error", error);
//         alert("error")
//         textarea.disabled = false;
//         generatebutton.disabled = false;
//         generatebutton.textContent = "Generate Video";
//         generatebutton.classList.remove("opacity-50", "cursor-not-allowed")
//     }


// })

//THIS IS FOR GENERATING IMAGE
// document.getElementById("subjectImageForm").addEventListener("submit", async (event) => {
//     event.preventDefault();
//     formdata = new FormData(event.target);
//     console.log(formdata.entries());
//     for (let [key, value] of formdata.entries()) {
        
//         console.log(`${key}: ${value}`);
//         title = value;
//     }
//     textareaImage.disabled = true
//     generatebuttonTrigger.disabled = true
//     generatebuttonTrigger.textContent = "Generating Image please wait..."
//     generatebuttonTrigger.classList.add("opacity-50", "cursor-not-allowed")
//     videoTrigger.disabled = true
//     videoTrigger.classList.add("cursor-not-allowed")
//     imageTrigger.disabled = true
//     imageTrigger.classList.add("cursor-not-allowed")

//     try{
//         const response = await fetch("http://127.0.0.1:5000/test", {
//             // 87.106.135.198:5151
//             method: "POST",
//             body: formdata
//         })

//         if(response.ok){
//             console.log(response)
//             console.log("data sent");
//             generatebuttonTrigger.style.display = "none"
//             restartbutton.style.display = "block"
//             viewButton.disabled = false
//             viewButton.classList.remove("cursor-not-allowed")
//             downloadImageButton.disabled = false
//             downloadImageButton.classList.remove("cursor-not-allowed")
//             readyImageText.classList.remove("hidden")

           
           
//         }else{
//             throw new Error("failed to send")
            
//         }

//     } catch (error) {
//         console.error("error", error);
//         alert("error")
//     }


// })

// THIS IS FOR STREAMING VIDEO
function loadVideo(){

    videovar.src= "http://127.0.0.1:5000/video";
    videovar.load();
    videovar.play();
    videovar.style.display= "block";
    closeButton.style.display = "block";
}


// THIS IS FOR DOWNLOADING VIDEO
async function downloadVideo(){
    const response = await fetch("http://127.0.0.1:5000/downloadVideo", {
        method: "POST"
    })

    if (!response.ok){
        throw new Error (`Error : ${response.status} ${response.statusText}`);
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href=url
    a.download = `${title}.mp4`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}
 // THIS IS FOR THE X BUTTON
function exitVideo(){
    videovar.style.display= "none";
    closeButton.style.display= "none";
    videovar.pause();
    videovar.src="";

}

// THIS IS FOR VIEWING IMAGE
// function viewImage(){
//     fetch(`http://127.0.0.1:5000/streamImage`)
//     .then(response => response.blob())
//     .then(imageBlob => {
//         const imgUrl = URL.createObjectURL(imageBlob);
//         imagePreview.src = imgUrl
//         imagePreviewContainer.classList.remove("hidden")
//         imagePreviewContainer.classList.add("flex")
//     })
//     .catch(error => console.error("Error fetching image:", error));
// }

//THIS IS FOR DOWNLOADING IMAGE
// async function downloadImage(){
//     const response = await fetch("http://127.0.0.1:5000/test", {
//         method: "POST"
//     })

//     if (!response.ok){
//         throw new Error (`Error : ${response.status} ${response.statusText}`);
//     }

//     const blob = await response.blob();
//     const url = window.URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href=url
//     a.download = `${title}.png`;
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     window.URL.revokeObjectURL(url);
// }

//THIS IS FOR UPLOADING VID
function startCountdown(durationInSeconds) {
    const now = Date.now(); // Get current timestamp
    const endTime = now + durationInSeconds * 1000; // Set end time

    function updateCountdown() {
        const currentTime = Date.now();
        const remainingTime = Math.max(0, Math.floor((endTime - currentTime) / 1000));

        let hours = Math.floor(remainingTime / 3600);
        let minutes = Math.floor((remainingTime % 3600) / 60);
        let seconds = remainingTime % 60;

        document.getElementById('countdown').textContent = 
            String(hours).padStart(2, '0') + ":" +
            String(minutes).padStart(2, '0') + ":" +
            String(seconds).padStart(2, '0');

        if (remainingTime > 0) {
            requestAnimationFrame(updateCountdown);
        } else {
            document.getElementById('countdown').textContent = "Time's up!";
        }
    }

    updateCountdown(); // Start countdown
}

function uploadVideo() {
    
    let fileInput = document.getElementById("videoUpload");
    let videoInput = document.getElementById("videoUpload").files[0];
    let logoInput = document.getElementById("logoUpload").files[0];
    let files = fileInput.files; 
 
    if (!videoInput) {
        alert("Please upload the necessary files.");
        return;
    }

    document.getElementById("videoUpload").addEventListener("change", function () {
        const maxFiles = 10;  // Set max file limit
        const files = this.files;
        const errorMsg = document.getElementById("errorMsg");

        if (files.length > maxFiles) {
            errorMsg.textContent = `You can only upload up to ${maxFiles} videos.`;
            this.value = "";  // Reset file input
        } else {
            errorMsg.textContent = "";  // Clear error message
        }
    });

    pleaseWait.classList.remove("hidden")
    uploadButton.classList.add("hidden")
    let formData = new FormData();
    for (let i = 0; i < files.length; i++) {
        formData.append("videos", files[i]);  // Append multiple files
    }
    formData.append("image", logoInput);
    if (files.length > 20){
        startCountdown(60 + 20 * 60)
    }else{
        startCountdown(60 + files.length * 60)
    }
    fetch("http://87.106.135.198:5151/test", {
        // http://87.106.135.198:5151
        method: "POST",
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }
        return response.json();
        
    })
    .then(data => {
        
        pleaseWait.innerText ="Please Check the right Section"
        pleaseWait.classList.remove("text-red-600")
        pleaseWait.classList.add("text-green-600")
        console.log(data);
        pleaseWait.innerText = data.message;

        let linksContainer = document.getElementById("downloadLinks");
        linksContainer.innerHTML = "";  // Clear previous links

        data.download_links.forEach(link => {
            let li = document.createElement("li");
            li.innerHTML = `<a href="${link}" download>Download Processed Video</a>`;
            linksContainer.appendChild(li);
        });
        restartbutton.classList.remove("hidden")
    })
    .catch(error => {
        pleaseWait.innerText = "Upload Failed!";
        console.error("Error:", error);
    });
}

// THIS IS FOR CHOOSING IMAGE AND VIDEO

function generateVideo(){
    videoForm.classList.remove("hidden")
    imageForm.classList.add("hidden")
    videoTrigger.disabled = true
    videoTrigger.classList.add("cursor-not-allowed")
    imageTrigger.disabled = false
    imageTrigger.classList.remove("cursor-not-allowed")
    imageTrigger.classList.add("bg-slate-900")
    imageTrigger.classList.add("hover:bg-slate-800")
    imageTrigger.classList.remove("bg-slate-600")
    videoTrigger.classList.remove("bg-slate-900")
    videoTrigger.classList.remove("hover:bg-slate-800")
    videoTrigger.classList.add("bg-slate-600")
    videoTrigger.classList.add("border-red-600")
    imageTrigger.classList.remove("border-red-600")
    streamImageContainer.classList.add("hidden")
    streamVideoContainer.classList.remove("hidden")
    
    
}

function generateImage(){
    imageForm.classList.remove("hidden")
    videoForm.classList.add("hidden")
    videoTrigger.disabled = false
    videoTrigger.classList.remove("cursor-not-allowed")
    imageTrigger.disabled = true
    imageTrigger.classList.add("cursor-not-allowed")
    imageTrigger.classList.remove("bg-slate-900")
    imageTrigger.classList.remove("hover:bg-slate-800")
    imageTrigger.classList.add("bg-slate-600")
    videoTrigger.classList.add("bg-slate-900")
    videoTrigger.classList.add("hover:bg-slate-800")
    videoTrigger.classList.remove("bg-slate-600")
    imageTrigger.classList.add("border-red-600")
    videoTrigger.classList.remove("border-red-600")
    streamImageContainer.classList.remove("hidden")
    streamVideoContainer.classList.add("hidden")

    
}
