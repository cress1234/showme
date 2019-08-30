let tv_array = ["Peep Show","Arrested Development","Mindhunter","Glee",
                "That Mitchell and Webb Look",
                "Extras","How I Met Your Mother","It's Always Sunny In Philadelphia"]
let textbox = document.getElementById("output")
let initial_html = textbox.innerHTML
let l = tv_array.length

let input_is_output = false

function getShow()
{
    input_is_output = true
	let s = Math.floor(Math.random()*l)
	textbox.value=/* initial_html + "<br>" +*/ tv_array[s]
}

function clearInput()
{
    if (input_is_output)
    {
        textbox.value = ""
        input_is_output = false
    }
}


