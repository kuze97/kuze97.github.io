'use strict'
{
    /* const h1Node = document.querySelector('h1');
    const h1Styles = getComputedStyle(h1Node); //h1にかけられているcssの情報を取得

    const marginValue = h1Styles.getPropertyValue('margin-top');//margin-topの値を取り出す（pxが含まれるため、string）
    const n = parseInt(marginValue, 10);//string→numberに変換

    console.log(n); */


    function getmarginTop (elem, property) {
        const h1Node = document.querySelector(elem);
        const h1Styles = getComputedStyle(h1Node); //h1にかけられているcssの情報を取得

        const marginValue = h1Styles.getPropertyValue(property);//margin-topの値を取り出す（pxが含まれるため、string）
        const n = marginValue.split(/\s+/);
        //const n = parseInt(marginValue, 10);//string→numberに変換

        //return n;
        console.log(n);
        console.log(marginValue);

        const number =[];
        n.forEach(elem => {
            number.push(parseInt(elem, 10));
        });

        console.log(number);//空白が入る
    }

    getmarginTop('h2', 'margin');
}