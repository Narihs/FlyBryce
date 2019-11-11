(function () {
    "use strict";
    $(function () {

        $("#btnSubmit").click(function () {

            if ($("#fullName").val() == "") {
                return;
            }
            else if (validateEmail()) {
                return;
            }
            else if (validateDate()) {
                return false;
            }
            else if ($("#inputMessage").val() == "") {
                return;
            }
            else {
                $("#dialogMessage").modal('show');
                return false;
            }
        });

        $("#modalBtn").click(function () {
            $("#contactForm")[0].reset();
        });

    });

    function validateDate() {

        if ($("#inputDate").val() == "") {
            return true;
        }
        else {
            var toCompare = new Date($("#inputDate").val());
            var today = new Date();
            if (toCompare.getTime() < today.getTime()) {
                alert("Please insert a future date");
                return true;
            }
            return false;
        }
    }

    function validateEmail() {
        var regex = /.+@.+\.\w{2,3}(\..{,2})?/

        if ($("#inputEmail").val() == "") {
            return true;
        }
        else {
            if (regex.test($("#inputEmail").val())) {
                return false;
            }
            else {
                return true;
            }
        }
    }
})();

