function LanguageDropdown()
{
    clearInterval(move);
    var move = null;
    const elem = document.getElementById("Droppie");
    var pos = 0;
    elem.style.transition = ".2s ease";
    function Show()
    {
        if (pos >= 8)
        {
            clearInterval(move);
        }
        else
        { 
            elem.style.right = pos + "px";
            elem.style.top = pos*4 + "px";
            elem.style.opacity = pos;
            pos++;
        }
    }
    function Hide()
    {
        if (pos >= 8)
        {
            document.getElementById("Droppie").style.display = "none";
            clearInterval(move);
        }
        else
        { 
            elem.style.right = -pos + "px";
            elem.style.top = -pos*4 + "px";
            elem.style.opacity = -pos;
            pos++;
        }
    }
    if (document.getElementById("Droppie").style.display == "block")
    {
        move = setInterval(Hide, 10);
        elem.style.right = 0 + "px";
        elem.style.top = 0 + "px";
    }
    else
    {
        elem.style.right = 0 + "px";
        elem.style.top = 0 + "px";
        document.getElementById("Droppie").style.display = "block";
        move = setInterval(Show, 10);
    }
}