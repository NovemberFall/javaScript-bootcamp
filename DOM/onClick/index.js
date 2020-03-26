let demo = document.getElementById('demo');
demo.onclick = changeContent;
function changeContent(){
    demo.innerHTML = "Help me";
    demo.style = "Color:red";
}
