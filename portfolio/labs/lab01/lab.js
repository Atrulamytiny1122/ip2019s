/*

*/


function start(e) {
    var name = [
        {
            char:'曾',
            big5:'B4BF',
            cns:'1-5F64',
            unicode:'66FE'
        },
        {
            char:'兆',
            big5:'A5FC',
            cns:'1-473E',
            unicode:'5146'
        },
        {
            char:'禾',
            big5:'A5DD',
            cns:'1-467D',
            unicode:'79BE'
        }
    ];

    var ele = document.getElementById('div1');

    for(var i=0;i<3;i++)
    {
        ele.innerHTML += name[i].char;
        ele.innerHTML += ' big5= ';
        ele.innerHTML += name[i].big5;
        ele.innerHTML += ' cns= ';
        ele.innerHTML += name[i].cns;
        ele.innerHTML += ' unicode= ';
        ele.innerHTML += name[i].unicode;
        ele.innerHTML += '<br>';


    }
}

/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );
