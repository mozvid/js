function reveal() { for (var A = 0; A < view_elements.length; A++) { var q = 0, g = view_elements[A]; do isNaN(g.offsetTop) || (q += g.offsetTop); while (g = g.offsetParent); var B = window.pageYOffset, Q = window.innerHeight, C = 0, g = view_elements[A]; do isNaN(g.offsetLeft) || (C += g.offsetLeft); while (g = g.offsetParent); var I = window.pageXOffset, w = window.innerWidth; q > B && B + Q > q && C > I && I + w > C ? (view_elements[A].src = view_elements[A].getAttribute("data-qazy-src"), console.log(view_elements[A].src), view_elements.splice(A, 1), A--) : console.log("offsetParentTop" + q + " pageYOffset" + B + " viewportHeight" + window.innerHeight) } } function qazy_list_maker() { for (var A = document.querySelectorAll("img[data-qazy][data-qazy='true']"), q = 0; q < A.length; q++) { view_elements.push(A[q]), A[q].setAttribute("data-qazy", "false"); var g = A[q].src; A[q].setAttribute("data-qazy-src", g), A[q].src = qazy_image } } var qazy_image = qazy_image || "data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibGRzLW1lc3NhZ2UiIHdpZHRoPSI4MHB4IiAgaGVpZ2h0PSI4MHB4IiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwIDUwKSI+PGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjciIGZpbGw9IiNlMTViNjQiIHRyYW5zZm9ybT0ic2NhbGUoMC45OTI3NSAwLjk5Mjc1KSI+ICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBiZWdpbj0iLTAuMzc1cyIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iMC4zIDAgMC43IDE7MC4zIDAgMC43IDEiIHZhbHVlcz0iMDsxOzAiIGtleVRpbWVzPSIwOzAuNTsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPjwvY2lyY2xlPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MCA1MCkiPjxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI3IiBmaWxsPSIjZjQ3ZTYwIiB0cmFuc2Zvcm09InNjYWxlKDAuNzczNjA1IDAuNzczNjA1KSI+ICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBiZWdpbj0iLTAuMjVzIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIwLjMgMCAwLjcgMTswLjMgMCAwLjcgMSIgdmFsdWVzPSIwOzE7MCIga2V5VGltZXM9IjA7MC41OzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PC9jaXJjbGU+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYwIDUwKSI+PGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjciIGZpbGw9IiNmOGIyNmEiIHRyYW5zZm9ybT0ic2NhbGUoMC40MjUyNSAwLjQyNTI1KSI+ICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBiZWdpbj0iLTAuMTI1cyIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iMC4zIDAgMC43IDE7MC4zIDAgMC43IDEiIHZhbHVlcz0iMDsxOzAiIGtleVRpbWVzPSIwOzAuNTsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPjwvY2lyY2xlPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4MCA1MCkiPjxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI3IiBmaWxsPSIjYWJiZDgxIiB0cmFuc2Zvcm09InNjYWxlKDAuMTEzNDE4IDAuMTEzNDE4KSI+ICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBiZWdpbj0iMHMiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9IjAuMyAwIDAuNyAxOzAuMyAwIDAuNyAxIiB2YWx1ZXM9IjA7MTswIiBrZXlUaW1lcz0iMDswLjU7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L2NpcmNsZT48L2c+PC9zdmc+", view_elements = []; window.addEventListener("resize", reveal, !1), window.addEventListener("scroll", reveal, !1); var intervalObject = setInterval(function() { qazy_list_maker() }, 50); window.addEventListener("load", function() { clearInterval(intervalObject), qazy_list_maker(), reveal() }, !1);

document.addEventListener('contextmenu', event => event.preventDefault());

// To disable F12 options
document.onkeypress = function (event) {
	event = (event || window.event);
	if (event.keyCode == 123 || event.keyCode == 86 || event.keyCode == 85 || event.keyCode == 67 || event.keyCode === 17){
		return false;
	}
}
document.onmousedown = function (event) {
	event = (event || window.event);
	if (event.keyCode == 123 || event.keyCode == 86 || event.keyCode == 85 || event.keyCode == 67 || event.keyCode === 17) {
		return false;
	}
}
document.onkeydown = function (event) { 
	event = (event || window.event);
		if (event.keyCode == 123 || event.keyCode == 86 || event.keyCode == 85 || event.keyCode == 67 || event.keyCode === 17) {
		return false;
	}
}
