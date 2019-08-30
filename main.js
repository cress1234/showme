let tv_array = ["Peep Show","Arrested Development","Mindhunter",
				"Glee","That Mitchell and Webb Look","Extras",
				"How I Met Your Mother",
				"It's Always Sunny In Philadelphia"]
let textbox = document.getElementById("text-box")
let initial_html = textbox.innerHTML
let l = tv_array.length

function getShow(){
	let s = Math.floor(Math.random()*l)
	textbox.innerHTML = initial_html + "<br>" + tv_array[s]
}


