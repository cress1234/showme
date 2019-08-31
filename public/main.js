let tv_array = ["Peep Show","Arrested Development","Mindhunter","Glee",
                "That Mitchell and Webb Look",
                "Extras","How I Met Your Mother","It's Always Sunny In Philadelphia"]
let textbox = document.getElementById("output")
let addbutton = document.getElementById("addshow")
let form = document.getElementById("addform")

let input_is_output = false

function getShow()
{
    console.log("method?" + form.method)
    input_is_output = true
    addbutton.disabled = true
    let n_shows = tv_array.length
	let show_index = Math.floor(Math.random()*n_shows)
	textbox.value = tv_array[show_index]
}

function clearInput()
{
    if (input_is_output)
    {
        textbox.value = ""
        input_is_output = false
        addbutton.disabled = false
    }
}
