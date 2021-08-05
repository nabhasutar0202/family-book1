var i = 0;
function update()
{
    i++;
    var number_of_family_member_in_array =4
    if(i > number_of_family_member_in_array)
    {
        i = 0
    }
    var updatedimage = images[i];
    var updatedimage = name[i];
    document.getElementById("family_member_image").src = updatedimage;
    document.getElementById("family_member_image").innerHTML = updatedimage;
}