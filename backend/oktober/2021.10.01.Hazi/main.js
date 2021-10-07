
	$(document).ready(function(){
	
		$(document).on('click','#show_form_insert',function(){
			$("#form_insert").css("display","block");
		});
		
		$(document).on('click','#cancel',function(){
			$("#input_title").val("");
			$("#input_content").val("");						 
			$("#input_author").val("");						 
			$("#input_createdate").val("");			
			$("#form_insert").css("display","none");
		});
		
		$.ajax({
			url: "select/",
			type: 'GET',
			contentType: 'application/json; charset=utf-8',
			dataType: 'json',
			async: false,
			success: function(res) {
				if (res.success==1){
					var sorok = "";
						for(var i=0; i<res.allblogs.length; i++ ){
							sorok += "<tr id='d"+res.allblogs[i].blog_id+"'>";
								sorok += "<td id='title_"+res.allblogs[i].blog_id+"'>";
									sorok += res.allblogs[i].blog_title;
								sorok += "</td>";
								sorok += "<td id='content_"+res.allblogs[i].blog_id+"'>";
									sorok += res.allblogs[i].blog_content;
								sorok += "</td>";
								sorok += "<td id='author_"+res.allblogs[i].blog_id+"'>";
									sorok += res.allblogs[i].blog_author;
								sorok += "</td>";
								sorok += "<td id='createdate_"+res.allblogs[i].blog_id+"'>"
									sorok += res.allblogs[i].blog_createdate;
								sorok += "</td>";
								sorok += "<td class='delete' data-id='"+res.allblogs[i].blog_id+"'>";
									sorok += "törlés";
								sorok += "</td>";
								sorok += "<td class='update_form' data-id='"+res.allblogs[i].blog_id+"'>";
									sorok += "módosítás";
								sorok += "</td>";
							sorok += "</tr>";
						}
					$("table").append(sorok);
				}
				if (res.success==0){
					// ...
				}					
			}
		});			
		
		$(document).on('click','.update_form',function(){
			var id = $(this).data('id');			
			var title = $(`#title_${id}`).text();
			var content = $(`#content_${id}`).text();
			var author = $(`#author_${id}`).text();
			var createdate = $(`#createdate_${id}`).text();
			$("#input_title").val(title);
			$("#input_content").val(content);	
			$("#input_author").val(author);	
			$("#input_createdate").val(createdate);	
			$("#id").val(id);	
			$("#form_insert").css("display","block");
			$("#insert").css("display","none");
			$("#update").css("display","block");
		});
		
		$(document).on('click','#update',function(){
			var data = { 
				id:$("#id").val(),
				blog_title:$("#input_title").val(), 
				blog_content:$("#input_content").val(),
				blog_author:$("#input_author").val(),
				blog_createdate:$("#input_createdate").val()
			};		
			$.ajax({
				url: "update/",
				type: 'POST',
				data: JSON.stringify(data),
				contentType: 'application/json; charset=utf-8',
				dataType: 'json',
				async: false,
				success: function(res) {
					var id = $("#id").val();
					$(`#title_${id}`).text($("#input_title").val());
					$(`#content_${id}`).text($("#input_content").val());				
					$(`#author_${id}`).text($("#input_author").val());				
					$(`#createdate_${id}`).text($("#input_createdate").val());				
					$("#input_title").val("");
					$("#input_content").val("");						 
					$("#input_author").val("");						 
					$("#input_createdate").val("");	
					$("#form_insert").css("display","none");
					$("#insert").css("display","block");
					$("#update").css("display","none");					
				}
			});				
		});	
		
		$(document).on('click','.delete',function(){
			var id = $(this).data('id');
			var data = { id:id };		
			$("#form_insert").css("display","none");
			$("#input_title").val("");
			$("#input_content").val("");						 
			$("#input_author").val("");						 
			$("#input_createdate").val("");				
			$.ajax({
				url: "delete/",
				type: 'POST',
				data: JSON.stringify(data),
				contentType: 'application/json; charset=utf-8',
				dataType: 'json',
				async: false,
				success: function(res) {
					$(`#d${id}`).empty();
					$(`#d${id}`).remove();
					$("#input_title").val("");
					$("#input_content").val("");						 
					$("#input_author").val("");						 
					$("#input_createdate").val("");						 
				}
			});
		});	
		
		$(document).on('click','#insert',function(){
			var data = { 
				blog_title:$("#input_title").val(), 
				blog_content:$("#input_content").val(),
				blog_author:$("#input_author").val(),
				blog_createdate:$("#input_createdate").val()
			};	
			$.ajax({
				url: "insert/",
				type: 'POST',
				data: JSON.stringify(data),
				contentType: 'application/json; charset=utf-8',
				dataType: 'json',
				async: false,
				success: function(res) {
					var uj_sor = "";
					uj_sor += "<tr id='d"+res.id+"'>";
						uj_sor += "<td id='title_"+res.id+"'>";
							uj_sor += $("#input_title").val();
						uj_sor += "</td>";
						uj_sor += "<td id='content_"+res.id+"'>";
							uj_sor += $("#input_content").val();
						uj_sor += "</td>";
						uj_sor += "<td id='author_"+res.id+"'>";
							uj_sor += $("#input_author").val();
						uj_sor += "</td>";
						uj_sor += "<td id='createdate_"+res.id+"'>";
							uj_sor += $("#input_createdate").val();
						uj_sor += "</td>";
						uj_sor += "<td class='delete' data-id='"+res.id+"'>";
							uj_sor += "törlés";
						uj_sor += "</td>";
						uj_sor += "<td class='update_form' data-id='"+res.id+"'>";
							uj_sor += "módosítás";
						uj_sor += "</td>";
					uj_sor += "</tr>";
							
					$("table > tbody:last-child").append(uj_sor);
					$("#input_title").val("");
					$("#input_content").val("");						 
					$("#input_author").val("");						 
					$("#input_createdate").val("");			
					$("#form_insert").css("display","none");					 
				}
			});				
		});	
		
	});
