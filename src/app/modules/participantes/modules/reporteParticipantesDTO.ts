
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

    export interface IdGenero {
        id: number;
        links: any[];
        nombreGenero: string;
    }

    export interface IdFormacion {
        id: number;
        links: any[];
        nombreFormacion: string;
    }

    export interface Resultado {
        id: number;
        links: Link2[];
        idSeminario: IdSeminario;
        idGenero: IdGenero;
        idFormacion: IdFormacion;
        nombre: string;
        primerApellido: string;
        segundoApellido: string;
        nacionalidad: string;
        correoElectronico: string;
        afiliacionAcademica: string;
        profesion: string;
        fechaCreacion: string;
        folio: string;
    }

    export interface Participante {
        size: number;
        link: Link;
        resultados: Resultado[];
    }



