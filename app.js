$('#boton').on('click',function(event){

    $.ajax({
        url: 'http://mindicador.cl/api',
        method: 'GET'
      }).then(function(data){
        console.log(data)
        $('#uf').text('$ ' + data.uf.valor);
        $('#eu').text('$ ' + data.euro.valor);
        $('#dl').text('$ ' + data.dolar.valor);
        $('#utm').text('$ ' + data.utm.valor);
      });

})


$('#boton2').on('click',function(event){
	var value =  parseFloat($("#valor").val());

	$.ajax({
        url: 'http://mindicador.cl/api',
        method: 'GET'
      }).then(function(data){
      	var dolar = parseFloat(data.dolar.valor);
		var euro = parseFloat(data.euro.valor);

        $('#pesos').text(value + ' pesos equivalen a:')
        $('#dolares').text((value / dolar).toFixed(2) + ' dolares.');
        $('#euros').text((value / euro).toFixed(2) + ' euros. ');
    });

})


$('#boton3').on('click',function(event){
	var value2 =  parseFloat($("#valor2").val());

	$.ajax({
        url: 'http://mindicador.cl/api',
        method: 'GET'
      }).then(function(data){
      	var dolar2 = parseFloat(data.dolar.valor);

        $('#dolares1').text(value2 + ' dolares equivalen a:')
        $('#pesos1').text((value2 * dolar2).toFixed(2) + ' pesos chilenos.');
    });
})