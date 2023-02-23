    export interface Seminario {
        id: number;
        descripcion: string;
        cveSeminario: string;
        activo: boolean;
        fechaCreacion: string;
        anio: number;
        folio: number;
        version: number;
        fechaInicio: string;
        fechaFinal: string;
        idTipoEvento: IdTipoEvento;
        //propiedades genericas
        acciones:string,
        accion:string;
    }
    export interface Seminario2 {
        id: number;
        descripcion: string;
        cveSeminario: string;
        activo: boolean;
        fechaCreacion: string;
        anio: number;
        folio: number;
        version: number;
        fechaInicio: string;
        fechaFinal: string;
        idTipoEvento: IdTipoEvento;
    }


    export interface IdTipoEvento {
        id: number;
        descripcion: string;
    }

    export interface IdSeminario {
        id: number;
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
        resultados: Resultado[];
    }







