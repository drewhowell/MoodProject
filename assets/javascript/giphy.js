//get the jquery start
$(document).ready(function(){
    //click on happy btn
    $('a.btn-generateimg').click(function(){

        //api.giphy.com/v1/stickers/search?q=?Happy&api_key=dc6zaTOxFJmzC

     let btnContent =  $(this).text()

     generatImages(btnContent)

    })

    function generatImages(name){
        $('#giphyImages').text('')
        let giphyUrl = "https://api.giphy.com/v1/stickers/search?q="
        let api_key ="api_key=dc6zaTOxFJmzC"
        let limit = "limit=20"
        let searchUrl = giphyUrl + name + "&"+limit+"&"+ api_key
        $.get(searchUrl,function(data){
            data.data.forEach(element => {
                let myimg = $('<img id="imgGiphy" style="width: 100px;">')
                myimg.attr('src', element.images.fixed_height.url);
                myimg.appendTo('#giphyImages');          
                
            });
              /*  $('#giphyImages').text(data.data)*/
               console.log(data.data)
        }) 
    }

    
})
   