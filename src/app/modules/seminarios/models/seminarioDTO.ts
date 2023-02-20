export interface Seminario {
    id:number; 
    cveSeminario:string;
    descripcion:string;
    anio:string;
    folio:string;
    tipoEvento:string;
    fechaInicio:string;
    fechaFinal:string;
    acciones:string;
    activoInactivo:string;
    accion:string;
  
  }


  



    export interface Link {
        rel: string;
        href: string;
    }

    export interface Link2 {
        rel: string;
        href: string;
    }

    export interface IdTipoEvento {
        id: number;
        links: any[];
        descripcion: string;
    }

    export interface IdSeminario {
        id: number;
        links: any[];
        descripcion: string;
        cveSeminario: string;
        activo: boolean;
        fechaCreacion: string;
        anio: number;
        folio: number;
        version: number;
        fechaInicio: number;
        fechaFinal: number;
        idTipoEvento: IdTipoEvento;
    }

    export interface Resultado {
        id: number;
        links: Link2[];
        titulo: string;
        descripcion: string;
        fecha: string;
        tema: string;
        horarios: string;
        contacto: string;
        imagen: string;
        estado: string;
        botonRegistro: boolean;
        fechaCreacion: string;
        idSeminario: IdSeminario;
    }

    export interface Formulario {
        size: number;
        link: Link;
        resultados: Resultado[];
    }







