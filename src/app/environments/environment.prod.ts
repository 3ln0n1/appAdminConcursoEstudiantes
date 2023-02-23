// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,

  apiURL:'https://10.85.3.21:9443/concursoestudiantes-web/api',
  URL_HOME: 'http://localhost:58953',
  

  // URLs EVENTOS//
  URL_TIPOEVENTO:'/tiposEventos',

  //URLs SEMINARIOS//
  URL_SEMINARIO:'/seminarios',
  URL_FORMULARIOS_BY_IDSEMINARIO:'/formulariosseminarios/bySeminario/',
  //URLs PARTICIPANTES
  URL_PARTICIPANTES_SEMINARIOS:'/participantesseminarios/bySeminario',

  //ESTUDIANTES//
  URL_ESTUDIANTES:'/estudiantes',


  //URLs CONCURSOS//
  URL_CONCURSOS:'/concursos'

  
}