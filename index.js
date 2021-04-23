
var groupimg=['images.jpg','images0.jpg','images1.jpg','images2.jpg','images3.jpg','images5.jpg','images6.jpg','images7.jpg']
i=0
var d=document.getElementById('image')   
function back() {
if(i>0)
{
   i--
   d.src=groupimg[i]
}}
  function next() {
       if(i>=0 && i<groupimg.length-1)
       {
          i++
          d.src = groupimg[i];
       }
       
    }
var b=document.getElementById('backbtn')
b.addEventListener('click',back)
var n=document.getElementById('nextbtn')
n.addEventListener('click',next)