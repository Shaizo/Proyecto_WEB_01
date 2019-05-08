$(document).ready(function() {

    
    if(window.location.href.indexOf('index') > -1){
    //Añadir articulos 
    //POST
    var posts = [{
            titulo: 'Articulo 1',
            fecha: 'Publicado ' + new Date(),
            contenido: 'Contenido Articulo 1',
        },
        {
            titulo: 'Articulo 2',
            fecha: new Date(),
            contenido: 'Contenido Articulo 2',
        },
        {
            titulo: 'Articulo 3',
            fecha: new Date(),
            contenido: 'Contenido Articulo 3',
        },
        {
            titulo: 'Articulo 4',
            fecha: new Date(),
            contenido: 'Contenido Articulo 4',
        },
    ];

    posts.forEach((item, index) => {
        var articulo =
            `<div class="col-sm-12">
                <nav class="navbar navbar-light no-padding my-2">
                    <div>
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0 jus">
                            <li class="nav-item">
                                <h2 class="bold-600">${item.titulo}</h2>
                                <footer class="blockquote-footer">${item.fecha}</footer>
                            </li>
                        </ul>
                    </div>
                    <h6 class="bk-verde text-white p-2 text-center mt-2">92 comentarios</h6>
                </nav>
                <p class="text-justify">${item.contenido}</p>
                <hr />
            </div>`;

        $('#contenedor-articulos').append(articulo);
    });

}

    //Scroll arriba de la web
    $('#subir').click(function() {
        /* Act on the event */
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    //Login Falso
    $('#login form').submit(function(event) {
        /* Act on the event */
        localStorage.setItem("form_name", $('#form_name').val());
        
    });

    var form_name = localStorage.getItem("form_name");

    if (form_name != null || form_name != undefined) {
        var texto_ipsum = $('#nombre_usuario');
        texto_ipsum.html("Bienvenido,&nbsp;<b>" + form_name + "</b>");
        texto_ipsum.parent().append('<a class="btn btn-verde my-2" id="logout">Logout</a>')
        $('#login').hide();

        $('#logout').click(function(event) {
            /* Act on the event */
            localStorage.clear();
            location.reload();
        });
    }



});

localStorage.setItem(tema_actual, 'verde');

//Cambiador de temas
var tema_actual = localStorage.getItem(tema_actual);

function cambiarTema(color) {
    if (color == tema_actual) {} else {
        var bk_viejo = 'bk-' + tema_actual;
        var btn_viejo = 'btn-' + tema_actual;

        var bk_nuevo = 'bk-' + color;
        var btn_nuevo = 'btn-' + color;

        $("." + bk_viejo).each(function(index, value) {
            $(this).removeClass(bk_viejo);
            $(this).addClass(bk_nuevo);
        });
        $("." + btn_viejo).each(function(index, value) {
            $(this).removeClass(btn_viejo);
            $(this).addClass(btn_nuevo);
        });
        localStorage.setItem(tema_actual, color);
        tema_actual = localStorage.getItem(tema_actual);
    }
}

//Login falso