<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>TechStore - Catálogo</title>
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⬡</text></svg>">
<link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin>
<link rel="preconnect" href="https://www.gstatic.com" crossorigin>
<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;700;900&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-database-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-auth-compat.js"></script>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#0c0c10;font-family:'DM Sans','Segoe UI',system-ui,sans-serif;color:#e4e4e7;overflow-x:hidden}
@keyframes fadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
button{transition:all .15s ease;font-family:inherit;cursor:pointer}
button:hover{filter:brightness(1.12)}button:active{transform:scale(.97)}
::-webkit-scrollbar{width:5px}::-webkit-scrollbar-thumb{background:rgba(255,255,255,.08);border-radius:3px}
input:focus,textarea:focus{border-color:rgba(167,139,250,.4)!important;outline:none}
.chv:hover{transform:translateY(-3px);box-shadow:0 12px 40px rgba(0,0,0,.4)!important}
.shv:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.08)!important}
</style>
</head>
<body>
<div id="root"></div>
<script src="app.js"></script>
</body></html>
