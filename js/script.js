"use strict";

$(document).ready(function () {

    $.ajax({
        url: "../json/dataEmployees.json",
        success: function getDataEmployees(data) {
            var table = "";
            for (var i = 0; i < data.length; i++) {
                table += "<tr><td>" + `<img src =${data[i].src} >` + "</td><td cllas='name'>" + data[i].name + "</td><td cllas='gender'>" + data[i].gender + "</td><td cllas='phone'>" + data[i].phone + "</td><td cllas='mail'>" + data[i].email + "</td><td cllas='country'>" + data[i].country + "</td><td>" + "<button>Edit</button>" + "</td></tr>"
            }
            $("#tableEmployees tbody").append(table);


            $('#tableEmployees').DataTable({
                "columnDefs": [{
                    "targets": -1,
                    "data": null,
                    "defaultContent": "<button>Edit</button>"

                }]

            });


        }



    });

    var country = ["Armenia", "Chine", "Germany"]
    $("#selectCity").select2();

    $("#tableEmployees tbody").each(function () {
        $("#tableEmployees tbody").on("click", "button", function () {
            var name = $(this).closest("tr").find('td');
            $("#form-employees #formGroupExampleInput").attr('value', name[1].innerText);
            var option = $("#form-employees #gender option[selected]").html(name[2].innerText);
            $("#form-employees #exampleInputEPhone").attr('value', name[3].innerText);
            $("#form-employees #exampleInputEmail1").attr('value', name[4].innerText);
            $(".selection .select2-selection__rendered").html(name[5].innerText)




            /*
            for(var i = 0; i <= option.length; i++){
                if(option[i].innerText == name[2].innerText){
                    option[i].setAttribute("selected","selected")
                }
            }*/
        })

    });



});

// valid forms 

//name valid
function validations() {
    var name = document.getElementById('formGroupExampleInput').value;
    var letters = /^[\s A-Za-z]+$/;
    if (name != "") {
        if (name.match(letters)) {
            checkemail();
        } else {
            alert('Please input alphabet characters only');
            return false;
        }
    } else {
        alert('Please Enter Name.');
    }
}


//valid Email

function checkemail() {
    var email = document.getElementById('exampleInputEmail1');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (email.value != "") {
        if (!filter.test(email.value)) {
            alert('Please provide a valid email address');
            return false;
        } else {
            allnumeric();
        }
    } else {
        alert('Please Enter Email.');
    }
}

//valid phone number

function allnumeric() {
    var phoneNumber = document.getElementById("exampleInputEPhone").value;
    var numbers = /^\+?([0-9]{3-})\)?[-. ]?([0-9]{2})[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/;
    if (phoneNumber.value != "") {
        if (phoneNumber.value.length == "13") {
            if (phoneNumber.value.match(numbers)) {
                country();
            } else {
                alert("Phone number should be numeric");
                return (false);
            }
        } else {
            alert('Phone Number should be like: +XXX-XX-XX-XX');
        }
    } else {
        alert('Please Enter Phone Number.');
    }
}

//valid country

function country() {
    var city = document.getElementById('inputCity').value;
    var letters = /^[\s A-Za-z]+$/;
    if (city != "") {
        if (city.match(letters)) {
            allnumeric();
        } else {
            alert('Please input alphabet characters only');
            return false;
        }
    } else {
        alert('Please Enter Country.');
    }
}



var click = document.querySelector("#submit");

click.addEventListener("click", validations)