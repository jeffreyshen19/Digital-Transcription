function accept(e){$.post("/verify/accept",{id:e}).done(function(){location.reload()})}function reject(e){$.post("/verify/reject",{id:e}).done(function(){location.reload()})}getUrlParameter("handwritten")&&$("select#handwritten").val(getUrlParameter("handwritten")),getUrlParameter("collection")&&$("select#collection").val(getUrlParameter("collection")),getUrlParameter("languages")&&$("select#languages").val(getUrlParameter("languages")),$("select#handwritten").change(function(){updateURLParameter(window.location.href,"handwritten",$(this).children("option:selected").val())}),$("select#collection").change(function(){updateURLParameter(window.location.href,"collection",$(this).children("option:selected").val())}),$("select#languages").change(function(){updateURLParameter(window.location.href,"languages",$(this).children("option:selected").val())}),$(document).ready(function(){$("#img").css("max-width",$("#img").width()),$("#img").resizable({handleSelector:"#splitter",resizeHeight:!1})}),$(document).resize(function(){$("#img").css("max-width",$("#img").width())});