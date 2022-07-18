### Receta form tipo template
1 - importamos en app-module.ts la libreria FormsModule (la misma que TWO WAY DATA)

      2 - Creamos la maqueta de formulario en el html con la etique form.

      3 - A este form le colocamos un nombre o template de las misma forma que lo haciamos en directivas (ngIf else #bloqueElse). E igualamos ese nombre a ngForm de esta forma
                        #nombreForm = "ngForm"

      4 - Crea un evento de tipo submit que en este caso se llama (ngSubmit)="funcionTs(nombreForm)". Ojo funcionTs es un nombre generico. A esta funcion le pasaremos obligatoriamente como parametro el nombre formulario creado antes.

      5 - todos lo campos del formulario (input, chackbox, select, textarea....) deberan llevar un name="" y un atributo ngModel. Ojo sin parentesis ni corchetes.

      6 - la funcion devolvera un objeto json con cada uno de los campos de formulario con su name=""

### Receta form tipo model.

      1 - Importamos la libreria al app.module.ts que ReactiveFormsModule

      2 -Creamos un atributo dentro de la etiqueta form que se llama formGroup  que contendrá el nombre del formulario.

      3 - Necesitamos implementar el eveno ngSubmit que llame a una funcion que NO RECIBE PARAMETROS.
      la funcion te genera un objeto JSON.

      4 - A cada campo del formulario (input, select, textarea,....) solo le tenemos que añadir un atributo formControlName con el nombre del campo.

      5 - Inicializamos dentro del ts el objeto FormGroup creado en punto 2, donde tenemos obligación de dar de alta cada uno de los campos. (aqui es donde ejecutarmos los validadores)


      ##Estados del formulario

              - Pristine (limpio)   ------- Dirty(sucio)
              - Invalid (invalido) ------  valid(valido)
              - untouched (no tocado) ---- touched( tocado )
              - unsubmitted (sin enviar) --- submitted (enviado)
