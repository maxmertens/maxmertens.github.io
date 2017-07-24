


$(document).ready(function() {

    $(".box_1_back").on("click", function( e ) {

        // e.preventDefault();

        $("body, html").animate({
            scrollTop: 700
        }, 50);

        console.log("back");

    });
});


var count = 1;
//
// $(function() {
//     $.scrollify({
//         section : ".panel",
//         scrollbars: false,
//         setHeights: false,
//         before:function(i,panels) {
//
//             var ref = panels[i].attr('id');
//
//             console.log(ref);
//
//
//             $(".box_info").css("opacity", "1");
//
//
//
//             $(".pagination a.active").removeClass("active");
//
//             $("#" + ref).addClass("active");
//             //
//             // //Building
//             // if(ref==="1") {
//             // }
//             // //Living Space
//             // if(ref==="2") {
//             //     $(".schacht").css({
//             //         'top' : '60px',
//             //         'right': '150px',
//             //         'width': '300px'
//             //     });
//             //
//             //     $(".living_space").css({
//             //         'left' : '100px',
//             //         'width': '60%'
//             //     });
//             //
//             //     $(".interface").css("top", "200px");
//             //
//             //     $(".box_02").css({
//             //         'opacity' : '1'
//             //     });
//             //     $(".box_03").css({
//             //         'opacity' : '0'
//             //     });
//             //
//             //
//             // }
//             //
//             // //Interface
//             // if(ref==="3") {
//             //     $(".schacht").css({
//             //         'top' : '60px',
//             //         'right': '200px',
//             //         'width': '300'
//             //     });
//             //
//             //     $(".living_space").css({
//             //         'left' : '60px',
//             //         'width': '50%'
//             //     });
//             //
//             //
//             //     $(".box_02").css({
//             //         'opacity' : '0'
//             //     });
//             //     $(".box_03").css({
//             //         'opacity' : '1'
//             //     });
//             //
//             //     $(".kiste").css({
//             //         'top' : '380px'
//             //     });
//             //
//             //     //
//             //     // setTimeout( function(){
//             //     //     $('.interface').css('width','600px');
//             //     // },800);
//             // }
//             //
//             // //Supply
//             // if(ref==="4") {
//             //     $(".kiste").css({
//             //         'top' : 'calc(100vh + 230px)'
//             //     });
//             // }
//             //
//             // //Storage
//             // if(ref==="5") {
//             //
//             //     $(".interface").css({
//             //         'top' : '2300px'
//             //     });
//             //     $(".supply").css({
//             //         'left' : '180px',
//             //         'top' : '1000px'
//             //     });
//             //     $(".storage").css({
//             //         'top' : '180px'
//             //     });
//             //     $(".van").css({
//             //         'left' : '-700px'
//             //     });
//             //
//             //     $(".schacht2").css("top", "calc(0vh)");
//             //
//             // }
//             //
//             // //Delivery
//             // if(ref==="6") {
//             //     $(".schacht2").css("top", "calc(100vh)");
//             //
//             //     $(".interface").css({
//             //         'top' : '3100px'
//             //     });
//             //     $(".supply").css({
//             //         'left' : '500px',
//             //         'top' : '2100px'
//             //     });
//             //     $(".storage").css({
//             //         'top' : 'calc(100vh + 180px)'
//             //     });
//             //
//             //     setTimeout( function(){
//             //         $(".van").css({
//             //             'left' : '0px'
//             //         });
//             //     },800);
//             //
//             // }
//
//         },
//         after:function() {
//
//             console.log( "after" );
//         }
//     });
// });
//







// AJAX Smoothstate.js --------------------------------------------------------------------------
$(function() {
    $('#main').smoothState();
});

$(function(){
    'use strict';
    var options = {
            prefetch: true,
            cacheLength: 2,
            onStart: {
                duration: 350, // Duration of our animation
                render: function ($container) {
                    // Add your CSS animation reversing class
                    $container.addClass('is-exiting');

                    // Restart your animation
                    smoothState.restartCSSAnimations();
                }
            },
            onReady: {
                duration: 0,
                render: function ($container, $newContent) {
                    // Remove your CSS animation reversing class
                    $container.removeClass('is-exiting');

                    // Inject the new content
                    $container.html($newContent);

                }
            }
        },
        smoothState = $('#main').smoothState(options).data('smoothState');
});