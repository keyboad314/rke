

$(document).ready(function(){ 
  //  setInterval(getData , 1000);
   getData();
});

function getData() {
    $.ajax({
        type: "GET",
        url: "getdata.aspx",
        contentType: "application/json",
        dataType: "text",
        processdata: true,
        success: function (msg) {
            console.log("success " + msg);
        },
        error: function (result) {
            console.log("error" + result.statusText + result.status);
        }
    });
}

function puton() {
    $.ajax({
        type: "GET",
        url: "setdata.aspx?status=1&data=" + $("#currentTemp").html().trim(),
        contentType: "application/json",
        dataType: "text",
        processdata: true,
        success: function (msg) {
            console.log("success");
        },
        error: function (result) {
            console.log("error" + result.statusText + result.status);
        }
    });
}

function putoff() {
    $.ajax({
        type: "GET",
        url: "setdata.aspx?status=0&data=" + $("#currentTemp").html().trim(),
        contentType: "application/json",
        dataType: "text",
        processdata: true,
        success: function (msg) {
            console.log("success");
        },
        error: function (result) {
            console.log("error" + result.statusText + result.status);
        }
    });
}


function update(m) {
   

    console.log("data" + m);
    var l = m.split(" ");
    $("#currentTemp").html(l[0]);
    
    x = $($(".temps")[0]).html();
    $($(".temps")[0]).html('<p class="temps">Light Temp: <span >' + l[0] + '</span> <span><i class="glyphicon glyphicon-star"></i> </span></p>' + x);

    var status = l[1] * 1;

    if(status == 0)
         $("#status").html("OFF");
     else if(status == 1)
         $("#status").html("ON");
}

function getUrl(){
    return window.location.href;
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

