function reset(e){$("#text").val($("#lines").html())}function submitTranscription(e){$.post("/transcribe/finish",{id:e,transcription:$("#text").val(),languages:$("#language-editor").val()}).done(function(){location.reload()})}getUrlParameter("handwritten")&&$("select#handwritten").val(getUrlParameter("handwritten")),getUrlParameter("collection")&&$("select#collection").val(getUrlParameter("collection")),getUrlParameter("languages")&&$("select#languages").val(getUrlParameter("languages")),$("select#handwritten").change(function(){updateURLParameter(window.location.href,"handwritten",$(this).children("option:selected").val())}),$("select#collection").change(function(){updateURLParameter(window.location.href,"collection",$(this).children("option:selected").val())}),$("select#languages").change(function(){updateURLParameter(window.location.href,"languages",$(this).children("option:selected").val())}),$(document).ready(function(){$("#img").css("max-width",$("#img").width()),$("#img").resizable({handleSelector:"#splitter",resizeHeight:!1})}),$(document).resize(function(){$("#img").css("max-width",$("#img").width())});