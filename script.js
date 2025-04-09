let IS_CLICKED = false
let COLOR = "rgb(83, 15, 255)";
let field = document.querySelector(".field")
let boxes = document.querySelectorAll('.color-box')

for (let i = 0; i < 450; i += 1) {
	let cell = document.createElement("div")
	cell.classList.add("cell")
	cell.setAttribute("id", `${i}`)
	field.appendChild(cell)
}

document.addEventListener("mousedown", function () {
	IS_CLICKED = true
})

document.addEventListener("mouseup", function () {
	IS_CLICKED = false
})

//Рисование при нажатии или зажатии мыши
let cells = document.querySelectorAll(".cell")
cells.forEach((cell) => {
	cell.addEventListener("mouseover", function () {
		if (IS_CLICKED) {
			anime({
				targets: cell,
				background: COLOR,
				duration: 200,
				easing: "linear",
			})
		}
	})
    cell.addEventListener("mousedown", function () {
        anime({
			targets: cell,
			background: COLOR,
			duration: 200,
			easing: "linear",
		})
    })
})
///Выбор цвета
for(let i = 0; i < 3; i++){
        boxes[i].addEventListener("mousedown", function(){
            COLOR = boxes[i].style.background
        })
}

///Закрасить всё выбранным цветом
document.querySelector('.fill').addEventListener("click", function () {
	cells.forEach((cell)=>{
        anime({
				targets: cell,
				background: COLOR,
				duration: 200,
				easing: "linear",
		})
    })
})

    
///Стереть всё
document.querySelector('.erase').addEventListener("click", function () {
	cells.forEach((cell)=>{
        anime({
				targets: cell,
				background: "rgb(62, 62, 62)",
				duration: 200,
				easing: "linear",
		})
    })
})

// Кнопка сохранить
document.querySelector('.save').addEventListener('click', function() {
    domtoimage.toPng(field)
    .then(function (dataUrl) {
        let img = new Image();
        img.src = dataUrl;
        window.saveAs(dataUrl, 'pixel.png')
    })
})

