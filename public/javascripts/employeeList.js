var ajaxForm = new ajaxProxy("/api/employees")                              

document.addEventListener("DOMContentLoaded", function(event) {
    ajaxForm.PopulateTable (jsonToTable, handleError);  
});      

function handleError (data) {
    $("#ajax-error-box").modal('show');
    $("#ajax-error").text("Errorcode:" + data.status + ", Message:" + data.statusText);  
    console.log(data);                           
}

function jsonToTable (data) {
    
    // Clear table
    $('#employeeTable tr').slice(1).remove();

    //if no tbody just select your table 
    var tbody = $('#employeeTable').children('tbody');                            
    var table = tbody.length ? tbody : $('#employeeTable');

    var tableString = "";

    for(var i in data) {
        var employee = data[i];
        
        tableString += "<tr><td>" + employee.ReviewDate 
                    + "</td><td>" + employee.Genre  
                    + "</td><td>" + employee.Title  + " " + employee.FirstName + " " +  employee.LastName  
                    + "</td><td>" + employee.FilmName    
                    + "</td><td>" + employee.Rating
                    + "</td><td>" + "<a href=\"articles/" + employee.FilmId + ".html\">&#128279</a>"                              
                    + "</td></tr>";                            
    }

    table.append(tableString);
}    


// Form event handlers
$('#refresh').click(function(){
    $("#ajax-error-box").hide();
    ajaxForm.PopulateTable (jsonToTable, handleError);                          
});  