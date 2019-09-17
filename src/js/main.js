import $ from 'jquery';

$(document).ready(() => {
    $('#title').text('Hello, jQuery');

    $('li a').text('tag li');

    const square = $('#square');
    const btnSquare = $('#btn-square');
    const btnSearch = $('li div button');

    btnSquare.click(() => {
        square.toggleClass('square-soft');
    })

    square.mouseenter(function(){
        $(this).css({
            'background-color': '#000',
            'border-radius': '40px'
        })

        btnSquare.css({
            'width': '200px'
        })
    })

    square.mouseleave(function(){
        $(this).css({
            'background-color': 'blueviolet',
            'border-radius': '0px'
        })

        btnSquare.css({
            'width': 'initial'
        })
    })

    btnSearch.click(function(){
        if($(this).text() == "Search me"){
            $(this).text("Found button");
            $(this).toggleClass('btn-color');
            // $(this).css({
            //     'font-weight': 'bold',
            // })
        }else{
            $(this).text("Button group");
        }
    })

})