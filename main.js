var names = [];
function submit(){
    var display_student_array = [];
        var guest_names = document.getElementById("Name_of_guest").value;
        console.log (guest_names);
        names.push(guest_names);

    console.log (guest_names);
    var length = names.length;
    console.log (length);
    document.getElementById("display_names").innerHTML = names.toString();

    document.getElementById("display_names_with_commas").innerHTML=display_student_array;
    var remove_commas = display_student_array.join(" ");
    document.getElementById("display_names_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sort(){
    names.sort();
    console.log(names);
    var display_sorting = 
    document.getElementById("p2").innerHTML = names.toString();
    var length = names.length;
    var remove_commas = display_sorting.join(" ");
    document.getElementById("display_names_without_commas").innerHTML=remove_commas;
}
