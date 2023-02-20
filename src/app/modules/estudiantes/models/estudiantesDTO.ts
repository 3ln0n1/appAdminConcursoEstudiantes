

    export interface Link {
        rel: string;
        href: string;
    }

    export interface Link2 {
        rel: string;
        href: string;
    }

    export interface IdGenero {
        id: number;
        links: any[];
        nombreGenero: string;
    }

    export interface IdConcurso {
        id: number;
        links: any[];
        descripcion: string;
        cveConcurso: string;
        activo: boolean;
        fechaCreacion: string;
        anio: number;
        folio: number;
        version: number;
    }

    export interface Resultado {
        id: number;
        links: Link2[];
        nombreEstudiante: string;
        primerAP: string;
        segundoAP: string;
        estado: string;
        idEstado: number;
        idMunicipio: number;
        municipio: string;
        idGenero: IdGenero;
        correoElectronico: string;
        celular: string;
        capitan: boolean;
        fechaCreacion: string;
        folio: string;
        curp: string;
        calle:string;
        numeroExterior:string;
        numeroInterior:string;
        colonia:string;
        codigoPostal:string;
        idConcurso: IdConcurso;
        anio: number;
    }

    export interface Estudiante {
        size: number;
        link: Link;
        resultados: Resultado[];
    }



