

function incrementclout()
{
    let clout = parseInt(document.getElementById('btn').clout, 10);
    clout = isNaN(clout) ? 0 : clout;
    clout += parseInt(slider.value);
    console.log(clout);
    document.getElementById('btn').clout = clout;
    document.getElementById("variable").innerHTML = clout;
}

function sliderupdate()
{
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;
    
    slider.oninput = function() {
        output.innerHTML = this.value;
    }
}