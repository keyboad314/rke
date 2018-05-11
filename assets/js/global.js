/// <reference path="productDetails.js" />


$(document).ready(function () {

 
    //home-listing.html

   // if (window.location.pathname.toLowerCase() == "/website/login.html")
   
});





function makeAjax(fName, yes) {
    $.ajax({
        type: "GET",
        url: "../Service.svc/" +fName,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        processdata: true,
        success: function (msg) {
            yes(msg);
        },
        error: function (result) {
            showError();
        }
    });
}

function makeAjax(fName, yes, no) {
    $.ajax({
        type: "GET",
        url: "../Service.svc/" + fName,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        processdata: true,
        success: function (msg) {
            if (yes == undefined)
                showSuccess(result);
            else
                yes(msg);
        },
        error: function (result) {
            if (no == undefined)
                showError(result);
            else
                no(result);
        }
    });

}

function makeModal()
{
    $("body").append("<div role='dialog' tabindex='-1' class='modal'><div class='modal-dialog' role='document'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>×</span></button><h4 id='modalTitle' class='modal-title'>Modal Title</h4></div><div class='modal-body'><div id='modalText'></div></div><div class='modal-footer'><button id='btnModalClose' onclick='removeModal();' class='btn btn-default' type='button' data-dismiss='modal'>Close</button></div></div></div></div>");
}

function makeModalFunction(yes , no) {
    $("body").append("<div role='dialog' tabindex='-1' class='modal'><div class='modal-dialog' role='document'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>×</span></button><h4 id='modalTitle' class='modal-title'>Modal Title</h4></div><div class='modal-body'><div id='modalText'></div></div><div class='modal-footer'><button id='btn1' onclick='"+yes+";' class='btn btn-default' type='button' data-dismiss='modal'><p id='leftBtn'></P>Continue/Yes</button><button id='rightBtn' onclick='"+no+";' class='btn btn-default' type='button' data-dismiss='modal'>Cancel/No</button></div></div></div></div>");
}

function setModalTitle(msg)
{
    $("#modalTitle").html(msg);
}

function setButtons(l , r)
{
    $("#rightBtn").html(r);
    $("#leftBtn").html(l);
}

function setModalText(msg) {
    $("#modalText").html(msg);
}

function showError(result) {
    showModal("Failed", result.status + ' ' + result.statusText);
}

function showSuccess(result) {
    showModal("Success", result.status + ' ' + result.statusText);
}


//create the modal
function showModal(title, msg) {
    makeModal();
    setModalTitle(title);
    setModalText(msg);

    var m = $(".modal")[0];
    $(m).css("display", "block");
}


function showModalFunction(title, msg, yes , no , l , r) {
    makeModalFunction(yes, no);
    setModalTitle(title);
    setModalText(msg);
    setButtons(l, r);

    var m = $(".modal")[0];
    $(m).css("display", "block");
}



function removeModal() {
    var x = document.getElementsByClassName("modal")[0];
    x.parentNode.removeChild(x);
}


function getQuery(txt , type) //txt is url and type is variable
{
    console.log(txt);
    var R = "";
    var x = txt.toString().substring(txt.toString().indexOf("?") + 1, txt.length);

    console.log(x);

    var k;
    if(x.includes("&"))
    {
        k = x.split("&");

        for(l in k)
        {
            var b = l.split("=");

            if (b.length != 2)
            {
                R="";
            }
            else
            {
                if (b[0] == type)
                    R = b[1];
            }             
        }
    }
    else
    {
        var c = x.split("=");
        if (c.length != 2) {
                R = "";
        }
        else {
            if (c[0] == type)
                R = c[1];
        }

    }

    return R;
}