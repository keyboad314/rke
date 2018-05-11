<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="RkePractical.index" %>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lydia</title>
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/Navigation-Clean1.css">
    <link rel="stylesheet" href="assets/css/styles.css">
</head>

<body>



    <form runat="server" id="form1">

    

    <asp:LinkButton ID="LinkButton1" runat="server"></asp:LinkButton>
    <asp:ScriptManager ID="ScriptManager1" runat="server" EnablePageMethods="true" EnablePartialRendering="true" ></asp:ScriptManager>
    <div id="main" class="container">
        <div class="jumbotron">
            <h1>RKE Practical 4</h1>
            <p>Status: The Light is <span id="status" class="status_off">OFF</span></p>
            <hr>
            <div>
                <p>Current Light Temp <span id="currentTemp"></span> </p>
                <div class="col-md-6 datas">
                    <p class="">Light Intensities</p>
                     
                    <div style="height:300px;overflow-y:scroll">
                            <p  class="temps"></p>
                    </div>
                </div>
                <div class="col-md-6">
                    <button onclick="puton()" class="btn btn-success btn-lg btn_data" type="button" id="btnOn">Turn ON</button>
                    <button onclick="putoff()" class="btn btn-danger btn-lg btn_data" type="button" id="btnOff">Turn Off</button>
                </div>
            </div>
        </div>
    </div>

   </form>
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/js/index.js"></script>
</body>

</html>
