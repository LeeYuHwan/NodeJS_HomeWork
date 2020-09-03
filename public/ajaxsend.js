document.querySelector('.ajaxsned').addEventListener('click', function(){
    var inputData = document.forms[0].elements[0].value;

    sendAjax('http://localhost:3000/ajax_send_email', inputData);
});

function sendAjax(url, data){
    var data = {'search' : data};
    data = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-type', "application/json");
    xhr.send(data);
    xhr.addEventListener('load', function(){
        var result = JSON.parse(xhr.responseText);
        document.querySelector(".result").innerHTML = result.search;
    })
}