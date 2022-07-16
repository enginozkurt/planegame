var Plane=function()
{
  //ucak oluşturarak basılan tuşa göre konumu değiştiriyor
  var o={
    x:200,
    y:600,
    w:100,
    h:100,
    image:'image/pln.png',
    moveleft:function()
    {
      if(this.x>=0)
      this.x-=10
    },
    //eğer hareket kanvas içerisindeyse konum değiştiriyor
    moveright:function()
    {
      if(this.x+this.w<401)
      // {console.log(this.x)
      this.x+=10
    },
    moveup:function()
    {
      if(this.y>=0)
      this.y-=10
    },
    movedown:function()
    {
      if(this.y+this.h<801)
      this.y+=10
    }
  }
  return o;

}
