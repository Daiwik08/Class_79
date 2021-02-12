nameofstud=[];
function submit()
{
    var name_1= document.getElementById("name_1").value;
    var name_2= document.getElementById("name_2").value;
    var name_3= document.getElementById("name_3").value;
    var name_4= document.getElementById("name_4").value;

    nameofstud.push(name_1);
    nameofstud.push(name_2);
    nameofstud.push(name_3);
    nameofstud.push(name_4);

    console.log(nameofstud);
    document.getElementById("display").innerHTML = nameofstud;
    document.getElementById("submit").style.display ="none"
    document.getElementById("sort").style.display ="inline-block"

}
function sorting()
{
    nameofstud.sort();
    console.log(nameofstud);
    document.getElementById("display").innerHTML = nameofstud;
}