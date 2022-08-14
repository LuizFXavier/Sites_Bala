const changeLang = (lang) => {

    const car = document.getElementById('car')
    const post = document.getElementById("post")
    const texto = document.getElementById('texto')
    const copy = document.getElementById('copyRight')

    if (lang == "PT-BR") {

        car.innerHTML = `Carro:`
        post.innerHTML = `Postado por Xavier Luiz 10/5/2022`
        texto.innerHTML = `\n            O segmento de picapes médias tem uma renovação natural mais lenta,\n            
        mas a <strong><abbr title="Carro da Plebe">Volkswagen</abbr></strong> Amarok abusa dessa característica: a geração atual\n            
        completa 10 anos de mercado. Enquanto não chega a próxima\n            
        atualização, a marca optou por investir em desempenho com a versão\n            
        V6. E agora a picape mais rápida do <a href="https://www.cbf.com.br" target="_blank">Brasil</a> ficou mais potente —\n            ainda que seu preço tenha subido na mesma proporção!\n `
        copy.innerHTML = `© ${new Date().getFullYear()} - Luiz Xavier e Wilker von Almeida- Todos os Direitos Reservados`

    } else {

        car.innerHTML = `Wagen:`
        post.innerHTML = `Geschrieben von Xavier Luiz 10/5/2022`
        texto.innerHTML = `\n            Das Segment der mittelgroßen Pickups hat einen langsameren natürlichen Umsatz,\n            
        aber <strong><abbr title="Volkswagen">Carro do Povo</abbr></strong> Amarok missbraucht diese Eigenschaft: die aktuelle Generation\n            
        vollendet 10 Jahre auf dem Markt. Bis der nächste kommt\n            
        update hat sich die Marke entschieden, mit dem in Leistung zu investieren\n            
        V6. Und jetzt der schnellste Pickup der Welt <a href="https://www.cbf.com.br" target="_blank">Brasilien</a> potenter geworden —\n`
        copy.innerHTML = `© ${new Date().getFullYear()} - Luiz Xavier e Wilker von Almeida- Alle Rechte vorbehalten`

    }

}