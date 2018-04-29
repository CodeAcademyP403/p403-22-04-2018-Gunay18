var submit =document.querySelector("button");
var newMessage = document.querySelector(".form-control");

var chat =document.querySelector(".chat");

submit.addEventListener("click", function(){
    submit.style.border="none";
    var message = document.createElement('div');
    message.classList.add("messg");
    message.style.display="block";
    var text = document.createElement('div');
    var textContent = newMessage.value;
    text.innerText = textContent;
    text.style.display="inline-block";
   
    message.appendChild(text);
    message.classList.add('message1');
    chat.appendChild(message);
    newMessage.value="";
    if(textContent[0]==textContent[0].toUpperCase()){
        var image1 = document.createElement("IMG");
        image1.setAttribute('src',"images/auto_answer.png" )
        image1.classList.add("autoService");
        message.insertBefore(image1, message.firstChild);
        message.style.textAlign="left";
    } else{
        var image2 = document.createElement("IMG");
        image2.setAttribute('src',"images/customer.jpg" )
        image2.style.width="7em";
        image2.classList.add("autoService");
        image2.style.paddingLeft='30px';
        message.appendChild(image2);
        message.style.textAlign="right";
    }
})

